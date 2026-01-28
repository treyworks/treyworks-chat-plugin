import { useState } from 'react';
import Tabs from './components/Tabs';
import SettingsManager from './pages/SettingsManager';

import ChatWidgetsManager from './pages/ChatWidgetsManager';
import Logging from './pages/Logging';
import ReportingDashboard from './pages/ReportingDashboard';

import { Toaster } from 'react-hot-toast';
import './Admin.css';

function Admin() {

  const tabData = [
    { title: 'Welcome', content: ReportingDashboard },
    { title: 'Plugin Settings', content: SettingsManager },
    { title: 'Chat Widgets', content: ChatWidgetsManager},
    { title: 'Logging', content: Logging }
  ];

  return (
    <div className="tw-admin-app">
      <header className="tw-admin-header">
        <div className="tw-admin-header-content">
          <div>
            <h1>Chat Plugin for WordPress</h1>
            <p className="tw-motto">Version {window.twChatSettings?.plugin_version}</p>
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
