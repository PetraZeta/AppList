<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axiosClient from './../utils/axiosClient'
import { User } from "../models/user.model";
import UserModal from './UserModal.vue'
import formatDate from '../utils/format'

const users = ref<User[]>([]);

const selectedUser = ref<User | null>(null);
const isModalOpen = ref(false);

const fetchUsers = async () => {
    try {
        const { data } = await axiosClient.get("?results=5&noinfo");
        users.value = data.results;

    } catch (error) {
        console.error('Error fetching users:', error);
    }
};
const showDetail = (user: User) => {
    selectedUser.value = user;
    isModalOpen.value = true;

};
const closeModal = () => {
    selectedUser.value = null;
};
const refreshUsers = () => {
      fetchUsers(); 
    };
onMounted(fetchUsers);

</script>

<template>
    <section class="container mx-auto rounded-md shadow-md">
       
        <ul role="list" class="divide-y divide-gray-100 px-5">
            <li v-for="user in users" :key="user.login.uuid" @click="showDetail(user)"
                class="flex justify-between gap-x-6 py-5 cursor-pointer">
                <div class="flex min-w-0 gap-x-4">
                    <img :src="user.picture.thumbnail" :alt="user.name.first"
                        class="h-12 w-12 flex-none rounded-full bg-gray-50" />
                    <div class="min-w-0 flex-auto">
                        <p class="text-sm font-semibold leading-6 text-gray-900">{{ user.name.first }} {{ user.name.last
                            }}</p>
                        <p class="truncate text-xs leading-5 text-gray-500">{{ user.email }}</p>
                    </div>
                </div>
                <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p class="text-sm leading-6 text-gray-900">{{ user.gender }}</p>
                    <p class="text-xs leading-5  text-gray-900 ">Registered: <span> <time class=" text-gray-500">{{
                formatDate(user.registered.date) }}</time></span></p>
                </div>

            </li>
        </ul>
        
    </section>
    <div class="flex ">
        <button  class="text-gray-600 bg-slate-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 my-2 text-sm font-medium" @click="refreshUsers">Refrescar Usuarios</button>
    </div>
    <UserModal :user="selectedUser" v-if="selectedUser !== null" :onClose="closeModal" />

</template>