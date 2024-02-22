/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'gray-main' : '#b0b3b8',
        'gray-bg' : '#242526',
        'blue-hover' : '#0866ff',
        'white-icon' : '#e4e6eb',
        'gray-second' : '#3a3a3d',
      }
    },
  },
  plugins: [],
}

