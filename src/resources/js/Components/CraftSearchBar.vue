<script setup lang="ts">
import CraftIcon from "@/Components/CraftIcon.vue";

const model = defineModel();
defineEmits(["update:model-value"]);
</script>

<template>
    <div class="relative">
        <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
            <CraftIcon icon="search-outline" :size="20" />
        </div>
        <input
            type="search"
            id="default-search"
            v-model="model"
            class="block bg-blue-dark-heavy w-full p-2.5 pl-10 placeholder:dark-grey text-sm text-gray-900 border-0 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
        />
    </div>
</template>
