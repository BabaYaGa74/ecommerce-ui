/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  darkMode:"class",
  theme: {
    colors: { 
      primary: "#f42c37",
      secondary: "#f42c37",
      brandYellow: "#fdc62e",
      brandGreen: "#2dcc6f",
      brandBlue: "#1376f4",
      brandWhite: "#eeeeee",
    },
    extend: {
      container:{
        center:true,
        padding: {
          default: "1rem",
          sm:"3rem",
        },
      },
    },
  },
  plugins: [],
}

