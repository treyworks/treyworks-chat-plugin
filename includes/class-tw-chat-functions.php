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
    public static function get_function_definitions( $widget_id = null ) {
        // Build webhook data description
        $webhook_data_description = "Data to send to the external URL as a JSON string.";
        if ( $widget_id ) {
            $webhook_schema = get_post_meta( $widget_id, 'tw_chat_webhook_schema', true );
            if ( ! empty( $webhook_schema ) ) {
                $schema_fields = json_decode( $webhook_schema, true );
                if ( is_array( $schema_fields ) && ! empty( $schema_fields ) ) {
                    $field_descriptions = array();
                    foreach ( $schema_fields as $field ) {
                        $req = ! empty( $field['required'] ) ? 'required' : 'optional';
                        $desc = ! empty( $field['description'] ) ? ' - ' . $field['description'] : '';
                        $field_descriptions[] = $field['name'] . ' (' . $field['type'] . ', ' . $req . ')' . $desc;
                    }
                    $webhook_data_description = "Data to send as a JSON object with these fields: " . implode( '; ', $field_descriptions );
                }
            }
        }

        return [
            [
                "type" => "function",
                "function" => [
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
                ]
            ],
            [
                "type" => "function",
                "function" => [
                    "name" => "webhook",
                    "description" => "Post data to an external URL",
                    "parameters" => [
                        "type" => "object",
                        "properties" => [
                            "data" => [
                                "type" => "string",
                                "description" => $webhook_data_description
                            ]
                        ],
                        "required" => [
                            "data"
                        ]
                    ]
                ]
            ],
            [
                "type" => "function",
                "function" => [
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
            ]
        ];
    }

    /* Site Search Function */
    public static function search_site($search_term, $widget_id) {
        // Get widget settings
        $chat_widget = TW_Chat_Widgets::get_chat_widget_by_id($widget_id);
        
        // Get search scope settings
        $search_scope = !empty($chat_widget['tw_chat_search_scope']) ? $chat_widget['tw_chat_search_scope'] : 'all';
        $search_post_types = !empty($chat_widget['tw_chat_search_post_types']) ? $chat_widget['tw_chat_search_post_types'] : '';
        $search_specific_ids = !empty($chat_widget['tw_chat_search_specific_ids']) ? $chat_widget['tw_chat_search_specific_ids'] : '';
        
        // Split comma-separated search terms and limit to 3 variations
        $search_terms = array_map('trim', explode(',', $search_term));
        $search_terms = array_slice($search_terms, 0, 3);
        
        // Track posts by ID with relevance score (how many searches found them)
        $posts_by_id = array();
        $relevance_scores = array();
        
        // Execute search for each term
        foreach ($search_terms as $term) {
            if (empty($term)) {
                continue;
            }
            
            // Build base query args
            $args = array(
                's' => $term,
                'post_status' => 'publish',
                'posts_per_page' => 5, // Get more results per query to increase pool
            );
            
            // Apply post type filtering based on search scope
            if ($search_scope === 'post_types' && !empty($search_post_types)) {
                // Search specific post types
                $post_types = array_map('trim', explode(',', $search_post_types));
                $args['post_type'] = $post_types;
            } elseif ($search_scope === 'specific' && !empty($search_specific_ids)) {
                // Search specific post IDs
                $post_ids = array_map('trim', explode(',', $search_specific_ids));
                $args['post_type'] = 'any';
                $args['post__in'] = $post_ids;
            } else {
                // Default: search all post types
                $args['post_type'] = 'any';
            }
        
            $search_query = new WP_Query($args);
        
            if ($search_query->have_posts()) {
                while ($search_query->have_posts()) {
                    $search_query->the_post();
                    $post_id = get_the_ID();
                    
                    // If we haven't seen this post yet, add it
                    if (!isset($posts_by_id[$post_id])) {
                        $posts_by_id[$post_id] = array(
                            'id' => $post_id,
                            'title' => get_the_title(),
                            'post_type' => get_post_type($post_id),
                            'permalink' => get_permalink(),
                            'content' => get_the_content()
                        );
                        $relevance_scores[$post_id] = 0;
                    }
                    
                    // Increment relevance score (post found in multiple searches)
                    $relevance_scores[$post_id]++;
                }
            }
            
            // Reset post data after each query
            wp_reset_postdata();
        }
        
        // Sort posts by relevance score (descending)
        arsort($relevance_scores);
        
        // Build final results array, limited to 3 posts
        $search_results = array();
        $count = 0;
        foreach ($relevance_scores as $post_id => $score) {
            if ($count >= 3) {
                break;
            }
            $search_results[] = $posts_by_id[$post_id];
            $count++;
        }
        
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

            // Parse the JSON data from the AI
            $post_data = $arguments[$param_name];
            $decoded_data = json_decode($post_data, true);

            // If JSON decode fails, wrap raw string in a data key
            if ($decoded_data === null && json_last_error() !== JSON_ERROR_NONE) {
                $decoded_data = array('data' => sanitize_text_field($post_data));
            }

            // Arguments for the wp_remote_post function
            $args = array(
                'headers' => array('Content-Type' => 'application/json'),
                'body'    => wp_json_encode($decoded_data),
                'timeout' => '10', // Timeout in seconds
            );

            if ($webhook_header) {
                $custom_headers = json_decode($webhook_header, true);
                if (is_array($custom_headers)) {
                    $args['headers'] = array_merge($args['headers'], $custom_headers);
                }
            }

            // Make the POST request
            $response = wp_remote_post($webhook_address, $args);

             // Check for errors
            if (is_wp_error($response)) {
                TW_Chat_System_Logger::log_debug(__('Error sending data: '));
                $function_result = "Error sending data";
            } else {
                TW_Chat_System_Logger::log_debug(__('Data sent successfully: ' . $webhook_address));
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
            TW_Chat_System_Logger::log_debug(__("Missing action_arguments call argument"));
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
            TW_Chat_System_Logger::log_debug(__("Missing action_name call argument"));
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

                TW_Chat_System_Logger::log_debug(__('Successfully called action: ' . $action_name));
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

        TW_Chat_System_Logger::log_debug($log_message);
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

        TW_Chat_System_Logger::log_debug($log_message);
        return $log_message;
    }

}

?>