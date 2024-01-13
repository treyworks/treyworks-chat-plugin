<div class="wrap">
    <h2>Treyworks Chat for WordPress</h2>
    <div class="postbox">   
        <p>This plugin is currently under active development. Please submit any issues to the <a href="https://github.com/treyworks/treyworks-chat-plugin/issues" target="_blank">Github page</a> or <a href="https://treyworks.com/contact-us/?utm_source=plugin&utm_medium=referral" target="_blank">send us a message</a> directly.</p>
    </div>
    <form method="post" action="options.php">
        <?php settings_fields('tw-chat-ui-settings-group'); ?>
        <?php do_settings_sections('tw-chat-ui-settings-group'); ?>
        <table class="form-table">
            <th scope="row">Enable Chat Widget</th>
            <td>
                <input 
                    type="checkbox" 
                    id="tw_chat_is_enabled" 
                    name="tw_chat_is_enabled" 
                    value="enabled" 
            <?php
                $is_enabled = get_option('tw_chat_is_enabled');
                if (!empty($is_enabled)) {
                    echo "checked";
                }
            ?>
                /> 
                <label for="tw_chat_is_enabled">Enable</label>
            </td>
        </table>
        <p>Enter your OpenAI API key and assistant ID to use for the chatbot.</p>
        <table class="form-table">
            <tr valign="top">
                <th scope="row">OpenAI Key</th>
                <td><input class="regular-text" type="text" name="tw_chat_openai_key" value="<?php echo esc_attr(get_option('tw_chat_openai_key')); ?>" /></td>
            </tr>
            <tr valign="top">
                <th scope="row">Assistant ID</th>
                <td><input class="regular-text" type="text" name="tw_chat_assistant_id" value="<?php echo esc_attr(get_option('tw_chat_assistant_id')); ?>" /></td>
            </tr>
        </table>
        <p>Enter configuration options for the chatbot user interface.</p>
        <table class="form-table">
            <tr valign="top">
                <th scope="row">Assistant Name</th>
                <td><input class="regular-text" type="text" name="tw_chat_assistant_name" value="<?php echo esc_attr(get_option('tw_chat_assistant_name')); ?>" /></td>
            </tr>
            <tr valign="top">
                <th scope="row">Chat Greeting</th>
                <td><input class="regular-text" type="text" name="tw_chat_greeting" value="<?php echo esc_attr(get_option('tw_chat_greeting')); ?>" /></td>
            </tr>
            <tr valign="top">
                <th scope="row">Chat Error Message</th>
                <td><input class="regular-text" type="text" name="tw_chat_error_message" value="<?php echo esc_attr(get_option('tw_chat_error_message')); ?>" /></td>
            </tr>
            <tr valign="top">
                <th scope="row">Disclaimer</th>
                <td>
                    <textarea class="regular-text" name="tw_chat_disclaimer" rows="5"><?php echo esc_attr(get_option('tw_chat_disclaimer')); ?></textarea>
                </td>
            </tr>
        </table>
        <?php submit_button(); ?>
    </form>
</div>
<style>
    .postbox { padding: 0.5rem; margin-top: 1rem; }
</style>