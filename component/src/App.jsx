import './App.css'
import bubbleIcon from './assets/speech-bubble.svg';
import { useState } from 'react';
import ChatInterface from './ChatInterface';

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
        <ChatInterface />
      </div>
      <button className="chat-bubble" onClick={toggleChat}>
        <img src={bubbleIcon} alt="Chat" />
        Chat
      </button>
    </div>
  );
}

export default App
