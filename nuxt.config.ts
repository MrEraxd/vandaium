import { dirname, join } from "path";
import { fileURLToPath } from "url";

const currentDir = dirname(fileURLToPath(import.meta.url));

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
  alias: {
    "@stores": join(currentDir, "./stores"),
    "@localTypes": join(currentDir, "./localTypes"),
    "@components": join(currentDir, "./components"),
    "@utils": join(currentDir, "./utils"),
    "@composables": join(currentDir, "./composables"),
    "@enums": join(currentDir, "./enums"),
    "@formSchemas": join(currentDir, "./formSchemas"),
  },
  typescript: {
    strict: true,
  },
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
