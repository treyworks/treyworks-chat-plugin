import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import PulseLoader from "react-spinners/PulseLoader";

import logoUrl from './assets/powered-by-treyworks.png';

import SendIcon from './icons/sendIcon';
import ShowIcon from './icons/showIcon';
import HideIcon from './icons/hideIcon';
import CloseIcon from './icons/close';

// Get chat settings 
const rootElement = document.getElementById('tw-chat-ui');
const chatSettings = JSON.parse(document.getElementById('tw-chat-ui-data').textContent);
const rootStyle = getComputedStyle(document.documentElement);
const closeColor = rootStyle.getPropertyValue('--tw-chat-header-close-color').trim();

/* Return a new message object */
const newMessage = (content, role) => {
    return {
        content: content,
        role: role
    }
};

// Set up global message history array
window.twChatMessages = [
    newMessage(chatSettings.greeting, "assistant")
];

const ChatInterface = ({ iconColor, toggleChat }) => {

    // Inistialize state vars
    const [messages, setMessages] = useState(window.twChatMessages);
    const [messageText, setMessageText] = useState('');
    const [isWaiting, setIsWaiting] = useState(false);
    const [showDisclaimer, setShowDisclaimer] = useState(false);
    const [threadID, setThreadID] = useState(0);
    const lastElementRef = useRef(null);
    
    useEffect(() => {
        setFocus();
    }, []);

    // Set up effect for new messages
    useEffect(() => {
        // Scroll to  new message
        if (lastElementRef.current) {
            lastElementRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const setFocus = () => {
        document.getElementById("messageText").focus();
    }

    // Function to send a new message
    const handleMessageSubmit = (event) => {
        event.preventDefault();

        // Show waiting indicator
        setIsWaiting(true);
        
        // Prepare data to be sent
        const data = {
            message: messageText
        };

        if (threadID) {
            data.threadID = threadID;
        }

        // add new message to history
        window.twChatMessages = [...messages, newMessage(messageText, 'user')];
        console.log(window.twChatMessages)
        // update UI
        setMessages(window.twChatMessages)

        // Here you would also send the message to the server
        axios.post('/wp-json/tw-chat-ui/v1/chat-response/', data)
          .then(response => {
            console.log(response.data);
            // const responseData = JSON.parse(response.data)
            if (response.data.data.length > 0) {
                setMessages([...window.twChatMessages, newMessage(response.data.data[0].content[0].text.value.replace(/(?:\r\n|\r|\n)/g, '<br />'), 'assistant')]); // Assuming the response has a messages array
            }
            setMessageText('');
            setIsWaiting(false);
            setThreadID(response.data.thread_id);
            setFocus();
            
          })
          .catch(error => {
            console.error('Error fetching messages:', error);
            setMessages([...window.twChatMessages, newMessage(chatSettings.error_message, 'error')]); 
          });
    };

    // Handle message input change
    const handleMessageTextChange = (event) => {
        setMessageText(event.target.value);
    };

    // Toggle disclaimer text
    const toggleDisclaimerText= () => {
        return !showDisclaimer ? 
            <><ShowIcon iconColor={iconColor} /> Show Disclaimer </> :
            <><HideIcon iconColor={iconColor} /> Hide Disclaimer</>
    }
    
    return (
    <div className="tw-chat-interface">
        <div className="tw-chat-header">
            <span>{chatSettings.assistant_name}</span>
            <button 
                className="close" 
                onClick={() => toggleChat()}
                aria-label="Close chat interface">
                <CloseIcon iconColor={closeColor} />
            </button>
        </div>
        <div className="tw-chat-messages" id="tw-chat-messages">
        {messages.map((message, index) => {
            const isLastElement = index === messages.length - 1;

            return (
            <p 
                key={index} 
                ref={isLastElement ? lastElementRef : null}
                id={`tw-chat-message-${index}`} 
                className={`message ${message.role}`}
            >
                <span dangerouslySetInnerHTML={{__html: message.content}}/>
            </p>
            );
        })}
        {isWaiting && <div className="waiting-indicator"><PulseLoader color="#333" /></div>}
        </div>
        <form
            onSubmit={handleMessageSubmit} 
            className={isWaiting ? "tw-chat-input-container tw-chat-visibility-0" : "tw-chat-input-container"}>
            <label htmlFor="messageText">Send Message</label>
            <input placeholder="Enter your message..." id="messageText" type="text" onChange={handleMessageTextChange} value={messageText} name="message" required="required" />
             
            <button><SendIcon iconColor={iconColor} /><span className="sr-only">Send Message</span></button>
        </form>
        <div className='tw-chat-disclaimer-container'>
            { showDisclaimer &&
                <div dangerouslySetInnerHTML={{__html: chatSettings.disclaimer}} />
            }
            <div className='tw-chat-disclaimer-links'>
                { chatSettings.disclaimer && 
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

export default ChatInterface;
