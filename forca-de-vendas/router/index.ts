import { createRouter, createWebHistory } from 'vue-router'
import OrderPage from '../pages/order/index.vue'

const routes = [
  {
    path: '/order', // URL de acesso à página de pedidos
    name: 'Order',
    component: OrderPage, // O componente que será renderizado
  },
  // Outras rotas podem ser configuradas aqui
]

const router = createRouter({
  history: createWebHistory(),
  routes, // Rotas da aplicação
})

export default router
