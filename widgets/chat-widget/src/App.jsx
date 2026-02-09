import './App.css'
import { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import ChatWidget from './components/ChatWidget';

function App({ widgetID, sticky, width, height }) {

  const [isVisible, setIsVisible] = useState(false)
  const buttonText = window.twChatPluginSettings.tw_chat_button_text || "Chat"
  const bubbleImage = window.twChatPluginSettings.tw_chat_bubble_image || null
  const textAsTooltip = window.twChatPluginSettings.tw_chat_bubble_text_tooltip === '1'

  const toggleChat = () => {
    setIsVisible(!isVisible);
  };

  const StickyWidget = () => {
    return (
    <div className="tw-chat-container">
      <div className={ isVisible ? "" : "tw-chat-visibility-0"}>
        <ChatWidget widgetID={widgetID} toggleChat={toggleChat} sticky={sticky} />
      </div>
        <button
          className="tw-chat-bubble"
          onClick={toggleChat}
          aria-label="Open chat interface"
          {...(textAsTooltip ? {
            'data-tooltip-id': 'tw-chat-bubble-tooltip',
            'data-tooltip-content': buttonText,
            'data-tooltip-place': 'top',
          } : {})}
        >
          {bubbleImage && (
            <img src={bubbleImage} alt="" className="tw-chat-bubble-image" />
          )}
          {!textAsTooltip && buttonText}
        </button>
        {textAsTooltip && (
          <Tooltip
            id="tw-chat-bubble-tooltip"
            style={{
              backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--tw-chat-bubble-tooltip-background').trim() || '#333333',
              color: getComputedStyle(document.documentElement).getPropertyValue('--tw-chat-bubble-color').trim() || '#052b43',
            }}
          />
        )}
    </div>
    )
  }

  return (<>
  { sticky == "1" ? 
    <StickyWidget />
    : <ChatWidget widgetID={widgetID} toggleChat={toggleChat} width={width} height={height} sticky={sticky} />
  }
  </>);
}

export default App
