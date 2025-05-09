<template>
    <div class="bg-white min-h-screen p-6">
      <!-- Título principal -->
      <h1 class="text-4xl font-extrabold text-purple-800 mb-8 tracking-tight">Painel de Acesso</h1>
  
      <!-- Área de busca -->
      <div class="flex flex-col md:flex-row gap-4 items-start md:items-center mb-10">
        <input
          v-model="search"
          type="text"
          placeholder="Digite o nome ou código..."
          class="w-full md:w-1/3 px-5 py-3 border-2 border-gray-200 rounded-3xl focus:ring-2 focus:ring-purple-500 outline-none transition"
        />
        <button
          @click="filtrarRepresentantes"
          class="px-6 py-3 bg-purple-700 text-white rounded-3xl hover:bg-purple-800 transition"
        >
          Buscar
        </button>
      </div>
  
      <!-- Cards principais -->
      <div class="grid gap-10 md:grid-cols-2">
        <!-- Card de representantes -->
        <div class="bg-gray-50 rounded-3xl p-6 shadow-xl border border-gray-200">
          <h2 class="text-2xl font-semibold text-gray-800 mb-6">Representantes Ativos</h2>
          <div v-for="rep in ativos" :key="rep.codigo" class="mb-5 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
            <div class="flex justify-between items-center">
              <div class="text-lg font-bold text-gray-900">{{ rep.nome }}</div>
              <div class="text-sm text-gray-600">
                <span class="font-medium">Status:</span>
                <span :class="rep.online ? 'text-green-600' : 'text-red-600'">{{ rep.online ? 'Online' : 'Offline' }}</span>
              </div>
            </div>
            <div class="text-sm text-gray-500">{{ rep.codigo }} | {{ rep.email }}</div>
            <div class="mt-3 text-sm text-gray-500">
              <span class="font-medium">Última vez logado:</span> {{ rep.ultimoLogin }}
            </div>
            <div class="flex justify-between mt-3 text-sm">
              <div>
                <span class="font-medium">Senha:</span>
                <span :class="rep.senha ? 'text-green-600' : 'text-red-600'">
                  {{ rep.senha ? 'Ativa' : 'Inativa' }}
                </span>
              </div>
              <div>
                <span class="font-medium">Acesso:</span>
                <span :class="rep.acesso ? 'text-green-600' : 'text-red-600'">
                  {{ rep.acesso ? 'Liberado' : 'Bloqueado' }}
                </span>
              </div>
            </div>
            <button
              @click="loginRepresentante(rep)"
              class="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Acessar como Representante
            </button>
          </div>
        </div>
  
        <!-- Card de histórico -->
        <div class="bg-gray-50 rounded-3xl p-6 shadow-xl border border-gray-200">
          <h2 class="text-2xl font-semibold text-gray-800 mb-6">Histórico de Acessos</h2>
          <ul class="space-y-4">
            <li
              v-for="item in historico"
              :key="item.usuario + item.data"
              class="bg-white rounded-xl border border-gray-100 p-4 shadow-sm"
            >
              <div class="flex justify-between items-center">
                <div class="text-gray-800 font-semibold">{{ item.usuario }}</div>
                <div class="text-sm text-gray-600">{{ item.data }} às {{ item.hora }}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        search: "",
        ativos: [
          {
            nome: "João Silva",
            codigo: "1234",
            email: "joao@exemplo.com",
            ultimoLogin: "2025-05-01 09:00",
            online: true,
            senha: true,
            acesso: true,
            bloqueado: false,
          },
          {
            nome: "Maria Souza",
            codigo: "5678",
            email: "maria@exemplo.com",
            ultimoLogin: "2025-05-02 15:00",
            online: false,
            senha: true,
            acesso: false,
            bloqueado: true,
          },
        ],
        historico: [
          {
            usuario: "João Silva",
            data: "2025-05-01",
            hora: "09:00",
          },
          {
            usuario: "Maria Souza",
            data: "2025-05-02",
            hora: "15:00",
          },
        ],
      };
    },
    methods: {
      loginRepresentante(rep) {
        if (rep.bloqueado) {
          alert("Este representante está bloqueado!");
        } else {
          alert(`Login para o representante ${rep.nome}`);
        }
      },
      filtrarRepresentantes() {
        // Lógica de filtragem conforme pesquisa
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos adicionais, se necessário */
  </style>
  