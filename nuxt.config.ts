// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
      '@nuxtjs/tailwindcss',
      '@nuxtjs/color-mode',
      'nuxt-icon',
      '@nuxt/content',
      // '@nuxtjs/algolia',
      // "nuxt-vercel-analytics",
      '@nuxt/image-edge',
      '@vueuse/nuxt'
    ],
    content: {
      documentDriven: {
        injectPage: false // turn off injectPage because we are using our own [...slug].vue
      },
          markdown: {
              toc: {
                  depth: 3,
                  searchDepth: 3,
              },
          },
          highlight: {
              theme: "dracula-soft",
              preload: [
                'vue',
                'jsx'
              ]
          },
    },
    app: {
      pageTransition: { name: 'page', mode: 'out-in' },
    },
    nitro: {
      preset: 'vercel'
    },
    colorMode: {
      preference: 'night', // default theme
      dataValue: 'theme', // activate data-theme in <html> tag
      classSuffix: '',
    },
    components: [{
      path: '~/components',
      global: true
    }]

})
