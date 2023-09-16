/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/tw-elements/dist/js/**/*.js"
],
theme: {
  extend: {
    fontFamily: {
      'Roboto': ['Roboto']
    },
  
    Color:{
      primary: "#088AB2"
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
},
plugins: []
}

