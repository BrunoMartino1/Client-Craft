<template>
    <nav
        class="top-navigation flex justify-between items-center order-2 md:order-1 bg-black text-white h-[72px] p-4"
    >
        <div class="relative w-1/3">
            <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
                <CraftIcon icon="search-outline" :size="20" />
            </div>
            <input
                type="search"
                id="default-search"
                class="block bg-blue-dark-heavy w-full p-2.5 pl-10 placeholder:text-white text-sm text-gray-900 border-0 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
            />
        </div>
        <div class="group flex gap-4">
            <CraftIcon icon="account-outline" />
            <CraftIcon icon="account-outline" />
            <CraftIcon icon="account-outline" />
            USER DROPDOWN
        </div>
    </nav>
</template>

<script setup lang="ts">
import CraftIcon from "@/Components/CraftIcon.vue";
</script>
