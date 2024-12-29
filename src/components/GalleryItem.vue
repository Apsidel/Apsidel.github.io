<script setup>
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
    <section id="info_container"></section>
    <section id="text_container">
      <h1>{{ props.image.title }}</h1>
      <ul>
        <li
          id="color-square"
          v-for="color in image.colors"
          :key="color"
          :style="'background-color:' + color"
        ></li>
      </ul>
      <div id="description">{{ props.image.description }}</div>
    </section>
  </body>
</template>

<style scoped>
body {
  display: grid;
  grid-template-columns: 3.2fr 1.6fr 2.2fr;
  grid-template-areas: 'image info text';
}

body > #image_container {
  grid-area: image;
}

body > #text_container {
  grid-area: info;
}

img {
  width: auto;
  max-height: 700px;
}

section {
  display: inline-block;
  vertical-align: top;
}

#image_container {
  max-width: 900px;
  height: auto;
}

#info_container {
  padding-left: 60px;
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
  /* border-top: 1.5px solid; */
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
