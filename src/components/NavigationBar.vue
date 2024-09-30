<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>
<template>
  <nav class="navigation-bar list">
    <ul>
      <li id="logo"><img height="64px" src="../assets/logo-stripes.svg" /></li>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/gallery">Gallery</RouterLink></li>
      <li><RouterLink to="/photography">Photography</RouterLink></li>
      <li><RouterLink to="/design">Design</RouterLink></li>
      <li><RouterLink to="/about">Resume</RouterLink></li>
      <li><RouterLink to="/contact">Contact</RouterLink></li>
    </ul>

    <div id="icon-container">
      <FontAwesomeIcon class="social-media" icon="fa-solid fa-envelope" />
      <a href="https://github.com/Apsidel"
        ><FontAwesomeIcon class="social-media" icon="fa-brands fa-github"
      /></a>
      <a href="https://www.linkedin.com/in/kent-soledispa-a9b60b227/"
        ><FontAwesomeIcon class="social-media" icon="fa-brands fa-linkedin"
      /></a>
    </div>
    <div class="bar"></div>
  </nav>
</template>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

a:hover {
  text-decoration: underline;
}

a.router-link-exact-active {
  text-decoration: underline;
}

.navigation-bar {
  /* background-color: #FF5B5B; */
  position: fixed;
  top: 0;
  left: 30px;
  bottom: 0;
  overflow: auto;
  padding-right: 70px;
  display: flex;
  flex-direction: column;
}

.list {
  font-family: 'Spline Sans Mono', Helvetica, sans-serif;
  padding-top: 50px;
  padding-left: 20px;
}

.list li {
  list-style: none;
  padding-bottom: 40px;
}

#icon-container {
  padding-left: 25px;
}

.social-media {
  display: inline-block;
  text-align: center;
  padding: 5px;
  height: 1.6rem;
}

.bar {
  height: 502px;
  position: fixed;
  left: 250px;
  width: 1px;
  margin-top: 220px;
  background-color: #c5c3c3;
}

#logo {
  padding-bottom: 200px;
}
</style>
