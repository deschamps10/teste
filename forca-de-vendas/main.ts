import { createApp } from 'vue'
import App from './app.vue'
import router from './router' // Certifique-se de que o caminho do arquivo de rotas está correto

const app = createApp(App)
app.use(router) // Usa o Vue Router
app.mount('#app')
