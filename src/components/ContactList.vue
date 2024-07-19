<script lang="ts">
import {useContactStore} from "../store/ContactStore.ts";
import {IContact} from "../models/IContact.ts";

export default {
  setup() {
    return {
      useContactStore: useContactStore(),
    };
  },
  methods: {
    editContact(contact: IContact) {
      useContactStore().setEditableContact(contact);
    },

    deleteContact(contact: IContact) {
      useContactStore().deleteContact(contact);
    },
  }
}
</script>

<template>
  <ul role="list" class="divide-y divide-gray-100">

    <li v-for="(contact, index) in useContactStore.getters.filteredContacts()" :key="index"
        class="flex justify-center gap-x-6 py-5">

      <div class="flex min-w-0 gap-x-3">
        <div class="min-w-0 flex-auto">
          <p class="text-sm font-semibold leading-6 text-gray-900">{{ contact.name }}</p>
        </div>
      </div>

      <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p class="text-sm leading-6 text-gray-900">{{ contact.phone }}</p>
      </div>

      <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p class="text-sm leading-6 text-gray-900">{{ contact.email }}</p>
      </div>

      <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <button
            @click="editContact(contact)"
            class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >Редактировать
        </button>
      </div>

      <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">

        <button
            @click="deleteContact(contact)"
            class="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >Удалить
        </button>
      </div>
    </li>

  </ul>
</template>

<style scoped>

</style>