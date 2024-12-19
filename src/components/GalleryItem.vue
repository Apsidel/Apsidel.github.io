<script setup>
import { ref } from 'vue'
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

const colors = ref([
  '#D6BD92',
  '#B96B55',
  '#C25F21',
  '#695618',
  '#DB1222',
  '#B70410',
  '#811018',
  '#2C1E19',
  '#810409',
  '#241409'
])
</script>
<template>
  <section id="image_container">
    <img :src="'../../src/assets/images/' + url" :alt="title" />
  </section>
  <section id="text_container">
    <h1>{{ props.title }} {{ props.id }}</h1>
    <ul>
      <li
        id="color-square"
        v-for="color in colors"
        :key="color"
        :style="'background-color:' + color"
      ></li>
    </ul>
    <div id="description">{{ props.description }}</div>
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
  max-width: 900px;
  height: auto;
}

#text_container {
  max-width: 350px;
  padding-left: 25px;
  line-height: 2.6em;
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
