# Version 2.2.1 - Widget Style Customizer

## Overview
Version 2.2.1 introduces an admin page for customizing widget styles through an intuitive visual interface. Administrators can set CSS variable values using color pickers, sliders, and input fields — no CSS knowledge required. Custom values are stored in WordPress options and injected as inline styles when the plugin loads on the frontend.

## Goals
- Provide a user-friendly admin interface for customizing text and voice widget styles
- Store custom CSS variable values in the WordPress database
- Load custom values at runtime via `wp_add_inline_style` on the frontend
- Support live preview of style changes in the admin interface
- Maintain backward compatibility with manually added CSS overrides

## Admin Page Design

### Style Customizer Tab
Add a new "Style Customizer" tab to the existing admin React app. The page is organized into collapsible sections, each grouping related CSS variables by widget component.

### Text Chat Widget Sections

#### 1. Chat Bubble
| Variable | Input Type | Default |
|---|---|---|
| `--tw-chat-bubble-size` | Slider (px) | 90px |
| `--tw-chat-bubble-border-radius` | Text input | 100% |
| `--tw-chat-bubble-background` | Color picker | #ffffff |
| `--tw-chat-bubble-color` | Color picker | #052b43 |
| `--tw-chat-bubble-box-shadow` | Text input | 0 0 5px rgba(0,0,0,.1) |
| `--tw-chat-bubble-font-size` | Slider (px) | 16px |
| `--tw-chat-bubble-font-weight` | Select (400/600/700) | 600 |
| `--tw-chat-bubble-icon-size` | Slider (px) | 45px |

#### 2. Chat Interface
| Variable | Input Type | Default |
|---|---|---|
| `--tw-chat-interface-width` | Slider (px) | 500px |
| `--tw-chat-interface-height` | Slider (px) | 550px |
| `--tw-chat-background` | Color picker | #f7f7f7 |
| `--tw-chat-interface-border` | Text input | 1px solid #f7f7f7 |
| `--tw-chat-interface-box-shadow` | Text input | 0 0 5px rgba(0,0,0,0.15) |
| `--tw-chat-interface-border-radius` | Slider (px) | 12px |
| `--tw-chat-position-bottom` | Slider (px) | 25px |
| `--tw-chat-position-right` | Slider (px) | 25px |

#### 3. Chat Header
| Variable | Input Type | Default |
|---|---|---|
| `--tw-chat-header-background` | Color picker | #052b43 |
| `--tw-chat-header-color` | Color picker | #ffffff |
| `--tw-chat-header-padding` | Text input | 10px 20px |
| `--tw-chat-header-button-color` | Color picker | #ffffff |
| `--tw-chat-header-close-size` | Slider (px) | 32px |
| `--tw-chat-logo-width` | Slider (px) | 100px |

#### 4. Chat Messages
| Variable | Input Type | Default |
|---|---|---|
| `--tw-chat-message-background` | Color picker | #ffffff |
| `--tw-chat-message-color` | Color picker | #1d1d1d |
| `--tw-chat-message-border-radius` | Slider (px) | 10px |
| `--tw-chat-message-box-shadow` | Text input | 0 0 5px rgba(0,0,0,0.15) |
| `--tw-chat-message-border` | Text input | 1px solid #ddd |
| `--tw-chat-message-font-size` | Slider (rem) | 1rem |
| `--tw-chat-message-width` | Text input | 85% |
| `--tw-chat-message-spacing` | Slider (rem) | 1rem |
| `--tw-chat-message-user-background` | Color picker | #052b43 |
| `--tw-chat-message-user-color` | Color picker | #ffffff |
| `--tw-chat-message-error-color` | Color picker | #a83235 |
| `--tw-chat-message-heading-font-weight` | Select (400/600/700) | 600 |
| `--tw-chat-message-link-font-weight` | Select (normal/bold) | bold |

#### 5. Chat Input
| Variable | Input Type | Default |
|---|---|---|
| `--tw-chat-input-background` | Color picker | #ffffff |
| `--tw-chat-input-color` | Color picker | #1d1d1d |
| `--tw-chat-input-border` | Text input | 1px solid #ddd |
| `--tw-chat-input-border-radius` | Slider (px) | 10px |
| `--tw-chat-input-box-shadow` | Text input | 0 0 5px rgba(0,0,0,0.1) |
| `--tw-chat-input-font-size` | Slider (rem) | 1rem |
| `--tw-chat-input-placeholder-color` | Color picker | #999 |
| `--tw-chat-input-max-width` | Text input | 95% |

