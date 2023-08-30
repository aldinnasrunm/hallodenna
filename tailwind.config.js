/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./dist/script/**/*.js"],
  theme: {
    colors: {
      'primary': '#F35736',
      'dark': '#171513',
      'light': '#F3f3f3',
      'accent': '#e5e5e5',
      'test': '#FF39C8',
    },
    // add Vidolaka font
    fontFamily: {
      'vidaloka': ['Vidolaka'],
      'staatliches': ['Staatliches'],
      'kanit': ['Kanit']
    },
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}

