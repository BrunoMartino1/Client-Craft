<script setup>
import { Head, Link, useForm } from "@inertiajs/vue3";
import { onMounted, ref } from "vue";
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

const submitButtonLabel = ref("Create Account");

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
    pageIntroH1: "Let's give the first step",
    pageIntroP: "Fill your data below to create your account",
    submitButtonLabel: "Create Account",
    pageFooterP: "Already have an account?",
    pageFooterLink: "Sign-in instead",
};
</script>

<template>
    <AuthLayout @submit="submit" :auth-data="authLabels">
        <Head title="Register" />

        <template #hero>
            <img src="/images/registerHero.svg" alt="Login hero image" />
        </template>

        <template #form>
            <!-- USERNAME INPUT -->
            <CraftInput
                v-model="form.username"
                placeholder="Username"
                type="text"
            />

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
                        >I Agree to privacy policy & terms</label
                    >
                </div>
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
