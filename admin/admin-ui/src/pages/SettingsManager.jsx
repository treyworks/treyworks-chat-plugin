import React, { useState, useCallback } from "react";
import axios from 'axios';
import toast from "react-hot-toast";
import { useAtom } from "jotai";
import { chatWidgetsAtom } from "../atoms";
import LogFileModal from "../components/LogFileModal";
import ListInput from "../components/ListInput";
import { renderFormField, renderCheckboxField, renderSelectField } from "../components/FormElements";

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
        tw_chat_logo_url: twChatSettings.tw_chat_logo_url,
        tw_chat_allowed_actions: twChatSettings.tw_chat_allowed_actions,
        tw_chat_is_moderation: twChatSettings.tw_chat_is_moderation
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

    const handleActionsChange = useCallback((allowedActions) => {
        setFormData(prevData => ({
            ...prevData,
            tw_chat_allowed_actions: allowedActions.join(',')
        }));
    }, []);

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
                            {renderFormField("Custom Logo URL", "tw_chat_logo_url", "text", formData, handleInputChange)}
                            {renderFormField("Disclaimer", "tw_chat_disclaimer", "textarea", formData, handleInputChange)}
                            {renderFormField("Maximum Characters Allowed", "tw_chat_max_characters", "number", formData, handleInputChange)}
                            {renderFormField("Chat Error Message", "tw_chat_error_message", "textarea", formData, handleInputChange)}
                            {renderCheckboxField("Enable Moderation", "tw_chat_is_moderation", formData, handleCheckboxChange)}
                            <tr>
                                <th></th>
                                <td><p>Filter user messages with the <a href="https://github.com/ConsoleTVs/Profanity" target="_blank">Profanity PHP library</a> and enable the  <a href="https://platform.openai.com/docs/guides/moderation" target="_blank">OpenAI Moderation API</a>.</p></td>
                            </tr>
                            {renderCheckboxField("Enable Debugging", "tw_chat_is_debug", formData, handleCheckboxChange)}
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
                                {renderCheckboxField("Enable Global Chat Widget", "tw_chat_is_enabled", formData, handleCheckboxChange)}
                                {renderSelectField("Global Chat Widget", "tw_chat_global_widget_id", chatWidgets, formData, handleInputChange)}
                                {renderFormField("Chat Button Text", "tw_chat_button_text", "text", formData, handleInputChange)}
                            </tbody>
                        </table>
                    </section>
                )}

                <section>
                    <h2>Functions Settings</h2>
                    <table className="form-table">
                        <tbody>
                            <tr>
                                <th scope="row">
                                    Enter a list of actions and filters for the <code>wp_action</code> tool function.
                                </th>
                                <td>
                                    <ListInput
                                        onChange={handleActionsChange}
                                        defaultValues={twChatSettings.tw_chat_allowed_actions}
                                    />
                                </td>    
                            </tr>
                        </tbody>
                    </table>
                </section>

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
};

export default SettingsManager;