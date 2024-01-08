<template>
    <div
        class="header flex flex-1 md:flex-none justify-between md:justify-center px-6 h-[10%]"
        :class="{
            '!px-0': isBetweenMdAndLg && !isSidebarOpen,
        }"
    >
        <transition-slide
            :offset="{
                enter: [0, 0],
                leave: ['-100%', 0],
            }"
            group
            mode="out-in"
            :delay="{ enter: 300, leave: 0 }"
        >
            <img
                v-if="isBetweenMdAndLg && !isSidebarOpen"
                src="/images/logo-mobile.svg"
                width="23"
                alt="mobile logo"
            />
            <img
                v-else
                src="/images/logo-desktop.svg"
                width="200"
                alt="desktop logo"
            />
        </transition-slide>
        <CraftIcon class="md:hidden" icon="menu" @click="emit('click')" />
    </div>
</template>

<script setup lang="ts">
import CraftIcon from "@/Components/CraftIcon.vue";
import useBreakpoints from "@/Composables/useBreakpoints";

interface Props {
    isSidebarOpen: boolean;
}

const emit = defineEmits(["click"]);

const props = defineProps<Props>();
const { breakpoints } = useBreakpoints();
const isBetweenMdAndLg = breakpoints.between("md", "lg");
</script>
