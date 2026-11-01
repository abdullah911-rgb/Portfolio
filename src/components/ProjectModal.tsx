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
          className="fixed inset-0 bg-[#060701]/85 backdrop-blur-xl"
        />

        {/* Modal Window with 3D Depth */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 25 }}
          transition={{ type: "spring", damping: 25, stiffness: 320 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0B0D06] border border-[#B89B6F]/30 p-6 sm:p-10 shadow-3d-card z-10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-2xl bg-[#141413] border border-[#B89B6F]/20 text-[#BDBBB2] hover:text-[#E2D2B8] hover:border-[#B89B6F]/50 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-mono text-[#B89B6F] bg-[#B89B6F]/10 px-3 py-1 rounded-full border border-[#B89B6F]/25">
              Project {project.number}
            </span>
            <span className="text-xs font-mono text-[#AFACA1]">
              {project.category}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-[#E2D2B8] mb-2 leading-tight">
            {project.title}
          </h2>
          <p className="text-base sm:text-lg text-[#B89B6F] font-mono mb-6">
            {project.tagline}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pb-6 border-b border-[#B89B6F]/15 mb-8">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d-blue inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider font-bold"
            >
              <Github className="w-4 h-4 text-[#0B0D06]" />
              <span>GitHub Repository</span>
            </a>
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-6 text-[#BDBBB2] leading-relaxed">
            <div>
              <h3 className="text-sm font-mono uppercase text-[#E2D2B8] tracking-wider mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#B89B6F]" />
                Comprehensive Overview
              </h3>
              <p className="text-base text-[#BDBBB2]">
                {project.detailedDescription}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-mono uppercase text-[#E2D2B8] tracking-wider mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#66726B]" />
                Technical Implementation & Engineering Details
              </h3>
              <p className="text-base text-[#BDBBB2]">
                {project.technicalImplementation}
              </p>
            </div>
          </div>

          {/* Architecture Highlights */}
          <div className="my-8 p-6 rounded-3xl bg-[#141413] border border-[#B89B6F]/20 shadow-inner">
            <h3 className="text-sm font-mono uppercase text-[#B89B6F] tracking-wider mb-4 flex items-center gap-2">
              <Database className="w-4 h-4" />
              System Architecture & Key Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.architecturePoints.map((pt, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-[#060701] border border-[#B89B6F]/15 flex flex-col">
                  <span className="text-[11px] font-mono text-[#AFACA1]">{pt.label}</span>
                  <span className="text-sm font-mono text-[#E2D2B8] font-medium mt-0.5">{pt.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="mb-8">
            <h3 className="text-sm font-mono uppercase text-[#E2D2B8] tracking-wider mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#B89B6F]" />
              Key Features & Deliverables
            </h3>
            <div className="space-y-2.5">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-[#BDBBB2]">
                  <CheckCircle2 className="w-4 h-4 text-[#B89B6F] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used Grid */}
          <div>
            <h3 className="text-sm font-mono uppercase text-[#AFACA1] tracking-wider mb-3">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-xl text-xs font-mono bg-[#141413] border border-[#B89B6F]/20 text-[#E2D2B8]"
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
