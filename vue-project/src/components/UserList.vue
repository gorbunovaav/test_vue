<template>
<div>
    <div v-if="loading">Загрузка...</div>
    <div v-else-if="error" class="error">Ошибка: {{ error }}</div>
    <div v-else>
    <div v-if="filtered.length === 0" class="empty">
        Пользователи не найдены.
    </div>
    <ul>
        <li v-for="user in filtered" :key="user.id">
        <UserItem :user="user" />
        </li>
    </ul>
    </div>
</div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import UserItem from "./UserItem.vue";
import { fetchUsers } from "../services/api.js";

const props = defineProps({
    searchQuery: { type: String, default: "" },
});

const users = ref([]);
const loading = ref(false);
const error = ref(null);

onMounted(async () => {
    loading.value = true;
    try {
        users.value = await fetchUsers();
    } catch (e) {
    error.value = e.message || String(e);
    } finally {
    loading.value = false;
    }
});

const filtered = computed(() => {
    const q = (props.searchQuery || "").toLowerCase().trim();
    if (!q) return users.value;
    return users.value.filter((u) => (u.name || "").toLowerCase().includes(q));
});
</script>
