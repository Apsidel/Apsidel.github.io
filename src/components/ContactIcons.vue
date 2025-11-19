<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps({
  isVertical: {
    type: Boolean,
    required: false
  }
})
</script>
<template>
  <ul :class="{ horizontal_icons: !props.isVertical }">
    <li>
      <a href="mailto:kent.soledispa@richmond.edu">
        <div class="icon" id="email"><FontAwesomeIcon icon="fa-solid fa-envelope" /></div>
        <div v-if="props.isVertical">Email</div></a
      >
    </li>
    <li>
      <a href="https://github.com/Apsidel">
        <div class="icon" id="github"><FontAwesomeIcon icon="fa-brands fa-github" /></div>
        <div v-if="props.isVertical">Github</div></a
      >
    </li>
    <li>
      <a href="https://www.linkedin.com/in/kent-soledispa-a9b60b227/">
        <div class="icon" id="linkedin"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></div>
        <div v-if="props.isVertical">LinkedIn</div></a
      >
    </li>
  </ul>
</template>
<style scoped>
a {
  text-decoration: none;
  color: var(--black);
}

a div:hover {
  text-decoration: underline;
}

#email:hover {
  color: var(--yellow);
}

#github:hover {
  color: var(--blue);
}

#linkedin:hover {
  color: var(--red);
}

.icon {
  font-size: 1.8rem;
  padding-right: 10px;
}

.horizontal_icons li {
  display: inline-block;
}

li {
  font-family: 'Spline Sans Mono', Helvetica, sans-serif;
  list-style: none;
  font-size: 0.8em;
  line-height: 2.5rem;
}

li div {
  display: inline-block;
  vertical-align: middle;
}
</style>
