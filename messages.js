/*
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

export function markMessageAsRead(messages, id) {
    const msg = messages.find((m) => m.id === id);
    if(msg) {
        msg.read = true;
    }

    return msg;
}

export function sendMessage(messages, contactId, sender, text) {
    const msg = {
        id: messages.length + 1,
        contactId,
        sender,
        text,
        read: sender === "Mengzhen" ? true : false,
    };

    messages.push(msg);
    return msg;
}