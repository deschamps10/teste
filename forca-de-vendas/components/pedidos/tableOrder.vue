<template>
  <div class="w-full">
    <table class="min-w-full table-fixed divide-y divide-gray-200">
      <thead class="bg-gray-100 text-sm text-gray-600 uppercase">
        <tr>
          <th class="px-2 py-3 text-left w-24">Pedido</th>
          <th class="px-2 py-3 text-left w-24">Data</th>
          <th class="px-2 py-3 text-left w-24">Previsão</th>
          <th class="px-2 py-3 text-left w-32">Origem</th>
          <th class="px-2 py-3 text-left w-32">Representante</th>
          <th class="px-2 py-3 text-left w-32">Cliente</th>
          <th class="px-2 py-3 text-left w-24">Marca</th>
          <th class="px-2 py-3 text-left w-24">Status</th>
          <th class="px-2 py-3 text-left w-24">Condição</th>
          <th class="px-2 py-3 text-left w-24">Desconto</th>
          <th class="px-2 py-3 text-left w-24">Comissão</th>
          <th class="px-2 py-3 text-left w-20">Tipo</th>
          <th class="px-2 py-3 text-left w-28">Valor</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200 text-sm">
        <tr
          v-for="pedido in pedidos"
          :key="pedido.id_pedido"
          class="hover:bg-gray-50 transition"
        >
          <td class="px-2 py-3">
            <div
              class="group relative flex items-center cursor-pointer"
              @click="$router.push(`/itens/${pedido.idPedido}`)"
            >
              <span
                class="transition-opacity duration-300 group-hover:opacity-0 text-blue-600"
              >
                {{ pedido.codPedido }}
              </span>
              <svg
                class="absolute w-4 h-4 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </td>
          <td class="px-2 py-3">{{ formatDate(pedido.data) }}</td>
          <td class="px-2 py-3">{{ formatDate(pedido.previsao) }}</td>
          <td class="px-2 py-3">{{ pedido.origem }}</td>
          <td class="px-2 py-3">{{ pedido.representante }}</td>
          <td class="px-2 py-3">{{ pedido.cliente }}</td>
          <td class="px-2 py-3">{{ pedido.marca }}</td>
          <td class="px-2 py-3">{{ pedido.status }}</td>
          <td class="px-2 py-3">{{ pedido.condicao }}</td>
          <td class="px-2 py-3">{{ pedido.desconto }}%</td>
          <td class="px-2 py-3">{{ pedido.comissao }}%</td>
          <td class="px-2 py-3">{{ pedido.tipo }}</td>
          <td class="px-2 py-3">{{ formatCurrency(pedido.valor) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()

// Buscar pedidos da API
const { data: pedidos, pending, error } = await useFetch(`${config.public.API_URL}/pedidos`)

// Formatar datas
function formatDate(data) {
  if (!data) return ''
  const d = new Date(data)
  return d.toLocaleDateString('pt-BR')
}

// Formatar moeda
function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
}
</script>

<style scoped>
/* Adiciona aparência mais moderna */
table {
  font-family: 'Inter', sans-serif;
}

th {
  background-color: #f9fafb;
  font-weight: 600;
}
</style>
