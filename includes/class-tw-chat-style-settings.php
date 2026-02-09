<?php
/**
 * TreyWorks Chat Style Settings
 * 
 * Single source of truth for all widget CSS variable values.
 * Defaults are defined here, seeded into wp_options on plugin init,
 * and always loaded from settings to generate frontend CSS.
 * 
 * Widget stylesheets do NOT contain :root variable declarations.
 * All CSS variables are injected via wp_add_inline_style from stored settings.
 * 
 * @package TreyWorks_Chat
 * @since 2.2.1
 */

class TW_Chat_Style_Settings {

    /**
     * WordPress option key for storing widget styles
     * 
     * @var string
     */
    const OPTION_KEY = 'tw_chat_custom_styles';


    /**
     * Seed default style values into wp_options if not already set.
     * 
     * Called on plugin initialization to ensure all CSS variables
     * have stored values. Merges any new defaults into existing
     * stored values without overwriting user customizations.
     * 
     * @return void
     */
    public static function seed_defaults() {
        // Clean up legacy CSS transient caches (caching removed in 2.2.1)
        delete_transient('tw_chat_custom_css_all');
        delete_transient('tw_chat_custom_css_chat');
        delete_transient('tw_chat_custom_css_voice');

        $stored = get_option(self::OPTION_KEY, false);

        if ($stored === false) {
            // First time: store all defaults
            $defaults = array(
                'chat'  => self::get_chat_defaults_flat(),
                'voice' => self::get_voice_defaults_flat(),
            );
            update_option(self::OPTION_KEY, $defaults);
            return;
        }

        // Merge new defaults into existing stored values (don't overwrite customizations)
        $updated = false;
        $chat_defaults = self::get_chat_defaults_flat();
        $voice_defaults = self::get_voice_defaults_flat();

        if (!isset($stored['chat']) || !is_array($stored['chat'])) {
            $stored['chat'] = array();
        }
        if (!isset($stored['voice']) || !is_array($stored['voice'])) {
            $stored['voice'] = array();
        }

        foreach ($chat_defaults as $var => $value) {
            if (!isset($stored['chat'][$var])) {
                $stored['chat'][$var] = $value;
                $updated = true;
            }
        }

        foreach ($voice_defaults as $var => $value) {
            if (!isset($stored['voice'][$var])) {
                $stored['voice'][$var] = $value;
                $updated = true;
            }
        }

        if ($updated) {
            update_option(self::OPTION_KEY, $stored);
            delete_transient(self::CACHE_KEY);
        }
    }

