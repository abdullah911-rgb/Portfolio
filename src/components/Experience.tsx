import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  TrendingUp,
  Laptop,
  Truck,
  ShoppingBag,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { experiences } from "../data/experience";

const roleIcons: Record<string, React.ReactNode> = {
  "sky-bridge": <Truck className="w-5 h-5 text-cyan-400" />,
  "online-experts": <Laptop className="w-5 h-5 text-blue-400" />,
  "amtex-limited": <ShoppingBag className="w-5 h-5 text-emerald-400" />,
};

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-36 relative overflow-hidden bg-[#0C0C0C]">
      {/* Glow accent */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 03. PROFESSIONAL EXPERIENCE"
          title="Battle-Tested Exposure in"
          highlight="Software, Logistics & Commerce"
          description="A chronological timeline of hands-on responsibilities, production web platforms delivered, and multi-channel operations managed."
        />

        <div className="relative border-l border-white/10 ml-4 md:ml-8 pl-6 md:pl-12 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline marker node */}
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

                {/* Bullets with verified details */}
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
        </div>
      </div>
    </section>
  );
};
