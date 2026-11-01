import React from "react";
import {
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
        <div className="w-full h-full p-5 sm:p-7 rounded-3xl bg-[#0B0C0A] border border-[#5E9BD9]/25 flex flex-col justify-between overflow-hidden relative group shadow-inner">
          <div className="flex items-center justify-between pb-4 border-b border-[#5E9BD9]/15">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#5E9BD9]" />
              <span className="text-xs font-mono text-[#5E9BD9] ml-2">
                cookify.ai.app (Flutter + FastAPI)
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#5E9BD9]/15 text-[#5E9BD9] border border-[#5E9BD9]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5E9BD9] animate-pulse" />
              YOLOv8 Active
            </span>
          </div>

          <div className="space-y-3 my-3">
            {/* Vision Scanner Simulation */}
            <div className="p-3.5 rounded-2xl bg-[#181A15] border border-[#5E9BD9]/25 relative overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-[#E8EEF6] flex items-center gap-1.5">
                  <Bot className="w-4 h-4 text-[#5E9BD9]" />
                  YOLOv8 Ingredient Recognition
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#5E9BD9]/20 text-[#5E9BD9]">
                  98.4% Confidence
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono bg-[#0B0C0A] text-[#E8EEF6] border border-[#5E9BD9]/30">
                  🍅 Tomato (x3)
                </span>
                <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono bg-[#0B0C0A] text-[#E8EEF6] border border-[#5E9BD9]/30">
                  🧄 Garlic (2 cloves)
                </span>
                <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono bg-[#0B0C0A] text-[#E8EEF6] border border-[#5E9BD9]/30">
                  🍗 Chicken Breast (250g)
                </span>
                <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono bg-[#0B0C0A] text-[#E8EEF6] border border-[#5E9BD9]/30">
                  🌿 Basil
                </span>
              </div>
            </div>

            {/* Nutrition & Fitness Goal */}
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-3 rounded-2xl bg-[#181A15] border border-[#5E9BD9]/15 flex items-center gap-2.5">
                <Flame className="w-4 h-4 text-[#5E9BD9] shrink-0" />
                <div>
                  <div className="text-[#E8EEF6] font-bold">480 kcal</div>
                  <div className="text-[10px] text-[#7E8C9F]">High Protein (38g)</div>
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-[#181A15] border border-[#5E9BD9]/15 flex items-center gap-2.5">
                <Bot className="w-4 h-4 text-[#84B6E8] shrink-0" />
                <div>
                  <div className="text-[#5E9BD9] font-bold">Grok AI Coach</div>
                  <div className="text-[10px] text-[#7E8C9F]">Weight Maint.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-[#5E9BD9]/15 flex items-center justify-between text-[11px] font-mono text-[#7E8C9F]">
            <span>Flutter • Dart • FastAPI</span>
            <span className="text-[#5E9BD9]">Roboflow Vision</span>
          </div>
        </div>
      );
    }

    // 02. Zenith — Ultimate Productivity Hub
    if (project.id === "zenith") {
      return (
        <div className="w-full h-full p-5 sm:p-7 rounded-3xl bg-[#0B0C0A] border border-[#5E9BD9]/25 flex flex-col justify-between overflow-hidden relative group shadow-inner">
          <div className="flex items-center justify-between pb-4 border-b border-[#5E9BD9]/15">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#5E9BD9]" />
              <span className="text-xs font-mono text-[#5E9BD9] ml-2">
                zenith-workspace.io
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#5E9BD9]/15 text-[#5E9BD9] border border-[#5E9BD9]/30">
              <Volume2 className="w-3 h-3" />
              Web Audio Synthesizer
            </span>
          </div>

          <div className="space-y-3 my-3">
            {/* Natural language parser prompt */}
            <div className="p-3 rounded-2xl bg-[#181A15] border border-[#5E9BD9]/25 text-xs font-mono">
              <div className="text-[10px] text-[#5E9BD9] mb-1">
                Natural Language Task Compiler:
              </div>
              <div className="text-[#E8EEF6]">
                &gt; "Complete Q4 architectural review tomorrow #eng !p1"
              </div>
            </div>

            {/* Pomodoro Timer Preview */}
            <div className="p-3.5 rounded-2xl bg-[#181A15] border border-[#5E9BD9]/15 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#5E9BD9] animate-spin-slow" />
                <div>
                  <div className="text-base font-bold font-mono text-[#E8EEF6]">25:00</div>
                  <div className="text-[10px] font-mono text-[#7E8C9F]">Deep Work Session</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#5E9BD9] animate-pulse" />
                <span className="text-[10px] font-mono text-[#5E9BD9]">Synthesizing Sine Tone</span>
              </div>
            </div>

            {/* Subtask checklist */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#B8C4D4] px-1">
              <CheckSquare className="w-4 h-4 text-[#5E9BD9]" />
              <span>Chart.js Analytics Sync: 100% Client-Side LocalStorage</span>
            </div>
          </div>

          <div className="pt-3 border-t border-[#5E9BD9]/15 flex items-center justify-between text-[11px] font-mono text-[#7E8C9F]">
            <span>Chart.js • Web Audio API</span>
            <span className="text-[#5E9BD9]">Vanilla ES6+</span>
          </div>
        </div>
      );
    }

    // 03. CyberMatch — Neural Memory Matrix
    if (project.id === "cybermatch") {
      return (
        <div className="w-full h-full p-5 sm:p-7 rounded-3xl bg-[#0B0C0A] border border-[#5E9BD9]/25 flex flex-col justify-between overflow-hidden relative group shadow-inner">
          <div className="flex items-center justify-between pb-4 border-b border-[#5E9BD9]/15">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#5E9BD9]" />
              <span className="text-xs font-mono text-[#5E9BD9] ml-2">
                cybermatch-arcade.matrix
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#5E9BD9]/15 text-[#5E9BD9] border border-[#5E9BD9]/30">
              <Gamepad2 className="w-3 h-3" />
              60 FPS Dynamic Engine
            </span>
          </div>

          {/* Interactive Memory Grid Mockup */}
          <div className="my-3">
            <div className="grid grid-cols-4 gap-2 mb-3">
              {[
                { emoji: "⚡", active: true },
                { emoji: "🤖", active: true },
                { emoji: "🧠", active: false },
                { emoji: "🚀", active: false },
                { emoji: "🔮", active: false },
                { emoji: "⚡", active: true },
                { emoji: "💎", active: false },
                { emoji: "🤖", active: true },
              ].map((card, i) => (
                <div
                  key={i}
                  className={`h-12 rounded-xl flex items-center justify-center font-bold text-lg border transition-all ${
                    card.active
                      ? "bg-[#181A15] border-[#5E9BD9] shadow-[0_0_15px_rgba(94,155,217,0.3)] text-[#E8EEF6]"
                      : "bg-[#0B0C0A] border-white/5 text-transparent"
                  }`}
                >
                  {card.active ? card.emoji : "?"}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between p-2 rounded-xl bg-[#181A15] border border-[#5E9BD9]/15 text-xs font-mono">
              <span className="text-[#5E9BD9] flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                Streak: 4x Multiplier
              </span>
              <span className="text-[#E8EEF6] flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5 text-[#5E9BD9]" />
                Score: 2,480 pts
              </span>
            </div>
          </div>

          <div className="pt-3 border-t border-[#5E9BD9]/15 flex items-center justify-between text-[11px] font-mono text-[#7E8C9F]">
            <span>Web Audio Oscillator Synth</span>
            <span className="text-[#5E9BD9]">Procedural Sound FX</span>
          </div>
        </div>
      );
    }

    // 04. Swift Institute LMS
    if (project.id === "swift-lms") {
      return (
        <div className="w-full h-full p-5 sm:p-7 rounded-3xl bg-[#0B0C0A] border border-[#5E9BD9]/25 flex flex-col justify-between overflow-hidden relative group shadow-inner">
          <div className="flex items-center justify-between pb-4 border-b border-[#5E9BD9]/15">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#5E9BD9]" />
              <span className="text-xs font-mono text-[#5E9BD9] ml-2">
                lms.swift-institute.edu
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#5E9BD9]/15 text-[#5E9BD9] border border-[#5E9BD9]/30">
              <ShieldCheck className="w-3 h-3" />
              Multi-Role RBAC Active
            </span>
          </div>

          <div className="space-y-3 my-3">
            {/* Live Class Indicator */}
            <div className="p-3.5 rounded-2xl bg-[#181A15] border border-[#5E9BD9]/25 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#5E9BD9]/20 border border-[#5E9BD9]/30 flex items-center justify-center">
                  <Video className="w-4 h-4 text-[#5E9BD9]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#E8EEF6]">Live Zoom Classroom</div>
                  <div className="text-[10px] font-mono text-[#7E8C9F]">Web SDK Attendance Verified</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#5E9BD9]/20 text-[#5E9BD9]">
                In Session
              </span>
            </div>

            {/* Certificate Verification Simulation */}
            <div className="p-3.5 rounded-2xl bg-[#181A15] border border-[#5E9BD9]/15 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2.5">
                <QrCode className="w-4 h-4 text-[#84B6E8]" />
                <span className="text-[#B8C4D4]">Cert #SWIFT-2024-8842</span>
              </div>
              <span className="text-[#5E9BD9] font-bold">QR Verified</span>
            </div>

            {/* Role indicator */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#7E8C9F] px-1">
              <Users className="w-3.5 h-3.5 text-[#5E9BD9]" />
              <span>Dedicated Portals: Student · Instructor · Admin</span>
            </div>
          </div>

          <div className="pt-3 border-t border-[#5E9BD9]/15 flex items-center justify-between text-[11px] font-mono text-[#7E8C9F]">
            <span>PostgreSQL • Prisma • Node.js</span>
            <span className="text-[#5E9BD9]">Zoom Meeting SDK</span>
          </div>
        </div>
      );
    }

    // 05. NextTripy
    if (project.id === "nexttripy") {
      return (
        <div className="w-full h-full p-5 sm:p-7 rounded-3xl bg-[#0B0C0A] border border-[#5E9BD9]/25 flex flex-col justify-between overflow-hidden relative group shadow-inner">
          <div className="flex items-center justify-between pb-4 border-b border-[#5E9BD9]/15">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#5E9BD9]" />
              <span className="text-xs font-mono text-[#5E9BD9] ml-2">
                nexttripy.com (PK & KSA)
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#5E9BD9]/15 text-[#5E9BD9] border border-[#5E9BD9]/30">
              <Navigation className="w-3 h-3" />
              Next.js 15 App Router
            </span>
          </div>

          <div className="space-y-3 my-3">
            {/* Dual Market Options */}
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-3 rounded-2xl bg-[#181A15] border border-[#5E9BD9]/15 flex items-center gap-2.5">
                <Car className="w-4 h-4 text-[#5E9BD9]" />
                <div>
                  <div className="text-[#E8EEF6] font-bold">Luxury Fleet</div>
                  <div className="text-[10px] text-[#7E8C9F]">Sedan · SUV · 4x4</div>
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-[#181A15] border border-[#5E9BD9]/15 flex items-center gap-2.5">
                <Hotel className="w-4 h-4 text-[#84B6E8]" />
                <div>
                  <div className="text-[#E8EEF6] font-bold">Suites & Hotels</div>
                  <div className="text-[10px] text-[#7E8C9F]">PK & KSA Booking</div>
                </div>
              </div>
            </div>

            {/* WhatsApp Integration Preview */}
            <div className="p-3.5 rounded-2xl bg-[#181A15] border border-[#5E9BD9]/25 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#5E9BD9]" />
                <span className="text-xs font-mono text-[#E8EEF6]">Instant WhatsApp Booking</span>
              </div>
              <span className="text-[10px] font-mono bg-[#5E9BD9]/20 text-[#5E9BD9] px-2 py-0.5 rounded">
                Direct Sync
              </span>
            </div>

            <div className="text-xs font-mono text-[#7E8C9F] px-1">
              Prisma + Neon Serverless PostgreSQL Backend
            </div>
          </div>

          <div className="pt-3 border-t border-[#5E9BD9]/15 flex items-center justify-between text-[11px] font-mono text-[#7E8C9F]">
            <span>Next.js 15 • TypeScript • React 19</span>
            <span className="text-[#5E9BD9]">Vercel Edge</span>
          </div>
        </div>
      );
    }

    // 06. Swift Parcel
    return (
      <div className="w-full h-full p-5 sm:p-7 rounded-3xl bg-[#0B0C0A] border border-[#5E9BD9]/25 flex flex-col justify-between overflow-hidden relative group shadow-inner">
        <div className="flex items-center justify-between pb-4 border-b border-[#5E9BD9]/15">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#5E9BD9]" />
            <span className="text-xs font-mono text-[#5E9BD9] ml-2">
              swift-parcel.dispatch.net
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#5E9BD9]/15 text-[#5E9BD9] border border-[#5E9BD9]/30">
            <Package className="w-3 h-3" />
            MERN Operations
          </span>
        </div>

        <div className="space-y-3 my-3">
          {/* Tracking Pipeline Simulation */}
          <div className="p-3.5 rounded-2xl bg-[#181A15] border border-[#5E9BD9]/25">
            <div className="flex items-center justify-between text-xs font-mono mb-2">
              <span className="text-[#5E9BD9] font-bold">Tracking #SP-80419-LHE</span>
              <span className="text-[10px] text-[#84B6E8] bg-[#5E9BD9]/15 px-2 py-0.5 rounded">
                Out for Delivery
              </span>
            </div>
            <div className="w-full bg-[#0B0C0A] h-2 rounded-full overflow-hidden border border-white/5">
              <div className="bg-gradient-to-r from-[#5E9BD9] to-[#E8EEF6] h-full w-3/4 rounded-full" />
            </div>
          </div>

          {/* Tri-Portal Separation */}
          <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
            <div className="p-2 rounded-xl bg-[#181A15] border border-[#5E9BD9]/15 text-[#E8EEF6]">
              Customer
            </div>
            <div className="p-2 rounded-xl bg-[#181A15] border border-[#5E9BD9]/15 text-[#E8EEF6]">
              Admin
            </div>
            <div className="p-2 rounded-xl bg-[#181A15] border border-[#5E9BD9]/15 text-[#E8EEF6]">
              Courier
            </div>
          </div>

          <div className="text-xs font-mono text-[#7E8C9F] px-1">
            Real-time In-App Client-Admin Messaging Channel
          </div>
        </div>

        <div className="pt-3 border-t border-[#5E9BD9]/15 flex items-center justify-between text-[11px] font-mono text-[#7E8C9F]">
          <span>MongoDB • Express • React • Node</span>
          <span className="text-[#5E9BD9]">RESTful Pipeline</span>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        top: `calc(90px + ${index * 22}px)`,
      }}
      className="sticky mb-12 sm:mb-16 transform-gpu"
    >
      <div className="p-6 sm:p-9 md:p-11 rounded-3xl glass-card border border-[#5E9BD9]/25 shadow-3d-card hover:border-[#5E9BD9]/55 transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group">
        {/* Left Side: Metadata & Architectural Summary */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full">
          <div>
            {/* Top row: Number & Domain badge */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl sm:text-4xl font-extrabold font-display text-[#5E9BD9]/40 group-hover:text-[#5E9BD9] transition-colors">
                {project.number}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-[#5E9BD9]/10 text-[#5E9BD9] border border-[#5E9BD9]/25 shadow-sm">
                {project.badge}
              </span>
              <span className="text-xs font-mono text-[#7E8C9F] hidden sm:inline">
                // {project.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-[#E8EEF6] group-hover:text-[#5E9BD9] transition-colors leading-tight">
              {project.title}
            </h3>

            {/* Tagline */}
            <p className="mt-2 text-sm sm:text-base font-mono text-[#84B6E8]">
              {project.tagline}
            </p>

            {/* Short Description */}
            <p className="mt-4 text-sm sm:text-base text-[#B8C4D4] leading-relaxed">
              {project.shortDescription}
            </p>

            {/* Highlights */}
            <div className="mt-5 space-y-2">
              {project.highlights.slice(0, 3).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E8EEF6]">
                  <CheckCircle2 className="w-4 h-4 text-[#5E9BD9] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-2 mt-6">
              {project.technologies.slice(0, 7).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-xl text-xs font-mono bg-[#181A15] border border-[#5E9BD9]/20 text-[#E8EEF6]"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 7 && (
                <span className="px-3 py-1 rounded-xl text-xs font-mono bg-[#181A15] border border-white/5 text-[#7E8C9F]">
                  +{project.technologies.length - 7} more
                </span>
              )}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 mt-8 pt-6 border-t border-[#5E9BD9]/15">
            <MagneticButton>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d-blue inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono font-bold text-xs uppercase tracking-wider"
              >
                <Github className="w-4 h-4 text-[#121310]" />
                <span>Source Code</span>
              </a>
            </MagneticButton>

            <button
              onClick={() => onOpenDetails(project)}
              className="btn-3d-outline inline-flex items-center gap-2 px-4 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider"
            >
              <Info className="w-4 h-4 text-[#5E9BD9]" />
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
