import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        colors: {
            "blue-light": "#3092D9",
            "blue-light-heavy": "#2177B5",
            "blue-light-soft": "#5BA9E1",
            "dark-grey": "#D8D8D8",
            white: "#FFFFFF",
            black: "#041029",
            "blue-dark-heavy": "#061940",
            "blue-dark": "#092257",
            "blue-dark-soft": "#0B2B6F",
        },
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms, typography],
};
