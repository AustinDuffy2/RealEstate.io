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
        black: { 900: "#000000", "900_7f": "#0000007f", "900_3f": "#0000003f" },
        gray: {
          100: "#f4f4f4",
          400: "#c4c4c4",
          700: "#626262",
          800: "#4f4f4f",
          900: "#191919",
        },
        blue_gray: { 400: "#8d8d8d", "300_33": "#91aebb33" },
        orange: { A700: "#fd650b" },
        light_blue: {
          500: "#00a3ff",
          "500_3f": "#00a3ff3f",
          "500_7f": "#00a3ff7f",
        },
        white: { A700: "#ffffff" },
      },
      boxShadow: {
        bs: "0px 30px  30px 0px #91aebb33",
        bs1: "4px 4px  4px 0px #0000007f",
        bs2: "10px 4px  4px 0px #0000003f",
        bs3: "10.41px 4.16px  4px 0px #0000003f",
      },
      fontFamily: {
        roboto: "Roboto",
        robotocondensed: "Roboto Condensed",
        worksans: "Work Sans",
        manrope: "Manrope",
      },
      textShadow: {
        ts: "10px 4px  10px #0000003f",
        ts1: "10.41px 4.16px  10px #0000003f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
