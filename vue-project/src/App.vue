<script setup>
import { ref } from 'vue'
import SearchBar from './components/SearchBar.vue'
import UserItem from './components/UserItem.vue'
import UserList from './components/UserList.vue'
const query = ref('')
</script>

<template>
  <div class="container">
    <h1>Список пользователей</h1>
    <SearchBar v-model="query" placeholder="Поиск по имени..." />
    <UserList :searchQuery="query" />
  </div>
</template>

