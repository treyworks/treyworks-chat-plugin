# Treyworks Chat Plugin — CSS Style Guide

This document lists all CSS custom properties (variables) used by the Treyworks Chat Plugin widgets. These variables control the visual appearance of both text chat and voice chat widgets.

All variables are prefixed with `--tw-chat-` (text chat) or `--tw-voice-` (voice chat) and are injected via `wp_add_inline_style` from the plugin's stored settings. Widget stylesheets contain no `:root` blocks — all values come from the Style Customizer settings.

## Managing Styles

### Style Customizer (Recommended)

Use the **Style Customizer** in the plugin admin dashboard to visually edit all variables with a live preview. Changes are saved to the database and applied globally.

### Import / Export

- **Export**: Click the Export button in the Style Customizer to download a JSON file containing all current variable values.
- **Import**: Click the Import button to load a previously exported JSON file. A confirmation dialog will appear before applying the imported values.

### Advanced CSS Override

You can override any variable in your theme's CSS:

```css
:root {
  --tw-chat-bubble-background: #ff6600;
  --tw-chat-header-background: #1a1a2e;
}
```

Variables set via CSS will take precedence over the Style Customizer values only if they have higher specificity or use `!important`.

---

## Text Chat Widget Variables

### Chat Bubble Button

Controls the floating chat bubble button that opens the chat interface.

| Variable | Default | Description |
|---|---|---|
| `--tw-chat-bubble-size` | `90px` | Bubble button width and height (desktop) |
| `--tw-chat-bubble-size-mobile` | `80px` | Bubble button width and height (mobile) |
| `--tw-chat-bubble-border-radius` | `100%` | Bubble button border radius |
| `--tw-chat-bubble-background` | `#ffffff` | Bubble button background color |
| `--tw-chat-bubble-padding` | `5px` | Bubble button inner padding |
| `--tw-chat-bubble-border` | `none` | Bubble button border |
| `--tw-chat-bubble-box-shadow` | `0 4px 6px rgba(4, 34, 54, 0.1)` | Bubble button box shadow |
| `--tw-chat-bubble-hover-background` | `#f0f0f0` | Bubble button background on hover |
| `--tw-chat-bubble-hover-color` | `#052b43` | Bubble button text color on hover |

### Chat Bubble Text

Controls the text label displayed on or near the chat bubble.

| Variable | Default | Description |
|---|---|---|
| `--tw-chat-bubble-color` | `#052b43` | Bubble text color |
| `--tw-chat-bubble-font-family` | `inherit` | Bubble text font family |
| `--tw-chat-bubble-font-size` | `16px` | Bubble text font size |
| `--tw-chat-bubble-font-weight` | `600` | Bubble text font weight |
| `--tw-chat-bubble-gap` | `4px` | Spacing (gap) between bubble image and text |
| `--tw-chat-bubble-text-tooltip` | `0` | Show text as tooltip instead of inline (`0` = inline, `1` = tooltip). Not a CSS variable — controls behavior. |
| `--tw-chat-bubble-tooltip-background` | `#333333` | Tooltip background color (when tooltip mode is active) |

### Chat Bubble Image

Controls the image/icon displayed inside the chat bubble button.

| Variable | Default | Description |
|---|---|---|
| `--tw-chat-bubble-image` | *(empty)* | Custom bubble image URL. Falls back to `assets/images/chat-bubble-icon.svg`. Not a CSS variable — passed via `wp_localize_script`. |
| `--tw-chat-bubble-image-size` | `50%` | Bubble image size relative to the button |

### Chat Interface

Controls the main chat window dimensions, position, and appearance.

| Variable | Default | Description |
|---|---|---|
| `--tw-chat-interface-width` | `500px` | Chat window width (desktop) |
| `--tw-chat-interface-height` | `550px` | Chat window height (desktop) |
| `--tw-chat-interface-width-mobile` | `95vw` | Chat window width (mobile) |
| `--tw-chat-interface-height-mobile` | `95vh` | Chat window height (mobile) |
| `--tw-chat-background` | `#f0f0f0` | Chat window background color |
| `--tw-chat-interface-border` | `1px solid rgba(4, 34, 54, 0.1)` | Chat window border |
| `--tw-chat-interface-box-shadow` | `0 10px 25px rgba(4, 34, 54, 0.15)` | Chat window box shadow |
| `--tw-chat-interface-border-radius` | `12px` | Chat window border radius |
| `--tw-chat-position-bottom` | `25px` | Distance from bottom of viewport (sticky mode) |
| `--tw-chat-position-right` | `25px` | Distance from right of viewport (sticky mode) |

### Chat Header

Controls the header bar at the top of the chat interface.

| Variable | Default | Description |
|---|---|---|
| `--tw-chat-header-background` | `#042236` | Header background color |
| `--tw-chat-header-color` | `#ffffff` | Header text color |
| `--tw-chat-header-padding` | `10px 20px` | Header padding |
| `--tw-chat-header-button-color` | `#ffffff` | Header button (close, fullscreen) icon color |
| `--tw-chat-header-close-size` | `32px` | Close button icon size |
| `--tw-chat-logo-width` | `100px` | Logo image width in header |

