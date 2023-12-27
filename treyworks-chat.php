<?php
/*
Plugin Name: Treyworks Chat UI
Plugin URI: https://treyworks.com
Description: A chat UI plugin for WordPress.
Version: 1.0
Author: Treyworks LLC
Author URI: https://treyworks.com
*/

class TWChatUIPlugin {
    /**
     * Constructor for the TWChatUIPlugin class.
     * Sets up shortcodes and hooks for REST API and script enqueuing.
     */
    public function __construct() {
        add_action('wp_enqueue_scripts', array($this, 'enqueue_global_scripts'));
        add_action('wp_footer', array($this, 'add_footer_html'));
        add_action('rest_api_init', array($this, 'register_chat_response_endpoint'));
        add_action('admin_menu', array($this, 'add_options_page'));
        add_action('admin_init', array($this, 'register_settings'));
        add_shortcode('tw-chat-ui', array($this, 'tw_chat_ui_shortcode'));
    }

    public function enqueue_scripts() {
        wp_enqueue_script('tw-chat-ui-js', plugins_url('/ui/dist/tw-chat-ui.js', __FILE__), array(), '1.0.0', true);
        wp_enqueue_style('tw-chat-ui-css', plugins_url('/ui/dist/style.css', __FILE__));
    }

    /**
     * Enqueues additional scripts in the footer of the page.
     * This function is hooked to 'wp_enqueue_scripts'.
     */
    public function enqueue_global_scripts() {
        $this->enqueue_scripts();
    }

    /**
     * Adds custom HTML content to the WordPress footer.
     * This function is hooked to 'wp_footer'.
     */
    public function add_footer_html() {
        echo '<div id="tw-chat-ui"></div>';
    }

    /**
     * Add options page for configuring plugin 
     */
    public function add_options_page() {
        add_options_page(
            'Treyworks Chat UI Settings', // Page title
            'Chat UI Settings',           // Menu title
            'manage_options',             // Capability required
            'tw-chat-ui-settings',        // Menu slug
            array($this, 'render_options_page') // Callback function to render the options page
        );
    }

    /**
     * Registers settings for the options page.
     */
    public function register_settings() {
        register_setting('tw-chat-ui-settings-group', 'tw_chat_ui_endpoint_url');
        register_setting('tw-chat-ui-settings-group', 'tw_chat_ui_primary_color');
    }

    /**
     * Retrieves the plugin's options settings.
     * 
     * @return array Contains the settings for Endpoint URL and Primary Color.
     */
    public function get_plugin_settings() {
        return array(
            'endpoint_url' => get_option('tw_chat_ui_endpoint_url', ''),  // Default to empty string if not set
            'primary_color' => get_option('tw_chat_ui_primary_color', '') // Default to empty string if not set
        );
    }

    /**
     * Renders the options page HTML.
     */
    public function render_options_page() {
        include 'options-page.php';
    }

    /**
     * Registers the REST API endpoint for chat responses.
     * Defines the URL and handler for the 'chat-response' endpoint.
     */
    public function register_chat_response_endpoint() {
        register_rest_route('tw-chat-ui/v1', '/chat-response', array(
            'methods' => 'POST',
            'callback' => array($this, 'handle_retool_response'),
            'permission_callback' => function () { return true; }
        ));
    }

    /**
     * Handles the REST API request for chat responses.
     * Processes the 'messageHistory' and 'message' from POST data.
     * Returns a REST response.
     */
    public function handle_retool_response($request) {
        $params = $request->get_json_params();
        $messageHistory = $params['messageHistory'] ?? null;
        $message = $params['message'] ?? null;

        if (is_null($messageHistory) || is_null($message)) {
            return new WP_Error('missing_params', 'Missing required parameters', array('status' => 400));
        }

        $settings = $this->get_plugin_settings();
        $endpoint_url = $settings['endpoint_url'];
        
        if (empty($endpoint_url)) {
            return new WP_Error('invalid_endpoint', 'The endpoint URL is not set.', array('status' => 500));
        }

        // Prepare the data to be sent in the POST request
        $body = array(
            'messageHistory' => $messageHistory,
            'message' => $message
        );

        // Execute the POST request to the specified endpoint
        $response = wp_remote_post($endpoint_url, array(
            'headers' => array('Content-Type' => 'application/json; charset=utf-8'),
            'body'    => json_encode($body),
            'timeout'     => 45,
            'method'  => 'POST',
            'data_format' => 'body'
        ));

        // Handle the response from the endpoint
        if (is_wp_error($response)) {
            return $response;
        }

        $response_body = wp_remote_retrieve_body($response);
        return new WP_REST_Response($response_body, 200);
    }

    /**
     * Handles the 'tw-chat-ui' shortcode.
     * Enqueues necessary JavaScript and CSS for the chat UI.
     * Returns the HTML structure for the chat UI.
     */
    public function tw_chat_ui_shortcode() {
        $this->enqueue_scripts();
        return "<div id=\"tw-chat-ui\"></div>";
    }
    
}

// Instantiate the plugin class
new TWChatUIPlugin();
