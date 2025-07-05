# Treyworks Chat Plugin for WordPress

## Overview

The Treyworks Chat Plugin empowers your WordPress website with intelligent chatbots in two formats: text-based chat and voice-interactive conversations. Enhance user experience, provide instant answers, and boost engagement with these versatile and customizable widgets.

### Two Chat Widget Options

1. **Text Chat Widgets** - Powered by OpenAI Assistants API, providing intelligent text-based conversations
2. **Voice Chat Widgets** - Powered by RetellAI, enabling interactive voice conversations

## Key Features

### Text Chat Features (OpenAI)
- Seamless integration with OpenAI Assistants API
- Multiple text chat widgets per page
- Advanced functions for site search, post retrieval, and more
- Email and webhook capabilities for lead generation
- WordPress action and filter integration
- Message moderation and profanity filtering

### Voice Chat Features (RetellAI)
- Interactive voice conversations using RetellAI's technology
- Selection of voice agents with unique characteristics
- Voice activation options (button press or automatic)
- Customizable voice recognition settings

### General Features
- Customizable appearance to match your website's design
- Multiple widgets of either type per page
- Embedding via shortcode or global widget setting

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
   - View and manage your OpenAI assistants in the Assistants tab
6. For voice chat widgets:
   - Enter your RetellAI API key in the Voice Widget section
   - Select from available RetellAI agents
7. Create a new chat widget (text or voice) in the Chat Widgets tab.

## Usage

### Global Chat Widget
Set up a global chat widget in the Settings tab after creating a chat widget.

You can override the global chat widget on a page using the **Chat Widget Settings** in the page editor.

Each page can have a unique chat widget, but the global chat widget will be used if no widget is specified on the page.

### Embedding a Chat Widget in a Page
Add chat widgets to specific pages using the shortcode:
```
[tw_chat_widget id=WIDGET_ID]
```

Optionally, specify the widget height in CSS format:
```
[tw_chat_widget id=WIDGET_ID height="500px"]
```

**Note:** Multiple widgets can be added to a page, but each widget can only be used once per page.


## OpenAI Assistant Setup

1. Ensure you have a valid OpenAI API account and API key.
2. Consider the potential costs associated with using the OpenAI Assistant API.
3. Regularly review and optimize your chatbot's prompts and knowledge base.

## Advanced Features

### Site Search Function

Enable site search by adding this function to your OpenAI assistant:

```json
{
  "name": "search_site",
  "description": "Search the website for answers",
  "parameters": {
    "type": "object",
    "properties": {
      "search_term": {
        "type": "string",
        "description": "The search term to lookup on the website"
      }
    },
    "required": [
      "search_term"
    ]
  }
}
```

Add to assistant instructions:
```
Use the search_site function to answer user questions by referring to website content. Always include a link for the user to learn more information.
```

#### Parameters for search_site

1. `search_term` (string, required):
   - The keyword or phrase to search for on the website.
   - Example: "WordPress plugin installation"

Example usage in assistant instructions:
```
To find information about plugin installation:
Use the search_site function with these parameters:
search_term: "WordPress plugin installation"

Summarize the search results and provide a relevant link for more information.
```

### Post Retrieval Function

Add this function to your OpenAI assistant:

```json
{
  "name": "get_posts",
  "description": "List posts by post type.",
  "parameters": {
    "type": "object",
    "properties": {
      "post_type": {
        "type": "string",
        "description": "The post type of the posts to query."
      },
      "order": {
        "type": "string",
        "description": "Query order."
      },
      "orderby": {
        "type": "string",
        "description": "Order the query by date, title, etc."
      },
      "number_of_posts": {
        "type": "string",
        "description": "The number of posts to query."
      }
    },
    "required": []
  }
}
```

Add to assistant instructions:
```
Use the get_posts function to retrieve a list of posts. Summarize the results.
```

#### Parameters for get_posts

