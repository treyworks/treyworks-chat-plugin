# Project Changelog

## 2.1.0
- Feature: Admin UX improvements
- 

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
