import React, { useState, useEffect } from 'react';
import { RetellWebClient, } from 'retell-client-js-sdk';

const RetellWebCallComponent = () => {
  const [callActive, setCallActive] = useState(false);
  const [logs, setLogs] = useState([]);

  // Instantiate the Retell SDK client
  const retellWebClient = new RetellWebClient();

  useEffect(() => {
    // Event listener for when the call starts
    retellWebClient.on('call_started', () => {
      setLogs(oldLogs => [...oldLogs, 'Call started']);
      setCallActive(true);
    });

    // Event listener for when the call ends
    retellWebClient.on('call_ended', () => {
      setLogs(oldLogs => [...oldLogs, 'Call ended']);
      setCallActive(false);
    });

    // Optional event listeners for agent talking events
    retellWebClient.on('agent_start_talking', () => {
      setLogs(oldLogs => [...oldLogs, 'Agent started talking']);
    });

    retellWebClient.on('agent_stop_talking', () => {
      setLogs(oldLogs => [...oldLogs, 'Agent stopped talking']);
    });

    // Event listener for errors
    retellWebClient.on('error', (error) => {
      setLogs(oldLogs => [...oldLogs, `Error: ${error}`]);
      retellWebClient.stopCall();
    });

    // Cleanup function if component unmounts
    return () => {
      // Note: If the SDK exposes a method to remove listeners, it should be used here.
    };
  }, [retellWebClient]);

  // Function to start the call
  const startCall = async () => {
    try {
      // Normally, the access token should be fetched from your server
      // Fetch the access token from your server
      const webCallResponse = await fetch(`${window.location.origin}/wp-json/tw-chat-assistant/v1/create-call`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Add any required parameters for your endpoint
        }),
      }).then(res => res.json());

      // Handle the response
      console.log(webCallResponse);
      if (!webCallResponse || !webCallResponse.access_token) {
        throw new Error('Failed to fetch access token');
      }
      const accessToken = webCallResponse.access_token;
      await retellWebClient.startCall({ accessToken });
    } catch (err) {
      setLogs(oldLogs => [...oldLogs, `Start call error: ${err}`]);
    }
  };

  // Function to stop the call
  const stopCall = () => {
    retellWebClient.stopCall();
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Retell Web Call Component</h2>
      <div style={{ marginBottom: '2rem' }}>
        <button onClick={startCall} disabled={callActive} style={{ marginRight: '10px', padding: '10px 20px' }}>
          Start Call
        </button>
        <button onClick={stopCall} disabled={!callActive} style={{ padding: '10px 20px' }}>
          Stop Call
        </button>
      </div>
      <div style={{ backgroundColor: '#333', padding: '10px', borderRadius: '4px' }}>
        <h3>Logs</h3>
        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
          {logs.map((log, index) => (
            <li key={index}>{log}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RetellWebCallComponent;
