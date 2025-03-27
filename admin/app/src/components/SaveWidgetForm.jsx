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
        tw_chat_assistant_id: '',
        tw_chat_webhook_address: '',
        tw_chat_webhook_header: '',
        tw_chat_email_recipients: '',
        tw_chat_widget_type: 'assistant',
        tw_chat_voice_agent_id: ''
    });

    useEffect(() => {
        if (currentWidget) {
            setFormData({
                id: currentWidget.id,
                tw_chat_widget_name: currentWidget.name,
                tw_chat_greeting: currentWidget.meta.tw_chat_greeting ? currentWidget.meta.tw_chat_greeting[0] : '',
                tw_chat_assistant_id: currentWidget.meta.tw_chat_assistant_id ? currentWidget.meta.tw_chat_assistant_id[0] : '',
                tw_chat_suggested_answers: currentWidget.meta.tw_chat_suggested_answers ? currentWidget.meta.tw_chat_suggested_answers[0] : '',
                tw_chat_dismiss_answers: currentWidget.meta.tw_chat_dismiss_answers ? currentWidget.meta.tw_chat_dismiss_answers[0] : '',
                tw_chat_dismiss_answers_text: currentWidget.meta.tw_chat_dismiss_answers_text ? currentWidget.meta.tw_chat_dismiss_answers_text[0] : '',
                tw_chat_email_recipients: currentWidget.meta.tw_chat_email_recipients ? currentWidget.meta.tw_chat_email_recipients[0] : '',
                tw_chat_webhook_address: currentWidget.meta.tw_chat_webhook_address ? currentWidget.meta.tw_chat_webhook_address[0] : '',
                tw_chat_webhook_header: currentWidget.meta.tw_chat_webhook_header ? currentWidget.meta.tw_chat_webhook_header[0] : '',
                tw_chat_widget_type: currentWidget.meta.tw_chat_widget_type ? currentWidget.meta.tw_chat_widget_type[0] : 'openai',
                tw_chat_voice_agent_id: currentWidget.meta.tw_chat_voice_agent_id ? currentWidget.meta.tw_chat_voice_agent_id[0] : '',
            });
        }
    }, [currentWidget]);

    const handleInputChange = useCallback((e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? (checked ? 'enabled' : '') : value
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
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    }, []);

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
                                <option value="assistant">OpenAI Assistant</option>
                                <option value="voice">Retell AI Voice Agent</option>
                            </select>
                            <p className="description">
                                {formData.tw_chat_widget_type === 'assistant' 
                                    ? 'Text-based chat widget with OpenAI Assistant API integration.' 
                                    : 'Voice-based conversation widget with Retell AI integration.'}
                            </p>
                        </td>
                    </tr>
                    
                    {formData.tw_chat_widget_type === 'assistant' ? (
                        // Chat widget specific fields
                        <>
                            <tr valign="top">
                                <th scope="row">OpenAI Assistant ID</th>
                                <td>
                                    <input
                                        className="regular-text"
                                        type="text"
                                        name="tw_chat_assistant_id"
                                        onChange={handleInputChange}
                                        value={formData.tw_chat_assistant_id}
                                        required
                                    />
                                    <p className="description">OpenAI Assistant ID</p>
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
                                    <label>Initial suggested answers:</label><br />
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
                                        checked={formData.tw_chat_dismiss_answers === 'enabled'}
                                        onChange={handleInputChange}
                                    /> 
                                    <label htmlFor="tw_chat_dismiss_answers">Allow users to dismiss suggested answers.</label>
                                    {formData.tw_chat_dismiss_answers === "enabled" && (
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
                                <th scope="row">Email Recipients</th>
                                <td>
                                    <input
                                        className="regular-text"
                                        type="text"
                                        name="tw_chat_email_recipients"
                                        onChange={handleInputChange}
                                        value={formData.tw_chat_email_recipients}
                                    />
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