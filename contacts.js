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
        // let since value will change depending on online
        let online_str = "" ;
        if(online) {
            online_str = "online";
        } else {
            online_str = "offline";
        }

        return `${name} - ${online_str}`
    });
}

export function setContactOnlineStatus(contacts, contactId, online) {
    const contact = contacts.find((c) => c.id == contactId);
    if(contact) {
        contact.online = online;
    }

    return contact;
}