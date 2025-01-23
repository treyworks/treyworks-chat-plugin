# Treyworks Chat Plugin for WordPress

## Overview

The Treyworks Chat Plugin empowers your WordPress website with intelligent chatbots powered by the OpenAI Assistants API. Enhance user experience, provide instant answers, and boost engagement with this versatile and customizable plugin.

## Key Features

- Seamless integration with OpenAI Assistants API
- Multiple chat widgets per page
- Customizable appearance to match your website's design
- Advanced functions for site search, post retrieval, and more
- Email and webhook capabilities for lead generation
- WordPress action and filter integration
- Message moderation and profanity filtering

## Installation

1. Clone or download the repository:
   ```
   git clone https://github.com/treyworks/treyworks-chat-plugin.git
   ```
2. Upload and install the plugin via the WordPress Admin Panel.
3. Activate the plugin.
4. Navigate to the plugin's settings page and enter your OpenAI API key.
5. View and manage your OpenAI assistants in the Assistants tab.
6. Create a new chat widget in the Chat Widgets tab.

## Usage

### Global Chat Widget
Set up a global chat widget in the Settings tab after creating a chat widget.

### Page-Specific Chat Widgets
Add chat widgets to specific pages using the shortcode:
```
[tw_chat_widget id=WIDGET_ID]
```

Optionally, specify the widget height:
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
    --tw-chat-position-bottom: 25px;
    --tw-chat-position-right: 25px;
    --tw-chat-icon-color: #3d4df0;
    --tw-chat-bubble-size: 100px;
    --tw-chat-bubble-border-radius: 100%;
    --tw-chat-bubble-background: #fff;
    --tw-chat-bubble-box-shadow: none;
    --tw-chat-bubble-font-size: 16px;
    --tw-chat-primary: #000;
    --tw-chat-bubble-z-index: 1;
    --tw-chat-bubble-icon-size: 50px;
    --tw-chat-interface-width: 350px;
    --tw-chat-interface-max-width: 85vw;
    --tw-chat-interface-height: 500px;
    --tw-chat-interface-max-height: 50vh;
    --tw-chat-background: white;
    --tw-chat-interface-border: 1px solid #ddd;
    --tw-chat-interface-box-shadow: 0 0 5px rgba(0,0,0,0.1);
    --tw-chat-header-background: #333;
    --tw-chat-header-color: #fff;
    --tw-chat-header-padding: 10px 20px;
    --tw-chat-header-close-size: 32px;
    --tw-chat-header-close-color: #fff;
    --tw-chat-logo-width: 100px;
    --tw-chat-logo-height: auto;
    --tw-chat-message-padding: 20px;
    --tw-chat-message-border-radius: 0;
    --tw-chat-message-box-shadow: -1px 1px rgba(0,0,0,0.5);
    --tw-chat-padding: 10px 20px;
    --tw-chat-message-font-size: 1rem;
    --tw-chat-message-width: 85%;
    --tw-chat-message-background: #f0f0f0;
    --tw-chat-message-color: #333;
    --tw-chat-message-user-background: #333;
    --tw-chat-message-user-color: #fff;
    --tw-chat-message-error-background: transparent;
    --tw-chat-message-error-box-shadow: none;
    --tw-chat-send-button-image-size: 64px;
    --tw-chat-input-border: 1px solid;
    --tw-chat-input-background: transparent;
    --tw-chat-disclaimer-font-size: 0.8rem;
    --tw-chat-disclaimer-background: #f0f0f0;
    --tw-chat-disclaimer-color: #000;
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



## Logging

Enable logging from the plugin settings dashboard for debugging and tracking function calls. Refresh or clear logs directly from the dashboard.

## System Requirements

- WordPress 6.6 or higher
- PHP 8.1 or higher
- Valid API key for either OpenAI or Google Gemini

## Resources

- GitHub Repository: [https://github.com/treyworks/treyworks-chat-plugin](https://github.com/treyworks/treyworks-chat-plugin)
- Website: [https://treyworks.com/chat-plugin/](https://treyworks.com/chat-plugin/)
- WordPress Plugin Handbook: [https://developer.wordpress.org/plugins/hooks/](https://developer.wordpress.org/plugins/hooks/)

For additional support or feature requests, please open an issue on our GitHub repository.