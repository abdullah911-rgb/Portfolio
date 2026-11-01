import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Layers, Bot, Layout } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";

const filterTabs = [
  { id: "all", label: "All Projects", count: 6, icon: <Sparkles className="w-3.5 h-3.5 text-[#B89B6F]" /> },
  { id: "fullstack", label: "Full-Stack Platforms", count: 3, icon: <Layers className="w-3.5 h-3.5 text-[#66726B]" /> },
  { id: "ai", label: "AI & Computer Vision", count: 1, icon: <Bot className="w-3.5 h-3.5 text-[#B89B6F]" /> },
  { id: "interactive", label: "Productivity & Interactive", count: 2, icon: <Layout className="w-3.5 h-3.5 text-[#66726B]" /> },
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
    <section id="projects" className="py-24 md:py-36 relative overflow-hidden bg-[#141413]/40">
      {/* 3D Dynamic Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#B89B6F]/8 blur-[160px] rounded-full pointer-events-none" />

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
                  ? "btn-3d-blue font-bold shadow-gold-button"
                  : "bg-[#141413] text-[#BDBBB2] border border-[#B89B6F]/20 hover:text-[#E2D2B8] hover:border-[#B89B6F]/40"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                selectedFilter === tab.id ? "bg-[#0B0D06]/20 text-[#0B0D06]" : "bg-white/10 text-[#AFACA1]"
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
