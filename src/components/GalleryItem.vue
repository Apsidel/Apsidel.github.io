<script setup>
import DesignData from './DesignData.vue'

const props = defineProps({
  image: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <body>
    <section id="image_container">
      <img :src="'../../src/assets/images/' + image.url" :alt="image.title" />
    </section>
    <section id="title_container">
      <h1>{{ props.image.title }}</h1>
      <ul>
        <li
          class="color-square"
          v-for="color in image.colors.slice(0, 12)"
          :key="color"
          :style="'background-color:' + color"
        ></li>
      </ul>
    </section>
    <section id="details_container">
      <DesignData :design_data="image.design_data" />
      <ul>
        <li
          class="color-square"
          v-for="color in image.colors.slice(0, 12).reverse()"
          :key="color"
          :style="'background-color:' + color"
        ></li>
      </ul>
    </section>
    <section id="description_container">
      <div class="description">{{ props.image.description }}</div>
    </section>
    <section id="mockup"><h1>Mock-up</h1></section>
  </body>
</template>

<style scoped>
body {
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 1fr;
  grid-template-rows: 1fr 6fr;
  grid-template-areas:
    'image title   description mockup'
    'image details description mockup';
  column-gap: 25px;
  height: 100vh;
}

#image_container {
  grid-area: image;
  max-width: 900px;
  height: auto;
}

img {
  width: auto;
  max-height: 700px;
}

#title_container {
  grid-area: title;
  line-height: 2.6em;
  /* max-width: 340px; */
}

h1 {
  font-size: 3em;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 2px solid;
}

ul {
  line-height: 1em;
}

.color-square {
  display: inline-block;
  margin-right: 2px;
  height: 20px;
  width: 38px;
}

#description_container {
  grid-area: description;
}

.description {
  line-height: 1.2em;
  text-align: justify;
}

#details_container {
  grid-area: details;
}

#details_container ul {
  padding-top: 16px;
  text-align: right;
}

#mockup {
  grid-area: mockup;
  height: 700px;
  text-align: center;
  writing-mode: vertical-lr;
  background-color: black;
}

#mockup h1 {
  color: white;
  border-style: none;
}
</style>
