import React, { useState, useCallback, useEffect } from "react";
import axios from 'axios';
import toast from "react-hot-toast";
import { useAtom } from "jotai";
import { chatWidgetsAtom } from "../atoms";
import LogFileModal from "../components/LogFileModal";
import ListInput from "../components/ListInput";
import { renderFormField, renderCheckboxField, renderSelectField } from "../components/FormElements";
import { Tooltip } from 'react-tooltip';


const SettingsManager = () => {
    const initialFormData = {
        tw_chat_button_text: twChatSettings.tw_chat_button_text,
        tw_chat_openai_key: twChatSettings.tw_chat_openai_key,
        tw_chat_retell_key: twChatSettings.tw_chat_retell_key,
        tw_chat_disclaimer: twChatSettings.tw_chat_disclaimer,
        tw_chat_error_message: twChatSettings.tw_chat_error_message,
        tw_chat_is_enabled: twChatSettings.tw_chat_is_enabled,
        tw_chat_is_debug: twChatSettings.tw_chat_is_debug,
        tw_chat_max_characters: twChatSettings.tw_chat_max_characters,
        tw_chat_global_widget_id: twChatSettings.tw_chat_global_widget_id,
        tw_chat_logo_url: twChatSettings.tw_chat_logo_url,
        tw_chat_allowed_actions: twChatSettings.tw_chat_allowed_actions,
        tw_chat_is_moderation: twChatSettings.tw_chat_is_moderation,
        tw_chat_button_image: twChatSettings.tw_chat_button_image,
        tw_chat_send_button_image: twChatSettings.tw_chat_send_button_image,
        tw_chat_api_base_uri: twChatSettings.tw_chat_api_base_uri
    };
    const [formData, setFormData] = useState(initialFormData);
    const [formIsDirty, setFormIsDirty] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [chatWidgets] = useAtom(chatWidgetsAtom);
    const [isLogModalOpen, setIsLogModalOpen] = useState(false);
    const [showApiKey, setShowApiKey] = useState(false);
    const [showRetellKey, setShowRetellKey] = useState(false);

    // Prevent the browser from showing password update notification when leaving the page
    useEffect(() => {
        const handleBeforeUnload = (e) => {
            if (formIsDirty) {
                // This text doesn't actually appear in modern browsers, but the function must return a string
                const message = 'You have unsaved changes. Are you sure you want to leave?';
                e.returnValue = message; // Standard
                return message; // For older browsers
            }
        };
        
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, [formIsDirty]);
    
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
            setFormIsDirty(false); // Reset dirty state after successful save
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
        setFormIsDirty(true); // Mark form as dirty on any change
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: checked ? "enabled" : "" }));
        setFormIsDirty(true); // Mark form as dirty on any change
    };

    const handleActionsChange = useCallback((allowedActions) => {
        setFormData(prevData => ({
            ...prevData,
            tw_chat_allowed_actions: allowedActions.join(',')
        }));
        setFormIsDirty(true); // Mark form as dirty on any change
    }, []);

    return (
        <>
            <form id="tw-chat-settings-form" onSubmit={handleSubmit}>
                <section>
                    <h2>API Settings</h2>
                    <table className="form-table">
                        <tbody>
                            <tr>
                                <th scope="row">OpenAI API Key</th>
                                <td>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <input
                                            className="regular-text"
                                            type="text"
                                            name="tw_chat_openai_key"
                                            onChange={handleInputChange}
                                            value={formData.tw_chat_openai_key}
                                            style={{ 
                                                WebkitTextSecurity: showApiKey ? 'none' : 'disc',
                                                MozTextSecurity: showApiKey ? 'none' : 'disc' 
                                            }}
                                            autoComplete="off"
                                            data-lpignore="true"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowApiKey(!showApiKey)}
                                            data-tooltip-id="api-key-toggle"
                                            data-tooltip-content="Toggle OpenAI API Key"
                                            style={{ 
                                                padding: '4px 8px',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}
                                        >
                                            {showApiKey ? (
                                                <span className="dashicons dashicons-hidden"></span>
                                            ) : (
                                                <span className="dashicons dashicons-visibility"></span>
                                            )}
                                        </button>
                                        <Tooltip id="api-key-toggle" />
                                    </div>
                                </td>
                            </tr>
                            {renderFormField("API Base URI", "tw_chat_api_base_uri", "text", formData, handleInputChange, "api.openai.com/v1")}
                        </tbody>
                    </table>
                    <p>
                    <span style={{ fontWeight: 'bold' }}>Note:</span> The default API Base URI is <code>api.openai.com/v1</code>.
                    </p>
                    <p>
                        Visit the <a href="https://platform.openai.com/docs/quickstart" target="_blank" rel="noopener noreferrer">OpenAI Platform Developer quickstart</a> for information on how to obtain a new key.
                    </p>
                    <table className="form-table">
                        <tbody>
                            <tr>
                                <th scope="row">Retell API Key</th>
                                <td>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <input
                                            className="regular-text"
                                            type="text"
                                            name="tw_chat_retell_key"
                                            onChange={handleInputChange}
                                            value={formData.tw_chat_retell_key}
                                            style={{ 
                                                WebkitTextSecurity: showRetellKey ? 'none' : 'disc',
                                                MozTextSecurity: showRetellKey ? 'none' : 'disc' 
                                            }}
                                            autoComplete="off"
                                            data-lpignore="true"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowRetellKey(!showRetellKey)}
                                            data-tooltip-id="retell-key-toggle"
                                            data-tooltip-content="Toggle Retell API Key"
                                            style={{ 
                                                padding: '4px 8px',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}
                                        >
                                            {showRetellKey ? (
                                                <span className="dashicons dashicons-hidden"></span>
                                            ) : (
                                                <span className="dashicons dashicons-visibility"></span>
                                            )}
                                        </button>
                                        <Tooltip id="retell-key-toggle" />
                                    </div>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                    <p>
                        Visit the <a href="https://docs.retellai.com/" target="_blank" rel="noopener noreferrer">Retell AI Documentation</a> for information on how to obtain a new key.
                    </p>
                </section>
                <section>
                    <h2>Global Settings</h2>
                    <p>Global settings for chat widget functionality.</p>
                    <table className="form-table">
                        <tbody>
                            {renderFormField("Custom Logo URL", "tw_chat_logo_url", "text", formData, handleInputChange)}
                            {renderFormField("Chat Button Image URL", "tw_chat_button_image", "text", formData, handleInputChange)}
                            {renderFormField("Send Button Image URL", "tw_chat_send_button_image", "text", formData, handleInputChange)}
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
                        <p><strong>Note: Only text-based chat widgets are supported for the global chat widget.</strong></p>
                        <table className="form-table">
                            <tbody>
                                {renderCheckboxField("Enable Global Chat Widget", "tw_chat_is_enabled", formData, handleCheckboxChange)}
                                {renderSelectField(
                                    "Global Chat Widget", 
                                    "tw_chat_global_widget_id", 
                                    chatWidgets.filter(widget => 
                                        widget.meta?.tw_chat_widget_type?.[0] === undefined || 
                                        widget.meta?.tw_chat_widget_type?.[0] === '' || 
                                        widget.meta?.tw_chat_widget_type?.[0] === 'text'
                                    ),
                                    formData, 
                                    handleInputChange
                                )}
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