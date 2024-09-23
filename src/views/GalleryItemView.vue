<script setup>
import GalleryItem from '@/components/GalleryItem.vue'
const props = defineProps({
  data: { 
    type: Array, 
    required: true 
  },
  id: {
    type: String,
    required: true
  }
})

const index = parseInt(props.id) - 1
const image = props.data[index]

// Debugging
console.log(image)
</script>
<template>
  <GalleryItem
    :id="image.id"
    :url="image.url"
    :title="image.title"
    :description="image.description"
  ></GalleryItem>
</template>
