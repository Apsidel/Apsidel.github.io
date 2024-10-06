<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>
<template>
  <body>
    <ul>
      <li id="logo">
        <RouterLink to="/"><img src="./../assets/logo-stripes.svg" /></RouterLink>
      </li>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/design">Design</RouterLink></li>
      <li><RouterLink to="/gallery">Illustrations</RouterLink></li>
      <li><RouterLink to="/photography">Photography</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
      <li><RouterLink to="/contact">Contact</RouterLink></li>
      <li class="social-media">
        <a href="mailto:kent.soledispa@richmond.edu">
          <FontAwesomeIcon icon="fa-solid fa-envelope" />
        </a>
      </li>
      <li class="social-media">
        <a href="https://github.com/Apsidel"><FontAwesomeIcon icon="fa-brands fa-github" /></a>
      </li>
      <li class="social-media">
        <a href="https://www.linkedin.com/in/kent-soledispa-a9b60b227/">
          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
        </a>
      </li>
    </ul>
    <div id="bar"></div>
  </body>
</template>

<style scoped>
a {
  text-decoration: none;
  color: #272626;
}

a:hover {
  text-decoration: underline;
}

a.router-link-exact-active {
  text-decoration: underline;
}

body {
  display: grid;
  column-count: 2;
  column-gap: 2.4em;
  margin-top: 3.6em;
  margin-left: 1em;
}

ul {
  grid-column: 1;
  font-family: 'Spline Sans Mono', Helvetica, sans-serif;
  color: #272626;
}

ul li {
  list-style: none;
  padding-bottom: 2.5em;
}

.social-media {
  display: inline-block;
  padding-right: 10px;
  height: 1.8rem;
  font-size: 1.8rem;
}

#bar {
  grid-column: 2;
  height: 502px;
  width: 1.2px;
  margin-top: 10em;
  background-color: #c5c3c3;
}

#logo {
  padding-bottom: 10em;
}

#logo img {
  height: 64px;
}
</style>
