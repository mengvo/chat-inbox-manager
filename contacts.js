export function getContactNames(contacts) {
    return contacts.map(({name}) => name);
}

export function getOnlineContacts(contacts) {
    return contacts.filter(({online}) => online);
}

export function findContactById(contacts, id) {
    const contact = contacts.find((c) => c.id === id);

    if(contact) {
        return contact;
    }

    return "Not Found";
}

export function createContactSummaries(contacts) {
    return contacts.map(({name, online}) => {
        const status = online ? "online" : "offline";

        return `${name} - ${status}`
    });
}

export function setContactOnlineStatus(contacts, contactId, online) {
    const contact = contacts.find((c) => c.id == contactId);
    if(contact) {
        contact.online = online;
    }

    return contact;
}