<?php
/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */

require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-tw-chat-widgets.php';
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-tw-chat-functions.php';
// require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-tw-chat-logger.php';
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-tw-chat-meta.php';
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-tw-chat-prompt-manager.php';
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-tw-chat-db.php';
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-tw-chat-message-logger.php';
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-tw-chat-system-logger.php';
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-tw-chat-log-cleanup.php';
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-tw-chat-style-settings.php';

require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-tw-chat-admin.php';
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-tw-chat-logs-admin.php';
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-tw-chat-styles-admin.php';

class TW_Chat_Plugin {

    private TW_Chat_Admin $plugin_admin;

    /**
     * Constructor for the TW_Chat_Plugin class.
     */
    public function __construct() {
        // Initialize database
        TW_Chat_DB::initialize();
        
        // Initialize log cleanup
        TW_Chat_Log_Cleanup::init();

        // Seed default style values into wp_options
        TW_Chat_Style_Settings::seed_defaults();
        
        $this->setup_admin();
        $this->setup_meta();
        $this->setup_actions();
        $this->setup_functions();
    }

    public function setup_admin() {
        /**
		 * The class responsible for defining all actions that occur in the admin area.
		 */
		$this->plugin_admin = new TW_Chat_Admin();
		new TW_Chat_Logs_Admin();
		new TW_Chat_Styles_Admin();
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
    }

