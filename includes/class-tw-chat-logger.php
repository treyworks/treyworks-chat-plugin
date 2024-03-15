<?php 

class TW_Chat_Logger {
    // Path to the log file
    private static $log_file_path;

    // Initializes the logger by setting the log file path
    public static function initialize() {
        // Set log file path in the plugin directory
        self::$log_file_path = plugin_dir_path(dirname( __FILE__ )) . 'treyworks-chat.log';
    }

    // Logs a message to the log file
    public static function log($message) {
        if (defined('WP_DEBUG') && WP_DEBUG) {
            // Convert array or object to a readable string format
            if (is_array($message) || is_object($message)) {
                $message = print_r($message, true);
            }
            // Format the message with a timestamp
            $date = date('Y-m-d H:i:s');
            $log_message = sprintf("[%s] %s\n", $date, $message);
            // Append the formatted message to the log file
            file_put_contents(self::$log_file_path, $log_message, FILE_APPEND);
        }
    }

    // Outputs the content of the log file
    public static function output_log() {
        if (file_exists(self::$log_file_path)) {
            // Set header for plain text content
            header('Content-Type: text/plain');
            // Read and output the log file content
            readfile(self::$log_file_path);
            exit;
        }
    }

    // Returns the contents of the log file as a string
    public static function get_log_contents() {
        if (file_exists(self::$log_file_path)) {
            // Return the file contents
            return file_get_contents(self::$log_file_path);
        }
        return '';
    }
}

?>