    /**
     * Get default values for all text chat widget CSS variables
     * 
     * Returns an associative array organized by section for the admin interface.
     * All values are fully resolved (no var() references).
     * 
     * @return array Associative array of section => [ variable => default_value ]
     */
    public static function get_chat_defaults() {
        return array(
            'chat_bubble_button' => array(
                '--tw-chat-bubble-size'              => '90px',
                '--tw-chat-bubble-size-mobile'       => '80px',
                '--tw-chat-bubble-border-radius'     => '100%',
                '--tw-chat-bubble-background'        => '#ffffff',
                '--tw-chat-bubble-padding'           => '5px',
                '--tw-chat-bubble-border'            => 'none',
                '--tw-chat-bubble-box-shadow'        => '0 4px 6px rgba(4, 34, 54, 0.1)',
                '--tw-chat-bubble-hover-background'  => '#f0f0f0',
                '--tw-chat-bubble-hover-color'       => '#052b43',
            ),
            'chat_bubble_text' => array(
                '--tw-chat-bubble-color'          => '#052b43',
                '--tw-chat-bubble-font-family'    => 'inherit',
                '--tw-chat-bubble-font-size'      => '16px',
                '--tw-chat-bubble-font-weight'    => '600',
                '--tw-chat-bubble-gap'            => '4px',
                '--tw-chat-bubble-text-tooltip'   => '0',
                '--tw-chat-bubble-tooltip-background' => '#333333',
            ),
            'chat_bubble_image' => array(
                '--tw-chat-bubble-image'          => '',
                '--tw-chat-bubble-image-size'     => '50%',
            ),
            'chat_interface' => array(
                '--tw-chat-interface-width'         => '500px',
                '--tw-chat-interface-height'        => '550px',
                '--tw-chat-background'              => '#f0f0f0',
                '--tw-chat-interface-border'        => '1px solid rgba(4, 34, 54, 0.1)',
                '--tw-chat-interface-box-shadow'    => '0 10px 25px rgba(4, 34, 54, 0.15)',
                '--tw-chat-interface-border-radius' => '12px',
                '--tw-chat-position-bottom'         => '25px',
                '--tw-chat-position-right'          => '25px',
                '--tw-chat-interface-width-mobile'   => '95vw',
                '--tw-chat-interface-height-mobile'  => '95vh',
            ),
            'chat_header' => array(
                '--tw-chat-header-background'   => '#042236',
                '--tw-chat-header-color'        => '#ffffff',
                '--tw-chat-header-padding'      => '10px 20px',
                '--tw-chat-header-button-color' => '#ffffff',
                '--tw-chat-header-close-size'   => '32px',
                '--tw-chat-logo-width'          => '100px',
            ),
            'chat_messages' => array(
                '--tw-chat-message-background'          => '#ffffff',
                '--tw-chat-message-color'               => '#042236',
                '--tw-chat-message-border-radius'       => '8px',
                '--tw-chat-message-box-shadow'          => '0 1px 2px rgba(4, 34, 54, 0.05)',
                '--tw-chat-message-border'              => '1px solid rgba(4, 34, 54, 0.1)',
                '--tw-chat-message-font-size'           => '16px',
                '--tw-chat-message-width'               => '85%',
                '--tw-chat-message-spacing'             => '1rem',
                '--tw-chat-message-user-background'     => '#052b43',
                '--tw-chat-message-user-color'          => '#ffffff',
                '--tw-chat-message-error-color'         => '#a83235',
                '--tw-chat-message-heading-font-weight' => '600',
                '--tw-chat-message-link-font-weight'    => 'bold',
            ),
            'chat_input' => array(
                '--tw-chat-input-background'        => '#ffffff',
                '--tw-chat-input-color'             => '#042236',
                '--tw-chat-input-border'            => '1px solid rgba(4, 34, 54, 0.15)',
                '--tw-chat-input-border-radius'     => '8px',
                '--tw-chat-input-box-shadow'        => '0 1px 2px rgba(4, 34, 54, 0.05)',
                '--tw-chat-input-font-size'         => '16px',
                '--tw-chat-input-placeholder-color' => 'rgba(4, 34, 54, 0.4)',
                '--tw-chat-input-max-width'         => '95%',
                '--tw-chat-send-button-image'       => '',
            ),
            'chat_suggested_answers' => array(
                '--tw-chat-suggested-answer-font-size'     => '16px',
                '--tw-chat-suggested-answer-padding'       => '10px',
                '--tw-chat-suggested-answer-border-radius' => '10px',
                '--tw-chat-suggested-answer-background'    => '#052b43',
                '--tw-chat-suggested-answer-color'         => '#ffffff',
                '--tw-chat-suggested-answer-border'        => 'none',
                '--tw-chat-suggested-answer-box-shadow'    => 'none',
                '--tw-chat-suggested-answer-hover-background' => '#073a5c',
                '--tw-chat-suggested-answer-hover-color'      => '#ffffff',
            ),
            'chat_disclaimer' => array(
                '--tw-chat-disclaimer-background' => 'transparent',
                '--tw-chat-disclaimer-color'      => '#000000',
                '--tw-chat-disclaimer-font-size'  => '13px',
                '--tw-chat-disclaimer-padding'    => '10px',
                '--tw-chat-disclaimer-text-align' => 'center',
            ),
            'chat_embedded' => array(
                '--tw-chat-interface-embedded-width'      => '550px',
                '--tw-chat-interface-embedded-max-width'  => '100%',
                '--tw-chat-interface-embedded-height'     => '550px',
                '--tw-chat-interface-embedded-max-height' => '75vh',
            ),
            'chat_mobile' => array(
                '--tw-chat-interface-width-mobile'  => '95vw',
                '--tw-chat-interface-height-mobile' => '95vh',
                '--tw-chat-bubble-size-mobile'      => '80px',
                '--tw-chat-bubble-font-size-mobile' => '14px',
            ),
        );
    }

