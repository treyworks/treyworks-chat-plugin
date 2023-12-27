import './App.css'
import bubbleIcon from './assets/speech-bubble.svg';
import { useState } from 'react';
import ChatInterface from './ChatInterface';

function App() {

  const [isVisible, setIsVisible] = useState(false);

  const toggleChat = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="chat-container">
      {isVisible && <ChatInterface greeting="How can I help you?" />}
      <button className="chat-bubble" onClick={toggleChat}>
        <img src={bubbleIcon} alt="Chat" />
        Chat
      </button>
    </div>
  );
}

export default App
