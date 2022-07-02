module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      primary: "#5D5FEF",
      "primary-focus": "#5D5FEF",
      "primary-content": "#2B2B2B",
      secondary: "#F8F9FA",
      "secondary-focus": "#F8F9FA",
      "secondary-content": "#676767",
      tertiary: "#d9d9d9",
      "tertiary-focus": "#d9d9d9",
      "tertiary-content": "#4F4F4F",
      "success": "#5AD78C",
      "error": "#C75151"
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
