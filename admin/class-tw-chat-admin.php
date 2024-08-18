<?php

/**
 * The admin-specific functionality of the plugin.
 *
 */

 class TW_Chat_Admin {
    public string $version = '0.1.0';

    /**
     * Constructor for the TW_Chat_Admin class.
     */
    public function __construct() {
        $this->setup_actions();

    }

    public function setup_actions() {
        add_action('admin_menu', array($this, 'add_options_page'));
        add_action('admin_init', array($this, 'register_settings'));
        add_action('admin_enqueue_scripts', array($this, 'enqueue_styles'));
        add_action('admin_enqueue_scripts', array($this, 'enqueue_scripts'));
        add_action( 'wp_ajax_save_settings', array($this, 'save_settings_callback') );
        add_action( 'wp_ajax_get_chat_widgets', array($this, 'get_chat_widgets_callback') );
        add_action( 'wp_ajax_get_assistants', array($this, 'get_assistants_callback') );
        add_action( 'wp_ajax_save_chat_widget', array($this, 'save_chat_widget_callback'));
        add_action( 'wp_ajax_remove_chat_widget', array($this, 'remove_chat_widget_callback'));
        add_action( 'wp_ajax_clear_log', array($this, 'clear_log_callback'));
        // Hook the function to the uninstall hook
        register_uninstall_hook(__FILE__, array($this, 'delete_options'));
    }

    /**
     * Add options page for configuring plugin 
     */
    public function add_options_page() {
        add_options_page(
            'Treyworks Chat for WordPress', // Page title
            'Treyworks Chat',           // Menu title
            'manage_options',             // Capability required
            'tw-chat-settings',        // Menu slug
            array($this, 'render_options_page') // Callback function to render the options page
        );
    }

    /**
     * Registers settings for the options page.
     */
    public function register_settings() {
        register_setting('tw-chat-ui-settings-group', 'tw_chat_assistant_name');
        register_setting('tw-chat-ui-settings-group', 'tw_chat_assistant_id');
        register_setting('tw-chat-ui-settings-group', 'tw_chat_openai_key');
        register_setting('tw-chat-ui-settings-group', 'tw_chat_button_text');
        register_setting('tw-chat-ui-settings-group', 'tw_chat_greeting');
        register_setting('tw-chat-ui-settings-group', 'tw_chat_disclaimer');
        register_setting('tw-chat-ui-settings-group', 'tw_chat_error_message');
        register_setting('tw-chat-ui-settings-group', 'tw_chat_is_enabled');
        register_setting('tw-chat-ui-settings-group', 'tw_chat_is_debug');
        register_setting('tw-chat-ui-settings-group', 'tw_chat_max_characters');
        register_setting('tw-chat-ui-settings-group', 'tw_chat_global_widget_id');
        register_setting('tw-chat-ui-settings-group', 'tw_chat_logo_url');
    }

    /**
     * Delete stored options when plugin is uninstalled.
     */
    public function delete_options() {
        delete_option('tw_chat_assistant_name');
        delete_option('tw_chat_assistant_id');
        delete_option('tw_chat_openai_key');
        delete_option('tw_chat_button_text');
        delete_option('tw_chat_greeting');
        delete_option('tw_chat_disclaimer');
        delete_option('tw_chat_error_message');
        delete_option('tw_chat_is_enabled');
        delete_option('tw_chat_max_characters');
        delete_option('tw_chat_global_widget_id');
        delete_option('tw_chat_is_debug');
        delete_option('tw_chat_logo_url');
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
            'tw_chat_assistant_id' => get_option('tw_chat_assistant_id', ''),
            'tw_chat_greeting' => get_option('tw_chat_greeting', ''),
            'tw_chat_disclaimer' => get_option('tw_chat_disclaimer', ''),
            'tw_chat_error_message' => get_option('tw_chat_error_message', ''),
            'tw_chat_is_enabled' => get_option('tw_chat_is_enabled'),
            'tw_chat_max_characters' => get_option('tw_chat_max_characters'),
            'tw_chat_global_widget_id' => get_option('tw_chat_global_widget_id'),
            'tw_chat_is_debug' => get_option('tw_chat_is_debug'),
            'tw_chat_logo_url' => get_option('tw_chat_logo_url')
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
		    wp_enqueue_style( 'tw-chat-admin', plugin_dir_url( __FILE__ ) . 'admin-ui/dist/style.css', array(), $this->version, 'all' );
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
	 *
	 */
	public function enqueue_scripts() {
        if ( isset( $_GET['page'] ) && $_GET['page'] === 'tw-chat-settings' ) {
            wp_enqueue_script( 'tw-chat-admin', plugin_dir_url( __FILE__ ) . 'admin-ui/dist/tw-chat-admin.js', array(), $this->version, false );

            // Localize script with current settings
            $script_data = $this->get_plugin_settings();
            $script_data['ajax_url'] = admin_url( 'admin-ajax.php' );
            $script_data['ajax_nonce'] =  wp_create_nonce( '_ajax_nonce' );
            $script_data['chat_widgets'] = TW_Chat_Widgets::get_chat_widgets();
            $script_data['plugin_dir_url'] = $this->get_plugin_directory_url();
            wp_localize_script( 'tw-chat-admin', 'twChatSettings', $script_data );

            // Enqueue the media uploader scripts
            wp_enqueue_media(); 
        }
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
            update_option('tw_chat_is_enabled', sanitize_text_field($settings['tw_chat_is_enabled']));
            update_option('tw_chat_button_text', sanitize_text_field($settings['tw_chat_button_text']));
            $disclaimer_text = stripslashes(strip_tags($settings['tw_chat_disclaimer'], '<a>'));
            update_option('tw_chat_disclaimer', $disclaimer_text);
            update_option('tw_chat_error_message', sanitize_text_field($settings['tw_chat_error_message']));
            update_option('tw_chat_max_characters', sanitize_text_field($settings['tw_chat_max_characters']));
            update_option('tw_chat_global_widget_id', sanitize_text_field($settings['tw_chat_global_widget_id']));
            update_option('tw_chat_is_debug', sanitize_text_field($settings['tw_chat_is_debug']));
            update_option('tw_chat_logo_url', sanitize_text_field($settings['tw_chat_logo_url']));
            
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

    /**
     * Get Assistants using OpenAI API
     */
    public function get_assistants() {

        /* Get API Key */
        $settings = $this->get_plugin_settings();
        $openai_key = $settings['tw_chat_openai_key'];

        if (empty($openai_key)) {
            return array();
        }

        // OpenAI API client
        $client = OpenAI::client($openai_key);
        $response = $client->assistants()->list();

        return $response->data;
    }

    /**
     * Get Assistants AJAX Callback
     */
    public function get_assistants_callback() {
        try {
            // Query for chat widget post
            $data = $this->get_assistants();

            if ($data == false) {
                wp_send_json_error( array( 'message' => 'Error retrieving OpenAI API key') );
            }
            
            // Return the data in a JSON success response
            wp_send_json_success( $data );
        } catch (Exception $e) {
            wp_send_json_error( array( 'message' => 'Exception: ' .  $e->getMessage() ) );
        }
        wp_die();
    }

    /**
     * Save chat_widget post
     */
    function save_chat_widget_callback() {
        try {
            // Get and sanitize post data
            $chat_widget_name = sanitize_text_field($_POST['tw_chat_widget_name']);
            $greeting = sanitize_text_field($_POST['tw_chat_greeting']);
            $suggested_answers = sanitize_text_field($_POST['tw_chat_suggested_answers']);
            $dismiss_answers = sanitize_text_field($_POST['tw_chat_dismiss_answers']);
            $dismiss_answers_text = sanitize_text_field($_POST['tw_chat_dismiss_answers_text']);
            $assistant_id = sanitize_text_field($_POST['tw_chat_assistant_id']);
            $email_recipients = sanitize_text_field($_POST['tw_chat_email_recipients']);
            $webhook_address = sanitize_text_field($_POST['tw_chat_webhook_address']);
            $webhook_header = sanitize_text_field($_POST['tw_chat_webhook_header']);

            if (isset($_POST['id']) && $_POST['id'] !== '') {
                TW_Chat_Logger::log('Updating widget post: ' . $_POST['id']);

                $post_id = sanitize_text_field($_POST['id']);
                // Post ID is passed, update fields
                $post_args = array(
                    'ID' => $post_id,
                    'post_title' => $chat_widget_name,
                );
                wp_update_post($post_args);
            } else {
                TW_Chat_Logger::log('Creating new widget post.');

                // Create the new post
                $post_args = array(
                    'post_type' => 'chat_widgets',
                    'post_title' => $chat_widget_name,
                    'post_status' => 'publish',
                );
                $post_id = wp_insert_post($post_args);
            }
        
            // Add the meta fields
            update_post_meta($post_id, 'tw_chat_assistant_id', $assistant_id);
            update_post_meta($post_id, 'tw_chat_greeting', $greeting);
            update_post_meta($post_id, 'tw_chat_suggested_answers', $suggested_answers);
            update_post_meta($post_id, 'tw_chat_dismiss_answers', $dismiss_answers);
            update_post_meta($post_id, 'tw_chat_dismiss_answers_text', $dismiss_answers_text);
            update_post_meta($post_id, 'tw_chat_webhook_address', $webhook_address);
            update_post_meta($post_id, 'tw_chat_webhook_header', $webhook_header);
            update_post_meta($post_id, 'tw_chat_email_recipients', $email_recipients);

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
     * Clear Log File
     */
    function clear_log_callback() {
        // Call clear log
        $clear_result = TW_Chat_Logger::clear_log();

        // Check for errors
        if ( $clear_result ) {
            wp_send_json_success(array('message' => 'Log file cleared.'));
        } else {
            // Log file does not exist
            wp_send_json_error( array( 'message' => 'Failed to clear log file.') );
        }
        wp_die();
    }
}