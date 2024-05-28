/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          'green': '#4CC50F',
          'red': '#FF6868',
          'secoundary': '#555',
          'primary': '#FCFCFC'
      }
    },
  },
  plugins: [require("daisyui")],
}