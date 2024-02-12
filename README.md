# Treyworks Chat Plugin for WordPress

**Features:**

* Add a conversational chatbot powered by the OpenAI Assistants API to engage visitors and provide instant answers.
* Automatically respond to user queries and offers assistance, enhancing visitor experience.
* Encourage interaction and drive engagement on your website, keeping visitors engaged.
* Streamline customer support and reduce response times, leading to greater satisfaction.
* Tailor the chatbot's visual appearance and placement to seamlessly blend with your website's design.

## Installation:

* Download the plugin as a zip from this repository.
* Upload and install the plugin on the Add Plugins page.
* Activate the plugin in your WordPress admin panel.
* Navigate to the plugin's settings page and enter your OpenAI API key
* Navigate to the Chat Widgets tab and create a new widget. Enter a name, assistants ID, and greeting text.
* Navigate to the Assistants tab to view the assistants in your OpenAI account.

## Usage:

* A global chat widget can be set up on the Settings tab after a chat widget has been created.
* Chat widgets can also be added to pages using a shortcode: [tw_chat_widget id=WIDGET_ID]
* **Note:** Multiple chat widgets can be active on a page. The same chat widget cannot be added to a page more than once. 

## Additional Notes:

* Ensure you have a valid OpenAI API account and API key.
* Consider the potential cost implications of using the OpenAI Assistant API.
* Regularly review and refine the chatbot's prompts and settings to optimize its performance.

## Style Customizations
Here is a list of CSS variable definitions and their default values:
```css
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
    --tw-chat-message-padding: 20px;
    --tw-chat-message-border-radius: 0;
    --tw-chat-message-box-shadow: -1px 1px rgba(0,0,0,0.5);
    --tw-chat-padding: 10px 20px;
    --tw-chat-message-width: 85%;
    --tw-chat-message-background: #f0f0f0;
    --tw-chat-message-color: #333;
    --tw-chat-message-user-background: #333;
    --tw-chat-message-user-color: #fff;
    --tw-chat-message-error-background: transparent;
    --tw-chat-message-error-box-shadow: none;
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

## Support:

For any questions or assistance, please visit the plugin's support forum or contact the plugin developer at (https://treyworks.com).