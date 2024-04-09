/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        "Inter-Proyect": '"Inter", sans-serif',
      },
      colors: {
        "Green-proyect": "hsl(75, 94%, 57%)",
        "Grey-proyect": "hsl(0, 0%, 20%)",
        "Dark-Grey": "hsl(0, 0%, 12%)",
        "Off-Black": "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};
