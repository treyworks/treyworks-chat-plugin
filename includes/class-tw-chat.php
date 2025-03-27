<?php
/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */

require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-tw-chat-widgets.php';
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-tw-chat-functions.php';
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-tw-chat-logger.php';
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-tw-chat-meta.php';

require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-tw-chat-admin.php';

class TW_Chat_Plugin {

    private TW_Chat_Admin $plugin_admin;

    /**
     * Constructor for the TW_Chat_Plugin class.
     */
    public function __construct() {
        // Initialize the logger
        TW_Chat_Logger::initialize();
        
        $this->setup_admin();
        $this->setup_meta();
        $this->setup_actions();
    }

    public function setup_admin() {
        /**
		 * The class responsible for defining all actions that occur in the admin area.
		 */
		$this->plugin_admin = new TW_Chat_Admin();
    }

    public function setup_meta() {
        new TW_Chat_Meta();
    }

    public function setup_actions() {
        // Add a custom action hook that registers a custom post type for the chat widget
        add_action('init', [$this, 'register_chat_widget_post_type']);

        // Enqueue scripts and styles for chat widget
        add_action('wp_enqueue_scripts', [$this, 'enqueue_chat_widget_scripts']);

        // Add global chat widget to the footer section of the website
        add_action('wp_footer', [$this, 'add_global_chat_widget']);

        // Register REST API endpoints used in the plugin
        add_action('rest_api_init', [$this, 'register_rest_endpoints']);

        // Register a shortcode for displaying the chat widget in posts or pages
        add_shortcode('tw_chat_widget', [$this, 'tw_chat_widget_shortcode']);

        // Register a shortcode for displaying the voice widget in posts or pages
        add_shortcode('tw_voice_widget', [$this, 'tw_voice_widget_shortcode']);

        // Custom action hook for executing a function with specific parameters
        add_action('tw_test_action', [$this,'test_action_callback'], 10, 2);

        // Custom filter hook for modifying data with specific parameters
        add_filter('tw_test_filter', [$this,'test_filter_callback'], 10, 2);
    }

    /** 
     * Return enabled setting for global chat widget
     */
    public function is_enabled() {
        $is_enabled = !empty(get_option('tw_chat_is_enabled'));
        return $is_enabled;
    }

    /**
     * Register Chat Widget Post Type
     */
    public function register_chat_widget_post_type() {
        $args = [
            'public' => true,
            'label'  => 'Chat Widgets',
            'supports' => [ 'title', 'editor' ],
            'show_in_menu' => false, // This will hide it from the admin menu
            'exclude_from_search'   => true,   // Exclude from search results
            'publicly_queryable'    => false,
            'has_archive'           => false
        ];
        register_post_type('chat_widgets', $args);
    }

    /**
     * Enqueues additional scripts in the footer of the page.
     * This function is hooked to 'wp_enqueue_scripts'.
     */
    public function enqueue_chat_widget_scripts() {    
        if (!is_admin()) {

            // Override global settings
            $override_global = get_option('tw_chat_override_global');
            
            // Is global chat enabled or override is enabled
            if ($this->is_enabled() || $override_global) {
                wp_enqueue_script('tw-chat-js', plugins_url('../widgets/chat-widget/dist/tw-chat.js', __FILE__), [], '1.0.0', true);
                wp_enqueue_style('tw-chat-css', plugins_url('../widgets/chat-widget/dist/style.css', __FILE__));

                // Get current post/page ID
                $current_id = get_queried_object_id();
            
                // Check if current page has override settings
                $custom_button_text = '';
            
                if ($override_global === '1') {
                    $custom_button_text = get_post_meta($current_id, '_tw_chat_button_text', true);
                }

                // Localize script with plugin settings
                $settings = $this->plugin_admin->get_plugin_settings();
                $localizeData = [
                    "root" => esc_url_raw( rest_url() ),
                    'nonce' => wp_create_nonce('wp_rest'),
                    "tw_chat_button_text" => !empty($custom_button_text) ? $custom_button_text : $settings["tw_chat_button_text"],
                    "tw_chat_disclaimer" => $settings["tw_chat_disclaimer"],
                    "tw_chat_error_message" => $settings["tw_chat_error_message"],
                    "tw_chat_assistant_name" => $settings["tw_chat_assistant_name"],       
                    "tw_chat_max_characters" => $settings["tw_chat_max_characters"],
                    "tw_chat_logo_url" => $settings["tw_chat_logo_url"],
                    "tw_chat_send_button_image" => $settings["tw_chat_send_button_image"],
                    "tw_chat_button_image" => $settings["tw_chat_button_image"]
                ];

                wp_localize_script('tw-chat-js', 'twChatPluginSettings', $localizeData);
            }
        }
    }

