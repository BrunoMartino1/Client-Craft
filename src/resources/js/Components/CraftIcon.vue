<template>
    <img
        class="object-fill"
        :src="`/icons/${icon}.svg`"
        :width="'string' === typeof size ? sizeMap[size] : size"
        :alt="`icon ${icon}`"
    />
</template>

<script lang="ts">
// All new icons should be added here
const IconMap = [
    "socialMedia/twitter",
    "socialMedia/facebook",
    "socialMedia/google",
    "socialMedia/github",
    "information-circle-outline",
    "profile-circle-outline",
    "notification-outline",
    "preferences-outline",
    "time-circle-outline",
    "show-outline-black",
    "activities-outline",
    "dashboard-outline",
    "arrowDown-outline",
    "calendar-outline",
    "account-outline",
    "message-outline",
    "arrowUp-outline",
    "contact-outline",
    "logout-outline",
    "search-outline",
    "filter-outline",
    "lead-outline",
    "sort-outline",
    "add-outline",
    "dot-bold",
    "close",
    "menu",
    // Below here we have flags
    "brazil-rounded",
    "portugal-rounded",
    "united-states-rounded",
] as const;

export type IconTypes = (typeof IconMap)[number];
</script>

<script setup lang="ts">
import { computed } from "vue";

type Sizes = {
    default: number;
    full: string;
};
const sizeMap: Sizes = {
    default: 23,
    full: "100%",
} as const;

interface Props {
    icon: IconTypes;
    size?: keyof Sizes | number;
}
const imageHeight = computed(() =>
    "string" === typeof props.size
        ? sizeMap[props.size] + "px"
        : props.size + "px",
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
