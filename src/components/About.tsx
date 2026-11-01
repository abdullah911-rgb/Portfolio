import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  TrendingUp,
  Globe2,
  CheckCircle,
  FileCode,
  Terminal,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { AnimatedScrollText } from "./AnimatedText";
import { personalInfo } from "../data/personal";

const corePillars = [
  {
    icon: <GraduationCap className="w-5 h-5 text-[#5E9BD9]" />,
    title: "CS Degree & Analytical Rigor",
    description:
      "Formal computer science degree providing a bedrock of algorithms, distributed systems theory, and engineering problem-solving.",
  },
  {
    icon: <Code2 className="w-5 h-5 text-[#84B6E8]" />,
    title: "Full-Stack & Database Engineering",
    description:
      "Proven execution across React, Next.js, Node, Express, Python, and SQL/NoSQL architectures with bulletproof authentication.",
  },
  {
    icon: <Globe2 className="w-5 h-5 text-[#5E9BD9]" />,
    title: "Remote Client-Focused Delivery",
    description:
      "Track record delivering complex production platforms (LMS, Marketplaces) for remote clients with clear communication.",
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-[#84B6E8]" />,
    title: "Data-Driven Business Insight",
    description:
      "E-commerce & logistics analytics exposure spanning 9+ international marketplaces, optimizing KPIs and operational workflows.",
  },
];

export const About: React.FC = () => {
  const bioParagraph1 =
    "I am a Computer Science graduate and versatile technology professional with experience in full-stack web development, Python development, AI-powered applications, mobile app development, e-commerce operations, and truck dispatching. I specialize in building responsive, scalable web applications, RESTful APIs, and intelligent software solutions using modern technologies such as React.js, Next.js, Node.js, Express.js, Python, FastAPI, Flutter, and machine learning models.";

  const bioParagraph2 =
    "Alongside software development, I have practical experience in e-commerce brand management and marketplace operations, working with platforms including Amazon, Walmart, eBay, Etsy, TikTok Shop, Temu, Alibaba, Mercari, and Faire. My experience includes product listing optimization, SEO, sales and performance analysis, KPI reporting, advertising campaigns, catalog management, and marketplace operations.";

  const bioParagraph3 =
    "I also have experience in truck dispatching, with an understanding of load coordination, carrier communication, freight operations, load securements, and transportation logistics.";

  const bioParagraph4 =
    "I enjoy combining technical problem-solving, analytical thinking, and business understanding to develop practical solutions, improve workflows, and deliver meaningful results. I am continuously exploring emerging technologies, particularly Artificial Intelligence, Machine Learning, and intelligent application development.";

  return (
    <section id="about" className="py-24 md:py-36 relative overflow-hidden bg-[#121310]">
      {/* 3D ambient glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#5E9BD9]/8 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#E8EEF6]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="// 01. ABOUT ME"
          title="Bridging Theoretical CS With"
          highlight="High-Impact Production Engineering"
          description="A look into my academic foundation, software engineering philosophy, and cross-functional operations mindset."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Scroll Text Reveal Section with 3D Glass Surface */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="p-8 sm:p-10 rounded-3xl glass-card border border-[#5E9BD9]/20 shadow-3d-card relative">
              <div className="flex flex-wrap items-center justify-between pb-6 border-b border-[#5E9BD9]/15 mb-8 gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-[#5E9BD9] to-[#E8EEF6] shadow-[0_0_15px_rgba(94,155,217,0.3)]">
                    <img
                      src={personalInfo.avatar}
                      alt={personalInfo.name}
                      className="w-full h-full rounded-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#5E9BD9] flex items-center gap-1.5 font-bold">
                      <Terminal className="w-3.5 h-3.5" />
                      {personalInfo.name}
                    </span>
                    <span className="text-[11px] font-mono text-[#B8C4D4] block">
                      Full-Stack & AI Engineer
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#5E9BD9] bg-[#5E9BD9]/10 px-3.5 py-1.5 rounded-full border border-[#5E9BD9]/25 shadow-sm">
                  University of Education, Lahore
                </span>
              </div>

              {/* Character/Word by Word Scroll Reveal in Bright Gray & Carolina Blue */}
              <div className="space-y-6 text-xl sm:text-2xl md:text-3xl font-display font-medium leading-relaxed tracking-tight text-[#E8EEF6]">
                <AnimatedScrollText text={bioParagraph1} />
                <AnimatedScrollText text={bioParagraph2} />
                <AnimatedScrollText text={bioParagraph3} />
                <AnimatedScrollText text={bioParagraph4} />
              </div>

              {/* Quick checklist with 3D Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-10 pt-8 border-t border-[#5E9BD9]/15">
                <div className="flex items-center gap-2.5 text-sm font-mono text-[#E8EEF6]">
                  <CheckCircle className="w-4 h-4 text-[#5E9BD9] shrink-0" />
                  <span>BSCS Graduate (2022–2026)</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-mono text-[#E8EEF6]">
                  <CheckCircle className="w-4 h-4 text-[#5E9BD9] shrink-0" />
                  <span>Certified MERN Specialist</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-mono text-[#E8EEF6]">
                  <CheckCircle className="w-4 h-4 text-[#5E9BD9] shrink-0" />
                  <span>Production API & DB Design</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-mono text-[#E8EEF6]">
                  <CheckCircle className="w-4 h-4 text-[#5E9BD9] shrink-0" />
                  <span>Clean Code & Documentation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars Cards & Terminal Widget */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {corePillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ translateY: -3, scale: 1.01 }}
                className="p-6 rounded-3xl glass-card border border-[#5E9BD9]/18 hover:border-[#5E9BD9]/50 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#5E9BD9]/10 border border-[#5E9BD9]/25 group-hover:scale-105 group-hover:bg-[#5E9BD9]/20 transition-all shrink-0">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold text-[#E8EEF6] group-hover:text-[#5E9BD9] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#B8C4D4] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Decorative developer snapshot with 3D Depth */}
            <div className="p-6 rounded-3xl bg-[#0B0C0A]/95 border border-[#5E9BD9]/20 font-mono text-xs shadow-inner">
              <div className="flex items-center justify-between text-[#7E8C9F] pb-3 border-b border-white/5 mb-3">
                <span className="flex items-center gap-2 text-[#5E9BD9]">
                  <FileCode className="w-4 h-4" />
                  abdullah.config.json
                </span>
                <span className="text-[10px] bg-[#5E9BD9]/15 text-[#5E9BD9] px-2 py-0.5 rounded">
                  verified
                </span>
              </div>
              <pre className="text-[#B8C4D4] leading-relaxed overflow-x-auto text-[11px]">
                {`{
  "engineer": "${personalInfo.name}",
  "academicDegree": "BSCS (Univ of Education)",
  "specializations": ["Full-Stack", "AI/ML", "E-Comm", "Logistics"],
  "cleanCodeStandard": true,
  "clientLocation": "Worldwide Remote"
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
