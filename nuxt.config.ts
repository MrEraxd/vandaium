// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  css: ["~/assets/styles/tailwind.pcss", "~/assets/styles/main.pcss"],
  components: ["~/components", "~/components/Blocks"],
});
