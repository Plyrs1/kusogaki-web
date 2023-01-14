const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: "jit",
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Monsterrat', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'kusogaki-purple': '#6167c5'
      }
    }
  },
  plugins: []
}
