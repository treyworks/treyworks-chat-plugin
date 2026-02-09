import { useState, useEffect, useRef, useCallback } from 'react';
import { Tooltip } from 'react-tooltip';
import chatTemplate from '../../../../widgets/shared/templates/chat-widget-preview.html?raw';
import chatBubbleTemplate from '../../../../widgets/shared/templates/chat-bubble-preview.html?raw';
import voiceTemplate from '../../../../widgets/shared/templates/voice-widget-preview.html?raw';
import chatWidgetCSS from '../../../../widgets/chat-widget/src/App.css?raw';
import voiceWidgetCSS from '../../../../widgets/voice-widget/src/index.css?raw';

/**
 * Maps preview type to its HTML template and CSS source.
 */
const PREVIEW_CONFIG = {
  bubble: { template: chatBubbleTemplate, css: chatWidgetCSS },
  chat:   { template: chatTemplate,       css: chatWidgetCSS },
  voice:  { template: voiceTemplate,      css: voiceWidgetCSS },
};

/**
 * Preview-specific CSS overrides per type.
 */
/**
 * Keys stored alongside CSS variables that are NOT actual CSS properties.
 * These are handled separately (e.g. as img src attributes).
 */
const NON_CSS_KEYS = ['--tw-chat-bubble-image', '--tw-chat-bubble-text-tooltip', '--tw-chat-send-button-image', '--tw-voice-button-icon-image'];

/**
 * Default bubble image URL from plugin assets.
 */
const DEFAULT_BUBBLE_IMAGE = window.twChatSettings?.plugin_dir_url
  ? window.twChatSettings.plugin_dir_url + 'assets/images/chat-bubble-icon.svg'
  : '';

const PREVIEW_OVERRIDES = {
  bubble: `
    .tw-chat-container {
      position: relative !important;
      bottom: auto !important;
      right: auto !important;
    }
  `,
  chat: `
    .tw-chat-container {
      position: relative !important;
      bottom: auto !important;
      right: auto !important;
    }
    .tw-chat-interface {
      margin-bottom: 0 !important;
    }
    .tw-chat-interface.embedded {
      width: var(--tw-chat-interface-width, 500px) !important;
      max-width: 100% !important;
      height: var(--tw-chat-interface-height, 550px) !important;
      max-height: none !important;
    }
    @media screen and (max-width: 767px) {
      .tw-chat-interface.embedded {
        width: var(--tw-chat-interface-width-mobile, 95vw) !important;
        height: var(--tw-chat-interface-height-mobile, 95vh) !important;
      }
    }
  `,
  voice: `
    .tw-voice-dialog-overlay {
      position: absolute !important;
    }
  `,
};

/**
 * Builds the full HTML document for the iframe preview.
 * CSS variables are injected into a dedicated <style id="tw-preview-vars"> block
 * so they can be updated in-place without reloading the iframe.
 */
function buildPreviewDocument(previewType, currentValues) {
  const config = PREVIEW_CONFIG[previewType];
  if (!config) return '';

  const widgetType = previewType === 'voice' ? 'voice' : 'chat';
  const variables = currentValues[widgetType] || {};
  const varDeclarations = Object.entries(variables)
    .filter(([key]) => !NON_CSS_KEYS.includes(key))
    .map(([key, value]) => `  ${key}: ${value};`)
    .join('\n');

  // Set bubble image src for bubble preview
  const bubbleImageUrl = variables['--tw-chat-bubble-image'] || DEFAULT_BUBBLE_IMAGE;

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
      background: #f0f0f1;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 20px;
    }
  </style>
  <style id="tw-preview-vars">
:root {
${varDeclarations}
}
  </style>
  <style>${config.css}</style>
  <style>${PREVIEW_OVERRIDES[previewType] || ''}</style>
</head>
<body>
  ${config.template}
  <script>
    (function() {
      var img = document.getElementById('tw-bubble-preview-image');
      if (img) img.src = ${JSON.stringify(bubbleImageUrl)};
    })();
  </script>
