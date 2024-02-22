# Treyworks Chat Plugin for WordPress

This plugin adds an OpenAI powered chatbot to your Wordpress website - giving your visitors instant answers and a boosted user experience. This plugin aims to strengthen website interaction, enhance customer support, and can be modified to fit your website's look and feel.

## How to Install:

* Clone or download the repository as a zip file:
`git clone https://github.com/treyworks/treyworks-chat-plugin.git`
* Upload and install the plugin on the Add Plugins page.
* Activate the plugin in your WordPress admin panel.
* Go to the plugin's settings page and enter your OpenAI API key
* Go to the Chat Widgets tab and create a new widget. Enter a name, assistants ID, and greeting text.
* Go to the Assistants tab to view the assistants in your OpenAI account.

## Usage:

* A global chat widget can be set up on the Settings tab after a chat widget has been created.
* Chat widgets can also be added to pages using a shortcode: `[tw_chat_widget id=WIDGET_ID]`
* Keep in mind that multiple chat widgets can be present on a page, but the same chat widget cannot be added more than once.

## Additional Notes:

* Make sure you have a valid OpenAI API account and API key.
* Take into account the potential cost implications of using the OpenAI Assistant API.
* Routinely check and adjust the chatbot prompts and settings to improve its performance.

## Style Customizations

The appearance of the plugin can be modified with CSS variables. You can adjust elements like chat position, color, or bubble size to fit your website's design. Here is a list of CSS variable definitions and their default values:

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

## Links

Github: https://github.com/treyworks/treyworks-chat-plugin

Website: https://treyworks.com/chat-plugin/
