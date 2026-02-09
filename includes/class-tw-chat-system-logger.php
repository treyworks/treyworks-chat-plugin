<?php
/**
 * TreyWorks Chat System Logger
 * 
 * Handles logging of system events, errors, warnings, and debug information
 * to the database. Logs are stored in the system_logs table and can be viewed
 * in the admin interface under Logging > System Log.
 * 
 * Log Types:
 * - info: General informational messages
 * - error: Error conditions that need attention
 * - warning: Warning messages for potential issues
 * - debug: Debug information (only logged when debugging is enabled)
 * 
 * @package TreyWorks_Chat
 * @since 2.2.0
 */

class TW_Chat_System_Logger {
    
    /**
     * Log a system message to the database
     * 
     * Core logging method that stores system events in the database.
     * Context data (arrays/objects) is automatically JSON-encoded.
     * 
     * @param string $log_type Type of log: 'info', 'error', 'warning', or 'debug'
     * @param string $message Log message text
     * @param mixed $context Optional. Additional context data (array or object)
     * @param int|null $widget_id Optional. Associated widget ID
     * @return int|false Number of rows inserted, or false on error
     */
    public static function log($log_type, $message, $context = null, $widget_id = null) {
        global $wpdb;
        
        $table_name = TW_Chat_DB::get_system_logs_table();
        
        // Convert context to JSON if it's an array or object
        if (is_array($context) || is_object($context)) {
            $context = json_encode($context);
        }
        
        $result = $wpdb->insert(
            $table_name,
            array(
                'log_type' => sanitize_text_field($log_type),
                'message' => sanitize_textarea_field($message),
                'context' => $context,
                'widget_id' => $widget_id ? absint($widget_id) : null,
                'created_at' => current_time('mysql')
            ),
            array('%s', '%s', '%s', '%d', '%s')
        );
        
        if ($result === false) {
            error_log('TW Chat: Failed to log system message - ' . $wpdb->last_error);
        }
        
        return $result;
    }
    
    /**
     * Log an informational message
     * 
     * Use for general system information and status updates.
     * 
     * @param string $message Log message text
     * @param mixed $context Optional. Additional context data
     * @param int|null $widget_id Optional. Associated widget ID
     * @return int|false Number of rows inserted, or false on error
     */
    public static function log_info($message, $context = null, $widget_id = null) {
        return self::log('info', $message, $context, $widget_id);
    }
    
    /**
     * Log an error message
     * 
     * Use for error conditions that need attention.
     * 
     * @param string $message Log message text
     * @param mixed $context Optional. Additional context data
     * @param int|null $widget_id Optional. Associated widget ID
     * @return int|false Number of rows inserted, or false on error
     */
    public static function log_error($message, $context = null, $widget_id = null) {
        return self::log('error', $message, $context, $widget_id);
    }
    
    /**
     * Log a warning message
     * 
     * Use for warning messages about potential issues.
     * 
     * @param string $message Log message text
     * @param mixed $context Optional. Additional context data
     * @param int|null $widget_id Optional. Associated widget ID
     * @return int|false Number of rows inserted, or false on error
     */
    public static function log_warning($message, $context = null, $widget_id = null) {
        return self::log('warning', $message, $context, $widget_id);
    }
    
    /**
     * Log a debug message
     * 
     * Debug messages are only logged when debugging is enabled in plugin settings.
     * Use for detailed diagnostic information during development.
     * 
     * @param string $message Log message text
     * @param mixed $context Optional. Additional context data
     * @param int|null $widget_id Optional. Associated widget ID
     * @return int|false Number of rows inserted, or false if debugging disabled or error
     */
    public static function log_debug($message, $context = null, $widget_id = null) {
        $is_debug = get_option('tw_chat_is_debug');
        
        if ($is_debug) {
            return self::log('debug', $message, $context, $widget_id);
        }
        
        return false;
    }
    
