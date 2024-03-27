<template>
  <div class="card p-3 bg-dark text-white">
    <div class="card-body">
      <h2 class="card-title">{{ formHeader }}</h2>
      <form class="d-flex flex-column justify-content-center gap-3 align-items-center" @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="inputImage" class="form-label">
            {{ fileInputLabel }}
          </label>
          <input class="form-control" type="file" id="inputImage" accept="image/png, image/jpeg, image/jpg"
            @change="onFileSelected" />
        </div>
        <div class="d-flex flex-row gap-3">
          <div class="mb-3">
            <label for="inputMinConfidence" class="form-label">
              {{ minConfidenceLabel }}
            </label>
            <input type="number" id="inputMinConfidence" class="form-control" min="1" max="100"
              v-model.number="minConfidence" @change="resetFormValidity" />
          </div>
          <div class="mb-3">
            <label for="inputMaxLabels" class="form-label">
              {{ maxLabelsLabel }}
            </label>
            <input type="number" id="inputMaxLabels" class="form-control" min="1" max="50" v-model.number="maxLabels"
              @change="resetFormValidity" />
          </div>
        </div>

        <div class="alert alert-danger" role="alert" v-if="!formIsValid">
          The form is not valid. Please check the fields and try again.
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

const emits = defineEmits(['form-submitted']);

const { t } = useI18n();

const minConfidence = ref(90);
const maxLabels = ref(5);
const fileInput = ref(null);
const formIsValid = ref(true);

function onFileSelected(event) {
  resetFormValidity();
  const selectedFile = event.target.files[0];

  if (isFileValid(selectedFile)) {
    fileInput.value = selectedFile;
  } else {
    alert('Invalid file type or size. Please select a valid image file (png, jpg, jpeg) less than 2MB');
    fileInput.value = null;

    event.target.value = '';
  }
}

function isFileValid(file) {
  const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
  const maxSize = 2 * 1024 * 1024;

  if (!file) {
    return false;
  } else if (!allowedTypes.includes(file.type)) {
    return false;
  } else if (file.size > maxSize) {
    return false;
  }
  return true;
}

function maxLabelsIsValid(maxLabelsValue) {
  if (!maxLabelsValue) {
    return false;
  } else if (maxLabelsValue < 1 && maxLabelsValue > 50) {
    return false;
  }
  return true;
}

function minConfidenceIsValid(minConfidenceValue) {
  if (!minConfidenceValue) {
    return false;
  } else if (minConfidenceValue < 1 && minConfidenceValue > 100) {
    return false;
  }
  return true;
}

function resetFormValidity() {
  formIsValid.value = true;
}

function submitForm() {
  formIsValid.value = true;
  if (
    !minConfidenceIsValid(minConfidence.value) ||
    !maxLabelsIsValid(maxLabels.value) ||
    !isFileValid(fileInput.value)
  ) {
    formIsValid.value = false;
    return;
  }
  const formData = {
    image: fileInput.value,
    minConfidence: minConfidence.value,
    maxLabels: maxLabels.value,
  };

  emits('form-submitted', formData);
}

// i18n translations
const formHeader = computed(() => {
  return t('formHeader');
});
const fileInputLabel = computed(() => {
  return t('fileInputLabel');
});
const minConfidenceLabel = computed(() => {
  return t('minConfidenceLabel');
});
const maxLabelsLabel = computed(() => {
  return t('maxLabelsLabel');
});
const submitButtonText = computed(() => {
  return t('submitButton');
});
</script>
