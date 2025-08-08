# Project Roadmap: TreyWorks Chat v2.0

**Objective:** Transition from the deprecated OpenAI Assistants API to the Chat Completion API, removing tool-calling functionality, and ensuring future compatibility.

---

## Phase 1: Backend Refactoring

### 1.1. Update Core Chat Handling Logic

-   **File:** `includes/class-tw-chat.php`
-   **Function:** `handle_chat_response()`
    -   **Remove:** All code related to the Assistants API, including threads, runs, tool call submissions, and all custom tool processing logic.
    -   **Implement:** A new function that accepts the entire chat history from the front-end.
    -   **API Call:** Use the `chat->completions->create()` method from the OpenAI PHP client.
    -   **System Prompt:** Pass the new "System Prompt" from the widget settings to the API.
    -   **History:** Construct the `messages` array for the API call using the history provided by the front-end.

### 1.2. Remove Assistant and Tool-Related Admin Features

-   **File:** `admin/class-tw-chat-admin.php`
-   **Remove Functions:**
    -   `get_assistants()`
    -   `get_assistants_callback()`
-   **Remove Actions & Settings:**
    -   Remove the `wp_ajax_get_assistants` action hook.
    -   Remove the `tw_chat_assistant_id`, `tw_chat_assistant_name`, and `tw_chat_allowed_actions` settings from `register_settings()` and `delete_options()`.

---

## Phase 2: Admin UI Overhaul

### 2.1. Update Chat Widget Settings

-   **File:** `admin/class-tw-chat-admin.php` (and associated front-end JavaScript)
-   **Remove:** The "Assistants" tab and the list of assistants from the admin interface.
-   **Remove Fields:** 
        - The "Assistant ID" dropdown from the chat widget settings form.
        - The "Allowed Actions" input from the chat widget settings form.
-   **Add Field:** A new `textarea` field labeled "System Prompt" to the chat widget settings. This will allow administrators to define the chatbot's behavior and personality.
-   **Update Save Logic:** Modify `save_chat_widget_callback()` to save the new `tw_chat_system_prompt` meta field and remove the code that saves `tw_chat_assistant_id` and `tw_chat_allowed_actions`.

---

## Phase 3: Frontend Chat Widget Enhancement

### 3.1. Implement Conversation History

-   **File:** `widgets/chat-widget/src/components/ChatWidget.jsx`
-   **State Management:** Use the `messages` state array to store the entire conversation history (both user and assistant messages).
-   **API Payload:** In `handleMessageSubmit()`, send the entire `messages` array to the backend in the `axios` request, not just the new message.

### 3.2. Update Data Handling

-   **File:** `widgets/chat-widget/src/components/ChatWidget.jsx`
-   **Remove:** All logic related to `threadID`. The chat is now stateless from the backend's perspective and relies on the history provided by the client.

---

## Phase 4: Documentation and Cleanup

### 4.1. Update README

-   **File:** `README.md`
-   **Remove:** All references to OpenAI Assistants and tool calling, including instructions for adding functions and actions.
-   **Add:** New instructions explaining how to use the "System Prompt" to configure the chat widget's behavior.

### 4.2. Update Changelog

-   **File:** `CHANGELOG.md`
-   **Add:** A new entry for v2.0 detailing the migration from the Assistants API to the Chat Completion API, the removal of tool-calling, and other new features.
