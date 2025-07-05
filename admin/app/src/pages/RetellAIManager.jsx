import React, { useState, useCallback } from "react";
import toast from "react-hot-toast";
import LoadingIndicator from "../components/LoadingIndicator";
import { getRetellAgents } from '../utils/retellService';
import { copyToClipboard } from "../utils/clipboardService";
import { Tooltip } from 'react-tooltip';

const RetellAIManager = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [voiceAgents, setVoiceAgents] = useState([]);

    const handleLoadAgents = useCallback(() => {
        setIsLoading(true);
        setVoiceAgents([]);

        getRetellAgents(
            (response) => {
                if (response.data.success) {
                    // Filter to only show published agents with no duplicates by agent_id
                    const seenAgentIds = new Set();
                    const uniquePublishedAgents = (response.data.data || [])
                        .filter(agent => agent.is_published === true)
                        .filter(agent => {
                            // If we've already seen this agent_id, filter it out
                            if (seenAgentIds.has(agent.agent_id)) {
                                return false;
                            }
                            // Otherwise add it to our set and keep it
                            seenAgentIds.add(agent.agent_id);
                            return true;
                        });
                    setVoiceAgents(uniquePublishedAgents);
                    toast.success('Voice agents loaded successfully!');
                    setIsLoading(false);
                } else {
                    toast.error('Failed to fetch Retell AI voice agents.');
                }
            },
            (error) => {
                toast.error('Failed to fetch Retell AI voice agents.');
            }
        );
    }, [setVoiceAgents]);

    return (
        <div className="retell-ai-manager">      
            <section>
                <p>Click <strong>Load Agents</strong> to view your voice agents.</p>
                <p>
                {!isLoading ? (
                    <button
                        type="button"
                        className="button button-primary"
                        onClick={handleLoadAgents}
                        disabled={isLoading}
                    >
                        Load Agents
                    </button> ) : <LoadingIndicator />
                }
                </p>
                {voiceAgents.length > 0 ? (
                <table className="wp-list-table widefat fixed striped">
                    <thead>
                        <tr>
                            <th>Agent Name</th>
                            <th>Agent ID</th>
                        </tr>
                    </thead>
                    <tbody>
                    {voiceAgents.map((agent) => (
                        <tr key={agent.agent_id}>
                            <td>{agent.agent_name}</td>
                            <td>
                                <a
                                    href="#" 
                                    onClick={() => copyToClipboard(agent.agent_id)}
                                    data-tooltip-id={`copy-tooltip-${agent.agent_id}`}
                                    data-tooltip-content="Click to copy"
                                    data-tooltip-place="top"
                                >
                                    {agent.agent_id}
                                </a>
                                <Tooltip id={`copy-tooltip-${agent.agent_id}`} />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                ) : <></>}
            </section>
            
            <section>
                <h2>How to Use Voice Agents</h2>
                <ol>
                    <li>Configure your Retell AI API key above.</li>
                    <li>Create voice agents in the <a href="https://studio.retellai.com/dashboard" target="_blank" rel="noopener noreferrer">Retell AI Dashboard</a>.</li>
                    <li>Go to the "Chat Widgets" tab and create a new widget with type "Retell AI Voice Agent".</li>
                    <li>Enter the Voice Agent ID from the table above.</li>
                    <li>Use the provided shortcode to embed the voice widget on your site.</li>
                </ol>
                
                <div className="notice notice-info">
                    <p><strong>Note:</strong> Voice agents require a browser that supports WebRTC and microphone access.</p>
                </div>
            </section>
        </div>
    );
};

export default RetellAIManager;
