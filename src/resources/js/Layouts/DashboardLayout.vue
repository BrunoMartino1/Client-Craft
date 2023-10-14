<template>
    <div class="flex flex-col h-screen md:flex-row w-screen text-white">
        <!-- Sidebar -->
        <CraftSidebar />

        <!-- Page Content -->
        <section
            class="main-content flex flex-col w-full h-full bg-blue-dark-heavy"
        >
            <CraftTopNavigation />
            <main class="order-1 md:order-2 h-full p-8 flex-1">
                <h1 class="text-2xl font-semibold mb-4">Dashboard</h1>
                <!-- Your page content goes here -->
                <slot />
            </main>
        </section>
    </div>
</template>

<script setup>
import CraftSidebar from "@/Components/CraftSidebar.vue";
import CraftTopNavigation from "@/Components/CraftTopNavigation.vue";
</script>

<style scoped>
/* Add your custom styles here */
</style>
