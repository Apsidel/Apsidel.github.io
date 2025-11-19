<script setup>
import ColorStrip from '@/components/ColorStrip.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import SkillsTable from '@/components/SkillsTable.vue'
import ContactIcons from '@/components/ContactIcons.vue'

const skill_icons = new Map([
  ['Vue.js', 'fa-brands fa-vuejs'],
  ['Node.js', 'fa-brands fa-node-js'],
  ['JavaScript', 'fa-brands fa-square-js'],
  ['HTML', 'fa-brands fa-html5'],
  ['CSS', 'fa-brands fa-css3-alt'],
  ['Java', 'fa-brands fa-java'],
  ['Spring Boot', 'fa-solid fa-leaf'],
  ['Git', 'fa-brands fa-git-alt'],
  ['Jenkins', 'fa-brands fa-jenkins'],
  ['Unit Testing', 'fa-solid fa-square-check'],
  ['Agile Methodologies', 'fa-solid fa-code-compare']
])
</script>
<template>
  <article>
    <div id="grid">
      <section id="info_container">
        <section class="subsection">
          <h1>About</h1>
          <p>
            I am a software engineer and graphic designer with a background and interest in web and
            UI/UX design. In May of 2022, I graduated from the
            <a href="https://www.richmond.edu/">University of Richmond</a> with a Bachelor of
            Science in Computer Science, which provided me with a strong foundation in software and
            web development. After working for a year as a software engineer, I decided to return to
            school and pursue an Associate of Applied Science in Graphic Design from
            <a href="https://www.vpcc.edu/">Virginia Peninsula Community College</a> to gain a
            better understanding of design principles and practices that could be applied back to my
            knowledge of app and web development<span class="blinking_text">_</span>
          </p>
        </section>
        <section class="subsection">
          <h1>Skills</h1>
          <SkillsTable :skills="['Vue.js', 'Node.js', 'JavaScript', 'HTML', 'CSS']">
            <template v-slot:title>Frontend</template>
            <template v-slot="{ item: skill }">
              <span
                ><FontAwesomeIcon :icon="skill_icons.get(skill)" class="icon" /> {{ skill }}</span
              >
            </template>
          </SkillsTable>
          <SkillsTable :skills="['Java', 'Spring Boot']">
            <template v-slot:title>Backend</template>
            <template v-slot="{ item: skill }">
              <span
                ><FontAwesomeIcon :icon="skill_icons.get(skill)" class="icon" /> {{ skill }}</span
              >
            </template>
          </SkillsTable>
          <SkillsTable :skills="['Git', 'Jenkins', 'Unit Testing', 'Agile Methodologies']">
            <template v-slot:title>Tools & DevOps</template>
            <template v-slot="{ item: skill }">
              <span
                ><FontAwesomeIcon :icon="skill_icons.get(skill)" class="icon" /> {{ skill }}</span
              >
            </template>
          </SkillsTable>
        </section>
        <section class="subsection">
          <h2>Contact Me</h2>
          <div id="contact_me"><ContactIcons :is-vertical="true" /></div>
        </section>
        <div id="bottom_strip">
          <ColorStrip :colors="['#FF5B5B', '#5B61FF', '#FFED49']" />
        </div>
      </section>
      <section id="image_container">
        <img src="/images/Oso_vector.svg" alt="Akita Inu" />
      </section>
    </div>
  </article>
</template>
<style scoped>
a {
  text-decoration: none;
  color: var(--black);
}

a:hover {
  text-decoration: underline;
}

article {
  min-height: 100vh;
}

#grid {
  max-width: 1300px;
  min-height: 700px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

#info_container {
  grid-column: 1;
  max-width: 500px;
  position: relative;
}

#image_container {
  grid-column: 2;
  padding-left: 30px;
}

img {
  position: fixed;
  max-width: 450px;
  height: auto;
  object-fit: cover;
}

.subsection {
  max-width: 520px;
  padding-bottom: 40px;
}

h1 {
  font-size: 2rem;
  letter-spacing: 1px;
}

h2 {
  font-weight: 200;
}

p {
  padding-top: 8px;
  text-align: justify;
  line-height: 1.6em;
}

.icon {
  font-size: 1.6em;
  color: var(--black);
}

#contact_me {
  padding: 18px;
  padding-top: 0px;
}

.blinking_text {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}

#bottom_strip {
  position: absolute;
  left: 0;
  right: 0;
  text-align: right;
  border-top: 2px solid var(--light-gray);
  bottom: 20px;
}
</style>
