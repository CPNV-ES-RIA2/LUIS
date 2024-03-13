<template>
  <the-header></the-header>
  <main class="container mt-3 d-flex flex-column gap-3">
    <section>
      <the-analyse-form></the-analyse-form>
    </section>
    <section>
      <the-analyse-result :labels="labels"></the-analyse-result>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue';

import TheHeader from './components/layout/TheHeader.vue';
import TheAnalyseForm from './views/analyses/TheAnalyseForm.vue';
import TheAnalyseResult from './views/analyses/TheAnalyseResult.vue';

const labels = ref([
  { entity_name: 'Sports', score: 97 },
  { entity_name: 'Sports Jersey', score: 90 },
  { entity_name: 'Football Player', score: 85 },
]);
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
