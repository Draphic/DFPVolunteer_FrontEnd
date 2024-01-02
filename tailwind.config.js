// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/app/*.{js,ts,jsx,tsx}",
    "./src/app/*/*.{js,ts,jsx,tsx}",
    "./src/app/*/*/*.{js,ts,jsx,tsx}",
  ],
  theme: {},
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            forground: "#ECEDEE",
            background: "#000000",
            primary: {
              DEFAULT: "#12a150",
            },
          },
        },
        dark: {
          colors: {
            forground: "#ECEDEE",
            background: "#000000",
            primary: {
              DEFAULT: "#12a150",
            },
          },
        },
      },
    }),
  ],
};
