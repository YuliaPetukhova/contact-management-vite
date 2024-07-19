import {defineStore} from 'pinia'
import {IContact} from "../models/IContact.ts";

export const useContactStore = defineStore('contact', {
    state: () => ({
        editableContact: localStorage.getItem('editContact'),

        contacts: JSON.parse(localStorage.getItem('contactList') as string) as IContact[],
    }),

    actions: {
        addContact(contact: IContact): void {
            this.contacts.push(contact);
            this.saveContactsToLocalStorage();
        },

        saveContactsToLocalStorage(): void {
            localStorage.setItem('contactList', JSON.stringify(this.contacts));
        },

        editContact(contact: IContact ): void {
            let editableContacts = this.contacts.filter((contactItem: IContact) => {
                return contactItem.id === contact.id;
            });
            this.contacts = editableContacts;
            localStorage.setItem('contactList', JSON.stringify(editableContacts));
        },

        deleteContact(contact: IContact): void {
            let newContacts = this.contacts.filter((contactItem: IContact) => {
                return contactItem.id !== contact.id;
            });
            this.contacts = newContacts;
            localStorage.setItem('contactList', JSON.stringify(newContacts));
        }
    },
});