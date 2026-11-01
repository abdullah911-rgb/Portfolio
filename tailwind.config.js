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
        earth: {
          void: "#060701",
          deep: "#0B0D06",
          charcoal: "#141413",
          spruce: "#212D2D",
          moss: "#363F3A",
          olive: "#40423B",
          sage: "#66726B",
          stone: "#AFACA1",
          stoneLight: "#BDBBB2",
          gold: "#B89B6F",
          cream: "#E2D2B8",
          sand: "#C9C8BF",
        },
        theme: {
          dark: "#0B0D06",          // Main background
          darker: "#060701",        // Deepest void
          surface: "#141413",       // Elevated surface
          card: "#212D2D",          // Glass Card Base (deep spruce)
          cardAlt: "#363F3A",       // Raised mineral card
          border: "rgba(184, 155, 111, 0.2)", // Warm bronze border
          borderHover: "rgba(184, 155, 111, 0.55)",
          borderSage: "rgba(102, 114, 107, 0.28)",
          accent: "#B89B6F",        // Warm bronze gold
          accentGlow: "#D4AF37",
          accentLight: "#E2D2B8",
          sage: "#66726B",
          cream: "#E2D2B8",
          textPrimary: "#E2D2B8",   // Warm Silk Cream
          textSecondary: "#BDBBB2", // Warm Stone Light
          textMuted: "#AFACA1",     // Muted Limestone
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 25s linear infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "float-reverse": "floatReverse 7s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(1.5deg)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(14px) rotate(-1.5deg)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.85" },
        },
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(circle at center, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "3d-card": "0 20px 50px -15px rgba(0, 0, 0, 0.8), 0 0 35px -10px rgba(184, 155, 111, 0.15)",
        "3d-card-hover": "0 30px 60px -12px rgba(0, 0, 0, 0.9), 0 0 45px -5px rgba(184, 155, 111, 0.35)",
        "3d-glow": "0 0 30px rgba(184, 155, 111, 0.35)",
        "gold-button": "0 10px 25px -5px rgba(184, 155, 111, 0.4)",
      },
    },
  },
  plugins: [],
}
