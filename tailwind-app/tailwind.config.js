/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: { xs: "376px", sm: "640px", md: "768px", lg: "1024px" },
    extend: {
      colors: {
        babyblue: "#d4dfe7",
        babyblue2: "#acbfcc",
        hero: "#091315",
        hero2: "#142529",
        intro: "#141414",
      },
    },
  },
  plugins: [],
};
