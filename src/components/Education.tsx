import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { educationData } from "../data/education";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 md:py-36 relative overflow-hidden bg-[#181A15]/40">
      {/* 3D background radial glow */}
      <div className="absolute left-1/3 bottom-10 w-96 h-96 bg-[#5E9BD9]/8 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="// 06. ACADEMIC & CERTIFICATIONS"
          title="Educational Foundation &"
          highlight="Certified Specializations"
          description="Formal academic degrees and specialized hands-on software development training."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {educationData.map((item, idx) => {
            const isDegree = item.type === "degree";

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ translateY: -5 }}
                className="p-7 sm:p-9 rounded-3xl glass-card border border-[#5E9BD9]/20 hover:border-[#5E9BD9]/55 transition-all duration-300 flex flex-col justify-between shadow-3d-card"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between pb-6 border-b border-[#5E9BD9]/15 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3.5 rounded-2xl bg-[#5E9BD9]/10 border border-[#5E9BD9]/25">
                        {isDegree ? (
                          <GraduationCap className="w-6 h-6 text-[#5E9BD9]" />
                        ) : (
                          <Award className="w-6 h-6 text-[#84B6E8]" />
                        )}
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#5E9BD9]/10 border border-[#5E9BD9]/25 text-[#5E9BD9]">
                        {item.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#B8C4D4]">
                      <Calendar className="w-3.5 h-3.5 text-[#5E9BD9]" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Title & Institution */}
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[#E8EEF6] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm font-mono text-[#5E9BD9] font-medium mb-4 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#5E9BD9]" />
                    <span>{item.institution}</span>
                    <span className="text-[#7E8C9F]">•</span>
                    <span className="flex items-center gap-1 text-[#7E8C9F]">
                      <MapPin className="w-3 h-3 text-[#84B6E8]" />
                      {item.location}
                    </span>
                  </p>

                  <p className="text-sm text-[#B8C4D4] leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-2 mb-6">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E8EEF6]">
                        <CheckCircle2 className="w-4 h-4 text-[#5E9BD9] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Competencies Pills */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-[#5E9BD9]/15">
                  {item.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 rounded-xl text-xs font-mono bg-[#181A15] border border-[#5E9BD9]/20 text-[#E8EEF6]"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
