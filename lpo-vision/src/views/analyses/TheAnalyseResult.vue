<template>
    <div class="card p-3 bg-dark text-white">
        <div class="card-body">
            <h2 class="card-title">{{ $t('resultsHeader') }}</h2>
            <p v-if="labels.length === 0" class="no-labels">{{ $t('noResults') }}</p>
            <div class="labels d-flex flex-column gap-3" v-else>
                <base-label-card v-for="label in labels" :key="label.name" :label="label"></base-label-card>
            </div>
        </div>
    </div>
</template>

<script>
import BaseLabelCard from '@/components/base/BaseLabelCard.vue'
export default {
    components: {
        BaseLabelCard,
    },
    computed: {
        labels() {
            return this.$store.getters.getLabels
        }
    }
}
</script>

<style></style>
