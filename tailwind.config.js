/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#1E1E2E',
        'white-primary': '#F5F0EB',
        'secondary': '#D4A853',

      },
      backgroundImage: {
        'hero-bg': "url('./Img/tailwind.png')",
      },
    },
  },
  plugins: [],
}

