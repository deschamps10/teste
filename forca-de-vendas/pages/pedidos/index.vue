<script setup>
import FilterOrder from '@/components/pedidos/filterOrder.vue'
import TableOrder from '@/components/pedidos/tableOrder.vue'

const config = useRuntimeConfig()

const { data: pedidos, pending, error } = await useFetch(`${config.public.API_URL}/pedidos` )
</script>

<template>
  <div class="max-w-screen-xl mx-auto px-4 py-6">
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-800 md:text-3xl">Monitoramento de Pedidos</h1>
      <p class="text-gray-600 text-base sm:text-lg md:text-xl">Lista de pedidos realizados no sistema</p>

      <FilterOrder />

      <TableOrder :pedidos="pedidos" />
        </div>
  </div>
</template>
