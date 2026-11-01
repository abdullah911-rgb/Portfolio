import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, FileText, Sparkles } from "lucide-react";
import { personalInfo } from "../data/personal";
import { MagneticButton } from "./MagneticButton";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Journey", href: "#journey" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-nav py-3.5 shadow-2xl shadow-black/80"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark with Profile Avatar */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            className="group flex items-center gap-3.5 text-[#E2D2B8] transition-opacity"
          >
            <div className="relative w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-[#B89B6F] via-[#66726B] to-[#E2D2B8] shadow-[0_0_20px_rgba(184,155,111,0.35)] group-hover:shadow-[0_0_30px_rgba(184,155,111,0.55)] transition-all flex-shrink-0">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-full h-full rounded-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-tight text-[#E2D2B8] flex items-center gap-2 group-hover:text-[#B89B6F] transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-mono text-[#B89B6F]/90 tracking-wider">
                Full-Stack &amp; AI Engineer
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#141413]/70 border border-[#B89B6F]/20 rounded-full px-3 py-1.5 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-mono tracking-wide uppercase transition-all duration-250 ${
                    isActive
                      ? "text-[#E2D2B8] font-semibold"
                      : "text-[#BDBBB2] hover:text-[#E2D2B8]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-[#B89B6F]/20 rounded-full border border-[#B89B6F]/40 shadow-[0_0_15px_rgba(184,155,111,0.25)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* CTA & Resume Button */}
          <div className="hidden sm:flex items-center gap-3">
            <MagneticButton>
              <a
                href="/assets/resume.pdf"
                download="Muhammad_Abdullah_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d-outline inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider"
              >
                <FileText className="w-3.5 h-3.5 text-[#B89B6F]" />
                <span>Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#BDBBB2]" />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="#contact"
                className="btn-3d-blue inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider font-bold"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#060701]" />
                <span>Let's Talk</span>
              </a>
            </MagneticButton>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-[#141413] border border-[#B89B6F]/20 text-[#E2D2B8] hover:text-[#B89B6F] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#0B0D06]/95 backdrop-blur-2xl lg:hidden flex flex-col justify-between pt-28 pb-10 px-6"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-4"
            >
              <p className="text-xs font-mono uppercase text-[#B89B6F] tracking-widest mb-2">
                Navigation
              </p>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  className="text-2xl font-display font-bold text-[#E2D2B8] hover:text-[#B89B6F] transition-colors flex items-center justify-between border-b border-[#B89B6F]/10 pb-3"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono text-[#AFACA1]">0{idx + 1}</span>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-3 pt-6 border-t border-[#B89B6F]/15"
            >
              <a
                href="/assets/resume.pdf"
                download="Muhammad_Abdullah_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-xl border border-[#B89B6F]/30 bg-[#141413] text-[#E2D2B8] text-center font-mono text-sm uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#B89B6F]" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-3d-blue w-full py-3.5 rounded-xl text-center font-mono font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#060701]" />
                <span>Let's Build Together</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
