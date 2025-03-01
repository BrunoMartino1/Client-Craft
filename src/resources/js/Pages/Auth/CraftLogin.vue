<script setup lang="ts">
import { Head, Link, useForm } from "@inertiajs/vue3";
import { onMounted, ref } from "vue";
import CraftInput from "@/Components/CraftInput.vue";
import AuthLayout from "@/Layouts/AuthLayout.vue";
import axios from "axios";
import route from "ziggy-js";

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: "",
    password: "",
    remember: false,
});

onMounted(() => {
    axios.get("/sanctum/csrf-cookie").then((response) => {
        console.log(response);
    });
});

const submitting = ref<boolean>(false);
const submit = () => {
    submitting.value = true;
    form.transform((data) => ({
        ...data,
        remember: form.remember ? "on" : "",
    })).post(route("login"), {
        onFinish: () => {
            form.reset("password");
            submitting.value = false;
        },
    });
};

const authLabels = {
    pageIntroH1: "Welcome to Client Craft",
    pageIntroP: "Please sign-in to your account below",
    submitButtonLabel: "Login",
    pageFooterP: "New on our plataform?",
    pageFooterLink: "Create an account",
};
</script>

<template>
    <AuthLayout :submitting="submitting" @submit="submit" :auth-data="authLabels">
        <Head title="Log in" />

        <template #hero>
            <img src="/images/loginHero.svg" alt="Login hero image" />
        </template>

        <template #form>
            <!-- EMAIL INPUT -->
            <CraftInput v-model="form.email" placeholder="Email" type="email" />

            <!-- PASSWORD INPUT -->
            <CraftInput
                v-model="form.password"
                placeholder="Password"
                type="password"
                icon="show-outline-black"
            />

            <!-- CHECKBOX -->
            <div class="flex justify-between">
                <div class="flex items-center">
                    <input
                        id="checkbox-1"
                        aria-describedby="checkbox-1"
                        type="checkbox"
                        class="bg-gray-50 border-gray-300 focus:ring-0 focus:ring-offset-0 h-4 w-4 rounded"
                        checked=""
                    />
                    <label
                        for="checkbox-1"
                        class="text-sm select-none ml-3 font-medium text-gray-900"
                        >Remember me</label
                    >
                </div>

                <Link
                    href="/forgotpassword"
                    class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                >
                    Forgot password?
                </Link>
            </div>
        </template>
    </AuthLayout>
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
