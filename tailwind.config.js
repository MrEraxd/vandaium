/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      sans: ["poppins"],
    },
    extend: {
      colors: {
        primary: {
          300: "#F7B764",
          400: "#F6AE50",
          500: "#F5A53D",
          600: "#DD9537",
          700: "#C48431",
        },
      },
    },
  },
  plugins: [],
};
