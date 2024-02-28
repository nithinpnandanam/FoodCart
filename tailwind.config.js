/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { 
        grey_color_1: "color: rgba(2, 6, 12, 0.6)", 
    }, 
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
