<template>
  <the-header></the-header>
  <main class="container">
    <section>
      <the-analyse-form></the-analyse-form>
    </section>
  </main>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
import TheAnalyseForm from './views/analyses/TheAnalyseForm.vue'

export default {
  components: {
    TheHeader,
    TheAnalyseForm
  },
}
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
