module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      yellow: "#d9a13c",
      grey: "#676767",
      black: "#000000",
      light: "#f8f9fa",
      white: "#ffffff",
    },
    extend: {
      height: {
        "1/2-screen": "50vh",
        "3/4-screen": "75vh",
        section: "37.5rem",
      },
      maxWidth: {
        "1/2": "50%",
      },
      opacity: {
        0: "0",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
