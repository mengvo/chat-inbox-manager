/**
 * Imports data and functions
Implements runAction
Defines handlers
Calls the program’s functions and prints results


[
  "Alex — online — 1 unread",
  "Jordan — offline — 1 unread",
  "Sam — online — 0 unread",
]
 */
import { countUnreadMessages } from "./messages.js";

function createInboxSummaries(contacts, messages) {
    return contacts.map(({id, name, online}) => {

        const status = online ? "online" : "offline";
        const unread_msgs = countUnreadMessages(messages, id);
        
        return `${name} - ${status} - ${unread_msgs} unread`;
    });
}