import axios from "axios";

export function getRetellAgents(success, error) {
    axios.post(twChatSettings.ajax_url, {
        action: "get_retell_agents",
        _ajax_nonce: twChatSettings.ajax_nonce,
    }, {
        headers: {
            'Content-Type': 'multipart/form-data' // Set content type for FormData
        }
    })
    .then(success)
    .catch(error);    
}