1. `post_type` (string, optional):
   - Specifies the type of post to retrieve.
   - Default: 'post'
   - Examples: 'page', 'product', or any custom post type.

2. `order` (string, optional):
   - Sets the order of the retrieved posts.
   - Options: 'ASC' (ascending) or 'DESC' (descending)
   - Default: 'DESC'

3. `orderby` (string, optional):
   - Determines the field to order the posts by.
   - Common options: 'date', 'title', 'author', 'modified'
   - Default: 'date'

4. `number_of_posts` (string, optional):
   - Limits the number of posts to retrieve.
   - Use '-1' to retrieve all posts (use with caution on large sites).
   - Default: '10'

Example usage in assistant instructions:
```
To get the 5 most recent products, ordered by title:
Use the get_posts function with these parameters:
post_type: 'product'
order: 'DESC'
orderby: 'title'
number_of_posts: '5'

Summarize the results, including the product titles and publication dates.
```

### Send Email Message Function

To enable email functionality:

1. Set email recipients in the chat widget settings.
2. Add this function to your OpenAI assistant:

```json
{
  "name": "send_message",
  "description": "Send the user information as an email",
  "parameters": {
    "type": "object",
    "properties": {
      "body": {
        "type": "string",
        "description": "A summary of the user information"
      }
    },
    "required": [
      "body"
    ]
  }
}
```

Add to assistant instructions:
```
Use the send_message function to email the provided information.
```

#### Parameters for send_message

1. `body` (string, required):
   - The content of the email to be sent.
   - Should contain a summary of the user information or query.

Example usage in assistant instructions:
```
To send an email with user information:
Use the send_message function with these parameters:
body: "New customer inquiry: Name: John Doe, Email: john@example.com, Question: How do I install the chat plugin?"

Confirm to the user that their message has been sent to our support team.
```

### Webhook Function

To enable webhook functionality:

1. Set the webhook URL and required headers in the chat widget settings.
2. Add this function to your OpenAI assistant:

```json
{
  "name": "webhook",
  "description": "Post data to an external URL",
  "parameters": {
    "type": "object",
    "properties": {
      "post_data": {
        "type": "string",
        "description": "Data to send to external URL."
      }
    },
    "required": [
      "post_data"
    ]
  }
}
```

Add to assistant instructions:
```
Use the webhook function to send this information.
```

#### Parameters for webhook

1. `post_data` (string, required):
   - The data to be sent to the external URL.
   - Should be formatted as a JSON string.

Example usage in assistant instructions:
```
To send user information to an external CRM:
Use the webhook function with these parameters:
post_data: '{"name": "Jane Smith", "email": "jane@example.com", "interest": "AI chatbot"}'

Confirm to the user that their information has been received and a representative will contact them soon.
```

### WordPress Actions and Filters

1. Navigate to the plugin settings dashboard and locate the "Allowed Actions" section. Add the specific WordPress action or filter you want to use to this list.
2. Add this function to your OpenAI assistant:

```json
{
  "name": "wp_action",
  "description": "Calls a WordPress action and returns the result.",
  "strict": false,
  "parameters": {
    "type": "object",
    "properties": {
      "action_name": {
        "type": "string",
        "description": "The name of the action."
      },
      "action_type": {
        "type": "string",
        "description": "The type of the action, filter or action."
      },
      "action_arguments": {
        "type": "string",
        "description": "The arguments to pass to the action. Formatted as a JSON array"
      }
    },
    "required": [
      "action_name",
      "action_type",
      "action_arguments"
    ]
  }
}
```

#### Parameters for wp_action

1. `action_name` (string, required):
   - The name of the WordPress action or filter to call.
   - Example: "the_content" or "wp_mail"

2. `action_type` (string, required):
   - Specifies whether it's an action or a filter.
   - Options: "action" or "filter"

3. `action_arguments` (string, required):
   - The arguments to pass to the action or filter.
   - Should be formatted as a JSON array.

