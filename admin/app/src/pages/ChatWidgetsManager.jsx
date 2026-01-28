import React, { useState, useCallback, useMemo } from "react";
import { useAtom } from 'jotai';
import toast from "react-hot-toast";
import Modal from "react-modal";
import { Tooltip } from 'react-tooltip';

import { chatWidgetsAtom } from '../atoms';
import { saveChatWidget, removeChatWidget } from "../utils/chatWidgetsService";
import { copyToClipboard } from "../utils/clipboardService";
import { getRetellAgents } from '../utils/retellService';
import WidgetsList from "../components/WidgetsList";
import SaveWidgetForm from "../components/SaveWidgetForm";
import LoadingIndicator from "../components/LoadingIndicator";

const ChatWidgetsManager = () => {
    const [chatWidgets, setChatWidgets] = useAtom(chatWidgetsAtom);
    const [currentWidget, setCurrentWidget] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isLoadingAgents, setIsLoadingAgents] = useState(false);
    const [voiceAgents, setVoiceAgents] = useState([]);

    const openModal = useCallback((widget) => {
        setCurrentWidget(widget || null);
        setModalIsOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setCurrentWidget(null);
        setModalIsOpen(false);
    }, []);

    const handleRemoveWidget = useCallback((widgetID) => {
        if (window.confirm("Are you sure you want to remove this widget?")) {
            removeChatWidget(
                widgetID,
                (response) => {
                    if (response.data.success) {
                        toast.success('Chat widget removed');
                        setChatWidgets(response.data.data);
                    } else {
                        console.error(response);
                        toast.error('Error removing chat widget.');
                    }
                },
                (error) => {
                    console.error(error);
                    toast.error('Error removing chat widget.');
                }
            );
        }
    }, [setChatWidgets]);

    const handleSaveWidget = useCallback((saveWidgetData) => {
        

        saveChatWidget(
            saveWidgetData,
            (response) => {
                if (response.data.success) {
                    toast.success('Chat widget saved');
                    setChatWidgets(response.data.data);
                    closeModal();
                } else {
                    console.error(response);
                    toast.error('Error saving chat widget.');
                }
            },
            (error) => {
                console.error(error);
                toast.error('Error saving chat widget.');
            }
        );
    }, [setChatWidgets, closeModal]);

    const handleCreateNewChatWidget = useCallback( () => {
        setCurrentWidget(null);
        openModal();
    }, [currentWidget, openModal]);

    const handleLoadAgents = useCallback(() => {
        setIsLoadingAgents(true);
        setVoiceAgents([]);

        getRetellAgents(
            (response) => {
                if (response.data.success) {
                    const seenAgentIds = new Set();
                    const uniquePublishedAgents = (response.data.data || [])
                        .filter(agent => agent.is_published === true)
                        .filter(agent => {
                            if (seenAgentIds.has(agent.agent_id)) {
                                return false;
                            }
                            seenAgentIds.add(agent.agent_id);
                            return true;
                        });
                    setVoiceAgents(uniquePublishedAgents);
                    toast.success('Voice agents loaded successfully!');
                    setIsLoadingAgents(false);
                } else {
                    toast.error('Failed to fetch Retell AI voice agents.');
                    setIsLoadingAgents(false);
                }
            },
            (error) => {
                toast.error('Failed to fetch Retell AI voice agents.');
                setIsLoadingAgents(false);
            }
        );
    }, []);

    const modalContent = useMemo(() => (
        <div className="tw-chat-admin-modal-content">
            <SaveWidgetForm
                currentWidget={currentWidget}
                onSave={handleSaveWidget}
            />
        </div>
    ), [currentWidget, handleSaveWidget]);

    return (
        <>
            <section>
                <h2>Chat Widgets</h2>
                <p>Click the <strong>widget name</strong> to edit a chat widget.</p>
                <p>
                    <button className="button button-primary" onClick={() => handleCreateNewChatWidget()}>
                        Create New Chat Widget
                    </button>
                </p>
                {chatWidgets.length > 0 && (
                    <WidgetsList
                        widgets={chatWidgets}
                        onEdit={openModal}
                        onRemove={handleRemoveWidget}
                        onCopy={copyToClipboard}
                    />
                )}
            </section>

            <section>
                <h2>Retell AI Voice Agents</h2>
                <p>Click <strong>Load Agents</strong> to view your voice agents.</p>
                <p>
                    {!isLoadingAgents ? (
                        <button
                            type="button"
                            className="button button-primary"
                            onClick={handleLoadAgents}
                            disabled={isLoadingAgents}
                        >
                            Load Agents
                        </button>
                    ) : (
                        <LoadingIndicator />
                    )}
                </p>
                {voiceAgents.length > 0 && (
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
                )}
            </section>

            <section>
                <h2>How to Use Voice Agents</h2>
                <ol>
                    <li>Configure your Retell AI API key in Plugin Settings.</li>
                    <li>Create voice agents in the <a href="https://studio.retellai.com/dashboard" target="_blank" rel="noopener noreferrer">Retell AI Dashboard</a>.</li>
                    <li>Create a new widget above with type "Retell AI Voice Agent".</li>
                    <li>Enter the Voice Agent ID from the table above.</li>
                    <li>Use the provided shortcode to embed the voice widget on your site.</li>
                </ol>
                
                <div className="notice notice-info">
                    <p><strong>Note:</strong> Voice agents require a browser that supports WebRTC and microphone access.</p>
                </div>
            </section>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Edit Chat Widget"
                className="tw-chat-admin-modal"
                overlayClassName="tw-chat-admin-overlay"
            >
                <h2 className="tw-chat-admin-modal-header">
                    Save Chat Widget
                    <button onClick={closeModal}>
                        <span className="dashicons dashicons-no-alt"></span>
                    </button>
                </h2>
                {modalContent}
            </Modal>
        </>
    );
};

export default ChatWidgetsManager;