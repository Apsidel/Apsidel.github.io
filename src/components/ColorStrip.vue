<script setup>
const props = defineProps({
  colors: {
    type: Array,
    required: true
  },
  width: {
    type: String,
    required: false
  },
  height: {
    type: String,
    required: false
  }
})

let boxWidth = props.width
boxWidth ??= '40px'

let boxHeight = props.height
boxHeight ??= '22px'
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
  height: v-bind(boxHeight);
  width: v-bind(boxWidth);
  margin-bottom: -3px;
  margin-top: 3px;
}
</style>
