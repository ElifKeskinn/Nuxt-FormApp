// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  typescript: {
    strict: true,
  },
  css: ['@/assets/tailwind.css'],
  
  // Vite Konfigürasyonu
  vite: {
    server: {
      allowedHosts: ['basvuru.sanaltornacilar.com'],
      strictPort: true
    }
  },

  // Nitro Sunucu Konfigürasyonu
  nitro: {
    preset: 'node',
  }
});
