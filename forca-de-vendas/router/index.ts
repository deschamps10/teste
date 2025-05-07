import { createRouter, createWebHistory } from 'vue-router'
import ItensPage from '@/pages/itens/index.vue' // Altere conforme o seu caminho real

const routes = [
  {
    path: '/itens/:id_pedido', // A rota espera um parâmetro dinâmico id_pedido
    name: 'itens',
    component: ItensPage, // Componente de itens
    props: true // Passa os parâmetros da URL como props para o componente
  },
  // Outras rotas
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
