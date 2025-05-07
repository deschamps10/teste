export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // Configuração automática das rotas
  pages: true, // Remover a configuração de páginas manual se você preferir que o Nuxt resolva isso automaticamente

  modules: [
    '@nuxtjs/tailwindcss',
  ],
  css: [
    '~/assets/css/styles.css',
  ],
  runtimeConfig: {
    public: {
      API_URL: 'http://localhost:8080',
    },
  },
})
