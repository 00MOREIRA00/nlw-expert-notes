/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorPredefined : '#0f172a'
      },
      fontFamily:{
        sans: ['Inter', 'sans-serif'] 
      }
    },
  },
  plugins: [],
}