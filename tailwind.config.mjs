/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        enix: {
          red: "#DC2626",
          darkRed: "#991B1B",
          glow: "#EF4444",
          ink: "#0B1120",
          navy: "#111827",
          pearl: "#F8FAFC",
        },
      },
      boxShadow: {
        glow: "0 0 48px rgba(220, 38, 38, 0.26)",
        premium: "0 24px 80px rgba(15, 23, 42, 0.18)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
