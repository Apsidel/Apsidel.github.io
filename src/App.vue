<script setup>
import NavigationBar from './components/NavigationBar.vue'
import MainTitle from './components/MainTitle.vue'
</script>

<template>
  <body>
    <header><MainTitle /></header>
    <nav><NavigationBar /></nav>
    <section>
      <RouterView />
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
  position: sticky;
  top: 0;
  z-index: 1;
  background: rgb(255, 255, 255, 0.8);
}

body > nav {
  grid-area: nav;
  position: sticky;
  top: 0;
  height: 100vh;
}

body > section {
  grid-area: content;
  min-height: 750px;
}
</style>
