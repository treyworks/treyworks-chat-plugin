import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import ListInput from "./ListInput";
import WebhookSchemaBuilder from "./WebhookSchemaBuilder";
import PromptGenerator from "./PromptGenerator";

const PRESET_MODELS = [
    { value: 'gpt-5.2-2025-12-11', label: 'GPT 5.2' },
    { value: 'gpt-5-mini', label: 'GPT 5 Mini' },
    { value: 'gpt-4.1-mini-2025-04-14', label: 'GPT 4.1 Mini' },
];

const isPresetModel = (model) => PRESET_MODELS.some(m => m.value === model);

const SaveWidgetForm = ({ currentWidget, onSave }) => {
    const [isSaving, setIsSaving] = useState(false);
    const [showPromptGenerator, setShowPromptGenerator] = useState(false);
    const [formData, setFormData] = useState({
        id: '',
        tw_chat_widget_name: '',
        tw_chat_greeting: '',
        tw_chat_dismiss_answers: '',
        tw_chat_dismiss_answers_text: '',
        tw_chat_suggested_answers: '',
        tw_chat_system_prompt: '',
        tw_chat_ai_model: 'gpt-4.1-mini-2025-04-14',
        tw_chat_ai_model_custom: '',
        tw_chat_webhook_address: '',
        tw_chat_webhook_header: '',
        tw_chat_email_recipients: '',
        tw_chat_widget_type: 'text',
        tw_chat_voice_agent_id: '',
        tw_chat_use_site_search: '',
        tw_chat_search_scope: 'all',
        tw_chat_search_post_types: [],
        tw_chat_search_specific_ids: '',
        tw_chat_exclude_links: [],
        tw_chat_webhook_schema: ''
    });

    useEffect(() => {
        if (currentWidget) {
            setFormData({
                id: currentWidget.id,
                tw_chat_widget_name: currentWidget.name,
                tw_chat_greeting: currentWidget.meta.tw_chat_greeting ? currentWidget.meta.tw_chat_greeting[0] : '',
                tw_chat_system_prompt: currentWidget.meta.tw_chat_system_prompt ? currentWidget.meta.tw_chat_system_prompt[0] : '',
                tw_chat_ai_model: currentWidget.meta.tw_chat_ai_model 
                    ? (isPresetModel(currentWidget.meta.tw_chat_ai_model[0]) ? currentWidget.meta.tw_chat_ai_model[0] : 'custom')
                    : 'gpt-4.1-mini-2025-04-14',
                tw_chat_ai_model_custom: currentWidget.meta.tw_chat_ai_model 
                    ? (!isPresetModel(currentWidget.meta.tw_chat_ai_model[0]) ? currentWidget.meta.tw_chat_ai_model[0] : '')
                    : '',
                tw_chat_suggested_answers: currentWidget.meta.tw_chat_suggested_answers ? currentWidget.meta.tw_chat_suggested_answers[0] : '',
                tw_chat_dismiss_answers: currentWidget.meta.tw_chat_dismiss_answers ? currentWidget.meta.tw_chat_dismiss_answers[0] : '',
                tw_chat_dismiss_answers_text: currentWidget.meta.tw_chat_dismiss_answers_text ? currentWidget.meta.tw_chat_dismiss_answers_text[0] : '',
                tw_chat_email_recipients: currentWidget.meta.tw_chat_email_recipients ? currentWidget.meta.tw_chat_email_recipients[0] : '',
                tw_chat_webhook_address: currentWidget.meta.tw_chat_webhook_address ? currentWidget.meta.tw_chat_webhook_address[0] : '',
                tw_chat_webhook_header: currentWidget.meta.tw_chat_webhook_header ? currentWidget.meta.tw_chat_webhook_header[0] : '',
                tw_chat_widget_type: currentWidget.meta.tw_chat_widget_type ? currentWidget.meta.tw_chat_widget_type[0] : 'text',
                tw_chat_voice_agent_id: currentWidget.meta.tw_chat_voice_agent_id ? currentWidget.meta.tw_chat_voice_agent_id[0] : '',
                tw_chat_use_site_search: currentWidget.meta.tw_chat_use_site_search ? currentWidget.meta.tw_chat_use_site_search[0] : '',
                tw_chat_search_scope: currentWidget.meta.tw_chat_search_scope ? currentWidget.meta.tw_chat_search_scope[0] : 'all',
                tw_chat_search_post_types: currentWidget.meta.tw_chat_search_post_types ? currentWidget.meta.tw_chat_search_post_types[0].split(',').filter(Boolean) : [],
                tw_chat_search_specific_ids: currentWidget.meta.tw_chat_search_specific_ids ? currentWidget.meta.tw_chat_search_specific_ids[0] : '',
                tw_chat_exclude_links: currentWidget.meta.tw_chat_exclude_links ? currentWidget.meta.tw_chat_exclude_links[0].split(',').filter(Boolean) : [],
                tw_chat_webhook_schema: currentWidget.meta.tw_chat_webhook_schema ? currentWidget.meta.tw_chat_webhook_schema[0] : '',
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

    const handlePostTypeChange = useCallback((postTypeName) => {
        setFormData(prevData => {
            const currentTypes = prevData.tw_chat_search_post_types || [];
            const newTypes = currentTypes.includes(postTypeName)
                ? currentTypes.filter(type => type !== postTypeName)
                : [...currentTypes, postTypeName];
            return {
                ...prevData,
                tw_chat_search_post_types: newTypes
            };
        });
    }, []);

    const handleExcludeLinksChange = useCallback((postTypeName) => {
        setFormData(prevData => {
            const currentExcluded = prevData.tw_chat_exclude_links || [];
            const newExcluded = currentExcluded.includes(postTypeName)
                ? currentExcluded.filter(type => type !== postTypeName)
                : [...currentExcluded, postTypeName];
            return {
                ...prevData,
                tw_chat_exclude_links: newExcluded
            };
        });
    }, []);

    const handlePromptApply = useCallback((prompt) => {
        setFormData(prevData => ({
            ...prevData,
            tw_chat_system_prompt: prompt
        }));
        setShowPromptGenerator(false);
    }, []);

    const handleWebhookSchemaChange = useCallback((schemaJson) => {
        setFormData(prevData => ({
            ...prevData,
            tw_chat_webhook_schema: schemaJson
        }));
    }, []);

    const handleSuggestedAnswersChange = useCallback((answers) => {
        setFormData(prevData => ({
            ...prevData,
            tw_chat_suggested_answers: answers.join(',')
        }));
    }, []);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        
        // Convert post types array to comma-separated string for storage
        const submitData = {
            ...formData,
            tw_chat_ai_model: formData.tw_chat_ai_model === 'custom' 
                ? formData.tw_chat_ai_model_custom 
                : formData.tw_chat_ai_model,
            tw_chat_search_post_types: Array.isArray(formData.tw_chat_search_post_types) 
                ? formData.tw_chat_search_post_types.join(',') 
                : formData.tw_chat_search_post_types,
            tw_chat_exclude_links: Array.isArray(formData.tw_chat_exclude_links)
                ? formData.tw_chat_exclude_links.join(',')
                : formData.tw_chat_exclude_links
        };
        delete submitData.tw_chat_ai_model_custom;
        setIsSaving(true);
        onSave(submitData);
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
            
            <h3>General Settings</h3>
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
                </tbody>
            </table>

            {formData.tw_chat_widget_type === 'text' ? (
                <>
                    <h3>AI Configuration</h3>
                    <table className="form-table">
                        <tbody>
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
                                        {PRESET_MODELS.map(m => (
                                            <option key={m.value} value={m.value}>{m.label}</option>
                                        ))}
                                        <option value="custom">Custom</option>
                                    </select>
                                    {formData.tw_chat_ai_model === 'custom' && (
                                        <input
                                            className="regular-text tw-chat-custom-model-input"
                                            type="text"
                                            name="tw_chat_ai_model_custom"
                                            onChange={handleInputChange}
                                            value={formData.tw_chat_ai_model_custom}
                                            placeholder="e.g. gemini-2.0-flash"
                                            required
                                        />
                                    )}
                                    <p className="description">
                                        {formData.tw_chat_ai_model === 'custom'
                                            ? 'Enter any OpenAI-compatible model name.'
                                            : 'Select a model or choose Custom to enter any OpenAI-compatible model name.'}
                                    </p>
                                </td>
                            </tr>
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
                                    <div className="tw-prompt-generator-trigger">
                                        <p className="description">The system prompt sets the behavior and personality of your assistant.</p>
                                        <button
                                            type="button"
                                            className="button tw-prompt-generator-open-btn"
                                            onClick={() => setShowPromptGenerator(true)}
                                        >
                                            ✨ Generate with AI
                                        </button>
                                    </div>
                                    {showPromptGenerator && (
                                        <PromptGenerator
                                            currentPrompt={formData.tw_chat_system_prompt}
                                            widgetConfig={{
                                                hasSiteSearch: formData.tw_chat_use_site_search === '1',
                                                hasWebhook: !!formData.tw_chat_webhook_address,
                                                hasWebhookSchema: !!formData.tw_chat_webhook_schema,
                                                webhookSchema: formData.tw_chat_webhook_schema,
                                            }}
                                            onApply={handlePromptApply}
                                            onClose={() => setShowPromptGenerator(false)}
                                        />
                                    )}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>Conversation Flow</h3>
                    <table className="form-table">
                        <tbody>
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
                        </tbody>
                    </table>

                    <h3>Site Search</h3>
                    <table className="form-table">
                        <tbody>
                            <tr valign="top">
                                <th scope="row">Site Search</th>
                                <td>
                                    <input 
                                        type="checkbox" 
                                        id="tw_chat_use_site_search" 
                                        name="tw_chat_use_site_search" 
                                        checked={formData.tw_chat_use_site_search == '1'}
                                        onChange={handleInputChange}
                                    /> 
                                    <label htmlFor="tw_chat_use_site_search">Enable site search function</label>
                                    <p className="description">When enabled, the assistant can search your website content to answer questions.</p>
                                </td>
                            </tr>
                            {formData.tw_chat_use_site_search == '1' && (
                                <>
                                    <tr valign="top">
                                        <th scope="row">Search Scope</th>
                                        <td>
                                            <div style={{ marginBottom: '1rem' }}>
                                                <label style={{ display: 'block', marginBottom: '0.5rem' }}>
                                                    <input
                                                        type="radio"
                                                        name="tw_chat_search_scope"
                                                        value="all"
                                                        checked={formData.tw_chat_search_scope === 'all'}
                                                        onChange={handleInputChange}
                                                        style={{ marginRight: '0.5rem' }}
                                                    />
                                                    <strong>All Content</strong>
                                                </label>
                                                <p className="description" style={{ marginLeft: '1.75rem', marginTop: '0.25rem' }}>
                                                    Search across all pages, posts, and custom post types on your website.
                                                </p>
                                            </div>

                                            <div style={{ marginBottom: '1rem' }}>
                                                <label style={{ display: 'block', marginBottom: '0.5rem' }}>
                                                    <input
                                                        type="radio"
                                                        name="tw_chat_search_scope"
                                                        value="post_types"
                                                        checked={formData.tw_chat_search_scope === 'post_types'}
                                                        onChange={handleInputChange}
                                                        style={{ marginRight: '0.5rem' }}
                                                    />
                                                    <strong>Selected Post Types</strong>
                                                </label>
                                                <p className="description" style={{ marginLeft: '1.75rem', marginTop: '0.25rem' }}>
                                                    Limit search to specific post types (e.g., pages, posts, products).
                                                </p>
                                                {formData.tw_chat_search_scope === 'post_types' && (
                                                    <div style={{ marginLeft: '1.75rem', marginTop: '0.75rem' }}>
                                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                                                            Select Post Types:
                                                        </label>
                                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                            {window.twChatSettings?.available_post_types?.map((postType) => (
                                                                <label key={postType.name} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={formData.tw_chat_search_post_types?.includes(postType.name) || false}
                                                                        onChange={() => handlePostTypeChange(postType.name)}
                                                                    />
                                                                    <span>{postType.label} <span style={{ color: '#666', fontSize: '0.9em' }}>({postType.name})</span></span>
                                                                </label>
                                                            ))}
                                                        </div>
                                                        {(!window.twChatSettings?.available_post_types || window.twChatSettings.available_post_types.length === 0) && (
                                                            <p className="description" style={{ marginTop: '0.5rem', color: '#d63638' }}>
                                                                No public post types found.
                                                            </p>
                                                        )}
                                                    </div>
                                                )}
                                            </div>

                                            <div style={{ marginBottom: '1rem' }}>
                                                <label style={{ display: 'block', marginBottom: '0.5rem' }}>
                                                    <input
                                                        type="radio"
                                                        name="tw_chat_search_scope"
                                                        value="specific"
                                                        checked={formData.tw_chat_search_scope === 'specific'}
                                                        onChange={handleInputChange}
                                                        style={{ marginRight: '0.5rem' }}
                                                    />
                                                    <strong>Specific Pages or Posts</strong>
                                                </label>
                                                <p className="description" style={{ marginLeft: '1.75rem', marginTop: '0.25rem' }}>
                                                    Search only within specific pages or posts by their IDs.
                                                </p>
                                                {formData.tw_chat_search_scope === 'specific' && (
                                                    <div style={{ marginLeft: '1.75rem', marginTop: '0.75rem' }}>
                                                        <label htmlFor="tw_chat_search_specific_ids" style={{ display: 'block', marginBottom: '0.25rem', fontWeight: '500' }}>
                                                            Post/Page IDs (comma-separated):
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="tw_chat_search_specific_ids"
                                                            name="tw_chat_search_specific_ids"
                                                            className="regular-text"
                                                            value={formData.tw_chat_search_specific_ids}
                                                            onChange={handleInputChange}
                                                            placeholder="123, 456, 789"
                                                            style={{ maxWidth: '400px' }}
                                                        />
                                                        <p className="description" style={{ marginTop: '0.25rem' }}>
                                                            Enter post or page IDs separated by commas.
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr valign="top">
                                        <th scope="row">Exclude Links</th>
                                        <td>
                                            <p className="description" style={{ marginBottom: '0.75rem' }}>
                                                Select post types to exclude from link generation. The AI can still search and reference content from these post types, but won't provide direct links to them.
                                            </p>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                {window.twChatSettings?.available_post_types?.map((postType) => (
                                                    <label key={postType.name} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                        <input
                                                            type="checkbox"
                                                            checked={formData.tw_chat_exclude_links?.includes(postType.name) || false}
                                                            onChange={() => handleExcludeLinksChange(postType.name)}
                                                        />
                                                        <span>{postType.label} <span style={{ color: '#666', fontSize: '0.9em' }}>({postType.name})</span></span>
                                                    </label>
                                                ))}
                                            </div>
                                            {(!window.twChatSettings?.available_post_types || window.twChatSettings.available_post_types.length === 0) && (
                                                <p className="description" style={{ marginTop: '0.5rem', color: '#d63638' }}>
                                                    No public post types found.
                                                </p>
                                            )}
                                        </td>
                                    </tr>
                                </>
                            )}
                        </tbody>
                    </table>

                    <h3>Integrations</h3>
                    <table className="form-table">
                        <tbody>
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
                            {formData.tw_chat_webhook_address && (
                                <tr valign="top">
                                    <th scope="row">Webhook Data Structure</th>
                                    <td>
                                        <p className="description tw-webhook-schema-description">
                                            Define the fields the assistant should collect before sending data to the webhook. This structure is automatically included in the AI prompt.
                                        </p>
                                        <WebhookSchemaBuilder
                                            value={formData.tw_chat_webhook_schema}
                                            onChange={handleWebhookSchemaChange}
                                        />
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </>
            ) : (
                // Voice widget specific fields
                <>
                    <h3>Voice Configuration</h3>
                    <table className="form-table">
                        <tbody>
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
                        </tbody>
                    </table>
                </>
            )}

            <p className="submit">
                {!isSaving ? (
                    <input className="button button-hero button-primary" type="submit" value="Submit" />
                ) : (
                    <p><span className="spinner is-active"></span> Saving</p>
                )}
            </p>
        </form> 
    );
};

SaveWidgetForm.propTypes = {
    currentWidget: PropTypes.object,
    onSave: PropTypes.func.isRequired
};

export default SaveWidgetForm;