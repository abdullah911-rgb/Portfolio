import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Terminal,
  Code2,
  Sparkles,
  Layers,
  Database,
  Cpu,
} from "lucide-react";
import { personalInfo, heroStats } from "../data/personal";
import { MagneticButton } from "./MagneticButton";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-center overflow-hidden bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Availability Badge & Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span>Available for new opportunities</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono border border-white/10 bg-white/[0.03] text-text-secondary">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Full-Stack & AI Integration</span>
          </div>
        </motion.div>

        {/* Intro Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mb-4"
        >
          <span className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-white/90">
            Hi, I'm <span className="text-gradient-cyan font-bold">{personalInfo.name}</span>.
          </span>
        </motion.div>

        {/* Massive Hero Heading (Jack 3D Creator Style) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tight font-display leading-[0.95] uppercase">
            <span className="block text-white">BUILDING DIGITAL</span>
            <span className="block text-gradient-cyan">EXPERIENCES THAT</span>
            <span className="block text-white/80">MAKE AN IMPACT.</span>
          </h1>
        </motion.div>

        {/* Grid layout: Subtitle + Description on Left, Interactive Developer Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mt-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Professional Subtitle */}
            <div className="inline-block p-1 rounded-xl bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-transparent">
              <p className="text-lg sm:text-xl md:text-2xl font-mono text-cyan-300 font-medium">
                {personalInfo.subtitle}
              </p>
            </div>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
              {personalInfo.bio}
            </p>

            {/* CTAs & Socials */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-black font-mono font-bold text-sm uppercase tracking-wider shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>Explore My Work</span>
                  <ArrowDown className="w-4 h-4" />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white/[0.05] border border-white/20 text-white font-mono text-sm uppercase tracking-wider hover:bg-white/[0.1] hover:border-cyan-400/50 hover:text-cyan-300 transition-all"
                >
                  <span>Let's Connect</span>
                  <ArrowUpRight className="w-4 h-4 text-cyan-400" />
                </a>
              </MagneticButton>

              {/* Social icons */}
              <div className="flex items-center gap-2 ml-1 sm:ml-4">
                <MagneticButton>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:border-cyan-400/40 hover:bg-white/[0.08] transition-all"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </MagneticButton>

                <MagneticButton>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-text-secondary hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/[0.08] transition-all"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </MagneticButton>

                <MagneticButton>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="w-11 h-11 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-text-secondary hover:text-emerald-400 hover:border-emerald-400/40 hover:bg-white/[0.08] transition-all"
                    aria-label="Email Muhammad"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </MagneticButton>
              </div>
            </div>
          </motion.div>

          {/* Interactive Developer Composition Card (Works with or without portrait) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              {/* Outer decorative gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-blue-600/30 to-purple-600/30 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative rounded-2xl glass-card overflow-hidden border border-white/15 p-6 shadow-2xl">
                {/* Header bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-xs font-mono text-text-muted flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      engineer@abdullah-dev ~
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                    node: v24.x
                  </span>
                </div>

                {/* Developer Persona Preview / Avatar Slot */}
                <div className="flex items-center gap-4 mb-5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/30 via-blue-600/20 to-purple-500/30 border border-cyan-400/30 flex items-center justify-center shrink-0 overflow-hidden">
                    {/* Abstract avatar / photo placeholder */}
                    <Code2 className="w-8 h-8 text-cyan-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute bottom-1 text-[9px] font-mono text-cyan-300 font-bold">
                      DEV
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <h3 className="font-display font-bold text-white text-base truncate">
                      {personalInfo.name}
                    </h3>
                    <p className="text-xs font-mono text-text-secondary truncate">
                      BSCS Graduate & Full-Stack Architect
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Remote Ready
                      </span>
                      <span className="text-[10px] font-mono text-text-muted">
                        • Lahore, PK
                      </span>
                    </div>
                  </div>
                </div>

                {/* Live Code Matrix Snippet */}
                <div className="rounded-xl bg-[#08090C] border border-white/5 p-4 font-mono text-xs text-text-secondary leading-relaxed">
                  <div className="text-text-muted select-none mb-1">
                    // Current Stack & Architectural Core
                  </div>
                  <div className="text-purple-400">
                    const <span className="text-cyan-300">stack</span> = &#123;
                  </div>
                  <div className="pl-4 text-text-secondary">
                    frontend: [<span className="text-emerald-300">"React 19"</span>, <span className="text-emerald-300">"Next.js"</span>, <span className="text-emerald-300">"Flutter"</span>],
                  </div>
                  <div className="pl-4 text-text-secondary">
                    backend: [<span className="text-emerald-300">"Node.js"</span>, <span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"FastAPI"</span>],
                  </div>
                  <div className="pl-4 text-text-secondary">
                    aiVision: [<span className="text-emerald-300">"YOLOv8"</span>, <span className="text-emerald-300">"Roboflow"</span>],
                  </div>
                  <div className="pl-4 text-text-secondary">
                    database: [<span className="text-emerald-300">"PostgreSQL"</span>, <span className="text-emerald-300">"Prisma"</span>, <span className="text-emerald-300">"MongoDB"</span>],
                  </div>
                  <div className="pl-4 text-text-secondary">
                    status: <span className="text-emerald-300">"Ready for production delivery"</span>
                  </div>
                  <div className="text-purple-400">&#125;;</div>
                </div>

                {/* Feature Chips */}
                <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-white/5">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02]">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    <div className="text-[11px] font-mono">
                      <div className="text-white font-medium">MERN</div>
                      <div className="text-text-muted">Stack</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02]">
                    <Database className="w-4 h-4 text-blue-400" />
                    <div className="text-[11px] font-mono">
                      <div className="text-white font-medium">Postgres</div>
                      <div className="text-text-muted">& Prisma</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02]">
                    <Cpu className="w-4 h-4 text-purple-400" />
                    <div className="text-[11px] font-mono">
                      <div className="text-white font-medium">AI & APIs</div>
                      <div className="text-text-muted">FastAPI</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hero Stats Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-10 border-t border-white/10"
        >
          {heroStats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all flex flex-col"
            >
              <span className="text-3xl sm:text-4xl font-extrabold font-display text-white">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-cyan-400 mt-1">
                {stat.label}
              </span>
              <span className="text-xs font-mono text-text-muted mt-0.5">
                {stat.sub}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
