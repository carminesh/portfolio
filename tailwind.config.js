/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'purple-gradient-1': '#B38EFF',
        'purple-gradient-2': '#858CFF',
        'light-gray': '#585858'
      },

    },
  },
  plugins: [],
}
