/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-green': '#8aa691',
        'green': '#588163',
        'green2': '#799A82',
        'dark-green': '#3d5a45',
        'darker-green': '#36513E',
        'white': '#ffffff',
        'brown': '#816358',
        'light-brown': '#a6918a',
        'dark-brown': '#5a453d'
      },
    }
  },
  plugins: [],
}