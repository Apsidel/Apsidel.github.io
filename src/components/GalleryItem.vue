<script setup>
import DesignData from './DesignData.vue'
import ColorStrip from './ColorStrip.vue'

const props = defineProps({
  image: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <article>
    <div id="grid">
      <section id="image_container">
        <div><img :src="'../../src/assets/images/' + image.url" :alt="image.title" /></div>
      </section>
      <section id="title_container">
        <div>
          <h1>{{ props.image.title }}</h1>
        </div>
        <div></div>
      </section>
      <section id="info_container">
        <DesignData :design_data="image.design_data" />
      </section>
      <section id="description_container">
        <div class="description">
          {{ props.image.description }}
        </div>
      </section>
      <section id="bottom_strip_container">
        <div><ColorStrip :colors="image.colors.slice(1, 9).reverse()" /></div>
        <div><ColorStrip :colors="image.colors.slice(1, 9)" /></div>
      </section>
      <section id="mockup">
        <h1>Mock-up</h1>
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
  grid-template-columns: 2fr 2fr 2fr 0.5fr;
  grid-template-rows: 1fr 3fr 0.2fr;
  grid-template-areas:
    'image  title  title        mockup'
    'image  info   description  mockup'
    'image  strip  strip        mockup';
  column-gap: 20px;
  height: 700px;
}

#image_container {
  grid-area: image;
  align-self: center;
}

#image_container div {
  max-height: 700px;
  width: auto;
}

img {
  max-height: 700px;
  max-width: 525px;
}

#title_container {
  grid-area: title;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 20px;
  line-height: 2.6em;
}

#title_container div {
  border-bottom: 2px solid;
}

#bottom_strip_container {
  grid-area: strip;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

#bottom_strip_container div {
  align-self: end;
}

#bottom_strip_container div:nth-child(even) {
  text-align: right;
}

#info_container {
  grid-area: info;
  max-height: 700px;
}

h1 {
  font-size: 3em;
  margin-bottom: 10px;
  padding-bottom: 10px;
}

#description_container {
  grid-area: description;
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
