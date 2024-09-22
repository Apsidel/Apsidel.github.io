<script setup>
import NavigationBar from './components/NavigationBar.vue'
import MainTitle from './components/MainTitle.vue'
</script>

<template>
  <div class="wrapper">
    <NavigationBar />

    <div class="main-content">
      <MainTitle />
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  position: relative;
  /* background-color: #5B61FF; */
}

.main-content {
  font-family: 'Staatliches', Helvetica, sans-serif;
  /* flex: auto; */
  margin-left: 230px;
  /* background-color: aqua; */
  height: 100%;
  width: max-content;
}
</style>
