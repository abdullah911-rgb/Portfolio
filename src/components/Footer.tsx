import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../data/personal";
import { MagneticButton } from "./MagneticButton";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#060701] border-t border-[#B89B6F]/20 pt-16 pb-12 relative overflow-hidden">
      {/* 3D background lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-[#B89B6F]/6 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#B89B6F]/15 items-start">
          {/* Brand info */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3.5">
              <div className="relative w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-[#B89B6F] via-[#66726B] to-[#E2D2B8] shadow-[0_0_20px_rgba(184,155,111,0.35)] shrink-0">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full rounded-full object-cover object-top"
                />
              </div>
              <div>
                <span className="font-display font-bold text-xl tracking-tight text-[#E2D2B8] block">
                  {personalInfo.name}
                </span>
                <span className="text-xs font-mono text-[#B89B6F]">
                  Full-Stack Developer & AI Systems Architect
                </span>
              </div>
            </div>

            <p className="text-sm text-[#BDBBB2] leading-relaxed max-w-sm">
              Computer Science graduate specializing in scalable web platforms, secure RESTful APIs, and responsive frontends.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-[#B89B6F] animate-pulse" />
              <span className="text-xs font-mono text-[#AFACA1]">
                Based in Lahore, Pakistan • Available globally
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E2D2B8]">
              Site Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-sm font-mono text-[#BDBBB2]">
              <a href="#about" className="hover:text-[#B89B6F] transition-colors">
                // 01. About
              </a>
              <a href="#skills" className="hover:text-[#B89B6F] transition-colors">
                // 02. Skills
              </a>
              <a href="#journey" className="hover:text-[#B89B6F] transition-colors">
                // 03. Journey
              </a>
              <a href="#projects" className="hover:text-[#B89B6F] transition-colors">
                // 04. Projects
              </a>
              <a href="#services" className="hover:text-[#B89B6F] transition-colors">
                // 05. Services
              </a>
              <a href="#education" className="hover:text-[#B89B6F] transition-colors">
                // 06. Education
              </a>
              <a href="#resume" className="hover:text-[#B89B6F] transition-colors">
                // 07. Resume
              </a>
              <a href="#contact" className="hover:text-[#B89B6F] transition-colors">
                // 08. Contact
              </a>
              <a
                href="/assets/resume.pdf"
                download="Muhammad_Abdullah_Resume.pdf"
                className="hover:text-[#B89B6F] transition-colors flex items-center gap-1"
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
                  className="w-11 h-11 rounded-full bg-[#141413] border border-[#B89B6F]/20 flex items-center justify-center text-[#BDBBB2] hover:text-[#E2D2B8] hover:border-[#B89B6F]/50 hover:shadow-[0_0_20px_rgba(184,155,111,0.35)] transition-all"
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
                  className="w-11 h-11 rounded-full bg-[#141413] border border-[#B89B6F]/20 flex items-center justify-center text-[#BDBBB2] hover:text-[#B89B6F] hover:border-[#B89B6F]/50 hover:shadow-[0_0_20px_rgba(184,155,111,0.35)] transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-11 h-11 rounded-full bg-[#141413] border border-[#B89B6F]/20 flex items-center justify-center text-[#BDBBB2] hover:text-[#E2D2B8] hover:border-[#B89B6F]/50 hover:shadow-[0_0_20px_rgba(184,155,111,0.35)] transition-all"
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
                <ArrowUp className="w-3.5 h-3.5 text-[#B89B6F]" />
              </button>
            </MagneticButton>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#AFACA1]">
          <p>© {new Date().getFullYear()} Muhammad Abdullah. All rights reserved.</p>
          <p className="text-[#AFACA1]/70">Crafted with precision &amp; passion</p>
        </div>
      </div>
    </footer>
  );
};