    /*
     * Enqueues voice widget scripts in the footer of the page.
     */
    public function enqueue_voice_widget_scripts() {    
        if (!is_admin()) {
            wp_enqueue_script('tw-voice-widget-js', plugins_url('../widgets/voice-widget/dist/tw-voice-widget.js', __FILE__), [], '1.0.0', true);
            wp_enqueue_style('tw-voice-widget-css', plugins_url('../widgets/voice-widget/dist/tw-voice-widget.css', __FILE__));
        }
    }

    /**
     * Render chat widget
     */
    public function render_chat_widget($post_id, $width = null, $height = null, $sticky = true) {
        require plugin_dir_path( __FILE__ ) . 'partials/chat-widget-template.php';
    }

    /**
     * Render voice widget
     */
    public function render_voice_widget($agent_id) {
        require plugin_dir_path( __FILE__ ) . 'partials/voice-widget-template.php';
    }

    /**
     * Adds custom HTML content to the WordPress footer.
     * This function is hooked to 'wp_footer'.
     */
    public function add_global_chat_widget() {
        // Get current post/page ID
        $current_id = get_queried_object_id();
        
        // Check if current page has override settings
        $override_global = get_post_meta($current_id, '_tw_chat_override_global', true);
        
        if ($override_global === '1') {
            // Get page-specific widget
            $widget_id = get_post_meta($current_id, '_tw_chat_selected_widget', true);
            
            // Only render if a widget is selected
            if (!empty($widget_id)) {
                echo $this->render_chat_widget($widget_id, null, null, 1);
            }
        } else {
            // Only show global widget if chat is globally enabled
            if ($this->is_enabled()) {
                // Use global widget
                $global_widget_id = get_option('tw_chat_global_widget_id');
                if (!empty($global_widget_id)) {
                    echo $this->render_chat_widget($global_widget_id, null, null, 1);
                }
            }
        }
    }

    /** 
     * Render chat widget shortcode
     */
    function tw_chat_widget_shortcode($atts) {
        
        // Set up default attributes
        $atts = shortcode_atts(
            [
                'id' => 0, // Default to 0 if no post_id is provided
                'height' => null, // Default to null
                'width' => null
            ],
            $atts,
            'tw_chat_widget'
        );

        // Access the post_id attribute
        $post_id = $atts['id'];
        $width = $atts['width'];
        $height = $atts['height'];

        // get the global widget id
        $global_widget_id = get_option('tw_chat_global_widget_id');

        if ($this->is_enabled() && $global_widget_id == $post_id) {
            return "<p>This chat widget is available in the lower right corner of the screen.</p>";
        }

        // Enqueue scripts only in frontend
        if (!is_admin()) {
            $this->enqueue_chat_widget_scripts();
        }

        // Store rendered component. Pass 0 for non-sticky
        ob_start();
        $this->render_chat_widget($post_id, $width, $height, 0);
        $output = ob_get_clean();

        return $output;
    }
    
    /**
     * Render voice widget shortcode
     */
    function tw_voice_widget_shortcode($atts) {
        
        // Get widget by id
        $post_id = $atts['id'];

        // Get widget by id
        $chat_widget = TW_Chat_Widgets::get_chat_widget_by_id($post_id);

        if (!$chat_widget) {
            return __("<p class=\"tw-chat-widget-not-found\">Chat widget not found.</p>");
        }

        $voice_agent_id = $chat_widget['tw_chat_voice_agent_id'];


        // Enqueue scripts only in frontend
        if (!is_admin()) {
            $this->enqueue_voice_widget_scripts();
        }

        // Store rendered component
        ob_start();
        // Render voice widget
        $this->render_voice_widget($voice_agent_id);
        $output = ob_get_clean();

        return $output;
    }

