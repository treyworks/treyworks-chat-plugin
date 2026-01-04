import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { newMessage } from './utils/chat-utils.js'

// Set up global message history array
window.twChatMessages = window.twChatMessages || {};
window.twChatWidgetSettings = window.twChatWidgetSettings || {};

// Initialize Chat Widget
window.addEventListener('load', function() {

    // Find all widget placeholders
    const widgetDivs = document.querySelectorAll('.tw-chat-widget-container');

    // Inject our widget into each placeholder
    widgetDivs.forEach(div => {
        const root = ReactDOM.createRoot(div);
        root.render(
            <React.StrictMode>
                <App 
                    widgetID={div.dataset.widgetId} 
                    height={div.dataset.height}
                    width={div.dataset.width}
                    sticky={Number(div.dataset.sticky)}
                />
            </React.StrictMode>
        );

        // Add chat widget greeting
        const widgetSettings = window.twChatWidgetSettings[div.dataset.widgetId];
        const greeting = newMessage(widgetSettings.tw_chat_greeting, 'assistant');
        window.twChatMessages[div.dataset.widgetId] = [greeting];

    });

});