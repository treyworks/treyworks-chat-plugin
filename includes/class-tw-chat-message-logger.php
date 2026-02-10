<?php

class TW_Chat_Message_Logger {
    
    public static function log_message($conversation_id, $widget_id, $message_type, $message_text, $input_tokens = 0, $output_tokens = 0, $source_url = null, $ip_address = null) {
        global $wpdb;
        
        // Validate conversation_id format (conv_ prefix + alphanumeric/underscore)
        if (!preg_match('/^conv_[a-zA-Z0-9_\.]+$/', $conversation_id)) {
            error_log('TW Chat: Invalid conversation_id format: ' . $conversation_id);
            return false;
        }
        
        // Validate message_type
        $valid_types = array('user', 'assistant', 'tool', 'system');
        if (!in_array($message_type, $valid_types)) {
            error_log('TW Chat: Invalid message_type: ' . $message_type);
            return false;
        }
        
        // Validate message length (max 100KB)
        if (strlen($message_text) > 100000) {
            error_log('TW Chat: Message text exceeds maximum length');
            return false;
        }
        
        // Validate and sanitize source_url
        if ($source_url !== null) {
            $source_url = esc_url_raw($source_url);
            if (strlen($source_url) > 500) {
                $source_url = substr($source_url, 0, 500);
            }
        }
        
        // Validate and sanitize IP address
        if ($ip_address !== null) {
            // Validate IPv4 or IPv6 format
            if (!filter_var($ip_address, FILTER_VALIDATE_IP)) {
                error_log('TW Chat: Invalid IP address format: ' . $ip_address);
                $ip_address = null;
            } else {
                $ip_address = sanitize_text_field($ip_address);
            }
        }
        
        $table_name = TW_Chat_DB::get_message_logs_table();
        
        $result = $wpdb->insert(
            $table_name,
            array(
                'conversation_id' => sanitize_text_field($conversation_id),
                'widget_id' => absint($widget_id),
                'message_type' => sanitize_text_field($message_type),
                'message_text' => sanitize_textarea_field($message_text),
                'input_tokens' => absint($input_tokens),
                'output_tokens' => absint($output_tokens),
                'source_url' => $source_url,
                'ip_address' => $ip_address,
                'created_at' => current_time('mysql')
            ),
            array('%s', '%d', '%s', '%s', '%d', '%d', '%s', '%s', '%s')
        );
        
        if ($result === false) {
            error_log('TW Chat: Failed to log message - ' . $wpdb->last_error);
        }
        
        return $result;
    }
    
