// nuxt.config.mjs
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  app: {
    head: {
      charset: {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',
      },
      htmlAttrs: {
        lang: 'id'
      }
    }
  },
  devtools: { enabled: true },

  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },

  compatibilityDate: '2024-07-11',

});
