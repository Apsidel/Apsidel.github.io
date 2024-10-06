<script setup>
import NavigationBar from './components/NavigationBar.vue'
import MainTitle from './components/MainTitle.vue'
import data from './gallery/gallery-data.json'
</script>

<template>
  <body>
    <header><MainTitle /></header>
    <nav><NavigationBar /></nav>
    <section>
      <RouterView :data="data.images" />
    </section>
  </body>
</template>

<style scoped>
body {
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-template-areas:
    'nav  header'
    'nav  content';
}

body > header {
  grid-area: header;
}

body > nav {
  grid-area: nav;
  position: sticky;
  top: 0;
  height: 100vh;
}

body > section {
  grid-area: content;
}
</style>
