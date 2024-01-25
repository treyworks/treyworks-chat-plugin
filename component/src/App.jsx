import './App.css'
import { useState } from 'react';
import ChatInterface from './ChatInterface';
import ChatIcon from './icons/chatIcon';

// Get icon color
const rootStyle = getComputedStyle(document.documentElement);
const iconColor = rootStyle.getPropertyValue('--tw-chat-icon-color').trim();

function App() {

  const [isVisible, setIsVisible] = useState(false);

  const toggleChat = () => {
    if (!isVisible) {
      document.getElementById("messageText").focus();
    }
    setIsVisible(!isVisible);
  };

  return (
    <div className="tw-chat-container">
      <div className={ isVisible ? "" : "tw-chat-visibility-0"}>
        <ChatInterface iconColor={iconColor} toggleChat={toggleChat} />
      </div>
      <button className="tw-chat-bubble" onClick={toggleChat} aria-label="Open chat interface">
        <ChatIcon iconColor={iconColor} />
        {window.twChatSettings.button_text ? window.twChatSettings.button_text : "Chat"}
      </button>
    </div>
  );
}

export default App
