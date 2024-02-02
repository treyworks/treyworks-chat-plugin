import React from "react";
import { useState } from "react";


import toast from "react-hot-toast";
import Modal from "react-modal";
import LoadingIndicator from "../components/LoadingIndicator";

import { useAtom } from 'jotai';
import { assistantsAtom, chatWidgetsAtom } from '../atoms';
import { getAssistants } from "../utils/assistantsService";
import { createChatWidget } from "../utils/chatWidgetsService";

function ChatWidgetsManager() {
    const [assistants, setAssistants] = useAtom(assistantsAtom);
    const [chatWidgets, setChatWidgets] = useAtom(chatWidgetsAtom);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    function afterOpenModal() {
        // 
    }

    const handleRefreshAssistants = function() {
        setAssistants([]);
        setIsLoading(true);
        getAssistants(onRefreshSuccess, onRefreshError);
    }

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

        setIsLoading(false);
    };

    const WidgetsList = () => {
        return (        
        <table className="wp-list-table widefat fixed striped posts">
            <thead>
                <th>Name</th>
                <th>Greeting</th>         
                <th>OpenAI Assistant ID</th>
            </thead>
            <tbody>
            { chatWidgets.map(widget => (
                <tr key={widget.id}>
                    <td>{widget.name}</td>
                    <td>{widget.meta.tw_chat_greeting}</td>
                    <td>{widget.meta.tw_chat_assistant_id}</td>
                </tr>
            ))}
            </tbody>
        </table>
        )
    }

    const NewWidgetForm = () => {
        const [isSaving, setIsSaving] = useState(false);
        const [newWidgetData, setNewWidgetData] = useState({
            tw_chat_widget_name: "",
            tw_chat_widget_greeting: "",
            tw_chat_assistant_id: ""
        });

        const handleNewWidgetInputChange = function(e) {
            const {name, value} = e.target;
            // grab current form data
            let updatedData = newWidgetData;
            // update field name with new value
            updatedData[name] = value;
            setNewWidgetData(updatedData);
        };
    
        const handleNewWidgetSubmit = function(e) {
            e.preventDefault();
            
            setIsSaving(true);

            createChatWidget(newWidgetData,
            function(response) {
                // Success
                if (response.data.success) {
                    toast.success('Chat widget created');
                    setChatWidgets([...chatWidgets, response.data.data])
                    console.log(response.data);
                    setModalIsOpen(false);
                } else {
                    console.log(response);
                    toast.error('Error creating chat widget.');
                }

                setIsSaving(false);
                
            },
            function(response){
                // Error
                console.log(response);
                toast.error('Error creating chat widget.');
            });
        }

        const assistantOptions = assistants.map(assistant => (
            <option key={assistant.id} value={assistant.id}>{assistant.name}</option>
        ));

        return (
        <form id="tw-chat-new-widget-form" onSubmit={handleNewWidgetSubmit}>
            <table className="form-table">
                <tbody>
                    <tr valign="top">
                        <th scope="row">Name</th>
                        <td><input className="regular-text" type="text" name="tw_chat_widget_name" onChange={handleNewWidgetInputChange} required="required" /></td>
                    </tr>
                    <tr valign="top">
                        <th scope="row">Assistant ID</th>
                        <td>
                        { !isLoading ? 
                            <select name="tw_chat_assistant_id" onChange={handleNewWidgetInputChange} required="required">
                                <option value="">Select an assistant</option>
                                {assistantOptions}
                            </select>
                            : <p><LoadingIndicator /></p>
                        }   
                            <p><a href="#" onClick={handleRefreshAssistants}>Refresh assistants list</a></p>
                        </td>
                    </tr>
                    <tr valign="top">
                        <th scope="row">Greeting</th>
                        <td><input className="regular-text" type="text" name="tw_chat_greeting" onChange={handleNewWidgetInputChange} required="required" /></td>
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
        <p><button className="button button-primary"  onClick={openModal}>Create New Chat Widget</button></p>
        { chatWidgets.length > 0 && <WidgetsList /> }
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            className="tw-chat-admin-modal"
            overlayClassName="tw-chat-admin-overlay"
        >
            <h2 className="tw-chat-admin-modal-header">
                Create a New Chat Widget
                <button onClick={closeModal}><span className="dashicons dashicons-no-alt"></span></button>
            </h2>
            <div className="tw-chat-admin-modal-content">
                <NewWidgetForm />         
            </div>
        </Modal>
    </>
    );
}

export default ChatWidgetsManager;