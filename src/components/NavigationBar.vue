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

    <div class="social-media"></div>

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

#logo:hover {
  text-decoration: underline;
  /* text-decoration-color: #FF5B5B; */
}

.bar {
  height: 502px;
  position: fixed;
  left: 240px;
  width: 1px;
  margin-top: 220px;
  background-color: #c5c3c3;
}

#logo {
  padding-bottom: 200px;
}
</style>
