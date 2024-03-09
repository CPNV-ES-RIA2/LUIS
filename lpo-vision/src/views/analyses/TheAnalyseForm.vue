<template>
    <h2>Analyse a picture</h2>
    <form class="d-flex flex-row justify-content-center gap-4 align-items-center">
        <div class="mb-3">
            <label for="inputImage" class="form-label">Select a picture</label>
            <input class="form-control" type="file" id="inputImage" accept="image/*">
        </div>
        <div>
            <div class="mb-3">
                <label for="inputMinConfidence" class="form-label">Minimum Confidence</label>
                <input type="number" id="inputMinConfidence" class="form-control" min="1" max="100"
                    v-model="minConfidence">
            </div>
            <div class="mb-3">
                <label for="inputMaxLabels" class="form-label">Maximum Labels</label>
                <input type="number" id="inputMaxLabels" class="form-control" min="1" max="50" v-model="maxLabels">
            </div>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            minConfidence: 90,
            maxLabels: 5,
        }
    },

}
</script>

<style></style>
