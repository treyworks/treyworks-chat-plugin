import { useState, useEffect } from 'react';

/**
 * Checkbox input component for style customization.
 * Stores '1' (checked) or '0' (unchecked) as the value.
 */
function CheckboxInput({ label, variable, value, defaultValue, savedValue, onChange }) {
  const isChecked = value === '1';
  const isModified = value && value !== (savedValue || defaultValue);

  const handleChange = (e) => {
    onChange(variable, e.target.checked ? '1' : '0');
  };

  const handleReset = () => {
    const resetValue = savedValue || defaultValue;
    onChange(variable, resetValue);
  };

  return (
    <div className={`tw-style-input tw-style-input-checkbox ${isModified ? 'tw-style-input-modified' : ''}`}>
      <label className="tw-style-input-label">{label}</label>
      <div className="tw-style-input-controls tw-style-checkbox-controls">
        <label className="tw-style-checkbox-label">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleChange}
          />
          <span>{isChecked ? 'Yes' : 'No'}</span>
        </label>
        {isModified && (
          <button
            type="button"
            className="tw-style-input-reset"
            onClick={handleReset}
            title="Reset to saved value"
          >
            <span className="dashicons dashicons-undo"></span>
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckboxInput;
