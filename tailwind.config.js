/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#F3EFE6",
        "ink-muted": "#8A8A86",
        "ink-faint": "#5C5C58",
        bg: "#0A0A0A",
        "bg-elevated": "#121212",
        "bg-elevated-2": "#161616",
        line: "#232320",
        "line-soft": "#1A1A18",
        brass: "#C8A876",
        "brass-dim": "#8F7A58",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.32em",
      },
      maxWidth: {
        content: "1240px",
      },
    },
  },
  plugins: [],
};
