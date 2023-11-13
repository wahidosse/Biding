/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Great-vibes": ['"Great Vibes"', "cursive"],
        Yuji: ['"Yuji Hentaigana Akebono"', "cursive"],
        Poppins: ["'Poppins'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