    /**
     * Setup functions
     */
    public function setup_functions() {
        new TW_Chat_Functions();
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
                // wp_enqueue_script('tw-chat-js', plugins_url('../widgets/chat-widget/dist/tw-chat-widget.iife.js', __FILE__), [], '1.0.0', true);
                // wp_enqueue_style('tw-chat-css', plugins_url('../widgets/chat-widget/dist/style.css', __FILE__));
                wp_enqueue_script('tw-chat-js', plugins_url('../widgets/chat-widget/dist/tw-chat.js', __FILE__), [], '1.0.0', true);
                wp_enqueue_style('tw-chat-css', plugins_url('../widgets/chat-widget/dist/style.css', __FILE__));

                // Inject widget CSS variables from stored settings
                $widget_css = TW_Chat_Style_Settings::generate_css('chat');
                if (!empty($widget_css)) {
                    wp_add_inline_style('tw-chat-css', $widget_css);
                }

                // Get current post/page ID
                $current_id = get_queried_object_id();

                // Get plugin settings
                $settings = $this->plugin_admin->get_plugin_settings();
            
                // Check if current page has override settings
                $chat_button_text = $settings["tw_chat_button_text"];
            
                if ($override_global === '1') {
                    $chat_button_text = get_post_meta($current_id, '_tw_chat_button_text', true);
                }

                // Localize script with plugin settings
                $localizeData = [
                    "api_url" => esc_url_raw(rest_url('tw-chat/v1/chat')),
                    'nonce' => wp_create_nonce('wp_rest'),
                    "tw_chat_button_text" => $chat_button_text,
                    "tw_chat_max_characters" => $settings["tw_chat_max_characters"],
                    "tw_chat_send_button_image" => TW_Chat_Style_Settings::get_send_button_image_url(),
                    "tw_chat_bubble_image" => TW_Chat_Style_Settings::get_bubble_image_url(),
                    "tw_chat_bubble_text_tooltip" => TW_Chat_Style_Settings::is_bubble_text_tooltip() ? '1' : '0',
                ];

                wp_localize_script('tw-chat-js', 'twChatPluginSettings', $localizeData);

                // Localize all widget settings
                $all_widgets = TW_Chat_Widgets::get_chat_widgets();
                $widget_settings = [];
                foreach ($all_widgets as $widget) {
                    $settings = [];
                    foreach ($widget['meta'] as $key => $value) {
                        $settings[$key] = $value[0];
                    }
                    $settings['tw_chat_widget_name'] = $widget['name'];
                    $widget_settings[$widget['id']] = $settings;
                }

                wp_localize_script('tw-chat-js', 'twChatWidgetSettings', $widget_settings);

                // Localize initial messages for each widget
                $initial_messages = [];
                foreach ($widget_settings as $id => $settings) {
                    $initial_messages[$id] = [];
                    if (!empty($settings['tw_chat_welcome_message'])) {
                        $initial_messages[$id][] = ['role' => 'assistant', 'content' => $settings['tw_chat_welcome_message']];
                    }
                }

                wp_localize_script('tw-chat-js', 'twChatMessages', $initial_messages);
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

            // Inject widget CSS variables from stored settings
            $widget_css = TW_Chat_Style_Settings::generate_css('voice');
            if (!empty($widget_css)) {
                wp_add_inline_style('tw-voice-widget-css', $widget_css);
            }

            // Localize voice widget settings
            wp_localize_script('tw-voice-widget-js', 'twVoicePluginSettings', array(
                'tw_voice_button_icon_image' => TW_Chat_Style_Settings::get_voice_button_icon_image_url(),
            ));
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

        // Enqueue scripts directly, bypassing the global check
        if (!is_admin()) {
            // Directly enqueue the scripts without checking global settings
            wp_enqueue_script('tw-chat-js', plugins_url('../widgets/chat-widget/dist/tw-chat.js', __FILE__), [], '1.0.0', true);
            wp_enqueue_style('tw-chat-css', plugins_url('../widgets/chat-widget/dist/style.css', __FILE__));

            // Inject widget CSS variables from stored settings
            $widget_css = TW_Chat_Style_Settings::generate_css('chat');
            if (!empty($widget_css)) {
                wp_add_inline_style('tw-chat-css', $widget_css);
            }
            
            // Localize script with plugin settings
            if (!wp_script_is('tw-chat-js', 'localized')) {
                $settings = $this->plugin_admin->get_plugin_settings();
                $localizeData = [
                    "api_url" => esc_url_raw(rest_url('tw-chat/v1/chat')),
                    'nonce' => wp_create_nonce('wp_rest'),
                    "tw_chat_max_characters" => $settings["tw_chat_max_characters"],
                    "tw_chat_send_button_image" => TW_Chat_Style_Settings::get_send_button_image_url(),
                    "tw_chat_bubble_image" => TW_Chat_Style_Settings::get_bubble_image_url(),
                    "tw_chat_bubble_text_tooltip" => TW_Chat_Style_Settings::is_bubble_text_tooltip() ? '1' : '0',
                ];
                
                wp_localize_script('tw-chat-js', 'twChatPluginSettings', $localizeData);
                
                // Localize all widget settings
                $all_widgets = TW_Chat_Widgets::get_chat_widgets();
                $widget_settings = [];
                foreach ($all_widgets as $widget) {
                    $settings = [];
                    foreach ($widget['meta'] as $key => $value) {
                        $settings[$key] = $value[0];
                    }
                    $settings['tw_chat_widget_name'] = $widget['name'];
                    $widget_settings[$widget['id']] = $settings;
                }
                
                wp_localize_script('tw-chat-js', 'twChatWidgetSettings', $widget_settings);
                
                // Localize initial messages for each widget
                $initial_messages = [];
                foreach ($widget_settings as $id => $settings) {
                    $initial_messages[$id] = [];
                    if (!empty($settings['tw_chat_welcome_message'])) {
                        $initial_messages[$id][] = ['role' => 'assistant', 'content' => $settings['tw_chat_welcome_message']];
                    }
                }
                
                wp_localize_script('tw-chat-js', 'twChatMessages', $initial_messages);
            }
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
        register_rest_route('tw-chat/v1', '/chat', [
            'methods' => 'POST',
            'callback' => [ $this, 'handle_chat_response' ],
            'permission_callback' => function () { return true; }
        ]);

        // Create Call Endpoint
        register_rest_route('tw-chat/v1', '/create-call', [
            'methods' => 'POST',
            'callback' => [ $this, 'handle_create_call' ],
            'permission_callback' => function () { return true; }
        ]);
    }


    /**
     * Handles REST API create Retell AI call requests
     */
    public function handle_create_call($request) {
        TW_Chat_System_Logger::log_debug(__('+ Create call API endpoint request'));
        TW_Chat_System_Logger::log_debug($request);

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
            TW_Chat_System_Logger::log_debug($response->get_error_message());
            
            // Get error message
            $message = $response->get_error_message();

            return new WP_REST_Response([
                "message" => "Failed to create call",
                "response" => $message
            ], 500);
        }

        // Log response
        $response_body = wp_remote_retrieve_body($response);
        TW_Chat_System_Logger::log_debug($response_body);

        // Return response
        return new WP_REST_Response(json_decode($response_body), 200);
    }
    
