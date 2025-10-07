// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  imports:{
    autoImport:true,
    scan:true
  },
  runtimeConfig:{
    public:{
      ivandtPublicKey:''
    }
  },

  devServer: {
    https: {
      key:'./certificates/localhost-key.pem',
      cert:'./certificates/localhost.pem',
    },
    host: '0.0.0.0',
    port: 3000
  }
})
