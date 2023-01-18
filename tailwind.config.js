/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],

  daisyui: {
    
    themes: ["cupcake", "dark", "cmyk"],
    
  },

  plugins: [require("daisyui")],
};
