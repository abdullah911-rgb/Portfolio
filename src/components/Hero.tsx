import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Terminal,
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
      {/* 3D Dynamic Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#5E9BD9]/12 blur-[140px] rounded-full pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[450px] bg-[#E8EEF6]/6 blur-[150px] rounded-full pointer-events-none -z-10 animate-float-slow" />
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-[#5E9BD9]/8 blur-[120px] rounded-full pointer-events-none -z-10 animate-float-reverse" />

      {/* Floating 3D Geometric Accents */}
      <div className="absolute right-[8%] top-[20%] hidden xl:block pointer-events-none -z-10 opacity-40 animate-float-slow">
        <div className="w-20 h-20 rounded-2xl border border-[#5E9BD9]/30 bg-gradient-to-tr from-[#5E9BD9]/20 to-transparent rotate-12 backdrop-blur-sm" />
      </div>
      <div className="absolute left-[5%] bottom-[25%] hidden xl:block pointer-events-none -z-10 opacity-30 animate-float-reverse">
        <div className="w-16 h-16 rounded-full border border-[#E8EEF6]/30 bg-gradient-to-br from-[#E8EEF6]/15 to-transparent -rotate-12 backdrop-blur-sm" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Availability Badge & Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase border border-[#5E9BD9]/40 bg-[#5E9BD9]/10 text-[#5E9BD9] shadow-[0_0_20px_rgba(94,155,217,0.2)] backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5E9BD9] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5E9BD9]" />
            </span>
            <span>Available for new opportunities</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono border border-[#5E9BD9]/20 bg-[#181A15]/80 text-[#B8C4D4] backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#5E9BD9]" />
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
          <span className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-[#E8EEF6]/90">
            Hi, I'm <span className="text-gradient-blue font-bold">{personalInfo.name}</span>.
          </span>
        </motion.div>

        {/* Massive Hero Heading with 3D Depth */}
        <motion.div
          initial={{ opacity: 0, y: 35, rotateX: 6 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 transform-gpu"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tight font-display leading-[0.95] uppercase">
            <span className="block text-[#E8EEF6] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">BUILDING DIGITAL</span>
            <span className="block text-gradient-blue drop-shadow-[0_0_35px_rgba(94,155,217,0.35)]">EXPERIENCES THAT</span>
            <span className="block text-[#E8EEF6]/80">MAKE AN IMPACT.</span>
          </h1>
        </motion.div>

        {/* Grid layout: Subtitle + Description on Left, 3D Dynamic Developer Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mt-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Professional Subtitle */}
            <div className="inline-block p-1.5 rounded-2xl bg-gradient-to-r from-[#5E9BD9]/20 via-[#5E9BD9]/5 to-transparent border-l-2 border-[#5E9BD9]">
              <p className="text-lg sm:text-xl md:text-2xl font-mono text-[#5E9BD9] font-medium pl-3">
                {personalInfo.subtitle}
              </p>
            </div>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg md:text-xl text-[#B8C4D4] leading-relaxed max-w-2xl">
              {personalInfo.bio}
            </p>

            {/* 3D Action CTAs & Socials */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton>
                <a
                  href="#projects"
                  className="btn-3d-blue inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-mono font-bold text-sm uppercase tracking-wider"
                >
                  <span>Explore My Work</span>
                  <ArrowDown className="w-4 h-4 text-[#121310]" />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="#contact"
                  className="btn-3d-outline inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-mono text-sm uppercase tracking-wider"
                >
                  <span>Let's Connect</span>
                  <ArrowUpRight className="w-4 h-4 text-[#5E9BD9]" />
                </a>
              </MagneticButton>

              {/* Social icons */}
              <div className="flex items-center gap-2.5 ml-1 sm:ml-4">
                <MagneticButton>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-[#181A15] border border-[#5E9BD9]/20 flex items-center justify-center text-[#B8C4D4] hover:text-[#E8EEF6] hover:border-[#5E9BD9]/60 hover:shadow-[0_0_20px_rgba(94,155,217,0.35)] transition-all"
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
                    className="w-11 h-11 rounded-full bg-[#181A15] border border-[#5E9BD9]/20 flex items-center justify-center text-[#B8C4D4] hover:text-[#5E9BD9] hover:border-[#5E9BD9]/60 hover:shadow-[0_0_20px_rgba(94,155,217,0.35)] transition-all"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </MagneticButton>

                <MagneticButton>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="w-11 h-11 rounded-full bg-[#181A15] border border-[#5E9BD9]/20 flex items-center justify-center text-[#B8C4D4] hover:text-[#E8EEF6] hover:border-[#5E9BD9]/60 hover:shadow-[0_0_20px_rgba(94,155,217,0.35)] transition-all"
                    aria-label="Email Muhammad"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </MagneticButton>
              </div>
            </div>
          </motion.div>

          {/* 3D Interactive Developer Card with Floating Depth */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 35, rotateY: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 perspective-1000 transform-gpu"
          >
            <div className="relative group">
              {/* Outer 3D glow aura */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#5E9BD9]/40 via-[#84B6E8]/20 to-[#E8EEF6]/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative rounded-3xl glass-card overflow-hidden border border-[#5E9BD9]/25 p-6 sm:p-7 shadow-3d-card group-hover:border-[#5E9BD9]/50 transition-all duration-500">
                {/* Header bar */}
                <div className="flex items-center justify-between pb-4 border-b border-[#5E9BD9]/15 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block shadow-[0_0_10px_rgba(244,63,94,0.5)]" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                    <span className="ml-2 text-xs font-mono text-[#B8C4D4] flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-[#5E9BD9]" />
                      abdullah@dev-matrix ~
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#5E9BD9]/15 text-[#5E9BD9] border border-[#5E9BD9]/30">
                    node: v24.x
                  </span>
                </div>

                {/* Developer Persona Preview / Avatar Slot */}
                <div className="flex items-center gap-4 mb-5 p-3.5 rounded-2xl bg-[#181A15]/80 border border-[#5E9BD9]/15 shadow-inner">
                  <div className="relative w-16 h-16 rounded-2xl p-[2px] bg-gradient-to-tr from-[#5E9BD9] to-[#E8EEF6] shrink-0 overflow-hidden shadow-[0_0_20px_rgba(94,155,217,0.35)]">
                    <img
                      src={personalInfo.avatar}
                      alt={personalInfo.name}
                      className="w-full h-full rounded-2xl object-cover object-top hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <h3 className="font-display font-bold text-[#E8EEF6] text-base truncate">
                      {personalInfo.name}
                    </h3>
                    <p className="text-xs font-mono text-[#5E9BD9] truncate">
                      BSCS Graduate & Full-Stack Architect
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#E8EEF6]/90">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5E9BD9] animate-pulse" />
                        Lahore, PK
                      </span>
                      <span className="text-[10px] font-mono text-[#7E8C9F]">
                        • Remote Worldwide
                      </span>
                    </div>
                  </div>
                </div>

                {/* Live Matrix Snippet with 3D Depth */}
                <div className="rounded-2xl bg-[#0B0C0A]/90 border border-[#5E9BD9]/15 p-4 font-mono text-xs text-[#B8C4D4] space-y-1.5 shadow-inner">
                  <div className="flex items-center justify-between text-[#7E8C9F] pb-2 border-b border-white/5">
                    <span>// system_diagnostics.ts</span>
                    <span className="text-[#5E9BD9]">status: optimal</span>
                  </div>
                  <p className="text-[#5E9BD9]">
                    <span className="text-[#E8EEF6]">const</span> engineer = &#123;
                  </p>
                  <p className="pl-4">
                    name: <span className="text-[#E8EEF6]">"{personalInfo.name}"</span>,
                  </p>
                  <p className="pl-4">
                    core: [<span className="text-[#84B6E8]">"Next.js"</span>, <span className="text-[#84B6E8]">"FastAPI"</span>, <span className="text-[#84B6E8]">"PostgreSQL"</span>],
                  </p>
                  <p className="pl-4">
                    aiVision: <span className="text-[#E8EEF6]">"YOLOv8 + Roboflow"</span>,
                  </p>
                  <p className="pl-4">
                    mobile: <span className="text-[#84B6E8]">"Flutter & Dart"</span>,
                  </p>
                  <p className="pl-4">
                    logisticsOps: <span className="text-[#E8EEF6]">"Global Marketplaces & Dispatch"</span>,
                  </p>
                  <p className="pl-4">
                    status: <span className="text-[#5E9BD9]">"Ready for Production"</span>,
                  </p>
                  <p className="text-[#5E9BD9]">&#125;;</p>
                </div>

                {/* 3D Capabilities Ribbon */}
                <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-[#5E9BD9]/15 text-center text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-[#181A15] border border-[#5E9BD9]/15 hover:border-[#5E9BD9]/40 transition-colors">
                    <Layers className="w-4 h-4 text-[#5E9BD9] mx-auto mb-1" />
                    <span className="text-[#E8EEF6] font-bold block text-sm">Full-Stack</span>
                    <span className="text-[10px] text-[#7E8C9F]">End-to-End</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#181A15] border border-[#5E9BD9]/15 hover:border-[#5E9BD9]/40 transition-colors">
                    <Cpu className="w-4 h-4 text-[#84B6E8] mx-auto mb-1" />
                    <span className="text-[#E8EEF6] font-bold block text-sm">AI / ML</span>
                    <span className="text-[10px] text-[#7E8C9F]">Computer Vision</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#181A15] border border-[#5E9BD9]/15 hover:border-[#5E9BD9]/40 transition-colors">
                    <Database className="w-4 h-4 text-[#5E9BD9] mx-auto mb-1" />
                    <span className="text-[#E8EEF6] font-bold block text-sm">Databases</span>
                    <span className="text-[10px] text-[#7E8C9F]">SQL & NoSQL</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3D Stats Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-10 border-t border-[#5E9BD9]/15"
        >
          {heroStats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ translateY: -4, scale: 1.02 }}
              className="p-5 rounded-2xl glass-card border border-[#5E9BD9]/20 flex flex-col justify-between group"
            >
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold font-display text-gradient-blue block mb-1">
                  {stat.value}
                </span>
                <span className="text-sm font-semibold text-[#E8EEF6] block">
                  {stat.label}
                </span>
              </div>
              <span className="text-xs font-mono text-[#7E8C9F] mt-2 block">
                {stat.sub}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
