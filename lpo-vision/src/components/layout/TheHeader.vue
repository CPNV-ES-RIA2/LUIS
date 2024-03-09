<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div class="container-md">
                <a class="navbar-brand" href="#">LPOVISION</a>
                <the-locale-dropdown></the-locale-dropdown>
            </div>
        </nav>
    </header>
</template>

<script>
import TheLocaleDropdown from '../TheLocaleDropdown.vue'
export default {
    components: {
        TheLocaleDropdown,
    },
}
</script>

<style scoped></style>
