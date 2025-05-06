// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    // Adicionando o módulo Tailwind CSS
    '@nuxtjs/tailwindcss',
  ],
  css: [
    // Adicionando o CSS global do Tailwind
    '~/assets/css/styles.css',
  ],
})
