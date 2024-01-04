import React from 'react';
import './ChatInterface.css'; // Assuming separate CSS for ChatInterface
import { useState, useEffect } from 'react';
import axios from 'axios';
import PulseLoader from "react-spinners/PulseLoader";
import sendIcon from './assets/send.svg';
import logoUrl from './assets/powered-by-treyworks.png';
import showIcon from './assets/show.svg';
import hideIcon from './assets/hide.svg';


const newMessage = (content, role) => {
    return {
        content: content,
        role: role
    }
};

const rootElement = document.getElementById('tw-chat-ui');
const chatSettings = JSON.parse(document.getElementById('tw-chat-ui-data').textContent);
const initialMessages = [
    newMessage(chatSettings.greeting, "assistant")
];

const ChatInterface = () => {

    const [messages, setMessages] = useState(initialMessages);
    const [messageText, setMessageText] = useState('');
    const [isWaiting, setIsWaiting] = useState(false);
    const [showDisclaimer, setShowDisclaimer] = useState(false);
    const [threadID, setThreadID] = useState(0);

    useEffect(() => {
        setFocus();
    }, [])

    const setFocus = () => {
        document.getElementById("messageText").focus();
    }

    // Function to send a new message
    const handleMessageSubmit = (event) => {
        event.preventDefault();

        // Save current message history
        let messageHistory = messages;

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
        messageHistory = [...messageHistory, newMessage(messageText, 'user')];
        // update UI
        setMessages(messageHistory)

        // Here you would also send the message to the server
        axios.post('/wp-json/tw-chat-ui/v1/chat-response/', data)
          .then(response => {
            console.log(response.data);
            // const responseData = JSON.parse(response.data)
            if (response.data.data.length > 0) {
                setMessages([...messageHistory, newMessage(response.data.data[0].content[0].text.value, 'assistant')]); // Assuming the response has a messages array
            }
            setMessageText('');
            setIsWaiting(false);
            setThreadID(response.data.thread_id);
            setFocus();
          })
          .catch(error => console.error('Error fetching messages:', error));
    };

    const handleMessageTextChange = (event) => {
        setMessageText(event.target.value);
    };

    const toggleDisclaimerText= () => {
        return !showDisclaimer ? 
            <><img src={showIcon} alt="Show Disclaimer" /> Show Disclaimer </> :
            <><img src={hideIcon} alt="Hide Disclaimer" /> Hide Disclaimer</>
    }
    
    return (
    <div className="chat-interface">
        <div className="chat-messages">
        {messages.map((message, index) => (
            <p key={index} className={`message ${message.role}`}>
            {message.content}
            </p>
        ))}
        {isWaiting && <div className="waiting-indicator"><PulseLoader color="#333" /></div>}
        </div>
        <form
            onSubmit={handleMessageSubmit} 
            className={isWaiting ? "chat-input-container chat-opacity-0" : "chat-input-container"}>
            <label htmlFor="messageText">Send Message</label>
            <input placeholder="Enter your message..." id="messageText" type="text" onChange={handleMessageTextChange} value={messageText} name="message" required="required" />
             
            <button><img src={sendIcon} alt="Send" /></button>
        </form>
        <div className='chat-disclaimer-container'>
            { showDisclaimer &&
                <div dangerouslySetInnerHTML={{__html: chatSettings.disclaimer}} />
            }
            <div className='chat-disclaimer-links'>
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
