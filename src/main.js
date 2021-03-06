import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap'
import './assets/scss/app.scss'
import './assets/js/script.js'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
