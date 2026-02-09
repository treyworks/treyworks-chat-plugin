<?php

class TW_Chat_Tool_Logger {
    
    public static function log_tool_call($conversation_id, $widget_id, $tool_name, $parameters, $result = null, $status = 'success') {
        global $wpdb;
        
        $table_name = TW_Chat_DB::get_tool_logs_table();
        
        if (is_array($parameters) || is_object($parameters)) {
            $parameters = json_encode($parameters);
        }
        
        if (is_array($result) || is_object($result)) {
            $result = json_encode($result);
        }
        
        $insert_result = $wpdb->insert(
            $table_name,
            array(
                'conversation_id' => sanitize_text_field($conversation_id),
                'widget_id' => absint($widget_id),
                'tool_name' => sanitize_text_field($tool_name),
                'parameters' => $parameters,
                'result' => $result,
                'status' => sanitize_text_field($status),
                'created_at' => current_time('mysql')
            ),
            array('%s', '%d', '%s', '%s', '%s', '%s', '%s')
        );
        
        if ($insert_result === false) {
            error_log('TW Chat: Failed to log tool call - ' . $wpdb->last_error);
        }
        
        return $insert_result;
    }
    
    public static function get_tool_calls($filters = array()) {
        global $wpdb;
        
        $table_name = TW_Chat_DB::get_tool_logs_table();
        
        $where_clauses = array();
        $where_values = array();
        
        if (!empty($filters['conversation_id'])) {
            $where_clauses[] = 'conversation_id = %s';
            $where_values[] = sanitize_text_field($filters['conversation_id']);
        }
        
        if (!empty($filters['widget_id'])) {
            $where_clauses[] = 'widget_id = %d';
            $where_values[] = absint($filters['widget_id']);
        }
        
        if (!empty($filters['tool_name'])) {
            $where_clauses[] = 'tool_name = %s';
            $where_values[] = sanitize_text_field($filters['tool_name']);
        }
        
        if (!empty($filters['status'])) {
            $where_clauses[] = 'status = %s';
            $where_values[] = sanitize_text_field($filters['status']);
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
    
    public static function get_tool_call_count($filters = array()) {
        global $wpdb;
        
        $table_name = TW_Chat_DB::get_tool_logs_table();
        
        $where_clauses = array();
        $where_values = array();
        
        if (!empty($filters['conversation_id'])) {
            $where_clauses[] = 'conversation_id = %s';
            $where_values[] = sanitize_text_field($filters['conversation_id']);
        }
        
        if (!empty($filters['widget_id'])) {
            $where_clauses[] = 'widget_id = %d';
            $where_values[] = absint($filters['widget_id']);
        }
        
        if (!empty($filters['tool_name'])) {
            $where_clauses[] = 'tool_name = %s';
            $where_values[] = sanitize_text_field($filters['tool_name']);
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
    
    public static function get_tool_usage_stats($widget_id = null, $date_from = null, $date_to = null) {
        global $wpdb;
        
        $table_name = TW_Chat_DB::get_tool_logs_table();
        
        $where_clauses = array();
        $where_values = array();
        
        if (!empty($widget_id)) {
            $where_clauses[] = 'widget_id = %d';
            $where_values[] = absint($widget_id);
        }
        
        if (!empty($date_from)) {
            $where_clauses[] = 'created_at >= %s';
            $where_values[] = sanitize_text_field($date_from);
        }
        
        if (!empty($date_to)) {
            $where_clauses[] = 'created_at <= %s';
            $where_values[] = sanitize_text_field($date_to);
        }
        
        $where_sql = '';
        if (!empty($where_clauses)) {
            $where_sql = 'WHERE ' . implode(' AND ', $where_clauses);
        }
        
        $sql = "SELECT 
                    tool_name,
                    COUNT(*) as call_count,
                    SUM(CASE WHEN status = 'success' THEN 1 ELSE 0 END) as success_count,
                    SUM(CASE WHEN status = 'error' THEN 1 ELSE 0 END) as error_count
                FROM $table_name $where_sql
                GROUP BY tool_name
                ORDER BY call_count DESC";
        
        if (!empty($where_values)) {
            $sql = $wpdb->prepare($sql, $where_values);
        }
        
        return $wpdb->get_results($sql);
    }
    
    public static function delete_old_tool_calls($days = 30) {
        global $wpdb;
        
        $table_name = TW_Chat_DB::get_tool_logs_table();
        
        $date = date('Y-m-d H:i:s', strtotime("-$days days"));
        
        return $wpdb->query(
            $wpdb->prepare(
                "DELETE FROM $table_name WHERE created_at < %s",
                $date
            )
        );
    }
    
    public static function get_tool_stats($days = 7) {
        global $wpdb;
        
        $table_name = TW_Chat_DB::get_tool_logs_table();
        $date_from = date('Y-m-d H:i:s', strtotime("-$days days"));
        
        // Tool call frequency
        $tool_frequency = $wpdb->get_results($wpdb->prepare(
            "SELECT tool_name, COUNT(*) as count, SUM(CASE WHEN status = 'success' THEN 1 ELSE 0 END) as success_count FROM $table_name WHERE created_at >= %s GROUP BY tool_name ORDER BY count DESC",
            $date_from
        ));
        
        return array(
            'tool_frequency' => $tool_frequency,
            'total_calls' => array_sum(array_column($tool_frequency, 'count'))
        );
    }
}
