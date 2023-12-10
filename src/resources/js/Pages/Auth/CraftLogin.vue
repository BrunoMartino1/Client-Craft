<script setup>
import { Head, Link, useForm } from "@inertiajs/vue3";
import { onMounted } from "vue";
import AuthenticationCard from "@/Components/AuthenticationCard.vue";
import AuthenticationCardLogo from "@/Components/AuthenticationCardLogo.vue";
import Checkbox from "@/Components/Checkbox.vue";
import InputError from "@/Components/InputError.vue";
import CraftInput from "@/Components/CraftInput.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import AuthLayout from "@/Layouts/AuthLayout.vue";

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

const submit = () => {
    form.transform((data) => ({
        ...data,
        remember: form.remember ? "on" : "",
    })).post(route("login"), {
        onFinish: () => form.reset("password"),
    });
};
</script>

<template>
    <AuthLayout @submit="submit">
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

                <!-- TODO: change this route to the reset password page later -->
                <Link
                    :href="route('login')"
                    class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                >
                    Forgot password?
                </Link>
            </div>
        </template>
    </AuthLayout>
</template>
