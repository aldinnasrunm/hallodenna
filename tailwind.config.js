/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","./dist/script/**/*.js"],
  theme: {
    colors: {
      'primary': '#F35736',
      'dark': '#171513',
      'light': '#F3f3f3',
      'accent': '#e5e5e5',
    },
    // add Vidolaka font
    fontFamily: {
      'sans': ['Vidolaka', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

