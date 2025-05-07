<template>
    <div class="bg-white p-6 rounded-xl shadow-md max-w-7xl mx-auto mt-6">
      <h2 class="text-xl font-semibold text-gray-700 mb-4 flex items-center">
        <svg class="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" stroke-width="2"
             viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M3 4a1 1 0 011-1h3.28a1 1 0 01.95.68L9.6 6H20a1 1 0 011 1v11a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"/>
        </svg>
        Pedido - Monitoramento de Pedidos
      </h2>
  
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">

        <input
          type="text"
          v-model="filtros.numeroPedido"
          placeholder="Número do pedido ou protocolo"
          class="input"
        />
        
        <input
          type="text"
          v-model="filtros.representante"
          placeholder="Representante"
          class="input"
        />
  
        <input
          type="text"
          v-model="filtros.cliente"
          placeholder="Cliente (código, nome ou CNPJ)"
          class="input"
        />

        <select v-model="filtros.regiao" class="input">
          <option value="">Todas as regiões</option>
          <option value="Sul">Sul</option>
          <option value="Sudeste">Sudeste</option>
          <!-- outras regiões -->
        </select>
  
        <select v-model="filtros.status" class="input">
          <option value="">Todos os status</option>
          <option value="em_digitacao">Em digitação</option>
          <option value="finalizado">Finalizado</option>
          <!-- outros status -->
        </select>
  
        <input
          type="date"
          v-model="filtros.dataInicio"
          class="input"
        />
      </div>
  
      <button @click="pesquisar"
              class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2"
             viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z"/>
        </svg>
        Pesquisar
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const filtros = ref({
    representante: '',
    cliente: '',
    numeroPedido: '',
    regiao: '',
    status: '',
    dataInicio: '',
  })
  
  const pesquisar = () => {
    console.log('Filtros aplicados:', filtros.value)
    // Aqui você pode fazer a chamada para a API ou atualizar os dados
  }
  </script>
  
  <style scoped>
  .input {
    @apply border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500;
  }
  </style>
  