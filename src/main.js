import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/fontawesome.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap"
import "glightbox/dist/js/glightbox.js"
import "bootstrap/dist/js/bootstrap.js"
import '../src/assets/functions.js';
import store from './store'



createApp(App).use(store).use(router).mount('#app')
