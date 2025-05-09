<template>
    <div class="bg-white min-h-screen p-4 sm:p-6 flex flex-col lg:flex-row gap-6">
      <!-- Representantes -->
      <div class="w-full lg:flex-1">
        <h1 class="text-3xl sm:text-4xl font-extrabold text-purple-800 mb-4 sm:mb-6">Representantes</h1>
        <div class="space-y-4">
          <div
            v-for="rep in ativos"
            :key="rep.codigo"
            class="bg-gray-50 rounded-3xl p-4 sm:p-6 shadow-lg border border-gray-200 w-full flex flex-col sm:flex-row justify-between items-start sm:items-center"
          >
            <div class="mb-2 sm:mb-0">
              <div class="text-lg sm:text-xl font-bold text-gray-900">{{ rep.nome }}</div>
              <div class="text-sm text-gray-600">{{ rep.codigo }} | {{ rep.email }}</div>
            </div>
            <div class="flex items-center gap-3 mt-2 sm:mt-0">
              <button
                @click="loginRepresentante(rep)"
                class="px-3 py-2 text-sm sm:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Acessar
              </button>
              <button
                @click="abrirPopup(rep)"
                class="text-lg sm:text-xl text-gray-700 hover:text-purple-700 font-bold"
              >
                !
              </button>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Mais acessados -->
      <div class="w-full lg:w-1/3">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Mais acessados (últimos 3 dias)</h2>
        <ul class="space-y-3">
          <li
            v-for="rep in maisAcessados"
            :key="rep.codigo"
            class="bg-white p-4 rounded-xl shadow-sm border border-gray-100"
          >
            <div class="font-semibold text-gray-800">{{ rep.nome }}</div>
            <div class="text-sm text-gray-500">{{ rep.email }}</div>
          </li>
        </ul>
      </div>
  
      <!-- Popup -->
      <div
        v-if="representanteSelecionado"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div class="bg-white w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] p-6 rounded-3xl shadow-2xl relative">
          <button
            @click="fecharPopup"
            class="absolute top-4 right-4 text-gray-600 hover:text-red-600 text-xl"
          >
            ×
          </button>
          <h2 class="text-xl sm:text-2xl font-bold text-purple-800 mb-4">
            Detalhes de {{ representanteSelecionado.nome }}
          </h2>
          <div class="text-sm text-gray-700 space-y-2">
            <p><strong>Código:</strong> {{ representanteSelecionado.codigo }}</p>
            <p><strong>Email:</strong> {{ representanteSelecionado.email }}</p>
            <p><strong>Status:</strong>
              <span :class="representanteSelecionado.online ? 'text-green-600' : 'text-red-600'">
                {{ representanteSelecionado.online ? 'Online' : 'Offline' }}
              </span>
            </p>
            <p><strong>Senha:</strong>
              <span :class="representanteSelecionado.senha ? 'text-green-600' : 'text-red-600'">
                {{ representanteSelecionado.senha ? 'Ativa' : 'Inativa' }}
              </span>
            </p>
            <p><strong>Acesso:</strong>
              <span :class="representanteSelecionado.acesso ? 'text-green-600' : 'text-red-600'">
                {{ representanteSelecionado.acesso ? 'Liberado' : 'Bloqueado' }}
              </span>
            </p>
            <p><strong>Último login:</strong> {{ representanteSelecionado.ultimoLogin }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        representanteSelecionado: null,
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
        maisAcessados: [
          {
            nome: "João Silva",
            codigo: "1234",
            email: "joao@exemplo.com",
          },
          {
            nome: "Maria Souza",
            codigo: "5678",
            email: "maria@exemplo.com",
          },
          {
            nome: "Carlos Lima",
            codigo: "8910",
            email: "carlos@exemplo.com",
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
      abrirPopup(rep) {
        this.representanteSelecionado = rep;
      },
      fecharPopup() {
        this.representanteSelecionado = null;
      },
    },
  };
  </script>
  