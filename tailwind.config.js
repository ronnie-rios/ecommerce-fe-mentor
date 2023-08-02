/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'dark-blue': '#1d2025',
      'gray-blue': '#68707d',
      'light-blue': '#f7f8fd'
    },
    fontFamily: {
      main: ['Kumbh Sans', 'sans-serif']
    }
  },
  plugins: [],
}