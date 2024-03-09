<template>
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ activeLocale.name }}
        </button>
        <ul class="dropdown-menu">
            <li v-for="localeData in  locales " :key="localeData.locale">
                <button class="dropdown-item" @click="selectLocale(localeData)">
                    {{ localeData.name }}
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isActive: false,
            hoveredOption: null,
        }
    },
    computed: {
        activeLocale() {
            return this.$store.getters.getActiveLocale
        },
        locales() {
            return this.$store.getters.getLocales.filter(locale => locale != this.activeLocale)
        },
    },
    methods: {
        toggleDropdown() {
            this.isActive = !this.isActive
        },
        selectLocale(locale) {
            this.$store.dispatch('updateActiveLocale', { localeData: locale })
        },
    },
}
</script>
