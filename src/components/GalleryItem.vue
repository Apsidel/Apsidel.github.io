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
        <div>
          <ColorStrip
            :colors="image.colors.slice(0, 7).reverse()"
            :width="'40px'"
            :height="'22px'"
          />
        </div>
      </section>
      <section id="description_container">
        <p>{{ props.image.description }}</p>
      </section>
      <section id="info_container">
        <div><DesignData :design_data="image.design_data" /></div>
      </section>
      <section id="bottom_strip_container">
        <div id="bottom_strip">
          <ColorStrip
            :colors="image.colors.slice(0, 7).reverse()"
            :width="'40px'"
            :height="'22px'"
          />
        </div>
        <div id="subtitle">Designs &mdash; {{ props.image.title }}</div>
      </section>
      <section id="side_strip_container">
        <!-- <div>
          <ColorStrip :colors="image.colors.slice(2, 10)" :height="'50px'" :width="'20px'" />
        </div> -->
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
  grid-template-columns: min-content 300px 300px 20px;
  grid-template-rows: 1fr 3.5fr 34px;
  grid-template-areas:
    'image  title         blank_a       blank_b'
    'image  info          description   strip'
    'image  bottom_strip  bottom_strip  strip';
  column-gap: 25px;
  max-height: 700px;
  max-width: 1600px;
}

#image_container {
  grid-area: image;
  max-width: 525px;
  margin-right: 10px;
}

img {
  max-height: 700px;
  width: auto;
}

#title_container {
  grid-area: title;
  line-height: 2.6rem;
  padding-bottom: 20px;
  border-bottom: 2px solid #c5c3c3;
}

h1 {
  font-size: 3.2rem;
  margin-bottom: 10px;
  padding-bottom: 10px;
}

#info_container {
  grid-area: info;
  position: relative;
  max-width: 300px;
  padding-top: 10px;
}

#description_container {
  grid-area: description;
  position: relative;
  max-width: 400px;
}

#description_container p {
  font-family: 'Roboto', serif;
  font-weight: 300;
  line-height: 1.4rem;
  padding-top: 14px;
}

#bottom_strip_container {
  grid-area: bottom_strip;
  position: relative;
  border-top: 2px solid #c5c3c3;
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

#side_strip_container {
  grid-area: strip;
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
}

#side_strip_container div {
  grid-column: 2;
}
</style>
