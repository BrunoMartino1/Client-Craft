<script setup lang="ts">
import Vue3Datatable from "@bhplugin/vue3-datatable";
import "@bhplugin/vue3-datatable/dist/style.css";
import CraftSearchBar from "@/Components/CraftSearchBar.vue";
import CraftButton from "@/Components/CraftButton.vue";
import { computed, onMounted, ref } from "vue";

interface Props {
    columns: any;
}

const props = defineProps<Props>();

// // Define your columns based on the example image
// const columns = ref([
//   { title: '#', field: 'id ' },
//   { title: 'Name', field: 'name' },
//   { title: 'Website', field: 'website', search: false },
//   { title: 'Industry', field: 'industry', search: false },
//   { title: 'Country', field: 'country', search: false },
//   { title: 'Type', field: 'type', search: false },
//   { title: 'Action', field: 'action', search: false },
//   // Add more columns as needed
// ]);

// Define your rows based on the example image
const rows = ref([
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 6,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 2,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 4,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 9,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 7,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 5,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 3,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 6,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 3,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 2,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 6,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 9,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 6,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 13,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 12,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 15,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 18,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 10,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 143,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1325,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 12,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 17,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1568,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 12346,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1288,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    {
        id: 1,
        name: "Miles, Esther",
        email: "www.winrsphospital.biz.fr",
        phone: "Developer",
        country: "Curaçao",
        type: "Customer",
    },
    // Add more rows as needed
]);

const tableHeight = ref<HTMLDivElement | null>(null);
const rowHeight = ref<HTMLElement | null>(null);
const pageSize = ref(10);
const pageSizeOptions = ref<number[]>();
// TODO: UNIT TEST AND REFACTOR THIS
onMounted(() => {
    tableHeight.value = document.querySelector(".bh-table-responsive");
    rowHeight.value = document.querySelector(".table-section table tbody tr");

    const rowHeightValue = rowHeight.value?.getBoundingClientRect().height;
    if (tableHeight.value) {
        pageSize.value = Math.floor(
            (tableHeight.value.getBoundingClientRect().height - 80) /
                (rowHeightValue ?? 46),
        );
    }

    pageSizeOptions.value = [10, 20, 30, 40, 50, 100, 200, pageSize.value].sort(
        (a, b) => a - b,
    );

    window.addEventListener("resize", () => {
        tableHeight.value = document.querySelector(".bh-table-responsive");
        rowHeight.value = document.querySelector(
            ".table-section table tbody tr",
        );

        const rowHeightValue = rowHeight.value?.getBoundingClientRect().height;
        if (tableHeight.value) {
            pageSize.value = Math.floor(
                (tableHeight.value.getBoundingClientRect().height - 80) /
                    (rowHeightValue ?? 46),
            );
        }

        pageSizeOptions.value = [
            10,
            20,
            30,
            40,
            50,
            100,
            200,
            pageSize.value,
        ].sort((a, b) => a - b);
    });
});

const rowClick = (user: any) => {
    alert(
        "User Details \n" +
            user.id +
            ", " +
            user.firstName +
            ", " +
            user.lastName +
            ", " +
            user.email,
    );
};

const loading = computed(() => {
    return !pageSize.value;
});

const search = ref("");
const changeServer = (data: any) => {
    console.log(data);
};

const sortColumn = ref("id");
const sortDirection = ref("asc");
</script>

<template>
    <section
        class="table-section flex flex-col flex-1 bg-black rounded-xl border border-blue-dark-soft p-5"
    >
        <div class="flex justify-between mb-5">
            <CraftSearchBar class="w-1/3" v-model="search" />
            <div class="flex gap-3">
                <CraftButton
                    :variant="['slim', 'outline']"
                    icon="filter-outline"
                    label="Filter"
                />
                <CraftButton
                    :variant="['slim', 'outline']"
                    icon="sort-outline"
                    label="Sort by"
                />
            </div>
        </div>
        <vue3-datatable
            :sortColumn="sortColumn"
            :sortDirection="sortDirection"
            :sortable="true"
            :key="'test' + pageSize"
            v-if="pageSize"
            skin="bh-table-hover"
            :page-size-options="pageSizeOptions"
            :page-size="pageSize"
            :columns="columns"
            :rows="rows"
            :loading="loading"
            :hasCheckbox="true"
            :pagination="true"
            :globalSearch="true"
            :search="search"
            @change="changeServer"
            :stickyHeader="true"
            class="min-h-[380px]"
            @rowClick="rowClick"
            rowClass="cursor-pointer"
        >
            <!-- Customize with slots as needed -->
            <template #action="data">
                <!-- COLOCAR AQUI AS ACOES DE CADA ROW, PROVAVELMENTE TEMOS ACESSO AOS DADOS ATRAVES DO DATA -->
                teste
            </template>
        </vue3-datatable>
    </section>
</template>

<style lang="scss">
.bh-datatable {
    @apply flex flex-col flex-1 text-white;

    .bh-table-responsive {
        @apply flex flex-col flex-1 border border-blue-dark-soft rounded-lg;

        table {
            table-layout: auto;

            thead {
                tr,
                th {
                    @apply bg-blue-dark-soft;
                }
            }

            &.bh-table-hover {
                .bh-text-black\/20 {
                    @apply text-white;
                }

                .\!bh-text-primary {
                    /* prettier-ignore */
                    @apply text-blue-light-soft #{!important};
                }

                tbody {
                    tr {
                        @apply border-blue-dark-soft;

                        &:hover {
                            @apply bg-blue-dark-soft;
                        }
                    }
                }
            }
        }
    }
}
</style>