Example usage in assistant instructions:
```
To modify the content of a post:
Use the wp_action function with these parameters:
action_name: "your_custom_filter"
action_type: "filter"
action_arguments: ["John", "Smith"]

Process the result and provide a summary of how the content was modified.
```

## Suggested Answers

Enhance interactivity by configuring your assistant to provide suggested answers:

1. Add to assistant instructions:
```
Format all responses in JSON:
{
  "message": "[YOUR RESPONSE]",
  "suggestedAnswers": [ARRAY OF SUGGESTED USER ANSWERS TO YOUR RESPONSE]
}
```

2. In the OpenAI platform, navigate to Response Settings in the Model Configuration section and check the JSON Object checkbox.

## Customization

Customize the plugin's appearance using CSS variables. Example:

```css preview
:root {
  /* tw-chat-container */
  --tw-chat-position-bottom: 25px;
  --tw-chat-position-right: 25px;

  /* tw-chat-bubble */
  --tw-chat-bubble-size: 90px;
  --tw-chat-bubble-border-radius: 100%;
  --tw-chat-bubble-background: #fff;
  --tw-chat-bubble-box-shadow: 0 0 5px rgba(0,0,0,.1);
  --tw-chat-bubble-font-size: 16px;
  --tw-chat-bubble-color: #052b43;
  --tw-chat-bubble-z-index: 1;
  --tw-chat-bubble-font-weight: 600;

  /* tw-chat-bubble svg */
  --tw-chat-bubble-icon-size: 45px;

  /* tw-chat-widget-fullscreen */
  --tw-chat-interface-max-width: 85vw;
  --tw-chat-interface-max-height: 85vh;
  --tw-chat-background-color: #ffffff;

  /* tw-chat-interface */
  --tw-chat-interface-width: 500px;
  --tw-chat-interface-height: 550px;
  --tw-chat-background: #f7f7f7;
  --tw-chat-interface-border: 1px solid #f7f7f7;
  --tw-chat-interface-box-shadow: 0 0 5px rgba(0,0,0,0.15);

  /* tw-chat-interface.embedded */
  --tw-chat-interface-embedded-width: 550px;
  --tw-chat-interface-embedded-max-width: 100%;
  --tw-chat-interface-embedded-height: 550px;
  --tw-chat-interface-embedded-max-height: 75vh;

  /* tw-chat-header */
  --tw-chat-header-background: #052b43;
  --tw-chat-header-color: #fff;
  --tw-chat-header-padding: 10px 20px;
  --tw-chat-header-button-color: #fff;

  /* tw-chat-header-close svg */
  --tw-chat-header-close-size: 32px;

  /* tw-chat-header .logo */
  --tw-chat-logo-width: 100px;
  --tw-chat-logo-height: auto;

  /* tw-chat-messages */
  --tw-chat-message-padding: 20px;
  --tw-chat-message-padding-bottom: 80px;

  /* tw-chat-messages .message */
  --tw-chat-message-border-radius: 10px;
  --tw-chat-message-box-shadow: 0 0 5px rgba(0,0,0,0.15);
  --tw-chat-message-border: 1px solid #ddd;
  --tw-chat-padding: 10px 20px;
  --tw-chat-message-spacing: 1rem;
  --tw-chat-message-width: 85%;
  --tw-chat-message-background: #fff;
  --tw-chat-message-color: #1d1d1d;

  /* tw-chat-messages .message, .tw-chat-messages .message * */
  --tw-chat-message-font-size: 1rem;

  /* tw-chat-messages .message h1, .tw-chat-messages .message h2, ... */
  --tw-chat-message-heading-font-weight: 600;

  /* tw-chat-messages .message a */
  --tw-chat-message-link-font-weight: bold;

  /* tw-chat-messages .message.user */
  --tw-chat-message-user-background: #052b43;
  --tw-chat-message-user-color: #fff;

  /* tw-chat-messages .message.error */
  --tw-chat-message-error-background: transparent;
  --tw-chat-message-error-color: #a83235;
  --tw-chat-message-error-box-shadow: none;

  /* tw-chat-form */
  --tw-chat-input-border: 1px solid #ddd;
  --tw-chat-input-border-radius: 10px;
  --tw-chat-input-box-shadow: 0 0 5px rgba(0,0,0,0.1);
  --tw-chat-input-background: #fff;
  --tw-chat-input-max-width: 95%;

  /* tw-chat-form textarea */
  --tw-chat-input-color: #1d1d1d;
  --tw-chat-input-font-size: 1rem;
  --tw-chat-input-placeholder-color: #999;

  /* tw-chat-input-container .tw-chat-char-count */
  --tw-chat-char-count-font-size: 0.75rem;

  /* tw-chat-suggested-answers */
  --tw-chat-suggested-answer-spacing: 10px;

  /* tw-chat-suggested-answers button */
  --tw-chat-suggested-answer-font-size: 1rem;
  --tw-chat-suggested-answer-padding: 10px;
  --tw-chat-suggested-answer-border-radius: 10px;
  --tw-chat-suggested-answer-box-shadow: none;
  --tw-chat-suggested-answer-border: none;
  --tw-chat-suggested-answer-transition: all 0.3s;
  --tw-chat-suggested-answer-min-width: calc(50% - 10px);

  /* tw-chat-disclaimer-container */
  --tw-chat-disclaimer-text-align: center;
  --tw-chat-disclaimer-padding: 10px;
  --tw-chat-disclaimer-font-size: 0.8rem;
  --tw-chat-disclaimer-background: transparent;
  --tw-chat-disclaimer-color: #000;

  /* tw-chat-button-image and tw-chat-send-button-image */
  --tw-chat-send-button-image-size: 48px;

  /* Mobile Styles */
  --tw-chat-interface-width-mobile: 95vw;
  --tw-chat-interface-width-height: 95vh;
  --tw-chat-interface-z-index-mobile: 999;
  --tw-chat-bubble-size-mobile: 80px;
  --tw-chat-bubble-font-size-mobile: 14px;
  --tw-chat-bubble-icon-size-mobile: 40px;
}
```
## Message Moderation

