import React from 'react';
import './ChatInterface.css'; // Assuming separate CSS for ChatInterface
import { useState, useEffect } from 'react';
import axios from 'axios';
import PulseLoader from "react-spinners/PulseLoader";
import sendIcon from './assets/send.svg';


const newMessage = (content, role) => {
    return {
        content: content,
        role: role
    }
};

const ChatInterface = ({ greeting }) => {

    const [messages, setMessages] = useState([newMessage(greeting, "assistant")]);
    const [messageText, setMessageText] = useState('');
    const [isWaiting, setIsWaiting] = useState(false);

    // useEffect(() => {
    //     setMessages([newMessage(greeting, "assistant")])
    // }, [])

    // Function to send a new message
    const handleMessageSubmit = (event) => {
        event.preventDefault();

        // Save current message history
        let messageHistory = messages;

        // Show waiting indicator
        setIsWaiting(true);
        
        // Prepare data to be sent
        const data = {
            message: messageText,
            messageHistory: messageHistory
        };

        // add new message to history
        messageHistory = [...messageHistory, newMessage(messageText, 'user')];
        // update UI
        setMessages(messageHistory)

        // Here you would also send the message to the server
        axios.post('/wp-json/tw-chat-ui/v1/chat-response/', data)
          .then(response => {
            console.log(response.data);
            const responseData = JSON.parse(response.data)
            setMessages([...messageHistory, newMessage(responseData.message, 'assistant')]); // Assuming the response has a messages array
            setMessageText('');
            setIsWaiting(false);
          })
          .catch(error => console.error('Error fetching messages:', error));
    };

    const handleMessageTextChange = (event) => {
        setMessageText(event.target.value);
    };

    
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
        {!isWaiting && 
            <form className="chat-input-container" onSubmit={handleMessageSubmit}>
                <label htmlFor="messageText">Send Message</label>
                <input placeholder="Enter your message..." id="messageText" type="text" onChange={handleMessageTextChange} value={messageText} name="message" required="required" />
                <button><img src={sendIcon} alt="Send" /></button>
            </form>
        }

    </div>
    );
};

export default ChatInterface;
