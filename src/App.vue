<script setup>
import NavigationBar from './components/NavigationBar.vue'
import MainTitle from './components/MainTitle.vue'
import data from './gallery/gallery-data.json'
</script>

<template>
  <div class="wrapper">
    <NavigationBar />

    <div class="main-content">
      <MainTitle />
      <RouterView :data="data.images" />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  position: relative;
}

.main-content {
  font-family: 'Staatliches', Helvetica, sans-serif;
  margin-left: 230px;
  height: 100%;
  width: max-content;
}
</style>
