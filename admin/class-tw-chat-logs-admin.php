<?php
/**
 * TreyWorks Chat Logs Admin
 * 
 * Handles AJAX endpoints for the React admin app to retrieve and manage logs.
 * This class provides the backend API for the Logging page in the admin interface.
 * 
 * @package TreyWorks_Chat
 * @since 2.2.0
 */

class TW_Chat_Logs_Admin {
    
    /**
     * Constructor - Register AJAX action hooks
     * 
     * Registers WordPress AJAX actions for authenticated admin users to:
     * - Retrieve message logs (conversations and chat messages)
     * - Retrieve system logs (errors, warnings, info, debug)
     * - Get token usage statistics
     * - Clear message and system logs
     */
    public function __construct() {
        add_action('wp_ajax_get_message_logs', array($this, 'get_message_logs_callback'));
        add_action('wp_ajax_get_system_logs', array($this, 'get_system_logs_callback'));
        add_action('wp_ajax_clear_message_logs', array($this, 'clear_message_logs_callback'));
        add_action('wp_ajax_clear_system_logs', array($this, 'clear_system_logs_callback'));
        add_action('wp_ajax_get_token_stats', array($this, 'get_token_stats_callback'));
        add_action('wp_ajax_delete_conversation', array($this, 'delete_conversation_callback'));
    }
    
    /**
     * AJAX callback: Get message logs
     * 
     * Retrieves chat message logs with optional filtering.
     * Used by the Message History tab in the admin Logging page.
     * 
     * @return void Sends JSON response with message logs
     */
    public function get_message_logs_callback() {
        $filters = isset($_POST['filters']) ? $_POST['filters'] : array();
        $logs = TW_Chat_Message_Logger::get_messages($filters);
        wp_send_json_success($logs);
    }
    
    /**
     * AJAX callback: Get system logs
     * 
     * Retrieves system logs (errors, warnings, info, debug) with optional filtering.
     * Used by the System Log tab in the admin Logging page.
     * 
     * @return void Sends JSON response with system logs
     */
    public function get_system_logs_callback() {
        $filters = isset($_POST['filters']) ? $_POST['filters'] : array();
        $logs = TW_Chat_System_Logger::get_logs($filters);
        wp_send_json_success($logs);
    }
    
    /**
     * AJAX callback: Get token usage statistics
     * 
     * Retrieves OpenAI API token usage statistics for a specific widget or all widgets.
     * Used by the dashboard and reporting features.
     * 
     * @return void Sends JSON response with token usage stats
     */
    public function get_token_stats_callback() {
        $widget_id = isset($_POST['widget_id']) ? absint($_POST['widget_id']) : null;
        $stats = TW_Chat_Message_Logger::get_token_usage_stats($widget_id);
        wp_send_json_success($stats);
    }
    
    /**
     * AJAX callback: Clear all message logs
     * 
     * Deletes all message logs from the database.
     * Used by the "Clear All Logs" button in the Message History tab.
     * 
     * @return void Sends JSON success response
     */
    public function clear_message_logs_callback() {
        TW_Chat_Message_Logger::delete_old_messages(0);
        wp_send_json_success();
    }
    
    /**
     * AJAX callback: Clear all system logs
     * 
     * Deletes all system logs from the database.
     * Used by the "Clear All Logs" button in the System Log tab.
     * 
     * @return void Sends JSON success response
     */
    public function clear_system_logs_callback() {
        TW_Chat_System_Logger::clear_logs();
        wp_send_json_success();
    }
    
    /**
     * AJAX callback: Delete individual conversation
     * 
     * Deletes all messages for a specific conversation ID.
     * Used by the delete button in the Message History table.
     * 
     * @return void Sends JSON success or error response
     */
    public function delete_conversation_callback() {
        // Security: Check user capabilities
        if (!current_user_can('manage_options')) {
            wp_send_json_error('Insufficient permissions');
            return;
        }
        
        // Security: Verify nonce
        check_ajax_referer('tw_chat_admin_nonce', 'nonce');
        
        $conversation_id = isset($_POST['conversation_id']) ? sanitize_text_field($_POST['conversation_id']) : '';
        
        if (empty($conversation_id)) {
            wp_send_json_error('Conversation ID is required');
            return;
        }
        
        global $wpdb;
        $table_name = TW_Chat_DB::get_message_logs_table();
        
        $deleted = $wpdb->delete(
            $table_name,
            array('conversation_id' => $conversation_id),
            array('%s')
        );
        
        if ($deleted === false) {
            wp_send_json_error('Failed to delete conversation');
        } else {
            wp_send_json_success(array('deleted' => $deleted));
        }
    }
}
