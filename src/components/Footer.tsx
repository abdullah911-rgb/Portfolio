import { ArrowUp, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { personalInfo } from "../data/personal";
import { MagneticButton } from "./MagneticButton";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0B0C0A] border-t border-[#5E9BD9]/20 pt-16 pb-12 relative overflow-hidden">
      {/* 3D background lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-[#5E9BD9]/6 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#5E9BD9]/15 items-start">
          {/* Brand info */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3.5">
              <div className="relative w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-[#5E9BD9] via-[#84B6E8] to-[#E8EEF6] shadow-[0_0_20px_rgba(94,155,217,0.35)] shrink-0">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full rounded-full object-cover object-top"
                />
              </div>
              <div>
                <span className="font-display font-bold text-xl tracking-tight text-[#E8EEF6] block">
                  {personalInfo.name}
                </span>
                <span className="text-xs font-mono text-[#5E9BD9]">
                  Full-Stack Developer & AI Systems Architect
                </span>
              </div>
            </div>

            <p className="text-sm text-[#B8C4D4] leading-relaxed max-w-sm">
              Computer Science graduate specializing in scalable web platforms, secure RESTful APIs, and responsive frontends.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-[#5E9BD9] animate-pulse" />
              <span className="text-xs font-mono text-[#7E8C9F]">
                Based in Lahore, Pakistan • Available globally
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8EEF6]">
              Site Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-sm font-mono text-[#B8C4D4]">
              <a href="#about" className="hover:text-[#5E9BD9] transition-colors">
                // 01. About
              </a>
              <a href="#skills" className="hover:text-[#5E9BD9] transition-colors">
                // 02. Skills
              </a>
              <a href="#journey" className="hover:text-[#5E9BD9] transition-colors">
                // 03. Journey
              </a>
              <a href="#projects" className="hover:text-[#5E9BD9] transition-colors">
                // 04. Projects
              </a>
              <a href="#services" className="hover:text-[#5E9BD9] transition-colors">
                // 05. Services
              </a>
              <a href="#education" className="hover:text-[#5E9BD9] transition-colors">
                // 06. Education
              </a>
              <a href="#resume" className="hover:text-[#5E9BD9] transition-colors">
                // 07. Resume
              </a>
              <a href="#contact" className="hover:text-[#5E9BD9] transition-colors">
                // 08. Contact
              </a>
              <a
                href="/assets/resume.pdf"
                download="Muhammad_Abdullah_Resume.pdf"
                className="hover:text-[#5E9BD9] transition-colors flex items-center gap-1"
              >
                // 09. Download PDF
              </a>
            </div>
          </div>

          {/* Connect & Back to top */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between h-full gap-6">
            <div className="flex items-center gap-2.5">
              <MagneticButton>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-[#181A15] border border-[#5E9BD9]/20 flex items-center justify-center text-[#B8C4D4] hover:text-[#E8EEF6] hover:border-[#5E9BD9]/50 hover:shadow-[0_0_20px_rgba(94,155,217,0.35)] transition-all"
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
                  className="w-11 h-11 rounded-full bg-[#181A15] border border-[#5E9BD9]/20 flex items-center justify-center text-[#B8C4D4] hover:text-[#5E9BD9] hover:border-[#5E9BD9]/50 hover:shadow-[0_0_20px_rgba(94,155,217,0.35)] transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-11 h-11 rounded-full bg-[#181A15] border border-[#5E9BD9]/20 flex items-center justify-center text-[#B8C4D4] hover:text-[#E8EEF6] hover:border-[#5E9BD9]/50 hover:shadow-[0_0_20px_rgba(94,155,217,0.35)] transition-all"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </MagneticButton>
            </div>

            <MagneticButton>
              <button
                onClick={scrollToTop}
                className="btn-3d-outline inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5 text-[#5E9BD9]" />
              </button>
            </MagneticButton>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#7E8C9F]">
          <p>© {new Date().getFullYear()} Muhammad Abdullah. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Built with Chinese Black, Carolina Blue & Bright Gray</span>
            <Sparkles className="w-3.5 h-3.5 text-[#5E9BD9]" />
          </div>
        </div>
      </div>
    </footer>
  );
};
