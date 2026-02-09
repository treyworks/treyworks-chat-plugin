<?php 
/**
 * TreyWorks Chat File Logger (Legacy)
 * 
 * Legacy file-based logging system for debugging purposes. This logger writes
 * debug messages to a text file (treyworks-chat.log) in the plugin directory.
 * 
 * NOTE: As of version 2.2.0, database logging is preferred (TW_Chat_System_Logger).
 * This file logger is maintained for backward compatibility and development debugging.
 * When debugging is enabled, messages are written to both the file and database.
 * 
 * File Location: /wp-content/plugins/treyworks-chat/treyworks-chat.log
 * 
 * @package TreyWorks_Chat
 * @since 1.0.0
 * @deprecated 2.2.0 Use TW_Chat_System_Logger for database logging instead
 */

class TW_Chat_Logger {
    
    /**
     * @var string Path to the log file
     */
    private static $log_file_path;

    /**
     * Initialize the file logger
     * 
     * Sets up the log file path in the plugin directory and creates the file
     * if it doesn't exist. The log file is created with an initial timestamp.
     * Should be called during plugin initialization.
     * 
     * @return void
     */
    public static function initialize() {
        // Set log file path in the plugin directory
        self::$log_file_path = plugin_dir_path(dirname( __FILE__ )) . 'treyworks-chat.log';

        // Check if the log file already exists
        if (!file_exists(self::$log_file_path)) {
            // Create the log file and add an initial message
            file_put_contents(self::$log_file_path, "Log file created on: " . date('Y-m-d H:i:s') . PHP_EOL);
        }
    }

    /**
     * Log a debug message
     * 
     * Writes debug messages to the log file when debugging is enabled in plugin settings.
     * Also logs to the database via TW_Chat_System_Logger if available.
     * 
     * Messages are only logged when the 'tw_chat_is_debug' option is enabled.
     * Arrays and objects are automatically converted to readable string format.
     * 
     * @param mixed $message Message to log (string, array, or object)
     * @param mixed $context Optional. Additional context data for database logging
     * @param int|null $widget_id Optional. Associated widget ID for database logging
     * @return void
     */
    public static function log($message, $context = null, $widget_id = null) {
        $is_debug = get_option('tw_chat_is_debug');

        if ($is_debug) {
            // Convert arrays/objects to string format
            if (is_array($message) || is_object($message)) {
                $message = print_r($message, true);
            }
            
            // Format log message with timestamp
            $date = date('Y-m-d H:i:s');
            $log_message = sprintf("[%s] %s\n", $date, $message);
            
            // Write to file
            file_put_contents(self::$log_file_path, $log_message, FILE_APPEND);
            
            // Also log to database if system logger is available
            if (class_exists('TW_Chat_System_Logger')) {
                TW_Chat_System_Logger::log_debug($message, $context, $widget_id);
            }
        }
    }

    /**
     * Output log file contents to browser
     * 
     * Sends the log file contents directly to the browser as plain text.
     * Sets appropriate headers and terminates script execution.
     * Used by legacy log viewing functionality.
     * 
     * @deprecated 2.2.0 Use admin interface Logging page instead
     * @return void Exits script after output
     */
    public static function output_log() {
        if (file_exists(self::$log_file_path)) {
            // Set header for plain text content
            header('Content-Type: text/plain');
            // Read and output the log file content
            readfile(self::$log_file_path);
            exit;
        }
    }

    /**
     * Get log file contents as string
     * 
     * Returns the entire contents of the log file as a string.
     * Used by the LogFileModal component in the admin interface.
     * 
     * @deprecated 2.2.0 Use admin interface Logging page instead
     * @return string Log file contents, or empty string if file doesn't exist
     */
    public static function get_log_contents() {
        if (file_exists(self::$log_file_path)) {
            // Return the file contents
            return file_get_contents(self::$log_file_path);
        }
        return '';
    }

    /**
     * Clear the log file
     * 
     * Truncates the log file to zero length and adds a "cleared" timestamp.
     * This removes all previous log entries while keeping the file intact.
     * 
     * @return bool True on success, false on failure or if file doesn't exist
     */
    public static function clear_log() {
        // Get the directory of the current file
        $current_directory = dirname( __FILE__ );
        
        // Get the parent directory
        $parent_directory = dirname( $current_directory );

        // Define the path to the log file within the plugin directory
        $log_file_path = $parent_directory . '/treyworks-chat.log';

        // Check if the log file exists
        if ( file_exists( $log_file_path ) ) {
            // Open the file in write mode, which will truncate the file to zero length
            $file = fopen( $log_file_path, 'w' );

            // Check if the file was opened successfully
            if ( $file ) {
                // Write cleared timestamp
                fwrite( $file, 'Log cleared: ' . date( 'Y-m-d H:i:s' ) . PHP_EOL );
                fclose( $file );

                // Log file cleared successfully
                return true;
            } else {
               // Failed to open the log file
               return false;
            }
        } else {
            // Log file does not exist
            return false;
        }
    }
}

?>