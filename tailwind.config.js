/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bovine: ['Bovine MVB', 'sans-serif'],
      },
      textColor: {
        lilas: {
          default: '#A89FCD',
          hover: '#8C7AB8'
        },
        marinho: '#bdebfb'
      },
      cursor: {
        'home': 'url(/src/assets/png/question-box.png), auto',
      },
    },
  },
  plugins: [],
}

