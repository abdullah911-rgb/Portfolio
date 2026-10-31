import React from "react";
import {
  ExternalLink,
  Github,
  Info,
  CheckCircle2,
  Video,
  ShieldCheck,
  Car,
  Hotel,
  MessageSquare,
  Package,
  Navigation,
  Bot,
  Flame,
  Clock,
  CheckSquare,
  Volume2,
  Gamepad2,
  Zap,
  Trophy,
  QrCode,
  Users,
} from "lucide-react";
import type { Project } from "../data/projects";
import { MagneticButton } from "./MagneticButton";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onOpenDetails,
}) => {
  // Render bespoke custom visual mockup according to project
  const renderVisual = () => {
    // 01. Cookify — AI Smart Recipe & Fitness App
    if (project.id === "cookify") {
      return (
        <div className="w-full h-full p-5 sm:p-7 rounded-2xl bg-[#090A0E] border border-white/10 flex flex-col justify-between overflow-hidden relative group">
          <div className="flex items-center justify-between pb-4 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono text-emerald-400 ml-2">
                cookify.ai.app (Flutter + FastAPI)
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              YOLOv8 Active
            </span>
          </div>

          <div className="space-y-3 my-3">
            {/* Vision Scanner Simulation */}
            <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 relative overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-emerald-300 flex items-center gap-1.5">
                  <Bot className="w-4 h-4 text-emerald-400" />
                  YOLOv8 Ingredient Recognition
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                  98.4% Confidence
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-black/40 text-emerald-300 border border-emerald-500/30">
                  🍅 Tomato (x3)
                </span>
                <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-black/40 text-emerald-300 border border-emerald-500/30">
                  🍗 Chicken (250g)
                </span>
                <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-black/40 text-emerald-300 border border-emerald-500/30">
                  🌿 Basil
                </span>
              </div>
            </div>

            {/* Nutrition & Fitness Goal */}
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2.5">
                <Flame className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <div className="text-white font-bold">480 kcal</div>
                  <div className="text-[10px] text-text-muted">High Protein (38g)</div>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2.5">
                <Bot className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-cyan-300 font-bold">Grok AI Coach</div>
                  <div className="text-[10px] text-text-muted">Weight Maint.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-text-muted">
            <span>Flutter • Dart • FastAPI</span>
            <span>Roboflow Vision</span>
          </div>
        </div>
      );
    }

    // 02. Zenith — Ultimate Productivity Hub
    if (project.id === "zenith") {
      return (
        <div className="w-full h-full p-5 sm:p-7 rounded-2xl bg-[#090A0E] border border-white/10 flex flex-col justify-between overflow-hidden relative group">
          <div className="flex items-center justify-between pb-4 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono text-purple-400 ml-2">
                zenith-workspace.io
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Volume2 className="w-3 h-3" />
              Web Audio Synthesizer
            </span>
          </div>

          <div className="space-y-3 my-3">
            {/* Natural language parser prompt */}
            <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs font-mono">
              <div className="text-[10px] text-purple-300 mb-1">
                Natural Language Task Compiler:
              </div>
              <div className="text-white">
                &gt; "Complete Q4 architectural review tomorrow #eng !p1"
              </div>
            </div>

            {/* Pomodoro timer + Subtask checklist */}
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-400 shrink-0" />
                <div>
                  <div className="text-white font-bold">25:00 Focus</div>
                  <div className="text-[10px] text-emerald-400">Pomodoro Active</div>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-white font-bold">Chart.js Stats</div>
                  <div className="text-[10px] text-text-muted">5 Visual Themes</div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-text-muted">
            <span>HTML5 • CSS3 • JavaScript</span>
            <span>JSON Import/Export</span>
          </div>
        </div>
      );
    }

    // 03. CyberMatch — Neural Memory Matrix
    if (project.id === "cybermatch") {
      return (
        <div className="w-full h-full p-5 sm:p-7 rounded-2xl bg-[#090A0E] border border-white/10 flex flex-col justify-between overflow-hidden relative group">
          <div className="flex items-center justify-between pb-4 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono text-pink-400 ml-2">
                cybermatch-arcade.glitch
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20">
              <Gamepad2 className="w-3 h-3" />
              Neon Matrix
            </span>
          </div>

          <div className="space-y-3 my-3">
            {/* 4x4 Grid preview */}
            <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-between">
              <div className="grid grid-cols-4 gap-1.5 text-center text-sm font-mono">
                <span className="w-8 h-8 rounded bg-black/60 border border-pink-400/50 flex items-center justify-center">
                  ⚡
                </span>
                <span className="w-8 h-8 rounded bg-black/60 border border-pink-400/50 flex items-center justify-center">
                  👾
                </span>
                <span className="w-8 h-8 rounded bg-black/60 border border-cyan-400/50 flex items-center justify-center text-cyan-300">
                  🧠
                </span>
                <span className="w-8 h-8 rounded bg-black/60 border border-cyan-400/50 flex items-center justify-center text-cyan-300">
                  🧠
                </span>
              </div>
              <div className="flex flex-col items-end text-xs font-mono">
                <span className="text-pink-400 font-bold flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-yellow-400" />
                  Combo x4
                </span>
                <span className="text-emerald-400 text-[11px]">+850 PTS</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2">
                <Trophy className="w-3.5 h-3.5 text-yellow-400" />
                <span className="text-text-secondary truncate">LocalStorage Sync</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2">
                <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-text-secondary truncate">Synthesized Audio</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-text-muted">
            <span>Vanilla JS • Web Audio</span>
            <span>4 Themes & 3 Grids</span>
          </div>
        </div>
      );
    }

    // 04. Swift Institute LMS
    if (project.id === "swift-lms") {
      return (
        <div className="w-full h-full p-5 sm:p-7 rounded-2xl bg-[#090A0E] border border-white/10 flex flex-col justify-between overflow-hidden relative group">
          <div className="flex items-center justify-between pb-4 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono text-cyan-400 ml-2">
                lms-swift.vercel.app
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live Deployment
            </span>
          </div>

          <div className="space-y-3 my-3">
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Video className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-white font-medium">
                    Zoom Meeting SDK
                  </div>
                  <div className="text-[11px] font-mono text-text-muted">
                    Attendance Tracking & Live Classes
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-400/10 text-cyan-400">
                Connected
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-text-secondary truncate">OTP Email Auth</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2">
                <QrCode className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-text-secondary truncate">QR Verification</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-text-muted">
            <span>React • Node.js • Prisma</span>
            <span>PostgreSQL • Nodemailer</span>
          </div>
        </div>
      );
    }

    // 05. NextTripy
    if (project.id === "nexttripy") {
      return (
        <div className="w-full h-full p-5 sm:p-7 rounded-2xl bg-[#090A0E] border border-white/10 flex flex-col justify-between overflow-hidden relative group">
          <div className="flex items-center justify-between pb-4 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono text-blue-400 ml-2">
                nexttripy.com
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Pakistan & KSA
            </span>
          </div>

          <div className="space-y-3 my-3">
            <div className="grid grid-cols-2 gap-2">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2.5">
                <Car className="w-4 h-4 text-blue-400 shrink-0" />
                <div>
                  <div className="text-xs font-mono text-white font-medium">Car Fleet</div>
                  <div className="text-[10px] font-mono text-text-muted">Self & Chauffeur</div>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2.5">
                <Hotel className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-xs font-mono text-white font-medium">Hotels</div>
                  <div className="text-[10px] font-mono text-text-muted">Verified Suites</div>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-300">
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Inquiry</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                Direct Sync
              </span>
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-text-muted">
            <span>Next.js 15 • TypeScript</span>
            <span>Neon Postgres • JWT</span>
          </div>
        </div>
      );
    }

    // 06. Swift Parcel
    return (
      <div className="w-full h-full p-5 sm:p-7 rounded-2xl bg-[#090A0E] border border-white/10 flex flex-col justify-between overflow-hidden relative group">
        <div className="flex items-center justify-between pb-4 border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-xs font-mono text-cyan-400 ml-2">
              swift-parcel.sys (MERN Stack)
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Package className="w-3 h-3" />
            Multi-Role Portals
          </span>
        </div>

        <div className="space-y-3 my-3">
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="flex items-center justify-between text-xs font-mono mb-2">
              <span className="text-text-muted">Waybill: #SP-8942-PK</span>
              <span className="text-emerald-400">In Transit</span>
            </div>
            <div className="relative flex items-center justify-between mt-3 text-[10px] font-mono text-text-secondary">
              <div className="flex flex-col items-center">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mb-1" />
                <span>Customer</span>
              </div>
              <div className="h-0.5 flex-1 bg-emerald-400/40 mx-2" />
              <div className="flex flex-col items-center">
                <span className="w-2 h-2 rounded-full bg-cyan-400 mb-1" />
                <span>Admin</span>
              </div>
              <div className="h-0.5 flex-1 bg-white/20 mx-2" />
              <div className="flex flex-col items-center">
                <span className="w-2 h-2 rounded-full bg-white/30 mb-1" />
                <span>Courier</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2">
              <Navigation className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-text-secondary truncate">Delivery Routing</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-text-secondary truncate">Admin Support</span>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-text-muted">
          <span>MongoDB • Express • React</span>
          <span>Node.js RESTful API</span>
        </div>
      </div>
    );
  };

  return (
    <div
      className="sticky top-28 rounded-3xl glass-card border border-white/15 p-6 sm:p-10 shadow-2xl mb-12 transition-all duration-300"
      style={{
        zIndex: index + 10,
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Side: Information */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            {/* Top row: Number & Category */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-4xl sm:text-5xl font-extrabold font-display text-white/20">
                {project.number}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10 text-cyan-400">
                {project.category}
              </span>
              {project.badge && (
                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {project.badge}
                </span>
              )}
            </div>

            {/* Title & Tagline */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white tracking-tight">
              {project.title}
            </h3>
            <p className="mt-1 text-sm sm:text-base font-mono text-cyan-300 font-medium">
              {project.tagline}
            </p>

            {/* Short Description */}
            <p className="mt-4 text-sm sm:text-base text-text-secondary leading-relaxed">
              {project.shortDescription}
            </p>

            {/* Highlights */}
            <div className="mt-5 space-y-2">
              {project.highlights.slice(0, 3).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-2 mt-6">
              {project.technologies.slice(0, 7).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.03] border border-white/10 text-text-secondary"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 7 && (
                <span className="px-2 py-1 rounded-lg text-xs font-mono bg-white/[0.02] text-text-muted">
                  +{project.technologies.length - 7} more
                </span>
              )}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 mt-8 pt-6 border-t border-white/10">
            {project.liveUrl && (
              <MagneticButton>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-400 text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 shadow-lg shadow-cyan-400/20 transition-all"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </MagneticButton>
            )}

            <MagneticButton>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.04] border border-white/15 text-white font-mono text-xs uppercase tracking-wider hover:bg-white/[0.1] hover:border-cyan-400/40 transition-all"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>Source Code</span>
              </a>
            </MagneticButton>

            <button
              onClick={() => onOpenDetails(project)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.03] border border-white/10 text-text-secondary hover:text-white hover:border-white/20 font-mono text-xs uppercase tracking-wider transition-all"
            >
              <Info className="w-4 h-4 text-text-muted" />
              <span>Architecture Specs</span>
            </button>
          </div>
        </div>

        {/* Right Side: Interactive UI Showcase Mockup */}
        <div className="lg:col-span-5 h-72 sm:h-80 md:h-96">
          {renderVisual()}
        </div>
      </div>
    </div>
  );
};
