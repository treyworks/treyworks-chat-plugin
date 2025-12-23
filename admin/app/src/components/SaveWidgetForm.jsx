import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import ListInput from "./ListInput";

const SaveWidgetForm = ({ currentWidget, onSave }) => {
    const [isSaving, setIsSaving] = useState(false);
    const [formData, setFormData] = useState({
        id: '',
        tw_chat_widget_name: '',
        tw_chat_greeting: '',
        tw_chat_dismiss_answers: '',
        tw_chat_dismiss_answers_text: '',
        tw_chat_suggested_answers: '',
        tw_chat_system_prompt: '',
        tw_chat_ai_model: 'gpt-4.1-2025-04-14',
        tw_chat_webhook_address: '',
        tw_chat_webhook_header: '',
        tw_chat_email_recipients: '',
        tw_chat_widget_type: 'text',
        tw_chat_voice_agent_id: ''
    });

    useEffect(() => {
        if (currentWidget) {
            setFormData({
                id: currentWidget.id,
                tw_chat_widget_name: currentWidget.name,
                tw_chat_greeting: currentWidget.meta.tw_chat_greeting ? currentWidget.meta.tw_chat_greeting[0] : '',
                tw_chat_system_prompt: currentWidget.meta.tw_chat_system_prompt ? currentWidget.meta.tw_chat_system_prompt[0] : '',
                tw_chat_ai_model: currentWidget.meta.tw_chat_ai_model ? currentWidget.meta.tw_chat_ai_model[0] : 'gpt-4.1-2025-04-14',
                tw_chat_suggested_answers: currentWidget.meta.tw_chat_suggested_answers ? currentWidget.meta.tw_chat_suggested_answers[0] : '',
                tw_chat_dismiss_answers: currentWidget.meta.tw_chat_dismiss_answers ? currentWidget.meta.tw_chat_dismiss_answers[0] : '',
                tw_chat_dismiss_answers_text: currentWidget.meta.tw_chat_dismiss_answers_text ? currentWidget.meta.tw_chat_dismiss_answers_text[0] : '',
                tw_chat_email_recipients: currentWidget.meta.tw_chat_email_recipients ? currentWidget.meta.tw_chat_email_recipients[0] : '',
                tw_chat_webhook_address: currentWidget.meta.tw_chat_webhook_address ? currentWidget.meta.tw_chat_webhook_address[0] : '',
                tw_chat_webhook_header: currentWidget.meta.tw_chat_webhook_header ? currentWidget.meta.tw_chat_webhook_header[0] : '',
                tw_chat_widget_type: currentWidget.meta.tw_chat_widget_type ? currentWidget.meta.tw_chat_widget_type[0] : 'text',
                tw_chat_voice_agent_id: currentWidget.meta.tw_chat_voice_agent_id ? currentWidget.meta.tw_chat_voice_agent_id[0] : '',
            });
        }
    }, [currentWidget]);

    const handleInputChange = useCallback((e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? (checked ? '1' : '') : value
        }));
    }, []);

    const handleSuggestedAnswersChange = useCallback((answers) => {
        setFormData(prevData => ({
            ...prevData,
            tw_chat_suggested_answers: answers.join(',')
        }));
    }, []);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        setIsSaving(true);
        onSave(formData);
        setIsSaving(false);
    }, [formData, onSave]);

    const handleKeyDown = useCallback((event) => {
        if (event.key === 'Enter' && event.target.tagName.toLowerCase() !== 'textarea') {
            event.preventDefault();
            handleSubmit(event);
        }
    }, [handleSubmit]);

    return (
        <form id="tw-chat-new-widget-form" onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
            <table className="form-table">
                <tbody>
                    <tr valign="top">
                        <th scope="row">Name</th>
                        <td>
                            <input
                                className="regular-text"
                                type="text"
                                name="tw_chat_widget_name"
                                onChange={handleInputChange}
                                value={formData.tw_chat_widget_name}
                                required
                            />
                        </td>
                    </tr>
                    <tr valign="top">
                        <th scope="row">Widget Type</th>
                        <td>
                            <select
                                name="tw_chat_widget_type"
                                value={formData.tw_chat_widget_type}
                                onChange={handleInputChange}
                                className="regular-text"
                            >
                                <option value="text">Text Chat Widget</option>
                                <option value="voice">Voice Chat Widget</option>
                            </select>
                            <p className="description">
                                {formData.tw_chat_widget_type === 'text' 
                                    ? 'Text-based chat widget with OpenAI API.' 
                                    : 'Voice-based conversation widget with Retell AI.'}
                            </p>
                        </td>
                    </tr>
                    
                    {formData.tw_chat_widget_type === 'text' ? (
                        // Chat widget specific fields
                        <>
                            <tr valign="top">
                                <th scope="row">System Prompt</th>
                                <td>
                                    <textarea
                                        rows="10"
                                        className="large-text"
                                        name="tw_chat_system_prompt"
                                        onChange={handleInputChange}
                                        value={formData.tw_chat_system_prompt}
                                        placeholder="You are a helpful assistant."
                                    ></textarea>
                                    <p className="description">The system prompt sets the behavior and personality of your assistant.</p>
                                </td>
                            </tr>
                            <tr valign="top">
                                <th scope="row">Model</th>
                                <td>
                                    <select
                                        name="tw_chat_ai_model"
                                        onChange={handleInputChange}
                                        value={formData.tw_chat_ai_model}
                                        required="required"
                                    >
                                        <option value="">Select a model</option>
                                        <option value="gpt-5.2-2025-12-11">GPT 5.2</option>
                                        <option value="gpt-5-mini">GPT 5 Mini</option>
                                        <option value="gpt-4.1-mini-2025-04-14">GPT 4.1 Mini</option>
                                    </select>
                                    <p className="description">Select the OpenAI model to use for the chat widget.</p>
                                </td>
                            </tr>
                            <tr valign="top">
                                <th scope="row">Greeting</th>
                                <td>
                                    <textarea
                                        className="regular-text"
                                        name="tw_chat_greeting"
                                        onChange={handleInputChange}
                                        value={formData.tw_chat_greeting}
                                        required
                                        rows="3"
                                        style={{ width: '100%' }}
                                    />
                                </td>
                            </tr>
                            <tr valign="top">
                                <th scope="row">Suggested Answers</th>
                                <td>
                                    <label>Enter text for clickable buttons to start the conversation:</label><br />
                                    <ListInput
                                        onChange={handleSuggestedAnswersChange}
                                        defaultValues={formData.tw_chat_suggested_answers}
                                        maxItems={4}
                                    />
                                </td>
                            </tr>
                            <tr valign="top">
                                <th></th>
                                <td>
                                    <input 
                                        type="checkbox" 
                                        id="tw_chat_dismiss_answers" 
                                        name="tw_chat_dismiss_answers" 
                                        checked={formData.tw_chat_dismiss_answers == '1'}
                                        onChange={handleInputChange}
                                    /> 
                                    <label htmlFor="tw_chat_dismiss_answers">Allow users to dismiss suggested answers.</label>
                                    {formData.tw_chat_dismiss_answers == "1" && (
                                        <div style={{margin: "1rem 0"}}>
                                            <label htmlFor="tw_chat_dismiss_answers_text">Dismiss Suggestions Button Text</label>
                                            <input
                                                className="regular-text"
                                                type="text"
                                                name="tw_chat_dismiss_answers_text"
                                                onChange={handleInputChange}
                                                value={formData.tw_chat_dismiss_answers_text}
                                                placeholder="Type a different response."
                                            />
                                        </div>
                                    )}
                                </td>
                            </tr>
                            <tr valign="top">
                                <th scope="row">Webhook Address</th>
                                <td>
                                    <input
                                        className="regular-text"
                                        type="text"
                                        name="tw_chat_webhook_address"
                                        onChange={handleInputChange}
                                        value={formData.tw_chat_webhook_address}
                                    />
                                </td>
                            </tr>
                            <tr valign="top">
                                <th scope="row">Webhook Header (JSON)</th>
                                <td>
                                    <textarea
                                        rows="4"
                                        className="regular-text"
                                        name="tw_chat_webhook_header"
                                        onChange={handleInputChange}
                                        value={formData.tw_chat_webhook_header}
                                    ></textarea>
                                </td>
                            </tr>
                        </>
                    ) : (
                        // Voice widget specific fields
                        <tr valign="top">
                            <th scope="row">Voice Agent ID</th>
                            <td>
                                <input
                                    className="regular-text"
                                    type="text"
                                    name="tw_chat_voice_agent_id"
                                    onChange={handleInputChange}
                                    value={formData.tw_chat_voice_agent_id}
                                    required
                                    placeholder="agent_xxxxxxxxxxxxxxxxxxxxxxx"
                                />
                                <p className="description">Retell AI Voice Agent ID from your Retell dashboard</p>
                            </td>
                        </tr>
                    )}
                </tbody>                
            </table>
            {!isSaving ? (
                <input className="button button-hero button-primary" type="submit" value="Submit" />
            ) : (
                <p><span className="spinner is-active"></span> Saving</p>
            )}
        </form> 
    );
};

SaveWidgetForm.propTypes = {
    currentWidget: PropTypes.object,
    onSave: PropTypes.func.isRequired
};

export default SaveWidgetForm;