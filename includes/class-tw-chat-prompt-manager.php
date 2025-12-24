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
     * Site search prompt
     */
    const PROMPT_SITE_SEARCH = "## Site Search Function Usage\n\n1. **Answer from Our Website:** Base all your answers strictly on the information we retrieve for you using the `search_site` function. Please do not use outside knowledge or make assumptions; we want to provide information that comes directly from us.\n2. **Always Link to the Source:** It's crucial for us that our users see where the information comes from. Every answer you provide using our website's content must include a direct link to the source page. This builds trust and allows them to explore further. Include up to {num_links} links.";

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
     * Get a site search prompt with number of links injected
     *
     * @param int $num_links Number of links to include (default: 3)
     * @return string The complete site search prompt
     */
    public static function get_site_search_prompt( $num_links = 3 ) {
        return self::inject_params( self::PROMPT_SITE_SEARCH, array(
            'num_links' => $num_links
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
