<?php
$chat_widget = TW_Chat_Widgets::get_chat_widget_by_id($post_id);
$chat_widget['tw_chat_height'] = $height;
$chat_widget['tw_chat_width'] = $width;
?>
<script id="tw-chat-widget-data-<?php echo $post_id; ?>" type="application/json">
<?php echo json_encode($chat_widget); ?>
</script>
<div class="tw-chat-widget" id="tw-chat-widget-<?php echo $post_id; ?>"></div>
<script type="text/javascript">
window.addEventListener('load', function() {
    twChatInitWidget(<?php echo $post_id; ?>, <?php echo $sticky ?>);
});
</script>
