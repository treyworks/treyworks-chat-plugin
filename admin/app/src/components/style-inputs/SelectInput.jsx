import { useState, useEffect } from 'react';

/**
 * Select dropdown input component for CSS variable customization.
 * Used for predefined options like font-weight, text-align, etc.
 */
function SelectInput({ label, variable, value, defaultValue, savedValue, onChange, options }) {
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
    <div className={`tw-style-input tw-style-input-select ${isModified ? 'tw-style-input-modified' : ''}`}>
      <label className="tw-style-input-label">{label}</label>
      <div className="tw-style-input-controls">
        <select
          className="tw-style-select"
          value={localValue}
          onChange={handleChange}
          aria-label={`Select ${label}`}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
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

export default SelectInput;
