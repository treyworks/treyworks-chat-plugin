<?php
/**
 * Chat Functions Helper Class
 */
class TW_Chat_Functions {

    // Constructor
    public function __construct() {
        // Custom action hook for executing a function with specific parameters
        add_action('tw_chat_test_action', [$this,'test_action_callback'], 10, 2);

        // Custom filter hook for modifying data with specific parameters
        add_filter('tw_chat_test_filter', [$this,'test_filter_callback'], 10, 2);
    }

    /* Get Function Definitions */
    public static function get_function_definitions() {
        return [
            [
                "name" => "search_site",
                "description" => "Search the website for answers",
                "parameters" => [
                    "type" => "object",
                    "properties" => [
                        "search_term" => [
                            "type" => "string",
                            "description" => "The search term to lookup on the website"
                        ]
                    ],
                    "required" => [
                        "search_term"
                    ]
                ]
            ],
            [
                "name" => "webhook",
                "description" => "Post data to an external URL",
                "parameters" => [
                    "type" => "object",
                    "properties" => [
                        "data" => [
                            "type" => "string",
                            "description" => "Data to send to the external URL."
                        ]
                    ],
                    "required" => [
                        "data"
                    ]
                ]
            ],
            [
                "name" => "wp_action",
                "description" => "Calls a WordPress action and returns the result.",
                "parameters" => [
                    "type" => "object",
                    "properties" => [
                        "action_name" => [
                            "type" => "string",
                            "description" => "The name of the action."
                        ],
                        "action_type" => [
                            "type" => "string",
                            "description" => "The type of the action, filter or action."
                        ],
                        "action_arguments" => [
                            "type" => "string",
                            "description" => "The arguments to pass to the action. Formatted as a JSON array."
                        ]
                    ],
                    "required" => [
                        "action_name",
                        "action_type",
                        "action_arguments"
                    ]
                ]
            ]
        ];
    }

    /* Site Search Function */
    public static function search_site($search_term, $widget_id) {
        $args = array(
            's' => $search_term,
            'post_type' => 'any',
            'post_status' => 'publish',
            'posts_per_page' => -1,
        );
    
        $search_query = new WP_Query($args);
        $search_results = array();
    
        if ($search_query->have_posts()) {
            while ($search_query->have_posts()) {
                $search_query->the_post();
                $search_results[] = array(
                    'title' => get_the_title(),
                    'permalink' => get_permalink()
                );
            }
        }
    
        // Reset post data
        wp_reset_postdata();
    
        return $search_results;
    }

    /* WooCommerce Product Search Function */
    public static function search_products($search_term, $widget_id) {
        $args = array(
            's' => $search_term,
            'post_status' => 'publish',
            'posts_per_page' => -1,
            'post_type'      => 'product', // Searching in products
            'meta_query'     => array( // Meta query for stock status
                array(
                    'key'   => '_stock_status',
                    'value' => 'instock', // Only select products that are in stock
                ),
            )
        );
    
        $search_query = new WP_Query($args);
        $search_results = array();
    
        if ($search_query->have_posts()) {
            while ($search_query->have_posts()) {
                $search_query->the_post();
                global $product;

                $search_results[] = array(
                    'title' => get_the_title(),
                    'permalink' => get_permalink(),
                    'price' => $product->get_price()
                );
            }
        }
    
        // Reset post data
        wp_reset_postdata();
    
        return $search_results;
    }
    
    /* Webhook Function */
    public static function webhook($arguments, $widget_id) {
         // Webhook Function Call
         $param_name = "data";

         // Get post data from argument
         if (array_key_exists($param_name, $arguments) && $arguments[$param_name] !== null) {
            // Get the webook url and header
            $webhook_header = get_post_meta($widget_id, 'tw_chat_webhook_header', true);
            $webhook_address = get_post_meta($widget_id, 'tw_chat_webhook_address', true);

            // Sanitize post data
            $post_data = sanitize_text_field($arguments[$param_name]);

            // Arguments for the wp_remote_post function
            $args = array(
                'body'    => json_decode($post_data, true),
                'timeout' => '10', // Timeout in seconds
            );

            if ($webhook_header) {
                $args['headers'] = json_decode($webhook_header, true);
            }

            // Make the POST request
            $response = wp_remote_post($webhook_address, $args);

             // Check for errors
            if (is_wp_error($response)) {
                TW_Chat_Logger::log(__('Error sending data: '));
                $function_result = "Error sending data";
            } else {
                TW_Chat_Logger::log(__('Data sent successfully: ' . $webhook_address));
                $function_result = wp_remote_retrieve_body($response);
            }
             
         }

         return $function_result;
    }

    /* WP Action Function */
    public static function wp_action($arguments, $widget_id) {
        // Call WordPress Action
        // Enables developers to create and call custom actions from assistant
        $action_output = "";
        $valid_arguments = true;
        $action_arguments = [];
        $action_type = 'action';
        $action_name = '';

        // Check if action_arguments is set
        if (array_key_exists('action_arguments', $arguments) && $arguments['action_arguments'] !== null) {
            $action_arguments = json_decode($arguments["action_arguments"]);
        } else {
            TW_Chat_Logger::log(__("Missing action_arguments call argument"));
            $valid_arguments = false;
        }

        // Check if action_type is filter
        if (array_key_exists('action_type', $arguments) && $arguments['action_type'] !== null) {
            if (strtolower($arguments["action_type"]) === 'filter') {
                $action_type = $arguments["action_type"];
            }
        }

        // Check if action_name is set
        if (array_key_exists('action_name', $arguments) && $arguments['action_name'] !== null) {
            $action_name = $arguments["action_name"];
        } else {
            TW_Chat_Logger::log(__("Missing action_name call argument"));
            $valid_arguments = false;
        }

        if ($valid_arguments) {

            if ($action_type === 'filter') {
                // Call the filter hook
                $action_output = apply_filters($action_name, ...$action_arguments);
            } else {
                // Call the action
                // Start output buffering
                ob_start();

                do_action($action_name, ...$action_arguments);

                // Get the output
                $action_output = ob_get_clean();

                TW_Chat_Logger::log(__('Successfully called action: ' . $action_name));
            }

        } else {
            $action_output = "Invalid arguments for function call";
        }

        return $action_output;
    }

    /**
     * Test Custom Action
     */
    public function test_action_callback($first_name, $last_name) {
        
        $log_message = "";
        
        if (( empty($first_name) || is_null($first_name) ) || ( empty($first_name) || is_null($first_name) )) {
            $log_message = "";
        } else {
            $log_message = "Hello, " . $first_name . " " . $last_name;
        }

        TW_Chat_Logger::log($log_message);
        echo $log_message;
    }

    /**
     * Test Filter Action
     */
    public function test_filter_callback($first_name, $last_name) {
        
        $log_message = "";
        
        if (( empty($first_name) || is_null($first_name) ) || ( empty($last_name) || is_null($last_name) )) {
            $log_message = "";
        } else {
            $log_message = "Goodbye, " . $first_name . " " . $last_name;
        }

        TW_Chat_Logger::log($log_message);
        return $log_message;
    }

}

?>