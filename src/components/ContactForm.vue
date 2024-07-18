<script lang="ts">
export default {
  data() {
    return {
      contact: {
        name: '',
        phone: '',
        email: '',
      },
      showForm: false,
    };
  },
  methods: {
    addContact() {
      // Обработка добавления контакта (например, отправка на сервер)
      console.log('Добавлен контакт:', this.contact);
      // Сброс формы
      this.contact = {
        name: '',
        phone: '',
        email: '',
      };
    },
    toggleForm() {
      this.showForm = !this.showForm;
    },
  },
};
</script>

<template>
  <button @click="toggleForm"
          class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300">
    {{ showForm ? 'Закрыть форму' : 'Добавить контакт' }}
  </button>

  <div class="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md" v-if="showForm">
    <h2 class="text-2xl font-semibold mb-4">Добавление нового контакта</h2>
    <form @submit.prevent="addContact">
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
        Добавить
      </button>
    </form>
  </div>
</template>

<style scoped>

</style>