#### 6. Suggested Answers
| Variable | Input Type | Default |
|---|---|---|
| `--tw-chat-suggested-answer-font-size` | Slider (rem) | 1rem |
| `--tw-chat-suggested-answer-padding` | Text input | 10px |
| `--tw-chat-suggested-answer-border-radius` | Slider (px) | 10px |
| `--tw-chat-suggested-answer-border` | Text input | none |
| `--tw-chat-suggested-answer-box-shadow` | Text input | none |

#### 7. Disclaimer
| Variable | Input Type | Default |
|---|---|---|
| `--tw-chat-disclaimer-background` | Color picker | transparent |
| `--tw-chat-disclaimer-color` | Color picker | #000000 |
| `--tw-chat-disclaimer-font-size` | Slider (rem) | 0.8rem |
| `--tw-chat-disclaimer-padding` | Text input | 10px |
| `--tw-chat-disclaimer-text-align` | Select (left/center/right) | center |

#### 8. Embedded Widget Overrides
| Variable | Input Type | Default |
|---|---|---|
| `--tw-chat-interface-embedded-width` | Slider (px) | 550px |
| `--tw-chat-interface-embedded-max-width` | Text input | 100% |
| `--tw-chat-interface-embedded-height` | Slider (px) | 550px |
| `--tw-chat-interface-embedded-max-height` | Text input | 75vh |

#### 9. Mobile Overrides
| Variable | Input Type | Default |
|---|---|---|
| `--tw-chat-interface-width-mobile` | Text input | 95vw |
| `--tw-chat-interface-width-height` | Text input | 95vh |
| `--tw-chat-bubble-size-mobile` | Slider (px) | 80px |
| `--tw-chat-bubble-font-size-mobile` | Slider (px) | 14px |
| `--tw-chat-bubble-icon-size-mobile` | Slider (px) | 40px |

### Voice Chat Widget Sections

#### 1. Voice Container
| Variable | Input Type | Default |
|---|---|---|
| `--tw-voice-container-max-width` | Slider (px) | 300px |
| `--tw-voice-container-padding` | Text input | 20px |
| `--tw-voice-container-border-radius` | Slider (px) | 16px |
| `--tw-voice-container-background` | Color picker | #ffffff |
| `--tw-voice-container-box-shadow` | Text input | 0 4px 12px rgba(0,0,0,0.1) |

#### 2. Voice Button
| Variable | Input Type | Default |
|---|---|---|
| `--tw-voice-button-size` | Slider (px) | 80px |
| `--tw-voice-button-background` | Color picker | #4a6cf7 |
| `--tw-voice-button-color` | Color picker | #ffffff |
| `--tw-voice-button-font-size` | Slider (px) | 24px |
| `--tw-voice-button-active-background` | Color picker | #f74a4a |

#### 3. Voice Status
| Variable | Input Type | Default |
|---|---|---|
| `--tw-voice-status-font-size` | Slider (px) | 16px |
| `--tw-voice-status-color` | Color picker | #555555 |
| `--tw-voice-status-background` | Color picker | #f5f5f5 |
| `--tw-voice-status-border-radius` | Slider (px) | 8px |

#### 4. Voice Confirmation Dialog
| Variable | Input Type | Default |
|---|---|---|
| `--tw-voice-dialog-background` | Color picker | #ffffff |
| `--tw-voice-dialog-border-radius` | Slider (px) | 12px |
| `--tw-voice-dialog-title-color` | Color picker | #333333 |
| `--tw-voice-dialog-text-color` | Color picker | #666666 |
| `--tw-voice-dialog-button-confirm-background` | Color picker | #4a6cf7 |
| `--tw-voice-dialog-button-cancel-background` | Color picker | #e0e0e0 |

## Implementation Plan

### Phase 1: Backend - Storage & Output
1. **Create style settings class** (`/includes/class-tw-chat-style-settings.php`)
   - Store custom CSS variable values as a serialized array in `wp_options` (`tw_chat_custom_styles`)
   - Method to get all custom styles with defaults
   - Method to save/update custom styles
   - Method to generate CSS output string from stored values
   - Method to get default values for all variables

2. **Inject custom styles on frontend**
   - Use `wp_add_inline_style` to append custom `:root` overrides after the widget stylesheets are enqueued
   - Only output variables that differ from defaults (keep output minimal)
   - Apply to both text chat and voice widget stylesheets

3. **Add AJAX endpoints**
   - `save_widget_styles` - Save custom CSS variable values
   - `get_widget_styles` - Retrieve current custom values and defaults
   - `reset_widget_styles` - Reset all or a section to defaults

### Phase 2: Admin Interface - React Components
4. **Create StyleCustomizer page component** (`/admin/app/src/pages/StyleCustomizer.jsx`)
   - Collapsible sections for each variable group
   - Save, Reset Section, and Reset All buttons
   - Success/error feedback on save

