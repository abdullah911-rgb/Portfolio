import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Terminal,
  Code2,
  Cpu,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { personalInfo, heroStats } from "../data/personal";
import { HeroScene } from "./3d/HeroScene";
import { TiltCard } from "./TiltCard";
import { MagneticButton } from "./MagneticButton";

const roles = [
  "Full-Stack Web Architect",
  "Python & AI/ML Engineer",
  "Computer Vision Developer",
  "E-Commerce & Logistics Strategist",
];

export const Hero: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-24 md:pt-40 md:pb-32 flex flex-col justify-center overflow-hidden bg-[#0B0D06] bg-grid-pattern">
      {/* 3D Three.js Ambient WebGL Canvas */}
      <HeroScene />

      {/* Atmospheric Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#B89B6F]/10 blur-[150px] rounded-full pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[450px] bg-[#66726B]/12 blur-[160px] rounded-full pointer-events-none -z-10 animate-float-slow" />
      <div className="absolute top-1/3 left-10 w-[450px] h-[400px] bg-[#52FFB8]/5 blur-[140px] rounded-full pointer-events-none -z-10 animate-float-reverse" />

      {/* Floating 3D Geometric Accents */}
      <div className="absolute right-[6%] top-[18%] hidden xl:block pointer-events-none -z-10 opacity-30 animate-float-slow">
        <div className="w-24 h-24 rounded-3xl border border-[#B89B6F]/30 bg-gradient-to-tr from-[#B89B6F]/15 to-transparent rotate-12 backdrop-blur-sm shadow-[0_0_25px_rgba(184,155,111,0.2)]" />
      </div>
      <div className="absolute left-[4%] bottom-[22%] hidden xl:block pointer-events-none -z-10 opacity-25 animate-float-reverse">
        <div className="w-20 h-20 rounded-2xl border border-[#66726B]/30 bg-gradient-to-br from-[#66726B]/15 to-transparent -rotate-12 backdrop-blur-sm" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Top Status & Accreditation Badges */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-3 mb-8"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase border border-[#B89B6F]/40 bg-[#141413]/90 text-[#E2D2B8] shadow-[0_0_25px_rgba(184,155,111,0.25)] backdrop-blur-xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#52FFB8] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#52FFB8]" />
            </span>
            <span className="font-semibold">Available for Global &amp; Remote Roles</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono border border-[#66726B]/30 bg-[#141413]/70 text-[#BDBBB2] backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#B89B6F]" />
            <span>BSCS (2022–2026) · Univ. of Education, Lahore</span>
          </div>
        </motion.div>

        {/* Main Grid: Left Column Hero Text, Right Column 3D Interactive Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Kinetic Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Greeting & Name */}
            <div>
              <p className="text-sm sm:text-base font-mono uppercase tracking-widest text-[#B89B6F] mb-3 flex items-center gap-2">
                <span className="w-6 h-[1.5px] bg-[#B89B6F]" />
                Creative Full-Stack &amp; AI Developer
              </p>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight leading-[0.98] uppercase">
                <span className="block text-[#E2D2B8] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                  {personalInfo.name.split(" ")[0]}
                </span>
                <span className="block text-gradient-gold drop-shadow-[0_0_40px_rgba(184,155,111,0.35)]">
                  {personalInfo.name.split(" ")[1]}
                </span>
              </h1>
            </div>

            {/* Dynamic Morphing Title Banner */}
            <div className="h-12 flex items-center overflow-hidden">
              <span className="font-mono text-sm sm:text-base text-[#AFACA1] mr-3">Specializing in:</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRoleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="font-mono text-sm sm:text-lg font-bold text-[#E2D2B8] px-3.5 py-1 rounded-xl bg-[#212D2D] border border-[#B89B6F]/30 shadow-[0_0_15px_rgba(184,155,111,0.2)]"
                >
                  {roles[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Narrative Bio */}
            <p className="text-base sm:text-lg text-[#BDBBB2] leading-relaxed max-w-2xl font-normal">
              Computer Science graduate engineering high-performance web platforms, intelligent computer vision systems, and modern SaaS applications. Bridging clean architecture with real-world multi-marketplace execution.
            </p>

            {/* 3D Action CTAs & Quick Socials */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <MagneticButton>
                <a
                  href="#projects"
                  className="btn-3d-blue inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-mono font-bold text-sm uppercase tracking-wider group"
                >
                  <span>Explore 6 Projects</span>
                  <ArrowDown className="w-4 h-4 text-[#060701] group-hover:translate-y-1 transition-transform" />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="/assets/resume.pdf"
                  download="Muhammad_Abdullah_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-3d-outline inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-mono text-sm uppercase tracking-wider"
                >
                  <Download className="w-4 h-4 text-[#B89B6F]" />
                  <span>Resume (PDF)</span>
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="#contact"
                  className="btn-3d-outline inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-mono text-sm uppercase tracking-wider"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-4 h-4 text-[#B89B6F]" />
                </a>
              </MagneticButton>
            </div>

            {/* Direct Connect Quick Links */}
            <div className="flex items-center gap-4 pt-2 text-xs font-mono text-[#AFACA1]">
              <span className="text-[#AFACA1]/70">Connect directly:</span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#141413] border border-[#B89B6F]/20 flex items-center justify-center text-[#BDBBB2] hover:text-[#E2D2B8] hover:border-[#B89B6F]/60 hover:shadow-[0_0_15px_rgba(184,155,111,0.3)] transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#141413] border border-[#B89B6F]/20 flex items-center justify-center text-[#BDBBB2] hover:text-[#B89B6F] hover:border-[#B89B6F]/60 hover:shadow-[0_0_15px_rgba(184,155,111,0.3)] transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-9 h-9 rounded-full bg-[#141413] border border-[#B89B6F]/20 flex items-center justify-center text-[#BDBBB2] hover:text-[#E2D2B8] hover:border-[#B89B6F]/60 hover:shadow-[0_0_15px_rgba(184,155,111,0.3)] transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Interactive Developer Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <TiltCard maxTilt={10} className="border border-[#B89B6F]/25 shadow-3d-card">
              <div className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden">
                {/* Header status bar */}
                <div className="flex items-center justify-between pb-4 border-b border-[#B89B6F]/15 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                    <span className="w-3 h-3 rounded-full bg-[#52FFB8] shadow-[0_0_8px_rgba(82,255,184,0.5)]" />
                    <span className="ml-2 text-xs font-mono text-[#BDBBB2] flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-[#B89B6F]" />
                      engineer.runtime ~ v24
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#52FFB8]/15 text-[#52FFB8] border border-[#52FFB8]/30">
                    ONLINE
                  </span>
                </div>

                {/* Profile card block */}
                <div className="flex items-center gap-4 mb-6 p-4 rounded-2xl bg-[#141413]/90 border border-[#B89B6F]/20 shadow-inner">
                  <div className="relative w-16 h-16 rounded-2xl p-[2px] bg-gradient-to-tr from-[#B89B6F] via-[#52FFB8] to-[#E2D2B8] shrink-0 overflow-hidden shadow-[0_0_20px_rgba(184,155,111,0.35)]">
                    <img
                      src={personalInfo.avatar}
                      alt={personalInfo.name}
                      className="w-full h-full rounded-2xl object-cover object-top hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <h3 className="font-display font-bold text-[#E2D2B8] text-base truncate">
                      {personalInfo.name}
                    </h3>
                    <p className="text-xs font-mono text-[#B89B6F] truncate">
                      BSCS Graduate · Full-Stack &amp; AI
                    </p>
                    <div className="flex items-center gap-2 mt-1 text-[11px] font-mono text-[#AFACA1]">
                      <span className="w-2 h-2 rounded-full bg-[#52FFB8] animate-pulse" />
                      <span>Lahore, PK · Worldwide Remote</span>
                    </div>
                  </div>
                </div>

                {/* Core Architecture Matrix */}
                <div className="rounded-2xl bg-[#060701]/95 border border-[#B89B6F]/15 p-4 font-mono text-xs text-[#BDBBB2] space-y-2 shadow-inner">
                  <div className="flex items-center justify-between text-[#AFACA1] pb-2 border-b border-white/5">
                    <span className="flex items-center gap-1.5 text-[#B89B6F]">
                      <Code2 className="w-3.5 h-3.5" />
                      core_stack.json
                    </span>
                    <span className="text-[10px] text-[#52FFB8]">Production Ready</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                    <div className="p-2 rounded-xl bg-[#141413] border border-white/5">
                      <span className="text-[#AFACA1] block text-[9px] uppercase">Frontend</span>
                      <span className="text-[#E2D2B8] font-bold">React 19, Next.js 15</span>
                    </div>
                    <div className="p-2 rounded-xl bg-[#141413] border border-white/5">
                      <span className="text-[#AFACA1] block text-[9px] uppercase">Backend &amp; API</span>
                      <span className="text-[#E2D2B8] font-bold">Node.js, FastAPI</span>
                    </div>
                    <div className="p-2 rounded-xl bg-[#141413] border border-white/5">
                      <span className="text-[#AFACA1] block text-[9px] uppercase">AI &amp; Vision</span>
                      <span className="text-[#52FFB8] font-bold">YOLOv8, Roboflow</span>
                    </div>
                    <div className="p-2 rounded-xl bg-[#141413] border border-white/5">
                      <span className="text-[#AFACA1] block text-[9px] uppercase">Databases</span>
                      <span className="text-[#B89B6F] font-bold">Postgres, Mongo, SQL</span>
                    </div>
                  </div>
                </div>

                {/* Capability Badges */}
                <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-[#B89B6F]/15 text-center text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-[#141413] border border-[#B89B6F]/15 hover:border-[#B89B6F]/40 transition-colors">
                    <Layers className="w-4 h-4 text-[#B89B6F] mx-auto mb-1" />
                    <span className="text-[#E2D2B8] font-bold block text-xs">Full-Stack</span>
                    <span className="text-[9px] text-[#AFACA1]">Scalable Web</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#141413] border border-[#B89B6F]/15 hover:border-[#B89B6F]/40 transition-colors">
                    <Cpu className="w-4 h-4 text-[#52FFB8] mx-auto mb-1" />
                    <span className="text-[#E2D2B8] font-bold block text-xs">AI Models</span>
                    <span className="text-[9px] text-[#AFACA1]">Computer Vision</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#141413] border border-[#B89B6F]/15 hover:border-[#B89B6F]/40 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#B89B6F] mx-auto mb-1" />
                    <span className="text-[#E2D2B8] font-bold block text-xs">E-Commerce</span>
                    <span className="text-[9px] text-[#AFACA1]">9+ Marketplaces</span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>

        {/* 3D Animated Stats Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-10 border-t border-[#B89B6F]/15"
        >
          {heroStats.map((stat, idx) => (
            <TiltCard key={idx} maxTilt={8} className="p-0 border border-[#B89B6F]/20">
              <div className="p-5 rounded-2xl glass-card flex flex-col justify-between h-full group">
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold font-display text-gradient-gold block mb-1 group-hover:scale-105 transition-transform origin-left">
                    {stat.value}
                  </span>
                  <span className="text-sm font-semibold text-[#E2D2B8] block">
                    {stat.label}
                  </span>
                </div>
                <span className="text-xs font-mono text-[#AFACA1] mt-2 block">
                  {stat.sub}
                </span>
              </div>
            </TiltCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
