<script setup>
import GalleryItem from '@/components/GalleryItem.vue'
import photos from '../assets/galleries/photography-data.json'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const index = parseInt(props.id) - 1
const image = photos.images[index]

// Debugging
console.log(image)
</script>
<template>
  <GalleryItem :image="image" />
</template>
