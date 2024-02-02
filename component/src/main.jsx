import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const rootElement = document.getElementById('tw-chat-component')
const widgetID = rootElement.dataset.chatWidget;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App widgetID={widgetID} />
  </React.StrictMode>,
)
