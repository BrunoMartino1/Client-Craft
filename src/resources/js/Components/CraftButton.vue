<script setup lang="ts">
interface Props {
    label?: string;
    type?: "submit" | "button";
}

const props = withDefaults(defineProps<Props>(), {
    type: "button",
});
</script>

<template>
    <button
        :type="type"
        class="text-white bg-blue-light-heavy hover:bg-blue-dark-softer transition-colors focus:ring-0 text-sm px-5 py-3.5 focus:outline-none rounded-[10px]"
    >
        <slot>{{ label }}</slot>
    </button>
</template>

<style scoped lang="scss"></style>