Enable the message moderation feature from the plugin settings. This feature is designed to filter user messages with the [Profanity PHP library](https://github.com/ConsoleTVs/Profanity) and enable the [OpenAI Moderation API](https://platform.openai.com/docs/guides/moderation).

## Voice Widget Feature

The Voice Widget feature integrates [RetellAI](https://www.retellai.com/) with your chat widgets to provide interactive voice conversations on your WordPress site.

### RetellAI Integration

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

### Creating a Voice Chat Widget

1. Navigate to the Chat Widgets tab and select "Add New Widget"
2. Configure your widget as usual with an OpenAI assistant
3. Enable the Voice feature by checking the "Enable Voice Widget" option
4. Select a RetellAI agent from the dropdown to use with this widget
5. Customize additional voice settings as needed:
   - Initial greeting message
   - Voice activation method (button press or automatic)
   - Voice recognition sensitivity

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

## Logging

Enable logging from the plugin settings dashboard for debugging and tracking function calls. Refresh or clear logs directly from the dashboard.

## System Requirements

- WordPress 6.6 or higher
- PHP 8.1 or higher
- Valid API key for the OpenAI Assistants API

## Resources

- GitHub Repository: [https://github.com/treyworks/treyworks-chat-plugin](https://github.com/treyworks/treyworks-chat-plugin)
- Website: [https://treyworks.com/chat-plugin/](https://treyworks.com/chat-plugin/)
- WordPress Plugin Handbook: [https://developer.wordpress.org/plugins/hooks/](https://developer.wordpress.org/plugins/hooks/)

For additional support or feature requests, please open an issue on our GitHub repository.