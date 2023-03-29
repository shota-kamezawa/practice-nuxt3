// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          href: 'https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css',
          rel: 'stylesheet',
        },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'crossorigin' as never,
        },
        {
          href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
          rel: 'stylesheet',
        },
      ],
    },
  },

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
