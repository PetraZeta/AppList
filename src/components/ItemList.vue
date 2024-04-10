<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { User } from '../models/user.model'

interface Props {
    users: User[];
}
defineProps<Props>();

const selectedUser = ref<User | null>(null);

const showDetail = (user: User) => {
    selectedUser.value = user;
    console.log(user)
};
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

</script>

<template>

    <li v-for="user in $props.users" :key="user.login.uuid" @click="showDetail(user)"
        class="flex justify-between gap-x-6 py-5 cursor-pointer">
        <div class="flex min-w-0 gap-x-4">
            <img :src="user.picture.thumbnail" :alt="user.name.first"
                class="h-12 w-12 flex-none rounded-full bg-gray-50" />
            <div class="min-w-0 flex-auto">
                <p class="text-sm font-semibold leading-6 text-gray-900">{{ user.name.first }} {{ user.name.last }}</p>
                <p class="mt-1 truncate text-xs leading-5 text-gray-500">{{ user.email }}</p>
            </div>
        </div>
        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p class="text-sm leading-6 text-gray-900">{{ user.gender }}</p>
            <p class="mt-1 text-xs leading-5 text-gray-500">Birthday <time >{{ formatDate(user.dob.date) }}</time></p>
        </div>
        
    </li>

</template>