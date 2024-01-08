<script setup lang="ts">
import CraftButton from "@/Components/CraftButton.vue";
import CraftTable from "@/Components/CraftTable.vue";
import DashboardLayout from "@/Layouts/DashboardLayout.vue";
import axios from "axios";
import { table } from "console";
import { onMounted, ref } from "vue";
import route from "ziggy-js";

onMounted(() => {
    getStuff();
});
const cObjectFields = ref<any>([]);
const getStuff = async () => {
    axios
        .get(route("getCobjects", { apiName: "Contact" }))
        .then((res) => console.log(res.data));
    const fieldsResponse = await axios.get(
        route("getCobjectFields", { apiName: "Contact" }),
    );
    cObjectFields.value = transformToTableColumns(fieldsResponse.data, {
        field: "apiName",
        title: "apiName",
    });
};

const transformToTableColumns = (
    fields,
    config: { title: string; field: string },
) => {
    return fields.map((field) => {
        if (!("title" in field)) {
            field["title"] = field[config.title];
        }

        if (!("field" in field)) {
            field["field"] = field[config.field];
        }

        return field;
    });
};

defineOptions({ layout: DashboardLayout });
</script>

<template>
    <section class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-semibold mb-4">Accounts</h1>
        <CraftButton
            icon="add-outline"
            bg-color="bg-blue-dark-soft border border-blue-dark-softer"
            label="Create Account"
        />
    </section>
    <CraftTable :columns="cObjectFields" />
</template>
