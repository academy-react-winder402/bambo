/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
  
    },
    screens:{
      'xs': '350px',
      // => @media (min-width: 350px) { ... },
    
      'sm': '628px',
      // => @media (min-width: 628px) { ... }, 
      'md': '768px',
      // => @media (min-width: 768px) { ... }, 
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }, 
    
      
    }
  },
  plugins: [],
}

