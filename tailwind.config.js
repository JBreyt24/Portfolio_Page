// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff0000', // Red color
        secondary: '#000000', // Black color
      },
      backgroundImage: theme => ({
        'red-black-gradient': 'linear-gradient(to right, #ff0000, #000000)',
      }),
    },
  },
  plugins: [],
};
