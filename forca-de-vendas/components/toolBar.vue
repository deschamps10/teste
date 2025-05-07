<template>
    <nav class="w-full h-16 bg-white shadow-md border-b border-gray-100 flex items-center justify-center px-6 sticky top-0 z-50">
      <div class="flex items-center space-x-1 max-w-7xl w-full">
        <!-- Menu Items -->
        <div class="flex flex-1 items-center space-x-1">
          <router-link to="/usuarios" class="menu-item">Usuários</router-link>
          <router-link to="/acessos" class="menu-item">Acessos</router-link>
          <div class="menu-item dropdown group">
            Pedidos
            <div class="dropdown-menu">
              <router-link to="/pedidos" class="dropdown-item">Monitoramento de Pedidos</router-link>
              <router-link to="/pedidos/andamento" class="dropdown-item">Em Andamento</router-link>
              <router-link to="/pedidos/concluidos" class="dropdown-item">Concluídos</router-link>
            </div>
          </div>
          <div class="menu-item dropdown group">
            Configuração
            <div class="dropdown-menu">
              <router-link to="/config/geral" class="dropdown-item">Geral</router-link>
              <router-link to="/config/permissoes" class="dropdown-item">Permissões</router-link>
              <router-link to="/config/integracao" class="dropdown-item">Integração</router-link>
            </div>
          </div>
          <router-link to="/workflow" class="menu-item">Workflow</router-link>
          <router-link to="/acervo" class="menu-item">Acervo</router-link>
          <router-link to="/inteligencia" class="menu-item">Inteligência</router-link>
          <div class="menu-item dropdown group">
            Relatórios
            <div class="dropdown-menu">
              <router-link to="/relatorios/vendas" class="dropdown-item">Vendas</router-link>
              <router-link to="/relatorios/financeiro" class="dropdown-item">Financeiro</router-link>
              <router-link to="/relatorios/performance" class="dropdown-item">Performance</router-link>
            </div>
          </div>
        </div>
  
        <!-- Right Side Icons -->
        <div class="flex items-center space-x-4 pl-4">
          <router-link to="/crm" class="menu-item">CRM</router-link>
          <router-link to="/storelink" class="menu-item">Storelink</router-link>
          <router-link to="/ajuda" class="menu-item">Ajuda</router-link>
          
          <button class="menu-icon hover:bg-gray-100" title="Configurações">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
          
          <button class="menu-icon hover:bg-gray-100" title="Perfil">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  </template>
  
  <style scoped>
  .menu-item {
    @apply px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200;
  }
  
  .menu-icon {
    @apply w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200;
  }
  
  .dropdown {
    @apply relative;
  }
  
  .dropdown-menu {
    @apply absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-10 
           invisible opacity-0 group-hover:visible group-hover:opacity-100 
           transition-all duration-200 origin-top transform scale-95 group-hover:scale-100;
  }
  
  .dropdown-item {
    @apply block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100;
  }
  
  .router-link-active {
    @apply text-blue-600 bg-blue-50;
  }
  </style>