<?php
/**
 * TreyWorks Chat Styles Admin
 * 
 * Handles AJAX endpoints for the Style Customizer page in the React admin app.
 * Provides backend API for saving, retrieving, and resetting custom widget styles.
 * 
 * @package TreyWorks_Chat
 * @since 2.2.1
 */

class TW_Chat_Styles_Admin {

    /**
     * Constructor - Register AJAX action hooks
     * 
     * Registers WordPress AJAX actions for authenticated admin users to:
     * - Retrieve widget style defaults and custom values
     * - Save custom widget style values
     * - Reset widget styles to defaults (all or by section)
     */
    public function __construct() {
        add_action('wp_ajax_get_widget_styles', array($this, 'get_widget_styles_callback'));
        add_action('wp_ajax_save_widget_styles', array($this, 'save_widget_styles_callback'));
        add_action('wp_ajax_reset_widget_styles', array($this, 'reset_widget_styles_callback'));
    }

    /**
     * AJAX callback: Get widget styles
     * 
     * Returns all default values and current custom overrides for the admin interface.
     * 
     * @return void Sends JSON response with style data
     */
    public function get_widget_styles_callback() {
        // Security: Verify nonce
        if (!check_ajax_referer('tw_chat_admin_nonce', 'nonce', false)) {
            wp_send_json_error('Invalid nonce');
        }

        // Security: Check user capabilities
        if (!current_user_can('manage_options')) {
            wp_send_json_error('Insufficient permissions');
        }

        wp_send_json_success(TW_Chat_Style_Settings::get_admin_data());
    }

    /**
     * AJAX callback: Save widget styles
     * 
     * Saves custom CSS variable values for chat and/or voice widgets.
     * Only values that differ from defaults are stored.
     * 
     * Expected POST parameters:
     * - nonce: Security nonce
     * - styles: JSON string with 'chat' and/or 'voice' keys containing variable => value pairs
     * 
     * @return void Sends JSON response with success/error status
     */
    public function save_widget_styles_callback() {
        // Security: Verify nonce
        if (!check_ajax_referer('tw_chat_admin_nonce', 'nonce', false)) {
            wp_send_json_error('Invalid nonce');
        }

        // Security: Check user capabilities
        if (!current_user_can('manage_options')) {
            wp_send_json_error('Insufficient permissions');
        }

        // Parse styles from request
        $styles_json = isset($_POST['styles']) ? wp_unslash($_POST['styles']) : '';
        $styles = json_decode($styles_json, true);

        if (!is_array($styles)) {
            wp_send_json_error('Invalid styles data');
        }

        $result = TW_Chat_Style_Settings::save_styles($styles);

        if ($result) {
            wp_send_json_success(array(
                'message' => 'Styles saved successfully',
                'current' => TW_Chat_Style_Settings::get_styles(),
            ));
        } else {
            wp_send_json_error('Failed to save styles');
        }
    }

    /**
     * AJAX callback: Reset widget styles
     * 
     * Resets custom styles to defaults. Can reset all styles or a specific section.
     * 
     * Expected POST parameters:
     * - nonce: Security nonce
     * - section: (optional) Section key to reset (e.g., 'chat_bubble')
     * - widget_type: (required if section is set) 'chat' or 'voice'
     * 
     * @return void Sends JSON response with success/error status
     */
    public function reset_widget_styles_callback() {
        // Security: Verify nonce
        if (!check_ajax_referer('tw_chat_admin_nonce', 'nonce', false)) {
            wp_send_json_error('Invalid nonce');
        }

        // Security: Check user capabilities
        if (!current_user_can('manage_options')) {
            wp_send_json_error('Insufficient permissions');
        }

        $section = isset($_POST['section']) ? sanitize_text_field($_POST['section']) : null;
        $widget_type = isset($_POST['widget_type']) ? sanitize_text_field($_POST['widget_type']) : null;

        $result = TW_Chat_Style_Settings::reset_styles($section, $widget_type);

        if ($result) {
            wp_send_json_success(array(
                'message' => 'Styles reset successfully',
                'current' => TW_Chat_Style_Settings::get_styles(),
            ));
        } else {
            wp_send_json_error('Failed to reset styles');
        }
    }
}
