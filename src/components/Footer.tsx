import { ArrowUp, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { personalInfo } from "../data/personal";
import { MagneticButton } from "./MagneticButton";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#08090D] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5 items-start">
          {/* Brand info */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-display font-bold text-white text-lg shadow-lg shadow-cyan-500/20">
                MA
              </div>
              <div>
                <span className="font-display font-bold text-xl tracking-tight text-white block">
                  {personalInfo.name}
                </span>
                <span className="text-xs font-mono text-cyan-400">
                  Full-Stack Developer & AI Engineer
                </span>
              </div>
            </div>

            <p className="text-sm text-text-secondary leading-relaxed max-w-sm">
              Computer Science graduate specializing in scalable web platforms, secure RESTful APIs, and responsive frontends.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-text-muted">
                Based in Lahore, Pakistan • Available globally
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-white/90">
              Site Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-sm font-mono text-text-secondary">
              <a href="#about" className="hover:text-cyan-400 transition-colors">
                // 01. About
              </a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">
                // 02. Skills
              </a>
              <a href="#journey" className="hover:text-cyan-400 transition-colors">
                // 03. Journey
              </a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">
                // 04. Projects
              </a>
              <a href="#services" className="hover:text-cyan-400 transition-colors">
                // 05. Services
              </a>
              <a href="#education" className="hover:text-cyan-400 transition-colors">
                // 06. Education
              </a>
              <a href="#resume" className="hover:text-cyan-400 transition-colors">
                // 07. Resume
              </a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">
                // 08. Contact
              </a>
              <a
                href="/assets/resume.pdf"
                download="Muhammad_Abdullah_Resume.pdf"
                className="hover:text-cyan-400 transition-colors flex items-center gap-1"
              >
                // 09. Download PDF
              </a>
            </div>
          </div>

          {/* Connect & Back to top */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between h-full gap-6">
            <div className="flex items-center gap-2">
              <MagneticButton>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:border-cyan-400/40 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-text-secondary hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-text-secondary hover:text-emerald-400 hover:border-emerald-400/40 transition-all"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </MagneticButton>
            </div>

            <MagneticButton>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 hover:border-cyan-400/50 text-xs font-mono uppercase tracking-wider text-text-secondary hover:text-white transition-all"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
              </button>
            </MagneticButton>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted">
          <p>© {new Date().getFullYear()} Muhammad Abdullah. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Built with React, TypeScript & Tailwind CSS</span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          </div>
        </div>
      </div>
    </footer>
  );
};
