import './App.css'
import { useState } from 'react';
import ChatWidget from './ChatWidget';
import ChatIcon from './icons/chatIcon';
import { setFocus } from './utils/chat-utils';

// Get icon color
const rootStyle = getComputedStyle(document.documentElement);
const iconColor = rootStyle.getPropertyValue('--tw-chat-icon-color').trim();

function App({ widgetID, sticky }) {

  const [isVisible, setIsVisible] = useState(false);
  const buttonText = window.twChatPluginSettings.tw_chat_button_text || "Chat";

  const toggleChat = () => {
    if (!isVisible) {
      setFocus(widgetID);
    }
    setIsVisible(!isVisible);
  };

  const StickyWidget = () => {
    return (
    <div className="tw-chat-container">
      <div className={ isVisible ? "" : "tw-chat-visibility-0"}>
        <ChatWidget widgetID={widgetID} iconColor={iconColor} toggleChat={toggleChat} sticky={sticky} />
      </div>
        <button className="tw-chat-bubble" onClick={toggleChat} aria-label="Open chat interface">
          <ChatIcon iconColor={iconColor} />
          {buttonText}
        </button>
    </div>
    )
  }

  return (<>
  { sticky ? 
    <StickyWidget />
    : <ChatWidget widgetID={widgetID} iconColor={iconColor} toggleChat={toggleChat} sticky={sticky} />
  }
  </>);
}

export default App