</body>
</html>`;
}

/**
 * Updates CSS variables inside the iframe in-place without reloading.
 */
function updateIframeVariables(iframe, previewType, currentValues) {
  try {
    const iframeDoc = iframe.contentDocument;
    if (!iframeDoc) return;

    const widgetType = previewType === 'voice' ? 'voice' : 'chat';
    const variables = currentValues[widgetType] || {};
    const varDeclarations = Object.entries(variables)
      .filter(([key]) => !NON_CSS_KEYS.includes(key))
      .map(([key, value]) => `  ${key}: ${value};`)
      .join('\n');

    const styleEl = iframeDoc.getElementById('tw-preview-vars');
    if (styleEl) {
      styleEl.textContent = `:root {\n${varDeclarations}\n}`;
    }

    // Update bubble image src
    const img = iframeDoc.getElementById('tw-bubble-preview-image');
    if (img) {
      img.src = variables['--tw-chat-bubble-image'] || DEFAULT_BUBBLE_IMAGE;
    }

    // Toggle bubble text visibility based on tooltip setting
    const textEl = iframeDoc.getElementById('tw-bubble-preview-text');
    const bubbleEl = iframeDoc.querySelector('.tw-chat-bubble');
    if (textEl && bubbleEl) {
      const isTooltip = variables['--tw-chat-bubble-text-tooltip'] === '1';
      textEl.style.display = isTooltip ? 'none' : '';
      bubbleEl.title = isTooltip ? (textEl.textContent || 'Chat') : '';
    }

    // Update voice button icon image
    const voiceIcon = iframeDoc.getElementById('tw-preview-voice-icon');
    const voiceIconImage = iframeDoc.getElementById('tw-preview-voice-icon-image');
    if (voiceIcon && voiceIconImage) {
      const voiceImageUrl = variables['--tw-voice-button-icon-image'] || '';
      if (voiceImageUrl) {
        voiceIcon.style.display = 'none';
        voiceIconImage.src = voiceImageUrl;
        voiceIconImage.style.display = '';
      } else {
        voiceIcon.style.display = '';
        voiceIconImage.style.display = 'none';
      }
    }

    // Update send button image
    const sendIcon = iframeDoc.getElementById('tw-preview-send-icon');
    const sendImage = iframeDoc.getElementById('tw-preview-send-image');
    if (sendIcon && sendImage) {
      const sendImageUrl = variables['--tw-chat-send-button-image'] || '';
      if (sendImageUrl) {
        sendIcon.style.display = 'none';
        sendImage.src = sendImageUrl;
        sendImage.style.display = '';
      } else {
        sendIcon.style.display = '';
        sendImage.style.display = 'none';
      }
    }
  } catch (e) {
    // Cross-origin or not-ready — ignore
  }
}

/**
 * StylePreview component.
 * Renders a live preview of the active widget inside an iframe for complete CSS isolation.
 * CSS variables are updated in-place for instant feedback without iframe reload.
 *
 * @param {string} previewType - 'bubble', 'chat', or 'voice'
 * @param {object} currentValues - { chat: {...}, voice: {...} }
 */
function StylePreview({ previewType, currentValues }) {
  const iframeRef = useRef(null);
  const [previewMode, setPreviewMode] = useState('mobile');
  const [iframeReady, setIframeReady] = useState(false);
  const initializedRef = useRef(false);

  // Check if currentValues has any real data loaded
  const widgetType = previewType === 'voice' ? 'voice' : 'chat';
  const hasValues = Object.keys(currentValues[widgetType] || {}).length > 0;

  // Rebuild iframe when preview type changes or when values first load
  useEffect(() => {
    if (!iframeRef.current) return;
    if (!hasValues && initializedRef.current) return;
    initializedRef.current = true;
    setIframeReady(false);
    const doc = buildPreviewDocument(previewType, currentValues);
    iframeRef.current.srcdoc = doc;
  }, [previewType, hasValues]);

  // Mark iframe as ready once it loads
  const handleIframeLoad = useCallback(() => {
    setIframeReady(true);
  }, []);

  // Live-update CSS variables when values change (no reload)
  useEffect(() => {
    if (!iframeRef.current || !iframeReady) return;
    updateIframeVariables(iframeRef.current, previewType, currentValues);
  }, [currentValues, iframeReady, previewType]);

  const previewLabel = previewType === 'bubble' ? 'Bubble'
    : previewType === 'voice' ? 'Voice Widget'
    : 'Chat Widget';

  const isDesktop = previewMode === 'desktop';

  const frameClasses = [
    'tw-style-preview-frame',
    previewType === 'bubble' ? 'tw-style-preview-frame--bubble' : '',
    isDesktop ? 'tw-style-preview-frame--desktop' : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={`tw-style-preview${isDesktop ? ' tw-style-preview--desktop' : ''}`}>
      <div className="tw-style-preview-header">
        <h3>{previewLabel} Preview</h3>
        <div className="tw-style-preview-toggle">
          <button
            type="button"
            className={`button button-small${!isDesktop ? ' button-primary' : ''}`}
            onClick={() => setPreviewMode('mobile')}
            data-tooltip-id="tw-preview-toggle-tooltip"
            data-tooltip-content="Mobile Preview"
            data-tooltip-place="bottom"
          >
            <span className="dashicons dashicons-smartphone"></span>
          </button>
          <button
            type="button"
            className={`button button-small${isDesktop ? ' button-primary' : ''}`}
            onClick={() => setPreviewMode('desktop')}
            data-tooltip-id="tw-preview-toggle-tooltip"
            data-tooltip-content="Desktop Preview"
            data-tooltip-place="bottom"
          >
            <span className="dashicons dashicons-desktop"></span>
          </button>
          <Tooltip id="tw-preview-toggle-tooltip" />
        </div>
      </div>
      <div className="tw-style-preview-frame-container">
        <iframe
          ref={iframeRef}
          className={frameClasses}
          title={`${previewLabel} Preview`}
          sandbox="allow-same-origin allow-scripts"
          onLoad={handleIframeLoad}
        />
      </div>
    </div>
  );
}

export default StylePreview;