### Chat Messages

Controls the appearance of message bubbles in the conversation area.

| Variable | Default | Description |
|---|---|---|
| `--tw-chat-message-background` | `#ffffff` | Assistant message background |
| `--tw-chat-message-color` | `#042236` | Assistant message text color |
| `--tw-chat-message-border-radius` | `8px` | Message bubble border radius |
| `--tw-chat-message-box-shadow` | `0 1px 2px rgba(4, 34, 54, 0.05)` | Message bubble box shadow |
| `--tw-chat-message-border` | `1px solid rgba(4, 34, 54, 0.1)` | Message bubble border |
| `--tw-chat-message-font-size` | `16px` | Message text font size |
| `--tw-chat-message-width` | `85%` | Maximum message bubble width |
| `--tw-chat-message-spacing` | `1rem` | Vertical spacing between messages |
| `--tw-chat-message-user-background` | `#052b43` | User message background |
| `--tw-chat-message-user-color` | `#ffffff` | User message text color |
| `--tw-chat-message-error-color` | `#a83235` | Error message text color |
| `--tw-chat-message-heading-font-weight` | `600` | Font weight for headings inside messages |
| `--tw-chat-message-link-font-weight` | `bold` | Font weight for links inside messages |

### Chat Input

Controls the message input area at the bottom of the chat interface.

| Variable | Default | Description |
|---|---|---|
| `--tw-chat-input-background` | `#ffffff` | Input field background |
| `--tw-chat-input-color` | `#042236` | Input field text color |
| `--tw-chat-input-border` | `1px solid rgba(4, 34, 54, 0.15)` | Input field border |
| `--tw-chat-input-border-radius` | `8px` | Input field border radius |
| `--tw-chat-input-box-shadow` | `0 1px 2px rgba(4, 34, 54, 0.05)` | Input field box shadow |
| `--tw-chat-input-font-size` | `16px` | Input field font size |
| `--tw-chat-input-placeholder-color` | `rgba(4, 34, 54, 0.4)` | Input placeholder text color |
| `--tw-chat-input-max-width` | `95%` | Input field maximum width |
| `--tw-chat-send-button-image` | *(empty)* | Custom send button image URL. Not a CSS variable — passed via `wp_localize_script`. |

### Suggested Answers

Controls the suggested answer buttons displayed after assistant responses.

| Variable | Default | Description |
|---|---|---|
| `--tw-chat-suggested-answer-font-size` | `16px` | Button font size |
| `--tw-chat-suggested-answer-padding` | `10px` | Button padding |
| `--tw-chat-suggested-answer-border-radius` | `10px` | Button border radius |
| `--tw-chat-suggested-answer-background` | `#052b43` | Button background color |
| `--tw-chat-suggested-answer-color` | `#ffffff` | Button text color |
| `--tw-chat-suggested-answer-border` | `none` | Button border |
| `--tw-chat-suggested-answer-box-shadow` | `none` | Button box shadow |
| `--tw-chat-suggested-answer-hover-background` | `#073a5c` | Button background on hover |
| `--tw-chat-suggested-answer-hover-color` | `#ffffff` | Button text color on hover |

### Disclaimer

Controls the disclaimer text displayed below the chat input.

| Variable | Default | Description |
|---|---|---|
| `--tw-chat-disclaimer-background` | `transparent` | Disclaimer area background |
| `--tw-chat-disclaimer-color` | `#000000` | Disclaimer text color |
| `--tw-chat-disclaimer-font-size` | `13px` | Disclaimer font size |
| `--tw-chat-disclaimer-padding` | `10px` | Disclaimer padding |
| `--tw-chat-disclaimer-text-align` | `center` | Disclaimer text alignment |

### Embedded Widget

Controls dimensions for embedded (non-sticky) chat widgets placed via shortcode.

| Variable | Default | Description |
|---|---|---|
| `--tw-chat-interface-embedded-width` | `550px` | Embedded widget width |
| `--tw-chat-interface-embedded-max-width` | `100%` | Embedded widget max width |
| `--tw-chat-interface-embedded-height` | `550px` | Embedded widget height |
| `--tw-chat-interface-embedded-max-height` | `75vh` | Embedded widget max height |

### Mobile Overrides

Additional mobile-specific overrides applied via media queries.

| Variable | Default | Description |
|---|---|---|
| `--tw-chat-interface-width-mobile` | `95vw` | Chat window width on mobile |
| `--tw-chat-interface-height-mobile` | `95vh` | Chat window height on mobile |
| `--tw-chat-bubble-size-mobile` | `80px` | Bubble button size on mobile |
| `--tw-chat-bubble-font-size-mobile` | `14px` | Bubble text font size on mobile |

---

## Voice Chat Widget Variables

### Voice Container

Controls the main voice widget container.

