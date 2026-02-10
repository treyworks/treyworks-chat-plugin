import React, { useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const PromptGenerator = ({ currentPrompt, widgetConfig, onApply, onClose }) => {
    const [description, setDescription] = useState('');
    const [generatedPrompt, setGeneratedPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [mode, setMode] = useState(currentPrompt ? 'improve' : 'generate');

    const handleGenerate = useCallback(async () => {
        if (!description.trim() && mode === 'generate') return;

        setIsLoading(true);
        setError('');
        setGeneratedPrompt('');

        try {
            const formData = new FormData();
            formData.append('action', 'tw_chat_generate_prompt');
            formData.append('_ajax_nonce', window.twChatSettings?.nonce);
            formData.append('description', description);
            formData.append('mode', mode);
            formData.append('current_prompt', mode === 'improve' ? currentPrompt : '');
            formData.append('has_site_search', widgetConfig.hasSiteSearch ? '1' : '0');
            formData.append('has_webhook', widgetConfig.hasWebhook ? '1' : '0');
            formData.append('has_webhook_schema', widgetConfig.hasWebhookSchema ? '1' : '0');
            formData.append('webhook_schema', widgetConfig.webhookSchema || '');

            const response = await fetch(window.ajaxurl, {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (result.success) {
                setGeneratedPrompt(result.data.prompt);
            } else {
                setError(result.data?.message || 'Failed to generate prompt.');
            }
        } catch (err) {
            setError('Network error. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }, [description, mode, currentPrompt, widgetConfig]);

    const handleApply = useCallback(() => {
        onApply(generatedPrompt);
    }, [generatedPrompt, onApply]);

    useEffect(() => {
        const parentModal = document.querySelector('.tw-chat-admin-modal');
        if (parentModal) {
            parentModal.style.overflow = 'hidden';
        }
        return () => {
            if (parentModal) {
                parentModal.style.overflow = '';
            }
        };
    }, []);

    return createPortal(
        <div className="tw-prompt-generator-overlay" onClick={onClose}>
            <div className="tw-prompt-generator-modal" onClick={(e) => e.stopPropagation()}>
                <div className="tw-prompt-generator-header">
                    <h3>AI Prompt Generator</h3>
                    <button type="button" className="tw-prompt-generator-close" onClick={onClose}>✕</button>
                </div>

                <div className="tw-prompt-generator-body">
                    {currentPrompt && (
                        <div className="tw-prompt-generator-mode">
                            <label className="tw-prompt-generator-mode-option">
                                <input
                                    type="radio"
                                    name="prompt_mode"
                                    value="generate"
                                    checked={mode === 'generate'}
                                    onChange={() => setMode('generate')}
                                />
                                Generate new prompt
                            </label>
                            <label className="tw-prompt-generator-mode-option">
                                <input
                                    type="radio"
                                    name="prompt_mode"
                                    value="improve"
                                    checked={mode === 'improve'}
                                    onChange={() => setMode('improve')}
                                />
                                Improve existing prompt
                            </label>
                        </div>
                    )}

                    <div className="tw-prompt-generator-input-group">
                        <label htmlFor="tw-prompt-description">
                            {mode === 'improve'
                                ? 'What would you like to improve or change?'
                                : 'Describe what you want your chatbot to do'}
                        </label>
                        <textarea
                            id="tw-prompt-description"
                            className="tw-prompt-generator-textarea"
                            rows="4"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder={mode === 'improve'
                                ? 'e.g. Make it more friendly, add instructions to collect email addresses...'
                                : 'e.g. Answer questions about our dental practice and help schedule appointments...'}
                        />
                    </div>

                    {(widgetConfig.hasSiteSearch || widgetConfig.hasWebhook) && (
                        <div className="tw-prompt-generator-context">
                            <span className="tw-prompt-generator-context-label">Detected tools:</span>
                            {widgetConfig.hasSiteSearch && (
                                <span className="tw-prompt-generator-tag">Site Search</span>
                            )}
                            {widgetConfig.hasWebhook && (
                                <span className="tw-prompt-generator-tag">Webhook</span>
                            )}
                        </div>
                    )}

                    <button
                        type="button"
                        className="button button-primary tw-prompt-generator-btn"
                        onClick={handleGenerate}
                        disabled={isLoading || (!description.trim() && mode === 'generate')}
                    >
                        {isLoading ? 'Generating...' : (mode === 'improve' ? 'Improve Prompt' : 'Generate Prompt')}
                    </button>

                    {error && (
                        <div className="tw-prompt-generator-error">{error}</div>
                    )}

                    {generatedPrompt && (
                        <div className="tw-prompt-generator-result">
                            <label>Generated Prompt</label>
                            <textarea
                                className="tw-prompt-generator-preview"
                                rows="12"
                                value={generatedPrompt}
                                onChange={(e) => setGeneratedPrompt(e.target.value)}
                            />
                            <div className="tw-prompt-generator-actions">
                                <button
                                    type="button"
                                    className="button button-primary"
                                    onClick={handleApply}
                                >
                                    Apply to Widget
                                </button>
                                <button
                                    type="button"
                                    className="button"
                                    onClick={() => {
                                        setGeneratedPrompt('');
                                        setDescription('');
                                    }}
                                >
                                    Start Over
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>,
        document.body
    );
};

PromptGenerator.propTypes = {
    currentPrompt: PropTypes.string,
    widgetConfig: PropTypes.shape({
        hasSiteSearch: PropTypes.bool,
        hasWebhook: PropTypes.bool,
        hasWebhookSchema: PropTypes.bool,
        webhookSchema: PropTypes.string,
    }).isRequired,
    onApply: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default PromptGenerator;
