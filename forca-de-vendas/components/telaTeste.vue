<script setup>
const config = useRuntimeConfig()
const { data: pedidos, error } = await useFetch(`${config.public.API_URL}/pedidos`)
console.log('API_URL:', config.public.API_URL)

</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Pedidos</h1>

    <div v-if="pedidos && pedidos.length">
      <ul class="space-y-2">
        <li
          v-for="pedido in pedidos"
          :key="pedido.id_pedido"
          class="p-4 bg-gray-100 rounded shadow"
        >
          <p><strong>Código:</strong> {{ pedido.cod_pedido }}</p>
          <p><strong>Cliente:</strong> {{ pedido.id_cliente }}</p>
          <p><strong>Representante:</strong> {{ pedido.id_representante }}</p>
          <p><strong>Total:</strong> R$ {{ pedido.total_pedido.toFixed(2) }}</p>
          <p><strong>Emissão:</strong> {{ pedido.emissao }}</p>
          <p><strong>Status:</strong> {{ pedido.status }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
