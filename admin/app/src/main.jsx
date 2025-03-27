import React from 'react'
import ReactDOM from 'react-dom/client'
import Admin from './Admin.jsx'
import Modal from 'react-modal'

import { Provider } from 'jotai';
import { assistantsAtom } from './atoms';

window.addEventListener('load', function() {
  Modal.setAppElement('#tw-chat-admin');

  ReactDOM.createRoot(document.getElementById('tw-chat-admin')).render(
    <React.StrictMode>
      <Provider atoms={[assistantsAtom]}>
        <Admin />
      </Provider>
    </React.StrictMode>
  )
});