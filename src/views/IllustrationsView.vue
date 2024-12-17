<script setup>
import GalleryGrid from '../components/GalleryGrid.vue';

const props = defineProps({
  data: Array
})
console.log(props.data);
</script>
<template>
  <GalleryGrid :data="data" :routeName="'gallery_item'"/>
</template>