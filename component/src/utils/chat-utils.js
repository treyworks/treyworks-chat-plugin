
/* Return a new message object */
export function newMessage(content, role) {
    return {
        content: content,
        role: role
    }
};

// set keyboard focus on message input
export function setFocus(widgetID) {
    document.getElementById(`message-text-${widgetID}`).focus();
}