import React, { useState } from "react";
import axios from 'axios';
import toast from "react-hot-toast";
import { useAtom } from "jotai";
import { chatWidgetsAtom } from "../atoms";
import LogFileModal from "../components/LogFileModal";

const SettingsManager = () => {
    const [formData, setFormData] = useState({
        tw_chat_button_text: twChatSettings.tw_chat_button_text,
        tw_chat_openai_key: twChatSettings.tw_chat_openai_key,
        tw_chat_disclaimer: twChatSettings.tw_chat_disclaimer,
        tw_chat_error_message: twChatSettings.tw_chat_error_message,
        tw_chat_is_enabled: twChatSettings.tw_chat_is_enabled,
        tw_chat_is_debug: twChatSettings.tw_chat_is_debug,
        tw_chat_max_characters: twChatSettings.tw_chat_max_characters,
        tw_chat_global_widget_id: twChatSettings.tw_chat_global_widget_id,
        tw_chat_logo_url: twChatSettings.tw_chat_logo_url
    });
    const [isSaving, setIsSaving] = useState(false);
    const [chatWidgets] = useAtom(chatWidgetsAtom);
    const [isLogModalOpen, setIsLogModalOpen] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSaving(true);

        try {
            await axios.post(twChatSettings.ajax_url, {
                action: 'save_settings',
                _ajax_nonce: twChatSettings.ajax_nonce,
                data: formData
            }, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            toast.success('Settings saved successfully!');
        } catch (error) {
            toast.error('There was an error saving settings.');
            console.error('Error saving settings:', error);
        } finally {
            setIsSaving(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: checked ? "enabled" : "" }));
    };

    return (
        <>
            <form id="tw-chat-settings-form" onSubmit={handleSubmit}>
                <section>
                    <h2>OpenAI API Key</h2>
                    <p>Enter your OpenAI API key to connect to your account.</p>
                    <input
                        className="regular-text"
                        type="text"
                        name="tw_chat_openai_key"
                        onChange={handleInputChange}
                        value={formData.tw_chat_openai_key}
                    />
                </section>

                <section>
                    <h2>Global Settings</h2>
                    <p>Global settings for chat widget functionality.</p>
                    <table className="form-table">
                        <tbody>
                            {renderFormField("Custom Logo URL", "tw_chat_logo_url", "text")}
                            {renderFormField("Disclaimer", "tw_chat_disclaimer", "textarea")}
                            {renderFormField("Maximum Characters Allowed", "tw_chat_max_characters", "number")}
                            {renderFormField("Chat Error Message", "tw_chat_error_message", "textarea")}
                            {renderCheckboxField("Enable Debugging", "tw_chat_is_debug")}
                            <tr>
                                <th></th>
                                <td><button type="button" onClick={() => setIsLogModalOpen(true)}>Open Log File</button></td>
                            </tr>
                        </tbody>
                    </table>
                    
                </section>

                {chatWidgets.length > 0 && (
                    <section>
                        <h2>Global Chat Widget</h2>
                        <p>Set up your global chat widget that appears in the lower right corner of the screen.</p>
                        <table className="form-table">
                            <tbody>
                                {renderCheckboxField("Enable Global Chat Widget", "tw_chat_is_enabled")}
                                {renderSelectField("Global Chat Widget", "tw_chat_global_widget_id", chatWidgets)}
                                {renderFormField("Chat Button Text", "tw_chat_button_text", "text")}
                            </tbody>
                        </table>
                    </section>
                )}

                <button 
                    className="button button-hero button-primary" 
                    type="submit" 
                    disabled={isSaving}
                >
                    {isSaving ? 'Saving...' : 'Submit'}
                </button>
            </form>

            <LogFileModal 
                isOpen={isLogModalOpen}
                onRequestClose={() => setIsLogModalOpen(false)}
            />
        </>
    );

    function renderFormField(label, name, type) {
        return (
            <tr>
                <th scope="row">{label}</th>
                <td>
                    {type === 'textarea' ? (
                        <textarea
                            className="regular-text"
                            name={name}
                            rows="5"
                            onChange={handleInputChange}
                            value={formData[name]}
                        />
                    ) : (
                        <input
                            className="regular-text"
                            type={type}
                            name={name}
                            onChange={handleInputChange}
                            value={formData[name]}
                        />
                    )}
                </td>
            </tr>
        );
    }

    function renderCheckboxField(label, name) {
        return (
            <tr>
                <th scope="row">{label}</th>
                <td>
                    <input 
                        type="checkbox" 
                        id={name} 
                        name={name} 
                        checked={formData[name] === "enabled"}
                        onChange={handleCheckboxChange}
                    /> 
                    <label htmlFor={name}>Yes, {label.toLowerCase()}.</label>
                </td>
            </tr>
        );
    }

    function renderSelectField(label, name, options) {
        return (
            <tr>
                <th scope="row">{label}</th>
                <td>
                    <select 
                        name={name} 
                        onChange={handleInputChange} 
                        value={formData[name]}
                    >
                        <option value="">Select a chat widget</option>
                        {options.map(widget => (
                            <option key={widget.id} value={widget.id}>{widget.name}</option>
                        ))}
                    </select>   
                </td>
            </tr>
        );
    }
};

export default SettingsManager;