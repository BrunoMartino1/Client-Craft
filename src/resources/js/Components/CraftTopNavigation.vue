<script setup lang="ts">
import CraftIcon from "@/Components/CraftIcon.vue";
import CraftDropdown from "./CraftDropdown.vue";
import CraftAvatar from "./CraftAvatar.vue";
import route from "ziggy-js";
import axios from "axios";
import { router } from "@inertiajs/vue3";

const callLogoutRoute = () => {
    axios.post(route("logout")).then((res) => {});
};
</script>

<template>
    <nav
        ref="topNavigation"
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
                class="block bg-blue-dark-heavy w-full p-2.5 pl-10 placeholder:dark-grey text-sm text-gray-900 border-0 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
            />
        </div>
        <div class="group flex items-center gap-4 h-full">
            <CraftIcon icon="add-outline" />
            <CraftDropdown
                class="notification-dropdown"
                :header="{
                    icon: 'notification-outline',
                    label: 'Notifications',
                }"
                :items="[
                    {
                        icon: 'message-outline',
                        label: 'Message',
                        message: 'You have a new message from SOMEONE',
                        // TODO: this still needs to be improved somehow
                        value: 'id da mensagem',
                    },
                ]"
            >
                <CraftIcon icon="notification-outline" />
            </CraftDropdown>

            <CraftDropdown
                class="language-dropdown"
                :items="[
                    {
                        icon: 'brazil-rounded',
                        label: 'Portuguese',
                        value: 'BR',
                    },
                ]"
            >
                <CraftIcon icon="united-states-rounded" />
            </CraftDropdown>

            <CraftDropdown
                :items="[
                    {
                        icon: 'profile-circle-outline',
                        label: 'Administration',
                        value: 'adm',
                    },
                    {
                        icon: 'filter-outline',
                        label: 'Preferences',
                        value: 'pref',
                    },
                    {
                        icon: 'time-circle-outline',
                        label: 'Last Viewed',
                        value: 'lastview',
                    },
                ]"
                :footer="[
                    {
                        icon: 'information-circle-outline',
                        label: 'About',
                    },
                    {
                        icon: 'logout-outline',
                        label: 'Logout',
                        callback: callLogoutRoute,
                    },
                ]"
            >
                <div
                    class="flex items-center gap-[5px] bg-blue-dark-heavy rounded-full py-1 pr-2"
                >
                    <CraftAvatar />
                    <span class="text-xs">Uziel Renta</span>
                    <CraftIcon icon="arrowDown-outline" />
                </div>
            </CraftDropdown>
        </div>
    </nav>
</template>
