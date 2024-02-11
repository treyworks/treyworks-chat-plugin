import React from "react";
import { useState } from "react";

import axios from 'axios';
import toast from "react-hot-toast";

import { useAtom } from "jotai";
import { chatWidgetsAtom } from "../atoms";

function SettingsManager() {

    const [formData, setFormData] = useState({
        tw_chat_button_text: twChatSettings.tw_chat_button_text,
        // tw_chat_assistant_name: twChatSettings.tw_chat_assistant_name,
        tw_chat_openai_key: twChatSettings.tw_chat_openai_key,
        // tw_chat_assistant_id: twChatSettings.tw_chat_assistant_id,
        // tw_chat_greeting: twChatSettings.tw_chat_greeting,
        tw_chat_disclaimer: twChatSettings.tw_chat_disclaimer,
        tw_chat_error_message: twChatSettings.tw_chat_error_message,
        tw_chat_is_enabled: twChatSettings.tw_chat_is_enabled,
        tw_chat_max_characters: twChatSettings.tw_chat_max_characters,
        tw_chat_global_widget_id: twChatSettings.tw_chat_global_widget_id
    });
    const [isSaving, setIsSaving] = useState(false);
    const [chatWidgets, setChatWidgets] = useAtom(chatWidgetsAtom);

    const handleSubmit = function(e) {
        e.preventDefault();

        setIsSaving(true);

        axios.post(twChatSettings.ajax_url, {
            action: 'save_settings',
            _ajax_nonce: twChatSettings.ajax_nonce,
            data: formData
        }, {
            headers: {
                'Content-Type': 'multipart/form-data' // Set content type for FormData
            }
        })
        .then(function(response) {
            // Handle success response (e.g., display success message)

            toast.success('Settings saved successfully!');
            setIsSaving(false);
            console.log('Settings saved successfully!');
        })
        .catch(function(error) {
            // Handle error response (e.g., display error message)
            toast.error('There was an error saving settings.');
            console.log(`Error saving settings: ${error}`);
        });
    };

    const handleInputChange = function(e) {
        const {name, value} = e.target;
        let newFormData = formData;
        newFormData[name] = value;
        setFormData(newFormData);
    };

    const handleCheckboxChange = function(e) {
        const {name, value, checked} = e.target;
        let newFormData = formData;

        if (checked) {
            console.log(e.target.value);
            newFormData[name] = value;
        } else {
            console.log("Not checked");
            newFormData[name] = "";
        }

        setFormData(newFormData);
    };

    return (
        <>
        <form id="tw-chat-settings-form" onSubmit={handleSubmit}>
        <p>Enter your OpenAI API key to connect to your account.</p>
        <table className="form-table">
            <tbody>
                <tr valign="top">
                    <th scope="row">OpenAI Key</th>
                    <td><input className="regular-text" type="text" name="tw_chat_openai_key" onChange={handleInputChange} defaultValue={formData.tw_chat_openai_key} /></td>
                </tr>
            </tbody>
        </table>
        <p>Global settings for chat widget functionality.</p>
        <table className="form-table">
            <tbody>
            <tr valign="top">
                    <th scope="row">Chat Error Message</th>
                    <td><input className="regular-text" type="text" name="tw_chat_error_message" onChange={handleInputChange} defaultValue={formData.tw_chat_error_message} /></td>
                </tr>
                <tr valign="top">
                    <th scope="row">Disclaimer</th>
                    <td>
                        <textarea className="regular-text" name="tw_chat_disclaimer" rows="5" onChange={handleInputChange} defaultValue={formData.tw_chat_disclaimer} />
                    </td>
                </tr>
                <tr valign="top">
                    <th scope="row">Maximum Characters Allowed</th>
                    <td>
                        <input className="regular-text" type="number" name="tw_chat_max_characters" onChange={handleInputChange} defaultValue={formData.tw_chat_max_characters} />
                    </td>
                </tr>
            </tbody>
        </table>
        { chatWidgets.length > 0 &&
        <>
            <p>Set up your global chat widget that appears in the lower right corner of the screen.</p>
            <table className="form-table">
                <tbody>
                    <tr>
                        <th scope="row">Enable Global Chat Widget</th>
                        <td>
                            <input 
                                type="checkbox" 
                                id="tw_chat_is_enabled" 
                                name="tw_chat_is_enabled" 
                                defaultValue="enabled"
                                defaultChecked={formData.tw_chat_is_enabled ? true : false}
                                onChange={handleCheckboxChange}
                            /> 
                            <label htmlFor="tw_chat_is_enabled">Enable</label>
                        </td>
                    </tr>
                    <tr valign="top">
                        <th scope="row">Global Chat Widget</th>
                        <td>
                            <select name="tw_chat_global_widget_id" onChange={handleInputChange} defaultValue={formData.tw_chat_global_widget_id}>
                                <option value="">Select a chat widget</option>
                            { chatWidgets.map(widget => (
                                <option key={widget.id} value={widget.id}>{widget.name}</option>
                            ))}
                            </select>   
                        </td>
                    </tr>
                    <tr valign="top">
                        <th scope="row">Chat Button Text</th>
                        <td><input className="regular-text" type="text" name="tw_chat_button_text" onChange={handleInputChange} defaultValue={formData.tw_chat_button_text} /></td>
                    </tr>
                </tbody>
            </table>
        </>
        }
        {
        !isSaving ? 
            <input className="button button-hero button-primary" type="submit"  value="Submit" /> :
            <p><span className="spinner is-active"></span> Saving</p>
        }
    </form>
    </>
    )
}

export default SettingsManager;