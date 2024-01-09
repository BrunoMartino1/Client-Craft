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
    username: "",
    email: "",
    password: "",
    agree: false,
});

onMounted(() => {
    axios.get("/sanctum/csrf-cookie").then((response) => {
        console.log(response);
    });
});

const submit = () => {
    form.transform((data) => ({
        ...data,
        agree: form.agree ? "on" : "",
    })).post(route("login"), {
        onFinish: () => form.reset("password"),
    });
};

const authLabels = {
    pageIntroH1: "Forgot Password",
    pageIntroP:
        "Enter your email and we'll send you instructions to reset your password",
    submitButtonLabel: "Send",
};
</script>

<template>
    <AuthLayout @submit="submit" :auth-data="authLabels">
        <Head title="Forgot Password" />

        <template #hero>
            <img src="/images/forgotPasswordHero.svg" alt="Login hero image" />
        </template>

        <template #form>
            <!-- EMAIL INPUT -->
            <CraftInput
                v-model="form.email"
                placeholder="Email"
                type="email"
                icon="show-outline-black"
            />
        </template>

        <template #footerActions>
            <div class="flex gap-3 justify-center">
                <Link class="text-blue-light-heavy font-medium" href="/login"
                    >&lt; Back to login</Link
                >
            </div>
        </template>
    </AuthLayout>
</template>

<style scoped lang="scss">
/* Add your custom styles here */
</style>
