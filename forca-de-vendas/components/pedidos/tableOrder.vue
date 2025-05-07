<template>
  <!-- Tabela de Pedidos -->
  <div v-if="pedidos && pedidos.length">
    <div class="bg-white rounded-lg shadow overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 text-sm">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-4 py-3 text-left font-medium text-gray-500">Pedido</th>
              <th class="px-4 py-3 text-left font-medium text-gray-500">Data</th>
              <th class="px-4 py-3 text-left font-medium text-gray-500">Cliente</th>
              <th class="px-4 py-3 text-left font-medium text-gray-500">Representante</th>
              <th class="px-4 py-3 text-left font-medium text-gray-500">Status</th>
              <th class="px-4 py-3 text-left font-medium text-gray-500">Total</th>
              <th class="px-4 py-3 text-left font-medium text-gray-500">Ações</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="pedido in pedidos" :key="pedido.id_pedido">
              <td
                class="px-4 py-3 whitespace-nowrap cursor-pointer hover:underline text-blue-600 font-medium"
                @click="$router.push(`/itens/${pedido.id_pedido}`)"
              >
                {{ pedido.codPedido }}
              </td>
              <td class="px-4 py-3 whitespace-nowrap">{{ pedido.emissao }}</td>
              <td class="px-4 py-3">Cliente {{ pedido.id_cliente }}</td>
              <td class="px-4 py-3">Rep. {{ pedido.id_representante }}</td>
              <td class="px-4 py-3 whitespace-nowrap">
                <span class="px-2 py-1 inline-flex text-xs leading-4 font-semibold rounded-full">
                  {{ pedido.status }}
                </span>
              </td>
              <td class="px-4 py-3 whitespace-nowrap">R$ {{ pedido.total_pedido?.toFixed(2) }}</td>
              <td class="px-4 py-3 whitespace-nowrap flex space-x-2">
                <button class="text-blue-600 hover:text-blue-900">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                  </svg>
                </button>
                <button class="text-gray-600 hover:text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Caso não haja pedidos -->
  <div v-else>
    <p class="text-center text-gray-500">Nenhum pedido encontrado.</p>
  </div>
</template>

<script setup>
defineProps({
  pedidos: {
    type: Array,
    required: true
  }
})
</script>
