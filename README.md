# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

Управление контактами (Contact Management)
Это небольшое веб-приложение позволяет пользователям управлять своими контактами. Основные функции включают добавление, редактирование, удаление и поиск контактов.

Инструкции по запуску
1. Убедитесь, что у вас установлен Node.js и npm.
2. Склонируйте репозиторий с приложением: git clone https://github.com/YuliaPetukhova/contact-management-vite
3.
4. Перейдите в папку проекта: cd contact-management
5.
6. Установите зависимости: npm install
7.
8. Запустите приложение: npm run serve
9. Откройте браузер и перейдите по адресу http://localhost:5173.

Функциональность
1. Добавление контактов:
    * Пользователь может ввести имя, телефон и email нового контакта.
    * Нажатие кнопки “Добавить” сохраняет контакт в базе данных.
2. Редактирование контактов:
    * Пользователь может выбрать существующий контакт и изменить его данные.
    * Нажатие кнопки “Сохранить” обновляет контакт в базе данных.
3. Удаление контактов:
    * Пользователь может удалить контакт, выбрав его и нажав кнопку “Удалить”.
4. Поиск контактов по имени:
    * Пользователь может ввести имя в поле поиска.
    * При вводе символов приложение фильтрует контакты по имени.

Технологии
* Vue 3
* Vuex для управления состоянием
* Vue Router для маршрутизации
* Axios для работы с API (если необходимо)
* SCSS для стилей