    /**
     * Get default values for all voice chat widget CSS variables
     * 
     * All values are fully resolved (no var() references).
     * 
     * @return array Associative array of section => [ variable => default_value ]
     */
    public static function get_voice_defaults() {
        return array(
            'voice_container' => array(
                '--tw-voice-container-max-width'     => '300px',
                '--tw-voice-container-padding'       => '20px',
                '--tw-voice-container-border-radius' => '16px',
                '--tw-voice-container-background'    => '#ffffff',
                '--tw-voice-container-box-shadow'    => '0 4px 12px rgba(0, 0, 0, 0.1)',
            ),
            'voice_button' => array(
                '--tw-voice-button-size'              => '80px',
                '--tw-voice-button-border-radius'     => '50%',
                '--tw-voice-button-background'        => '#4a6cf7',
                '--tw-voice-button-font-size'         => '24px',
                '--tw-voice-button-box-shadow'        => '0 4px 8px rgba(74, 108, 247, 0.3)',
                '--tw-voice-button-active-background' => '#f74a4a',
                '--tw-voice-button-active-box-shadow' => '0 4px 8px rgba(247, 74, 74, 0.3)',
                '--tw-voice-button-size-mobile'       => '70px',
                '--tw-voice-button-icon-image'        => '',
                '--tw-voice-button-hover-background'  => '#3a5ce7',
            ),
            'voice_status' => array(
                '--tw-voice-status-font-size'     => '16px',
                '--tw-voice-status-color'         => '#555555',
                '--tw-voice-status-padding'       => '8px 12px',
                '--tw-voice-status-border-radius' => '8px',
                '--tw-voice-status-background'    => '#f5f5f5',
            ),
            'voice_dialog' => array(
                '--tw-voice-dialog-overlay-background'        => 'rgba(0, 0, 0, 0.5)',
                '--tw-voice-dialog-background'                => '#ffffff',
                '--tw-voice-dialog-border-radius'             => '12px',
                '--tw-voice-dialog-box-shadow'                => '0 8px 24px rgba(0, 0, 0, 0.2)',
                '--tw-voice-dialog-padding'                   => '24px',
                '--tw-voice-dialog-max-width'                 => '400px',
                '--tw-voice-dialog-title-font-size'           => '20px',
                '--tw-voice-dialog-title-color'               => '#333333',
                '--tw-voice-dialog-title-margin-bottom'       => '12px',
                '--tw-voice-dialog-text-font-size'            => '14px',
                '--tw-voice-dialog-text-color'                => '#666666',
                '--tw-voice-dialog-text-margin-bottom'        => '20px',
                '--tw-voice-dialog-button-padding'            => '10px 20px',
                '--tw-voice-dialog-button-border-radius'      => '6px',
                '--tw-voice-dialog-button-font-size'          => '14px',
                '--tw-voice-dialog-button-font-weight'        => '600',
                '--tw-voice-dialog-button-gap'                => '12px',
                '--tw-voice-dialog-button-confirm-background' => '#4a6cf7',
                '--tw-voice-dialog-button-confirm-color'      => '#ffffff',
                '--tw-voice-dialog-button-confirm-hover-background' => '#3a5ce7',
                '--tw-voice-dialog-button-cancel-background'  => '#e0e0e0',
                '--tw-voice-dialog-button-cancel-color'       => '#333333',
                '--tw-voice-dialog-button-cancel-hover-background' => '#d0d0d0',
            ),
            'voice_general' => array(
                '--tw-voice-transition' => 'all 0.3s ease',
            ),
        );
    }

