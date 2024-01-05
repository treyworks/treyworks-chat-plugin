<div class="wrap">
    <h2>Treyworks Chat Settings</h2>
    <form method="post" action="options.php">
        <?php settings_fields('tw-chat-ui-settings-group'); ?>
        <?php do_settings_sections('tw-chat-ui-settings-group'); ?>
        <p>Enter your OpenAI API key and assistant ID to use for the chatbot.</p>
        <table class="form-table">
            <tr valign="top">
                <th scope="row">OpenAI Key</th>
                <td><input type="text" name="tw_chat_openai_key" value="<?php echo esc_attr(get_option('tw_chat_openai_key')); ?>" /></td>
            </tr>
            <tr valign="top">
                <th scope="row">Assistant ID</th>
                <td><input type="text" name="tw_chat_assistant_id" value="<?php echo esc_attr(get_option('tw_chat_assistant_id')); ?>" /></td>
            </tr>
        </table>
        <p>Enter configuration options for the chatbot user interface.</p>
        <table class="form-table">
            <tr valign="top">
                <th scope="row">Chat Greeting</th>
                <td><input type="text" name="tw_chat_greeting" value="<?php echo esc_attr(get_option('tw_chat_greeting')); ?>" /></td>
            </tr>
            <tr valign="top">
                <th scope="row">Disclaimer</th>
                <td>
                    <textarea name="tw_chat_disclaimer" rows="3"><?php echo esc_attr(get_option('tw_chat_disclaimer')); ?></textarea>
                </td>
            </tr>
        </table>
        <?php submit_button(); ?>
    </form>
</div>