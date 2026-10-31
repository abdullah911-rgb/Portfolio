import React from "react";
import { motion } from "framer-motion";
import {
  Layout,
  Monitor,
  Server,
  Terminal,
  Database,
  LineChart,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { services } from "../data/services";

const serviceIcons: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-6 h-6 text-cyan-400" />,
  Monitor: <Monitor className="w-6 h-6 text-blue-400" />,
  Server: <Server className="w-6 h-6 text-purple-400" />,
  Terminal: <Terminal className="w-6 h-6 text-yellow-400" />,
  Database: <Database className="w-6 h-6 text-sky-400" />,
  LineChart: <LineChart className="w-6 h-6 text-emerald-400" />,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-36 relative overflow-hidden bg-[#111318]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 05. WHAT I DO"
          title="Specialized Services &"
          highlight="Technical Solutions"
          description="From greenfield full-stack web applications to resilient backend APIs, Python automation, and data analytics."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-7 sm:p-8 rounded-3xl glass-card border border-white/10 hover:border-cyan-400/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Header row: Number & Icon */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                  <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:scale-105 transition-transform duration-300">
                    {serviceIcons[service.icon] || <Layout className="w-6 h-6 text-cyan-400" />}
                  </div>
                  <span className="text-3xl font-extrabold font-display text-white/20 group-hover:text-cyan-400/40 transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* Title & Short Description */}
                <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Checklist */}
                <div className="space-y-2.5 mb-8">
                  {service.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-text-secondary">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tags */}
              <div className="pt-6 border-t border-white/5 flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/[0.03] text-text-muted border border-white/5 group-hover:border-white/10 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
