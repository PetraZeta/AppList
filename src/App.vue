<script setup lang="ts">
import HeaderTitle from './components/HeaderTitle.vue';
import UserList from './components/UserList.vue';
</script>

<template>
  <header >
    <HeaderTitle />
  </header>
  <main class="container mx-auto">
    <UserList class="container"/>
  </main>
</template>