    /**
     * Retrieve system logs with optional filtering
     * 
     * Fetches system logs from the database with support for filtering by
     * log type, widget ID, and date range. Results are paginated and ordered
     * by creation date (newest first).
     * 
     * @param array $filters Optional. Filter parameters:
     *                       - log_type: Filter by log type (info, error, warning, debug)
     *                       - widget_id: Filter by widget ID
     *                       - date_from: Filter logs from this date (Y-m-d H:i:s format)
     *                       - date_to: Filter logs up to this date (Y-m-d H:i:s format)
     *                       - limit: Number of results to return (default: 100)
     *                       - offset: Number of results to skip (default: 0)
     * @return array Array of log objects
     */
    public static function get_logs($filters = array()) {
        global $wpdb;
        
        $table_name = TW_Chat_DB::get_system_logs_table();
        
        $where_clauses = array();
        $where_values = array();
        
        if (!empty($filters['log_type'])) {
            $where_clauses[] = 'log_type = %s';
            $where_values[] = sanitize_text_field($filters['log_type']);
        }
        
        if (!empty($filters['widget_id'])) {
            $where_clauses[] = 'widget_id = %d';
            $where_values[] = absint($filters['widget_id']);
        }
        
        if (!empty($filters['date_from'])) {
            $where_clauses[] = 'created_at >= %s';
            $where_values[] = sanitize_text_field($filters['date_from']);
        }
        
        if (!empty($filters['date_to'])) {
            $where_clauses[] = 'created_at <= %s';
            $where_values[] = sanitize_text_field($filters['date_to']);
        }
        
        $where_sql = '';
        if (!empty($where_clauses)) {
            $where_sql = 'WHERE ' . implode(' AND ', $where_clauses);
        }
        
        $limit = isset($filters['limit']) ? absint($filters['limit']) : 100;
        $offset = isset($filters['offset']) ? absint($filters['offset']) : 0;
        
        $sql = "SELECT * FROM $table_name $where_sql ORDER BY created_at DESC LIMIT %d OFFSET %d";
        $where_values[] = $limit;
        $where_values[] = $offset;
        
        if (!empty($where_values)) {
            $sql = $wpdb->prepare($sql, $where_values);
        }
        
        return $wpdb->get_results($sql);
    }
    
    /**
     * Get count of system logs matching filters
     * 
     * Returns the total number of log entries matching the specified filters.
     * Useful for pagination in the admin interface.
     * 
     * @param array $filters Optional. Filter parameters:
     *                       - log_type: Filter by log type
     *                       - widget_id: Filter by widget ID
     * @return int Number of matching log entries
     */
    public static function get_log_count($filters = array()) {
        global $wpdb;
        
        $table_name = TW_Chat_DB::get_system_logs_table();
        
        $where_clauses = array();
        $where_values = array();
        
        if (!empty($filters['log_type'])) {
            $where_clauses[] = 'log_type = %s';
            $where_values[] = sanitize_text_field($filters['log_type']);
        }
        
        if (!empty($filters['widget_id'])) {
            $where_clauses[] = 'widget_id = %d';
            $where_values[] = absint($filters['widget_id']);
        }
        
        $where_sql = '';
        if (!empty($where_clauses)) {
            $where_sql = 'WHERE ' . implode(' AND ', $where_clauses);
        }
        
        $sql = "SELECT COUNT(*) FROM $table_name $where_sql";
        
        if (!empty($where_values)) {
            $sql = $wpdb->prepare($sql, $where_values);
        }
        
        return $wpdb->get_var($sql);
    }
    
    /**
     * Delete old system logs
     * 
     * Removes system logs older than the specified number of days.
     * Used by the scheduled cleanup task to maintain database size.
     * 
     * @param int $days Number of days to retain logs (default: 30)
     * @return int|false Number of rows deleted, or false on error
     */
    public static function delete_old_logs($days = 30) {
        global $wpdb;
        
        $table_name = TW_Chat_DB::get_system_logs_table();
        
        $date = date('Y-m-d H:i:s', strtotime("-$days days"));
        
        return $wpdb->query(
            $wpdb->prepare(
                "DELETE FROM $table_name WHERE created_at < %s",
                $date
            )
        );
    }
    
    /**
     * Get error statistics for dashboard
     * 
     * Returns counts of each log type (info, error, warning, debug) for the
     * specified time period. Used by the admin dashboard for reporting.
     * 
     * @param int $days Number of days to analyze (default: 7)
     * @return array Associative array with log types as keys and counts as values
     */
    public static function get_error_stats($days = 7) {
        global $wpdb;
        
        $table_name = TW_Chat_DB::get_system_logs_table();
        $date_from = date('Y-m-d H:i:s', strtotime("-$days days"));
        
        // Error counts by type
        $error_counts = $wpdb->get_results($wpdb->prepare(
            "SELECT log_type, COUNT(*) as count FROM $table_name WHERE created_at >= %s GROUP BY log_type",
            $date_from
        ));
        
        $stats = array();
        foreach ($error_counts as $error) {
            $stats[$error->log_type] = (int)$error->count;
        }
        
        return $stats;
    }
    
    /**
     * Clear all system logs
     * 
     * Truncates the system logs table, removing all log entries.
     * Used by the "Clear All Logs" button in the admin interface.
     * 
     * @return int|false Number of rows deleted, or false on error
     */
    public static function clear_logs() {
        global $wpdb;
        
        $table_name = TW_Chat_DB::get_system_logs_table();
        
        return $wpdb->query("TRUNCATE TABLE $table_name");
    }
}
