const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // prettier-ignore
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      red: colors.red,
      orange: colors.orange,
      yellow: colors.yellow,
      green: colors.green,
      gray: colors.zinc,
      indigo: colors.indigo,
      rose: colors.rose,
    },
    extend: {
      borderColor: (theme) => ({
        DEFAULT: theme('colors.gray.200', 'currentColor'),
      }),
      boxShadow: (theme) => ({
        outline: '0 0 0 2px ' + theme('colors.rose.500'),
      }),
      fill: (theme) => theme('colors'),
    },
  },
  plugins: [],
}
