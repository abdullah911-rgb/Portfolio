import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2, Cpu, Database, Shield, Layers } from "lucide-react";
import type { Project } from "../data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl glass-card border border-white/20 p-6 sm:p-10 shadow-2xl z-10 bg-[#0E1015]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.15] text-text-secondary hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono text-cyan-400 text-sm font-semibold">
              PROJECT {project.number}
            </span>
            <span className="text-white/20">•</span>
            <span className="px-3 py-0.5 rounded-full text-xs font-mono bg-white/[0.05] border border-white/10 text-text-secondary">
              {project.category}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-2">
            {project.title}
          </h2>
          <p className="text-lg text-cyan-300 font-mono mb-6">
            {project.tagline}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pb-6 border-b border-white/10 mb-8">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-400 text-black font-mono font-semibold text-xs uppercase tracking-wider hover:bg-cyan-300 shadow-lg shadow-cyan-400/20 transition-all"
              >
                <span>Launch Live Platform</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] border border-white/15 text-white font-mono text-xs uppercase tracking-wider hover:bg-white/[0.12] hover:border-cyan-400/40 transition-all"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>GitHub Repository</span>
            </a>
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-6 text-text-secondary leading-relaxed">
            <div>
              <h3 className="text-sm font-mono uppercase text-white/90 tracking-wider mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                Comprehensive Overview
              </h3>
              <p className="text-base text-text-secondary">
                {project.detailedDescription}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-mono uppercase text-white/90 tracking-wider mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-400" />
                Technical Implementation & Engineering Details
              </h3>
              <p className="text-base text-text-secondary">
                {project.technicalImplementation}
              </p>
            </div>
          </div>

          {/* Architecture Highlights */}
          <div className="my-8 p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <h3 className="text-sm font-mono uppercase text-cyan-400 tracking-wider mb-4 flex items-center gap-2">
              <Database className="w-4 h-4" />
              System Architecture & Key Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.architecturePoints.map((pt, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-black/40 border border-white/5 flex flex-col">
                  <span className="text-[11px] font-mono text-text-muted">{pt.label}</span>
                  <span className="text-sm font-mono text-white font-medium mt-0.5">{pt.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="mb-8">
            <h3 className="text-sm font-mono uppercase text-white/90 tracking-wider mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              Key Features & Deliverables
            </h3>
            <div className="space-y-2.5">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-text-secondary">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h3 className="text-xs font-mono uppercase text-text-muted tracking-wider mb-3">
              Technologies & Frameworks Deployed
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-xl text-xs font-mono bg-white/[0.04] border border-white/10 text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
