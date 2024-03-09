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
        $args = array(
            'post_type' => 'chat_widgets', // Replace with your actual post type name
            'posts_per_page' => -1,
        );
        $posts = get_posts( $args );

        // Prepare the output array
        $data = array();

        // Loop through each post and its meta fields
        foreach ( $posts as $post ) {
            $post_data = array(
                'id' => $post->ID,
                'name' => $post->post_title,
                // 'content' => $post->post_content,
                // Add any other post fields you need
            );

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
        $args = array(
            'post_type' => 'chat_widgets', // Replace with your actual post type name
            'posts_per_page' => -1,
        );
        $posts = get_posts( $args );

        // Prepare the output array
        $data = array();

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

            if (empty($assistant_id) || is_null($assistant_id)) {
                // No assistant ID found
                return null;
            }

            return array(
                'tw_chat_widget_name' => $post['post_title'],
                'tw_chat_assistant_id' => $assistant_id,
                'tw_chat_greeting' => $greeting,
                'tw_chat_suggested_answers' => $suggested_answers
            );

        } else {
            // Handle the case where the post is not found
            return null;
        }
    }
}