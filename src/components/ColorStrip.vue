<script setup>
const props = defineProps({
  colors: {
    type: Array,
    required: true
  }
})
</script>
<template>
  <ul>
    <li v-for="color in props.colors" :key="color" :style="'background-color:' + color"></li>
  </ul>
</template>
<style scoped>
ul {
  line-height: 1em;
}
li {
  display: inline-block;
  margin-right: 2px;
  height: 20px;
  width: 38px;
}
</style>
