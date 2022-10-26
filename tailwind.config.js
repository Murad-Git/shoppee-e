/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
      },
      colors: {
        'accent-color': '#bd744c',
        'unlogged-color': '#cdbdb5',
        dark: '#3c484f',
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('@tailwindcss/forms')],
};
