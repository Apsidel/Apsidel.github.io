<script setup>
import GalleryItem from '@/components/GalleryItem.vue'
import photos from '../assets/galleries/photography-data.json'
import illustrations from '../assets/galleries/illustrations-data.json'
import { useRoute } from 'vue-router'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

let data = []
const routeName = useRoute().name

if (routeName == 'photo_item') {
  data = photos.images
} else if (routeName == 'illustration_item') {
  data = illustrations.images
}

const index = parseInt(props.id) - 1
const image = data[index]

// Debugging
console.log(routeName)
console.log(image)
</script>
<template>
  <GalleryItem
    :id="image.id"
    :url="image.url"
    :title="image.title"
    :description="image.description"
  />
</template>
