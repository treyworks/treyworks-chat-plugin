# Treyworks Chat Plugin for WordPress

## Overview

The Treyworks Chat Plugin empowers your WordPress website with intelligent chatbots in two formats: text-based chat and voice-interactive conversations. Enhance user experience, provide instant answers, and boost engagement with these versatile and customizable widgets.

### Two Chat Widget Options

1. **Text Chat Widgets** - Powered by the OpenAI Chat Completions API, providing intelligent text-based conversations
2. **Voice Chat Widgets** - Powered by RetellAI, enabling interactive voice conversations

## Key Features

### Text Chat Features (OpenAI)
- Seamless integration with the OpenAI Chat Completions API
- Multiple text chat widgets per page
- Advanced functions for site search, post retrieval, and more
- Webhook capabilities for lead generation
- WordPress action and filter integration
- Message moderation and profanity filtering

### Voice Chat Features (RetellAI)
- Interactive voice conversations using RetellAI's technology
- Selection of voice agents with unique characteristics
- Confirmation dialog before initiating voice calls for user consent
- Customizable appearance using CSS variables matching text chat design system
- Voice activation options (button press or automatic)
- Customizable voice recognition settings

### General Features
- Customizable appearance to match your website's design
- Multiple widgets of either type per page
- Embedding via shortcode or global widget setting
- Comprehensive database logging system for conversations and analytics
- Advanced reporting dashboard with usage statistics and token tracking
- Message history management with export and delete capabilities
- System logging for debugging and monitoring

## Installation

1. Clone or download the repository:
   ```
   git clone https://github.com/treyworks/treyworks-chat-plugin.git
   ```
2. Upload and install the plugin via the WordPress Admin Panel.
3. Activate the plugin.
4. Navigate to the plugin's settings page.
5. For text chat widgets:
   - Enter your OpenAI API key
   - Build and manage text chat widgets in the Chat Widgets tab (tools like Webhook, Search Site, and Call Action are built-in).
6. For voice chat widgets:
   - Enter your RetellAI API key in the Voice Widget section
   - Select from available RetellAI agents
7. Create a new chat widget (text or voice) in the Chat Widgets tab.

## Usage

## Text Chat Widgets (OpenAI)

### Global Text Chat Widget
Set up a global text chat widget in the Settings tab after creating a text chat widget in the plugin admin.

You can override the global text chat widget on a page using the **Chat Widget Settings** in the page editor.

Each page can have a unique chat widget, but the global chat widget will be used if no widget is specified on the page.

### Embedding a Text Chat Widget in a Page
Add text chat widgets to specific pages using the shortcode:
```
[tw_chat_widget id=WIDGET_ID width="400px"]
```

Optionally, specify the widget height and width in CSS format:
```
[tw_chat_widget id=WIDGET_ID height="500px" width="400px"]
```

## Voice Chat Widgets (RetellAI)

### Embedding a Voice Chat Widget in a Page
Add voice chat widgets to specific pages using the shortcode:
```
[tw_voice_widget id=1]
```

This shortcode has one required parameter:
- `id`: The ID of the voice widget to embed

### Voice Chat Permissions
Voice chat widgets require microphone access. Users will be prompted to grant microphone permissions when interacting with a voice chat widget.

**Note:** Multiple widgets (of either type) can be added to a page, but each widget can only be used once per page.

## Voice Chat Configuration

### RetellAI API Setup

1. Ensure you have a valid RetellAI account and API key.
2. To obtain an API key, log in to your RetellAI dashboard.
3. Navigate to the API Keys section in your account settings.
4. Generate a new API key and securely store it.

