<?php
/**
 * Define the functionality of the plugin.
 *
 */
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-tw-chat-admin.php';

class TW_Chat_Plugin {

    private TW_Chat_Admin $plugin_admin;

    /**
     * Constructor for the TW_Chat_Plugin class.
     */
    public function __construct() {
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
        add_action('init', array($this, 'register_chat_widget_post_type'));
        add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'));
        add_action('wp_footer', array($this, 'add_footer_html'));
        add_action('rest_api_init', array($this, 'register_chat_response_endpoint'));
    }

    /**
     * Register Chat Widget Post Type
     */
    public function register_chat_widget_post_type() {
        $args = array(
            'public' => true,
            'label'  => 'Chat Widgets',
            'supports' => array('title', 'editor'),
            'show_in_menu' => true, // This will hide it from the admin menu
        );
        register_post_type('chat_widgets', $args);
    }

    /** 
     * Return is_enabled setting
     */
    public function is_enabled() {
        $is_enabled = !empty(get_option('tw_chat_is_enabled'));
        return $is_enabled;
    }

    /**
     * Enqueues additional scripts in the footer of the page.
     * This function is hooked to 'wp_enqueue_scripts'.
     */
    public function enqueue_scripts() {
        // Check to see if chat widget is enabled
        if ($this->is_enabled()) {
            wp_enqueue_script('tw-chat-js', plugins_url('../component/dist/tw-chat.js', __FILE__), array(), '1.0.0', true);
            wp_enqueue_style('tw-chat-css', plugins_url('../component/dist/style.css', __FILE__));

            // Localize script with plugin settings
            $settings = $this->plugin_admin->get_plugin_settings();
            $dataArray = [
                "root" => esc_url_raw( rest_url() ),
                'nonce' => wp_create_nonce('wp_rest'),
                "tw_chat_button_text" => $settings["tw_chat_button_text"],
                "tw_chat_disclaimer" => $settings["tw_chat_disclaimer"],
                "tw_chat_error_message" => $settings["tw_chat_error_message"],
                "tw_chat_assistant_name" => $settings["tw_chat_assistant_name"],       
                "tw_chat_max_characters" => $settings["tw_chat_max_characters"],
                "tw_chat_widgets" => $this->plugin_admin->get_chat_widget_ids(), 
            ];
            
            wp_localize_script('tw-chat-js', 'twChatSettings', $dataArray);
        }
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
            $chat_widget = $this->plugin_admin->get_chat_widget_by_id($global_widget_id);

            $outputHtml = '<div id="tw-chat-component" data-chat-widget="' . $global_widget_id . '" data-chat-greeting="' . $chat_widget['tw_chat_greeting'] .  '"></div>';
            echo $outputHtml;
        }
    }

    /**
     * Registers the REST API endpoint for chat responses.
     * Defines the URL and handler for the 'chat-response' endpoint.
     */
    public function register_chat_response_endpoint() {
        register_rest_route('tw-chat-assistant/v1', '/chat-response', array(
            'methods' => 'POST',
            'callback' => array($this, 'handle_chat_response'),
            'permission_callback' => function () { return true; }
        ));
    }

    /**
     * Handles the REST API request for chat responses.
     * Processes the 'messageHistory' and 'message' from POST data.
     * Returns a REST response.
     */
    public function handle_chat_response($request) {

        // Verify nonce
        $nonce = $request->get_header('X-WP-Nonce');
        if ( !wp_verify_nonce($nonce, 'wp_rest') ) {
            return new WP_Error('forbidden', __('Invalid nonce ' . $nonce), array('status' => 403));
        }

        // check request server
        $request_domain = $_SERVER['HTTP_HOST'];
        $site_url = get_bloginfo('url');
        $parsed_url = parse_url($site_url);
        $server_domain = $parsed_url['host'];

        if ($request_domain != $server_domain) {
            return new WP_Error('no_crossorigin', __('Cross Origin access forbidden'), array('status' => 403));
        }

        // Get settings
        $settings = $this->plugin_admin->get_plugin_settings();
        $openai_key = $settings['tw_chat_openai_key'];

        if (empty($openai_key)) {
            return new WP_Error('missing_settings', 'The OpenAI API Key is not set.', array('status' => 400));
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
                return new WP_Error('missing_params', __('Missing required parameters'), array('status' => 400));
            }

            // Check for message parameter
            if (empty($message) || is_null($message)) {
                return new WP_Error('missing_params', __('Missing required parameters'), array('status' => 400));
            }

            // Get chat widget info
            $chat_widget = $this->plugin_admin->get_chat_widget_by_id($widget_id);
            // $assistant_id = $settings['tw_chat_assistant_id'];

            // Return error if settings are not found
            if (is_null($chat_widget)) {
                return new WP_Error('missing_settings', 'The assistant ID is not set.', array('status' => 400));
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
            foreach ($response->results as $result) {
                if ($result->flagged) {
                    // true, return error
                    return new WP_Error('moderation_error', 'Message violates OpenAI Content Policy', array('status' => 400));
                } 
            }

            // Create a new thread if none is passed
            if (empty($thread_id) || is_null($thread_id)) {
                $run_response = $client->threads()->createAndRun(
                    array(
                        'assistant_id' => $assistant_id,
                        'thread' => array(
                            'messages' => array(
                                array(
                                    'role' => 'user',
                                    'content' => $clean_message
                                ),
                            ),
                        ),
                    ),
                );
                $thread_id = $run_response->threadId;
                $run_id = $run_response->id;
                
            } else {
                // Create a new message
                $message_response = $client->threads()->messages()->create($thread_id, array(
                    'role' => 'user',
                    'content' => $clean_message,
                ));

                $run_response = $client->threads()->runs()->create(
                    threadId: $thread_id, 
                    parameters: array(
                        'assistant_id' => $assistant_id,
                    ),
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
                $run_status = $run_response->status;

                if ($run_status === 'completed' || $run_status === 'cancelled' || $run_status === 'failed' || $run_status === 'expired') {
                    $completed_response = $run_response;
                    $is_complete = true;
                    break; 
                } else {
                    sleep(1);  // Wait for 1 seconds before checking again
                }
            }

            // Get latest message
            $latest_message = $client->threads()->messages()->list($thread_id, [
                'limit' => 1,
            ]);

            // Return response text
            $messages_response = $latest_message->data[0]->content[0]->text->value;

            return new WP_REST_Response($messages_response, 200);
        } catch (Exception $e) {
            return new WP_Error('api_error', 'Error ' . $e->getMessage(), array('status' => 400));
        }
    }
}