/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'light':'#c4bebe',
        'light-button-color':'#aaaaaa'
      },
    },
  },
  plugins: [],
}