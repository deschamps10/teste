<script setup>
defineProps({
  itens: Array // Definindo que 'itens' é um array passado como prop
});
</script>

<template>
  <div>
    <table class="min-w-full bg-white shadow-md rounded-lg">
      <thead class="bg-gray-100">
        <tr>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">REF</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DESCRIÇÃO</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">COR</th>
          <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">TAM.</th>
          <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">QTD.</th>
          <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">VLR. UNIT. BRUTO</th>
          <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">VLR. UNIT. LÍQUIDO</th>
          <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">T. BRUTO</th>
          <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">T. DESCONTO (N)</th>
          <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">T. DESCONTO (%)</th>
          <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">T. LÍQUIDO</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="item in itens" :key="item?.REF">
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ data?.REF }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ item?.DESCRICAO }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ item?.COR }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{{ item?.TAM }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{{ item?.QUANTIDADE }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">R$ {{ item?.VLR_UNIT_BRUTO }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">R$ {{ item?.VLR_UNIT_LIQUIDO }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">R$ {{ item?.T_BRUTO }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">R$ {{ item?.T_DESCONTON }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{{ item?.T_DESCONTO }}%</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600 text-right">R$ {{ item?.T_LIQUIDO }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
