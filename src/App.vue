<script setup lang="ts">
import ContactList from "./components/ContactList.vue";
import SearchBar from "./components/SearchBar.vue";
import ContactForm from "./components/ContactForm.vue";
</script>

<template>
  <h1 class="text-2xl font-bold text-black-600">Contact Management</h1>
  <contact-form></contact-form>
  <search-bar></search-bar>
  <contact-list></contact-list>
</template>

<style scoped>
</style>
