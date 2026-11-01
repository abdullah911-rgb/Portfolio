import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  CheckCircle2,
  Laptop,
  Truck,
  ShoppingBag,
  Compass,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { experiences } from "../data/experience";

const roleIcons: Record<string, React.ReactNode> = {
  "sky-bridge": <Truck className="w-5 h-5 text-[#B89B6F]" />,
  "online-experts": <Laptop className="w-5 h-5 text-[#66726B]" />,
  "amtex-limited": <ShoppingBag className="w-5 h-5 text-[#B89B6F]" />,
};

const journeyTabs = [
  { id: "all", label: "Complete Journey", icon: <Compass className="w-4 h-4 text-[#B89B6F]" /> },
  { id: "dev", label: "Software Development", icon: <Laptop className="w-4 h-4 text-[#66726B]" /> },
  { id: "ecommerce", label: "E-Commerce & Analytics", icon: <ShoppingBag className="w-4 h-4 text-[#B89B6F]" /> },
  { id: "logistics", label: "Logistics & Dispatch", icon: <Truck className="w-4 h-4 text-[#66726B]" /> },
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
    <section id="journey" className="py-24 md:py-36 relative overflow-hidden bg-[#0B0D06]">
      {/* Anchor for backward compatibility with #experience */}
      <div id="experience" className="absolute -top-20" />

      {/* 3D Glow accents */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-[#B89B6F]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute left-10 bottom-1/4 w-80 h-80 bg-[#E2D2B8]/6 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="// 03. MY JOURNEY & EXPERIENCES"
          title="Career Trajectory &"
          highlight="Professional Evolution"
          description="Tracing my progression across commercial full-stack software development, global e-commerce operations, and high-tempo freight logistics."
        />

        {/* Journey Milestones Overview Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <motion.div whileHover={{ translateY: -3 }} className="p-5 rounded-2xl glass-card border border-[#B89B6F]/20">
            <span className="text-2xl sm:text-3xl font-display font-extrabold text-gradient-gold block mb-1">
              3+ Roles
            </span>
            <span className="text-xs font-mono text-[#E2D2B8]">Industry Experience</span>
          </motion.div>
          <motion.div whileHover={{ translateY: -3 }} className="p-5 rounded-2xl glass-card border border-[#B89B6F]/20">
            <span className="text-2xl sm:text-3xl font-display font-extrabold text-gradient-gold block mb-1">
              9+ Marketplaces
            </span>
            <span className="text-xs font-mono text-[#E2D2B8]">Global Brand Ops</span>
          </motion.div>
          <motion.div whileHover={{ translateY: -3 }} className="p-5 rounded-2xl glass-card border border-[#B89B6F]/20">
            <span className="text-2xl sm:text-3xl font-display font-extrabold text-gradient-gold block mb-1">
              Full-Stack
            </span>
            <span className="text-xs font-mono text-[#E2D2B8]">Production Systems</span>
          </motion.div>
          <motion.div whileHover={{ translateY: -3 }} className="p-5 rounded-2xl glass-card border border-[#B89B6F]/20">
            <span className="text-2xl sm:text-3xl font-display font-extrabold text-gradient-gold block mb-1">
              Cross-Domain
            </span>
            <span className="text-xs font-mono text-[#E2D2B8]">Engineering & Ops</span>
          </motion.div>
        </div>

        {/* 3D Domain Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {journeyTabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.03, translateY: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                activeTab === tab.id
                  ? "btn-3d-blue font-bold shadow-gold-button"
                  : "bg-[#141413] text-[#BDBBB2] border border-[#B89B6F]/20 hover:text-[#E2D2B8] hover:border-[#B89B6F]/40"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </motion.button>
          ))}
        </div>

        {/* 3D Timeline Cards */}
        <div className="relative pl-6 sm:pl-10 border-l border-[#B89B6F]/25 space-y-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="space-y-12"
            >
              {filteredExperiences.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ translateY: -4 }}
                  className="relative p-7 sm:p-9 rounded-3xl glass-card border border-[#B89B6F]/20 shadow-3d-card group"
                >
                  {/* Floating Glowing Node Marker */}
                  <div className="absolute -left-[35px] sm:-left-[51px] top-8 w-5 h-5 rounded-full bg-[#0B0D06] border-2 border-[#B89B6F] shadow-[0_0_15px_#B89B6F] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#E2D2B8] animate-pulse" />
                  </div>

                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#B89B6F]/15 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-2xl bg-[#B89B6F]/10 border border-[#B89B6F]/25 group-hover:scale-105 group-hover:bg-[#B89B6F]/20 transition-all shrink-0">
                        {roleIcons[exp.id] || <Laptop className="w-5 h-5 text-[#B89B6F]" />}
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-display font-bold text-[#E2D2B8] group-hover:text-[#B89B6F] transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-mono text-[#B89B6F] font-medium mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#BDBBB2]">
                      <span className="flex items-center gap-1.5 bg-[#141413] px-3 py-1.5 rounded-full border border-[#B89B6F]/20">
                        <Calendar className="w-3.5 h-3.5 text-[#B89B6F]" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 bg-[#141413] px-3 py-1.5 rounded-full border border-[#B89B6F]/20">
                        <MapPin className="w-3.5 h-3.5 text-[#66726B]" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Narrative Description Points */}
                  <div className="space-y-3 mb-7">
                    {exp.description.map((paragraph, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#BDBBB2] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#B89B6F] shrink-0 mt-0.5" />
                        <span>{paragraph}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies / Skills Tags */}
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-[#B89B6F]/15">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-xl text-xs font-mono bg-[#141413] border border-[#B89B6F]/20 text-[#E2D2B8] hover:border-[#B89B6F]/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
