import React from "react";
import { useState, useEffect } from "react";
import { useAtom } from 'jotai';

import toast from "react-hot-toast";
import { marked } from "marked";
import Modal from "react-modal";
import { Tooltip } from 'react-tooltip';
import LoadingIndicator from "../components/LoadingIndicator";

import { assistantsAtom } from '../atoms';
import { getAssistants } from "../utils/assistantsService";
import { copyToClipboard } from "../utils/clipboardService";

function AssistantsManager() {
    
    const [assistants, setAssistants] = useAtom(assistantsAtom);
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [currentAssistant, setCurrentAssistant] = useState({});

    // useEffect(() => {
    //     // fetchAssistants();
    // }, []);

    const onRefreshSuccess = function(response) {
        // Handle success response (e.g., display success message)
        console.log(response.data);

        if (response.data.success) {
            setAssistants(response.data.data);
        } else {
            // Something happened
            toast.error('There was an error retrieving assistants.');
            console.log(`Error: ${response.data.data.message}`);
        }
        setIsLoading(false);
    };
    
    // Handle error response (e.g., display error message)
    const onRefreshError = function(error) {
        
        toast.error('There was an error retrieving assistants.');
        console.log(`Error: ${error}`);
    };

    const handleRefreshAssistants = function() {

        setAssistants([]);
        setIsLoading(true);

        getAssistants(onRefreshSuccess, onRefreshError);

    }

    function openModal(assistant) {
        setCurrentAssistant(assistant);
        setModalIsOpen(true);
    }

    function closeModal() {
        setCurrentAssistant({});
        setModalIsOpen(false);
    }

    const getAssistantInstructions = () => {
        if (currentAssistant.instructions) {
            return marked.parse(currentAssistant.instructions);
        } else {
            return "";
        }
    };

    const AssistantsList = () => {
        return (       
        <>
            <table className="wp-list-table widefat fixed striped posts">
                <thead>
                    <th>Assistant Name</th>
                    <th>Assistant ID</th>     
                    <th>Model</th>
                </thead>
                <tbody>
                { assistants.map(assistant => (
                    <tr key={assistant.id}>
                        <td>
                            <a href="#"
                                onClick={() => openModal(assistant)}
                                data-tooltip-id={`view-tooltip-${assistant.id}`}
                                data-tooltip-content="Click to view instructions"
                                data-tooltip-place="top"
                            >
                                {assistant.name}
                            </a>
                            <Tooltip id={`view-tooltip-${assistant.id}`} />
                        </td>
                        <td>
                            <a href="#" 
                                onClick={() => copyToClipboard(assistant.id)}
                                data-tooltip-id={`copy-tooltip-${assistant.id}`}
                                data-tooltip-content="Click to copy"
                                data-tooltip-place="top"
                            >
                                {assistant.id}
                            </a>
                            <Tooltip id={`copy-tooltip-${assistant.id}`} />
                        </td>
                        <td>{assistant.model}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            { assistants.length > 0 ? <></> : <p>There are no Assistants in your OpenAI account.</p>}
        </>
        )
    }

    return (
    <> 
        <p>Click the <strong>Load Assistants</strong> button to show the assistants in your OpenAI account.</p>
        { !isLoading ? 
            <p><a className="button button-primary" href="#" onClick={handleRefreshAssistants}>Load Assistants</a></p>
            : <p><LoadingIndicator /></p>
        }
        { assistants.length > 0 && <AssistantsList /> }
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            className="tw-chat-admin-modal"
            overlayClassName="tw-chat-admin-overlay"
        >
            <h2 className="tw-chat-admin-modal-header">
                {currentAssistant.name}
                <button onClick={closeModal}><span className="dashicons dashicons-no-alt"></span></button>
            </h2>
            <div className="tw-chat-admin-modal-content">
                <p><strong>Assistant ID:</strong> {currentAssistant.id}</p>
                <p><strong>Model:</strong> {currentAssistant.model}</p>
                <div dangerouslySetInnerHTML={{__html: getAssistantInstructions()}} />
            </div>
        </Modal>
    </>
    );
}

export default AssistantsManager;