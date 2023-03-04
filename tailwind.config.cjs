/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        Robot : ['Roboto' , 'sans-serif']
      }
    },
  },
  plugins: [],
};
