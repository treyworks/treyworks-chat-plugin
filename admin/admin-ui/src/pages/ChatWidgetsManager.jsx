import React from "react";
import { useState, useEffect } from "react";

import toast from "react-hot-toast";
import Modal from "react-modal";

import { useAtom } from 'jotai';
import { chatWidgetsAtom } from '../atoms';
import { saveChatWidget, removeChatWidget } from "../utils/chatWidgetsService";

function ChatWidgetsManager() {
    const [chatWidgets, setChatWidgets] = useAtom(chatWidgetsAtom);
    const [currentWidget, setCurrentWidget] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // Open modal with widget data if passed
    function openModal(widget) {
        if (widget) {
            console.log(widget)
            setCurrentWidget(widget);
            setModalIsOpen(true);
        } else {
            setModalIsOpen(true);
        }
    }

    // Close Modal
    function closeModal() {
        // Reset current widget state
        console.log('reset current widget')
        setCurrentWidget(null);
        setModalIsOpen(false);
    }

    // After Modal is opened
    function afterOpenModal() {
        return;
    }


    const WidgetsList = () => {
        const handleRemoveWidget = function(widgetID) {
            // Confirm
            if (window.confirm("Are you sure you want to remove this widget?")) {
                removeChatWidget(widgetID,
                    function(response) {
                        // Success
                        if (response.data.success) {
                            toast.success('Chat widget removed');
                            setChatWidgets(response.data.data);
                            console.log(response.data);
                        } else {
                            console.log(response);
                            toast.error('Error removing chat widget.');
                        }
                    },
                    function(response){
                        // Error
                        console.log(response);
                        toast.error('Error removing chat widget.');
                    }
                );
            }
        };
        
        return (        
        <table className="wp-list-table widefat fixed striped posts">
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Greeting</th>         
                <th>OpenAI Assistant ID</th>
                <th>Edit / Delete</th>
            </thead>
            <tbody>
            { chatWidgets.map(widget => (
                <tr key={widget.id}>
                    <td>{widget.id}</td>
                    <td>{widget.name}</td>
                    <td>{widget.meta.tw_chat_greeting}</td>
                    <td>{widget.meta.tw_chat_assistant_id}</td>
                    <td>
                        <button aria-label="Edit Chat Widget" onClick={() => openModal(widget)}><span className="dashicons dashicons-edit"></span></button>
                        <button aria-label="Remove Chat Widget" onClick={() => handleRemoveWidget(widget.id)}><span className="dashicons dashicons-trash"></span></button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        )
    }

    const SaveWidgetForm = () => {
        const [isSaving, setIsSaving] = useState(false);
        const [saveWidgetData, setSaveWidgetData] = useState({
            tw_chat_widget_name: "",
            tw_chat_greeting: "",
            tw_chat_assistant_id: ""
        });

        useEffect(() => {
            if (currentWidget) {
                // console.log('current')
                // console.log(currentWidget)
                setSaveWidgetData({
                    id: currentWidget.id,
                    tw_chat_widget_name: currentWidget.name,
                    tw_chat_greeting: currentWidget.meta.tw_chat_greeting[0],
                    tw_chat_assistant_id: currentWidget.meta.tw_chat_assistant_id[0]
                });      
            }
        }, []);

        const handleSaveWidgetInputChange = function(e) {
            const {name, value} = e.target;
            // grab current form data
            let updatedData = saveWidgetData;
            // update field name with new value
            updatedData[name] = value;
            setSaveWidgetData(updatedData);
        };
    
        const handleSaveWidgetSubmit = function(e) {
            e.preventDefault();
            
            setIsSaving(true);

            saveChatWidget(saveWidgetData,
                function(response) {
                    // Success
                    if (response.data.success) {
                        toast.success('Chat widget saved');
                        setChatWidgets(response.data.data);
                        console.log(response.data);
                        setModalIsOpen(false);
                    } else {
                        console.log(response);
                        toast.error('Error saving chat widget.');
                    }

                    setIsSaving(false);
                },
                function(response){
                    // Error
                    console.log(response);
                    toast.error('Error saving chat widget.');
                    setIsSaving(false);
                }
            );
        };

        return (
        <form id="tw-chat-new-widget-form" onSubmit={handleSaveWidgetSubmit}>
            <table className="form-table">
                <tbody>
                    <tr valign="top">
                        <th scope="row">Name</th>
                        <td><input className="regular-text" type="text" name="tw_chat_widget_name" onChange={handleSaveWidgetInputChange} defaultValue={saveWidgetData.tw_chat_widget_name} required="required" /></td>
                    </tr>
                    <tr valign="top">
                        <th scope="row">Assistant ID</th>
                        <td>
                            <input className="regular-text" type="text" name="tw_chat_assistant_id" onChange={handleSaveWidgetInputChange} defaultValue={saveWidgetData.tw_chat_assistant_id} required="required" />
                        </td>
                    </tr>
                    <tr valign="top">
                        <th scope="row">Greeting</th>
                        <td><input className="regular-text" type="text" name="tw_chat_greeting" onChange={handleSaveWidgetInputChange} defaultValue={saveWidgetData.tw_chat_greeting} required="required" /></td>
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
        <p><button className="button button-primary"  onClick={() => openModal()}>Create New Chat Widget</button></p>
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
                Save Chat Widget
                <button onClick={closeModal}><span className="dashicons dashicons-no-alt"></span></button>
            </h2>
            <div className="tw-chat-admin-modal-content">
                <SaveWidgetForm />         
            </div>
        </Modal>
    </>
    );
}

export default ChatWidgetsManager;