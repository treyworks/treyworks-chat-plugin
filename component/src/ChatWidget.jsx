import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import PulseLoader from "react-spinners/PulseLoader";
import classNames from 'classnames';
import { marked } from 'marked';

import { newMessage, setFocus } from './utils/chat-utils';

import logoUrl from './assets/powered-by-treyworks.png';

import SendIcon from './icons/sendIcon';
import ShowIcon from './icons/showIcon';
import HideIcon from './icons/hideIcon';
import CloseIcon from './icons/close';

const ChatWidget = ({ iconColor, toggleChat, widgetID, sticky }) => {
    // Initialize state vars
    const [messages, setMessages] = useState(twChatMessages[widgetID]);
    const [messageText, setMessageText] = useState('');
    const [isWaiting, setIsWaiting] = useState(false);
    const [showDisclaimer, setShowDisclaimer] = useState(false);
    const [threadID, setThreadID] = useState(0);
    const [characterCount, setCharacterCount] = useState(0);
    const lastElementRef = useRef(null);
    const parentRef = useRef(null);

    // Get global settings 
    const chatSettings = window.twChatPluginSettings;
    const maxCharacters = chatSettings.tw_chat_max_characters;

    // Close SVG color
    const rootStyle = getComputedStyle(document.documentElement);
    const closeColor = rootStyle.getPropertyValue('--tw-chat-header-close-color').trim();
    
    // Set focus when instantiated
    useEffect(() => {
        if (sticky) {
            setFocus(widgetID);
        }
    }, []);

    // Set up effect for new messages
    useEffect(() => {
        // Scroll to  new message
        if (lastElementRef.current && parentRef.current) {
            lastElementRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }
    }, [messages]);

    // Function to send a new message
    const handleMessageSubmit = (event) => {
        event.preventDefault();

        // Show waiting indicator
        setIsWaiting(true);
        
        // Prepare data to be sent
        const data = {
            widget_id: widgetID,
            message: messageText,
            // _wpnonce: chatSettings.nonce
        };
        const axiosConfig = {
            headers: {
                'X-WP-Nonce': chatSettings.nonce
            }
        };

        // Add thread ID if one exists. 
        // The endpoint will create a new thread if nothing is passed.
        if (threadID) {
            data.thread_id = threadID;
        }

        // Add new message to history
        twChatMessages[widgetID] = [...messages, newMessage(messageText, 'user')];
        
        // Set messages state to current history array
        setMessages(twChatMessages[widgetID])

        // Send the message to the plugin enpoint
        axios.post(`${chatSettings.root}tw-chat-assistant/v1/chat-response/`,
            data, axiosConfig)
        .then(response => {
            // Check length of returned data
            if (response.data.length > 0) {
            // if (response.data.data.length > 0) {
                // Remove annotations
                const newText = response.data.replace(/(?:\r\n|\r|\n)/g, '<br />').replace(/【\d+†source】/g, "");
                // const newText = response.data.data[0].content[0].text.value.replace(/(?:\r\n|\r|\n)/g, '<br />').replace(/【\d+†source】/g, "");

                // Add response to messages state to update UI
                setMessages([...twChatMessages[widgetID], newMessage(newText, 'assistant')]); 
            }
            setMessageText('');
            setCharacterCount(0);
            setIsWaiting(false);
            setThreadID(response.data.thread_id);
            setFocus(widgetID);
            
          })
          .catch(error => {
            console.error('Error fetching messages:', error);
            setMessages([...twChatMessages[widgetID], newMessage(chatSettings.tw_chat_error_message, 'error')]); 
            setIsWaiting(false);
          });
    };

    // Handle message input change
    const handleMessageTextChange = (event) => {
        const newText = event.target.value;
        let newCharacterCount = newText.length;

        // Enforce maxCharacters character limit if set
        if (maxCharacters) {
            if (newCharacterCount > maxCharacters) {
                event.target.value = newText.slice(0, maxCharacters);
                newCharacterCount = maxCharacters;
            }
        }
  
        setMessageText(event.target.value);
        setCharacterCount(newCharacterCount);
    };

    // Toggle disclaimer text
    const toggleDisclaimerText= () => {
        return !showDisclaimer ? 
            <><ShowIcon iconColor={iconColor} /> Show Disclaimer </> :
            <><HideIcon iconColor={iconColor} /> Hide Disclaimer</>
    }

    // Component classes
    const componentClasses = classNames(
        "tw-chat-interface",
        { "sticky": sticky },
        { "embedded": !sticky }
    );
    
    // Render component
    return (
    <div className={componentClasses}>
        <div className="tw-chat-header">
            <span>{window.twChatWidgetSettings[widgetID].tw_chat_widget_name}</span>
        { sticky == 1 && 
            <button 
                className="close" 
                onClick={() => toggleChat()}
                aria-label="Close chat interface">
                <CloseIcon iconColor={closeColor} />
            </button>
        }
        </div>
        <div ref={parentRef} className="tw-chat-messages" id={`tw-chat-messages-${widgetID}`}>
        {messages.map((message, index) => {
            const isLastElement = index === messages.length - 1;

            return (
            <p 
                key={index} 
                ref={isLastElement ? lastElementRef : null}
                id={`tw-chat-message-${widgetID}-${index}`} 
                className={`message ${message.role}`}
            >
                <span dangerouslySetInnerHTML={{__html: marked.parse(message.content)}}/>
            </p>
            );
        })}
        {isWaiting && <div className="waiting-indicator"><PulseLoader color="#333" /></div>}
        </div>
        <form
            onSubmit={handleMessageSubmit} 
            className={isWaiting ? "tw-chat-form tw-chat-visibility-0" : "tw-chat-form"}>
            
            <div className="tw-chat-input-container">
                <label htmlFor={`message-text-${widgetID}`}>Send Message</label>
                <input placeholder="Enter your message..." id={`message-text-${widgetID}`} type="text" onChange={handleMessageTextChange} value={messageText} name="message" required="required" />
            { maxCharacters && 
                <div className="tw-chat-char-count">
                    <span className={characterCount == maxCharacters ? "tw-chat-max-characters" : ""}>{characterCount} / {maxCharacters} characters</span>
                </div>
            }
            </div>
            <button><SendIcon iconColor={iconColor} /><span className="sr-only">Send Message</span></button>
        </form>
        <div className='tw-chat-disclaimer-container'>
            { showDisclaimer &&
                <div dangerouslySetInnerHTML={{__html: chatSettings.tw_chat_disclaimer}} />
            }
            <div className='tw-chat-disclaimer-links'>
                { chatSettings.tw_chat_disclaimer && 
                <button onClick={() => setShowDisclaimer(!showDisclaimer) }>
                    { toggleDisclaimerText() }
                </button>
                }
                <a className='brand-link' href="https://treyworks.com/?utm_source=tw-chat-ui&utm_medium=referral" target="_blank">
                    <img src={logoUrl} alt="Powered by Treyworks" />
                </a>
            </div>
        </div>
    </div>
    );
};

export default ChatWidget;
