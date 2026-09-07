/**
Defines handlers
Calls the program’s functions and prints results
 */

import {contacts, messsages } from "./data.js";
import { countUnreadMessages } from "./messages.js";

function createInboxSummaries(contacts, messages) {
    return contacts.map(({id, name, online}) => {

        const status = online ? "online" : "offline";
        const unread_msgs = countUnreadMessages(messages, id);

        return `${name} - ${status} - ${unread_msgs} unread`;
    });
}

function runAction(actionName, callback) {
    console.log(`Running: ${actionName}`);
    console.log(callback());
    console.log(`Finished: ${actionName}`);
}