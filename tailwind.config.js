/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // Ensure these match with .storybook/preview.js
  theme: {
    extend: {
      colors: {
        'my-custom-color': '#fffff',
        blue: '#1B4DB1',
        yellow: '#F3F243',
        pink: '#FF64BC',
        black: '#000000',
        lightBlack: '#1A1E2E',
        darkGray: '#6E6A6C',
        gray: '#A7A6A7',
        lightGray: '#D9D9D9',
        lighterGray: '#F8F7FA',
        red: '#EF3F47',
      },
      screens: {
        xs: '375px',
        sm: '600px',
        md: '900px',
        lg: '1200px',
        xl: '1536px',
      },
    },
  },
  plugins: [],
};