    /**
     * Registers the REST API endpoints used in the plugin
     * 
    */
    public function register_rest_endpoints() {
        // Chat response endpoint
        register_rest_route('tw-chat-assistant/v1', '/chat-response', [
            'methods' => 'POST',
            'callback' => [ $this, 'handle_chat_response' ],
            'permission_callback' => function () { return true; }
        ]);

        // Create Call Endpoint
        register_rest_route('tw-chat-assistant/v1', '/create-call', [
            'methods' => 'POST',
            'callback' => [ $this, 'handle_create_call' ],
            'permsission_callback' => function () { return true; }
        ]);

        // Test endpoint
        register_rest_route('tw-chat-assistant/v1', '/test', [
            'methods' => ['GET', 'POST'],
            'callback' => [ $this, 'handle_test' ],
            'permission_callback' => function () { return true; }
        ]);
    }

    /**
     * Handles REST API test requests
     */
    public function handle_test($request) {
        TW_Chat_Logger::log(__('+ Test API endpoint request'));
        TW_Chat_Logger::log($request);

        return new WP_REST_Response([
            "message" => "Webhook Test Endpoint"
        ], 200);
    }

    /**
     * Handles REST API create Retell AI call requests
     */
    public function handle_create_call($request) {
        TW_Chat_Logger::log(__('+ Create call API endpoint request'));
        TW_Chat_Logger::log($request);

        // Get Retell AI token
        $token = get_option('tw_chat_retell_key');

        // API Body
        $body = [
            'agent_id' => $request->get_params()['agent_id']
        ];

        // Build API request
        $args = array(
            'method' => 'POST',
            'timeout' => 30,
            'redirection' => 10,
            'httpversion' => '1.1',
            'blocking' => true,
            'headers' => [
                'Authorization' => 'Bearer ' . $token,
                'Content-Type' => 'application/json',
            ],
            'body' => json_encode($body)
        );

        // Send API request
        $response = wp_remote_post('https://api.retellai.com/v2/create-web-call', $args);

        // Check for errors
        if (is_wp_error($response)) {
            TW_Chat_Logger::log($response->get_error_message());
            
            // Get error message
            $message = $response->get_error_message();

            return new WP_REST_Response([
                "message" => "Failed to create call",
                "response" => $message
            ], 500);
        }

        // Log response
        $response_body = wp_remote_retrieve_body($response);
        TW_Chat_Logger::log($response_body);

        // Return response
        return new WP_REST_Response(json_decode($response_body), 200);
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
    
    /* Is string in a comma-separated list
     * Returns a boolean
    */    
    function isInList($needle, $haystack) {
        return stripos(',' . $haystack . ',', ',' . $needle . ',') !== false;
    }

    /**
     * Handles the REST API request for chat responses.
     * Processes the 'messageHistory' and 'message' from POST data.
     * Returns a REST response.
     */
    
    public function handle_chat_response($request) {

        // Log if debugging is enabled
        TW_Chat_Logger::log(__('+ New chat request'));
        
        // Verify nonce
        $nonce = $request->get_header('X-WP-Nonce');
        // if ( !wp_verify_nonce($nonce, 'wp_rest') ) {
        //     TW_Chat_Logger::log(__('Invalid nonce ' . $nonce));
        //     return new WP_Error('forbidden', __('Invalid nonce ' . $nonce), [ 'status' => 403 ]);
        // }

        // check request server
        $request_domain = $_SERVER['HTTP_HOST'];
        $site_url = get_bloginfo('url');
        $parsed_url = parse_url($site_url);
        $server_domain = $parsed_url['host'];

        if ($request_domain != $server_domain) {
            TW_Chat_Logger::log(__('Cross Origin access forbidden'));
            return new WP_Error('no_crossorigin', __('Cross Origin access forbidden'), [ 'status' => 403 ]);
        }

        // Get settings
        $settings = $this->plugin_admin->get_plugin_settings();
        $openai_key = $settings['tw_chat_openai_key'];

        if (empty($openai_key)) {
            TW_Chat_Logger::log(__('Missing OpenAI API key'));
            return new WP_Error('missing_settings', 'The OpenAI API Key is not set.', [ 'status' => 400 ]);
        }

        try {
            // OpenAI API client
            // $client = OpenAI::client($openai_key);
            $client = OpenAI::factory()
                ->withApiKey($openai_key)
            //     // ->withOrganization('your-organization') // default: null
            //     // ->withProject('Your Project') // default: null
            //     // ->withBaseUri('api.openai.com/v1') // default: api.openai.com/v1
            //     // ->withHttpClient($httpClient = new \GuzzleHttp\Client([])) // default: HTTP client found using PSR-18 HTTP Client Discovery
                ->withHttpHeader('OpenAI-Beta', 'assistants=v2')
                ->make();
            $run_id = null;
            $total_tokens = null;

            // Get request parameters
            $params = $request->get_json_params();
            $thread_id = $params['thread_id'] ?? "";
            $message = $params['message'] ?? null;
            $widget_id = $params['widget_id'] ?? null;

            // Check for widget ID
            if (empty($widget_id) || is_null($widget_id)) {
                TW_Chat_Logger::log(__('Missing required parameters'));
                return new WP_Error('missing_params', __('Missing required parameters'), ['status' => 400]);
            } else {
                // Success: Log Widget ID
                TW_Chat_Logger::log(__('Widget ID: ' . $widget_id));
            }

            // Check for message parameter
            if (empty($message) || is_null($message)) {
                return new WP_Error('missing_params', __('Missing required parameters'), ['status' => 400]);
            }

            // Get chat widget info
            $chat_widget = TW_Chat_Widgets::get_chat_widget_by_id($widget_id);
            // $assistant_id = $settings['tw_chat_assistant_id'];

            // Return error if settings are not found
            if (is_null($chat_widget)) {
                return new WP_Error('missing_settings', 'The assistant ID is not set.', ['status' => 400]);
            }

            $assistant_id = $chat_widget['tw_chat_assistant_id'];

            // sanitize and block swear words
            // check moderation setting
            $is_moderation = !empty($settings['tw_chat_is_moderation']);

            if ($is_moderation) {
                // Moderation is enabled
                $sanitize_message = sanitize_text_field($message);
                $clean_message = \ConsoleTVs\Profanity\Builder::blocker($sanitize_message)->filter();

                // Moderation API call
                $moderation_response = $client->moderations()->create([
                    'model' => 'text-moderation-latest',
                    'input' => $clean_message,
                ]);
                
                // Loop moderation responses and checked for flagged status
                foreach ($moderation_response->results as $result) {
                    if ($result->flagged) {
                        // true, return error
                        return new WP_Error('moderation_error', 'Message violates OpenAI Content Policy', ['status' => 400]);
                    } 
                }
            } else{
                // Moderation is not enabled.
                TW_Chat_Logger::log(__('WARNING: Moderation is not enabled.'));
                $clean_message = $message;
            }

            // Create a new thread if none is passed
            if (empty($thread_id) || is_null($thread_id)) {
                TW_Chat_Logger::log(__('New Chat Thread'));
                $run_response = $client->threads()->createAndRun(
                    [
                        'assistant_id' => $assistant_id,
                        'thread' => [
                            'messages' => [
                                [
                                    'role' => 'user',
                                    'content' => $clean_message
                                ],
                            ],
                        ],
                    ],
                );
                $thread_id = $run_response->threadId;
                $run_id = $run_response->id;                
            } else {
                TW_Chat_Logger::log(__('Thread ID: ' . $thread_id));

                // Create a new message
                $message_response = $client->threads()->messages()->create($thread_id, [
                    'role' => 'user',
                    'content' => $clean_message,
                ]);

                $run_response = $client->threads()->runs()->create(
                    threadId: $thread_id, 
                    parameters: [
                        'assistant_id' => $assistant_id,
                    ],
                );
                $run_id = $run_response->id;
                
            }

            // poll for response
            $is_complete = null;
            while(is_null($is_complete)) {

                $run_response = $client->threads()->runs()->retrieve(
                    threadId: $thread_id,
                    runId: $run_id,
                );
                // Get the run status
                $run_status = $run_response->status;

                if ($run_status === 'completed' || $run_status === 'cancelled' || $run_status === 'failed' || $run_status === 'expired') {
                    $completed_response = $run_response;
                    $is_complete = true;

                    $total_tokens = $run_response->usage->totalTokens;
                    TW_Chat_Logger::log(__('RUN COMPLETED'));
                    TW_Chat_Logger::log(__('Total tokens: ' . $total_tokens));
                    break; 
                } elseif ($run_status === 'requires_action') {
                    // Get the tool call info
                    $tool_call = $run_response->requiredAction->submitToolOutputs->toolCalls[0];
                    
                    $name = $tool_call->function->name;
                    $arguments = json_decode($tool_call->function->arguments, true);
                    $tool_output = "";

                    TW_Chat_Logger::log(__('Function called: ' . $name));
                    TW_Chat_Logger::log(__('Arguments:'));
                    TW_Chat_Logger::log($arguments);

                    // Execute desired function call
                    if ($name === 'send_message') {
                        // Send Message Function Call
                        $email_recipients = get_post_meta($widget_id, 'tw_chat_email_recipients', true);
                        // Send email 
                        if (array_key_exists('body', $arguments) && $arguments['body'] !== null) {
                            // $sanitized_email_body = sanitize_text_field($arguments['body']);
                            TW_Chat_Functions::send_message($email_recipients, $chat_widget['tw_chat_widget_name'], $arguments['body']);
                        }

                        // Set tool output
                        $tool_output = "complete";

                    } elseif ($name === 'search_site') {
                        // Search Site Function Call
                        $search_results = [];

                        // Get search term from argument
                        if (array_key_exists('search_term', $arguments) && $arguments['search_term'] !== null) {
                            $search_results = TW_Chat_Functions::search_site($arguments['search_term']);
                        }

                        // Set tool output
                        $tool_output = json_encode($search_results);
                    } elseif ($name === 'get_posts') {
                        // Get Posts Function Call
                        $posts = [];

                        // Variables for aruments
                        $post_type = 'post';
                        $order = 'DESC';
                        $number_of_posts = 5;
                        $orderby = 'date';

                        // Get function parameters from tool call argument
                        if (array_key_exists('post_type', $arguments) && $arguments['post_type'] !== null) {
                            $post_type = $arguments['post_type'];
                        }
                        if (array_key_exists('order', $arguments) && $arguments['order'] !== null) {
                            $order = $arguments['order'];
                        }
                        if (array_key_exists('number_of_posts', $arguments) && $arguments['number_of_posts'] !== null) {
                            $number_of_posts = $arguments['number_of_posts'];
                        }
                        if (array_key_exists('orderby', $arguments) && $arguments['orderby'] !== null) {
                            $orderby = $arguments['orderby'];
                        }

                        $posts = TW_Chat_Functions::get_custom_posts($post_type, $order, $orderby, $number_of_posts);

                        // Set tool output
                        $tool_output = json_encode($posts);
                    } elseif ($name === 'webhook') {
                        // Webhook Function Call
                        $param_name = "post_data";

                        // Get post data from argument
                        if (array_key_exists($param_name, $arguments) && $arguments[$param_name] !== null) {
                            // Get the webook url and header
                            $webhook_header = get_post_meta($widget_id, 'tw_chat_webhook_header', true);
                            $webhook_address = get_post_meta($widget_id, 'tw_chat_webhook_address', true);

                            TW_Chat_Logger::log(__('Post Information'));
                            TW_Chat_Logger::log($webhook_address);
                            TW_Chat_Logger::log($webhook_header);

                            // Arguments for the wp_remote_post function
                            $args = array(
                                'body'    => json_decode($arguments[$param_name], true),
                                'timeout' => '3', // Timeout in seconds
                            );

                            if ($webhook_header) {
                                $args['headers'] = json_decode($webhook_header, true);
                            }

                            // Make the POST request
                            $response = wp_remote_post($webhook_address, $args);

                            // Check for errors
                            if (is_wp_error($response)) {
                                TW_Chat_Logger::log(__('Error sending data'));
                                $tool_output = "error";
                            } else {
                                TW_Chat_Logger::log(__('Data sent successfully'));
                                $tool_output = "complete";
                            }
                            
                        }

                    } elseif ( $name === 'wp_action' ) { 
                        // Call WordPress Action
                        // Enables developers to create and call custom actions from assistant
                        $action_output = "";
                        $valid_arguments = true;
                        $action_arguments = [];
                        $action_type = 'action';
                        $action_name = '';

                        $allowed_actions = $settings['tw_chat_allowed_actions'];

                        // Get function parameters from tool call argument
                        if (array_key_exists('action_name', $arguments) && $arguments['action_name'] !== null) {
                            $action_name = $arguments["action_name"];

                            // Check allowed actions
                            if ($this->isInList($action_name, $allowed_actions) === false) {
                                // Action not found in list
                                $valid_arguments = false;
                                TW_Chat_Logger::log(__("Action ** " . $action_name . " ** not found in list"));
                            }

                        } else {
                            TW_Chat_Logger::log(__("Missing action_name call argument"));
                            $valid_arguments = false;
                        }

                        if (array_key_exists('action_arguments', $arguments) && $arguments['action_arguments'] !== null) {
                            $action_arguments = json_decode($arguments["action_arguments"]);
                        } else {
                            TW_Chat_Logger::log(__("Missing action_arguments call argument"));
                            $valid_arguments = false;
                        }

                        if (array_key_exists('action_type', $arguments) && $arguments['action_type'] !== null) {
                            if (strtolower($arguments["action_type"]) === 'filter') {
                                $action_type = $arguments["action_type"];
                            }
                        }

                        if ($valid_arguments) {

                            if ($action_type === 'filter') {
                                // Call the filter hook
                                TW_Chat_Logger::log(__("Run filter: " . $action_name));
                                $action_output = apply_filters($action_name, ...$action_arguments);
                            } else {
                                // Call the action
                                TW_Chat_Logger::log(__("Run action: " . $action_name));
                                // Start output buffering
                                ob_start();

                                do_action($action_name, ...$action_arguments);

                                // Get the output
                                $action_output = ob_get_clean();
                            }

                            TW_Chat_Logger::log(__("Result: " . $action_output));
                        }

                        $tool_output = $action_output;

                    } else {
                        TW_Chat_Logger::log(__('Unknown Function Request: ' . $name));
                        // Default tool output
                        $tool_output = "complete";
                    }

                    // Submit tool response
                    $response = $client->threads()->runs()->submitToolOutputs(
                        threadId: $thread_id,
                        runId: $run_id,
                        parameters: [
                            'tool_outputs' => [
                                [
                                    'tool_call_id' => $tool_call->id,
                                    'output' => $tool_output,
                                ],
                            ],
                        ]
                    );
                    
                    // Wait for 1 seconds before polling run again
                    sleep(1);
                } else {
                    // Wait for 1 seconds before polling run again
                    sleep(1);
                }
            }

            // Get latest message
            $latest_message = $client->threads()->messages()->list($thread_id, [
                'limit' => 1,
            ]);

            // Return response text and thread id
            $messages_response = [
                'message' => $latest_message->data[0]->content[0]->text->value,
                'thread_id' => $thread_id
            ];

            return new WP_REST_Response($messages_response, 200);
        } catch (Exception $e) {
            return new WP_Error('api_error', 'Error ' . $e->getMessage(), ['status' => 400]);
        }
    }
}
