import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Set up global message history array
window.twChatMessages = window.twChatMessages || {};
window.twChatWidgetSettings = window.twChatWidgetSettings || {};

// Initialize Chat Widget
window.addEventListener('load', function() {

    console.log('Chat Widget loaded');

    // Find all widget placeholders
    const widgetDivs = document.querySelectorAll('.tw-chat-widget-container');

    console.log('Found ' + widgetDivs.length + ' widget placeholders');

    // Inject our widget into each placeholder
    widgetDivs.forEach(div => {
        const root = ReactDOM.createRoot(div);
        root.render(
            <React.StrictMode>
                <App 
                    widgetID={div.dataset.widgetId} 
                    height={div.dataset.height}
                    width={div.dataset.width}
                    sticky={div.dataset.sticky}
                />
            </React.StrictMode>
        );

        console.log('Widget injected into ' + div.dataset.widgetId);

    });

});