import './App.css'
import { useState } from 'react';
import ChatInterface from './ChatInterface';
import ChatIcon from './icons/chatIcon';

// Get icon color
var rootStyle = getComputedStyle(document.documentElement);
var iconColor = rootStyle.getPropertyValue('--tw-chat-icon-color').trim();

function App() {

  const [isVisible, setIsVisible] = useState(false);

  const toggleChat = () => {
    if (!isVisible) {
      document.getElementById("messageText").focus();
    }
    setIsVisible(!isVisible);
  };

  return (
    <div className="chat-container">
      <div className={ isVisible ? "" : "chat-opacity-0"}>
        <ChatInterface iconColor={iconColor} />
      </div>
      <button className="chat-bubble" onClick={toggleChat}>
        <ChatIcon iconColor={iconColor} />
        Chat
      </button>
    </div>
  );
}

export default App
