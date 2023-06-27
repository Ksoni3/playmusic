/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#02b875",
        secondary: "#212121",
      },
      screens: {
        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
        md: "800px",
        // => @media (min-width: 768px) { ... }
      },
    },
  },
  plugins: [],
};
