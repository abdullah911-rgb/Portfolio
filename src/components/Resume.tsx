import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Eye,
  ExternalLink,
  Github,
  RefreshCw,
  CheckCircle,
} from "lucide-react";
import { personalInfo } from "../data/personal";
import { SectionHeading } from "./SectionHeading";

/* ─────────────────────────────────────────────
   CV / Resume Section
   ─────────────────────────────────────────────
   HOW TO UPDATE YOUR RESUME:
   1. Replace the file at: public/assets/resume.pdf
      (keep the exact same filename — resume.pdf)
   2. Run: git add public/assets/resume.pdf
   3. Run: git commit -m "update: new resume"
   4. Run: git push
   Vercel will auto-redeploy in ~30 seconds.
   ───────────────────────────────────────────── */

const RESUME_PDF = "/assets/resume.pdf";

const highlights = [
  { label: "Full-Stack Development", color: "from-cyan-500 to-blue-600" },
  { label: "Python & AI/ML Engineering", color: "from-violet-500 to-purple-600" },
  { label: "Mobile App Development", color: "from-emerald-500 to-teal-600" },
  { label: "E-Commerce Operations", color: "from-amber-500 to-orange-600" },
];

export const Resume: React.FC = () => {
  const [pdfLoaded, setPdfLoaded] = useState(false);
  const [viewMode, setViewMode] = useState<"embed" | "card">("card");

  return (
    <section
      id="resume"
      className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          badge="Curriculum Vitae"
          title="My Resume &"
          highlight="CV"
          description="A complete overview of my technical skills, work experience, education, and projects — download or view it directly below."
        />

        <div className="mt-16 grid lg:grid-cols-[1fr_420px] gap-10 items-start">
          {/* ── Left: PDF Viewer / Preview Card ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {/* Mode Toggle */}
            <div className="flex items-center gap-2 self-start bg-white/[0.04] border border-white/10 rounded-full p-1">
              <button
                onClick={() => setViewMode("card")}
                className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  viewMode === "card"
                    ? "bg-white/10 text-white border border-white/15"
                    : "text-text-muted hover:text-white"
                }`}
              >
                Preview Card
              </button>
              <button
                onClick={() => setViewMode("embed")}
                className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  viewMode === "embed"
                    ? "bg-white/10 text-white border border-white/15"
                    : "text-text-muted hover:text-white"
                }`}
              >
                <Eye className="inline w-3 h-3 mr-1.5 -mt-0.5" />
                View Inline
              </button>
            </div>

            {viewMode === "embed" ? (
              /* ── Embedded PDF Viewer ── */
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#111] shadow-2xl shadow-black/60">
                {!pdfLoaded && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#111] z-10">
                    <div className="w-10 h-10 rounded-full border-2 border-cyan-400/40 border-t-cyan-400 animate-spin" />
                    <p className="text-xs font-mono text-text-muted">Loading PDF…</p>
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
              /* ── Preview Card ── */
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card rounded-2xl p-0 overflow-hidden border border-white/10 shadow-2xl shadow-black/60"
              >
                {/* Document Header Strip */}
                <div className="bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-violet-600/20 border-b border-white/10 px-8 py-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl border border-cyan-400/40 overflow-hidden shadow-lg shadow-cyan-500/30 flex-shrink-0">
                    <img
                      src={personalInfo.avatar}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-white">
                      Muhammad Abdullah
                    </h3>
                    <p className="text-xs font-mono text-cyan-400 mt-0.5">
                      Full-Stack Developer · Python & AI/ML · E-Commerce · Logistics
                    </p>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/25 rounded-full px-3 py-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-xs font-mono text-emerald-400">PDF Ready</span>
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
                        <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted">
                          {label}
                        </span>
                        <span className="text-sm text-text-primary font-medium truncate">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Expertise Tags */}
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-text-muted mb-3">
                      Areas Covered
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {highlights.map(({ label, color }) => (
                        <span
                          key={label}
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono bg-gradient-to-r ${color} bg-clip-text text-transparent border border-white/10`}
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
                        <span className="w-5 h-5 rounded-md bg-white/[0.05] border border-white/10 flex items-center justify-center text-[9px] font-mono text-text-muted flex-shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm text-text-secondary">{section}</span>
                        <div className="ml-auto h-1.5 rounded-full bg-white/10 flex-1 max-w-[80px]">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-cyan-500/60 to-blue-600/60"
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

          {/* ── Right: Action Cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-5 lg:sticky lg:top-28"
          >
            {/* Primary Download CTA */}
            <div className="glass-card rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all group">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
                  <Download className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-base">
                    Download Resume
                  </h4>
                  <p className="text-xs text-text-muted mt-0.5 font-mono">
                    PDF · Always up-to-date
                  </p>
                </div>
              </div>
              <a
                href={RESUME_PDF}
                download="Muhammad_Abdullah_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-black text-center font-mono font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 hover:opacity-95 active:scale-[0.98] transition-all"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </div>

            {/* View in Browser */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all group">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Eye className="w-5 h-5 text-text-secondary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-base">
                    View in Browser
                  </h4>
                  <p className="text-xs text-text-muted mt-0.5 font-mono">
                    Opens PDF in a new tab
                  </p>
                </div>
              </div>
              <a
                href={RESUME_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl border border-white/15 bg-white/[0.04] text-white text-center font-mono text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/[0.08] hover:border-white/25 transition-all"
              >
                <ExternalLink className="w-4 h-4 text-text-muted" />
                Open PDF
              </a>
            </div>

            {/* GitHub CTA */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all group">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Github className="w-5 h-5 text-text-secondary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-base">
                    GitHub Profile
                  </h4>
                  <p className="text-xs text-text-muted mt-0.5 font-mono">
                    See my code & open-source work
                  </p>
                </div>
              </div>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl border border-white/15 bg-white/[0.04] text-white text-center font-mono text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/[0.08] hover:border-white/25 transition-all"
              >
                <Github className="w-4 h-4 text-text-muted" />
                @abdullah911-rgb
              </a>
            </div>

            {/* Update instructions pill */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-xl bg-white/[0.02] border border-white/8 p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  How to Update CV
                </span>
              </div>
              <ol className="space-y-2 text-xs font-mono text-text-muted">
                <li className="flex gap-2">
                  <span className="text-cyan-400 font-bold flex-shrink-0">1.</span>
                  Replace{" "}
                  <code className="text-text-secondary bg-white/5 px-1 rounded">
                    public/assets/resume.pdf
                  </code>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400 font-bold flex-shrink-0">2.</span>
                  Run{" "}
                  <code className="text-text-secondary bg-white/5 px-1 rounded">
                    git add .
                  </code>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400 font-bold flex-shrink-0">3.</span>
                  <code className="text-text-secondary bg-white/5 px-1 rounded">
                    git commit -m "update resume"
                  </code>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400 font-bold flex-shrink-0">4.</span>
                  <code className="text-text-secondary bg-white/5 px-1 rounded">
                    git push
                  </code>
                  {" "}→ Live in ~30s ✓
                </li>
              </ol>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