5. **Create input components** (`/admin/app/src/components/style-inputs/`)
   - `ColorPickerInput.jsx` - Color picker with hex input and preview swatch
   - `SliderInput.jsx` - Range slider with numeric input and unit label (px, rem, etc.)
   - `SelectInput.jsx` - Dropdown for predefined options (font-weight, text-align, etc.)
   - `TextInput.jsx` - Free-form text for complex values (box-shadow, border, etc.)
   - Each component shows the variable name, current value, and a reset-to-default button

6. **Add styles** (`/admin/app/src/Admin.css`)
   - Style customizer layout and section styles
   - Input component styles
   - Color picker integration styles

7. **Update admin navigation**
   - Add "Style Customizer" tab to `Admin.jsx`

### Phase 3: Live Preview (Optional Enhancement)
8. **Add preview panel**
   - Embed a mini widget preview in the admin page
   - Apply CSS variable changes in real-time as the user adjusts values
   - Preview both text chat and voice widget appearances

## Data Storage

### WordPress Option: `tw_chat_custom_styles`
```php
[
    'chat' => [
        '--tw-chat-bubble-background' => '#ffffff',
        '--tw-chat-header-background' => '#052b43',
        // ... only non-default values stored
    ],
    'voice' => [
        '--tw-voice-button-background' => '#4a6cf7',
        // ... only non-default values stored
    ]
]
```

### Generated CSS Output
```css
:root {
    --tw-chat-bubble-background: #ff6600;
    --tw-chat-header-background: #1a1a2e;
    /* Only overridden values are output */
}
```

## Technical Considerations

### Performance
- Only output CSS for variables that differ from defaults
- Cache generated CSS string in a transient
- Invalidate cache on style save

### Compatibility
- Custom styles applied via `wp_add_inline_style` after widget CSS loads
- Users can still override via theme CSS (higher specificity)
- Existing manual CSS variable overrides in themes continue to work (theme CSS loads after inline styles)

### Validation
- Sanitize all color values (hex format validation)
- Validate numeric values for sliders (min/max bounds)
- Sanitize text inputs for CSS injection prevention
- Escape all output values

### UX Considerations
- Group variables by visual component for intuitive navigation
- Show color swatches next to color pickers for quick visual reference
- Include "Reset to Default" per-field and per-section
- Show which fields have been customized (visual indicator)
- Responsive admin layout for smaller screens

## Phase 3: Live Preview Pane

### Overview
The Style Customizer needs a live preview panel so admins can see how their changes affect the text chat and voice widgets in real time, without saving or navigating to the frontend.

### Design
- Preview panel sits to the right of (or below on smaller screens) the style controls
- Two preview modes: **Text Chat Widget** and **Voice Widget**, matching the active widget tab
- CSS variables are applied in real time as the user adjusts values
- Preview shows a static, non-interactive mockup of the widget (no API calls, no actual chat)

### Shared HTML Templates

**Problem**: The chat widget is a React app (`ChatWidget.jsx`) and the voice widget is a vanilla JS class (`VoiceWidget.js`). Both render their own DOM structures. If the widget markup changes, the preview must be updated manually — a maintenance burden and source of drift.

**Solution**: Extract static HTML template strings into shared template files that both the widget apps and the admin preview consume.

#### File Structure
```
/widgets/shared/
  templates/
    chat-widget-preview.html    # Static HTML structure of the chat widget
    voice-widget-preview.html   # Static HTML structure of the voice widget
```

#### How Templates Are Used

1. **Admin Preview (React)**
   - Import the HTML template strings
   - Render them inside a scoped `<div>` with a `<style>` tag that applies `currentValues` as CSS variables
   - The preview container uses the widget CSS files (imported at build time) scoped to avoid conflicts with admin styles

2. **Widget Apps (reference)**
   - The shared templates serve as the canonical reference for widget DOM structure
   - Widget apps continue to render their own dynamic DOM (they need interactivity), but developers use the shared templates as the source of truth for class names and structure
   - A comment at the top of each widget's render method references the shared template

#### Template Format
Each template is a plain HTML string with placeholder tokens for dynamic content:

**`chat-widget-preview.html`**
```html
<div class="tw-chat-interface embedded">
  <div class="tw-chat-header">
    <span>{{widget_name}}</span>
    <div class="tw-chat-header-actions">
      <button class="tw-chat-header-close" aria-label="Close">✕</button>
    </div>
  </div>
  <div class="tw-chat-messages">
    <div class="message">
      <p>Hello! How can I help you today?</p>
    </div>
    <div class="message user">
      <p>I have a question about your services.</p>
    </div>
    <div class="message">
      <p>Of course! I'd be happy to help. What would you like to know?</p>
    </div>
  </div>
  <div class="tw-chat-form-container">
    <form class="tw-chat-form">
      <div class="tw-chat-input-container">
        <textarea placeholder="Enter your message..." rows="1" disabled></textarea>
      </div>
      <button disabled>➤</button>
    </form>
    <div class="tw-chat-disclaimer-container">
      <div>AI-powered assistant. Responses may not always be accurate.</div>
    </div>
  </div>
</div>
```

