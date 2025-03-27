
/* Return a new message object */
export function newMessage(content, role) {
    return {
        content: content,
        role: role
    }
};

// set keyboard focus on message input
export function setFocus(widgetID) {
    if (window.matchMedia("(min-width: 1025px)").matches) {
        document.getElementById(`message-text-${widgetID}`).focus();
    }
}