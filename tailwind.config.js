/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
  
    },
    screens:{
      'xs': '370px',
      // => @media (min-width: 370px) { ... }
    }
  },
  plugins: [],
}

