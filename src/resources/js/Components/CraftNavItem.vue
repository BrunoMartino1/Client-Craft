<template>
    <div ref="root">
        <component
            :is="path ? Link : 'div'"
            @click="open = !open"
            :href="path"
            class="navigation-item transition-colors flex mb-[5px] px-6 py-[14px] lg:hover:bg-blue-dark hover:cursor-pointer text-sm"
            :class="{
                'bg-blue-dark-soft border-r-4 border-r-blue-light-heavy':
                    path === $page.url ||
                    children?.find((child) => child.path === $page.url),
                'bg-transparent': !open,
                '!px-0 justify-center': isCompact,
            }"
        >
            <CraftIcon
                class="mr-2.5"
                :class="{
                    '!mr-0': isCompact,
                }"
                :icon="icon"
            />
            <template v-if="!isCompact">
                <p class="text-sm flex-1">{{ label }}</p>
                <Transition v-if="children?.length" name="arrow" mode="out-in">
                    <CraftIcon v-if="open" :icon="`arrowUp-outline`" />
                    <CraftIcon v-else :icon="`arrowDown-outline`" />
                </Transition>
            </template>
        </component>

        <transition-expand>
            <div class="childrenContainer" v-if="children?.length && open">
                <Link
                    :key="child.label"
                    class="child-item flex items-center m-auto mb-[5px] px-8 py-[14px] lg:hover:bg-blue-dark hover:cursor-pointer"
                    :class="{
                        'border-x-4 border-x-blue-light-heavy bg-blue-dark-soft':
                            $page.url === child.path,
                        '!px-4': isCompact,
                    }"
                    :href="child.path"
                    v-for="child in children"
                >
                    <CraftIcon
                        class="mr-3.5"
                        :class="{ '!m-auto': isCompact }"
                        :size="7"
                        icon="dot-bold"
                    />
                    <p v-if="!isCompact" class="text-sm flex-1">
                        {{ child.label }}
                    </p>
                </Link>
            </div>
        </transition-expand>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import CraftIcon, { IconTypes } from "./CraftIcon.vue";
import { useElementSize } from "@vueuse/core";
import { Link } from "@inertiajs/vue3";

interface Props {
    label: string;
    icon: IconTypes;
    path?: string;
    compact?: boolean;
    children?: Array<{
        label: string;
        path: string;
    }>;
}

const props = defineProps<Props>();
const root = ref<HTMLElement | null>(null);
const { width: rootWidth } = useElementSize(root);
const isCompact = computed(() => rootWidth.value <= 100);
const open = ref(false);
//
</script>

<style scoped lang="scss">
.arrow-leave-to {
    transform: rotate(180deg);
}

.arrow-leave-active {
    transition: all 750ms ease-in-out;
}
</style>
