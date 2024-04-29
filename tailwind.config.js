/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        btnColor: "#1D828E",
        disableBtnColor: "#1d838eb4",
        spinLoadingColor: "#1D828E",
        hoverTextColor: "#1D828E",
        linkTextColor: "#3db4ec",
        textColor: "#130F1E",
        spanColor: "#959EA7",
        borderColor: "rgb(148, 163, 184)",
        errorTextColor: "#EF4444",
        whiteTextColor: "#fff",
      },
    },
  },
  plugins: [],
};
