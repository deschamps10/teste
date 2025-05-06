<template>
    <div class="max-w-screen-xl mx-auto px-4 py-6">
      <!-- Cabeçalho -->
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-gray-800">Monitoramento de Pedidos</h1>
        <p class="text-gray-600">Lista de pedidos realizados no sistema</p>
      </div>
  
      <!-- Filtros simplificados -->
      <div class="bg-white rounded-lg shadow p-4 mb-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Representante</label>
          <select class="w-full p-2 text-sm border border-gray-300 rounded-md">
            <option>Todos</option>
            <option>Rep. 1</option>
            <option>Rep. 2</option>
          </select>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select class="w-full p-2 text-sm border border-gray-300 rounded-md">
            <option>Todos</option>
            <option>Ativo</option>
            <option>Cancelado</option>
          </select>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Período</label>
          <input type="date" class="w-full p-2 text-sm border border-gray-300 rounded-md">
        </div>
        
        <div class="flex items-end">
          <button class="w-full bg-blue-600 text-white py-2 px-4 rounded-md text-sm">
            Filtrar
          </button>
        </div>
      </div>
  
      <!-- Tabela compacta -->
      <div class="bg-white rounded-lg shadow overflow-hidden">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200 text-sm">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-3 py-2 text-left font-medium text-gray-500">Pedido</th>
                <th class="px-3 py-2 text-left font-medium text-gray-500">Data</th>
                <th class="px-3 py-2 text-left font-medium text-gray-500">Cliente</th>
                <th class="px-3 py-2 text-left font-medium text-gray-500">Status</th>
                <th class="px-3 py-2 text-left font-medium text-gray-500">Total</th>
                <th class="px-3 py-2 text-left font-medium text-gray-500">Ações</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-3 py-3 whitespace-nowrap">10557</td>
                <td class="px-3 py-3 whitespace-nowrap">06/03/23</td>
                <td class="px-3 py-3">Cliente A</td>
                <td class="px-3 py-3 whitespace-nowrap">
                  <span class="px-2 py-1 inline-flex text-xs leading-4 font-semibold rounded-full bg-green-100 text-green-800">
                    Ativo
                  </span>
                </td>
                <td class="px-3 py-3 whitespace-nowrap">R$ 3.307,26</td>
                <td class="px-3 py-3 whitespace-nowrap">
                  <button class="text-blue-600 hover:text-blue-900 mr-2">
                    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                  </button>
                  <button class="text-gray-600 hover:text-gray-900">
                    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                    </svg>
                  </button>
                </td>
              </tr>
              
              <tr>
                <td class="px-3 py-3 whitespace-nowrap">10558</td>
                <td class="px-3 py-3 whitespace-nowrap">06/03/23</td>
                <td class="px-3 py-3">Cliente B</td>
                <td class="px-3 py-3 whitespace-nowrap">
                  <span class="px-2 py-1 inline-flex text-xs leading-4 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Pendente
                  </span>
                </td>
                <td class="px-3 py-3 whitespace-nowrap">R$ 4.027,26</td>
                <td class="px-3 py-3 whitespace-nowrap">
                  <button class="text-blue-600 hover:text-blue-900 mr-2">
                    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                  </button>
                  <button class="text-gray-600 hover:text-gray-900">
                    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PedidosMonitoramento'
  }
  </script>