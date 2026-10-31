import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  TrendingUp,
  Laptop,
  Truck,
  ShoppingBag,
  Compass,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { experiences } from "../data/experience";

const roleIcons: Record<string, React.ReactNode> = {
  "sky-bridge": <Truck className="w-5 h-5 text-cyan-400" />,
  "online-experts": <Laptop className="w-5 h-5 text-blue-400" />,
  "amtex-limited": <ShoppingBag className="w-5 h-5 text-emerald-400" />,
};

const journeyTabs = [
  { id: "all", label: "Complete Journey", icon: <Compass className="w-4 h-4 text-cyan-400" /> },
  { id: "dev", label: "Software Development", icon: <Laptop className="w-4 h-4 text-blue-400" /> },
  { id: "ecommerce", label: "E-Commerce & Analytics", icon: <ShoppingBag className="w-4 h-4 text-emerald-400" /> },
  { id: "logistics", label: "Logistics & Dispatch", icon: <Truck className="w-4 h-4 text-sky-400" /> },
];

export const Journey: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredExperiences = experiences.filter((exp) => {
    if (activeTab === "all") return true;
    if (activeTab === "dev") return exp.id === "online-experts";
    if (activeTab === "ecommerce") return exp.id === "amtex-limited";
    if (activeTab === "logistics") return exp.id === "sky-bridge";
    return true;
  });

  return (
    <section id="journey" className="py-24 md:py-36 relative overflow-hidden bg-[#0C0C0C]">
      {/* Anchor for backward compatibility with #experience */}
      <div id="experience" className="absolute -top-20" />

      {/* Glow accent */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute left-10 bottom-1/4 w-80 h-80 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 03. MY JOURNEY & EXPERIENCES"
          title="Career Trajectory &"
          highlight="Professional Evolution"
          description="Tracing my progression across commercial full-stack software development, global e-commerce operations, and high-tempo freight logistics."
        />

        {/* Journey Milestones Overview Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <span className="text-xs font-mono text-cyan-400 block mb-1">
              01. Academic Foundation
            </span>
            <span className="text-white font-display font-bold text-base block">
              BSCS Graduate
            </span>
            <span className="text-[11px] font-mono text-text-muted">
              Univ of Education, Lahore (22-26)
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <span className="text-xs font-mono text-blue-400 block mb-1">
              02. Full-Stack Production
            </span>
            <span className="text-white font-display font-bold text-base block">
              Full-Stack Developer
            </span>
            <span className="text-[11px] font-mono text-text-muted">
              Online Experts (Remote)
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <span className="text-xs font-mono text-emerald-400 block mb-1">
              03. Multi-Channel Commerce
            </span>
            <span className="text-white font-display font-bold text-base block">
              E-Commerce Brand Manager
            </span>
            <span className="text-[11px] font-mono text-text-muted">
              Amtex Limited (9+ Marketplaces)
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <span className="text-xs font-mono text-purple-400 block mb-1">
              04. Transportation Ops
            </span>
            <span className="text-white font-display font-bold text-base block">
              Truck Dispatcher
            </span>
            <span className="text-[11px] font-mono text-text-muted">
              Sky Bridge Solutions
            </span>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {journeyTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-cyan-400 text-black font-semibold shadow-lg shadow-cyan-400/20"
                  : "bg-white/[0.03] text-text-secondary border border-white/10 hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Timeline representation */}
        <div className="relative border-l border-white/10 ml-4 md:ml-8 pl-6 md:pl-12 space-y-12">
          <AnimatePresence mode="wait">
            {filteredExperiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline node */}
                <div className="absolute -left-[31px] md:-left-[55px] top-1.5 w-7 h-7 rounded-full bg-[#111318] border-2 border-cyan-400 flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-cyan-400/20">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>

                {/* Experience Card */}
                <div className="p-7 sm:p-9 rounded-3xl glass-card border border-white/10 hover:border-cyan-400/40 transition-all duration-300">
                  {/* Header metadata */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="p-2 rounded-xl bg-white/[0.04] border border-white/10">
                          {roleIcons[exp.id] || <Briefcase className="w-5 h-5 text-cyan-400" />}
                        </span>
                        <h3 className="text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {exp.role}
                        </h3>
                        <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                          {exp.type}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary font-mono">
                        <span className="text-white font-medium">{exp.company}</span>
                        <span className="flex items-center gap-1.5 text-text-muted">
                          <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs font-mono text-cyan-400 self-start lg:self-center">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Bullets with verified details from image */}
                  <ul className="space-y-4 mb-6">
                    {exp.description.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-start gap-3 text-text-secondary text-sm md:text-base leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Impact Metric & Tech Tags */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/5">
                    {exp.metrics && (
                      <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                        <TrendingUp className="w-4 h-4 shrink-0" />
                        <span>{exp.metrics}</span>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.03] border border-white/5 text-text-secondary hover:text-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
