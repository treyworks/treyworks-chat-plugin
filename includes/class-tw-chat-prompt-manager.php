<?php
/**
 * Prompt Manager Class
 *
 * Manages AI prompts with constants and helper functions for parameter injection.
 *
 * @package    TW_Chat
 * @subpackage TW_Chat/includes
 */

class TW_Chat_Prompt_Manager {

    /**
     * Site search prompt - base instructions without link directives
     */
    const PROMPT_SITE_SEARCH = "## Site Search Function Usage\n\n**Answer from Our Website:** Base all your answers strictly on the information we retrieve for you using the `search_site` function. Please do not use outside knowledge or make assumptions; we want to provide information that comes directly from us.\n\n**Search Query Strategy:** To maximize search results, generate up to 3 query variations as a comma-separated string. Consider:\n- Singular vs plural forms (e.g., \"webinar, webinars\")\n- Common synonyms or related terms\n- Different word forms (e.g., \"training, train\")\n- Abbreviated and full forms (e.g., \"AI, artificial intelligence\")\n\nExample: If the user asks about webinars, search for: \"webinar, webinars, online seminar\"\n\nThis increases the likelihood of finding relevant content, as singular forms often return results when plural forms don't, and vice versa.";

    /**
     * Link inclusion prompt - instructs AI to include links
     */
    const PROMPT_LINK_INCLUSION = "\n\n**Always Link to the Source:** It's crucial for us that our users see where the information comes from. Every answer you provide using our website's content must include a direct link to the source page. This builds trust and allows them to explore further. Include a maximum of {num_links} links.";

    /**
     * Link exclusion prompt - instructs AI to exclude links for specific post types
     */
    const PROMPT_LINK_EXCLUSION = "\n\n**Exclude Links for Specific Content:** When referencing content from the following post types, do NOT provide direct links: {excluded_post_types}. You may still search and reference the content, but silently omit the URLs for these types. Do not mention or explain to the user that links are unavailable.";

    /**
     * Inject parameters into a prompt template
     *
     * @param string $prompt The prompt template with {parameter} placeholders
     * @param array $params Associative array of parameter names and values
     * @return string The prompt with parameters replaced
     */
    public static function inject_params( $prompt, $params = array() ) {
        if ( empty( $params ) ) {
            return $prompt;
        }

        foreach ( $params as $key => $value ) {
            $placeholder = '{' . $key . '}';
            $prompt = str_replace( $placeholder, $value, $prompt );
        }

        return $prompt;
    }

    /**
     * Get the base site search prompt
     *
     * @return string The base site search prompt
     */
    public static function get_site_search_prompt() {
        return self::PROMPT_SITE_SEARCH;
    }

    /**
     * Get link inclusion prompt with number of links injected
     *
     * @param int $num_links Number of links to include (default: 3)
     * @return string The link inclusion prompt
     */
    public static function get_link_inclusion_prompt( $num_links = 3 ) {
        return self::inject_params( self::PROMPT_LINK_INCLUSION, array(
            'num_links' => $num_links
        ) );
    }

    /**
     * Get link exclusion prompt with excluded post types injected
     *
     * @param array $excluded_post_types Array of post type names to exclude from links
     * @return string The link exclusion prompt
     */
    public static function get_link_exclusion_prompt( $excluded_post_types = array() ) {
        if ( empty( $excluded_post_types ) ) {
            return '';
        }

        // Format post types as a comma-separated list
        $post_types_list = implode( ', ', $excluded_post_types );

        return self::inject_params( self::PROMPT_LINK_EXCLUSION, array(
            'excluded_post_types' => $post_types_list
        ) );
    }

    /**
     * Validate that all required parameters are present in a prompt
     *
     * @param string $prompt The prompt template
     * @param array $params The parameters to check
     * @return array Array of missing parameter names, empty if all present
     */
    public static function validate_params( $prompt, $params = array() ) {
        $missing = array();
        
        // Find all placeholders in the prompt
        preg_match_all( '/\{([^}]+)\}/', $prompt, $matches );
        
        if ( ! empty( $matches[1] ) ) {
            foreach ( $matches[1] as $placeholder ) {
                if ( ! isset( $params[ $placeholder ] ) ) {
                    $missing[] = $placeholder;
                }
            }
        }
        
        return $missing;
    }

    /**
     * Sanitize prompt input to prevent injection attacks
     *
     * @param string $input The input to sanitize
     * @return string Sanitized input
     */
    public static function sanitize_prompt_input( $input ) {
        // Remove any potential prompt injection patterns
        $input = strip_tags( $input );
        $input = trim( $input );
        
        return $input;
    }
}