For more details on managing RetellAI API keys, visit: [RetellAI API Key Documentation](https://docs.retellai.com/accounts/manage-api-keys)

### Creating a Voice Chat Widget

1. Navigate to the Chat Widgets tab and select "Add New Widget"
2. Configure your widget as usual with an OpenAI assistant
3. Enable the Voice feature by checking the "Enable Voice Widget" option
4. Select a RetellAI agent from the dropdown to use with this widget
5. Customize additional voice settings as needed:
   - Initial greeting message
   - Voice activation method (button press or automatic)
   - Voice recognition sensitivity

### Voice Widget Feature

The Voice Widget feature integrates [RetellAI](https://www.retellai.com/) with your chat widgets to provide interactive voice conversations on your WordPress site.

#### RetellAI Integration

1. **RetellAI Account Setup**:
   - Create an account at [RetellAI](https://www.retellai.com/)
   - Obtain your RetellAI API key from your account dashboard

2. **Adding Your RetellAI Key**:
   - Navigate to the plugin settings page
   - Enter your RetellAI API key in the designated field under the Voice Widget section
   - Save your settings to enable voice capabilities

3. **Viewing Available RetellAI Agents**:
   - Once your API key is verified, you can view and select from your available RetellAI agents
   - Available agents will appear in a dropdown list in the Voice Widget tab
   - Each agent has unique voice characteristics and capabilities

## Text Chat Configuration

### OpenAI API Setup

1. Ensure you have a valid OpenAI API account and API key.
2. Consider the potential costs associated with using the OpenAI Chat Completions API.
3. Regularly review and optimize your chatbot's prompts and knowledge base.

### Global Text Chat Widget Override

Each page can have a unique text chat widget that overrides the global setting:

1. Edit the page where you want to override the global widget.
2. Locate the **Chat Widget Settings** metabox in the page editor.
3. Select a different chat widget or disable the chat widget entirely for this page.
4. Update the page to save your settings.

## Advanced Text Chat Features

### Built-in Tools (OpenAI Text Chat)

Text chat widgets in v2.0 include three built-in tools you can enable and configure per widget. No JSON schemas are needed.

#### Search Site
Search your WordPress site content and provide relevant information to users:
- Parameters
  - `search_term` (string, required): The keyword/phrase to search across your WordPress site content.
- Example prompt
  - "Search the site for 'pricing plans' and summarize the most relevant page with a link."

#### Webhook
Connect your chatbot to external systems and services for data exchange:
- Settings
  - Configure Webhook URL and optional headers in the widget settings.
- Parameters
  - `post_data` (string or JSON, required): Payload to send to the configured endpoint.
- Example prompt
  - "Send this lead to our CRM via webhook: name=Jane Smith, email=jane@example.com, interest=AI chatbot. Confirm when done."

#### WordPress Action Call
Extend your chatbot's functionality with custom WordPress hooks and filters:
- Prerequisite
  - Add allowed actions/filters in Settings → Allowed Actions.
- Parameters
  - `action_name` (string, required): Name of the action/filter to invoke.
  - `action_type` (string, required): One of `action` or `filter`.
  - `action_arguments` (array, optional): Arguments to pass.
- Example prompt
  - "Call the 'get_featured_products' filter with ['recent', 5] and summarize the titles it returns."

### Example Prompts

Need inspiration for setting up your chatbot? Check out these ready-to-use example prompts:

- **[Site Search Assistant](docs/examples/site-search-assistant.md)** — A simple assistant that helps visitors find content on your site using the Search Site tool.
- **[Questionnaire with Webhook](docs/examples/questionnaire-webhook.md)** — Guides visitors through a step-by-step questionnaire and submits their answers to an external service via webhook.
- **[Product Search Assistant](docs/examples/product-recommendation-assistant.md)** — A WooCommerce shopping assistant that uses a custom WordPress filter to look up products by name, price, and availability.

Each example includes widget settings, a complete system prompt, and a sample conversation.

## Customization

### Style Customizer

The plugin includes a visual **Style Customizer** in the admin dashboard for customizing the appearance of both text chat and voice widgets. The customizer provides:

- **Live Preview**: See changes in real-time with an isolated preview pane
- **Organized Sections**: Settings grouped by widget area (bubble button, bubble text, bubble image, chat interface, header, messages, input, suggested answers, disclaimer, voice container, voice button, voice status, confirmation dialog)
- **Hover States**: Customize hover effects for the chat bubble, suggested answer buttons, and voice button
- **Mobile Settings**: Dedicated mobile-specific fields for widget dimensions and button sizes
- **Undo/Save**: Undo changes per section or globally before saving
- **Import/Export**: Export your current styles as a JSON file, or import styles from a previously exported file

To view all available CSS variables and their current values, use the **Export** button in the Style Customizer to download a complete JSON file of your style settings.

#### Advanced CSS Customization

For advanced use cases, all widget styles are controlled via CSS custom properties (variables) prefixed with `--tw-chat-` (text chat) and `--tw-voice-` (voice chat). These variables are injected via `wp_add_inline_style` from the stored settings — widget stylesheets contain no `:root` blocks. You can override any variable in your theme's CSS if needed.

For a complete list of all available CSS variables, their default values, and descriptions, see the [CSS Style Guide](docs/references/styleguide.md).

## Message Moderation (OpenAI Text Chat)

Enable the message moderation feature from the plugin settings for text chat widgets. This feature is designed to filter user messages with the [Profanity PHP library](https://github.com/ConsoleTVs/Profanity) and enable the [OpenAI Moderation API](https://platform.openai.com/docs/guides/moderation).

### Embedding the Voice Widget

Add voice-enabled widgets to your pages or posts using the standard shortcode with the voice parameter:

```
[tw_chat_widget id=WIDGET_ID voice=true]
```

You can customize the widget height as with standard widgets:

```
[tw_chat_widget id=WIDGET_ID voice=true height="500px"]
```

**Note:** Voice widgets require a modern browser with microphone access. Users will be prompted to grant microphone permissions when interacting with the voice widget.

## Logging and Analytics

### Database Logging System

Version 2.2 introduces a comprehensive database logging system that replaces the previous file-based logging:

- **Message History**: Track all conversations with detailed message logs including conversation IDs, widget IDs, message types, and token usage
- **System Logs**: Monitor system events, errors, warnings, and debug information with contextual data
- **Tool Call Tracking**: All function/tool calls are logged in message history with responses tracked in system logs
- **Automatic Cleanup**: Configurable retention periods with daily scheduled cleanup tasks (default: 30 days)

### Reporting Dashboard

Access comprehensive analytics and usage statistics:

- **Time Period Filters**: View data for 7, 14, or 30-day periods
- **Usage Statistics**: 
  - Total conversations
  - User messages count
  - Total tokens consumed (input + output)
  - Widget performance breakdown
- **Visual Charts**: Widget usage distribution and performance metrics
- **Widget Titles**: Clear identification of widgets in reports and charts

### Message History Management

Manage conversation logs with powerful tools:

- **Export to CSV**: Download conversation history for analysis or archival
- **Delete Conversations**: Remove individual conversations or clear all history
- **Date Filtering**: Filter messages by date range with clear From/To date labels
- **Message Details**: View full conversation threads with token usage information

### System Log Viewer

Monitor system health and debug issues:

- **Log Type Filtering**: Filter by info, error, warning, or debug messages
- **Abbreviated Display**: Clean interface with expandable message details
- **Date Range Filtering**: Focus on specific time periods
- **Contextual Information**: View detailed context data for each log entry

## System Requirements

- WordPress 6.6 or higher
- PHP 8.1 or higher
- Valid OpenAI API key (for text chat widgets)
- Valid API key for RetellAI (for voice chat widgets)

## Resources

- GitHub Repository: [https://github.com/treyworks/treyworks-chat-plugin](https://github.com/treyworks/treyworks-chat-plugin)
- Website: [https://treyworks.com/chat-plugin/](https://treyworks.com/chat-plugin/)
- WordPress Plugin Handbook: [https://developer.wordpress.org/plugins/hooks/](https://developer.wordpress.org/plugins/hooks/)
- OpenAI PHP Client: [https://github.com/openai-php/client](https://github.com/openai-php/client)

For additional support or feature requests, please open an issue on our GitHub repository.

## Acknowledgements

Special thanks to the maintainers of the [OpenAI PHP Client](https://github.com/openai-php/client) for their excellent work, which has been instrumental in the development of this plugin.