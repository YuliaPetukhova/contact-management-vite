<script lang="ts">
import {useContactStore} from "../store/ContactStore.ts";
import {computed} from "vue";
import {IContact} from "../models/IContact.ts";

export default {
  setup() {
    const userStore = useContactStore();
    const contact = computed(() => userStore.editableContact);
    const isEditForm = computed(() => userStore.editableContact.id);

    return {
      contact,
      isEditForm,
    };

  },

  methods: {
    useContactStore,

    handleContact() {
      if (this.isEditForm) {
        this.editContact();
      } else {
        this.addContact();
      }
      useContactStore().editableContact = {} as IContact;
    },

    addContact() {
      this.contact.id = Date.now();

      useContactStore().addContact(this.contact);
    },

    editContact() {
      useContactStore().editContact();
    },

    toggleForm() {
      useContactStore().toggleForm();
      useContactStore().editableContact = {} as IContact;
    },
  },
};
</script>

<template>
  <button @click="toggleForm"
          class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300">
    {{ useContactStore().showForm ? 'Закрыть форму' : 'Добавить контакт' }}
  </button>
  <Transition>

    <div class="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md" v-if="useContactStore().showForm">
      <h2 class="text-2xl font-semibold mb-4">Добавление нового контакта</h2>
      <form @submit.prevent="handleContact">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">Имя</label>
          <input
              type="text"
              id="name"
              v-model="contact.name"
              class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
          />
        </div>
        <div class="mb-4">
          <label for="phone" class="block text-sm font-medium text-gray-700">Телефон</label>
          <input
              type="text"
              id="phone"
              v-model="contact.phone"
              class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Почта</label>
          <input
              type="email"
              id="email"
              v-model="contact.email"
              class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
          />
        </div>
        <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        >
          {{ isEditForm ? 'Редактировать' : 'Добавить' }}
        </button>
      </form>
    </div>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>