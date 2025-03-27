import React, { useState, useCallback, useMemo } from "react";
import { useAtom } from 'jotai';
import toast from "react-hot-toast";
import Modal from "react-modal";
import { marked } from "marked";
import _ from 'lodash';

import { assistantsAtom } from '../atoms';
import { getAssistants } from "../utils/assistantsService";
import { copyToClipboard } from "../utils/clipboardService";
import LoadingIndicator from "../components/LoadingIndicator";
import AssistantsList from "../components/AssistantsList";
import AssistantModal from "../components/AssistantModal";

const AssistantsManager = () => {
    const [assistants, setAssistants] = useAtom(assistantsAtom);
    const [isLoading, setIsLoading] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentAssistant, setCurrentAssistant] = useState({});

    const handleRefreshAssistants = useCallback(() => {
        setAssistants([]);
        setIsLoading(true);

        getAssistants(
            (response) => {
                if (response.data.success) {
                    setAssistants(response.data.data);
                } else {
                    toast.error('There was an error retrieving assistants.');
                    console.error(`Error: ${response.data.data.message}`);
                }
                setIsLoading(false);
            },
            (error) => {
                toast.error('There was an error retrieving assistants.');
                console.error(`Error: ${error}`);
                setIsLoading(false);
            }
        );
    }, [setAssistants]);

    const openModal = useCallback((assistant) => {
        setCurrentAssistant(assistant);
        setModalIsOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setCurrentAssistant({});
        setModalIsOpen(false);
    }, []);

    const getAssistantInstructions = useCallback(() => {
        return currentAssistant.instructions ? marked.parse(_.escape(currentAssistant.instructions)) : "";
        // return currentAssistant.instructions;
    }, [currentAssistant.instructions]);

    const modalContent = useMemo(() => (
        <AssistantModal
            assistant={currentAssistant}
            onClose={closeModal}
            getInstructions={getAssistantInstructions}
        />
    ), [currentAssistant, closeModal, getAssistantInstructions]);

    return (
        <>
            <p>Click the <strong>Load Assistants</strong> button to show the assistants in your OpenAI account.</p>
            {!isLoading ? (
                <p>
                    <button className="button button-primary" onClick={handleRefreshAssistants}>
                        Load Assistants
                    </button>
                </p>
            ) : (
                <p><LoadingIndicator /></p>
            )}
            {assistants.length > 0 && (
                <AssistantsList
                    assistants={assistants}
                    onViewInstructions={openModal}
                    onCopyId={copyToClipboard}
                />
            )}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Assistant Details"
                className="tw-chat-admin-modal"
                overlayClassName="tw-chat-admin-overlay"
            >
                {modalContent}
            </Modal>
        </>
    );
};

export default AssistantsManager;