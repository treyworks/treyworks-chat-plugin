import axios from "axios";

const headers = {
    headers: {
        'Content-Type': 'multipart/form-data' // Set content type for FormData
    }
};

export function getChatWidgets(success, error) {
    axios.post(twChatSettings.ajax_url, {
        action: "get_chat_widgets",
        _ajax_nonce: twChatSettings.ajax_nonce,
    }, headers)
    .then(success)
    .catch(error);    
}

export function saveChatWidget(data, success, error) {
    axios.post(twChatSettings.ajax_url, {
        action: "save_chat_widget",
        _ajax_nonce: twChatSettings.ajax_nonce,
        ...data
    }, headers)
    .then(success)
    .catch(error);    
}

export function removeChatWidget(widgetID, success, error) {
    axios.post(twChatSettings.ajax_url, {
        action: "remove_chat_widget",
        _ajax_nonce: twChatSettings.ajax_nonce,
        id: widgetID
    }, headers)
    .then(success)
    .catch(error); 
}
