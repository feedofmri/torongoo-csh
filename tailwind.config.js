/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0084FF',
        secondary: '#1A1A1A',
        background: '#FFFFFF',
        surface: '#F4F6F8',
        'accent-warm': '#FFC107',
        'accent-soft': '#FFB6C1',
        'accent-tech': '#00E5FF',
      },
    },
  },
  plugins: [],
}

