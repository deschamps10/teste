<script setup>
import FilterOrder from '@/components/pedidos/filterOrder.vue'
import TableOrder from '@/components/pedidos/tableOrder.vue'

const config = useRuntimeConfig()
const { data: pedidos, error } = await useFetch(`${config.public.API_URL}/pedidos`)
</script>

<template>
  <div class="max-w-screen-xl mx-auto px-4 py-6">
    <!-- Cabeçalho -->
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-800">Monitoramento de Pedidos</h1>
      <p class="text-gray-600">Lista de pedidos realizados no sistema</p>
    </div>

    <!-- Filtro de pedidos (com espaçamento abaixo) -->
    <div class="mb-4">
      <filterOrder />
    </div>

    <!-- Tabela de pedidos -->
    <TableOrder :pedidos="pedidos" class="mt-4" />
  </div>
</template>