    /**
     * Get a flat array of chat default values
     * 
     * @return array Associative array of variable => default_value
     */
    public static function get_chat_defaults_flat() {
        $defaults = array();
        foreach (self::get_chat_defaults() as $section => $variables) {
            foreach ($variables as $var => $value) {
                $defaults[$var] = $value;
            }
        }
        return $defaults;
    }

    /**
     * Get a flat array of voice default values
     * 
     * @return array Associative array of variable => default_value
     */
    public static function get_voice_defaults_flat() {
        $defaults = array();
        foreach (self::get_voice_defaults() as $section => $variables) {
            foreach ($variables as $var => $value) {
                $defaults[$var] = $value;
            }
        }
        return $defaults;
    }

    /**
     * Get a flat array of all default values (chat + voice)
     * 
     * @return array Associative array of variable => default_value
     */
    public static function get_all_defaults_flat() {
        return array_merge(self::get_chat_defaults_flat(), self::get_voice_defaults_flat());
    }

    /**
     * Get stored style values
     * 
     * Retrieves all CSS variable values from the WordPress options table.
     * Values are always present (seeded on init), so this returns the
     * complete set of variables with any user customizations applied.
     * 
     * @return array Associative array with 'chat' and 'voice' keys containing all values
     */
    public static function get_styles() {
        $styles = get_option(self::OPTION_KEY, array());

        if (!is_array($styles)) {
            return array(
                'chat'  => self::get_chat_defaults_flat(),
                'voice' => self::get_voice_defaults_flat(),
            );
        }

        return wp_parse_args($styles, array(
            'chat'  => self::get_chat_defaults_flat(),
            'voice' => self::get_voice_defaults_flat(),
        ));
    }

    /**
     * Save style values
     * 
     * Stores all CSS variable values (defaults + customizations).
     * Validates that each variable is a known CSS variable before storing.
     * Invalidates the CSS cache after saving.
     * 
     * @param array $styles Associative array with 'chat' and/or 'voice' keys
     * @return bool True on success, false on failure
     */
    public static function save_styles($styles) {
        if (!is_array($styles)) {
            return false;
        }

        // Start with current stored values as base
        $current = self::get_styles();
        $all_defaults = self::get_all_defaults_flat();

        // Merge incoming chat values
        if (isset($styles['chat']) && is_array($styles['chat'])) {
            foreach ($styles['chat'] as $var => $value) {
                $sanitized_var = sanitize_text_field($var);
                $sanitized_value = sanitize_text_field($value);

                // Only store known variables
                if (isset($all_defaults[$sanitized_var])) {
                    $current['chat'][$sanitized_var] = $sanitized_value;
                }
            }
        }

        // Merge incoming voice values
        if (isset($styles['voice']) && is_array($styles['voice'])) {
            foreach ($styles['voice'] as $var => $value) {
                $sanitized_var = sanitize_text_field($var);
                $sanitized_value = sanitize_text_field($value);

                if (isset($all_defaults[$sanitized_var])) {
                    $current['voice'][$sanitized_var] = $sanitized_value;
                }
            }
        }

        // update_option returns false when value is unchanged, so check separately
        update_option(self::OPTION_KEY, $current);
        return true;
    }

    /**
     * Reset styles to defaults
     * 
     * Resets all styles or a specific section back to default values.
     * 
     * @param string|null $section Optional section key to reset (e.g., 'chat_bubble'). Null resets all.
     * @param string|null $widget_type Optional widget type ('chat' or 'voice'). Required if $section is set.
     * @return bool True on success, false on failure
     */
    public static function reset_styles($section = null, $widget_type = null) {
        // Reset all: restore full defaults
        if ($section === null) {
            update_option(self::OPTION_KEY, array(
                'chat'  => self::get_chat_defaults_flat(),
                'voice' => self::get_voice_defaults_flat(),
            ));
            return true;
        }

        // Reset a specific section
        if ($widget_type === null) {
            return false;
        }

        $styles = self::get_styles();
        $defaults_method = ($widget_type === 'chat') ? 'get_chat_defaults' : 'get_voice_defaults';
        $section_defaults = self::$defaults_method();

        if (!isset($section_defaults[$section])) {
            return false;
        }

        // Restore default values for all variables in this section
        foreach ($section_defaults[$section] as $var => $default_value) {
            $styles[$widget_type][$var] = $default_value;
        }

        update_option(self::OPTION_KEY, $styles);
        return true;
    }

