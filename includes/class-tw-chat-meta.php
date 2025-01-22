<?php

class TW_Chat_Meta {
    /**
     * Initialize the meta box
     */
    public function __construct() {
        add_action('add_meta_boxes', [$this, 'add_chat_meta_box']);
        add_action('save_post', [$this, 'save_chat_meta']);
    }

    /**
     * Add the meta box to pages
     */
    public function add_chat_meta_box() {
        add_meta_box(
            'tw_chat_settings',           // Unique ID
            'Chat Widget Settings',       // Box title
            [$this, 'render_meta_box'],   // Content callback, must be of type callable
            'page'                        // Post type
        );
    }

    /**
     * Render the meta box content
     * 
     * @param WP_Post $post The post object
     */
    public function render_meta_box($post) {
        // Add nonce for security
        wp_nonce_field('tw_chat_meta_box', 'tw_chat_meta_box_nonce');

        // Get current values
        $override_global = get_post_meta($post->ID, '_tw_chat_override_global', true);
        $selected_widget = get_post_meta($post->ID, '_tw_chat_selected_widget', true);
        $button_text = get_post_meta($post->ID, '_tw_chat_button_text', true);

        // Get all chat widgets
        $widgets = get_posts([
            'post_type' => 'chat_widgets',
            'posts_per_page' => -1,
            'orderby' => 'title',
            'order' => 'ASC'
        ]);

        ?>
        <p>
            <label>
                <input type="checkbox" name="tw_chat_override_global" value="1" <?php checked($override_global, '1'); ?> />
                Override global chat widget
            </label>
        </p>

        <p>
            <label for="tw_chat_selected_widget">Select Chat Widget:</label>
            <select name="tw_chat_selected_widget" id="tw_chat_selected_widget" <?php disabled(empty($override_global)); ?>>
                <option value="">Select a widget</option>
                <?php foreach ($widgets as $widget) : ?>
                    <option value="<?php echo esc_attr($widget->ID); ?>" <?php selected($selected_widget, $widget->ID); ?>>
                        <?php echo esc_html($widget->post_title); ?>
                    </option>
                <?php endforeach; ?>
            </select>
        </p>

        <p>
            <label for="tw_chat_button_text">Custom Button Text:</label><br>
            <input type="text" 
                   id="tw_chat_button_text" 
                   name="tw_chat_button_text" 
                   value="<?php echo esc_attr($button_text); ?>" 
                   placeholder="Leave empty to use global setting"
                   class="widefat"
                   <?php disabled(empty($override_global)); ?> />
        </p>

        <script>
            jQuery(document).ready(function($) {
                $('input[name="tw_chat_override_global"]').on('change', function() {
                    var isChecked = $(this).is(':checked');
                    $('#tw_chat_selected_widget').prop('disabled', !isChecked);
                    $('#tw_chat_button_text').prop('disabled', !isChecked);
                });
            });
        </script>
        <?php
    }

    /**
     * Save the meta box data
     * 
     * @param int $post_id The post ID
     */
    public function save_chat_meta($post_id) {
        // Check if our nonce is set and verify it
        if (!isset($_POST['tw_chat_meta_box_nonce']) || 
            !wp_verify_nonce($_POST['tw_chat_meta_box_nonce'], 'tw_chat_meta_box')) {
            return;
        }

        // If this is an autosave, don't do anything
        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
            return;
        }

        // Check the user's permissions
        if (!current_user_can('edit_post', $post_id)) {
            return;
        }

        // Save the override setting
        $override_global = isset($_POST['tw_chat_override_global']) ? '1' : '';
        update_post_meta($post_id, '_tw_chat_override_global', $override_global);

        // Save the selected widget if override is enabled
        if ($override_global) {
            $selected_widget = isset($_POST['tw_chat_selected_widget']) ? 
                sanitize_text_field($_POST['tw_chat_selected_widget']) : '';
            update_post_meta($post_id, '_tw_chat_selected_widget', $selected_widget);

            // Save the button text
            $button_text = isset($_POST['tw_chat_button_text']) ? 
                sanitize_text_field($_POST['tw_chat_button_text']) : '';
            update_post_meta($post_id, '_tw_chat_button_text', $button_text);
        }
    }
}
