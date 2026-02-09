import { useState, useEffect } from 'react';

/**
 * Slider input component for CSS variable customization.
 * Displays a range slider with numeric input and unit label.
 */
function SliderInput({ label, variable, value, defaultValue, savedValue, onChange, min = 0, max = 100, step = 1, unit = 'px' }) {
  const parseNumeric = (val) => {
    const num = parseFloat(val);
    return isNaN(num) ? 0 : num;
  };

  const [localValue, setLocalValue] = useState(parseNumeric(value || defaultValue));
  const isModified = value && value !== (savedValue || defaultValue);

  useEffect(() => {
    setLocalValue(parseNumeric(value || defaultValue));
  }, [value, defaultValue]);

  const handleSliderChange = (e) => {
    const num = parseFloat(e.target.value);
    setLocalValue(num);
    onChange(variable, num + unit);
  };

  const handleTextChange = (e) => {
    const num = parseFloat(e.target.value);
    if (!isNaN(num)) {
      setLocalValue(num);
      onChange(variable, num + unit);
    }
  };

  const handleReset = () => {
    const resetValue = savedValue || defaultValue;
    const resetNum = parseNumeric(resetValue);
    setLocalValue(resetNum);
    onChange(variable, resetValue);
  };

  return (
    <div className={`tw-style-input tw-style-input-slider ${isModified ? 'tw-style-input-modified' : ''}`}>
      <label className="tw-style-input-label">{label}</label>
      <div className="tw-style-input-controls">
        <input
          type="range"
          className="tw-style-slider"
          min={min}
          max={max}
          step={step}
          value={localValue}
          onChange={handleSliderChange}
          aria-label={`Slider for ${label}`}
        />
        <div className="tw-style-slider-value">
          <input
            type="number"
            className="tw-style-input-number"
            value={localValue}
            onChange={handleTextChange}
            min={min}
            max={max}
            step={step}
          />
          <span className="tw-style-input-unit">{unit}</span>
        </div>
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

export default SliderInput;
