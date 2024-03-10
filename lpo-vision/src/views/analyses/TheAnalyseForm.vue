<template>
    <div class="card p-3 bg-dark text-white">
        <div class="card-body">
            <h2 class="card-title">{{ $t('formHeader') }}</h2>
            <form class="d-flex flex-column justify-content-center gap-3 align-items-center"
                @submit.prevent="submitForm">
                <div class="mb-3">
                    <label for="inputImage" class="form-label">{{ $t('fileInputLabel') }}</label>
                    <input class="form-control" type="file" id="inputImage" accept="image/*">
                </div>
                <div class="d-flex flex-row gap-3">
                    <div class="mb-3">
                        <label for="inputMinConfidence" class="form-label">{{ $t('minConfidenceLabel') }}</label>
                        <input type="number" id="inputMinConfidence" class="form-control" min="1" max="100"
                            v-model.number="minConfidence">
                    </div>
                    <div class="mb-3">
                        <label for="inputMaxLabels" class="form-label">{{ $t('maxLabelsLabel') }}</label>
                        <input type="number" id="inputMaxLabels" class="form-control" min="1" max="50"
                            v-model.number="maxLabels">
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">{{ $t('submitButton') }}</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            minConfidence: 90,
            maxLabels: 5,
        }
    },
    methods: {
        submitForm() {
            const inputImage = document.getElementById('inputImage')
            const file = inputImage.files[0]
            const formData = {
                image: file,
                minConfidence: this.minConfidence,
                maxLabels: this.maxLabels,
            }
            console.log(formData);
        },
    },

}
</script>

<style></style>
