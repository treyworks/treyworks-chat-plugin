# Project Changelog

## 2.2.3
- **API Security: Nonce Verification**
  - Added WP REST nonce verification to `/chat` and `/create-call` REST API endpoints
  - Requests without a valid `X-WP-Nonce` header are now rejected
- **API Security: Rate Limiting**
  - Added transient-based rate limiting (20 requests/minute per IP) to the `/chat` endpoint
  - Returns `429 Too Many Requests` when limit is exceeded
- **API Security: Input Sanitization**
  - Sanitized `agent_id` parameter in `handle_create_call()` with `sanitize_text_field()`
- **Feature: Tool Call Migration**
  - Migrated from deprecated `functions`/`function_call` format to modern `tools`/`tool_choice` format
  - Response handling updated to use `toolCalls` instead of `functionCall`
  - Follow-up messages use `role: tool` with `tool_call_id` instead of `role: function`
  - Improves compatibility with non-OpenAI providers
- **Admin Interface: Removed API Base URI Setting**
  - Removed `API Base URI` field from Settings Manager and PHP backend
  - Cleaned up all references to the legacy setting
- **Admin Interface: Message History Reload**
  - Added reload button to the Message History page for refreshing conversation list
- **Developer: Removed Guzzle Logging Middleware**
  - Removed debug-only Guzzle response logging middleware from OpenAI client

## 2.2.2
- **Feature: Custom Model Selector**
  - Added "Custom" option to the model dropdown for entering any OpenAI-compatible model name
  - Enables use with non-OpenAI providers (Google Gemini, etc.) via the API Base URI setting
  - Auto-detects non-preset models on widget load and switches to custom mode
- **Feature: Webhook Data Structure UI**
  - Visual field builder for defining webhook payload structure (field name, type, required, description)
  - Structure is automatically injected into the system prompt via `TW_Chat_Prompt_Manager`
  - Webhook tool definition dynamically updated with field descriptions for accurate AI tool calls
  - Webhook handler updated: proper JSON parsing, `Content-Type: application/json` header, custom headers merged correctly
- **Feature: AI Prompt Generator**
  - "Generate with AI" button next to the system prompt textarea
  - Modal with "Generate new" and "Improve existing" modes
  - Auto-detects enabled tools (Site Search, Webhook) and includes context in generation
  - Webhook schema fields included in generation context when defined
  - Generated prompt is editable before applying
  - New AJAX endpoint `tw_chat_generate_prompt` with nonce verification and capability check
- **Bug Fix: Style Customizer Input Defaults**
  - Fixed inputs snapping back to default values when cleared, preventing manual entry
  - Replaced `||` (logical OR) with `??` (nullish coalescing) across all style input components
  - Fixed `isModified` detection so cleared fields correctly show as modified
- **Style Customizer: Mobile Overrides Cleanup**
  - Removed redundant Mobile Overrides section from Chat Widget tab
  - Moved Bubble Font Size (Mobile) to the Chat Bubble Text section
  - Removed non-existent `--tw-chat-bubble-icon-size-mobile` variable (removed in 2.2.1)
  - Fixed typo: `--tw-chat-interface-width-height` → `--tw-chat-interface-height-mobile`
  - Cleaned up duplicate PHP defaults across sections

## 2.2.1
- **Major Feature: Style Customizer**
  - Visual admin interface for customizing all widget CSS variables
  - Live preview pane with iframe isolation for real-time style changes
  - Collapsible sections organized by widget area (bubble, chat interface, voice)
  - Undo changes per section or globally before saving
  - Import/export style settings as JSON files with confirmation dialog on import
  - Conditional field visibility (e.g., tooltip fields hidden when tooltip is disabled)
- **Chat Bubble Customization**
  - Split into three sections: Chat Bubble Button, Chat Bubble Text, Chat Bubble Image
  - New fields: border, spacing (gap), hover background, hover text color
  - Bubble text can be displayed as a tooltip with customizable tooltip background
  - Bubble image with adjustable image size
  - Conditional visibility: spacing hidden when tooltip mode is active, tooltip background hidden when tooltip is off
