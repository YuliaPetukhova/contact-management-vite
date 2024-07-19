import {defineStore} from 'pinia'
import {IContact} from "../models/IContact.ts";

export const useContactStore = defineStore('contact', {
    state: () => ({
        editableContact: {} as IContact,
        showForm: false,

        contacts: JSON.parse(localStorage.getItem('contactList') as string) as IContact[],
    }),

    actions: {
        addContact(contact: IContact): void {
            console.log(this.editableContact)
            this.contacts.push(contact);
            this.saveContactsToLocalStorage();
            this.showForm = false;
        },

        saveContactsToLocalStorage(): void {
            localStorage.setItem('contactList', JSON.stringify(this.contacts));
        },

        setEditableContact(contact: IContact ): void {
            this.editableContact = this.contacts.find((contactItem: IContact) => {
                return contactItem.id === contact.id;
            })!;
            this.showForm = true;
        },

        deleteContact(contact: IContact): void {
            let newContacts = this.contacts.filter((contactItem: IContact) => {
                return contactItem.id !== contact.id;
            });
            this.contacts = newContacts;
            localStorage.setItem('contactList', JSON.stringify(newContacts));
        },

        editContact(): void {
            localStorage.setItem('contactList', JSON.stringify(this.contacts));
            this.showForm = false;
        },

        toggleForm(): void {
            this.showForm = !this.showForm;
        }
    },
});