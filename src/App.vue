<script setup>
import NavigationBar from './components/NavigationBar.vue'
import MainTitle from './components/MainTitle.vue'
</script>

<template>
  <body>
    <header><MainTitle /></header>
    <nav><NavigationBar /></nav>
    <section>
      <RouterView v-slot="{ Component }">
        <Transition name="page-opacity" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </section>
  </body>
</template>

<style scoped>
@media (min-width: 320px) {
  body {
    display: inline-block;
  }

  header {
    position: static;
    line-height: 4.5em;
  }
}

@media (min-width: 1000px) {
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
    display: initial;
    top: 0;
    height: 100vh;
  }

  body > section {
    grid-area: content;
    min-height: 750px;
  }
}

.page-opacity-enter-active,
.page-opacity-leave-active {
  transition: 250ms ease all;
}

.page-opacity-enter-from,
.page-opacity-leave-to {
  opacity: 0;
}
</style>
