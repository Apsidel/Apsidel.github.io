<template>
  <header>
    <h1>Kent Soledispa<span id="red-dot">.</span></h1>
    <h3><span id="blue">Software Engineer</span> &nbsp; | &nbsp; <span id="red">Graphic Designer</span></h3>
  </header>
</template>

<style scoped>
header {
  font-family: 'Staatliches', Helvetica, sans-serif;
  margin-top: 3.2em;
  padding-bottom: 0.8em;
}

h1 {
  font-weight: 400;
  font-size: 6em;
}

h3 {
  font-weight: 400;
  margin-top: -0.8em;
}

#red-dot {
  color: var(--red);
}

#blue:hover {
  color: var(--blue);
}

#red:hover {
  color: var(--red);
}
</style>
