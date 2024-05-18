/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "space-cadet": "#22223B",
        "ultra-violet": "#4A4E69",
        "rose-quartz": "#9A8C98",
        "pale-dogwood": "#C9ADA7",
        isabelline: "#F2E9E4",
      },
      fontSize: {
        "clamp-extrabold": "clamp(3rem, -0.1011rem + 9.9237vw, 6.25rem)",
        "clamp-extralight": "clamp(0.75rem, 0.0344rem + 2.2901vw, 1.5rem)",
        "clamp-light": "clamp(1rem, 0.2844rem + 2.2901vw, 1.75rem)",
        "clamp-normal": "clamp(1rem, 0.5229rem + 1.5267vw, 1.5rem)",
      },
      screens: {
        "max-md": { max: "768px" },
        "max-sm": { max: "640px" },
      },
    },
    fontFamily: {
      serif: ["Vazir", "sans-serif"],
    },
  },
  plugins: [],
};
