import './App.css'
import { useState } from 'react';
import ChatWidget from './components/ChatWidget';
import ChatIcon from './icons/chatIcon';

// Get icon color
const rootStyle = getComputedStyle(document.documentElement);
window.twChatPluginSettings.iconColor = rootStyle.getPropertyValue('--tw-chat-icon-color').trim();

function App({ widgetID, sticky }) {

  const [isVisible, setIsVisible] = useState(false)
  const buttonText = window.twChatPluginSettings.tw_chat_button_text || "Chat"
  const buttonImage = window.twChatPluginSettings.tw_chat_button_image || null
  const width = window.twChatWidgetSettings[widgetID].tw_chat_width || null
  const height = window.twChatWidgetSettings[widgetID].tw_chat_height || null
  const iconColor = window.twChatPluginSettings.iconColor

  const toggleChat = () => {
    setIsVisible(!isVisible);
  };

  const StickyWidget = () => {
    return (
    <div className="tw-chat-container">
      <div className={ isVisible ? "" : "tw-chat-visibility-0"}>
        <ChatWidget widgetID={widgetID} toggleChat={toggleChat} sticky={sticky} />
      </div>
        <button className="tw-chat-bubble" onClick={toggleChat} aria-label="Open chat interface">
          {buttonImage ? (
            <img src={buttonImage} alt="Chat" className="tw-chat-button-image" />
          ) : (
            <ChatIcon iconColor={iconColor} />
          )}
          {buttonText}
        </button>
    </div>
    )
  }

  return (<>
  { sticky ? 
    <StickyWidget />
    : <ChatWidget widgetID={widgetID} iconColor={iconColor} toggleChat={toggleChat} width={width} height={height} sticky={sticky} />
  }
  </>);
}

export default App
