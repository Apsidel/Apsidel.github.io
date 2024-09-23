<script setup>
const props = defineProps({
  data: Array
})
console.log(props.data);
</script>

<template>
  <div v-for="image in data" :key="image.id">
    <RouterLink :to="{ name: 'gallery_item', params: { id: image.id }, props: { id: image.id } }">
      <img :src="image.url" />
    </RouterLink>
    <RouterView />
  </div>
</template>
