<?php
/**
 * Chat Widget Helper Class
 */

class TW_Chat_Widgets {

    /**
     * Get Chat Widgets 
     */
    public static function get_chat_widgets() {
        // Query for chat assistant posts
        $args = [
            'post_type' => 'chat_widgets', // Replace with your actual post type name
            'posts_per_page' => -1,
        ];
        $posts = get_posts( $args );

        // Prepare the output array
        $data = [];

        // Loop through each post and its meta fields
        foreach ( $posts as $post ) {
            $post_data = [
                'id' => $post->ID,
                'name' => $post->post_title,
            ];

            // Get all post meta fields
            $post_meta = get_post_meta( $post->ID );

            // Merge post meta with post data
            $post_data['meta'] = $post_meta;

            // Add the post data to the output array
            $data[] = $post_data;
        }

        return $data;
    }

    /**
     * Get Chat Widget IDs
     */
    public static function get_chat_widget_ids() {
        // Query for chat assistant posts
        $args = [
            'post_type' => 'chat_widgets', // Replace with your actual post type name
            'posts_per_page' => -1,
        ];
        $posts = get_posts( $args );

        // Prepare the output array
        $data = [];

        // Loop through each post and add the post ID
        foreach ( $posts as $post ) {
            $data[] = $post->ID;
        }

        return $data;
    }

    /**
     * Get Chat Widget by the ID
     */
    public static function get_chat_widget_by_id($post_id) {
        // Query for chat assistant posts
        $post = get_post($post_id, ARRAY_A, 'chat_widgets');

        if ($post) {
            $assistant_id = get_post_meta($post_id, 'tw_chat_assistant_id', true);
            $greeting = get_post_meta($post_id, 'tw_chat_greeting', true);
            $suggested_answers = get_post_meta($post_id, 'tw_chat_suggested_answers', true);
            $dismiss_answers = get_post_meta($post_id, 'tw_chat_dismiss_answers', true);
            $dismiss_answers_text = get_post_meta($post_id, 'tw_chat_dismiss_answers_text', true);
            $email_recipients = get_post_meta($post_id, 'tw_chat_email_recipients', true);
            $webhook_address = get_post_meta($post_id, 'tw_chat_webhook_address', true);
            $webhook_header = get_post_meta($post_id, 'tw_chat_webhook_header', true);

            if (empty($assistant_id) || is_null($assistant_id)) {
                // No assistant ID found
                return null;
            }

            return [
                'tw_chat_widget_name' => $post['post_title'],
                'tw_chat_assistant_id' => $assistant_id,
                'tw_chat_greeting' => $greeting,
                'tw_chat_suggested_answers' => $suggested_answers,
                'tw_chat_dismiss_answers' => $dismiss_answers,
                'tw_chat_dismiss_answers_text' => $dismiss_answers_text,
                'tw_chat_email_recipients' => $email_recipients,
                'tw_chat_webhook_address' => $webhook_address,
                'tw_chat_webhook_header' => $webhook_header
            ];

        } else {
            // Handle the case where the post is not found
            return null;
        }
    }
}