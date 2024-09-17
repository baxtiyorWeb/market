/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        btnColor: "#FFBE1E",
        bgColor: "#FFBE1E",
        disableBtnColor: "#1d838eb4",
        spinLoadingColor: "#1D828E",
        hoverTextColor: "#1D828E",
        linkTextColor: "#3db4ec",
        textColor: "#000000",
        spanColor: "#959EA7",
        borderColor: "FFBE1E",
        errorTextColor: "#EF4444",
        whiteTextColor: "#fff",
      },
      width: {
        containerWidth: "1400px",
        productWidth: "200px",
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1440px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        lg_min_c: { min: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        xmd: { max: "821px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        sm_res: { max: "600px" },
        // => @media (max-width: 639px) { ... }
        xs: { max: "500px" },
        xs_2: { max: "580px" },
        xs_min: { min: "500px" },
        md_min: { min: "600px" },
        lg_min: { min: "769px" },
        "2xs": { max: "360px" },
        "3xs": { max: "250px" },
      },
    },
  },
  plugins: [],
};
