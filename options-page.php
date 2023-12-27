<div class="wrap">
    <h2>Treyworks Chat UI Settings</h2>
    <form method="post" action="options.php">
        <?php settings_fields('tw-chat-ui-settings-group'); ?>
        <?php do_settings_sections('tw-chat-ui-settings-group'); ?>
        <table class="form-table">
            <tr valign="top">
                <th scope="row">Endpoint URL</th>
                <td><input type="text" name="tw_chat_ui_endpoint_url" value="<?php echo esc_attr(get_option('tw_chat_ui_endpoint_url')); ?>" /></td>
            </tr>
            <tr valign="top">
                <th scope="row">Primary Color</th>
                <td><input type="text" name="tw_chat_ui_primary_color" value="<?php echo esc_attr(get_option('tw_chat_ui_primary_color')); ?>" /></td>
            </tr>
        </table>
        <?php submit_button(); ?>
    </form>
</div>