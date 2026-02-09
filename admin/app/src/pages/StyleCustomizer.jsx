import { useState, useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import ColorPickerInput from '../components/style-inputs/ColorPickerInput';
import SliderInput from '../components/style-inputs/SliderInput';
import SelectInput from '../components/style-inputs/SelectInput';
import TextInput from '../components/style-inputs/TextInput';
import ImageInput from '../components/style-inputs/ImageInput';
import CheckboxInput from '../components/style-inputs/CheckboxInput';
import StylePreview from '../components/StylePreview';

/**
 * Section configuration for the Style Customizer.
 * Maps each CSS variable to its input type, label, and options.
 */
const CHAT_BUBBLE_SECTIONS = [
  {
    key: 'chat_bubble_button',
    title: 'Chat Bubble Button',
    icon: 'dashicons-format-chat',
    fields: [
      { variable: '--tw-chat-bubble-size-mobile', label: 'Bubble Size (Mobile)', type: 'slider', min: 40, max: 150, unit: 'px' },
      { variable: '--tw-chat-bubble-size', label: 'Bubble Size (Desktop)', type: 'slider', min: 40, max: 150, unit: 'px' },
      { variable: '--tw-chat-bubble-border-radius', label: 'Border Radius', type: 'text' },
      { variable: '--tw-chat-bubble-background', label: 'Background', type: 'color' },
      { variable: '--tw-chat-bubble-padding', label: 'Padding', type: 'text' },
      { variable: '--tw-chat-bubble-border', label: 'Border', type: 'text' },
      { variable: '--tw-chat-bubble-box-shadow', label: 'Box Shadow', type: 'text' },
      { variable: '--tw-chat-bubble-hover-background', label: 'Hover Background', type: 'color' },
      { variable: '--tw-chat-bubble-hover-color', label: 'Hover Text Color', type: 'color' },
    ],
  },
  {
    key: 'chat_bubble_text',
    title: 'Chat Bubble Text',
    icon: 'dashicons-editor-textcolor',
    fields: [
      { variable: '--tw-chat-bubble-color', label: 'Text Color', type: 'color' },
      { variable: '--tw-chat-bubble-font-family', label: 'Font Family', type: 'text' },
      { variable: '--tw-chat-bubble-font-size', label: 'Font Size', type: 'slider', min: 10, max: 32, unit: 'px' },
      { variable: '--tw-chat-bubble-font-weight', label: 'Font Weight', type: 'select', options: [
        { value: '400', label: 'Normal (400)' },
        { value: '600', label: 'Semi-Bold (600)' },
        { value: '700', label: 'Bold (700)' },
      ]},
      { variable: '--tw-chat-bubble-gap', label: 'Spacing', type: 'slider', min: 0, max: 20, unit: 'px', hiddenWhen: { variable: '--tw-chat-bubble-text-tooltip', value: '1' } },
      { variable: '--tw-chat-bubble-text-tooltip', label: 'Show Text as Tooltip', type: 'checkbox' },
      { variable: '--tw-chat-bubble-tooltip-background', label: 'Tooltip Background', type: 'color', hiddenWhen: { variable: '--tw-chat-bubble-text-tooltip', value: '0' } },
    ],
  },
  {
    key: 'chat_bubble_image',
    title: 'Chat Bubble Image',
    icon: 'dashicons-format-image',
    fields: [
      { variable: '--tw-chat-bubble-image', label: 'Bubble Image', type: 'image' },
      { variable: '--tw-chat-bubble-image-size', label: 'Image Size', type: 'slider', min: 10, max: 100, unit: '%' },
    ],
  },
];

const CHAT_SECTIONS = [
  {
    key: 'chat_interface',
    title: 'Chat Interface',
    icon: 'dashicons-laptop',
    fields: [
      { variable: '--tw-chat-interface-width-mobile', label: 'Width (Mobile)', type: 'text' },
      { variable: '--tw-chat-interface-width', label: 'Width (Desktop)', type: 'slider', min: 300, max: 800, unit: 'px' },
      { variable: '--tw-chat-interface-height-mobile', label: 'Height (Mobile)', type: 'text' },
      { variable: '--tw-chat-interface-height', label: 'Height (Desktop)', type: 'slider', min: 300, max: 900, unit: 'px' },
      { variable: '--tw-chat-background', label: 'Background', type: 'color' },
      { variable: '--tw-chat-interface-border', label: 'Border', type: 'text' },
      { variable: '--tw-chat-interface-box-shadow', label: 'Box Shadow', type: 'text' },
      { variable: '--tw-chat-interface-border-radius', label: 'Border Radius', type: 'slider', min: 0, max: 30, unit: 'px' },
      { variable: '--tw-chat-position-bottom', label: 'Position Bottom', type: 'slider', min: 0, max: 100, unit: 'px' },
      { variable: '--tw-chat-position-right', label: 'Position Right', type: 'slider', min: 0, max: 100, unit: 'px' },
    ],
  },
  {
    key: 'chat_header',
    title: 'Chat Header',
    icon: 'dashicons-admin-customizer',
    fields: [
      { variable: '--tw-chat-header-background', label: 'Background', type: 'color' },
      { variable: '--tw-chat-header-color', label: 'Text Color', type: 'color' },
      { variable: '--tw-chat-header-padding', label: 'Padding', type: 'text' },
      { variable: '--tw-chat-header-button-color', label: 'Button Color', type: 'color' },
      { variable: '--tw-chat-header-close-size', label: 'Close Button Size', type: 'slider', min: 16, max: 48, unit: 'px' },
      { variable: '--tw-chat-logo-width', label: 'Logo Width', type: 'slider', min: 40, max: 200, unit: 'px' },
    ],
  },
  {
    key: 'chat_messages',
    title: 'Chat Messages',
    icon: 'dashicons-admin-comments',
    fields: [
      { variable: '--tw-chat-message-background', label: 'Background', type: 'color' },
      { variable: '--tw-chat-message-color', label: 'Text Color', type: 'color' },
      { variable: '--tw-chat-message-border-radius', label: 'Border Radius', type: 'slider', min: 0, max: 30, unit: 'px' },
      { variable: '--tw-chat-message-box-shadow', label: 'Box Shadow', type: 'text' },
      { variable: '--tw-chat-message-border', label: 'Border', type: 'text' },
      { variable: '--tw-chat-message-font-size', label: 'Font Size', type: 'slider', min: 8, max: 32, unit: 'px' },
      { variable: '--tw-chat-message-width', label: 'Max Width', type: 'text' },
      { variable: '--tw-chat-message-spacing', label: 'Spacing', type: 'slider', min: 0.25, max: 3, step: 0.25, unit: 'rem' },
      { variable: '--tw-chat-message-user-background', label: 'User Message Background', type: 'color' },
      { variable: '--tw-chat-message-user-color', label: 'User Message Color', type: 'color' },
      { variable: '--tw-chat-message-error-color', label: 'Error Message Color', type: 'color' },
      { variable: '--tw-chat-message-heading-font-weight', label: 'Heading Font Weight', type: 'select', options: [
        { value: '400', label: 'Normal (400)' },
        { value: '600', label: 'Semi-Bold (600)' },
        { value: '700', label: 'Bold (700)' },
      ]},
      { variable: '--tw-chat-message-link-font-weight', label: 'Link Font Weight', type: 'select', options: [
        { value: 'normal', label: 'Normal' },
        { value: 'bold', label: 'Bold' },
      ]},
    ],
  },
  {
    key: 'chat_input',
    title: 'Chat Input',
    icon: 'dashicons-edit',
    fields: [
      { variable: '--tw-chat-input-background', label: 'Background', type: 'color' },
      { variable: '--tw-chat-input-color', label: 'Text Color', type: 'color' },
      { variable: '--tw-chat-input-border', label: 'Border', type: 'text' },
      { variable: '--tw-chat-input-border-radius', label: 'Border Radius', type: 'slider', min: 0, max: 30, unit: 'px' },
      { variable: '--tw-chat-input-box-shadow', label: 'Box Shadow', type: 'text' },
      { variable: '--tw-chat-input-font-size', label: 'Font Size', type: 'slider', min: 8, max: 32, unit: 'px' },
      { variable: '--tw-chat-input-placeholder-color', label: 'Placeholder Color', type: 'color' },
      { variable: '--tw-chat-input-max-width', label: 'Max Width', type: 'text' },
      { variable: '--tw-chat-send-button-image', label: 'Send Button Image', type: 'image' },
    ],
  },
  {
    key: 'chat_suggested_answers',
    title: 'Suggested Answers',
    icon: 'dashicons-lightbulb',
    fields: [
      { variable: '--tw-chat-suggested-answer-font-size', label: 'Font Size', type: 'slider', min: 8, max: 32, unit: 'px' },
      { variable: '--tw-chat-suggested-answer-padding', label: 'Padding', type: 'text' },
      { variable: '--tw-chat-suggested-answer-border-radius', label: 'Border Radius', type: 'slider', min: 0, max: 30, unit: 'px' },
      { variable: '--tw-chat-suggested-answer-background', label: 'Background', type: 'color' },
      { variable: '--tw-chat-suggested-answer-color', label: 'Text Color', type: 'color' },
      { variable: '--tw-chat-suggested-answer-border', label: 'Border', type: 'text' },
      { variable: '--tw-chat-suggested-answer-box-shadow', label: 'Box Shadow', type: 'text' },
      { variable: '--tw-chat-suggested-answer-hover-background', label: 'Hover Background', type: 'color' },
      { variable: '--tw-chat-suggested-answer-hover-color', label: 'Hover Text Color', type: 'color' },
    ],
  },
  {
    key: 'chat_disclaimer',
    title: 'Disclaimer',
    icon: 'dashicons-info-outline',
    fields: [
      { variable: '--tw-chat-disclaimer-background', label: 'Background', type: 'color' },
      { variable: '--tw-chat-disclaimer-color', label: 'Text Color', type: 'color' },
      { variable: '--tw-chat-disclaimer-font-size', label: 'Font Size', type: 'slider', min: 8, max: 24, unit: 'px' },
      { variable: '--tw-chat-disclaimer-padding', label: 'Padding', type: 'text' },
      { variable: '--tw-chat-disclaimer-text-align', label: 'Text Align', type: 'select', options: [
        { value: 'left', label: 'Left' },
        { value: 'center', label: 'Center' },
        { value: 'right', label: 'Right' },
      ]},
    ],
  },
  {
    key: 'chat_embedded',
    title: 'Embedded Widget',
    icon: 'dashicons-embed-generic',
    fields: [
      { variable: '--tw-chat-interface-embedded-width', label: 'Width', type: 'slider', min: 300, max: 1000, unit: 'px' },
      { variable: '--tw-chat-interface-embedded-max-width', label: 'Max Width', type: 'text' },
      { variable: '--tw-chat-interface-embedded-height', label: 'Height', type: 'slider', min: 300, max: 900, unit: 'px' },
      { variable: '--tw-chat-interface-embedded-max-height', label: 'Max Height', type: 'text' },
    ],
  },
  {
    key: 'chat_mobile',
    title: 'Mobile Overrides',
    icon: 'dashicons-smartphone',
    fields: [
      { variable: '--tw-chat-interface-width-mobile', label: 'Interface Width', type: 'text' },
      { variable: '--tw-chat-interface-width-height', label: 'Interface Height', type: 'text' },
      { variable: '--tw-chat-bubble-size-mobile', label: 'Bubble Size', type: 'slider', min: 40, max: 120, unit: 'px' },
      { variable: '--tw-chat-bubble-font-size-mobile', label: 'Bubble Font Size', type: 'slider', min: 10, max: 24, unit: 'px' },
      { variable: '--tw-chat-bubble-icon-size-mobile', label: 'Bubble Icon Size', type: 'slider', min: 20, max: 60, unit: 'px' },
    ],
  },
];

const VOICE_SECTIONS = [
  {
    key: 'voice_container',
    title: 'Voice Container',
    icon: 'dashicons-microphone',
    fields: [
      { variable: '--tw-voice-container-max-width', label: 'Max Width', type: 'slider', min: 150, max: 600, unit: 'px' },
      { variable: '--tw-voice-container-padding', label: 'Padding', type: 'text' },
      { variable: '--tw-voice-container-border-radius', label: 'Border Radius', type: 'slider', min: 0, max: 30, unit: 'px' },
      { variable: '--tw-voice-container-background', label: 'Background', type: 'color' },
      { variable: '--tw-voice-container-box-shadow', label: 'Box Shadow', type: 'text' },
    ],
  },
  {
    key: 'voice_button',
    title: 'Voice Button',
    icon: 'dashicons-controls-volumeon',
    fields: [
      { variable: '--tw-voice-button-size-mobile', label: 'Button Size (Mobile)', type: 'slider', min: 40, max: 150, unit: 'px' },
      { variable: '--tw-voice-button-size', label: 'Button Size (Desktop)', type: 'slider', min: 40, max: 150, unit: 'px' },
      { variable: '--tw-voice-button-background', label: 'Background', type: 'color' },
      { variable: '--tw-voice-button-font-size', label: 'Icon Size', type: 'slider', min: 12, max: 48, unit: 'px' },
      { variable: '--tw-voice-button-active-background', label: 'Active Background', type: 'color' },
      { variable: '--tw-voice-button-icon-image', label: 'Icon Image', type: 'image' },
      { variable: '--tw-voice-button-hover-background', label: 'Hover Background', type: 'color' },
    ],
  },
  {
    key: 'voice_status',
    title: 'Voice Status',
    icon: 'dashicons-visibility',
    fields: [
      { variable: '--tw-voice-status-font-size', label: 'Font Size', type: 'slider', min: 10, max: 24, unit: 'px' },
      { variable: '--tw-voice-status-color', label: 'Text Color', type: 'color' },
      { variable: '--tw-voice-status-background', label: 'Background', type: 'color' },
      { variable: '--tw-voice-status-border-radius', label: 'Border Radius', type: 'slider', min: 0, max: 20, unit: 'px' },
    ],
  },
  {
    key: 'voice_dialog',
    title: 'Confirmation Dialog',
    icon: 'dashicons-shield',
    fields: [
      { variable: '--tw-voice-dialog-overlay-background', label: 'Overlay Background', type: 'color' },
      { variable: '--tw-voice-dialog-background', label: 'Background', type: 'color' },
      { variable: '--tw-voice-dialog-border-radius', label: 'Border Radius', type: 'slider', min: 0, max: 24, unit: 'px' },
      { variable: '--tw-voice-dialog-title-color', label: 'Title Color', type: 'color' },
      { variable: '--tw-voice-dialog-text-color', label: 'Text Color', type: 'color' },
      { variable: '--tw-voice-dialog-button-confirm-background', label: 'Confirm Background', type: 'color' },
      { variable: '--tw-voice-dialog-button-confirm-color', label: 'Confirm Text Color', type: 'color' },
      { variable: '--tw-voice-dialog-button-confirm-hover-background', label: 'Confirm Hover Background', type: 'color' },
      { variable: '--tw-voice-dialog-button-cancel-background', label: 'Cancel Background', type: 'color' },
      { variable: '--tw-voice-dialog-button-cancel-color', label: 'Cancel Text Color', type: 'color' },
      { variable: '--tw-voice-dialog-button-cancel-hover-background', label: 'Cancel Hover Background', type: 'color' },
    ],
  },
];

/**
 * Renders a single field based on its type configuration.
 */
function renderField(field, defaults, currentValues, savedValues, widgetType, handleChange) {
  const defaultValue = defaults[field.variable] || '';
  const currentValue = currentValues[widgetType]?.[field.variable] || defaultValue;
  const savedValue = savedValues[widgetType]?.[field.variable] || defaultValue;

  const commonProps = {
    key: field.variable,
    label: field.label,
    variable: field.variable,
    value: currentValue,
    defaultValue: defaultValue,
    savedValue: savedValue,
    onChange: (variable, value) => handleChange(widgetType, variable, value),
  };

  switch (field.type) {
    case 'color':
      return <ColorPickerInput {...commonProps} />;
    case 'slider':
      return (
        <SliderInput
          {...commonProps}
          min={field.min || 0}
          max={field.max || 100}
          step={field.step || 1}
          unit={field.unit || 'px'}
        />
      );
    case 'select':
      return <SelectInput {...commonProps} options={field.options} />;
    case 'image':
      return <ImageInput {...commonProps} />;
    case 'checkbox':
      return <CheckboxInput {...commonProps} />;
    case 'text':
    default:
      return <TextInput {...commonProps} />;
  }
}

/**
 * StyleCustomizer page component.
 * Provides a visual interface for customizing widget CSS variables.
 */
function StyleCustomizer() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [defaults, setDefaults] = useState({});
  const [currentValues, setCurrentValues] = useState({ chat: {}, voice: {} });
  const [savedValues, setSavedValues] = useState({ chat: {}, voice: {} });
  const [expandedSections, setExpandedSections] = useState({});
  const [activeWidget, setActiveWidget] = useState('bubble');
  const [importPending, setImportPending] = useState(null);
  const fileInputRef = useRef(null);

  // Fetch style data on mount
  useEffect(() => {
    fetchStyles();
  }, []);

  const fetchStyles = async () => {
    try {
      const formData = new FormData();
      formData.append('action', 'get_widget_styles');
      formData.append('nonce', window.twChatSettings?.nonce);

      const response = await fetch(window.twChatSettings?.ajax_url, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        // Flatten section defaults into a single object for comparison
        const chatDefaults = {};
        const voiceDefaults = {};

        Object.values(result.data.chat_defaults).forEach((section) => {
          Object.assign(chatDefaults, section);
        });
        Object.values(result.data.voice_defaults).forEach((section) => {
          Object.assign(voiceDefaults, section);
        });

        setDefaults({ ...chatDefaults, ...voiceDefaults });
        setCurrentValues(result.data.current);
        setSavedValues(JSON.parse(JSON.stringify(result.data.current)));
      } else {
        toast.error('Failed to load style settings');
      }
    } catch (error) {
      toast.error('Error loading style settings');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (widgetType, variable, value) => {
    setCurrentValues((prev) => ({
      ...prev,
      [widgetType]: {
        ...prev[widgetType],
        [variable]: value,
      },
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const formData = new FormData();
      formData.append('action', 'save_widget_styles');
      formData.append('nonce', window.twChatSettings?.nonce);
      formData.append('styles', JSON.stringify(currentValues));

      const response = await fetch(window.twChatSettings?.ajax_url, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setCurrentValues(result.data.current);
        setSavedValues(JSON.parse(JSON.stringify(result.data.current)));
        toast.success('Styles saved successfully');
      } else {
        toast.error('Failed to save styles');
      }
    } catch (error) {
      toast.error('Error saving styles');
    } finally {
      setSaving(false);
    }
  };

  const handleUndoAll = () => {
    setCurrentValues(JSON.parse(JSON.stringify(savedValues)));
    toast.success('All changes undone');
  };

  const handleUndoSection = (sectionKey, widgetType) => {
    setCurrentValues((prev) => {
      const updated = { ...prev, [widgetType]: { ...prev[widgetType] } };
      const allSections = [...CHAT_BUBBLE_SECTIONS, ...CHAT_SECTIONS, ...VOICE_SECTIONS];
      const sectionConfig = allSections.find((s) => s.key === sectionKey);
      if (sectionConfig) {
        sectionConfig.fields.forEach((field) => {
          updated[widgetType][field.variable] = savedValues[widgetType]?.[field.variable] || defaults[field.variable];
        });
      }
      return updated;
    });
    toast.success('Section changes undone');
  };

  const toggleSection = (sectionKey) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const getModifiedCount = (section, widgetType) => {
    return section.fields.filter(
      (field) => currentValues[widgetType]?.[field.variable] !== savedValues[widgetType]?.[field.variable]
    ).length;
  };

  const hasUnsavedChanges = (section, widgetType) => {
    return section.fields.some(
      (field) => currentValues[widgetType]?.[field.variable] !== savedValues[widgetType]?.[field.variable]
    );
  };

  const handleExport = () => {
    const exportData = {
      version: 1,
      plugin: 'treyworks-chat',
      exported_at: new Date().toISOString(),
      styles: savedValues,
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tw-chat-styles-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Styles exported successfully');
  };

  const handleImportFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        if (!data.styles || !data.styles.chat || !data.styles.voice) {
          toast.error('Invalid style file format');
          return;
        }
        setImportPending(data.styles);
      } catch {
        toast.error('Failed to parse import file');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleImportConfirm = async () => {
    if (!importPending) return;
    setCurrentValues(JSON.parse(JSON.stringify(importPending)));
    setImportPending(null);
    toast.success('Styles imported. Review the changes and click Save Styles to apply.');
  };

  const handleImportCancel = () => {
    setImportPending(null);
  };

  const hasAnyUnsavedChanges = () => {
    const sectionsMap = {
      bubble: CHAT_BUBBLE_SECTIONS,
      chat: CHAT_SECTIONS,
      voice: VOICE_SECTIONS,
    };
    const widgetType = activeWidget === 'voice' ? 'voice' : 'chat';
    return (sectionsMap[activeWidget] || []).some((section) => hasUnsavedChanges(section, widgetType));
  };

  const renderSections = (sections, widgetType) => {
    return sections.map((section) => {
      const isExpanded = expandedSections[section.key] || false;
      const modifiedCount = getModifiedCount(section, widgetType);

      return (
        <div key={section.key} className="tw-style-section">
          <button
            type="button"
            className={`tw-style-section-header ${isExpanded ? 'expanded' : ''}`}
            onClick={() => toggleSection(section.key)}
            aria-expanded={isExpanded}
          >
            <div className="tw-style-section-header-left">
              <span className={`dashicons ${section.icon}`}></span>
              <span className="tw-style-section-title">{section.title}</span>
              {modifiedCount > 0 && (
                <span className="tw-style-section-badge">{modifiedCount} unsaved</span>
              )}
            </div>
            <span className={`dashicons ${isExpanded ? 'dashicons-arrow-up-alt2' : 'dashicons-arrow-down-alt2'}`}></span>
          </button>
          {isExpanded && (
            <div className="tw-style-section-body">
              <div className="tw-style-section-fields">
                {section.fields
                  .filter((field) => {
                    if (!field.hiddenWhen) return true;
                    const depValue = currentValues[widgetType]?.[field.hiddenWhen.variable] || defaults[field.hiddenWhen.variable] || '';
                    return depValue !== field.hiddenWhen.value;
                  })
                  .map((field) =>
                    renderField(field, defaults, currentValues, savedValues, widgetType, handleChange)
                  )}
              </div>
              {hasUnsavedChanges(section, widgetType) && (
                <div className="tw-style-section-actions">
                  <button
                    type="button"
                    className="button"
                    onClick={() => handleUndoSection(section.key, widgetType)}
                  >
                    Undo Changes
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      );
    });
  };

  if (loading) {
    return (
      <div className="tw-style-customizer">
        <p>Loading style settings...</p>
      </div>
    );
  }

  return (
    <div className="tw-style-customizer">
      <div className="tw-style-customizer-header">
        <div>
          <h2>Style Customizer</h2>
          <p className="tw-style-customizer-description">
            Customize the appearance of your chat and voice widgets using the controls below. Changes are applied to all widgets on your site.
          </p>
        </div>
        <div className="tw-style-customizer-actions">
          <button
            type="button"
            className="button"
            onClick={handleExport}
          >
            <span className="dashicons dashicons-download"></span> Export
          </button>
          <button
            type="button"
            className="button"
            onClick={() => fileInputRef.current?.click()}
          >
            <span className="dashicons dashicons-upload"></span> Import
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            style={{ display: 'none' }}
            onChange={handleImportFile}
          />
          {hasAnyUnsavedChanges() && (
            <button
              type="button"
              className="button"
              onClick={handleUndoAll}
            >
              Undo All Changes
            </button>
          )}
          <button
            type="button"
            className="button button-primary"
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? 'Saving...' : 'Save Styles'}
          </button>
        </div>
      </div>

      <div className="nav-tab-wrapper">
        <button
          type="button"
          className={`nav-tab ${activeWidget === 'bubble' ? 'nav-tab-active' : ''}`}
          onClick={() => setActiveWidget('bubble')}
        >
          Chat Bubble
        </button>
        <button
          type="button"
          className={`nav-tab ${activeWidget === 'chat' ? 'nav-tab-active' : ''}`}
          onClick={() => setActiveWidget('chat')}
        >
          Chat Widget
        </button>
        <button
          type="button"
          className={`nav-tab ${activeWidget === 'voice' ? 'nav-tab-active' : ''}`}
          onClick={() => setActiveWidget('voice')}
        >
          Voice Widget
        </button>
      </div>

      {importPending && (
        <div className="tw-style-import-confirm">
          <div className="tw-style-import-confirm-inner">
            <span className="dashicons dashicons-warning"></span>
            <div>
              <strong>Import styles?</strong>
              <p>This will replace all current unsaved changes with the imported values. You will still need to click Save Styles to apply them permanently.</p>
            </div>
            <div className="tw-style-import-confirm-actions">
              <button type="button" className="button" onClick={handleImportCancel}>Cancel</button>
              <button type="button" className="button button-primary" onClick={handleImportConfirm}>Confirm Import</button>
            </div>
          </div>
        </div>
      )}

      <div className="tw-style-customizer-body">
        <div className="tw-style-sections">
          {activeWidget === 'bubble' && renderSections(CHAT_BUBBLE_SECTIONS, 'chat')}
          {activeWidget === 'chat' && renderSections(CHAT_SECTIONS, 'chat')}
          {activeWidget === 'voice' && renderSections(VOICE_SECTIONS, 'voice')}
        </div>
        <StylePreview previewType={activeWidget} currentValues={currentValues} />
      </div>
    </div>
  );
}

export default StyleCustomizer;
