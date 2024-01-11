# Treyworks Chat Plugin for WordPress

**Features:**

* Integrate a conversational chatbot powered by the OpenAI Assistants API to engage visitors and provide instant answers.
* Automatically respond to user queries and offers assistance, enhancing visitor experience.
* Encourage interaction and drive engagement on your website, keeping visitors engaged.
* Streamline customer support and reduce response times, leading to greater satisfaction.
* Tailor the chatbot's visual appearance and placement to seamlessly blend with your website's design.
* Configure the plugin using simple settings in the WordPress admin panel.

## Installation:

* Download the plugin as a zip from this repository.
* Upload and install the plugin on the Add Plugins page.
* Activate the plugin in your WordPress admin panel.
* Navigate to the plugin's settings page and enter your OpenAI API key, Assistants ID, and disclaimer text.
* Customize the chatbot's appearance and behavior as desired.

## Usage:

* Once activated, the chatbot will automatically appear on your website, ready to interact with visitors.
* Visitors can engage with the chatbot by typing their questions or requests in the chat interface.
* The chatbot will utilize OpenAI Assistant API to generate responses and provide information or support.

## Additional Notes:

* Ensure you have a valid OpenAI API account and API key.
* Consider the potential cost implications of using the OpenAI Assistant API.
* Regularly review and refine the chatbot's prompts and settings to optimize its performance.

## Frequently Asked Questions

### Can the chat widget be customized to match my website's design?
The chat widget provides CSS variables to customize the common styles easily. Refer to the [Style Customizations](#style-customizations) section for a full list.

### Is the chat widget compatible with mobile devices?
Yes, the chat widget is designed to work on mobile devices.

### What are the requirements for using this chat widget?
This plugin has been tested on WordPress 6.4.2. It requires an OpenAI API key and an Assistants ID for your chosen Assistant. 

### How does the chat widget handle user data and privacy?
The plugin does not save any data at this time but does send data using the OpenAI API. Refer to the [OpenAI Privacy Policy](https://openai.com/policies/privacy-policy) for more information.

### Can I integrate the chat widget with other tools and platforms?
Integrations are managed through functions set up in your OpenAI assistant.

### What are the pricing plans for the chat widget?
The base version supports one Assistant chat widget and will also be free and open-source.

### How can I track and analyze interactions through the chat widget?
Conversation storage and analytics events are not implemented at this time.

### Can I set up automated responses or chatbots with the widget?
Automated responses can be set up through the prompt instructions defined in the OpenAI Assistants admin panel.

## Style Customizations
Here is a list of CSS variable definitions and their default values:
```css
:root {
  --tw-chat-background: #fff;
  --tw-chat-bubble-background: #fff;
  --tw-chat-bubble-box-shadow: none;
  --tw-chat-disclaimer-background: #f0f0f0;
  --tw-chat-disclaimer-color: #000;
  --tw-chat-disclaimer-font-size: 0.8rem;
  --tw-chat-icon-color: #3d4df0;
  --tw-chat-input-background: transparent;
  --tw-chat-input-border: 1px solid;
  --tw-chat-interface-border: 1px solid #ddd;
  --tw-chat-interface-box-shadow: 0 0 5px rgba(0,0,0,0.1);
  --tw-chat-interface-height: 500px;
  --tw-chat-interface-max-height: 50vh;
  --tw-chat-interface-max-width: 85vw;
  --tw-chat-interface-width: 350px;
  --tw-chat-message-background: #f0f0f0;
  --tw-chat-message-border-radius: 0;
  --tw-chat-message-box-shadow: -1px 1px rgba(0,0,0,0.5);
  --tw-chat-message-color: #333;
  --tw-chat-message-padding: 20px;
  --tw-chat-message-user-background: #333;
  --tw-chat-message-user-color: #fff;
  --tw-chat-message-width: 85%;
  --tw-chat-padding: 10px 20px;
  --tw-chat-position-bottom: 25px;
  --tw-chat-position-right: 25px;
  --tw-chat-primary: #000;
}
```

## Support:

For any questions or assistance, please visit the plugin's support forum or contact the plugin developer at (https://treyworks.com).