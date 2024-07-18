<script setup lang="ts">
const people = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    phone: '222',
  },
  {
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    phone: '222',
  },
  {
    name: 'Dries Vincent',
    email: 'dries.vincent@example.com',
    phone: '222',
  },
  {
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    phone: '222',
  },
  {
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    phone: '222',
  },
]
</script>

<template>
  <h1 class="text-2xl font-bold text-black-600">
    Contact Management
  </h1>

  <div class="min-w-0 flex-auto flex gap-x-3">
    <label for="email-address" class="sr-only">Поиск номера</label>
    <input id="email-address" name="email" type="email" autocomplete="email" required="" class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Поиск" />
    <button type="submit" class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Поиск</button>
  </div>


  <ul role="list" class="divide-y divide-gray-100">
    <li v-for="person in people" :key="person.email" class="flex justify-center gap-x-6 py-5">

      <div class="flex min-w-0 gap-x-3">
        <div class="min-w-0 flex-auto">
          <p class="text-sm font-semibold leading-6 text-gray-900">{{ person.name }}</p>
        </div>
      </div>

      <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p class="text-sm leading-6 text-gray-900">{{ person.phone }}</p>
      </div>

      <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p class="text-sm leading-6 text-gray-900">{{ person.email }}</p>
      </div>

      <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Редактировать</a>
      </div>

      <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <a href="#" class="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Удалить</a>
      </div>

    </li>

  </ul>
</template>

<style scoped>
</style>
