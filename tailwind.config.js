/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#0C0C0C",
          secondary: "#111318",
          card: "#151821",
          elevated: "#1B1F2A",
          border: "rgba(255, 255, 255, 0.12)",
          borderSubtle: "rgba(255, 255, 255, 0.06)",
        },
        text: {
          primary: "#F4F4F4",
          secondary: "#A5A9B3",
          muted: "#717684",
        },
        accent: {
          cyan: "#00F0FF",
          blue: "#3B82F6",
          purple: "#8B5CF6",
          gradientStart: "#00F0FF",
          gradientEnd: "#3B82F6",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(circle at center, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}
