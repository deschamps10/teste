<template>
  <nav
    class="w-full h-16 bg-white shadow-md border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-50"
  >
    <button @click="toggleMobileMenu" class="md:hidden focus:outline-none">
      <svg
        class="w-6 h-6 text-gray-700"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <!-- MENU DESKTOP -->
    <div class="hidden md:flex items-center justify-between w-full max-w-7xl">
      <div class="flex items-center space-x-2">
        <div
          v-for="menu in menuLinks"
          :key="menu.label"
          class="relative group"
        >
          <div>
            <button
              class="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
            >
              {{ menu.label }}
            </button>
            <div
              class="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 origin-top transform scale-95 group-hover:scale-100"
            >
              <router-link
                v-for="item in menu.items"
                :key="item.label"
                :to="item.to"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {{ item.label }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- USUÁRIO -->
    <div class="relative group">
      <button
        class="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </button>
      <div
        class="absolute right-0 mt-2 w-56 bg-white border border-gray-100 rounded-md shadow-lg py-1 z-20 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 origin-top-right transform scale-95 group-hover:scale-100"
      >
        <router-link
          to="/usuario/configuracoes"
          class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-2 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M11 17a1 1 0 001-1v-1h3a1 1 0 000-2h-3v-1a1 1 0 00-2 0v1H6a1 1 0 000 2h3v1a1 1 0 001 1z"
            />
          </svg>
          Configurações de Usuário
        </router-link>
        <button
          @click="logout"
          class="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-2 text-red-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 4a1 1 0 011-1h6a1 1 0 010 2H5v10h5a1 1 0 110 2H4a1 1 0 01-1-1V4zm12.293 1.293a1 1 0 011.414 1.414L15.414 9H9a1 1 0 100 2h6.414l-1.707 1.707a1 1 0 001.414 1.414l3.414-3.414a1 1 0 000-1.414l-3.414-3.414z"
              clip-rule="evenodd"
            />
          </svg>
          Sair
        </button>
      </div>
    </div>

    <!-- MENU MOBILE -->
    <div
      v-if="showMobileMenu"
      class="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
    >
      <div
        class="bg-white w-64 h-full p-4 shadow-md absolute left-0 top-0 z-50"
      >
        <button @click="toggleMobileMenu" class="mb-4">
          <svg
            class="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <router-link
          v-for="item in mobileMenu"
          :key="item.label"
          :to="item.to"
          class="block py-2 text-gray-800"
          @click="toggleMobileMenu"
        >
          {{ item.label }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false,
      menuLinks: [
        {
          label: "Usuários",
          items: [
            { label: "Perfil de Acesso", to: "/usuarios/perfil-de-acesso" },
            { label: "Usuários", to: "/usuarios" },
          ],
        },
        {
          label: "Pedidos",
          items: [{ label: "Monitoramento de Pedidos", to: "/pedidos" }],
        },
      ],
      mobileMenu: [
        { label: "Perfil de Acesso", to: "/usuarios/perfil-de-acesso" },
        { label: "Usuários", to: "/usuarios" },
        { label: "Acessos", to: "/acessos" },
        { label: "Workflow", to: "/workflow" },
        { label: "Acervo", to: "/acervo" },
        { label: "Inteligência", to: "/inteligencia" },
        { label: "CRM", to: "/crm" },
        { label: "Storelink", to: "/storelink" },
        { label: "Ajuda", to: "/ajuda" },
      ],
    };
  },
  methods: {
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    logout() {
      console.log("Logout realizado");
      this.$router.push("/login");
    },
  },
};
</script>
