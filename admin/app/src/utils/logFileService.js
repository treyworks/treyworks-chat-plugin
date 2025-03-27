import axios from "axios";

const headers = {
    headers: {
        'Content-Type': 'multipart/form-data' // Set content type for FormData
    }
};

export const logUrl = `${window.twChatSettings.plugin_dir_url}treyworks-chat.log`;

export function getLogFile(success, error) {
    axios.get(`${logUrl}?dt=${Date.now()}`)
        .then(success)
        .catch(error);
}

export function clearLogFile(success, error) {
    axios.post(twChatSettings.ajax_url, {
        action: "clear_log",
        _ajax_nonce: twChatSettings.ajax_nonce,
    }, headers)
    .then(success)
    .catch(error);    
}
