<script setup lang="ts">
import HeaderTitle from './components/HeaderTitle.vue';
import UserList from './components/UserList.vue';
</script>

<template>
  <header >
    <HeaderTitle />
  </header>
  <main class="container mx-auto my-4 max-w-7xl px-4 sm:px-6 lg:px-8">
    <UserList class="container"/>
  </main>
</template>
