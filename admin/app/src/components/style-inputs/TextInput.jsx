import { useState, useEffect } from 'react';

/**
 * Free-form text input component for CSS variable customization.
 * Used for complex values like box-shadow, border shorthand, etc.
 */
function TextInput({ label, variable, value, defaultValue, savedValue, onChange }) {
  const [localValue, setLocalValue] = useState(value || defaultValue);
  const isModified = value && value !== (savedValue || defaultValue);

  useEffect(() => {
    setLocalValue(value || defaultValue);
  }, [value, defaultValue]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    onChange(variable, newValue);
  };

  const handleReset = () => {
    const resetValue = savedValue || defaultValue;
    setLocalValue(resetValue);
    onChange(variable, resetValue);
  };

  return (
    <div className={`tw-style-input tw-style-input-text-field ${isModified ? 'tw-style-input-modified' : ''}`}>
      <label className="tw-style-input-label">{label}</label>
      <div className="tw-style-input-controls">
        <input
          type="text"
          className="tw-style-input-text"
          value={localValue}
          onChange={handleChange}
          placeholder={defaultValue}
          aria-label={`Text input for ${label}`}
        />
        {isModified && (
          <button
            type="button"
            className="tw-style-reset-btn"
            onClick={handleReset}
            title="Reset to default"
            aria-label={`Reset ${label} to default`}
          >
            <span className="dashicons dashicons-image-rotate"></span>
          </button>
        )}
      </div>
      <span className="tw-style-input-variable">{variable}</span>
    </div>
  );
}

export default TextInput;
