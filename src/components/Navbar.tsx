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

      // Section spy
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

  // Prevent body scroll when mobile menu is open
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
            ? "glass-nav py-3.5 shadow-2xl shadow-black/60"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#"
            className="group flex items-center gap-3 text-white transition-opacity hover:opacity-90"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-display font-bold text-white text-base shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              MA
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-tight text-white flex items-center gap-2">
                {personalInfo.name}
              </span>
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for hire</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-mono tracking-wide uppercase transition-all duration-200 ${
                    isActive
                      ? "text-white font-medium"
                      : "text-text-secondary hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider text-text-primary bg-white/[0.05] border border-white/15 hover:border-cyan-400/40 hover:bg-white/[0.08] transition-all"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-text-muted" />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider text-black font-semibold bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:opacity-95 shadow-lg shadow-cyan-500/25 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Let's Talk</span>
              </a>
            </MagneticButton>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/[0.05] border border-white/10 text-text-primary hover:text-white transition-colors"
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
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-28 pb-10 px-6"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-4"
            >
              <p className="text-xs font-mono uppercase text-cyan-400 tracking-widest mb-2">
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
                  className="text-2xl font-display font-bold text-white hover:text-cyan-400 transition-colors flex items-center justify-between border-b border-white/5 pb-3"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono text-text-muted">0{idx + 1}</span>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-3 pt-6 border-t border-white/10"
            >
              <a
                href="/assets/resume.pdf"
                download="Muhammad_Abdullah_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-xl border border-white/15 bg-white/[0.04] text-white text-center font-mono text-sm uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-center font-mono font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25"
              >
                <Sparkles className="w-4 h-4" />
                <span>Let's Build Together</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
