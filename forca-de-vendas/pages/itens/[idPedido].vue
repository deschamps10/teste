<script setup>
import { useRoute } from 'vue-router';
import { useFetch } from '#imports';
import ListItens from '@/components/itens/listItens.vue'; // Importe o componente

// Obtém o parâmetro da rota
const route = useRoute();
const idPedido = route.params.idPedido; // Sem a tipagem explícita

// Configura a URL para a API
const config = useRuntimeConfig();
const url = `${config.public.API_URL}/itens/${idPedido}`;

// Fetch os dados da API
const { data, error, pending } = await useFetch(url);
</script>

<template>
  <div class="bg-gray-100 p-6 rounded-md shadow-md">
    <!-- Passando os dados para o componente ListItens -->
    <ListItens :itens="data" />
  </div>
</template>
