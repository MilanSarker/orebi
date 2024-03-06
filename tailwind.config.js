/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1600px",
      },
      colors: {
        primaryColor: "#262626",
        menuColor: "#767676",
        categoryBg: "#F5F5F3",
        categoryBorder: "#979797",
        subHeading: "#6D6D6D",
      },
      fontFamily: {
        dm: ["DM Sans"],
      },
      width: {
        logoW: "40%",
        menuW: "60%",
      },
    },
  },
  plugins: [],
};

