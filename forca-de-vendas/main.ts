import { createApp } from 'vue'
import App from '../forca-de-vendas/app.vue'
import router from './router'  // Importando o router

createApp(App)
  .use(router)  // Registrando o Vue Router
  .mount('#app')
