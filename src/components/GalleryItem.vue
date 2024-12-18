<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>
<template>
  <section id="image_container">
    <img :src="'../../src/assets/images/' + url" :alt="title" />
  </section>
  <section id="text_container">
    <h1>{{ props.title }} {{ props.id }}</h1>
    <canvas id="color_palette"></canvas>
    <div>{{ props.description }}</div>
  </section>
</template>

<style scoped>
img {
  width: 100%;
  height: auto;
}

section {
  display: inline-block;
  vertical-align: top;
}

#image_container {
  width: 900px;
  height: auto;
}

#text_container {
  max-width: 350px;
  padding-left: 20px;
  line-height: 2.6em;
}

h1 {
  font-size: 3em;
}
</style>
