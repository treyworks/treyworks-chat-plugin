import { useState } from 'react';
import Tabs from './components/Tabs';
import SettingsManager from './pages/SettingsManager';

import ChatWidgetsManager from './pages/ChatWidgetsManager';
import RetellAIManager from './pages/RetellAIManager';

import { Toaster } from 'react-hot-toast';
import './Admin.css';

function Admin() {

  const tabData = [
    { title: 'Plugin Settings', content: SettingsManager },
    { title: 'Chat Widgets', content: ChatWidgetsManager},

    { title: 'Retell AI Voice Agents', content: RetellAIManager }
  ];

  return (
    <div className="tw-admin-app">
      <header className="tw-admin-header">
        <div className="tw-admin-header-content">
          <div>
            <h1>Chat Dashboard</h1>
            <p className="tw-motto">Build Faster. Operate Smarter. Win More.</p>
          </div>
          <div className="tw-logo">
            <img src={window.twChatSettings?.plugin_dir_url + 'img/logo.png'} alt="Treyworks Logo" />
          </div>
        </div>
      </header>
      
      <div className="tw-admin-body">
        <Tabs tabs={tabData} />
      </div>

      <Toaster
          position="bottom-center"
          reverseOrder={false}
          toastOptions={{
            className: "tw-admin-toaster"
          }}
       />
    </div>
  )
}

export default Admin
