/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#ff0f6d",
        dark: "#101012",
        light: "#e5e7eb",
      },
      fontFamily: {
        display: ['"Poppins"', "ui-sans-serif", "system-ui"],
        body: ['"Inter"', "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
