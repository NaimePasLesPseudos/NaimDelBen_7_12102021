import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'
import store from './store'
import { createRouterWithStore } from '@/router/index'
import Toast, { POSITION } from 'vue-toastification'
import "vue-toastification/dist/index.css";

const router = createRouterWithStore(store)

const toastOptions = {
    position: POSITION.BOTTOM_CENTER
}

createApp(App)
    .use(store)
    .use(Toast, toastOptions)
    .use(router)
    .mount('#app')
