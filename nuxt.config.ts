// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },

  css: ['@/assets/styles/vuetify.scss'],

  srcDir: './src',

  typescript: {
    shim: false,
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },

    ssr: {
      noExternal: ['vuetify'],
    },
  },
});
