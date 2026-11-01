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
        theme: {
          dark: "#121310",          // Chinese Black (#121310)
          darker: "#0B0C0A",        // Ultra Deep Shadow
          surface: "#181A15",       // Raised Surface
          card: "#1E201A",          // Glass Card Base
          border: "rgba(94, 155, 217, 0.18)", // Subtle Carolina Blue border
          borderHover: "rgba(94, 155, 217, 0.45)",
          blue: "#5E9BD9",          // Carolina Blue (#5E9BD9)
          blueGlow: "#4A89C8",
          blueLight: "#84B6E8",
          gray: "#E8EEF6",          // Bright Gray (#E8EEF6)
          grayMuted: "#B8C4D4",     // Secondary text
          graySubtle: "#7E8C9F",    // Tertiary muted
        },
        dark: {
          primary: "#121310",
          secondary: "#181A15",
          card: "#1E201A",
          elevated: "#252820",
          border: "rgba(94, 155, 217, 0.18)",
          borderSubtle: "rgba(232, 238, 246, 0.08)",
        },
        text: {
          primary: "#E8EEF6",
          secondary: "#B8C4D4",
          muted: "#7E8C9F",
        },
        accent: {
          cyan: "#5E9BD9",
          blue: "#5E9BD9",
          purple: "#7BA8DC",
          gradientStart: "#E8EEF6",
          gradientEnd: "#5E9BD9",
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
        "3d-card": "0 20px 50px -15px rgba(0, 0, 0, 0.7), 0 0 35px -10px rgba(94, 155, 217, 0.2)",
        "3d-glow": "0 0 30px rgba(94, 155, 217, 0.35)",
        "blue-button": "0 10px 25px -5px rgba(94, 155, 217, 0.45)",
      },
    },
  },
  plugins: [],
}
