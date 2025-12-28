import React from 'react'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import PulseLoader from "react-spinners/PulseLoader"
import classNames from 'classnames'
import { marked } from 'marked'
import markedCodePreview from 'marked-code-preview'

import { newMessage, setFocus } from '../utils/chat-utils'

import ChatContent from './ChatContent'
import SendIcon from '../icons/sendIcon'
import CloseIcon from '../icons/close'
import FullscreenIcon from '../icons/fullscreen'

const ChatWidget = ({ toggleChat, widgetID, width, height, sticky }) => {
    // Initialize state vars
    const [messages, setMessages] = useState(twChatMessages[widgetID])
    const [messageText, setMessageText] = useState('')
    const [isWaiting, setIsWaiting] = useState(false)

    const [characterCount, setCharacterCount] = useState(0)
    const [suggestedAnswers, setSuggestedAnswers] = useState([])
    const [isFullscreen, setIsFullscreen] = useState(false)
    const lastElementRef = useRef(null)
    const parentRef = useRef(null)
    const waitingIndicatorRef = useRef(null)

    // Get global settings 
    const chatSettings = window.twChatPluginSettings
    const widgetSettings = window.twChatWidgetSettings[widgetID]
    const maxCharacters = chatSettings.tw_chat_max_characters
    const iconColor = window.twChatPluginSettings.iconColor
    const sendButtonImage = chatSettings.tw_chat_send_button_image || null

    // Close SVG color
    const rootStyle = getComputedStyle(document.documentElement)
    const headerButtonColor = rootStyle.getPropertyValue('--tw-chat-header-button-color').trim()

    // Toggle fullscreen mode
    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };

    // Set focus when instantiated
    useEffect(() => {
        // Check to see if widget has messages
        if (window.twChatMessages[widgetID].length <= 1) {
            // Add default suggested answers if set
            if (widgetSettings.tw_chat_suggested_answers) {
                setSuggestedAnswers(widgetSettings.tw_chat_suggested_answers.split(','))
            }
        }
    }, [])

    // Set up effect for new messages
    useEffect(() => {
        // Scroll to  new message
        if (lastElementRef.current && parentRef.current) {
            if (messages.length > 1) {
                lastElementRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
            }
        }
    }, [messages])

    // Effect to scroll waiting indicator into view
    useEffect(() => {
        if (isWaiting && waitingIndicatorRef.current) {
            waitingIndicatorRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
        }
    }, [isWaiting])

    // Function to send a new message
    const handleMessageSubmit = (event, chosenAnswer) => {

        // Check if messageText and chosenAnswer are empty
        if (messageText.trim() === '' && chosenAnswer.trim() === '') {
            return 
        }

        // Prevent default form event if present
        if (event) { 
            event.preventDefault()
        }

        // Show waiting indicator
        setIsWaiting(true)

        // Send chosen answer if passed. Else send messageText from form
        const newMessageText = chosenAnswer ? chosenAnswer : messageText

        // Add new message to history
        twChatMessages[widgetID] = [...messages, newMessage(newMessageText, 'user')]

        // Set messages state to current history array
        setMessages(twChatMessages[widgetID])
        
        // Prepare data to be sent
        const data = {
            widget_id: widgetID,
            messages: twChatMessages[widgetID]
        }
        
        // Set request header
        const axiosConfig = {
            headers: {
                'X-WP-Nonce': chatSettings.nonce
            }
        }

        // Send the message to the plugin endpoint
        axios.post(chatSettings.api_url,
            data, axiosConfig)
        .then(response => {
            // Get returned data
            const responseMessage = response.data.message
            let replyText
            

            // Check length of returned data
            if (responseMessage.length > 0) {
                // is it a valid JSON response?
                try {
                    const responseObject = JSON.parse(responseMessage)
                    // get the message property value
                    replyText = responseObject.message

                    // set the suggested answers
                    if (responseObject.suggestedAnswers) {
                        setSuggestedAnswers(responseObject.suggestedAnswers)
                    }
                    window.twChatWidgetSettings[widgetID].suggestedAnswers = responseObject.suggestedAnswers
                } catch (error) {
                    // Treat it as a string
                    replyText = responseMessage
                }

                // Remove annotations
                const newText = replyText.replace(/(?:\r\n|\r|\n)/g, '<br />').replace(/【.*?†source】/g, "")
                // Add response to messages state to update UI
                setMessages([...twChatMessages[widgetID], newMessage(newText, 'assistant')])
                twChatMessages[widgetID] = [...twChatMessages[widgetID], newMessage(newText, 'assistant')]
            }
            setMessageText('')
            setCharacterCount(0)
            setIsWaiting(false)
           
            // Set input focus for sticky widgets only
            if (sticky) {
                setFocus(widgetID)
            }
            
          })
          .catch(error => {
            console.error('Error fetching messages:', error)
            setMessages([...twChatMessages[widgetID], newMessage(chatSettings.tw_chat_error_message, 'error')]) 
            setIsWaiting(false)
          })
    }

    // Handle keypress in textarea
    const handleKeyPress = (event) => {

        // Submit form on Enter key, but not when Shift+Enter is pressed
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleMessageSubmit(event);
        }
    };

    // Handle message input change
    const handleMessageTextChange = (event) => {
        const newText = event.target.value
        let newCharacterCount = newText.length

        // Enforce maxCharacters character limit if set
        if (maxCharacters) {
            if (newCharacterCount > maxCharacters) {
                event.target.value = newText.slice(0, maxCharacters)
                newCharacterCount = maxCharacters
            }
        }
  
        setMessageText(event.target.value)
        setCharacterCount(newCharacterCount)
    }

    // handle suggested answer click
    const handleSuggestAnswerClick = (answer) => {
        // Reset suggest answers
        setSuggestedAnswers([])

        // Submit form with chosen answer
        handleMessageSubmit(null, answer)
    }

    // Render Messages
    const renderMessages = () => {
        return messages.map((message, index) => {
            const isLastElement = index === messages.length - 1

            return (
            <div 
                key={index} 
                ref={isLastElement ? lastElementRef : null}
                id={`tw-chat-message-${widgetID}-${index}`} 
                className={`message ${message.role}`}
            >
                <ChatContent html={marked.use(markedCodePreview).parse(message.content ? message.content : 'Something went wrong.')} />
            </div>
            )
        })
    }

    // Render user message form
    const renderUserForm = () => {

        if (suggestedAnswers.length > 0) {
            // Show suggested answers as button list
            return (
            <div className="tw-chat-suggested-answers"> 
                {suggestedAnswers.map((answer, index) => {
                    return (
                    <button key={index} onClick={() => handleSuggestAnswerClick(answer)}>{answer}</button>
                    )
                })}
                { widgetSettings.tw_chat_dismiss_answers == "1" &&
                <button className="tw-chat-suggested-answers--clear" onClick={() => setSuggestedAnswers([])}>
                    { widgetSettings.tw_chat_dismiss_answers_text ?
                        widgetSettings.tw_chat_dismiss_answers_text
                    : "Type a different response."
                    }
                </button>
                }
            </div>
            )
        } else {
            // Display input form if no suggested answers found
            return (
            <form
                onSubmit={handleMessageSubmit} 
                className={isWaiting ? "tw-chat-form tw-chat-visibility-0" : "tw-chat-form"}>
                
                <div className="tw-chat-input-container">
                    <label htmlFor={`message-text-${widgetID}`}>Send Message</label>
                    <textarea 
                        placeholder="Enter your message..." 
                        id={`message-text-${widgetID}`} 
                        onChange={handleMessageTextChange} 
                        onKeyPress={handleKeyPress}
                        value={messageText} 
                        name="message" 
                        required="required" 
                        rows="1"
                    />
                { maxCharacters && 
                    <div className="tw-chat-char-count">
                        <span className={characterCount == maxCharacters ? "tw-chat-max-characters" : ""}>{characterCount} / {maxCharacters} characters</span>
                    </div>
                }
                </div>
                <button>
                    {sendButtonImage ? (
                        <img src={sendButtonImage} alt="Send Message" className="tw-chat-send-button-image" />
                    ) : (
                        <SendIcon iconColor={iconColor} />
                    )}
                    <span className="sr-only">Send Message</span>
                </button>
            </form>
            )
        }
    }

    // Component classes and style
    const componentClasses = classNames(
        "tw-chat-interface",
        { "sticky": sticky },
        { "embedded": !sticky },
        { "tw-chat-widget-fullscreen": isFullscreen }
    )
    let componentStyle = {}

    if (width) {
        componentStyle.width = width
    }
    if (height) {
        componentStyle.height = height
    }

    // Render component
    return (
    <div className={componentClasses} style={componentStyle}>
        <div className="tw-chat-header">
        { chatSettings.tw_chat_logo_url &&
            <img className="logo" src={chatSettings.tw_chat_logo_url} alt="Chat widget logo" />
        }
            <span>{window.twChatWidgetSettings[widgetID].tw_chat_widget_name}</span>
            <div className="tw-chat-header-actions">
                { sticky == 1 && 
                    <>
                    <button 
                        onClick={toggleFullscreen}
                        className="tw-chat-header-fullscreen"
                        aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                    >
                        <FullscreenIcon isFullscreen={isFullscreen} color={headerButtonColor} />
                    </button>
                    <button 
                        className="tw-chat-header-close" 
                        onClick={() => toggleChat()}
                        aria-label="Close chat interface">
                        <CloseIcon iconColor={headerButtonColor} />
                    </button>
                    </>
                }
            </div>
        </div>
        <div ref={parentRef} className="tw-chat-messages" id={`tw-chat-messages-${widgetID}`}>
            { renderMessages() }
            {isWaiting && <div ref={waitingIndicatorRef} className="waiting-indicator"><PulseLoader color="#333" /></div>}
        </div>
        <div className="tw-chat-form-container">
            { renderUserForm() }
            <div className='tw-chat-disclaimer-container'>
                { chatSettings.tw_chat_disclaimer &&
                    <div dangerouslySetInnerHTML={{__html: chatSettings.tw_chat_disclaimer}} />
                }
            </div>
        </div>
    </div>
    )
}

export default ChatWidget