    public static function get_messages($filters = array()) {
        global $wpdb;
        
        $table_name = TW_Chat_DB::get_message_logs_table();
        
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
        
        if (!empty($filters['message_type'])) {
            $where_clauses[] = 'message_type = %s';
            $where_values[] = sanitize_text_field($filters['message_type']);
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
    
    public static function get_message_count($filters = array()) {
        global $wpdb;
        
        $table_name = TW_Chat_DB::get_message_logs_table();
        
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
        
        if (!empty($filters['message_type'])) {
            $where_clauses[] = 'message_type = %s';
            $where_values[] = sanitize_text_field($filters['message_type']);
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
    
    public static function get_token_usage_stats($widget_id = null, $date_from = null, $date_to = null) {
        global $wpdb;
        
        $table_name = TW_Chat_DB::get_message_logs_table();
        
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
                    SUM(input_tokens) as total_input_tokens,
                    SUM(output_tokens) as total_output_tokens,
                    SUM(input_tokens + output_tokens) as total_tokens
                FROM $table_name $where_sql";
        
        if (!empty($where_values)) {
            $sql = $wpdb->prepare($sql, $where_values);
        }
        
        return $wpdb->get_row($sql);
    }
    
    public static function delete_old_messages($days = 30) {
        global $wpdb;
        
        $table_name = TW_Chat_DB::get_message_logs_table();
        
        $date = date('Y-m-d H:i:s', strtotime("-$days days"));
        
        return $wpdb->query(
            $wpdb->prepare(
                "DELETE FROM $table_name WHERE created_at < %s",
                $date
            )
        );
    }
    
    public static function get_conversations_list($filters = array()) {
        global $wpdb;
        
        $table_name = TW_Chat_DB::get_message_logs_table();
        
        $where_clauses = array();
        $where_values = array();
        
        if (!empty($filters['widget_id'])) {
            $where_clauses[] = 'widget_id = %d';
            $where_values[] = absint($filters['widget_id']);
        }
        
        if (!empty($filters['conversation_id'])) {
            $where_clauses[] = 'conversation_id LIKE %s';
            $where_values[] = '%' . $wpdb->esc_like(sanitize_text_field($filters['conversation_id'])) . '%';
        }
        
        if (!empty($filters['date_from'])) {
            $where_clauses[] = 'created_at >= %s';
            $where_values[] = sanitize_text_field($filters['date_from']) . ' 00:00:00';
        }
        
        if (!empty($filters['date_to'])) {
            $where_clauses[] = 'created_at <= %s';
            $where_values[] = sanitize_text_field($filters['date_to']) . ' 23:59:59';
        }
        
        $where_sql = '';
        if (!empty($where_clauses)) {
            $where_sql = 'WHERE ' . implode(' AND ', $where_clauses);
        }
        
        $sql = "SELECT 
                    conversation_id,
                    widget_id,
                    COUNT(*) as message_count,
                    SUM(input_tokens + output_tokens) as total_tokens,
                    MAX(created_at) as last_message_date
                FROM $table_name
                $where_sql
                GROUP BY conversation_id, widget_id
                ORDER BY last_message_date DESC
                LIMIT 100";
        
        if (!empty($where_values)) {
            $sql = $wpdb->prepare($sql, $where_values);
        }
        
        return $wpdb->get_results($sql);
    }
    
    public static function get_conversation_messages($conversation_id) {
        global $wpdb;
        
        $table_name = TW_Chat_DB::get_message_logs_table();
        
        $sql = $wpdb->prepare(
            "SELECT * FROM $table_name WHERE conversation_id = %s ORDER BY created_at ASC",
            sanitize_text_field($conversation_id)
        );
        
        return $wpdb->get_results($sql);
    }
    
    public static function get_dashboard_stats($days = 7) {
        global $wpdb;
        
        $table_name = TW_Chat_DB::get_message_logs_table();
        $date_from = date('Y-m-d H:i:s', strtotime("-$days days"));
        
        $stats = array();
        
        // Total conversations
        $stats['total_conversations'] = $wpdb->get_var($wpdb->prepare(
            "SELECT COUNT(DISTINCT conversation_id) FROM $table_name WHERE created_at >= %s",
            $date_from
        ));
        
        // Total messages by type
        $message_types = $wpdb->get_results($wpdb->prepare(
            "SELECT message_type, COUNT(*) as count FROM $table_name WHERE created_at >= %s GROUP BY message_type",
            $date_from
        ));
        $stats['message_types'] = array();
        foreach ($message_types as $type) {
            $stats['message_types'][$type->message_type] = (int)$type->count;
        }
        
        // Total tokens
        $tokens = $wpdb->get_row($wpdb->prepare(
            "SELECT SUM(input_tokens) as input_tokens, SUM(output_tokens) as output_tokens FROM $table_name WHERE created_at >= %s",
            $date_from
        ));
        $stats['total_input_tokens'] = (int)$tokens->input_tokens;
        $stats['total_output_tokens'] = (int)$tokens->output_tokens;
        
        // Total widget count (independent of conversation data)
        $stats['widget_count'] = (int) wp_count_posts('chat_widgets')->publish;
        
        // Widget usage with titles
        $widget_usage = $wpdb->get_results($wpdb->prepare(
            "SELECT ml.widget_id, p.post_title as widget_title, COUNT(DISTINCT ml.conversation_id) as conversations, COUNT(*) as messages 
            FROM $table_name ml 
            LEFT JOIN {$wpdb->posts} p ON ml.widget_id = p.ID 
            WHERE ml.created_at >= %s 
            GROUP BY ml.widget_id, p.post_title 
            ORDER BY conversations DESC",
            $date_from
        ));
        $stats['widget_usage'] = $widget_usage;
        
        // Daily conversation trends
        $daily_trends = $wpdb->get_results($wpdb->prepare(
            "SELECT DATE(created_at) as date, COUNT(DISTINCT conversation_id) as conversations, COUNT(*) as messages FROM $table_name WHERE created_at >= %s GROUP BY DATE(created_at) ORDER BY date ASC",
            $date_from
        ));
        $stats['daily_trends'] = $daily_trends;
        
        // Daily token usage
        $daily_tokens = $wpdb->get_results($wpdb->prepare(
            "SELECT DATE(created_at) as date, SUM(input_tokens) as input_tokens, SUM(output_tokens) as output_tokens FROM $table_name WHERE created_at >= %s GROUP BY DATE(created_at) ORDER BY date ASC",
            $date_from
        ));
        $stats['daily_tokens'] = $daily_tokens;
        
        return $stats;
    }
}
