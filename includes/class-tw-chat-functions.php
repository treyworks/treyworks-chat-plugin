<?php
/**
 * Chat Functions Helper Class
 */
class TW_Chat_Functions {

    /* Load the email template */
    public static function get_email_content($widget_name, $body) {
        // Start output buffering
        ob_start();
    
        // Include the template file
        include plugin_dir_path( __FILE__ ) . 'partials/email-template.php';

        // End buffering and return the content
        $content = ob_get_clean();
    
        return $content;
    }

    /* Send Email Message  */
    public static function send_message($to, $widget_name, $body) {
        $subject = 'Treyworks Chat Widget Submission: ' . $widget_name;
        $email_content = TW_Chat_Functions::get_email_content($widget_name, $body);
        $headers = array('Content-Type: text/html; charset=UTF-8');
        
        // Send the email
        wp_mail($to, $subject, $email_content, $headers);
    }

    /* Site Search Function */
    public static function search_site($search_term) {
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

    /* Product Search Function */
    public static function search_products($search_term) {
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
    
    /* Get Custom Posts */
    public static function get_custom_posts($post_type = 'post', $order = 'DESC', $orderby = 'date', $number_of_posts = 5) {
        // Set up the query arguments
        $args = array(
            'post_type'      => $post_type,
            'posts_per_page' => $number_of_posts,
            'order'          => $order
        );
        
        // Execute the query
        $query = new WP_Query($args);
        
        // Initialize an array to hold post data
        $posts_data = [];
        
        // Loop through the posts
        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();
                $post_data = [
                    'ID'    => get_the_ID(),
                    'title' => get_the_title(),
                    'date'  => get_the_date(),
                    'link'  => get_permalink(),
                ];
                
                // Get all post meta fields
                $post_meta = get_post_meta( $post_data['ID'] );

                // Merge post meta with post data
                $post_data['meta'] = $post_meta;
                
                $posts_data[] = $post_data;
            }
        }
        
        // Reset post data
        wp_reset_postdata();
        
        return $posts_data;
    }

}

?>