import React from "react";
import { useState, useEffect } from "react";
import { useAtom } from 'jotai';

import toast from "react-hot-toast";
import Modal from "react-modal";
import LoadingIndicator from "../components/LoadingIndicator";

import { assistantsAtom } from '../atoms';
import { getAssistants } from "../utils/assistantsService";

function AssistantsManager() {
    
    const [assistants, setAssistants] = useAtom(assistantsAtom);
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // fetchAssistants();
    }, []);

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

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    function afterOpenModal() {
        // 
    }

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
                        <td>{assistant.name}</td>
                        <td>{assistant.id}</td>
                        <td>{assistant.model}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            { assistants.length > 0 ? <></> : <p>There are no Assistants in your OpenAI account.</p>}
        </>
        )
    }

    const NewAssistantForm = () => {
        const [isSaving, setIsSaving] = useState(false);
        const [newAssistantData, setNewAssistantData] = useState({
            tw_chat_assistant_id: "",
            tw_chat_assistant_name: ""
        });
        const [assistantID, setAssistantID] = useState("");

        const handleNewAssistantInputChange = function(e) {
            const {name, value} = e.target;
            // grab current form data
            let updatedData = newAssistantData;
            // update field name with new value
            updatedData[name] = value;
            setNewAssistantData(updatedData);

            if (name == 'tw_chat_assistant_id') {
                setAssistantID(value)
            }
        };
    
        const handleNewAssistantSubmit = function(e) {
            console.log(assistantID)
            setModalIsOpen(false);
        }

        return (
        <form id="tw-chat-new-assistant-form" onSubmit={handleNewAssistantSubmit}>
            <table className="form-table">
                <tbody>
                    <tr valign="top">
                        <th scope="row">Assistant Name</th>
                        <td><input className="regular-text" type="text" name="tw_chat_assistant_name" onChange={handleNewAssistantInputChange} required="required" /></td>
                    </tr>
                    <tr valign="top">
                        <th scope="row">Assistant ID</th>
                        <td>
                            <input className="regular-text" type="text" name="tw_chat_assistant_id" onChange={handleNewAssistantInputChange} />
                        </td>
                    </tr>
                    <tr valign="top">
                        <th scope="row">Chat Greeting</th>
                        <td><input className="regular-text" type="text" name="tw_chat_greeting" onChange={handleNewAssistantInputChange} /></td>
                    </tr>
                    <tr valign="top">
                        <th scope="row">Chat Error Message</th>
                        <td><input className="regular-text" type="text" name="tw_chat_error_message" onChange={handleNewAssistantInputChange} /></td>
                    </tr>
                </tbody>
            </table>
            {
            !isSaving ? 
                <input className="button button-hero button-primary" type="submit"  value="Submit" /> :
                <p><span className="spinner is-active"></span> Saving</p>
            }  
        </form> 
        )
    }

    return (
    <> 
        {/* <p><button className="button button-hero button-primary"  onClick={openModal}>Create New Assistant</button></p> */}
        { !isLoading ? 
            <p><a href="#" onClick={handleRefreshAssistants}>Refresh assistants list</a></p>
            : <p><LoadingIndicator /></p>
        }
        { assistants.length > 0 && <AssistantsList /> }
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            className="tw-chat-admin-modal"
            overlayClassName="tw-chat-admin-overlay"
        >
            <h2 className="tw-chat-admin-modal-header">
                Create a New Assistant
                <button onClick={closeModal}><span className="dashicons dashicons-no-alt"></span></button>
            </h2>
            <div className="tw-chat-admin-modal-content">
                <NewAssistantForm />         
            </div>
        </Modal>
    </>
    );
}

export default AssistantsManager;