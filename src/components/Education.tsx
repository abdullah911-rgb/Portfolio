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
    <section id="education" className="py-24 md:py-36 relative overflow-hidden bg-[#0C0C0C]">
      {/* Background radial glow */}
      <div className="absolute left-1/3 bottom-10 w-96 h-96 bg-cyan-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="p-7 sm:p-9 rounded-3xl glass-card border border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10">
                        {isDegree ? (
                          <GraduationCap className="w-6 h-6 text-cyan-400" />
                        ) : (
                          <Award className="w-6 h-6 text-emerald-400" />
                        )}
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10 text-cyan-400">
                        {item.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Title & Institution */}
                  <h3 className="text-2xl font-display font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-mono text-cyan-300 mb-4">
                    <span>{item.institution}</span>
                    {item.location && (
                      <span className="text-text-muted flex items-center gap-1">
                        • <MapPin className="w-3 h-3 text-cyan-400" /> {item.location}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2.5">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-text-muted">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                    Verified Credential
                  </span>
                  <span className="text-cyan-400">Active Record</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
