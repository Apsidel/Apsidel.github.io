<script setup>
import GalleryItem from '@/components/GalleryItem.vue'
import illustrations from '../assets/galleries/designs-data.json'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const index = parseInt(props.id) - 1
const image = illustrations.images[index]

// Debugging
console.log(image)
</script>
<template>
  <GalleryItem :image="image" />
</template>
