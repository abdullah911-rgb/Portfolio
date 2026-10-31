import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Layers, Bot, Layout } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";

const filterTabs = [
  { id: "all", label: "All Projects", count: 6, icon: <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> },
  { id: "fullstack", label: "Full-Stack Platforms", count: 3, icon: <Layers className="w-3.5 h-3.5 text-blue-400" /> },
  { id: "ai", label: "AI & Computer Vision", count: 1, icon: <Bot className="w-3.5 h-3.5 text-emerald-400" /> },
  { id: "interactive", label: "Productivity & Interactive", count: 2, icon: <Layout className="w-3.5 h-3.5 text-purple-400" /> },
];

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "fullstack") {
      return ["swift-lms", "nexttripy", "swift-parcel"].includes(project.id);
    }
    if (selectedFilter === "ai") {
      return project.id === "cookify";
    }
    if (selectedFilter === "interactive") {
      return ["zenith", "cybermatch"].includes(project.id);
    }
    return true;
  });

  return (
    <section id="projects" className="py-24 md:py-36 relative overflow-hidden bg-[#0C0C0C]">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cyan-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 04. FEATURED PROJECTS"
          title="Engineered For Real-World Scale &"
          highlight="Intelligent User Experiences"
          description="A curated catalog of 6 production-grade systems spanning AI computer vision, dual-market rental platforms, EdTech LMS, and logistics operations."
        />

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                selectedFilter === tab.id
                  ? "bg-cyan-400 text-black font-semibold shadow-lg shadow-cyan-400/20"
                  : "bg-white/[0.03] text-text-secondary border border-white/10 hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                selectedFilter === tab.id ? "bg-black/20 text-black" : "bg-white/10 text-text-muted"
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Sticky Stacking Cards Container */}
        <div className="relative pt-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedFilter}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onOpenDetails={(proj) => setSelectedProject(proj)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
