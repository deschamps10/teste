<template>
    <div class="bg-gray-100 p-6 rounded-md shadow-md">
      <!-- Cabeçalho do Relatório -->
      <div class="flex justify-between items-center mb-6">
        <div>
          <h2 class="text-xl font-semibold text-gray-800">Relatório - Detalhe do Pedido</h2>
          <p class="text-gray-500 text-sm">Esta tela apresenta o detalhamento completo do pedido.</p>
        </div>
      </div>
  
      <!-- Informações do Pedido -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 text-sm">
        <!-- Dados do Pedido -->
        <div><strong class="text-gray-700">Nº Pedido:</strong> {{ pedido.id_pedido }}</div>
        <div><strong class="text-gray-700">Data Emissão:</strong> 07/05/2025</div>
        <div><strong class="text-gray-700">Pagamento:</strong> 30-60-90</div>
        <div><strong class="text-gray-700">Tp. Pagamento:</strong> BOLETO</div>
  
        <!-- Dados do Cliente -->
        <div><strong class="text-gray-700">Fantasia:</strong> PADRONIZE CONFECCOES</div>
        <div><strong class="text-gray-700">CNPJ:</strong> 34.046.777/0001-93</div>
        <div><strong class="text-gray-700">I.E.:</strong> 9062063652</div>
        <div><strong class="text-gray-700">Representante:</strong> 00263 - BONA REPRESENTACOES TEXTEIS LTDA</div>
        <div><strong class="text-gray-700">Email:</strong> contato@padronizeuniformes.com.br</div>
        <div><strong class="text-gray-700">Telefone:</strong> (41)3065-1733</div>
        <div><strong class="text-gray-700">CEP:</strong> 83326010</div>
        <div><strong class="text-gray-700">Bairro:</strong> ATUBA</div>
        <div><strong class="text-gray-700">Cidade/UF:</strong> PINHAIS/PR</div>
        <div><strong class="text-gray-700">Previsão:</strong> 07/05/2025</div>
      </div>
  
      <!-- Tabela de Itens do Pedido -->
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white rounded-md shadow-sm">
          <thead class="bg-gray-200 text-gray-700 text-sm leading-5 font-medium uppercase tracking-wider">
            <tr>
              <th class="px-4 py-3 text-left">Produto</th>
              <th class="px-4 py-3 text-left">Tamanho</th>
              <th class="px-4 py-3 text-left">Quantidade</th>
              <th class="px-4 py-3 text-right">Preço Unitário (R$)</th>
              <th class="px-4 py-3 text-right">Preço Líquido (R$)</th>
              <th class="px-4 py-3 text-right">Total Bruto (R$)</th>
              <th class="px-4 py-3 text-right">Desconto (%)</th>
              <th class="px-4 py-3 text-right">Total Desconto (R$)</th>
              <th class="px-4 py-3 text-right">Total Líquido (R$)</th>
            </tr>
          </thead>
          <tbody class="bg-white text-gray-700 text-sm divide-y divide-gray-200">
            <tr v-for="item in pedido.itens" :key="item.id_item">
              <td class="px-4 py-3">{{ item.nom_produto }}</td>
              <td class="px-4 py-3">{{ item.tam_produto }}</td>
              <td class="px-4 py-3 text-right">{{ item.qtd_item }}</td>
              <td class="px-4 py-3 text-right">{{ item.valor_bruto.toFixed(2) }}</td>
              <td class="px-4 py-3 text-right">{{ item.valor_liquido.toFixed(2) }}</td>
              <td class="px-4 py-3 text-right">{{ (item.valor_bruto * item.qtd_item).toFixed(2) }}</td>
              <td class="px-4 py-3 text-right">{{ item.per_desconto }}%</td>
              <td class="px-4 py-3 text-right">{{ ((item.valor_bruto * item.qtd_item) * (item.per_desconto / 100)).toFixed(2) }}</td>
              <td class="px-4 py-3 text-right">{{ (item.valor_liquido * item.qtd_item).toFixed(2) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- Resumo de Totais -->
      <div class="mt-6">
        <div class="flex justify-between text-sm text-gray-700">
          <div><strong>Total Bruto:</strong> R$ {{ totalBruto.toFixed(2) }}</div>
          <div><strong>Total Desconto:</strong> R$ {{ totalDesconto.toFixed(2) }}</div>
          <div><strong>Total Líquido:</strong> R$ {{ totalLiquido.toFixed(2) }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pedido: {
          id_pedido: 1,
          itens: [
            {
              id_item: 1,
              nom_produto: "Camiseta Básica",
              tam_produto: "M",
              qtd_item: 10,
              valor_bruto: 100.00,
              valor_liquido: 90.00,
              per_desconto: 10
            }
          ]
        }
      };
    },
    computed: {
      totalBruto() {
        return this.pedido.itens.reduce((total, item) => total + (item.valor_bruto * item.qtd_item), 0);
      },
      totalDesconto() {
        return this.pedido.itens.reduce((total, item) => total + ((item.valor_bruto * item.qtd_item) * (item.per_desconto / 100)), 0);
      },
      totalLiquido() {
        return this.pedido.itens.reduce((total, item) => total + (item.valor_liquido * item.qtd_item), 0);
      }
    }
  };
  </script>
  