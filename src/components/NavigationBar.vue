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
      <li><RouterLink to="/designs">Designs</RouterLink></li>
      <li><RouterLink to="/photography">Photography</RouterLink></li>
      <li>Coding</li>
      <li><RouterLink to="/about">About</RouterLink></li>
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

ul {
  font-family: 'Spline Sans Mono', Helvetica, sans-serif;
  color: #272626;
  min-width: 112px;
}

ul li {
  list-style: none;
  padding-bottom: 2.5em;
}

@media (min-width: 320px) {
  body {
    width: 100%;
  }

  ul {
    text-align: center;
  }

  ul li {
    display: inline-block;
    margin-inline: 4px;
  }

  #logo,
  .social-media {
    display: none;
  }
}

@media (min-width: 640px) {
  ul li {
    width: 18%;
  }
}

@media (min-width: 1000px) {
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
    text-align: left;
    min-width: 112px;
  }

  ul li {
    display: inherit;
    width: inherit;
    margin-inline: inherit;
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
    margin-left: 14px;
    background-color: #c5c3c3;
  }

  #logo {
    display: inherit;
    padding-bottom: 10em;
  }

  #logo img {
    height: 64px;
  }
}
</style>