**`voice-widget-preview.html`**
```html
<div class="tw-voice-container">
  <div class="tw-voice-status-container">
    <p class="tw-voice-status">Ready</p>
  </div>
  <div class="tw-voice-button-container">
    <button class="tw-voice-button" aria-label="Start Call">
      <span class="tw-voice-icon">🎙</span>
    </button>
  </div>
</div>
```

### Admin Preview Component

#### `StylePreview.jsx`
```
/admin/app/src/components/StylePreview.jsx
```

- Receives `currentValues`, `activeWidget`, and widget CSS as props
- Renders the appropriate template inside a scoped container
- Applies CSS variables as a `<style>` block scoped to the preview container
- Imports widget CSS files at build time for accurate rendering
- Scales the preview to fit the available space (CSS `transform: scale()`)

#### Preview Container Scoping
To prevent widget styles from leaking into the admin UI:
- Wrap preview in a container with a unique class (e.g., `.tw-style-preview-sandbox`)
- All widget CSS selectors are scoped under this container at build time
- Alternatively, use an `<iframe>` with `srcdoc` for complete style isolation

#### Real-Time Updates
- On every `handleChange` call, the preview's scoped `:root` style block is updated
- No debouncing needed since it's just CSS variable assignment (instant)

### Implementation Steps

1. **Create shared template files** in `/widgets/shared/templates/`
2. **Create `StylePreview.jsx`** component in `/admin/app/src/components/`
3. **Import widget CSS** into the preview component (scoped)
4. **Integrate into `StyleCustomizer.jsx`** — add preview panel alongside controls
5. **Add preview layout CSS** to `Admin.css` — side-by-side on desktop, stacked on mobile
6. **Add toggle** to show/hide preview panel (for users who want more control space)

### CSS Layout for Preview

```
Desktop (>1200px):
┌─────────────────────────┬──────────────────┐
│  Style Controls (60%)   │  Preview (40%)   │
│  [Sections...]          │  [Widget Mock]   │
└─────────────────────────┴──────────────────┘

Tablet/Mobile:
┌─────────────────────────────────────────────┐
│  [Toggle Preview]                           │
│  Style Controls (100%)                      │
│  [Sections...]                              │
├─────────────────────────────────────────────┤
│  Preview (100%)                             │
│  [Widget Mock]                              │
└─────────────────────────────────────────────┘
```

### AGENTS.md Update

Add the following guidance to `AGENTS.md` under a new "Widget Preview Sync" subsection in **Core Principles**:

```markdown
### Widget Preview Sync
- The Style Customizer admin page includes a live preview of both widgets
- Shared HTML templates in `/widgets/shared/templates/` define the canonical widget DOM structure
- **When modifying widget markup** (class names, DOM hierarchy, new elements):
  1. Update the shared template in `/widgets/shared/templates/`
  2. Update the widget app's render method to match
  3. Update the admin `StylePreview.jsx` component if it references the template
- The preview uses the same CSS files as the widgets — CSS changes are automatically reflected
- New CSS variables added to `TW_Chat_Style_Settings` must also be added to the `StyleCustomizer.jsx` section config
```

### Technical Considerations

#### Style Isolation
- **Recommended approach**: Use an `<iframe>` with `srcdoc` for the preview
  - Complete CSS isolation from WordPress admin styles
  - Widget CSS renders exactly as it would on the frontend
  - CSS variables can be injected into the iframe's `<style>` tag
  - Slightly more complex but guarantees accuracy

- **Alternative**: Scoped `<div>` with CSS containment
  - Simpler implementation
  - Risk of WordPress admin CSS bleeding into the preview
  - Requires careful specificity management

#### Performance
- Template strings are static imports — no runtime file reads
- CSS variable updates are instant (no re-render of the preview DOM)
- Widget CSS is bundled once at build time

#### Maintenance
- Shared templates are the single reference for widget structure
- Widget apps own their dynamic behavior; templates own the static structure
- Any structural change to a widget should start with the shared template

## Success Criteria
- Admin users can customize all widget CSS variables without writing CSS
- Custom styles load correctly on the frontend for both widget types
- Style changes persist across page loads and plugin updates
- Reset functionality works at field, section, and global levels
- No performance impact on frontend page load
- Backward compatible with existing manual CSS overrides
- Live preview accurately reflects style changes in real time
- Widget markup changes are reflected in both the widget apps and the admin preview
