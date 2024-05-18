/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        textgray:{
          light:'#fafafa',
          dark:'#282828',
        },
      },
  
    },
    screens:{
      'xs': '350px',
      // => @media (min-width: 370px) { ... },
      'sm': '640px',
      // => @media (min-width: 640px) { ... }, 
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }, 
      'md': '768px',
      // => @media (min-width: 768px) { ... }, 
      
    }
  },
  darkMode:'class',
  plugins: [],
}

