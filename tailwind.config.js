/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'purple-gradient-1': '#B38EFF',
        'purple-gradient-2': '#858CFF',
        'light-purple': '#E7DBFF',
        'light-yellow': '#FFF88F',
        'light-gray': '#585858',
        'light-green': '#a2ff8e',
        'gray-back': '#DDDDDD',
        /* dark theme section */ 
        'theme-dark-bg': '#181818',
        'theme-dark-bg-secondary': '#141414',
        'theme-font-secondary': '#F7F7F7',
        'theme-dark-bg-purple': '#746E80'
      },

    },
  },
  plugins: [],
}
