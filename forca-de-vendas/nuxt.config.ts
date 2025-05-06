// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/axios'
  ],
  css: [
    '~/assets/css/styles.css',
  ],
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:8080/api'
    }
  }

})