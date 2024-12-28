<script setup>
import CameraSettings from '@/components/CameraSettings.vue'
import photography from '../assets/galleries/photography-data.json'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const index = parseInt(props.id) - 1
const image = photography.images[index]

// Debugging
console.log(image)
</script>
<template>
  <section id="image_container">
    <img :src="'../../src/assets/images/' + image.url" :alt="image.title" />
  </section>
  <section id="text_container">
    <h1>{{ image.title }}</h1>
    <ul>
      <li
        id="color-square"
        v-for="color in image.colors.slice(0, 14)"
        :key="color"
        :style="'background-color:' + color"
      ></li>
    </ul>
    <div id="description">{{ image.description }}</div>
    <CameraSettings :camera_settings="image.camera_settings" />
  </section>
</template>
<style scoped>
img {
  width: auto;
  max-height: 700px;
}

section {
  display: inline-block;
  vertical-align: top;
}

#image_container {
  text-align: center;
  width: 900px;
  max-width: 900px;
  height: auto;
  background-color: black;
}

#text_container {
  max-width: 340px;
  padding-left: 25px;
  line-height: 2.6em;
  text-align: left;
}

#description {
  line-height: 1.2em;
  margin-top: 10px;
  padding-top: 10px;
  padding-bottom: 4em;
  border-bottom: 1.5px solid;
}

ul {
  line-height: 1em;
}

#color-square {
  display: inline-block;
  margin-right: 2px;
  height: 20px;
  width: 40px;
}

h1 {
  font-size: 3em;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 2px solid;
}
</style>
