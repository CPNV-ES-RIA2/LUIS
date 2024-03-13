<template>
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      {{ selectedLocale }}
    </button>
    <ul class="dropdown-menu">
      <li v-for="locale in availableLocales" :key="locale">
        <button class="dropdown-item" @click="updateLocale(locale)">
          {{ locale }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale, availableLocales } = useI18n();

const selectedLocale = computed(() => {
  return locale.value;
});

function updateLocale(newLocale) {
  locale.value = newLocale.toLowerCase();
}
</script>