| Variable | Default | Description |
|---|---|---|
| `--tw-voice-container-max-width` | `300px` | Container maximum width |
| `--tw-voice-container-padding` | `20px` | Container padding |
| `--tw-voice-container-border-radius` | `16px` | Container border radius |
| `--tw-voice-container-background` | `#ffffff` | Container background color |
| `--tw-voice-container-box-shadow` | `0 4px 12px rgba(0, 0, 0, 0.1)` | Container box shadow |

### Voice Button

Controls the main voice call button.

| Variable | Default | Description |
|---|---|---|
| `--tw-voice-button-size` | `80px` | Button width and height (desktop) |
| `--tw-voice-button-size-mobile` | `70px` | Button width and height (mobile) |
| `--tw-voice-button-border-radius` | `50%` | Button border radius |
| `--tw-voice-button-background` | `#4a6cf7` | Button background color |
| `--tw-voice-button-font-size` | `24px` | Icon/emoji font size inside button |
| `--tw-voice-button-box-shadow` | `0 4px 8px rgba(74, 108, 247, 0.3)` | Button box shadow |
| `--tw-voice-button-active-background` | `#f74a4a` | Button background when call is active |
| `--tw-voice-button-active-box-shadow` | `0 4px 8px rgba(247, 74, 74, 0.3)` | Button box shadow when call is active |
| `--tw-voice-button-hover-background` | `#3a5ce7` | Button background on hover |
| `--tw-voice-button-icon-image` | *(empty)* | Custom icon image URL. Replaces the default emoji when set. Not a CSS variable — passed via `wp_localize_script`. |

### Voice Status

Controls the status text display above the voice button.

| Variable | Default | Description |
|---|---|---|
| `--tw-voice-status-font-size` | `16px` | Status text font size |
| `--tw-voice-status-color` | `#555555` | Status text color |
| `--tw-voice-status-padding` | `8px 12px` | Status text padding |
| `--tw-voice-status-border-radius` | `8px` | Status text border radius |
| `--tw-voice-status-background` | `#f5f5f5` | Status text background color |

### Confirmation Dialog

Controls the confirmation dialog that appears before initiating a voice call.

| Variable | Default | Description |
|---|---|---|
| `--tw-voice-dialog-overlay-background` | `rgba(0, 0, 0, 0.5)` | Dialog overlay background |
| `--tw-voice-dialog-background` | `#ffffff` | Dialog background color |
| `--tw-voice-dialog-border-radius` | `12px` | Dialog border radius |
| `--tw-voice-dialog-box-shadow` | `0 8px 24px rgba(0, 0, 0, 0.2)` | Dialog box shadow |
| `--tw-voice-dialog-padding` | `24px` | Dialog padding |
| `--tw-voice-dialog-max-width` | `400px` | Dialog maximum width |
| `--tw-voice-dialog-title-font-size` | `20px` | Dialog title font size |
| `--tw-voice-dialog-title-color` | `#333333` | Dialog title text color |
| `--tw-voice-dialog-title-margin-bottom` | `12px` | Spacing below dialog title |
| `--tw-voice-dialog-text-font-size` | `14px` | Dialog body text font size |
| `--tw-voice-dialog-text-color` | `#666666` | Dialog body text color |
| `--tw-voice-dialog-text-margin-bottom` | `20px` | Spacing below dialog body text |
| `--tw-voice-dialog-button-padding` | `10px 20px` | Dialog button padding |
| `--tw-voice-dialog-button-border-radius` | `6px` | Dialog button border radius |
| `--tw-voice-dialog-button-font-size` | `14px` | Dialog button font size |
| `--tw-voice-dialog-button-font-weight` | `600` | Dialog button font weight |
| `--tw-voice-dialog-button-gap` | `12px` | Spacing between dialog buttons |
| `--tw-voice-dialog-button-confirm-background` | `#4a6cf7` | Confirm button background |
| `--tw-voice-dialog-button-confirm-color` | `#ffffff` | Confirm button text color |
| `--tw-voice-dialog-button-confirm-hover-background` | `#3a5ce7` | Confirm button background on hover |
| `--tw-voice-dialog-button-cancel-background` | `#e0e0e0` | Cancel button background |
| `--tw-voice-dialog-button-cancel-color` | `#333333` | Cancel button text color |
| `--tw-voice-dialog-button-cancel-hover-background` | `#d0d0d0` | Cancel button background on hover |

### Voice General

| Variable | Default | Description |
|---|---|---|
| `--tw-voice-transition` | `all 0.3s ease` | Transition timing for all voice widget animations |

---

## Non-CSS Keys

Some variables stored in the style settings are not output as CSS custom properties. Instead, they are passed to the frontend via `wp_localize_script` or control behavior rather than styling:

| Variable | Type | Description |
|---|---|---|
| `--tw-chat-bubble-image` | URL | Custom chat bubble image. Falls back to default SVG icon. |
| `--tw-chat-bubble-text-tooltip` | Flag (`0`/`1`) | Controls whether bubble text is shown inline or as a hover tooltip. |
| `--tw-chat-send-button-image` | URL | Custom send button image. Falls back to default SVG icon. |
| `--tw-voice-button-icon-image` | URL | Custom voice button icon image. Falls back to default emoji. |
