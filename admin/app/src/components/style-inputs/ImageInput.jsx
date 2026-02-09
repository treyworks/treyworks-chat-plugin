import { useState, useEffect } from 'react';

/**
 * Image picker input component for style customization.
 * Opens the WordPress Media Library to select an image.
 * Displays a thumbnail preview of the selected image.
 */
function ImageInput({ label, variable, value, defaultValue, savedValue, onChange }) {
  const [localValue, setLocalValue] = useState(value || defaultValue);
  const isModified = value && value !== (savedValue || defaultValue);

  useEffect(() => {
    setLocalValue(value || defaultValue);
  }, [value, defaultValue]);

  const handleSelectImage = () => {
    if (!window.wp || !window.wp.media) {
      return;
    }

    const frame = window.wp.media({
      title: 'Select Chat Bubble Image',
      button: { text: 'Use This Image' },
      multiple: false,
      library: { type: ['image/jpeg', 'image/png', 'image/svg+xml', 'image/webp', 'image/gif'] },
    });

    frame.on('select', () => {
      const attachment = frame.state().get('selection').first().toJSON();
      const url = attachment.url;
      setLocalValue(url);
      onChange(variable, url);
    });

    frame.open();
  };

  const handleRemoveImage = () => {
    setLocalValue('');
    onChange(variable, '');
  };

  const handleReset = () => {
    const resetValue = savedValue || defaultValue;
    setLocalValue(resetValue);
    onChange(variable, resetValue);
  };

  const defaultSvgUrl = window.twChatSettings?.plugin_dir_url
    ? window.twChatSettings.plugin_dir_url + 'assets/images/chat-bubble-icon.svg'
    : '';

  const displayUrl = localValue || defaultSvgUrl;

  return (
    <div className={`tw-style-input tw-style-input-image ${isModified ? 'tw-style-input-modified' : ''}`}>
      <label className="tw-style-input-label">{label}</label>
      <div className="tw-style-input-controls tw-style-image-controls">
        <div className="tw-style-image-preview">
          {displayUrl ? (
            <img src={displayUrl} alt="Preview" className="tw-style-image-thumbnail" />
          ) : (
            <span className="tw-style-image-placeholder">No image</span>
          )}
        </div>
        <div className="tw-style-image-actions">
          <button type="button" className="button" onClick={handleSelectImage}>
            {localValue ? 'Change Image' : 'Select Image'}
          </button>
          {localValue && (
            <button type="button" className="button" onClick={handleRemoveImage}>
              Remove
            </button>
          )}
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
    </div>
  );
}

export default ImageInput;
