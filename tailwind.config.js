module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 600: "#777e87", 700: "#575d65", 800: "#363b40" },
        white: { A700_00: "#ffffff00", A700: "#ffffff" },
        blue_gray: {
          200: "#b1b8c5",
          600: "#5a6a75",
          700: "#3d525d",
          800: "#39474e",
          "700_01": "#49565f",
          "800_01": "#3d484e",
        },
      },
      backgroundImage: {
        gradient: "linear-gradient(312deg ,#3d484e,#49565f,#5a6a75)",
        gradient1: "linear-gradient(312deg ,#3d525d,#49565f,#5a6a75)",
        gradient2: "linear-gradient(180deg ,#ffffff00,#ffffff)",
      },
      fontFamily: { opensans: "Open Sans" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
