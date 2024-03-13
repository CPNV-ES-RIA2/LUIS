<template>
    <div class="card p-3 bg-dark text-white">
        <div class="card-body">
            <h2 class="card-title">{{ resultsHeader }}</h2>
            <p v-if="labels.length === 0" class="no-labels">
                {{ noResults }}
            </p>
            <div class="labels d-flex flex-column gap-3" v-else>
                <table class="table table-striped table-borderless">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">{{ labelHeader }}</th>
                            <th scope="col">{{ confidenceHeader }}</th>
                        </tr>
                    </thead>
                    <tbody class="table">
                        <tr v-for="(label, index) in labels" :key="label.entity_name">
                            <td>{{ index + 1 }}</td>
                            <td class="label-name">{{ label.entity_name }}</td>
                            <td class="label-score">{{ label.score }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, defineProps } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const props = defineProps(['labels']);

const resultsHeader = computed(() => { return t('resultsHeader') })
const noResults = computed(() => { return t('noResults') })
const labelHeader = computed(() => { return t('labelHeader') })
const confidenceHeader = computed(() => { return t('confidenceHeader') })

</script>

<style></style>
