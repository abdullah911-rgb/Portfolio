import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Layers, Bot, Layout } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";

const filterTabs = [
  { id: "all", label: "All Projects", count: 6, icon: <Sparkles className="w-3.5 h-3.5 text-[#5E9BD9]" /> },
  { id: "fullstack", label: "Full-Stack Platforms", count: 3, icon: <Layers className="w-3.5 h-3.5 text-[#84B6E8]" /> },
  { id: "ai", label: "AI & Computer Vision", count: 1, icon: <Bot className="w-3.5 h-3.5 text-[#5E9BD9]" /> },
  { id: "interactive", label: "Productivity & Interactive", count: 2, icon: <Layout className="w-3.5 h-3.5 text-[#84B6E8]" /> },
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
    <section id="projects" className="py-24 md:py-36 relative overflow-hidden bg-[#181A15]/40">
      {/* 3D Dynamic Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#5E9BD9]/8 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="// 04. FEATURED PROJECTS"
          title="Engineered For Real-World Scale &"
          highlight="Intelligent User Experiences"
          description="A curated catalog of 6 production-grade systems spanning AI computer vision, dual-market rental platforms, EdTech LMS, and logistics operations."
        />

        {/* 3D Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.03, translateY: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedFilter(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                selectedFilter === tab.id
                  ? "btn-3d-blue font-bold shadow-blue-button"
                  : "bg-[#181A15] text-[#B8C4D4] border border-[#5E9BD9]/20 hover:text-[#E8EEF6] hover:border-[#5E9BD9]/40"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                selectedFilter === tab.id ? "bg-[#121310]/20 text-[#121310]" : "bg-white/10 text-[#7E8C9F]"
              }`}>
                {tab.count}
              </span>
            </motion.button>
          ))}
        </div>

        {/* 3D Stacking Cards Container */}
        <div className="relative pt-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
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
