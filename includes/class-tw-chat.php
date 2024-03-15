<?php
/**
 * Define the functionality of the plugin.
 *
 */
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-tw-chat-widgets.php';
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-tw-chat-functions.php';
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-tw-chat-logger.php';

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
        $this->setup_actions();
    }

    public function setup_admin() {
        /**
		 * The class responsible for defining all actions that occur in the admin area.
		 */
		$this->plugin_admin = new TW_Chat_Admin();
    }

    public function setup_actions() {
        add_action('init', [$this, 'register_chat_widget_post_type']);
        add_action('wp_enqueue_scripts', [$this, 'enqueue_scripts']);
        add_action('wp_footer', [$this, 'add_footer_html']);
        add_action('rest_api_init', [$this, 'register_chat_response_endpoint']);
        add_shortcode('tw_chat_widget', [$this, 'tw_chat_widget_shortcode']);
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
            'show_in_menu' => true, // This will hide it from the admin menu
        ];
        register_post_type('chat_widgets', $args);
    }

    /**
     * Enqueues additional scripts in the footer of the page.
     * This function is hooked to 'wp_enqueue_scripts'.
     */
    public function enqueue_scripts() {    
        if (!is_admin()) {
            wp_enqueue_script('tw-chat-js', plugins_url('../component/dist/tw-chat.js', __FILE__), [], '1.0.0', true);
            wp_enqueue_style('tw-chat-css', plugins_url('../component/dist/style.css', __FILE__));

            // Localize script with plugin settings
            $settings = $this->plugin_admin->get_plugin_settings();
            $localizeData = [
                "root" => esc_url_raw( rest_url() ),
                'nonce' => wp_create_nonce('wp_rest'),
                "tw_chat_button_text" => $settings["tw_chat_button_text"],
                "tw_chat_disclaimer" => $settings["tw_chat_disclaimer"],
                "tw_chat_error_message" => $settings["tw_chat_error_message"],
                "tw_chat_assistant_name" => $settings["tw_chat_assistant_name"],       
                "tw_chat_max_characters" => $settings["tw_chat_max_characters"],
            ];

            wp_localize_script('tw-chat-js', 'twChatPluginSettings', $localizeData);
        }
    }

    /**
     * Render component
     */
    public function render_component($post_id, $width = null, $height = null, $sticky = true) {
        require plugin_dir_path( __FILE__ ) . 'partials/chat-widget-template.php';
    }

    /**
     * Adds custom HTML content to the WordPress footer.
     * This function is hooked to 'wp_footer'.
     */
    public function add_footer_html() {
        // Check to see if chat widget is enabled
        if ($this->is_enabled()) {
            // get the global widget id
            $global_widget_id = get_option('tw_chat_global_widget_id');

            // Render component with post id and sticky 
            echo $this->render_component($global_widget_id, null, null, 1);
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

        // Do not load scripts in admin
        if (!is_admin()) {
            $this->enqueue_scripts();
        }

        // Store rendered component. Pass 0 for non-sticky
        ob_start();
        $this->render_component($post_id, $width, $height, 0);
        $output = ob_get_clean();

        return $output;
    }
    
   
    /**
     * Registers the REST API endpoint for chat responses.
     * Defines the URL and handler for the 'chat-response' endpoint.
     */
    public function register_chat_response_endpoint() {
        register_rest_route('tw-chat-assistant/v1', '/chat-response', [
            'methods' => 'POST',
            'callback' => [ $this, 'handle_chat_response' ],
            'permission_callback' => function () { return true; }
        ]);
    }

    /**
     * Handles the REST API request for chat responses.
     * Processes the 'messageHistory' and 'message' from POST data.
     * Returns a REST response.
     */
    public function handle_chat_response($request) {

        // Log
        // TW_Chat_Logger::log('New chat request');

        // Verify nonce
        $nonce = $request->get_header('X-WP-Nonce');
        if ( !wp_verify_nonce($nonce, 'wp_rest') ) {
            return new WP_Error('forbidden', __('Invalid nonce ' . $nonce), [ 'status' => 403 ]);
        }

        // check request server
        $request_domain = $_SERVER['HTTP_HOST'];
        $site_url = get_bloginfo('url');
        $parsed_url = parse_url($site_url);
        $server_domain = $parsed_url['host'];

        if ($request_domain != $server_domain) {
            return new WP_Error('no_crossorigin', __('Cross Origin access forbidden'), [ 'status' => 403 ]);
        }

        // Get settings
        $settings = $this->plugin_admin->get_plugin_settings();
        $openai_key = $settings['tw_chat_openai_key'];

        if (empty($openai_key)) {
            return new WP_Error('missing_settings', 'The OpenAI API Key is not set.', [ 'status' => 400 ]);
        }

        try {
            // OpenAI API client
            $client = OpenAI::client($openai_key);
            $run_id = null;

            // Get request parameters
            $params = $request->get_json_params();
            $thread_id = $params['thread_id'] ?? "";
            $message = $params['message'] ?? null;
            $widget_id = $params['widget_id'] ?? null;

            // Check for widget ID
            if (empty($widget_id) || is_null($widget_id)) {
                return new WP_Error('missing_params', __('Missing required parameters'), ['status' => 400]);
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

            // Create a new thread if none is passed
            if (empty($thread_id) || is_null($thread_id)) {
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
                // Get the status
                $run_status = $run_response->status;

                if ($run_status === 'completed' || $run_status === 'cancelled' || $run_status === 'failed' || $run_status === 'expired') {
                    $completed_response = $run_response;
                    $is_complete = true;
                    break; 
                } elseif ($run_status === 'requires_action') {
                    // Get the tool call info
                    $tool_call = $run_response->requiredAction->submitToolOutputs->toolCalls[0];
                    
                    $name = $tool_call->function->name;
                    $arguments = json_decode($tool_call->function->arguments, true);
                    $tool_output = "";

                    TW_Chat_Logger::log('Function called: ' . $name);
                    TW_Chat_Logger::log('Arguments:');
                    TW_Chat_Logger::log($arguments);

                    // Execute desired function call
                    if ($name === 'send_message') {
                        
                        $email_recipients = get_post_meta($widget_id, 'tw_chat_email_recipients', true);
                        // Send email 
                        if (array_key_exists('body', $arguments) && $arguments['body'] !== null) {
                            $sanitized_email_body = sanitize_text_field($arguments['body']);
                            TW_Chat_Functions::send_message($email_recipients, $chat_widget['tw_chat_widget_name'], $sanitized_email_body);
                        }

                        // Set tool output
                        $tool_output = "complete";

                    } elseif ($name === 'search_site') {

                        $search_results = [];

                        // Get search term from argument
                        if (array_key_exists('search_term', $arguments) && $arguments['search_term'] !== null) {
                            $search_results = TW_Chat_Functions::search_site($arguments['search_term']);
                        }

                        // Set tool output
                        $tool_output = json_encode($search_results);
                    } elseif ($name === 'webhook') {
                        $param_name = "post_data";

                        // Get post data from argument
                        if (array_key_exists($param_name, $arguments) && $arguments[$param_name] !== null) {
                            // Get the webook url and header
                            $webhook_header = get_post_meta($widget_id, 'tw_chat_webhook_header', true);
                            $webhook_address = get_post_meta($widget_id, 'tw_chat_webhook_address', true);


                            // Arguments for the wp_remote_post function
                            $args = array(
                                'body'    => $post_data,
                                'headers' => json_decode($webhook_header),
                                'timeout' => '3', // Timeout in seconds
                            );

                            // Make the POST request
                            $response = wp_remote_post($webhook_address, $args);

                            // Check for errors
                            if (is_wp_error($response)) {
                                $error_message = $response->get_error_message();
                                echo "Something went wrong: $error_message";
                            } else {
                                echo 'Response:<pre>';
                                print_r($response);
                                echo '</pre>';
                            }
                            
                        }

                    } else {
                        TW_Chat_Logger::log('Unknown Function Request: ' . $name);
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