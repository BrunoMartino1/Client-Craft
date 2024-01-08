<script setup lang="ts">
import CraftIcon, { IconTypes } from "./CraftIcon.vue";
import CraftLoader from "./CraftLoader.vue";

const variantStyles = {
    default: "py-3.5",
    slim: "py-2",
    outline: "bg-transparent border border-white",
};

type VariantKey = keyof typeof variantStyles;

interface Props {
    label?: string;
    type?: "submit" | "button";
    bgColor?: string;
    icon?: IconTypes;
    variant?: VariantKey | VariantKey[];
    loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    type: "button",
    variant: "default",
    loading: false,
});
</script>

<template>
    <button
        :type="type"
        :class="[
            bgColor,
            Array.isArray(variant)
                ? variant.map((i) => variantStyles[i])
                : variantStyles[variant],
        ]"
        class="text-white hover:bg-blue-dark-softer transition-colors focus:ring-0 text-sm px-5 focus:outline-none rounded-[10px]"
    >
        <CraftLoader v-if="loading" />
        <span v-else class="flex justify-center items-center gap-1">
            <CraftIcon v-if="icon" :icon="icon" />
            <slot>{{ label }}</slot>
        </span>
    </button>
</template>

<style scoped lang="scss"></style>
