import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Github,
  CheckCircle2,
  Database,
  Cpu,
  Shield,
  Layers,
} from "lucide-react";
import type { Project } from "../data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0B0C0A]/85 backdrop-blur-xl"
        />

        {/* Modal Window with 3D Depth */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 25 }}
          transition={{ type: "spring", damping: 25, stiffness: 320 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#121310] border border-[#5E9BD9]/30 p-6 sm:p-10 shadow-3d-card z-10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-2xl bg-[#181A15] border border-[#5E9BD9]/20 text-[#B8C4D4] hover:text-[#E8EEF6] hover:border-[#5E9BD9]/50 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-mono text-[#5E9BD9] bg-[#5E9BD9]/10 px-3 py-1 rounded-full border border-[#5E9BD9]/25">
              Project {project.number}
            </span>
            <span className="text-xs font-mono text-[#7E8C9F]">
              {project.category}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-[#E8EEF6] mb-2 leading-tight">
            {project.title}
          </h2>
          <p className="text-base sm:text-lg text-[#5E9BD9] font-mono mb-6">
            {project.tagline}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pb-6 border-b border-[#5E9BD9]/15 mb-8">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d-blue inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider font-bold"
            >
              <Github className="w-4 h-4 text-[#121310]" />
              <span>GitHub Repository</span>
            </a>
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-6 text-[#B8C4D4] leading-relaxed">
            <div>
              <h3 className="text-sm font-mono uppercase text-[#E8EEF6] tracking-wider mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#5E9BD9]" />
                Comprehensive Overview
              </h3>
              <p className="text-base text-[#B8C4D4]">
                {project.detailedDescription}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-mono uppercase text-[#E8EEF6] tracking-wider mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#84B6E8]" />
                Technical Implementation & Engineering Details
              </h3>
              <p className="text-base text-[#B8C4D4]">
                {project.technicalImplementation}
              </p>
            </div>
          </div>

          {/* Architecture Highlights */}
          <div className="my-8 p-6 rounded-3xl bg-[#181A15] border border-[#5E9BD9]/20 shadow-inner">
            <h3 className="text-sm font-mono uppercase text-[#5E9BD9] tracking-wider mb-4 flex items-center gap-2">
              <Database className="w-4 h-4" />
              System Architecture & Key Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.architecturePoints.map((pt, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-[#0B0C0A] border border-[#5E9BD9]/15 flex flex-col">
                  <span className="text-[11px] font-mono text-[#7E8C9F]">{pt.label}</span>
                  <span className="text-sm font-mono text-[#E8EEF6] font-medium mt-0.5">{pt.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="mb-8">
            <h3 className="text-sm font-mono uppercase text-[#E8EEF6] tracking-wider mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#5E9BD9]" />
              Key Features & Deliverables
            </h3>
            <div className="space-y-2.5">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-[#B8C4D4]">
                  <CheckCircle2 className="w-4 h-4 text-[#5E9BD9] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used Grid */}
          <div>
            <h3 className="text-sm font-mono uppercase text-[#7E8C9F] tracking-wider mb-3">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-xl text-xs font-mono bg-[#181A15] border border-[#5E9BD9]/20 text-[#E8EEF6]"
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
