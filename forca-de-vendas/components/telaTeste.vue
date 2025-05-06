<script setup>
const config = useRuntimeConfig()
const { data: pedidos, error } = await useFetch(`${config.public.API_URL}/pedidos`)
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Lista de Pedidos</h1>
    <div v-if="pedidos && pedidos.length">
      <ul class="space-y-2">
        <li v-for="pedido in pedidos" :key="pedido.id" class="p-4 bg-gray-100 rounded">
          <strong>{{ pedido.cliente }}</strong> pediu <strong>{{ pedido.quantidade }}</strong>x <em>{{ pedido.produto }}</em>
        </li>
      </ul>
    </div>
    <div v-else-if="!pedidos">
      <p>Carregando pedidos...</p>
    </div>
    <div v-else>
      <p>Erro ao carregar pedidos.</p>
    </div>
  </div>
</template>
