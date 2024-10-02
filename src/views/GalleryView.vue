<script setup>
const props = defineProps({
  data: Array
})
console.log(props.data);
</script>

<template>
  <section id="container">
    <div v-for="image in data" :key="image.id">
      <RouterLink :to="{ name: 'gallery_item', params: { id: image.id }, props: { id: image.id } }">
        <img :src="'./src/assets/images/' + image.url" :alt="image.title"/>
      </RouterLink>
    </div>
  </section>
</template>
<style>
div #container {
  /* Prevent vertical gaps */
  line-height: 0;

  -webkit-column-count: 3;
  -webkit-column-gap: 0px;
  -moz-column-count: 3;
  -moz-column-gap: 0px;
  column-count: 3;
  column-gap: 0px;

  background-color: black;
}

#container img {
  width: 100% !important;
  height: auto !important;
}
</style>
