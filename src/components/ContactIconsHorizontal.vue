<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>
<template>
  <ul>
    <li class="social-media">
      <a href="mailto:kent.soledispa@richmond.edu" id="email">
        <FontAwesomeIcon icon="fa-solid fa-envelope" />
      </a>
    </li>
    <li class="social-media">
      <a href="https://github.com/Apsidel" id="github"
        ><FontAwesomeIcon icon="fa-brands fa-github"
      /></a>
    </li>
    <li class="social-media">
      <a href="https://www.linkedin.com/in/kent-soledispa-a9b60b227/" id="linkedin">
        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
      </a>
    </li>
  </ul>
</template>
<style scoped>
a {
  color: var(--black);
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

ul li {
  list-style: none;
}

.social-media {
  display: inline-block;
  padding-right: 10px;
  height: 1.8rem;
  font-size: 1.8rem;
}
</style>
