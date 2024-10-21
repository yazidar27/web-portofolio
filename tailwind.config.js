/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      primary: {
        light: '#a7f3d0',  // contoh warna hijau terang
        DEFAULT: '#10b981',  // warna hijau utama
        dark: '#047857',  // warna hijau gelap
      },
      secondary: {
        light: '#76A9FA',  // warna biru terang
        DEFAULT: '#1C64F2',  // warna biru utama
        dark: '#1E429F',  // warna biru gelap
      },
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

