<script setup>
import ContactIcons from './ContactIcons.vue'
</script>
<template>
  <body>
    <div id="item-container">
      <div id="logo">
        <RouterLink to="/"><img src="./../assets/logo-stripes.svg" /></RouterLink>
      </div>
      <div id="list-container">
        <ul>
          <!-- <li><RouterLink to="/">Home</RouterLink></li>       -->
          <li><RouterLink to="/about">About</RouterLink></li>
          <li><RouterLink to="/programming">Programming</RouterLink></li>
          <li><RouterLink to="/designs">Graphic Design</RouterLink></li>
          <li><RouterLink to="/photography">Photography</RouterLink></li>
          <li>Contact</li>
        </ul>
      </div>
      <div id="contact-icons"><ContactIcons /></div>
    </div>
  </body>
</template>

<style scoped>
a {
  text-decoration: none;
  color: var(--black);
}

a:hover {
  text-decoration: underline;
}

a.router-link-exact-active {
  text-decoration: underline;
}

ul {
  font-family: 'Spline Sans Mono', Helvetica, sans-serif;
  color: var(--black);
}

ul li {
  list-style: none;
  padding-bottom: 2.4em;
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
  #contact-icons {
    display: none;
  }
}

@media (min-width: 640px) {
  ul li {
    width: 18%;
  }
}

@media (min-width: 1024px) {
  body {
    min-height: 100vh;
  }

  #item-container {
    position: relative;
    margin-top: 3.6em;
    margin-left: 0.8em;
    min-height: 80vh;
  }

  #list-container {
    display: block;
    align-content: center;
    min-height: 500px;
    border-right: 1.3px solid var(--light-gray);
    font-family: 'Spline Sans Mono', Helvetica, sans-serif;
    color: var(--black);
  }

  ul li {
    display: inherit;
    width: inherit;
    min-width: 168px;
    margin-inline: inherit;
    text-align: left;
  }

  #logo {
    display: inherit;
    padding-bottom: 4.2em;
  }

  #logo img {
    height: 64px;
  }

  #contact-icons {
    display: inherit;
    position: absolute;
    bottom: 0;
    text-align: left;
  }
}
</style>
