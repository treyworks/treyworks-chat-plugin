import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { newMessage } from './utils/chat-utils.js';

// Set up global message history array
window.twChatMessages = window.twChatMessages || {};
window.twChatWidgetSettings = window.twChatWidgetSettings || {};

// Initialize Chat Widget
window.twChatInitWidget = function(widgetID, sticky) {
    const rootElement = document.getElementById(`tw-chat-widget-${widgetID}`);
    twChatWidgetSettings[widgetID] = JSON.parse(document.getElementById(`tw-chat-widget-data-${widgetID}`).textContent);
    twChatMessages[widgetID] = [newMessage(twChatWidgetSettings[widgetID].tw_chat_greeting, "assistant")];

    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <App widgetID={widgetID} sticky={sticky} />
        </React.StrictMode>
    );
}