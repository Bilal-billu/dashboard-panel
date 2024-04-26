/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        card: {
          '100': '#E3F5FF',
          '200': '#E5ECF6'
        }
      }
    },
  },
  plugins: [],
}

