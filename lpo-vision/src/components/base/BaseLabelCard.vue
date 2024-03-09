<template>
    <div class="card p-1 bg-secondary text-white">
        <section class="card-body d-flex flex-row justify-content-between align-items-center">
            <section class="d-flex flex-column justify-content-center">
                <h5>
                    Label name
                </h5>
                <p class="fs-4 label-name">
                    {{ label.entity_name }}
                </p>
            </section>
            <section class="d-flex flex-column justify-content-center">
                <h5>
                    Score
                </h5>
                <p class="fs-4 label-score">
                    {{ label.score }}%
                </p>
            </section>
        </section>
    </div>
</template>

<script>
export default {
    props: ['label']
}
</script>

<style></style>
