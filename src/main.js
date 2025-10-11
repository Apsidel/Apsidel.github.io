import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faSquareJs } from '@fortawesome/free-brands-svg-icons'
import { faJava } from '@fortawesome/free-brands-svg-icons'
import { faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faGitAlt } from '@fortawesome/free-brands-svg-icons'
import { faJenkins } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faFigma } from '@fortawesome/free-brands-svg-icons'
import { faTerminal } from '@fortawesome/free-solid-svg-icons'
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons'
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faCodeCompare } from '@fortawesome/free-solid-svg-icons'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faLinkedin, faGithub, faEnvelope, faSquareJs, faJava, faVuejs, faGitAlt,
    faJenkins, faHtml5, faCss3Alt, faNodeJs, faFigma, faTerminal, faWindowMaximize,
    faWindowRestore, faCode, faCodeCompare, faLeaf, faSquareCheck);

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
