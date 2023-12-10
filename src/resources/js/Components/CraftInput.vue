<script setup lang="ts">
import { computed } from "vue";
import CraftIcon, { IconTypes } from "./CraftIcon.vue";

interface Props {
    icon?: IconTypes;
    placeholder: string;
    type: "email" | "password";
    modelValue: string;
}

const props = defineProps<Props>();

const emit = defineEmits(["update:modelValue"]);
const value = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emit("update:modelValue", value);
    },
});
</script>

<template>
    <div class="relative w-full">
        <input
            class="flex border border-input p-3.5 pr-5 focus:ring-0 focus:ring-offset-0 placeholder:text-muted-foreground disabled:cursor-not-allowed bg-white rounded-lg w-full text-base text-black focus:outline-none"
            id="email"
            :placeholder="placeholder"
            v-model="value"
            :type="type"
        />
        <div
            class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
        >
            <CraftIcon v-if="icon" :icon="icon" />
        </div>
    </div>
</template>
