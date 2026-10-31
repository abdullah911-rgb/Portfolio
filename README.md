# Muhammad Abdullah — Premium Full-Stack Developer & AI Engineer Portfolio

A complete, production-ready, interactive personal portfolio website designed for **Muhammad Abdullah** (Full-Stack Developer | React.js, Node.js, Python, & SQL).

Inspired by the **Jack 3D Creator** aesthetic:
- **Massive Hero Typography**: `"BUILDING DIGITAL EXPERIENCES THAT MAKE AN IMPACT."` with gradient treatment
- **Dark, Sophisticated Aesthetic**: `#0C0C0C`, `#111318`, `#F4F4F4`, `#A5A9B3`, and electric cyan/blue accents
- **Scroll-Triggered Character Reveal**: Word-by-word opacity reveals in the About section powered by Framer Motion
- **Dual Infinite Marquee**: Seamless loops with authentic technology SVGs
- **Magnetic Interactive Elements**: Cursor-responsive magnetic CTAs
- **Sticky Project Stacking**: Interactive project cards that stack and reveal full architecture specs in a modal
- **Centralized Data Layer**: All content, projects, experience, skills, and contact info in `src/data/` for easy customization

---

## 🚀 Tech Stack

- **Framework**: React 19 + Vite 6
- **Language**: TypeScript (Strict typing)
- **Styling**: Tailwind CSS
- **Motion & Interaction**: Framer Motion
- **Icons**: Lucide React + React Icons (Simple Icons)
- **Effects**: Canvas Confetti

---

## 📁 Project Structure

```
PORTFOLIO/
├── public/
│   ├── assets/
│   │   └── resume.pdf        # Downloadable resume document
│   └── favicon.svg           # Custom modern dev favicon
├── src/
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky glass navigation with mobile drawer & resume action
│   │   ├── Hero.tsx          # Massive hero typography, live badge, magnetic CTAs & terminal card
│   │   ├── Marquee.tsx       # Dual infinite marquee running opposite directions
│   │   ├── About.tsx         # Scroll-triggered text reveal & analytical pillars
│   │   ├── TechStack.tsx     # 6 categorized skill groups with authentic icons & filter tabs
│   │   ├── Experience.tsx    # Verified timeline (Sky Bridge, Online Experts, Amtex Limited)
│   │   ├── Projects.tsx      # Sticky stacking project cards container
│   │   ├── ProjectCard.tsx   # Project showcase card with custom interactive visual mockup
│   │   ├── ProjectModal.tsx  # In-depth architectural breakdown & specs modal
│   │   ├── Services.tsx      # 6 core technical offerings
│   │   ├── Education.tsx     # BSCS (2022-2026) & MERN Stack certification
│   │   ├── Contact.tsx       # Form with validation, feedback, confetti & mailto fallback
│   │   ├── Footer.tsx        # Brand mark, quick links, back-to-top button
│   │   ├── MagneticButton.tsx# Spring physics magnetic attraction wrapper
│   │   ├── AnimatedText.tsx  # Scroll-driven opacity text reveal
│   │   ├── MouseSpotlight.tsx# Ambient cursor lighting effect
│   │   └── SectionHeading.tsx# Standardized technical section header
│   ├── data/
│   │   ├── personal.ts       # Personal info, contact handles, bio
│   │   ├── projects.ts       # Swift-LMS, NextTripy, Swift Parcel
│   │   ├── technologies.ts   # Categorized skills & brand icons
│   │   ├── experience.ts     # Verified career history
│   │   ├── services.ts       # 6 development services
│   │   └── education.ts      # BSCS degree & MERN certification
│   ├── lib/
│   │   └── utils.ts          # Class merging utility
│   ├── App.tsx               # Root application layout
│   ├── main.tsx              # React entry point
│   └── index.css             # Tailwind directives & custom utilities
├── tailwind.config.js        # Custom palette & typography configuration
├── vite.config.ts            # Vite bundle configuration with manual vendor chunking
└── package.json
```

---

## 🛠️ Getting Started

### 1. Development Server
Start the local development server:
```bash
npm run dev
```

### 2. Production Build
Compile TypeScript and bundle for production:
```bash
npm run build
```

### 3. Preview Production Build
Locally preview the generated `dist/` bundle:
```bash
npm run preview
```

---

## ✏️ Centralized Content Customization

All personal details, URLs, project information, and experience are centralized in `src/data/`:
- `src/data/personal.ts`: Update email, phone, location, LinkedIn, GitHub, or availability status.
- `src/data/projects.ts`: Add new projects, adjust URLs, or modify architecture highlights.
- `src/data/technologies.ts`: Add or modify technical competencies and brand icons.
- `src/data/experience.ts`: Update job roles, descriptions, or impact metrics.
- `src/data/education.ts`: Modify academic degrees or certifications.
- `public/assets/resume.pdf`: Replace with your updated PDF resume anytime.
