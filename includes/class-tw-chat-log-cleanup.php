<?php
/**
 * TreyWorks Chat Log Cleanup
 * 
 * Handles scheduled cleanup of old log entries to prevent database bloat.
 * Runs daily via WordPress cron to delete message logs and system logs
 * older than the configured retention period.
 * 
 * The retention period is configurable via the 'tw_chat_log_retention_days'
 * option (default: 30 days). Set to 0 to disable automatic cleanup.
 * 
 * @package TreyWorks_Chat
 * @since 2.2.0
 */

class TW_Chat_Log_Cleanup {
    
    /**
     * Initialize the log cleanup scheduler
     * 
     * Sets up a daily WordPress cron event to automatically clean up old logs.
     * The event is only scheduled if it doesn't already exist to prevent duplicates.
     * Should be called during plugin initialization.
     * 
     * @return void
     */
    public static function init() {
        // Schedule daily cleanup if not already scheduled
        if (!wp_next_scheduled('tw_chat_daily_log_cleanup')) {
            wp_schedule_event(time(), 'daily', 'tw_chat_daily_log_cleanup');
        }
        
        add_action('tw_chat_daily_log_cleanup', array(__CLASS__, 'run_cleanup'));
    }
    
    /**
     * Run the log cleanup process
     * 
     * Deletes message logs and system logs older than the configured retention
     * period. The retention period is retrieved from the 'tw_chat_log_retention_days'
     * option (default: 30 days). If set to 0 or less, cleanup is skipped.
     * 
     * After cleanup, logs the results to the system log for auditing purposes,
     * including the number of deleted records from each table.
     * 
     * This method is automatically called by the WordPress cron system on a
     * daily schedule.
     * 
     * @return void
     */
    public static function run_cleanup() {
        $retention_days = get_option('tw_chat_log_retention_days', 30);
        
        if ($retention_days > 0) {
            // Clean up old message logs
            $deleted_messages = TW_Chat_Message_Logger::delete_old_messages($retention_days);
            
            // Clean up old system logs
            $deleted_system = TW_Chat_System_Logger::delete_old_logs($retention_days);
            
            // Log cleanup results for auditing
            TW_Chat_System_Logger::log_info(
                'Log cleanup completed',
                array(
                    'retention_days' => $retention_days,
                    'deleted_messages' => $deleted_messages,
                    'deleted_system_logs' => $deleted_system
                )
            );
        }
    }
    
    /**
     * Unschedule the log cleanup event
     * 
     * Removes the scheduled cron event for log cleanup. Should be called
     * during plugin deactivation to clean up scheduled tasks.
     * 
     * @return void
     */
    public static function unschedule() {
        $timestamp = wp_next_scheduled('tw_chat_daily_log_cleanup');
        if ($timestamp) {
            wp_unschedule_event($timestamp, 'tw_chat_daily_log_cleanup');
        }
    }
}
