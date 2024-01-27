<?php

/**
 * The admin-specific functionality of the plugin.
 *
 */

 class TW_Chat_Admin {
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

    }

    /**
     * Add options page for configuring plugin 
     */
    public function add_options_page() {
        add_options_page(
            'Treyworks Chat for WordPress', // Page title
            'Treyworks Chat for WordPress',           // Menu title
            'manage_options',             // Capability required
            'tw-chat-ui-settings',        // Menu slug
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
        register_setting('tw-chat-ui-settings-group', 'tw_chat_max_characters');
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

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/tw-chat-admin.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 */
	public function enqueue_scripts() {

		// wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/plugin-name-admin.js', array( 'jquery' ), $this->version, false );

	}

}