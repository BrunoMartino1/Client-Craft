<template>
    <div class="flex flex-col h-screen md:flex-row w-screen text-white">
        <!-- Sidebar -->
        <CraftSidebar class="md:absolute z-50" />

        <!-- Page Content -->
        <section
            class="main-content transition-all pt-[75px] md:pt-0 md:pl-[70px] flex flex-col w-full h-full bg-blue-dark-heavy"
        >
            <CraftTopNavigation />
            <main
                class="order-1 md:order-2 flex flex-col flex-1 p-8 overflow-y-auto"
            >
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
@media (min-width: 1024px) {
    .main-content {
        padding-left: min(20%, 250px);
    }
}
</style>
