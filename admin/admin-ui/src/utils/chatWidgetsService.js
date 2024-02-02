import axios from "axios";

export function getChatWidgets(success, error) {
    axios.post(twChatSettings.ajax_url, {
        action: "get_chat_widgets",
        _ajax_nonce: twChatSettings.ajax_nonce,
    }, {
        headers: {
            'Content-Type': 'multipart/form-data' // Set content type for FormData
        }
    })
    .then(success)
    .catch(error);    
}


export function createChatWidget(data, success, error) {
    axios.post(twChatSettings.ajax_url, {
        action: "create_chat_widget",
        _ajax_nonce: twChatSettings.ajax_nonce,
        ...data
    }, {
        headers: {
            'Content-Type': 'multipart/form-data' // Set content type for FormData
        }
    })
    .then(success)
    .catch(error);    
}
