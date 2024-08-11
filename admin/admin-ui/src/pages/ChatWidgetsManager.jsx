import React from "react";
import { useState, useEffect } from "react";

import toast from "react-hot-toast";
import Modal from "react-modal";
import { Tooltip } from 'react-tooltip';
import ListInput from "../components/ListInput";

import { useAtom } from 'jotai';
import { chatWidgetsAtom } from '../atoms';
import { saveChatWidget, removeChatWidget } from "../utils/chatWidgetsService";
import { copyToClipboard } from "../utils/clipboardService";

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
                <th>Name</th>
                <th>Widget ID</th>
                <th>Embed Code</th>
                <th>OpenAI Assistant ID</th>
                <th>Remove</th>
            </thead>
            <tbody>
            { chatWidgets.map(widget => (
                <tr key={widget.id}> 
                    <td>
                        <a href="#" 
                            onClick={() => openModal(widget)}
                            data-tooltip-id={`edit-tooltip-${widget.id}`}
                            data-tooltip-content="Edit Chat Widget"
                            data-tooltip-place="top"
                        >
                        {widget.name}
                        </a>
                        <Tooltip id={`edit-tooltip-${widget.id}`} />
                    </td>
                    <td>
                        {widget.id}
                    </td>
                    <td>
                        <a href="#"
                            onClick={() => copyToClipboard(`[tw_chat_widget id=${widget.id}]`)}
                            data-tooltip-id={`copy-widget-tooltip-${widget.id}`}
                            data-tooltip-content="Click to copy"
                            data-tooltip-place="top"
                        >
                        {`[tw_chat_widget id=${widget.id}]`}
                        </a>
                        <Tooltip id={`copy-widget-tooltip-${widget.id}`} />
                    </td>
                    <td>
                    <a href="#"
                            onClick={() => copyToClipboard(widget.meta.tw_chat_assistant_id)}
                            data-tooltip-id={`copy-assistant-tooltip-${widget.id}`}
                            data-tooltip-content="Click to copy"
                            data-tooltip-place="top"
                        >
                        {widget.meta.tw_chat_assistant_id}
                        </a>
                        <Tooltip id={`copy-assistant-tooltip-${widget.id}`} />
                    </td>
                    <td>
                        {/* <button  aria-label="Edit Chat Widget" onClick={() => openModal(widget)}><span className="dashicons dashicons-edit"></span></button> */}
                        <a href="#" onClick={() => handleRemoveWidget(widget.id)}
                            data-tooltip-id={`remove-tooltip-${widget.id}`}
                            data-tooltip-content="Remove Chat Widget"
                            data-tooltip-place="top"
                        >
                            <span className="dashicons dashicons-trash"></span>
                            <Tooltip id={`remove-tooltip-${widget.id}`} />
                        </a>
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
            tw_chat_suggested_answers: "",
            tw_chat_assistant_id: "",
            tw_chat_webhook_address: "",
            tw_chat_webhook_header: "",
            tw_chat_email_recipients: ""
        });

        useEffect(() => {
            if (currentWidget) {
                // console.log('current')
                // console.log(currentWidget)
                setSaveWidgetData({
                    id: currentWidget.id,
                    tw_chat_widget_name: currentWidget.name,
                    tw_chat_greeting: currentWidget.meta.tw_chat_greeting[0],
                    tw_chat_assistant_id: currentWidget.meta.tw_chat_assistant_id[0],
                    tw_chat_suggested_answers: currentWidget.meta.tw_chat_suggested_answers ? currentWidget.meta.tw_chat_suggested_answers[0] : "",
                    tw_chat_email_recipients: currentWidget.meta.tw_chat_email_recipients ? currentWidget.meta.tw_chat_email_recipients[0] : "",
                    tw_chat_webhook_address: currentWidget.meta.tw_chat_webhook_address ? currentWidget.meta.tw_chat_webhook_address[0] : "",
                    tw_chat_webhook_header: currentWidget.meta.tw_chat_webhook_header ? currentWidget.meta.tw_chat_webhook_header[0] : ""
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

        const handleSuggestedAnswersChange = (answers) => {
            // grab current form data
            let updatedData = saveWidgetData;
            // update suggested answers field with new value
            updatedData.tw_chat_suggested_answers = answers.join(',');
            setSaveWidgetData(updatedData);
            // Update your form state or send to an API, etc.
        };
    
        const handleSaveWidgetSubmit = function(e) {
            e.preventDefault();
            
            setIsSaving(true);
            console.log(saveWidgetData)
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
                    <tr valign="top">
                        <th scope="row">Suggested Answers</th>
                        <td><ListInput onChange={handleSuggestedAnswersChange} defaultValues={saveWidgetData.tw_chat_suggested_answers} maxItems={4} /></td>
                    </tr>
                </tbody>                
            </table>
            <hr />
            <h3>Functionality Settings</h3>
            <table className="form-table">
                <tbody>
                    <tr valign="top">
                        <th scope="row">Email Recipients</th>
                        <td><input className="regular-text" type="text" name="tw_chat_email_recipients" onChange={handleSaveWidgetInputChange} defaultValue={saveWidgetData.tw_chat_email_recipients} /></td>
                    </tr>
                    <tr valign="top">
                        <th scope="row">Webhook Address</th>
                        <td><input className="regular-text" type="text" name="tw_chat_webhook_address" onChange={handleSaveWidgetInputChange} defaultValue={saveWidgetData.tw_chat_webhook_address} /></td>
                    </tr>
                    <tr valign="top">
                        <th scope="row">Webhook Header (JSON)</th>
                        <td><textarea rows="4" className="regular-text" type="text" name="tw_chat_webhook_header" onChange={handleSaveWidgetInputChange} defaultValue={saveWidgetData.tw_chat_webhook_header}></textarea></td>
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
        <p>Click the <strong>widget name</strong> to edit a chat widget.</p>
        <p><button className="button button-primary"  onClick={() => openModal()}>Create New Chat Widget</button></p>
        { chatWidgets.length > 0 && <WidgetsList /> }
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Edit Chat Widget"
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