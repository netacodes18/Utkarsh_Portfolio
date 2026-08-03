/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          bg: '#FAF9F6',
          mint: '#D8F3DC',
          peach: '#FFE5D9',
          dark: '#111827',
          muted: '#6B7280',
          accent: '#10B981'
        }
      }
    },
  },
  plugins: [],
}
