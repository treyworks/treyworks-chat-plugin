import React from 'react'
import ReactDOM from 'react-dom/client'
import Admin from './Admin.jsx'
import Modal from 'react-modal'

import { Provider } from 'jotai';
import { chatWidgetsAtom } from './atoms';

window.addEventListener('load', function() {
  Modal.setAppElement('#tw-chat-admin');

  ReactDOM.createRoot(document.getElementById('tw-chat-admin')).render(
    <React.StrictMode>
      <Provider atoms={[chatWidgetsAtom]}>
        <Admin />
      </Provider>
    </React.StrictMode>
  )
});