<script setup>
import CameraSettings from '@/components/CameraSettings.vue'
import ColorStrip from '@/components/ColorStrip.vue'
import photography from '../assets/galleries/photography-data.json'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const index = parseInt(props.id) - 1
const image = photography.images[index]

const height = image.dimensions[1]
// Debugging
console.log(image)
</script>
<template>
  <article>
    <div id="grid">
      <section id="image_container">
        <div><img :src="'/images/' + image.url" :alt="image.title" /></div>
      </section>
      <section id="title_container">
        <div>
          <h1>{{ image.title }}</h1>
        </div>
        <div>
          <ColorStrip :colors="image.colors.slice(0, 7).reverse()"></ColorStrip>
        </div>
      </section>
      <section id="description_container">
        <p id="description">{{ image.description }}</p>
      </section>
      <section id="info_container">
        <div><CameraSettings :camera_settings="image.camera_settings" /></div>
      </section>
      <section id="bottom_strip_container">
        <div id="bottom_strip">
          <ColorStrip :colors="image.colors.slice(0, 7).reverse()" />
        </div>
        <!-- <div id="subtitle">Photography &mdash; {{ image.title }}</div> -->
      </section>
    </div>
  </article>
</template>
<style scoped>
article {
  height: 100vh;
}

#grid {
  display: grid;
  grid-template-columns: min-content 300px;
  grid-template-rows: 0.5fr 0.5fr 1fr 34px;
  grid-template-areas:
    'image title'
    'image description'
    'image info'
    'image bottom_strip';
  column-gap: 25px;
  max-height: v-bind(height);
  max-width: 1600px;
}

#image_container {
  grid-area: image;
  max-height: v-bind(height);
}

img {
  max-height: 700px;
  width: auto;
}

#title_container {
  grid-area: title;
  line-height: 2.6rem;
  max-height: min-content;
  padding-bottom: 20px;
  border-bottom: 2px solid var(--light-gray);
}

h1 {
  font-size: 3.2rem;
  margin-bottom: 10px;
  padding-bottom: 10px;
}

#info_container {
  grid-area: info;
  max-width: 300px;
  padding-top: 10px;
  border-top: 2px solid var(--light-gray);
}

#description_container {
  grid-area: description;
  max-width: 400px;
}

#description_container p {
  padding-top: 14px;
  height: min-content;
}

#bottom_strip_container {
  grid-area: bottom_strip;
  position: relative;
  border-top: 2px solid var(--light-gray);
}

#bottom_strip {
  padding-top: 30px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}

#subtitle {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: right;
  font-weight: 200;
  font-size: 1rem;
  font-style: normal;
}
</style>
