// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-svgo-loader",
    "@vueuse/nuxt",
  ],
  css: ["~/assets/styles/tailwind.pcss", "~/assets/styles/main.pcss"],
  components: ["~/components", "~/components/Blocks"],
  svgoLoader: {
    defaultImport: "component",
    svgoConfig: {
      plugins: [
        {
          name: "preset-default",
          params: {
            overrides: {
              removeViewBox: false,
            },
          },
        },
      ],
    },
  },
});
