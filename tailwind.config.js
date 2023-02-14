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
        hamburger:
          'transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0) background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),opacity 0.55s ease',
      },
      colors: {
        'accent-color': '#bd744c',
        'unlogged-color': '#cdbdb5',
        dark: '#3c484f',
        'black-text': '#262626',
        'grey-text': '#555',
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('@tailwindcss/forms')],
};
