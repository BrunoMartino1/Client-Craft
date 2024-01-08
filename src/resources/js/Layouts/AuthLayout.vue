<script setup lang="ts">
import CraftIcon from "@/Components/CraftIcon.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";
import CraftButton from "@/Components/CraftButton.vue";

interface Props {
    submitting: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    submitting: false,
});

const emit = defineEmits(["submit"]);
</script>

<template>
    <div class="flex h-screen text-white">
        <section
            class="heroSection relative hidden md:flex items-center justify-center w-[68%] bg-black p-8"
        >
            <img
                class="absolute top-8 left-8"
                src="/images/logo-desktop.svg"
                width="200"
                alt="desktop logo"
            />
            <slot name="hero" />
        </section>
        <section
            class="formSection grow bg-blue-dark-heavy flex flex-col justify-center px-7"
        >
            <div class="flex flex-col gap-4 mb-10">
                <h1 class="font-bold text-2xl">Welcome to Client Craft</h1>
                <p class="text-sm">Please sign-in to your account below</p>
            </div>

            <form @submit.prevent="emit('submit')" class="flex flex-col">
                <!-- FORM -->
                <div class="fieldsContainer flex flex-col gap-4 mb-8">
                    <slot name="form" />
                </div>
                <CraftButton
                    type="submit"
                    :loading="submitting"
                    class="bg-blue-light-heavy"
                >
                    Log in
                </CraftButton>
            </form>
            <div class="footerActions mt-8 flex flex-col gap-8">
                <slot name="footerActions">
                    <div class="flex gap-3 justify-center">
                        <p>New on our plataform?</p>
                        <Link class="text-blue-light-heavy font-medium" href="#"
                            >Create an account</Link
                        >
                    </div>
                    <div class="separator">or</div>
                    <div class="socialMediaLogin flex justify-center gap-6">
                        <Link href="#">
                            <CraftIcon icon="socialMedia/facebook" />
                        </Link>
                        <Link href="#">
                            <CraftIcon icon="socialMedia/twitter" />
                        </Link>
                        <Link href="#">
                            <CraftIcon icon="socialMedia/github" />
                        </Link>
                        <Link href="#">
                            <CraftIcon icon="socialMedia/google" />
                        </Link>
                    </div>
                </slot>
            </div>
        </section>
    </div>
</template>

<style scoped lang="scss">
/* Add your custom styles here */
.separator {
    display: flex;
    line-height: 1em;

    &::before,
    &::after {
        content: "";
        display: inline-block;
        flex-grow: 1;
        margin-top: 0.5em;
        background: #2177b5;
        height: 1px;
    }

    &::before {
        margin-right: 10px;
    }

    &::after {
        margin-left: 10px;
    }
}
</style>
