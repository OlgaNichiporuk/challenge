export default defineNuxtConfig({
  runtimeConfig: {
    version: '0.0.1'
  },
  modules: [
    '@nuxtjs/tailwindcss', 
    'nuxt-svgo', 
    '@pinia/nuxt', 
    '@huntersofbook/naive-ui-nuxt'
  ],
  extends: ['@sidebase/core'],
  typescript: {
    shim: false
  }
})
