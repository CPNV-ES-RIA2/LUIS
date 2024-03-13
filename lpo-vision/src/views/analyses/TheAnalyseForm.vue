<template>
    <div class="card p-3 bg-dark text-white">
        <div class="card-body">
            <h2 class="card-title">{{ formHeader }}</h2>
            <form class="d-flex flex-column justify-content-center gap-3 align-items-center"
                @submit.prevent="submitForm">
                <div class="mb-3">
                    <label for="inputImage" class="form-label">
                        {{ fileInputLabel }}
                    </label>
                    <input class="form-control" type="file" id="inputImage" accept="image/*" ref="fileInput" />
                </div>
                <div class="d-flex flex-row gap-3">
                    <div class="mb-3">
                        <label for="inputMinConfidence" class="form-label">
                            {{ minConfidenceLabel }}
                        </label>
                        <input type="number" id="inputMinConfidence" class="form-control" min="1" max="100"
                            v-model.number="minConfidence" />
                    </div>
                    <div class="mb-3">
                        <label for="inputMaxLabels" class="form-label">
                            {{ maxLabelsLabel }}
                        </label>
                        <input type="number" id="inputMaxLabels" class="form-control" min="1" max="50"
                            v-model.number="maxLabels" />
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">
                    {{ submitButtonText }}
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const minConfidence = ref(90);
const maxLabels = ref(5);
const fileInput = ref(null);

function submitForm() {
    const inputImage = document.getElementById('inputImage');
    const file = inputImage.files[0];
    const formData = {
        image: file,
        minConfidence: minConfidence.value,
        maxLabels: maxLabels.value,
    };
    console.log(formData);
}

// i18n translations
const formHeader = computed(() => { return t('formHeader') })
const fileInputLabel = computed(() => { return t('fileInputLabel') })
const minConfidenceLabel = computed(() => { return t('minConfidenceLabel') })
const maxLabelsLabel = computed(() => { return t('maxLabelsLabel') })
const submitButtonText = computed(() => { return t('submitButton') })
</script>
