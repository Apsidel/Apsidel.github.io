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
  <img :src="'../../src/assets/images/' + url" :alt="title"/>
  <h1>{{ props.title }} {{ props.id }}</h1>
  <body>{{ props.description }}</body>
</template>
