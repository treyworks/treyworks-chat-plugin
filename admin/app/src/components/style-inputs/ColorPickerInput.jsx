import { useState, useRef, useEffect } from 'react';

/**
 * Color picker input component for CSS variable customization.
 * Displays a color swatch, hex text input, and reset button.
 */
function ColorPickerInput({ label, variable, value, defaultValue, savedValue, onChange }) {
  const [localValue, setLocalValue] = useState(value ?? defaultValue);
  const colorInputRef = useRef(null);
  const isModified = value !== savedValue;

  useEffect(() => {
    setLocalValue(value ?? defaultValue);
  }, [value, defaultValue]);

  const handleColorChange = (e) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    onChange(variable, newValue);
  };

  const handleTextChange = (e) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    if (/^#([0-9A-Fa-f]{3}){1,2}$/.test(newValue) || newValue === 'transparent') {
      onChange(variable, newValue);
    }
  };

  const handleReset = () => {
    const resetValue = savedValue || defaultValue;
    setLocalValue(resetValue);
    onChange(variable, resetValue);
  };

  const handleSwatchClick = () => {
    if (colorInputRef.current) {
      colorInputRef.current.click();
    }
  };

  return (
    <div className={`tw-style-input tw-style-input-color ${isModified ? 'tw-style-input-modified' : ''}`}>
      <label className="tw-style-input-label">{label}</label>
      <div className="tw-style-input-controls">
        <button
          type="button"
          className="tw-style-color-swatch"
          onClick={handleSwatchClick}
          aria-label={`Pick color for ${label}`}
        >
          <span
            className="tw-style-color-swatch-inner"
            style={{ backgroundColor: localValue }}
          ></span>
        </button>
        <input
          ref={colorInputRef}
          type="color"
          className="tw-style-color-native"
          value={localValue.startsWith('#') ? localValue : '#000000'}
          onChange={handleColorChange}
          aria-label={`Color picker for ${label}`}
        />
        <input
          type="text"
          className="tw-style-input-text"
          value={localValue}
          onChange={handleTextChange}
          placeholder={defaultValue}
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

export default ColorPickerInput;
