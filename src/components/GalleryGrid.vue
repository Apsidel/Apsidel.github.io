<script setup>
const props = defineProps({
  data: Array,
  routeName: String
})
console.log(props.data)
</script>

<template>
  <section id="grid">
    <div id="container" v-for="image in data" :key="image.id">
      <RouterLink :to="{ name: routeName, params: { id: image.id }, props: { id: image.id } }">
        <img :src="'./src/assets/images/' + image.url" :alt="image.title" />
        <div id="overlay">{{ image.title }}</div>
      </RouterLink>
    </div>
  </section>
</template>
<style scoped>
#grid {
  /* Prevent vertical gaps */
  line-height: 0;

  -webkit-column-count: 3;
  -webkit-column-gap: 3px;
  -moz-column-count: 3;
  -moz-column-gap: 3px;
  column-count: 3;
  column-gap: 3px;
}

#container {
  position: relative;
}

#container img {
  width: 100% !important;
  height: auto !important;
  padding-bottom: 3px;
  /* max-height: 600px;
  object-fit: cover; */
}

#overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: rgb(0, 0, 0, 0.8);
  color: white;
  text-align: center;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
}

#container:hover #overlay {
  opacity: 1;
}
</style>
