<script setup>
import GalleryGrid from '../components/GalleryGrid.vue'
import photos from '../assets/galleries/photography-data.json'
</script>
<template>
  <GalleryGrid :data="photos.images" :routeName="'photo_item'" :columns="3" />
</template>
