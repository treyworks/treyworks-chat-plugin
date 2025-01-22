# Project Changelog

# 1.2.8
- Feature: Added metabox to override global chat widget on individual pages.
- Feature: Added expand button to sticky chat widget header to make the widget fullscreen.
- Feature: Added fields for customizing the chat button and send message button images.

# 1.2.7
- Bug fix: Changed OpenAI client instantiation to include header to support v2 of the Assistants API 

# 1.2.6
- Bug fix: Resolved an issue where the send_message function was incorrectly stripping all HTML tags from the body parameter.
- Bug fix: Corrected the display of escaped HTML characters when viewing instructions in the Assistant Manager's admin page.
- Bug fix: Implemented json_decode to correctly process incoming data in the webhook function.
- Bug fix: Fixed scroll behavior when widget is loaded.

# 1.2.5
- Bug fix: Log file is created on plugin installation
- Added checkbox to plugin settings to enable or disable message moderation
    - Filter user messages with the Profanity PHP library
    - Enabled the OpenAI Moderation API for content filtering

# 1.2.4
- Added Call Action Tool: Allows the assistant to call an action and retrieve the result using the WordPress Hook system
- Improved the email template for the send_message function

## 1.2.3
- Fix ListInput from trimming trailing spaces
- Fix Save Widget modal when creating a new chat widget
- Add get_posts function and custom tool call

## 1.2.2
- Added ListInput component for better management of the suggest answers field in the chat widget admin form.
- Added widget fields to allow users to clear suggested answers.
- Fixed log file caching in the Log File Viewer.
- Restructure admin UI page components for readability and performance.

## 1.2.1
- Links in the chat response now open in a new tab.
- Added token usage to plugin log.
- Added Changelog to track updates within the project.
