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
import { TiltCard } from "./TiltCard";

const serviceIcons: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-6 h-6 text-[#B89B6F]" />,
  Monitor: <Monitor className="w-6 h-6 text-[#66726B]" />,
  Server: <Server className="w-6 h-6 text-[#B89B6F]" />,
  Terminal: <Terminal className="w-6 h-6 text-[#66726B]" />,
  Database: <Database className="w-6 h-6 text-[#B89B6F]" />,
  LineChart: <LineChart className="w-6 h-6 text-[#66726B]" />,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-36 relative overflow-hidden bg-[#0B0D06]">
      {/* 3D ambient glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#B89B6F]/8 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="// 05. WHAT I DO"
          title="Specialized Services &"
          highlight="Technical Solutions"
          description="From greenfield full-stack web applications to resilient backend APIs, Python automation, and data analytics."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <TiltCard key={service.number} maxTilt={8} scale={1.02} className="border border-[#B89B6F]/20 hover:border-[#B89B6F]/55 shadow-3d-card">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-7 sm:p-8 rounded-3xl glass-card transition-all duration-300 flex flex-col justify-between h-full group relative overflow-hidden"
              >
              {/* Subtle hover gradient background */}
              <div className="absolute -right-20 -top-20 w-44 h-44 bg-[#B89B6F]/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Header row: Number & Icon */}
                <div className="flex items-center justify-between pb-6 border-b border-[#B89B6F]/15 mb-6">
                  <div className="p-3.5 rounded-2xl bg-[#B89B6F]/10 border border-[#B89B6F]/25 group-hover:scale-105 group-hover:bg-[#B89B6F]/20 transition-all duration-300">
                    {serviceIcons[service.icon] || <Layout className="w-6 h-6 text-[#B89B6F]" />}
                  </div>
                  <span className="text-3xl font-extrabold font-display text-[#B89B6F]/25 group-hover:text-[#B89B6F] transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* Title & Short Description */}
                <h3 className="text-xl font-display font-bold text-[#E2D2B8] group-hover:text-[#B89B6F] transition-colors mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-[#BDBBB2] leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Deliverables / Features Checklist */}
                <div className="space-y-2 mb-6">
                  {service.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[#E2D2B8]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B89B6F] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies footer */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#B89B6F]/15">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono bg-[#141413] border border-[#B89B6F]/20 text-[#BDBBB2]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
