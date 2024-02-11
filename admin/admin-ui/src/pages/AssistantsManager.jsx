import React from "react";
import { useState, useEffect } from "react";
import { useAtom } from 'jotai';

import toast from "react-hot-toast";
import { marked } from "marked";
import Modal from "react-modal";
import LoadingIndicator from "../components/LoadingIndicator";

import { assistantsAtom } from '../atoms';
import { getAssistants } from "../utils/assistantsService";

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

    const copyToClipboard = (textToCopy) => {
        const textarea = document.createElement("textarea");
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        textarea.style.top = "-9999px";
        textarea.value = textToCopy;
        document.body.appendChild(textarea);

        // Select the text and copy it
        textarea.select();
        document.execCommand("copy");
        toast.success("Copied to clipboard")
    }

    const AssistantsList = () => {
        return (       
        <>
            <table className="wp-list-table widefat fixed striped posts">
                <thead>
                    <th>Assistant Name</th>
                    <th>Assistant ID</th>     
                    <th>Model</th>
                    <th>Instructions</th>
                </thead>
                <tbody>
                { assistants.map(assistant => (
                    <tr key={assistant.id}>
                        <td>{assistant.name}</td>
                        <td><a href="#" onClick={() => copyToClipboard(assistant.id)}>{assistant.id}</a></td>
                        <td>{assistant.model}</td>
                        <td><button onClick={() => openModal(assistant)} aria-label="View Instructions"><span className="dashicons dashicons-welcome-view-site"></span></button></td>
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
        { !isLoading ? 
            <p><a href="#" onClick={handleRefreshAssistants}>Refresh assistants list</a></p>
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
                <p><strong>Model:</strong> {currentAssistant.model}</p>
                <div dangerouslySetInnerHTML={{__html: getAssistantInstructions()}} />
            </div>
        </Modal>
    </>
    );
}

export default AssistantsManager;