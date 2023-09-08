/** @type {import('tailwindcss').Config} */
export const content = [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './Components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  extend: {
    colors: {},
    backgroundImage: {
      'hero-pattern': "url('https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914215/VVGC%20San%20Martin%20Temple%20Data/VVGC/IMG-20230603-WA0004_g8iihn.jpg')",
    }
  },

  plugins: [
    'prettier-plugin-tailwindcss'
  ],
};
