<script setup>
import ColorStrip from '@/components/ColorStrip.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>
<template>
  <article>
    <div id="grid">
      <section id="text_container">
        <div class="text_block">
          <h1>About</h1>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Vel donec tincidunt; nunc urna nisi
            magnis. Vulputate natoque suscipit hac, sociosqu molestie mauris. Est euismod facilisis
            ultricies dui vel? Natoque iaculis malesuada tincidunt sociosqu facilisis. Sed nisl
            taciti leo proin enim class. Imperdiet et sollicitudin ut vitae enim efficitur
            fermentum. Fringilla fames sollicitudin imperdiet nascetur fusce metus litora. Tincidunt
            magnis dui laoreet orci aliquam pretium nam. Natoque facilisis at accumsan placerat,
            imperdiet curae dis mi. Nisi eleifend ornare facilisis mattis gravida, volutpat eget.
            Quam elementum neque convallis urna diam netus. Blandit duis quisque vehicula adipiscing
            metus est metus phasellus posuere. Netus dui augue dictumst donec ultrices ad ipsum per.
          </p>
        </div>
        <div class="text_block">
          <h2>Contact Me</h2>
          <ul>
            <li>
              <a href="mailto:kent.soledispa@richmond.edu">
                <div class="icon"><FontAwesomeIcon icon="fa-solid fa-envelope" /></div>
                <div>Email</div></a
              >
            </li>
            <li>
              <a href="https://github.com/Apsidel">
                <div class="icon"><FontAwesomeIcon icon="fa-brands fa-github" /></div>
                <div>Github</div></a
              >
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kent-soledispa-a9b60b227/">
                <div class="icon"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></div>
                <div>LinkedIn</div></a
              >
            </li>
          </ul>
        </div>
        <div id="bottom_strip">
          <ColorStrip :colors="['#FF5B5B', '#5B61FF', '#FFED49']"></ColorStrip>
        </div>
      </section>
      <section id="image_container">
        <img src="/images/Oso_vector.svg" alt="Akita Inu" />
      </section>
    </div>
  </article>
</template>
<style scoped>
article {
  min-height: 100vh;
}

#grid {
  max-width: 1300px;
  min-height: 700px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

#text_container {
  grid-column: 1;
  max-width: 500px;
  position: relative;
}

#image_container {
  grid-column: 2;
  text-align: center;
}

img {
  max-width: 450px;
  height: auto;
  object-fit: cover;
}

.text_block {
  max-width: 520px;
  padding-bottom: 60px;
}

h1 {
  font-size: 2rem;
}

p {
  padding-top: 12px;
}

ul {
  padding-top: 12px;
}

li {
  font-family: 'Spline Sans Mono', Helvetica, sans-serif;
  list-style: none;
  font-size: 1rem;
  line-height: 2.5rem;
}

li div {
  display: inline-block;
  vertical-align: middle;
}

.icon {
  font-size: 2rem;
  padding-right: 20px;
  line-height: 2rem;
}

a {
  text-decoration: none;
  color: #272626;
}

a div:hover {
  text-decoration: underline;
}

#bottom_strip {
  position: absolute;
  left: 0;
  right: 0;
  text-align: right;
  border-top: 2px solid #c5c3c3;
}
</style>
