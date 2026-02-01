import { useState } from 'react';
import MessageHistory from './MessageHistory';
import SystemLog from './SystemLog';

function Logging() {
    const [activeTab, setActiveTab] = useState('message-history');

    return (
        <div className="tw-logging-page">
            <div className="nav-tab-wrapper">
                <button
                    className={`nav-tab ${activeTab === 'message-history' ? 'nav-tab-active' : ''}`}
                    onClick={() => setActiveTab('message-history')}
                >
                    Message History
                </button>
                <button
                    className={`nav-tab ${activeTab === 'system-log' ? 'nav-tab-active' : ''}`}
                    onClick={() => setActiveTab('system-log')}
                >
                    System Log
                </button>
            </div>

            <div className="tabs-content">
                {activeTab === 'message-history' && <MessageHistory />}
                {activeTab === 'system-log' && <SystemLog />}
            </div>
        </div>
    );
}

export default Logging;
