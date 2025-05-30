<script setup>
import { ref } from 'vue'
import { Search, PlusCircle, Pencil, LogOut } from 'lucide-vue-next'

const search = ref('')
const perfis = ref([
  { codigo: '1', nome: 'Administrador', status: false, editando: false },
  { codigo: '2', nome: 'Qualidade', status: true, editando: false },
  { codigo: '3', nome: 'Representante', status: true, editando: false },
])

const filtrarPerfis = () => {
  return perfis.value.filter(p =>
    p.codigo.toLowerCase().includes(search.value.toLowerCase()) ||
    p.nome.toLowerCase().includes(search.value.toLowerCase())
  )
}

const ativarEdicao = (perfil) => {
  perfil.editando = true
}

const salvarEdicao = (perfil) => {
  perfil.editando = false
}

const sair = () => {
  // Aqui você pode colocar lógica de logout real
  alert('Você saiu do sistema!')
}
</script>

<template>
  <div class="min-h-screen bg-white text-gray-800 p-6">
    <div class="max-w-6xl mx-auto">
      <!-- Topo com título e botão de sair -->
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold text-purple-700">Perfis de Acesso</h1>
        <button
          class="flex items-center gap-2 text-red-600 hover:text-red-800 font-medium"
          @click="sair"
        >
          <LogOut class="w-5 h-5" /> Sair
        </button>
      </div>

      <!-- Botão de adicionar -->
      <div class="mb-6 flex justify-end">
        <button class="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded shadow">
          <PlusCircle class="w-5 h-5" /> Adicionar Perfil
        </button>
      </div>

      <!-- Campo de busca -->
      <div class="flex gap-2 items-center mb-6">
        <input
          v-model="search"
          type="text"
          placeholder="Buscar perfil..."
          class="flex-1 bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded shadow-sm"
        />
        <button class="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded flex items-center gap-1 shadow-sm">
          <Search class="w-4 h-4" /> Buscar
        </button>
      </div>

      <!-- Lista de perfis -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="perfil in filtrarPerfis()"
          :key="perfil.codigo"
          class="bg-gray-100 p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col justify-between transition-all duration-300 hover:shadow-md"
        >
          <div>
            <!-- Nome editável -->
            <div v-if="perfil.editando">
              <input
                v-model="perfil.nome"
                @blur="salvarEdicao(perfil)"
                class="text-lg font-medium bg-white border border-gray-300 text-gray-800 px-2 py-1 rounded w-full"
                autofocus
              />
            </div>
            <div v-else>
              <h2 class="text-lg font-semibold text-purple-700">{{ perfil.nome }}</h2>
            </div>
            <p class="text-sm text-gray-600 mt-1">
              Código: <span class="font-mono text-gray-500">{{ perfil.codigo }}</span>
            </p>
          </div>

          <!-- Status e Edição -->
          <div class="mt-4 flex justify-between items-center">
            <label class="flex items-center gap-2">
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5 text-purple-600"
                v-model="perfil.status"
              />
              <span class="text-gray-700">Ativo</span>
            </label>
            <button
              class="text-purple-600 hover:text-purple-800 flex items-center gap-1"
              @click="ativarEdicao(perfil)"
              v-if="!perfil.editando"
            >
              <Pencil class="w-4 h-4" /> Editar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
