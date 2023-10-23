<template>
    <div ref="dropdown" class="relative flex flex-col items-center h-full">
        <button class="h-full" @click="dropdownOpen = !dropdownOpen">
            <slot />
        </button>
        <transition-slide
            :offset="{
                enter: [0, largerThanSm ? '-100%' : '100%'],
                leave: [0, largerThanSm ? '-100%' : '100%'],
            }"
        >
            <div
                v-if="dropdownOpen"
                class="divide-y divide-gray-100 absolute w-max right-0 bottom-full md:bottom-auto md:top-full mb-4 md:mb-0 md:mt-4 p-4 bg-black rounded-lg max-w-[200px]"
            >
                <header v-if="header" class="flex px-3 pt-2 mb-3 gap-[10px]">
                    <CraftIcon :icon="header.icon" :size="20" />
                    <span class="font-bold text-sm">{{ header.label }}</span>
                </header>
                <ul class="flex flex-col">
                    <li
                        v-for="item in items"
                        :key="item.value"
                        class="flex justify-start items-center flex-col rounded-lg px-3 py-[10px] hover:bg-blue-dark-soft transition-colors duration-300 gap-2"
                    >
                        <span class="flex items-center gap-4 w-full"
                            ><CraftIcon
                                v-if="item.icon"
                                :icon="item.icon"
                                :size="17"
                            />
                            <p
                                class="text-xs leading-loose"
                                :class="{ 'font-bold': item.message }"
                            >
                                {{ item.label }}
                            </p></span
                        >
                        <p v-if="item.message" class="text-xs leading-loose">
                            {{ item.message }}
                        </p>
                    </li>
                </ul>
                <footer></footer>
            </div>
        </transition-slide>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CraftIcon, { IconTypes } from "./CraftIcon.vue";
import useBreakpoints from "@/Composables/useBreakpoints";
import { onClickOutside } from "@vueuse/core";

const { largerThanSm } = useBreakpoints();

interface Props {
    header?: {
        icon: IconTypes;
        label: string;
    };
    items: {
        icon?: IconTypes;
        label: string;
        value: string;
        message?: string;
    }[];
}
const dropdown = ref<HTMLUListElement | null>(null);

onClickOutside(dropdown, (event) =>
    dropdownOpen.value ? (dropdownOpen.value = !dropdownOpen.value) : null
);

const props = defineProps<Props>();
const dropdownOpen = ref<boolean>(false);
</script>
