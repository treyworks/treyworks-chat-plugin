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
    <>
      <Tabs tabs={tabData} />
      <Toaster
          position="bottom-center"
          reverseOrder={false}
          toastOptions={{
            className: "tw-admin-toaster"
          }}
       />
    </>
  )
}

export default Admin
