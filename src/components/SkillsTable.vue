<script setup>
const props = defineProps({
  skills: {
    type: Array,
    required: true
  }
})
</script>
<template>
  <section>
    <h3><slot name="title"></slot></h3>
    <ul>
      <li v-for="skill in props.skills" :key="skill">
        <slot :item="skill"></slot>
        <span> |&nbsp;</span>
      </li>
    </ul>
  </section>
</template>
<style scoped>
section {
  margin-top: 8px;
  border: 1.3px solid var(--light-gray);
  border-radius: 10px;
  padding: 18px;
}

h3 {
  font-weight: 200;
}

ul {
  padding-top: 12px;
}

li {
  display: inline-block;
  font-family: 'Spline Sans Mono', Helvetica, sans-serif;
  list-style: none;
  font-size: 0.8em;
  line-height: 2.5rem;
}

li:last-child span {
  display: none;
}
</style>
