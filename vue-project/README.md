1. Установка зависимостей:
```npm install
2. Запуск dev server:
```npm run dev

## Краткое объяснение работы поиска

- Подгрузка пользователей происходит в `UserList` через `fetchUsers()` в `onMounted`.
- Строка поиска хранится в `App.vue` (`query`) и передаётся в `UserList` как `searchQuery`.
- В `UserList` вычисляемое свойство `filtered` делает фильтрацию по `name` (без учёта регистра).