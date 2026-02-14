import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

const FIELD_TYPES = [
    { value: 'string', label: 'Text' },
    { value: 'number', label: 'Number' },
    { value: 'email', label: 'Email' },
    { value: 'boolean', label: 'Yes/No' },
];

const emptyField = () => ({
    id: Date.now() + Math.random(),
    name: '',
    type: 'string',
    required: true,
    description: '',
});

const WebhookSchemaBuilder = ({ value, onChange }) => {
    const [fields, setFields] = useState([]);

    useEffect(() => {
        if (value) {
            try {
                const parsed = JSON.parse(value);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    setFields(parsed.map(f => ({ ...f, id: f.id || Date.now() + Math.random() })));
                    return;
                }
            } catch (e) {
                // invalid JSON, start empty
            }
        }
        setFields([]);
    }, []);

    const emitChange = useCallback((updatedFields) => {
        const cleaned = updatedFields.map(({ id, ...rest }) => rest);
        onChange(JSON.stringify(cleaned));
    }, [onChange]);

    const handleFieldChange = useCallback((id, key, val) => {
        setFields(prev => {
            const updated = prev.map(f => f.id === id ? { ...f, [key]: val } : f);
            emitChange(updated);
            return updated;
        });
    }, [emitChange]);

    const addField = useCallback(() => {
        setFields(prev => {
            const updated = [...prev, emptyField()];
            emitChange(updated);
            return updated;
        });
    }, [emitChange]);

    const removeField = useCallback((id) => {
        setFields(prev => {
            const updated = prev.filter(f => f.id !== id);
            emitChange(updated);
            return updated;
        });
    }, [emitChange]);

    return (
        <div className="tw-webhook-schema-builder">
            {fields.length > 0 && (
                <div className="tw-webhook-schema-header">
                    <span className="tw-webhook-schema-col-name">Field Name</span>
                    <span className="tw-webhook-schema-col-type">Type</span>
                    <span className="tw-webhook-schema-col-required">Required</span>
                    <span className="tw-webhook-schema-col-desc">Description</span>
                    <span className="tw-webhook-schema-col-actions"></span>
                </div>
            )}
            {fields.map(field => (
                <div key={field.id} className="tw-webhook-schema-row">
                    <input
                        className="tw-webhook-schema-col-name"
                        type="text"
                        value={field.name}
                        onChange={(e) => handleFieldChange(field.id, 'name', e.target.value)}
                        placeholder="e.g. email"
                    />
                    <select
                        className="tw-webhook-schema-col-type"
                        value={field.type}
                        onChange={(e) => handleFieldChange(field.id, 'type', e.target.value)}
                    >
                        {FIELD_TYPES.map(t => (
                            <option key={t.value} value={t.value}>{t.label}</option>
                        ))}
                    </select>
                    <label className="tw-webhook-schema-col-required">
                        <input
                            type="checkbox"
                            checked={field.required}
                            onChange={(e) => handleFieldChange(field.id, 'required', e.target.checked)}
                        />
                    </label>
                    <input
                        className="tw-webhook-schema-col-desc"
                        type="text"
                        value={field.description}
                        onChange={(e) => handleFieldChange(field.id, 'description', e.target.value)}
                        placeholder="e.g. Customer's email address"
                    />
                    <button
                        type="button"
                        className="tw-webhook-schema-remove"
                        onClick={() => removeField(field.id)}
                        title="Remove field"
                    >
                        ✕
                    </button>
                </div>
            ))}
            <button
                type="button"
                className="button tw-webhook-schema-add"
                onClick={addField}
            >
                + Add Field
            </button>
        </div>
    );
};

WebhookSchemaBuilder.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default WebhookSchemaBuilder;
