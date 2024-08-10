// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxtjs/color-mode',
    '@nuxtjs/seo',
    '@nuxtjs/tailwindcss',
    // '@pinia/nuxt',
    '@vite-pwa/nuxt',
    '@vueuse/nuxt',
    'nuxt-gtag',
    'nuxt-icons',
  ],
  nitro: {
    compressPublicAssets: true,
  },
  routeRules: {
    '/': { swr: true },
    // '/_ipx/**': { headers: { 'cache-control': 'max-age=31536000' } },
    // '/images/**': { headers: { 'cache-control': 'max-age=31536000' } },
    // '/fonts/**': { headers: { 'cache-control': 'max-age=31536000' } },
  },
  runtimeConfig: {
    app: {
      version: '',
    },
    private: {},
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
  image: {
    format: ['avif', 'webp'],
    quality: 80,
  },
  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: '',
  },
  site: {
    name: 'Slauris',
    url: 'https://slauris.com',
  },
  robots: {
    disallow: ['/_nuxt/'],
  },
  gtag: {
    loadingStrategy: 'async',
  },
})
