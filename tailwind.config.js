/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        btnColor: "#00B1A9",
        bgColor: "#00B1A9",
        disableBtnColor: "#1d838eb4",
        spinLoadingColor: "#1D828E",
        hoverTextColor: "#1D828E",
        linkTextColor: "#3db4ec",
        textColor: "#00B1A9",
        spanColor: "#959EA7",
        borderColor: "rgb(148, 163, 184)",
        errorTextColor: "#EF4444",
        whiteTextColor: "#fff",
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
        xs: { max: "500px" },
        "2xs": { max: "360px" },
        "3xs": { max: "250px" },
      },
    },
  },
  plugins: [],
};
