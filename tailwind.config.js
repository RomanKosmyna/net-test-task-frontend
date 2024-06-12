/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textWhite: "#000000",
        main: "#0a0a0a",
        card: "#1b1b1b",
        heading: "#efefef",
        lightBlue: "#0070f3",
        darkerLightBlue: "#005cdf",
        inputBorder: "#373737",
      },
      boxShadow: {
        dark: "inset 0 -1px hsla(0,0%,100%,.14)",
        darkBorder: "inset 0 0 0 1px hsla(0,0%,100%,.14)",
      },
      screens: {
        "tablet": "700px",
        "laptop": "900px",
        "desktop": "1150px"
      }
    },
  },
  plugins: [],
}

