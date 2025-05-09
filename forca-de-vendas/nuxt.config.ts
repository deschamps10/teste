export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  server: {
    host: '0.0.0.0', // Aceitar conexões externas
    port: 3000, // Pode ser alterado para a porta que você desejar
  },

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
