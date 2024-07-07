import { useState } from 'react';
import Tabs from './components/Tabs';
import SettingsManager from './pages/SettingsManager';
import AssistantsManager from './pages/AssistantsManager';
import ChatWidgetsManager from './pages/ChatWidgetsManager';

import { Toaster } from 'react-hot-toast';
import './Admin.css';

function Admin() {

  const tabData = [
    { title: 'Plugin Settings', content: SettingsManager },
    { title: 'Chat Widgets', content: ChatWidgetsManager},
    { title: 'OpenAI Assistants', content: AssistantsManager }
    // Add more tabs as needed
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
