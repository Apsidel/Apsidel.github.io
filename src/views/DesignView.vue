<script setup>
import GalleryGrid from '../components/GalleryGrid.vue'
import designs from '../assets/galleries/designs-data.json'
</script>
<template>
  <GalleryGrid :data="designs.images" :routeName="'design_item'" :columns="4" />
</template>