    /**
     * Generate CSS string from stored styles
     * 
     * Builds a :root CSS block containing ALL CSS variables.
     * This is the sole source of widget CSS variables on the frontend.
     * 
     * @param string $widget_type Optional. 'chat', 'voice', or 'all' (default).
     * @return string CSS string to inject
     */
    public static function generate_css($widget_type = 'all') {
        $styles = self::get_styles();
        $variables = array();

        if ($widget_type === 'chat' || $widget_type === 'all') {
            $variables = array_merge($variables, isset($styles['chat']) ? $styles['chat'] : array());
        }
        if ($widget_type === 'voice' || $widget_type === 'all') {
            $variables = array_merge($variables, isset($styles['voice']) ? $styles['voice'] : array());
        }

        if (empty($variables)) {
            return '';
        }

        // Non-CSS-variable keys stored alongside style settings
        $non_css_keys = array('--tw-chat-bubble-image', '--tw-chat-bubble-text-tooltip', '--tw-chat-send-button-image', '--tw-voice-button-icon-image');

        $css = ":root {\n";
        foreach ($variables as $var => $value) {
            if (in_array($var, $non_css_keys, true)) {
                continue;
            }
            $css .= "    " . esc_attr($var) . ": " . esc_attr($value) . ";\n";
        }
        $css .= "}";

        return $css;
    }

    /**
     * Get the chat bubble image URL.
     *
     * Returns the custom image URL from stored settings, or the default
     * plugin SVG icon if no custom image is set.
     *
     * @return string URL to the bubble image
     */
    public static function get_bubble_image_url() {
        $styles = self::get_styles();
        $custom = isset($styles['chat']['--tw-chat-bubble-image']) ? $styles['chat']['--tw-chat-bubble-image'] : '';

        if (!empty($custom)) {
            return $custom;
        }

        return plugins_url('assets/images/chat-bubble-icon.svg', dirname(__FILE__));
    }

    /**
     * Get the voice button icon image URL.
     *
     * Returns the custom image URL from stored settings, or an empty
     * string if no custom image is set (widget falls back to emoji icon).
     *
     * @return string URL to the voice button icon image, or empty string
     */
    public static function get_voice_button_icon_image_url() {
        $styles = self::get_styles();
        return isset($styles['voice']['--tw-voice-button-icon-image']) ? $styles['voice']['--tw-voice-button-icon-image'] : '';
    }

    /**
     * Get the send button image URL.
     *
     * Returns the custom image URL from stored settings, or an empty
     * string if no custom image is set (widget falls back to SVG icon).
     *
     * @return string URL to the send button image, or empty string
     */
    public static function get_send_button_image_url() {
        $styles = self::get_styles();
        return isset($styles['chat']['--tw-chat-send-button-image']) ? $styles['chat']['--tw-chat-send-button-image'] : '';
    }

    /**
     * Check if bubble text should display as tooltip only.
     *
     * @return bool True if text should be a tooltip, false if visible
     */
    public static function is_bubble_text_tooltip() {
        $styles = self::get_styles();
        return isset($styles['chat']['--tw-chat-bubble-text-tooltip']) && $styles['chat']['--tw-chat-bubble-text-tooltip'] === '1';
    }

    /**
     * Get all style data for the admin interface
     * 
     * Returns section-organized defaults and current stored values
     * for the React admin app.
     * 
     * @return array Array with 'chat_defaults', 'voice_defaults', and 'current' keys
     */
    public static function get_admin_data() {
        return array(
            'chat_defaults'  => self::get_chat_defaults(),
            'voice_defaults' => self::get_voice_defaults(),
            'current'        => self::get_styles(),
        );
    }

}
