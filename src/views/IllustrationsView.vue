<script setup>
import GalleryGrid from '../components/GalleryGrid.vue'
import illustrations from '../assets/galleries/illustrations-data.json'
</script>
<template>
  <GalleryGrid :data="illustrations.images" :routeName="'illustration_item'" />
</template>
