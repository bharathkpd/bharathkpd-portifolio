/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F7F3EC',
        cream: '#FBF9F4',
        charcoal: '#2B2620',
        warmgray: '#6B6354',
        terracotta: '#C4633A',
        beige: '#E2DBCC',
      },
      fontFamily: {
        serif: ['Fraunces', 'Source Serif 4', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'IBM Plex Mono', 'monospace'],
      },
      borderWidth: {
        'half': '0.5px',
      }
    },
  },
  plugins: [],
}
