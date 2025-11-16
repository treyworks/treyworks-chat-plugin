<?php
/*
 * Plugin Name: Treyworks Chat for WordPress
 * Plugin URI: https://treyworks.com/chat-plugin/
 * Description: An AI-powered text and voice chat widget plugin for WordPress.
 * Version: 2.0.2
 * Author: Treyworks LLC
 * Author URI: https://treyworks.com
 * License:           MIT
 * License URI:       https://opensource.org/license/MIT/
 * Text Domain:       treyworks-chat
 * Domain Path:       /languages
*/

defined('TW_CHAT_VERSION') or define('TW_CHAT_VERSION', '2.0.2');

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/* Import dependencies */
require_once plugin_dir_path( __FILE__ ) . 'vendor/autoload.php';

/**
 * The core plugin class that is used to define internationalization,
 * admin-specifichooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-tw-chat.php';

// Instantiate the plugin class

function run_tw_chat() {

	$plugin = new TW_Chat_Plugin();

}
run_tw_chat();