    /* Is string in a comma-separated list
     * Returns a boolean
    */    
    function isInList($needle, $haystack) {
        return stripos(',' . $haystack . ',', ',' . $needle . ',') !== false;
    }

    /**
     * Get client IP address with proxy support
     * 
     * @return string|null
     */
    private function get_client_ip() {
        $ip_keys = array(
            'HTTP_CF_CONNECTING_IP', // Cloudflare
            'HTTP_X_FORWARDED_FOR',
            'HTTP_X_REAL_IP',
            'REMOTE_ADDR'
        );
        
        foreach ($ip_keys as $key) {
            if (isset($_SERVER[$key]) && !empty($_SERVER[$key])) {
                $ip = $_SERVER[$key];
                
                // Handle comma-separated IPs (X-Forwarded-For can have multiple)
                if (strpos($ip, ',') !== false) {
                    $ip_list = explode(',', $ip);
                    $ip = trim($ip_list[0]);
                }
                
                // Validate IP
                if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) {
                    return $ip;
                }
            }
        }
        
        // Fallback to REMOTE_ADDR even if it's private/reserved
        return isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : null;
    }

    /**
     * Handles the REST API request for chat responses.
     * Processes the 'messageHistory' and 'message' from POST data.
     * Returns a REST response.
     */
    
    public function handle_chat_response($request) {
        try {
            // Get OpenAI Key
            $openai_key = get_option('tw_chat_openai_key');

            // Get global settings
            $settings = $this->plugin_admin->get_plugin_settings();

            if (empty($openai_key)) {
                TW_Chat_System_Logger::log_debug(__("OpenAI API key is not set."));
                return new WP_Error('api_key_not_set', 'OpenAI API key is not set.', ['status' => 500]);
            }

            // Get Post Body
            $params = $request->get_json_params();
            $widget_id = isset($params['widget_id']) ? absint($params['widget_id']) : null;
            $messages = $params['messages'] ?? [];
            $conversation_id = isset($params['conversation_id']) ? sanitize_text_field($params['conversation_id']) : uniqid('conv_', true);
            
            // Capture source URL and IP address
            $source_url = isset($_SERVER['HTTP_REFERER']) ? esc_url_raw($_SERVER['HTTP_REFERER']) : null;
            $ip_address = $this->get_client_ip();

            if (empty($widget_id) || empty($messages)) {
                return new WP_Error('bad_request', 'Missing widget_id or messages.', ['status' => 400]);
            }

            // Log request
            TW_Chat_System_Logger::log_debug(__("Chat Request for widget: " . $widget_id));

            // Get widget settings
            $chat_widget = TW_Chat_Widgets::get_chat_widget_by_id($widget_id);
            if (!$chat_widget) {
                return new WP_Error('not_found', 'Chat widget not found.', ['status' => 404]);
            }
            
            // Get system prompt and model
            $system_prompt = sanitize_textarea_field($chat_widget['tw_chat_system_prompt']);
            $model = !empty($chat_widget['tw_chat_ai_model']) ? sanitize_text_field($chat_widget['tw_chat_ai_model']) : 'gpt-4o';
            $use_site_search = !empty($chat_widget['tw_chat_use_site_search']);

            // Append site search prompt if enabled
            if ($use_site_search) {
                // Start with base site search prompt
                $site_search_prompt = TW_Chat_Prompt_Manager::get_site_search_prompt();
                
                // Get excluded post types
                $exclude_links = !empty($chat_widget['tw_chat_exclude_links']) ? $chat_widget['tw_chat_exclude_links'] : '';
                $excluded_post_types = !empty($exclude_links) ? array_map('trim', explode(',', $exclude_links)) : array();
                
                // Add link inclusion or exclusion instructions
                if (!empty($excluded_post_types)) {
                    // If there are excluded post types, add both inclusion and exclusion prompts
                    $site_search_prompt .= TW_Chat_Prompt_Manager::get_link_inclusion_prompt(3);
                    $site_search_prompt .= TW_Chat_Prompt_Manager::get_link_exclusion_prompt($excluded_post_types);
                } else {
                    // No exclusions, just add standard link inclusion
                    $site_search_prompt .= TW_Chat_Prompt_Manager::get_link_inclusion_prompt(3);
                }
                
                // Append to system prompt
                $system_prompt = !empty($system_prompt) ? $system_prompt . "\n\n" . $site_search_prompt : $site_search_prompt;

                // Log site search prompt
                TW_Chat_System_Logger::log_debug(__("Site Search Prompt: " . $site_search_prompt));
            }

            // Append webhook schema prompt if defined
            $webhook_schema = !empty($chat_widget['tw_chat_webhook_schema']) ? $chat_widget['tw_chat_webhook_schema'] : '';
            if (!empty($webhook_schema)) {
                $webhook_schema_prompt = TW_Chat_Prompt_Manager::get_webhook_schema_prompt($webhook_schema);
                if (!empty($webhook_schema_prompt)) {
                    $system_prompt = !empty($system_prompt) ? $system_prompt . "\n\n" . $webhook_schema_prompt : $webhook_schema_prompt;
                }
            }

            // Get API Base URI
            $api_base_uri = !empty($settings['tw_chat_api_base_uri']) ? sanitize_text_field($settings['tw_chat_api_base_uri']) : 'api.openai.com/v1';

            // Init OpenAI Client
            $client = OpenAI::factory()
                ->withApiKey($openai_key)
                ->withBaseUri($api_base_uri) // default: api.openai.com/v1
                ->withHttpClient($httpClient = new \GuzzleHttp\Client([])) // default: HTTP client found using PSR-18 HTTP Client Discovery
                ->make();

            // Prepare messages for API
            $api_messages = [];
            // Add system prompt
            if (!empty($system_prompt)) {
                $api_messages[] = ['role' => 'system', 'content' => $system_prompt];
            }

            // Check moderation setting 
            $is_moderation = !empty($settings['tw_chat_is_moderation']);

            if ($is_moderation) {
                // Moderation is enabled

                // Get last message
                $last_message_key = array_key_last($messages);
                
                // Sanitize message
                $sanitize_message = sanitize_text_field($messages[$last_message_key]['content']);
                // Clean message
                $clean_message = \ConsoleTVs\Profanity\Builder::blocker($sanitize_message)->filter();

                // Moderation API call
                $moderation_response = $client->moderations()->create([
                    'model' => 'omni-moderation-latest',
                    'input' => $clean_message,
                ]);
                
                // Loop moderation responses and checked for flagged status
                foreach ($moderation_response->results as $result) {
                    if ($result->flagged) {
                        // true, return error
                        return new WP_Error('moderation_error', 'Message violates OpenAI Content Policy', ['status' => 400]);
                    } 
                }
                
                // Update last user message with cleaned message
                $messages[$last_message_key]['content'] = $clean_message;
            }

            // Loop through messages
            foreach ($messages as $message) {
                // Sanitize role and content before sending to the API
                $sanitized_role = sanitize_text_field($message['role']);
                $sanitized_content = isset($message['content']) ? sanitize_textarea_field($message['content']) : '';                

                // Add message to API messages
                $api_messages[] = ['role' => $sanitized_role, 'content' => $sanitized_content];

                // Log user messages to database
                if ($sanitized_role === 'user') {
                    TW_Chat_Message_Logger::log_message(
                        $conversation_id,
                        $widget_id,
                        'user',
                        $sanitized_content,
                        0,
                        0,
                        $source_url,
                        $ip_address
                    );
                }
            }

            // Create a chat completion
            $response = $client->chat()->create([
                'model' => $model,
                'messages' => $api_messages,
                'functions' => TW_Chat_Functions::get_function_definitions($widget_id),
                'function_call' => 'auto',
            ]);

            // Initialize token counters
            $input_tokens = 0;
            $output_tokens = 0;

            // Check for function call
            $message = $response->choices[0]->message;

            if (isset($message->functionCall)) {
                $function_name = $message->functionCall->name;
                $arguments = json_decode($message->functionCall->arguments, true);

                // Log function call
                TW_Chat_System_Logger::log_debug(__('+ Function call: ' . $function_name));
                TW_Chat_System_Logger::log_debug(__('+ Function arguments: ' . json_encode($arguments)));

                // Log tool call to message history (tool name and params)
                $tool_message = 'Tool: ' . $function_name . ' | Params: ' . json_encode($arguments);
                TW_Chat_Message_Logger::log_message(
                    $conversation_id,
                    $widget_id,
                    'tool',
                    $tool_message,
                    0,
                    0,
                    $source_url,
                    $ip_address
                );

                // Run function
                if ($function_name === 'search_site') {
                    // Sanitize search term
                    $search_term = sanitize_text_field($arguments['search_term']);

                    // Search site
                    $function_result = TW_Chat_Functions::search_site($search_term, $widget_id);

                    // Log function results
                    TW_Chat_System_Logger::log_debug(__('+ Number of search results: ' . count($function_result)));
                    
                    // Handle empty results
                    if (empty($function_result)) {
                        $function_result = array(
                            'message' => 'No results found for the search term: ' . $search_term
                        );
                    }
                
                } elseif ($function_name === 'webhook') {
                    // Webhook function call
                    $function_result = TW_Chat_Functions::webhook($arguments, $widget_id);
                } elseif ($function_name === 'wp_action') {
                    // WP Action function call
                    $allowed_actions = $settings['tw_chat_allowed_actions'];

                    // Get function parameters from tool call argument
                    if (array_key_exists('action_name', $arguments) && $arguments['action_name'] !== null) {
                        $action_name = $arguments["action_name"];

                        // Check allowed actions
                        if ($this->isInList($action_name, $allowed_actions) === false) {
                            // Action not found in list
                            $function_result = "Invalid arguments for function call";
                            TW_Chat_System_Logger::log_debug(__("Action ** " . $action_name . " ** not found in list"));
                        } else {
                            $function_result = TW_Chat_Functions::wp_action($arguments, $widget_id);
                        }

                    } else {
                        TW_Chat_System_Logger::log_debug(__("Missing action_name call argument"));
                        $function_result = "Invalid arguments for function call";
                    }
                }
                
                // If function result is set (should always be set after function execution)
                if (isset($function_result)) {
                    // Log tool result to system log
                    TW_Chat_System_Logger::log_info(
                        'Tool call result: ' . $function_name,
                        array(
                            'conversation_id' => $conversation_id,
                            'tool_name' => $function_name,
                            'parameters' => $arguments,
                            'result' => $function_result
                        ),
                        $widget_id
                    );

                    // Add new 'function' role message including function result
                    $api_messages[] = [
                        'role' => 'assistant',
                        'content' => null,
                        'function_call' => [
                            'name' => $function_name,
                            'arguments' => json_encode($arguments),
                        ]
                    ];

                    // Add function result
                    $api_messages[] = [
                        'role' => 'function',
                        'name' => $function_name,
                        'content' => json_encode($function_result),
                    ];

                    // Send messages + function result back for natural language final reply
                    $finalResponse = $client->chat()->create([
                        'model' => $model,
                        'messages' => $api_messages,
                    ]);
                    
                    // Get the response message
                    $message_content = $finalResponse->choices[0]->message->content;
                    
                    // Extract token usage from final response
                    if (isset($finalResponse->usage)) {
                        $input_tokens = $finalResponse->usage->promptTokens ?? 0;
                        $output_tokens = $finalResponse->usage->completionTokens ?? 0;
                    }
                } else {
                    // No function result to return
                    // Output the message content
                    $message_content = $message->content;
                    
                    // Extract token usage from initial response
                    if (isset($response->usage)) {
                        $input_tokens = $response->usage->promptTokens ?? 0;
                        $output_tokens = $response->usage->completionTokens ?? 0;
                    }
                }
                
            } else {
                // No function call, just output reply
                $message_content = $message->content;
                
                // Extract token usage from response
                if (isset($response->usage)) {
                    $input_tokens = $response->usage->promptTokens ?? 0;
                    $output_tokens = $response->usage->completionTokens ?? 0;
                }
            }

            // Log assistant message to database
            TW_Chat_Message_Logger::log_message(
                $conversation_id,
                $widget_id,
                'assistant',
                $message_content,
                $input_tokens,
                $output_tokens,
                $source_url,
                $ip_address
            );

            // Log the response
            TW_Chat_System_Logger::log_debug(__('+ Chat Response: ' . $message_content));

            return new WP_REST_Response(['message' => $message_content], 200);

        } catch (Exception $e) {
            TW_Chat_System_Logger::log_debug(__('+ API Error: ' . $e->getMessage()));
            return new WP_Error('api_error', 'Error: ' . $e->getMessage(), ['status' => 500]);
        }
    }

}
