<?php
/**
 * TreyWorks Chat Database Manager
 * 
 * Manages database table creation, deletion, and table name references for the
 * TreyWorks Chat plugin. This class handles the schema for two main tables:
 * 
 * 1. Message Logs Table - Stores chat conversations and messages
 *    - User messages, assistant responses, tool calls, and system messages
 *    - Token usage tracking for OpenAI API calls
 *    - Source URL and IP address tracking
 * 
 * 2. System Logs Table - Stores system events and errors
 *    - Info, error, warning, and debug log entries
 *    - Contextual data for troubleshooting
 *    - Widget-specific logging
 * 
 * @package TreyWorks_Chat
 * @since 2.2.0
 */

class TW_Chat_DB {
    
    /**
     * @var string Message logs table name (with WordPress prefix)
     */
    private static $message_logs_table;
    
    /**
     * @var string System logs table name (with WordPress prefix)
     */
    private static $system_logs_table;
    
    /**
     * Initialize table names with WordPress database prefix
     * 
     * Sets up the table name properties with the appropriate WordPress
     * database prefix. Must be called before accessing table names.
     * 
     * @return void
     */
    public static function initialize() {
        global $wpdb;
        self::$message_logs_table = $wpdb->prefix . 'tw_chat_message_logs';
        self::$system_logs_table = $wpdb->prefix . 'tw_chat_system_logs';
    }
    
    /**
     * Create database tables
     * 
     * Creates the message logs and system logs tables with proper schema.
     * Uses dbDelta() for safe table creation/updates. Called during plugin
     * activation and can be used to update table schema on plugin updates.
     * 
     * Message Logs Table Schema:
     * - id: Auto-increment primary key
     * - conversation_id: Groups messages in a conversation
     * - widget_id: References the chat widget
     * - message_type: user, assistant, tool, or system
     * - message_text: The actual message content
     * - input_tokens: OpenAI API input tokens used
     * - output_tokens: OpenAI API output tokens used
     * - source_url: URL where the chat occurred
     * - ip_address: User's IP address
     * - created_at: Timestamp of message creation
     * 
     * System Logs Table Schema:
     * - id: Auto-increment primary key
     * - log_type: info, error, warning, or debug
     * - message: Log message text
     * - context: JSON-encoded contextual data
     * - widget_id: Associated widget (optional)
     * - created_at: Timestamp of log creation
     * 
     * @return void
     */
    public static function create_tables() {
        global $wpdb;
        
        self::initialize();
        
        $charset_collate = $wpdb->get_charset_collate();
        
        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        
        // Message Logs Table
        $message_logs_sql = "CREATE TABLE " . self::$message_logs_table . " (
            id bigint(20) NOT NULL AUTO_INCREMENT,
            conversation_id varchar(255) NOT NULL,
            widget_id bigint(20) NOT NULL,
            message_type enum('user','assistant','tool','system') NOT NULL,
            message_text longtext NOT NULL,
            input_tokens int(11) DEFAULT 0,
            output_tokens int(11) DEFAULT 0,
            source_url varchar(500) DEFAULT NULL,
            ip_address varchar(45) DEFAULT NULL,
            created_at datetime DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY  (id),
            KEY conversation_id (conversation_id),
            KEY widget_id (widget_id),
            KEY created_at (created_at),
            KEY message_type (message_type),
            KEY ip_address (ip_address)
        ) $charset_collate;";
        
        // System Info & Error Logs Table
        $system_logs_sql = "CREATE TABLE " . self::$system_logs_table . " (
            id bigint(20) NOT NULL AUTO_INCREMENT,
            log_type enum('info','error','warning','debug') NOT NULL,
            message text NOT NULL,
            context longtext DEFAULT NULL,
            widget_id bigint(20) DEFAULT NULL,
            created_at datetime DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY  (id),
            KEY log_type (log_type),
            KEY widget_id (widget_id),
            KEY created_at (created_at)
        ) $charset_collate;";
        
        dbDelta($message_logs_sql);
        dbDelta($system_logs_sql);
    }
    
    /**
     * Drop all plugin database tables
     * 
     * Removes the message logs and system logs tables from the database.
     * Called during plugin uninstallation to clean up database.
     * 
     * @return void
     */
    public static function drop_tables() {
        global $wpdb;
        
        self::initialize();
        
        $wpdb->query("DROP TABLE IF EXISTS " . self::$message_logs_table);
        $wpdb->query("DROP TABLE IF EXISTS " . self::$system_logs_table);
    }
    
    /**
     * Get message logs table name
     * 
     * Returns the full table name for message logs (with WordPress prefix).
     * Initializes table names if not already set.
     * 
     * @return string Message logs table name
     */
    public static function get_message_logs_table() {
        if (empty(self::$message_logs_table)) {
            self::initialize();
        }
        return self::$message_logs_table;
    }
    
    /**
     * Get system logs table name
     * 
     * Returns the full table name for system logs (with WordPress prefix).
     * Initializes table names if not already set.
     * 
     * @return string System logs table name
     */
    public static function get_system_logs_table() {
        if (empty(self::$system_logs_table)) {
            self::initialize();
        }
        return self::$system_logs_table;
    }
}
