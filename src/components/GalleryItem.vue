<script setup>
import DesignData from './DesignData.vue'
import ColorStrip from './ColorStrip.vue'
const props = defineProps({
  image: {
    type: Object,
    required: true
  }
})

const width = props.image.dimensions[0]
const height = props.image.dimensions[1]

const isPortrait = height > width
</script>
<template>
  <article>
    <div :class="isPortrait ? 'grid_portrait' : 'grid_landscape'">
      <section id="image_container">
        <div><img :src="'/images/' + image.url" :alt="image.title" /></div>
      </section>
      <section id="title_container">
        <div>
          <h1>{{ props.image.title }}</h1>
        </div>
        <div>
          <ColorStrip :colors="image.colors.slice(0, 7).reverse()" />
        </div>
      </section>
      <section
        id="description_container"
        :class="isPortrait ? 'description_portrait' : 'description_landscape'"
      >
        <p>{{ props.image.description }}</p>
      </section>
      <section id="info_container">
        <div><DesignData :design_data="image.design_data" /></div>
      </section>
      <section id="bottom_strip_container">
        <div id="bottom_strip" :class="{ strip_landscape: !isPortrait }">
          <ColorStrip :colors="image.colors.slice(0, 7).reverse()" />
        </div>
        <div id="subtitle">Designs &mdash; {{ props.image.title }}</div>
      </section>
    </div>
  </article>
</template>

<style scoped>
article {
  height: 100vh;
}

.grid_landscape {
  display: grid;
  grid-template-columns: min-content 300px;
  grid-template-rows: 1fr 3fr 34px 210px;
  grid-template-areas:
    'image        title'
    'image        info'
    'image        bottom_strip'
    'description  bottom_strip';
  column-gap: 25px;
  border-bottom: 2px solid #c5c3c3;
}

.grid_portrait {
  display: grid;
  grid-template-columns: min-content 300px 320px;
  grid-template-rows: 1fr 3.5fr 34px;
  grid-template-areas:
    'image  title         blank'
    'image  info          description'
    'image  bottom_strip  bottom_strip';
  column-gap: 25px;
  max-height: 700px;
  max-width: 1600px;
}

#image_container {
  grid-area: image;
  max-height: 700px;
  margin-right: 10px;
}

img {
  max-height: 700px;
  max-width: 910px;
}

#title_container {
  grid-area: title;
  line-height: 2.6rem;
  max-height: min-content;
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
  max-width: 300px;
  padding-top: 10px;
}

#description_container {
  grid-area: description;
  padding-top: 14px;
}

#bottom_strip_container {
  grid-area: bottom_strip;
  position: relative;
  border-top: 2px solid #c5c3c3;
}

#bottom_strip {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0.5px;
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

.description_portrait {
  padding-left: 20px;
}

.description_landscape {
  column-count: 2;
  column-gap: 25px;
  margin-top: 10px;
  padding-right: 10px;
}

.strip_landscape {
  top: 0;
  height: 40px;
  padding-top: 4px;
}
</style>
