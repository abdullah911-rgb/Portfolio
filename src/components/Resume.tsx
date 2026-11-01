import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Eye,
  ExternalLink,
  Github,
  CheckCircle,
} from "lucide-react";
import { personalInfo } from "../data/personal";
import { SectionHeading } from "./SectionHeading";

const RESUME_PDF = "/assets/resume.pdf";

const highlights = [
  { label: "Full-Stack Development", color: "from-[#B89B6F] to-[#66726B]" },
  { label: "Python & AI/ML Engineering", color: "from-[#E2D2B8] to-[#B89B6F]" },
  { label: "Mobile App Development", color: "from-[#66726B] to-[#B89B6F]" },
  { label: "E-Commerce Operations", color: "from-[#BDBBB2] to-[#66726B]" },
];

export const Resume: React.FC = () => {
  const [pdfLoaded, setPdfLoaded] = useState(false);
  const [viewMode, setViewMode] = useState<"embed" | "card">("card");

  return (
    <section
      id="resume"
      className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0B0D06]"
    >
      {/* 3D Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-[#B89B6F]/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 left-0 w-[350px] h-[350px] bg-[#E2D2B8]/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          badge="Curriculum Vitae"
          title="My Resume &"
          highlight="CV"
          description="A complete overview of my technical skills, work experience, education, and projects — download or view it directly below."
        />

        <div className="mt-16 grid lg:grid-cols-[1fr_420px] gap-10 items-start">
          {/* ── Left: PDF Viewer / 3D Preview Card ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {/* Mode Toggle */}
            <div className="flex items-center gap-2 self-start bg-[#141413] border border-[#B89B6F]/20 rounded-full p-1 shadow-inner">
              <button
                onClick={() => setViewMode("card")}
                className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  viewMode === "card"
                    ? "btn-3d-blue font-bold shadow-gold-button"
                    : "text-[#BDBBB2] hover:text-[#E2D2B8]"
                }`}
              >
                Preview Card
              </button>
              <button
                onClick={() => setViewMode("embed")}
                className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  viewMode === "embed"
                    ? "btn-3d-blue font-bold shadow-gold-button"
                    : "text-[#BDBBB2] hover:text-[#E2D2B8]"
                }`}
              >
                <Eye className="inline w-3 h-3 mr-1.5 -mt-0.5" />
                View Inline
              </button>
            </div>

            {viewMode === "embed" ? (
              /* ── Embedded PDF Viewer ── */
              <div className="relative rounded-3xl overflow-hidden border border-[#B89B6F]/25 bg-[#060701] shadow-3d-card">
                {!pdfLoaded && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#060701] z-10">
                    <div className="w-10 h-10 rounded-full border-2 border-[#B89B6F]/30 border-t-[#B89B6F] animate-spin" />
                    <p className="text-xs font-mono text-[#BDBBB2]">Loading PDF…</p>
                  </div>
                )}
                <iframe
                  src={`${RESUME_PDF}#toolbar=1&navpanes=0&scrollbar=1`}
                  title="Muhammad Abdullah Resume"
                  className="w-full h-[680px] transition-opacity duration-500"
                  style={{ opacity: pdfLoaded ? 1 : 0 }}
                  onLoad={() => setPdfLoaded(true)}
                />
              </div>
            ) : (
              /* ── 3D Preview Card ── */
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card rounded-3xl p-0 overflow-hidden border border-[#B89B6F]/25 shadow-3d-card"
              >
                {/* Document Header Strip */}
                <div className="bg-gradient-to-r from-[#B89B6F]/25 via-[#66726B]/10 to-transparent border-b border-[#B89B6F]/15 px-8 py-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl p-[2px] bg-gradient-to-tr from-[#B89B6F] to-[#E2D2B8] shrink-0 overflow-hidden shadow-[0_0_20px_rgba(184,155,111,0.35)]">
                    <img
                      src={personalInfo.avatar}
                      alt={personalInfo.name}
                      className="w-full h-full rounded-2xl object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-[#E2D2B8]">
                      Muhammad Abdullah
                    </h3>
                    <p className="text-xs font-mono text-[#B89B6F] mt-0.5">
                      Full-Stack Developer · Python & AI/ML · E-Commerce · Logistics
                    </p>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5 bg-[#B89B6F]/10 border border-[#B89B6F]/30 rounded-full px-3 py-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#B89B6F]" />
                    <span className="text-xs font-mono text-[#B89B6F]">PDF Ready</span>
                  </div>
                </div>

                {/* Document Body */}
                <div className="px-8 py-7 space-y-6">
                  {/* Info Row */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Format", value: "PDF Document" },
                      { label: "Language", value: "English" },
                      { label: "Contact", value: personalInfo.email },
                      { label: "Location", value: personalInfo.location },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex flex-col gap-0.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#AFACA1]">
                          {label}
                        </span>
                        <span className="text-sm text-[#E2D2B8] font-medium truncate">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Expertise Tags */}
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-[#AFACA1] mb-3">
                      Areas Covered
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {highlights.map(({ label }) => (
                        <span
                          key={label}
                          className="inline-flex items-center px-3 py-1 rounded-xl text-xs font-mono bg-[#141413] border border-[#B89B6F]/20 text-[#E2D2B8]"
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Visual file-preview rows */}
                  <div className="space-y-2">
                    {[
                      "Professional Summary",
                      "Technical Skills",
                      "Work Experience",
                      "Projects",
                      "Education & Certifications",
                    ].map((section, i) => (
                      <div
                        key={section}
                        className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0"
                      >
                        <span className="w-5 h-5 rounded-md bg-[#141413] border border-[#B89B6F]/20 flex items-center justify-center text-[9px] font-mono text-[#B89B6F] flex-shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm text-[#BDBBB2]">{section}</span>
                        <div className="ml-auto h-1.5 rounded-full bg-[#141413] flex-1 max-w-[80px]">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-[#B89B6F] to-[#66726B]"
                            style={{ width: `${65 + i * 7}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* ── Right: 3D Action Cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-5 lg:sticky lg:top-28"
          >
            {/* Primary Download CTA */}
            <div className="glass-card rounded-3xl p-6 border border-[#B89B6F]/25 hover:border-[#B89B6F]/50 transition-all group shadow-3d-card">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-[#B89B6F]/15 border border-[#B89B6F]/30 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(184,155,111,0.25)] group-hover:scale-105 transition-transform">
                  <Download className="w-5 h-5 text-[#B89B6F]" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-[#E2D2B8] text-base">
                    Download Resume
                  </h4>
                  <p className="text-xs text-[#AFACA1] mt-0.5 font-mono">
                    PDF · Always up-to-date
                  </p>
                </div>
              </div>
              <a
                href={RESUME_PDF}
                download="Muhammad_Abdullah_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d-blue w-full py-3.5 rounded-2xl font-mono font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-[#0B0D06]" />
                Download PDF
              </a>
            </div>

            {/* View in Browser */}
            <div className="glass-card rounded-3xl p-6 border border-[#B89B6F]/20 hover:border-[#B89B6F]/40 transition-all group shadow-3d-card">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-[#141413] border border-[#B89B6F]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Eye className="w-5 h-5 text-[#B89B6F]" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-[#E2D2B8] text-base">
                    View in Browser
                  </h4>
                  <p className="text-xs text-[#AFACA1] mt-0.5 font-mono">
                    Opens PDF in a new tab
                  </p>
                </div>
              </div>
              <a
                href={RESUME_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d-outline w-full py-3 rounded-2xl text-center font-mono text-sm uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4 text-[#B89B6F]" />
                Open PDF
              </a>
            </div>

            {/* GitHub CTA */}
            <div className="glass-card rounded-3xl p-6 border border-[#B89B6F]/20 hover:border-[#B89B6F]/40 transition-all group shadow-3d-card">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-[#141413] border border-[#B89B6F]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Github className="w-5 h-5 text-[#E2D2B8]" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-[#E2D2B8] text-base">
                    GitHub Profile
                  </h4>
                  <p className="text-xs text-[#AFACA1] mt-0.5 font-mono">
                    See my code & open-source work
                  </p>
                </div>
              </div>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d-outline w-full py-3 rounded-2xl text-center font-mono text-sm uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4 text-[#B89B6F]" />
                @abdullah911-rgb
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
