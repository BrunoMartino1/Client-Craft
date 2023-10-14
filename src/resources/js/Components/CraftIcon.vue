<template>
    <img
        :src="`/icons/${icon}.svg`"
        :width="'string' === typeof size ? sizeMap[size] : size"
        :alt="`icon ${icon}`"
    />
</template>

<script setup lang="ts">
import { computed } from "vue";

// All new icons should be added here
const IconMap = [
    "dashboard-outline",
    "arrowUp-outline",
    "arrowDown-outline",
    "dot-bold",
    "activities-outline",
    "lead-outline",
    "account-outline",
    "contact-outline",
    "calendar-outline",
    "search-outline",
    "close",
    "menu",
] as const;

export type IconTypes = (typeof IconMap)[number];

type Sizes = {
    default: number;
};
const sizeMap: Sizes = {
    default: 23,
} as const;

interface Props {
    icon: IconTypes;
    size?: keyof Sizes | number;
}
const imageHeight = computed(() =>
    "string" === typeof props.size
        ? sizeMap[props.size] + "px"
        : props.size + "px"
);
const props = withDefaults(defineProps<Props>(), {
    size: "default",
});
</script>

<style scoped lang="scss">
img {
    height: v-bind(imageHeight);
}
</style>
