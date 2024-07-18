<script setup lang="ts">
const people = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    phone: '22567892',
  },
  {
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    phone: '225478902',
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