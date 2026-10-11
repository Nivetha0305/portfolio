/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#070c16",
          900: "#0B1220",
          800: "#111827",
          700: "#1E293B",
        },
        accent: {
          blue: "#60A5FA",
          cyan: "#22D3EE",
        },
        slate: {
          muted: "#94A3B8",
          light: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
