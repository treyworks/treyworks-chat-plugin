import React, { useState, useCallback, useMemo } from "react";
import { useAtom } from 'jotai';
import toast from "react-hot-toast";
import Modal from "react-modal";
import { Tooltip } from 'react-tooltip';

import { chatWidgetsAtom } from '../atoms';
import { saveChatWidget, removeChatWidget } from "../utils/chatWidgetsService";
import { copyToClipboard } from "../utils/clipboardService";
import WidgetsList from "../components/WidgetsList";
import SaveWidgetForm from "../components/SaveWidgetForm";

const ChatWidgetsManager = () => {
    const [chatWidgets, setChatWidgets] = useAtom(chatWidgetsAtom);
    const [currentWidget, setCurrentWidget] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

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
            <p>Click the <strong>widget name</strong> to edit a chat widget.</p>
            <p>
                <button className="button button-primary" onClick={() => openModal()}>
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