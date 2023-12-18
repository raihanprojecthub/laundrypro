/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#0c4a6e',
        secondary: '#082f49',
        dark: '#0f172a',
        light: '#cbd5e1',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}