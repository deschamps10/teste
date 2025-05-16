<script setup>
import FilterOrder from '@/components/pedidos/filterOrder.vue'
import TableOrder from '@/components/pedidos/tableOrder.vue'

const config = useRuntimeConfig()

const { data: pedidos, pending, error } = await useFetch(`${config.public.API_URL}/pedidos`)
</script>

<template>
  <div class="max-w-screen-xl mx-auto px-4 py-6">
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-800 md:text-3xl">Monitoramento de Pedidos</h1>
      <p class="text-gray-600 text-base sm:text-lg md:text-xl mb-4">Lista de pedidos realizados no sistema</p>

      <!-- Filtro de Pedidos -->
      <div class="mb-4">
      </div>

      <!-- Tabela de Pedidos -->
      <div class="overflow-x-auto bg-white rounded-lg shadow-md">
        <TableOrder :pedidos="pedidos" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ajustes personalizados de responsividade */
@media (max-width: 640px) {
  h1 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  .max-w-screen-xl {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
