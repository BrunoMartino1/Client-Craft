<script setup lang="ts">
import CraftIcon from "@/Components/CraftIcon.vue";
import CraftDropdown from "./CraftDropdown.vue";
import CraftSearchBar from "./CraftSearchBar.vue";
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
        <CraftSearchBar class="w-1/3" />
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
                        icon: 'preferences-outline',
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