- **Chat Widget Styling**
  - Mobile-specific width and height fields for the chat interface
  - Suggested answer buttons: dedicated background color, text color, border, hover background, and hover text color
  - Send button custom image support via Style Customizer
- **Voice Widget Styling**
  - Custom icon image support for the voice button (replaces emoji when set)
  - Mobile-specific button size field
  - Hover background for voice button
  - Confirmation dialog customization: overlay background, button colors, button text colors, button hover backgrounds
  - Voice container width now controlled by CSS variable (removed hardcoded preview override)
  - Added `.tw-voice-icon` CSS rule for proper icon size inheritance
- **Admin Interface**
  - Mobile input fields ordered before desktop counterparts for all width/height/size variants
  - Desktop fields labeled with "(Desktop)" suffix for clarity
  - Font size inputs use px units with appropriate slider ranges
- **Bug fix**: Fixed chat widget mobile height CSS variable typo (`--tw-chat-interface-width-height` → `--tw-chat-interface-height-mobile`)
- **Bug fix**: Removed hardcoded voice container max-width in preview that was overriding the CSS variable
- **Code Quality**: Removed react-tooltip dependency from chat widget send button

## 2.2.0
- **Major Feature: Database Logging System**
  - Replaced file-based logging with comprehensive database logging
  - Message logs: Track all conversations with conversation_id, widget_id, message_type, message_text, and token usage (input/output)
  - System logs: Database logging for info, error, warning, and debug messages with context
  - Tool calls now logged in message history (type: 'tool') and system logs (tool responses)
  - Removed separate tool_logs table - consolidated into message and system logs
  - Log retention: Configurable automatic cleanup with daily scheduled task (default: 30 days)
  - Deprecated file-based logging system
- **Admin Interface Refactor**
  - New consolidated "Logging" page with Message History and System Log tabs
  - Moved voice agents table to Chat Widgets tab for better organization
  - Removed legacy Retell AI tab
  - Message History: Export conversations to CSV, delete individual or all conversations
  - System Log: Abbreviated message display with view button for full details
  - Removed widget ID and conversation ID filters from Message History
  - Added clear date filter labels (From Date / To Date)
- **Reporting Dashboard Enhancements**
  - Moved date controls (7, 14, 30 days) to dashboard header
  - Date filters now update all stats and graphs simultaneously
  - Display widget titles instead of widget IDs in performance charts
  - Added Total Tokens stat card
  - Renamed Messages stat to "User Messages" (shows only user role messages)
  - Added graceful fallback UI for no widgets and no data scenarios
  - Fixed 7-day filter to include current day data
- **Voice Widget Improvements**
  - Standardized CSS to use --tw- variable naming convention matching text chat widget
  - Added confirmation dialog before initiating voice calls
  - Improved user consent and control over voice call initiation
  - Fixed REST API endpoint namespace (tw-chat/v1)
- **Chat Widget Styling**
  - Added comprehensive styles for `<code>` and `<pre>` elements
  - Prevents theme styles from overriding code formatting
  - Consistent code presentation across different WordPress themes
- **Code Quality**
  - Added comprehensive PHPDoc comments to all major PHP classes
  - Removed all inline CSS from JSX components (moved to global CSS files)
  - Enforced project rule: no inline CSS in JSX or PHP, no inline HTML in PHP
  - Improved system logger to allow info/warning/error logs regardless of debug mode
  - Replaced all legacy TW_Chat_Logger calls with TW_Chat_System_Logger
- **API Enhancement**: Chat API now returns conversation_id for tracking multi-turn conversations
- **Performance**: Improved log querying with database indexes on frequently searched fields
- **Developer**: Updated classes for database management and logging (TW_Chat_DB, TW_Chat_Message_Logger, TW_Chat_System_Logger, TW_Chat_Log_Cleanup)

## 2.1.2
- Bug fix: Removed JSON parsing for suggested answers response. Will migrate to Responses API in the future and add JSON structured output option.

