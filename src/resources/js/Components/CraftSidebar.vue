<template>
    <section
        :class="{
            'md:w-1/5 md:block': breakpoints.greaterOrEqual('lg').value,
            'w-1/4 md:block':
                breakpoints.between('md', 'lg').value && isSidebarOpen,
            'md:w-[70px]':
                breakpoints.between('md', 'lg').value && !isSidebarOpen,
        }"
        @mouseenter="
            () => {
                if (largerThanSm) isSidebarOpen = true;
            }
        "
        @mouseleave="
            () => {
                if (largerThanSm) isSidebarOpen = false;
            }
        "
        class="side-navigation flex md:flex-col w-full py-6 bg-black text-white md:h-screen transition-all duration-300 ease-in-out border-r border-blue-dark-soft overflow-x-hidden"
    >
        <CraftSidebarHeader
            :is-sidebar-open="isSidebarOpen"
            @click="isSidebarOpen = !isSidebarOpen"
        />
        <transition-slide :offset="['100%', 0]">
            <nav
                v-if="breakpoints.greaterOrEqual('md').value || isSidebarOpen"
                class="navigation-list absolute md:relative overflow-y-scroll scrollbar-none md:block h-screen w-screen pt-6 md:pt-0 md:w-auto md:h-auto bg-blue-dark-heavy md:bg-black"
            >
                <CraftIcon
                    @click="isSidebarOpen = !isSidebarOpen"
                    icon="close"
                    class="md:hidden absolute top-6 right-6"
                />
                <h2
                    class="navigation-title text-blue-light-heavy text-xs font-bold pl-6 mb-4"
                    :class="{
                        '!pl-0 text-center':
                            breakpoints.between('md', 'lg').value &&
                            !isSidebarOpen,
                    }"
                >
                    MENU
                </h2>
                <CraftNavItem
                    label="Dashboard"
                    icon="dashboard-outline"
                    :children="[
                        { label: 'Homepage', path: '/dashboard' },
                        { label: 'Sales Analytics', path: '/sales-analytics' },
                        { label: 'Sales Manager', path: '/sales-manager' },
                    ]"
                />
                <CraftNavItem
                    label="Accounts"
                    icon="account-outline"
                    path="/accounts"
                />
                <h2
                    class="navigation-title text-blue-light-heavy text-xs font-bold pl-6 mb-4"
                    :class="{
                        '!pl-0 text-center':
                            breakpoints.between('md', 'lg').value &&
                            !isSidebarOpen,
                    }"
                >
                    LEADS
                </h2>
                <CraftNavItem
                    label="Contacts"
                    icon="contact-outline"
                    :children="[
                        { label: 'Contacts 1', path: '/contacts1' },
                        { label: 'Contacts 2', path: '/contacts2' },
                        { label: 'Contacts 3', path: '/contacts3' },
                    ]"
                />
                <CraftNavItem label="Leads" icon="lead-outline" path="/leads" />
                <CraftNavItem
                    label="Calendar"
                    icon="calendar-outline"
                    path="/calendar"
                />
                <h2
                    class="navigation-title text-blue-light-heavy text-xs font-bold pl-6 mb-4"
                    :class="{
                        '!pl-0 text-center':
                            breakpoints.between('md', 'lg').value &&
                            !isSidebarOpen,
                    }"
                >
                    CASES
                </h2>
                <CraftNavItem
                    label="Cases"
                    icon="account-outline"
                    path="/cases"
                />
                <CraftNavItem
                    label="Activities"
                    icon="activities-outline"
                    :children="[
                        { label: 'Activities 1', path: '/activities1' },
                        { label: 'Activities 2', path: '/activities2' },
                        { label: 'Activities 3', path: '/activities3' },
                    ]"
                />
            </nav>
        </transition-slide>
    </section>
</template>

<script setup lang="ts">
import CraftNavItem from "@/Components/CraftNavItem.vue";
import CraftIcon from "@/Components/CraftIcon.vue";
import CraftSidebarHeader from "./CraftSidebarHeader.vue";
import useBreakpoints from "@/Composables/useBreakpoints";
import { computed, ref } from "vue";

const { largerThanSm, largerThanMd, largerThanLg, breakpoints } =
    useBreakpoints();

const isSidebarOpen = ref(false);
const test1 = ref(!isSidebarOpen.value);
</script>

<style scoped>
/* Add your custom styles here */
.navigation-list {
    max-height: calc(100% - 6.5rem);
}
</style>
