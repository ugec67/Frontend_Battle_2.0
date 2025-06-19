/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html",
  ],
  darkMode: 'class', // Enable dark mode based on 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Add Inter font
      },
      colors: {
        // Define your custom baby pink shades
        pink: {
          50: '#FFF0F5',   // Very light pink, background
          100: '#FCE4EC',  // Light pink, slightly darker background/navbar
          200: '#F8BBD0',  // Baby pink, for elements
          300: '#F48FB1',  // Medium pink, for gradients
          400: '#F06292',  // Stronger pink
          500: '#EC407A',  // Main pink for buttons
          600: '#D81B60',  // Darker pink for hover
          700: '#C2185B',  // Darkest pink for text
          800: '#AD1457',
          900: '#880E4F',
        },
        purple: { // Keep some purple for gradient contrast
          100: '#E1BBE1',
          900: '#4A148C',
        }
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