## 2.1.1
- Bug fix: Fixed sticky flag on embedded text chat widgets

## 2.1.0
- Feature: Admin UX improvements
- Bug fix: Removed autofocus for embedded widgets

## 2.0.3
- Feature: Added support for GPT 5.2 model
- Feature: Limited search results to 3 posts
- Bug fix: Fixed search_sites function call so it returns array with title, permalink, and content

## 2.0.2
- Feature: Added support for GPT 5.1 model
- Updated chat moderation to use omni-moderation-latest model
- Dependency updates

## 2.0.1
- Bug fix: Fixed suggested answer click callback
- Bug fix: Fixed shortcode embed issue

## 2.0.0
- Breaking change: Switched core text chat from OpenAI Assistants API to Chat Completions API.
- Feature: Text chat widgets can now be created and managed entirely in the plugin admin.
- Feature: Built-in tools for assistants: Webhook, Search Site, and Call Action (WordPress hooks) — no external setup required.
- Dev: Internal refactors and UI polish to support the new flow.

## 1.4.2
- Feature: Added top-level admin menu for easier access to plugin settings
- Bug fix: Fixed password update notifications when using API key fields
- UI: Improved API key field handling to prevent browser password management interference

## 1.4.1
- Composer dependency updates
- Improvements to Voice chat widget UI
- Only dispay published voice agents in the settings page

## 1.4.0.1
- Bug fix: Global Chat widget only accepts OpenAI Assistants now

## 1.4.0
- Feature: Added support for Retell AI voice agents
- Composer dependency updates
- Organized project directory structure

## 1.3.2
- Feature: Add visibility toggle for API key input
- Composer dependency updates

## 1.3.1
- Feature: Updated default CSS variable values
- Feature: Updated position and style of the chat message form
- Feature: Added CSS variables to allow customization of the chat message form
- Bug fix: Changed admin greeting input to use a textarea element instead of an input element

## 1.3.0.1
- Bug fix: Added keypress event to textarea element to handle enter key press

## 1.3.0
- Feature: Added CSS variables to allow customization of the chat widget input
- Bug fix: Updated chat-utils.js to set focus on message input when the window is larger than 1024px
- Bug fix: Changed chat input to use a textarea element instead of an input element
- Composer dependency updates

## 1.2.9
- Bug fix: Fullscreen button is now hidden on small screens.
- Bug fix: Fixed bottom margin of the global chat widget button image.

## 1.2.8
- Feature: Added metabox to override global chat widget on individual pages.
- Feature: Added expand button to sticky chat widget header to make the widget fullscreen.
- Feature: Added fields for customizing the chat button and send message button images.

## 1.2.7
- Bug fix: Changed OpenAI client instantiation to include header to support v2 of the Assistants API 

## 1.2.6
- Bug fix: Resolved an issue where the send_message function was incorrectly stripping all HTML tags from the body parameter.
- Bug fix: Corrected the display of escaped HTML characters when viewing instructions in the Assistant Manager's admin page.
- Bug fix: Implemented json_decode to correctly process incoming data in the webhook function.
- Bug fix: Fixed scroll behavior when widget is loaded.

## 1.2.5
- Bug fix: Log file is created on plugin installation
- Added checkbox to plugin settings to enable or disable message moderation
    - Filter user messages with the Profanity PHP library
    - Enabled the OpenAI Moderation API for content filtering

## 1.2.4
- Added Call Action Tool: Allows the assistant to call an action and retrieve the result using the WordPress Hook system
- Improved the email template for the send_message function

#### 1.2.3
- Fix ListInput from trimming trailing spaces
- Fix Save Widget modal when creating a new chat widget
- Add get_posts function and custom tool call

#### 1.2.2
- Added ListInput component for better management of the suggest answers field in the chat widget admin form.
- Added widget fields to allow users to clear suggested answers.
- Fixed log file caching in the Log File Viewer.
- Restructure admin UI page components for readability and performance.

#### 1.2.1
- Links in the chat response now open in a new tab.
- Added token usage to plugin log.
- Added Changelog to track updates within the project.
