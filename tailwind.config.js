/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A3636',   
        secondary: '#40534C',  
        accent: '#677D6A',     
        neutral: '#D6BD98', 
      },
    },
  },
  plugins: [],
}

