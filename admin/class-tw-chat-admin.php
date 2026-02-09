<?php

/**
 * The admin-specific functionality of the plugin.
 *
 */

 class TW_Chat_Admin {
    public string $version = TW_CHAT_VERSION;

    /**
     * Constructor for the TW_Chat_Admin class.
     */
    public function __construct() {
        $this->setup_actions();

    }

    public function setup_actions() {
        add_action('admin_menu', array($this, 'add_admin_menu_page'));
        add_action('admin_init', array($this, 'register_settings'));
        add_action('admin_enqueue_scripts', array($this, 'enqueue_styles'));
        add_action('admin_enqueue_scripts', array($this, 'enqueue_scripts'));
        add_action( 'wp_ajax_save_settings', array($this, 'save_settings_callback') );
        add_action( 'wp_ajax_get_chat_widgets', array($this, 'get_chat_widgets_callback') );
        add_action( 'wp_ajax_save_chat_widget', array($this, 'save_chat_widget_callback'));
        add_action( 'wp_ajax_remove_chat_widget', array($this, 'remove_chat_widget_callback'));
        add_action( 'wp_ajax_get_retell_agents', array($this, 'get_retell_agents_callback'));
        add_action( 'wp_ajax_get_conversations_list', array($this, 'get_conversations_list_callback'));
        add_action( 'wp_ajax_get_conversation_messages', array($this, 'get_conversation_messages_callback'));
        add_action( 'wp_ajax_get_dashboard_stats', array($this, 'get_dashboard_stats_callback'));
        add_action( 'wp_ajax_tw_chat_generate_prompt', array($this, 'generate_prompt_callback'));
        // Hook the function to the uninstall hook
        register_uninstall_hook(__FILE__, array($this, 'delete_options'));
    }

    /**
     * Add top-level admin menu page for configuring plugin
     */
    public function add_admin_menu_page() {
        add_menu_page(
            'Treyworks Chat for WordPress', // Page title
            'Treyworks Chat',           // Menu title
            'manage_options',             // Capability required
            'tw-chat-settings',        // Menu slug
            array($this, 'render_options_page'), // Callback function to render the options page
            'dashicons-format-chat',    // Icon URL/Dashicon class
            30                           // Position in menu order
        );
    }

    /**
     * Registers settings for the options page.
     */
    public function register_settings() {
        register_setting('tw-chat-ui-settings-group', 'tw_chat_assistant_name');
        register_setting('tw-chat-ui-settings-group', 'tw_chat_openai_key');
        register_setting('tw-chat-ui-settings-group', 'tw_chat_retell_key');
        register_setting('tw-chat-ui-settings-group', 'tw_chat_button_text');
        register_setting('tw-chat-ui-settings-group', 'tw_chat_greeting');
        register_setting('tw-chat-ui-settings-group', 'tw_chat_disclaimer');
        register_setting('tw-chat-ui-settings-group', 'tw_chat_error_message');
        register_setting('tw-chat-ui-settings-group', 'tw_chat_is_enabled');
        register_setting('tw-chat-ui-settings-group', 'tw_chat_max_characters');
        register_setting('tw-chat-ui-settings-group', 'tw_chat_global_widget_id');
        register_setting('tw-chat-ui-settings-group', 'tw_chat_logo_url');
        register_setting('tw-chat-ui-settings-group', 'tw_chat_is_moderation');
        register_setting('tw-chat-ui-settings-group', 'tw_chat_allowed_actions');
        register_setting('tw-chat-ui-settings-group', 'tw_chat_is_debug');
        register_setting('tw-chat-ui-settings-group', 'tw_chat_api_base_uri');
        register_setting('tw-chat-ui-settings-group', 'tw_chat_log_retention_days');
    }

    /**
     * Delete stored options when plugin is uninstalled.
     */
    public function delete_options() {
        delete_option('tw_chat_assistant_name');
        delete_option('tw_chat_openai_key');
        delete_option('tw_chat_retell_key');
        delete_option('tw_chat_button_text');
        delete_option('tw_chat_greeting');
        delete_option('tw_chat_disclaimer');
        delete_option('tw_chat_error_message');
        delete_option('tw_chat_is_enabled');
        delete_option('tw_chat_max_characters');
        delete_option('tw_chat_global_widget_id');
        delete_option('tw_chat_logo_url');
        delete_option('tw_chat_is_moderation');
        delete_option('tw_chat_allowed_actions');
        delete_option('tw_chat_is_debug');
        delete_option('tw_chat_api_base_uri');
    }

    /**
     * Retrieves the plugin's options settings.
     * 
     * @return array Contains the settings
     */
    public function get_plugin_settings() {
        return array(
            'tw_chat_button_text' => get_option('tw_chat_button_text', ''),
            'tw_chat_assistant_name' => get_option('tw_chat_assistant_name', ''),
            'tw_chat_openai_key' => get_option('tw_chat_openai_key', ''),
            'tw_chat_retell_key' => get_option('tw_chat_retell_key', ''),
            'tw_chat_greeting' => get_option('tw_chat_greeting', ''),
            'tw_chat_disclaimer' => get_option('tw_chat_disclaimer', ''),
            'tw_chat_error_message' => get_option('tw_chat_error_message', ''),
            'tw_chat_is_enabled' => get_option('tw_chat_is_enabled'),
            'tw_chat_max_characters' => get_option('tw_chat_max_characters'),
            'tw_chat_global_widget_id' => get_option('tw_chat_global_widget_id'),
            'tw_chat_logo_url' => get_option('tw_chat_logo_url'),
            'tw_chat_is_moderation' => get_option('tw_chat_is_moderation'),
            'tw_chat_allowed_actions' => get_option('tw_chat_allowed_actions'),
            'tw_chat_is_debug' => get_option('tw_chat_is_debug'),
            'tw_chat_api_base_uri' => get_option('tw_chat_api_base_uri')
        );
    }

    /**
     * Renders the options page HTML.
     */
    public function render_options_page() {
        require plugin_dir_path( __FILE__ ) . 'partials/settings-page.php';
    }

    /**
	 * Register the stylesheets for the admin area.
	 */
	public function enqueue_styles() {
        if ( isset( $_GET['page'] ) && $_GET['page'] === 'tw-chat-settings' ) {
		    wp_enqueue_style( 'tw-chat-admin', plugin_dir_url( __FILE__ ) . 'app/dist/style.css', array(), TW_CHAT_VERSION, 'all' );
        }
	}

    private function get_plugin_directory_url() {
        // Get the directory of the current file
        $current_directory = dirname( __FILE__ );
        
        // Get the parent directory
        $parent_directory = dirname( $current_directory );
        
        // Convert the parent directory path to a URL
        $parent_directory_url = plugin_dir_url( $parent_directory . '/index.php' );
        
        return $parent_directory_url;
    }

	/**
	 * Register the JavaScript for the admin area.
	 */
	public function enqueue_scripts() {
        if ( isset( $_GET['page'] ) && $_GET['page'] === 'tw-chat-settings' ) {
            wp_enqueue_script( 'tw-chat-admin', plugin_dir_url( __FILE__ ) . 'app/dist/tw-chat-admin.js', array(), TW_CHAT_VERSION, false );
            
            // Localize script with current settings
            $script_data = $this->get_plugin_settings();
            $script_data['ajax_url'] = admin_url( 'admin-ajax.php' );
            $script_data['ajax_nonce'] = wp_create_nonce( '_ajax_nonce' );
            $script_data['nonce'] = wp_create_nonce('tw_chat_admin_nonce');
            $script_data['chat_widgets'] = TW_Chat_Widgets::get_chat_widgets();
            $script_data['plugin_dir_url'] = $this->get_plugin_directory_url();
            $script_data['plugin_version'] = TW_CHAT_VERSION;

            // Get available post types for site search
            $post_types = get_post_types( array( 'public' => true ), 'objects' );
            $available_post_types = array();
            foreach ( $post_types as $post_type ) {
                $available_post_types[] = array(
                    'name' => $post_type->name,
                    'label' => $post_type->label,
                    'singular_name' => $post_type->labels->singular_name
                );
            }
            $script_data['available_post_types'] = $available_post_types;
            
            wp_localize_script( 'tw-chat-admin', 'twChatSettings', $script_data );
        }
        // Enqueue the media uploader scripts
        wp_enqueue_media(); 
    }

    /**
	 * Handle Settings Form Submissions
	 *
	 */
    public function save_settings_callback() {
        try {

            // Sanitize and validate received data
            $settings = $_POST['data'];
        
            // Update settings 
            update_option('tw_chat_openai_key', sanitize_text_field($settings['tw_chat_openai_key']));
            update_option('tw_chat_retell_key', sanitize_text_field($settings['tw_chat_retell_key']));
            update_option('tw_chat_is_enabled', sanitize_text_field($settings['tw_chat_is_enabled']));
            update_option('tw_chat_button_text', sanitize_text_field($settings['tw_chat_button_text']));
            $disclaimer_text = stripslashes(strip_tags($settings['tw_chat_disclaimer'], '<a>'));
            update_option('tw_chat_disclaimer', $disclaimer_text);
            update_option('tw_chat_error_message', sanitize_text_field($settings['tw_chat_error_message']));
            update_option('tw_chat_max_characters', sanitize_text_field($settings['tw_chat_max_characters']));
            update_option('tw_chat_global_widget_id', sanitize_text_field($settings['tw_chat_global_widget_id']));
            update_option('tw_chat_logo_url', sanitize_text_field($settings['tw_chat_logo_url']));
            update_option('tw_chat_is_moderation', sanitize_text_field($settings['tw_chat_is_moderation']));
            update_option('tw_chat_allowed_actions', sanitize_text_field($settings['tw_chat_allowed_actions']));
            update_option('tw_chat_is_debug', sanitize_text_field($settings['tw_chat_is_debug']));
            update_option('tw_chat_api_base_uri', sanitize_text_field($settings['tw_chat_api_base_uri']));

            // Send response back to AJAX
            wp_send_json_success( array( 'message' => 'Settings saved!' ) );
        } catch (Exception $e) {
            wp_send_json_error( array( 'message' => 'Exception: ' .  $e->getMessage() ) );
        }
    }

    /**
     * Get Chat Widgets AJAX Callback
     */
    public function get_chat_widgets_callback() {
        try {
            // Query for chat widget post
            $data = TW_Chat_Widgets::get_chat_widgets();
            // Return the data in a JSON success response
            wp_send_json_success( $data );
        } catch (Exception $e) {
            wp_send_json_error( array( 'message' => 'Exception: ' .  $e->getMessage() ) );
        }
    }

    /*
     * Save chat_widget post
     */
    function save_chat_widget_callback() {
        try {
            // Get and sanitize post data
            $widget_name = isset($_POST['tw_chat_widget_name']) ? sanitize_text_field($_POST['tw_chat_widget_name']) : '';
            $system_prompt = isset($_POST['tw_chat_system_prompt']) ? sanitize_textarea_field($_POST['tw_chat_system_prompt']) : '';
            $model = isset($_POST['tw_chat_ai_model']) ? sanitize_text_field($_POST['tw_chat_ai_model']) : 'gpt-4o';
            $greeting = isset($_POST['tw_chat_greeting']) ? sanitize_text_field($_POST['tw_chat_greeting']) : '';
            $suggested_answers = isset($_POST['tw_chat_suggested_answers']) ? sanitize_text_field($_POST['tw_chat_suggested_answers']) : '';
            $dismiss_answers = isset($_POST['tw_chat_dismiss_answers']) ? rest_sanitize_boolean($_POST['tw_chat_dismiss_answers']) : 0;
            $dismiss_answers_text = isset($_POST['tw_chat_dismiss_answers_text']) ? sanitize_text_field($_POST['tw_chat_dismiss_answers_text']) : '';
            $webhook_address = isset($_POST['tw_chat_webhook_address']) ? sanitize_text_field($_POST['tw_chat_webhook_address']) : '';
            $webhook_header = isset($_POST['tw_chat_webhook_header']) ? sanitize_text_field($_POST['tw_chat_webhook_header']) : '';
            $email_recipients = isset($_POST['tw_chat_email_recipients']) ? sanitize_text_field($_POST['tw_chat_email_recipients']) : '';
            $voice_agent_id = isset($_POST['tw_chat_voice_agent_id']) ? sanitize_text_field($_POST['tw_chat_voice_agent_id']) : '';
            $chat_widget_type = isset($_POST['tw_chat_widget_type']) ? sanitize_text_field($_POST['tw_chat_widget_type']) : 'text';
            $use_site_search = isset($_POST['tw_chat_use_site_search']) ? rest_sanitize_boolean($_POST['tw_chat_use_site_search']) : 0;
            $search_scope = isset($_POST['tw_chat_search_scope']) ? sanitize_text_field($_POST['tw_chat_search_scope']) : 'all';
            $search_post_types = isset($_POST['tw_chat_search_post_types']) ? sanitize_text_field($_POST['tw_chat_search_post_types']) : '';
            $search_specific_ids = isset($_POST['tw_chat_search_specific_ids']) ? sanitize_text_field($_POST['tw_chat_search_specific_ids']) : '';
            $exclude_links = isset($_POST['tw_chat_exclude_links']) ? sanitize_text_field($_POST['tw_chat_exclude_links']) : '';
            $webhook_schema = isset($_POST['tw_chat_webhook_schema']) ? sanitize_textarea_field($_POST['tw_chat_webhook_schema']) : '';

            // Validate chat_widget_type
            // if (!in_array($chat_widget_type, ['text', 'voice'])) {
            //     $chat_widget_type = 'text';
            // }
            
            if (isset($_POST['id']) && $_POST['id'] !== '') {
                TW_Chat_System_Logger::log_debug('Updating widget post: ' . $_POST['id']);

                $post_id = sanitize_text_field($_POST['id']);
                // Post ID is passed, update fields
                $post_args = array(
                    'ID' => $post_id,
                    'post_title' => $widget_name,
                );
                wp_update_post($post_args);
            } else {
                TW_Chat_System_Logger::log_debug('Creating new widget post.');

                // Create the new post
                $post_args = array(
                    'post_type' => 'chat_widgets',
                    'post_title' => $widget_name,
                    'post_status' => 'publish',
                );
                $post_id = wp_insert_post($post_args);
            }
        
            // Add the meta fields
            update_post_meta($post_id, 'tw_chat_system_prompt', $system_prompt);
            update_post_meta($post_id, 'tw_chat_ai_model', $model);
            update_post_meta($post_id, 'tw_chat_greeting', $greeting);
            update_post_meta($post_id, 'tw_chat_suggested_answers', $suggested_answers);
            update_post_meta($post_id, 'tw_chat_dismiss_answers', $dismiss_answers);
            update_post_meta($post_id, 'tw_chat_dismiss_answers_text', $dismiss_answers_text);
            update_post_meta($post_id, 'tw_chat_webhook_address', $webhook_address);
            update_post_meta($post_id, 'tw_chat_webhook_header', $webhook_header);
            update_post_meta($post_id, 'tw_chat_email_recipients', $email_recipients);
            update_post_meta($post_id, 'tw_chat_voice_agent_id', $voice_agent_id);
            update_post_meta($post_id, 'tw_chat_widget_type', $chat_widget_type);
            update_post_meta($post_id, 'tw_chat_use_site_search', $use_site_search);
            update_post_meta($post_id, 'tw_chat_search_scope', $search_scope);
            update_post_meta($post_id, 'tw_chat_search_post_types', $search_post_types);
            update_post_meta($post_id, 'tw_chat_search_specific_ids', $search_specific_ids);
            update_post_meta($post_id, 'tw_chat_exclude_links', $exclude_links);
            update_post_meta($post_id, 'tw_chat_webhook_schema', $webhook_schema);

            $response = TW_Chat_Widgets::get_chat_widgets();
            wp_send_json_success( $response );
        } catch (Exception $e) {
            wp_send_json_error( array( 'message' => 'Exception: ' .  $e->getMessage() ) );
        }
        wp_die();
    }

    /**
     * Remove a chat_widget post
     */
    function remove_chat_widget_callback() {
        try {
            // Get and sanitize post data
            if (isset($_POST['id'])) {
                $deleted = wp_delete_post($_POST['id'], true);;

                if ($deleted) {
                    // Success, return all widgets
                    $response = TW_Chat_Widgets::get_chat_widgets();
                    wp_send_json_success( $response );
                } else {
                    // Error remove post
                    wp_send_json_error( array( 'message' => 'An error occurred while removing the chat widget.') );
                }

            } else {
                // Post ID is required
                wp_send_json_error( array( 'message' => 'Post ID is required') );
            }
        } catch (Exception $e) {
            wp_send_json_error( array( 'message' => 'Exception: ' .  $e->getMessage() ) );
        }
        wp_die();
    }

    /**
     * Callback for fetching Retell AI voice agents
     */
    public function get_retell_agents_callback() {
        
        $retell_key = get_option('tw_chat_retell_key', '');
        
        if (empty($retell_key)) {
            wp_send_json_error('Retell API key is not configured');
            return;
        }
        
        $response = wp_remote_get('https://api.retellai.com/list-agents', [
            'headers' => [
                'Authorization' => 'Bearer ' . $retell_key,
                'Content-Type' => 'application/json'
            ]
        ]);
        
        if (is_wp_error($response)) {
            wp_send_json_error($response->get_error_message());
            return;
        }
        
        $status_code = wp_remote_retrieve_response_code($response);
        if ($status_code !== 200) {
            $error_message = wp_remote_retrieve_response_message($response);
            wp_send_json_error('Error fetching agents: ' . $error_message . ' (Status: ' . $status_code . ')');
            return;
        }
        
        $body = wp_remote_retrieve_body($response);
        $data = json_decode($body, true);
        
        if (json_last_error() !== JSON_ERROR_NONE) {
            wp_send_json_error('Error parsing response from Retell API');
            return;
        }
        
        wp_send_json_success($data);
    }

    /**
     * Get conversations list callback
     */
    public function get_conversations_list_callback() {
        // Security: Check user capabilities
        if (!current_user_can('manage_options')) {
            wp_send_json_error('Insufficient permissions');
            return;
        }
        
        // Security: Verify nonce
        check_ajax_referer('tw_chat_admin_nonce', 'nonce');
        
        $filters = array();
        
        if (isset($_POST['widget_id']) && !empty($_POST['widget_id'])) {
            $filters['widget_id'] = absint($_POST['widget_id']);
        }
        
        if (isset($_POST['conversation_id']) && !empty($_POST['conversation_id'])) {
            $filters['conversation_id'] = sanitize_text_field($_POST['conversation_id']);
        }
        
        if (isset($_POST['date_from']) && !empty($_POST['date_from'])) {
            $filters['date_from'] = sanitize_text_field($_POST['date_from']);
        }
        
        if (isset($_POST['date_to']) && !empty($_POST['date_to'])) {
            $filters['date_to'] = sanitize_text_field($_POST['date_to']);
        }
        
        $conversations = TW_Chat_Message_Logger::get_conversations_list($filters);
        wp_send_json_success($conversations);
    }

    /**
     * Get conversation messages callback
     */
    public function get_conversation_messages_callback() {
        // Security: Check user capabilities
        if (!current_user_can('manage_options')) {
            wp_send_json_error('Insufficient permissions');
            return;
        }
        
        // Security: Verify nonce
        check_ajax_referer('tw_chat_admin_nonce', 'nonce');
        
        if (!isset($_POST['conversation_id']) || empty($_POST['conversation_id'])) {
            wp_send_json_error('Conversation ID is required');
            return;
        }
        
        $conversation_id = sanitize_text_field($_POST['conversation_id']);
        
        // Validate conversation_id format
        if (!preg_match('/^conv_[a-zA-Z0-9_\\.]+$/', $conversation_id)) {
            wp_send_json_error('Invalid conversation ID format');
            return;
        }
        
        $messages = TW_Chat_Message_Logger::get_conversation_messages($conversation_id);
        wp_send_json_success($messages);
    }

    /**
     * Get dashboard stats callback
     */
    public function get_dashboard_stats_callback() {
        // Security: Check user capabilities
        if (!current_user_can('manage_options')) {
            wp_send_json_error('Insufficient permissions');
            return;
        }
        
        // Security: Verify nonce
        check_ajax_referer('tw_chat_admin_nonce', 'nonce');
        
        $days = isset($_POST['days']) ? absint($_POST['days']) : 7;
        
        if (!in_array($days, array(7, 14, 30))) {
            $days = 7;
        }
        
        // Check cache first (5 minute cache)
        // v2 includes widget titles
        $cache_key = 'tw_chat_dashboard_stats_v2_' . $days;
        $cached_stats = get_transient($cache_key);
        
        if ($cached_stats !== false) {
            wp_send_json_success($cached_stats);
            return;
        }
        
        // Generate stats if not cached
        $message_stats = TW_Chat_Message_Logger::get_dashboard_stats($days);
        $error_stats = TW_Chat_System_Logger::get_error_stats($days);
        
        $combined_stats = array_merge($message_stats, array(
            'error_stats' => $error_stats
        ));
        
        // Cache for 5 minutes
        set_transient($cache_key, $combined_stats, 5 * MINUTE_IN_SECONDS);
        
        wp_send_json_success($combined_stats);
    }

    /**
     * Generate a system prompt using OpenAI
     */
    public function generate_prompt_callback() {
        check_ajax_referer('tw_chat_admin_nonce');

        if (!current_user_can('manage_options')) {
            wp_send_json_error(array('message' => 'Insufficient permissions.'));
            wp_die();
        }

        $openai_key = get_option('tw_chat_openai_key', '');
        if (empty($openai_key)) {
            wp_send_json_error(array('message' => 'OpenAI API key is not configured. Add it in Settings.'));
            wp_die();
        }

        $description = isset($_POST['description']) ? sanitize_textarea_field($_POST['description']) : '';
        $mode = isset($_POST['mode']) ? sanitize_text_field($_POST['mode']) : 'generate';
        $current_prompt = isset($_POST['current_prompt']) ? sanitize_textarea_field($_POST['current_prompt']) : '';
        $has_site_search = isset($_POST['has_site_search']) && $_POST['has_site_search'] === '1';
        $has_webhook = isset($_POST['has_webhook']) && $_POST['has_webhook'] === '1';
        $has_webhook_schema = isset($_POST['has_webhook_schema']) && $_POST['has_webhook_schema'] === '1';
        $webhook_schema = isset($_POST['webhook_schema']) ? sanitize_textarea_field($_POST['webhook_schema']) : '';

        // Build the meta-prompt
        $meta_prompt = "You are an expert at writing system prompts for AI chatbots embedded on websites. ";
        $meta_prompt .= "Generate a clear, well-structured system prompt based on the user's description.\n\n";
        $meta_prompt .= "Guidelines for the prompt you generate:\n";
        $meta_prompt .= "- Write in second person, addressing the AI directly (e.g., 'You are...')\n";
        $meta_prompt .= "- Be specific about the chatbot's role, tone, and boundaries\n";
        $meta_prompt .= "- Include clear instructions for how to handle edge cases\n";
        $meta_prompt .= "- Keep it concise but thorough\n";
        $meta_prompt .= "- Do NOT include any markdown formatting or code blocks — output only the raw prompt text\n\n";

        // Add tool context
        $tool_context = array();
        if ($has_site_search) {
            $tool_context[] = "The chatbot has a 'search_site' tool that can search the WordPress website for relevant content. The prompt does NOT need to explain how to use this tool — that is handled automatically. But the prompt should instruct the assistant to use website content to answer questions.";
        }
        if ($has_webhook) {
            $tool_context[] = "The chatbot has a 'webhook' tool that can send data to an external URL.";
            if ($has_webhook_schema && !empty($webhook_schema)) {
                $schema_fields = json_decode($webhook_schema, true);
                if (is_array($schema_fields) && !empty($schema_fields)) {
                    $field_lines = array();
                    foreach ($schema_fields as $field) {
                        $req = !empty($field['required']) ? 'required' : 'optional';
                        $desc = !empty($field['description']) ? ' — ' . $field['description'] : '';
                        $field_lines[] = '  - ' . $field['name'] . ' (' . $field['type'] . ', ' . $req . ')' . $desc;
                    }
                    $tool_context[] = "The webhook expects these fields:\n" . implode("\n", $field_lines) . "\nThe prompt should instruct the assistant to collect these fields from the user before sending the webhook. The prompt does NOT need to describe the JSON format — that is handled automatically.";
                }
            }
        }

        if (!empty($tool_context)) {
            $meta_prompt .= "Available tools:\n" . implode("\n\n", $tool_context) . "\n\n";
        }

        // Build the user message
        if ($mode === 'improve' && !empty($current_prompt)) {
            $user_message = "Here is the current system prompt:\n\n" . $current_prompt . "\n\n";
            $user_message .= !empty($description)
                ? "Please improve it with these changes: " . $description
                : "Please improve this prompt to be clearer, more structured, and more effective.";
        } else {
            $user_message = "Create a system prompt for a chatbot with this purpose: " . $description;
        }

        try {
            $api_base_uri = get_option('tw_chat_api_base_uri', 'api.openai.com/v1');

            $client = OpenAI::factory()
                ->withApiKey($openai_key)
                ->withBaseUri($api_base_uri)
                ->withHttpClient(new \GuzzleHttp\Client([]))
                ->make();

            $response = $client->chat()->create([
                'model' => 'gpt-4.1-mini-2025-04-14',
                'messages' => [
                    ['role' => 'system', 'content' => $meta_prompt],
                    ['role' => 'user', 'content' => $user_message],
                ],
                'temperature' => 0.7,
            ]);

            $generated = $response->choices[0]->message->content;

            wp_send_json_success(array('prompt' => trim($generated)));
        } catch (Exception $e) {
            wp_send_json_error(array('message' => 'OpenAI error: ' . $e->getMessage()));
        }

        wp_die();
    }

}