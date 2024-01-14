/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Spline: ['Spline Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#E35467',
        secondary: '#342D2E',
      },
    },
  },
  plugins: [],
}
