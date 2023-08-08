/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        sunrise: "url('/src/assets/img/sunrise.jpg')",
        sunset: "url('/src/assets/img/sunset.jpg')",
        pomodoro: "url('/src/assets/img/pomodoro.webp')",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
