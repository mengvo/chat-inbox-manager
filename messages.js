/*
markMessageAsRead
sendMessage
countUnreadMessages
 */

export function getMessagesForContact(messages, id) {
    return messages.filter((msg) => msg.id === id);
}

export function getUnreadMessages(messages) {
    return messages.filter(({read}) => !read);
}

export function findFirstUnreadMessage(messages) {
    return messages.find(({read}) => !read);
}

export function formatMessages(messages) {
    return messages.map(({sender, text}) => `${sender}: ${text}`);
}