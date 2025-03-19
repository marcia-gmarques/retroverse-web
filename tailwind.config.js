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
        lilas: ['#A89FCD']
      },
    },
  },
  plugins: [],
}

