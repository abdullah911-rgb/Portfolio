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
        <div className="w-full h-full p-5 sm:p-7 rounded-3xl bg-[#060701] border border-[#B89B6F]/25 flex flex-col justify-between overflow-hidden relative group shadow-inner">
          <div className="flex items-center justify-between pb-4 border-b border-[#B89B6F]/15">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#B89B6F]" />
              <span className="text-xs font-mono text-[#B89B6F] ml-2">
                cookify.ai.app (Flutter + FastAPI)
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#B89B6F]/15 text-[#B89B6F] border border-[#B89B6F]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B89B6F] animate-pulse" />
              YOLOv8 Active
            </span>
          </div>

          <div className="space-y-3 my-3">
            {/* Vision Scanner Simulation */}
            <div className="p-3.5 rounded-2xl bg-[#141413] border border-[#B89B6F]/25 relative overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-[#E2D2B8] flex items-center gap-1.5">
                  <Bot className="w-4 h-4 text-[#B89B6F]" />
                  YOLOv8 Ingredient Recognition
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#B89B6F]/20 text-[#B89B6F]">
                  98.4% Confidence
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono bg-[#060701] text-[#E2D2B8] border border-[#B89B6F]/30">
                  🍅 Tomato (x3)
                </span>
                <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono bg-[#060701] text-[#E2D2B8] border border-[#B89B6F]/30">
                  🧄 Garlic (2 cloves)
                </span>
                <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono bg-[#060701] text-[#E2D2B8] border border-[#B89B6F]/30">
                  🍗 Chicken Breast (250g)
                </span>
                <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono bg-[#060701] text-[#E2D2B8] border border-[#B89B6F]/30">
                  🌿 Basil
                </span>
              </div>
            </div>

            {/* Nutrition & Fitness Goal */}
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-3 rounded-2xl bg-[#141413] border border-[#B89B6F]/15 flex items-center gap-2.5">
                <Flame className="w-4 h-4 text-[#B89B6F] shrink-0" />
                <div>
                  <div className="text-[#E2D2B8] font-bold">480 kcal</div>
                  <div className="text-[10px] text-[#AFACA1]">High Protein (38g)</div>
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-[#141413] border border-[#B89B6F]/15 flex items-center gap-2.5">
                <Bot className="w-4 h-4 text-[#66726B] shrink-0" />
                <div>
                  <div className="text-[#B89B6F] font-bold">Grok AI Coach</div>
                  <div className="text-[10px] text-[#AFACA1]">Weight Maint.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-[#B89B6F]/15 flex items-center justify-between text-[11px] font-mono text-[#AFACA1]">
            <span>Flutter • Dart • FastAPI</span>
            <span className="text-[#B89B6F]">Roboflow Vision</span>
          </div>
        </div>
      );
    }

    // 02. Zenith — Ultimate Productivity Hub
    if (project.id === "zenith") {
      return (
        <div className="w-full h-full p-5 sm:p-7 rounded-3xl bg-[#060701] border border-[#B89B6F]/25 flex flex-col justify-between overflow-hidden relative group shadow-inner">
          <div className="flex items-center justify-between pb-4 border-b border-[#B89B6F]/15">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#B89B6F]" />
              <span className="text-xs font-mono text-[#B89B6F] ml-2">
                zenith-workspace.io
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#B89B6F]/15 text-[#B89B6F] border border-[#B89B6F]/30">
              <Volume2 className="w-3 h-3" />
              Web Audio Synthesizer
            </span>
          </div>

          <div className="space-y-3 my-3">
            {/* Natural language parser prompt */}
            <div className="p-3 rounded-2xl bg-[#141413] border border-[#B89B6F]/25 text-xs font-mono">
              <div className="text-[10px] text-[#B89B6F] mb-1">
                Natural Language Task Compiler:
              </div>
              <div className="text-[#E2D2B8]">
                &gt; "Complete Q4 architectural review tomorrow #eng !p1"
              </div>
            </div>

            {/* Pomodoro Timer Preview */}
            <div className="p-3.5 rounded-2xl bg-[#141413] border border-[#B89B6F]/15 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#B89B6F] animate-spin-slow" />
                <div>
                  <div className="text-base font-bold font-mono text-[#E2D2B8]">25:00</div>
                  <div className="text-[10px] font-mono text-[#AFACA1]">Deep Work Session</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B89B6F] animate-pulse" />
                <span className="text-[10px] font-mono text-[#B89B6F]">Synthesizing Sine Tone</span>
              </div>
            </div>

            {/* Subtask checklist */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#BDBBB2] px-1">
              <CheckSquare className="w-4 h-4 text-[#B89B6F]" />
              <span>Chart.js Analytics Sync: 100% Client-Side LocalStorage</span>
            </div>
          </div>

          <div className="pt-3 border-t border-[#B89B6F]/15 flex items-center justify-between text-[11px] font-mono text-[#AFACA1]">
            <span>Chart.js • Web Audio API</span>
            <span className="text-[#B89B6F]">Vanilla ES6+</span>
          </div>
        </div>
      );
    }

    // 03. CyberMatch — Neural Memory Matrix
    if (project.id === "cybermatch") {
      return (
        <div className="w-full h-full p-5 sm:p-7 rounded-3xl bg-[#060701] border border-[#B89B6F]/25 flex flex-col justify-between overflow-hidden relative group shadow-inner">
          <div className="flex items-center justify-between pb-4 border-b border-[#B89B6F]/15">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#B89B6F]" />
              <span className="text-xs font-mono text-[#B89B6F] ml-2">
                cybermatch-arcade.matrix
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#B89B6F]/15 text-[#B89B6F] border border-[#B89B6F]/30">
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
                      ? "bg-[#141413] border-[#B89B6F] shadow-[0_0_15px_rgba(184,155,111,0.3)] text-[#E2D2B8]"
                      : "bg-[#060701] border-white/5 text-transparent"
                  }`}
                >
                  {card.active ? card.emoji : "?"}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between p-2 rounded-xl bg-[#141413] border border-[#B89B6F]/15 text-xs font-mono">
              <span className="text-[#B89B6F] flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                Streak: 4x Multiplier
              </span>
              <span className="text-[#E2D2B8] flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5 text-[#B89B6F]" />
                Score: 2,480 pts
              </span>
            </div>
          </div>

          <div className="pt-3 border-t border-[#B89B6F]/15 flex items-center justify-between text-[11px] font-mono text-[#AFACA1]">
            <span>Web Audio Oscillator Synth</span>
            <span className="text-[#B89B6F]">Procedural Sound FX</span>
          </div>
        </div>
      );
    }

    // 04. Swift Institute LMS
    if (project.id === "swift-lms") {
      return (
        <div className="w-full h-full p-5 sm:p-7 rounded-3xl bg-[#060701] border border-[#B89B6F]/25 flex flex-col justify-between overflow-hidden relative group shadow-inner">
          <div className="flex items-center justify-between pb-4 border-b border-[#B89B6F]/15">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#B89B6F]" />
              <span className="text-xs font-mono text-[#B89B6F] ml-2">
                lms.swift-institute.edu
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#B89B6F]/15 text-[#B89B6F] border border-[#B89B6F]/30">
              <ShieldCheck className="w-3 h-3" />
              Multi-Role RBAC Active
            </span>
          </div>

          <div className="space-y-3 my-3">
            {/* Live Class Indicator */}
            <div className="p-3.5 rounded-2xl bg-[#141413] border border-[#B89B6F]/25 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#B89B6F]/20 border border-[#B89B6F]/30 flex items-center justify-center">
                  <Video className="w-4 h-4 text-[#B89B6F]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#E2D2B8]">Live Zoom Classroom</div>
                  <div className="text-[10px] font-mono text-[#AFACA1]">Web SDK Attendance Verified</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#B89B6F]/20 text-[#B89B6F]">
                In Session
              </span>
            </div>

            {/* Certificate Verification Simulation */}
            <div className="p-3.5 rounded-2xl bg-[#141413] border border-[#B89B6F]/15 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2.5">
                <QrCode className="w-4 h-4 text-[#66726B]" />
                <span className="text-[#BDBBB2]">Cert #SWIFT-2024-8842</span>
              </div>
              <span className="text-[#B89B6F] font-bold">QR Verified</span>
            </div>

            {/* Role indicator */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#AFACA1] px-1">
              <Users className="w-3.5 h-3.5 text-[#B89B6F]" />
              <span>Dedicated Portals: Student · Instructor · Admin</span>
            </div>
          </div>

          <div className="pt-3 border-t border-[#B89B6F]/15 flex items-center justify-between text-[11px] font-mono text-[#AFACA1]">
            <span>PostgreSQL • Prisma • Node.js</span>
            <span className="text-[#B89B6F]">Zoom Meeting SDK</span>
          </div>
        </div>
      );
    }

    // 05. NextTripy
    if (project.id === "nexttripy") {
      return (
        <div className="w-full h-full p-5 sm:p-7 rounded-3xl bg-[#060701] border border-[#B89B6F]/25 flex flex-col justify-between overflow-hidden relative group shadow-inner">
          <div className="flex items-center justify-between pb-4 border-b border-[#B89B6F]/15">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#B89B6F]" />
              <span className="text-xs font-mono text-[#B89B6F] ml-2">
                nexttripy.com (PK & KSA)
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#B89B6F]/15 text-[#B89B6F] border border-[#B89B6F]/30">
              <Navigation className="w-3 h-3" />
              Next.js 15 App Router
            </span>
          </div>

          <div className="space-y-3 my-3">
            {/* Dual Market Options */}
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-3 rounded-2xl bg-[#141413] border border-[#B89B6F]/15 flex items-center gap-2.5">
                <Car className="w-4 h-4 text-[#B89B6F]" />
                <div>
                  <div className="text-[#E2D2B8] font-bold">Luxury Fleet</div>
                  <div className="text-[10px] text-[#AFACA1]">Sedan · SUV · 4x4</div>
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-[#141413] border border-[#B89B6F]/15 flex items-center gap-2.5">
                <Hotel className="w-4 h-4 text-[#66726B]" />
                <div>
                  <div className="text-[#E2D2B8] font-bold">Suites & Hotels</div>
                  <div className="text-[10px] text-[#AFACA1]">PK & KSA Booking</div>
                </div>
              </div>
            </div>

            {/* WhatsApp Integration Preview */}
            <div className="p-3.5 rounded-2xl bg-[#141413] border border-[#B89B6F]/25 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#B89B6F]" />
                <span className="text-xs font-mono text-[#E2D2B8]">Instant WhatsApp Booking</span>
              </div>
              <span className="text-[10px] font-mono bg-[#B89B6F]/20 text-[#B89B6F] px-2 py-0.5 rounded">
                Direct Sync
              </span>
            </div>

            <div className="text-xs font-mono text-[#AFACA1] px-1">
              Prisma + Neon Serverless PostgreSQL Backend
            </div>
          </div>

          <div className="pt-3 border-t border-[#B89B6F]/15 flex items-center justify-between text-[11px] font-mono text-[#AFACA1]">
            <span>Next.js 15 • TypeScript • React 19</span>
            <span className="text-[#B89B6F]">Vercel Edge</span>
          </div>
        </div>
      );
    }

    // 06. Swift Parcel
    return (
      <div className="w-full h-full p-5 sm:p-7 rounded-3xl bg-[#060701] border border-[#B89B6F]/25 flex flex-col justify-between overflow-hidden relative group shadow-inner">
        <div className="flex items-center justify-between pb-4 border-b border-[#B89B6F]/15">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#B89B6F]" />
            <span className="text-xs font-mono text-[#B89B6F] ml-2">
              swift-parcel.dispatch.net
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#B89B6F]/15 text-[#B89B6F] border border-[#B89B6F]/30">
            <Package className="w-3 h-3" />
            MERN Operations
          </span>
        </div>

        <div className="space-y-3 my-3">
          {/* Tracking Pipeline Simulation */}
          <div className="p-3.5 rounded-2xl bg-[#141413] border border-[#B89B6F]/25">
            <div className="flex items-center justify-between text-xs font-mono mb-2">
              <span className="text-[#B89B6F] font-bold">Tracking #SP-80419-LHE</span>
              <span className="text-[10px] text-[#66726B] bg-[#B89B6F]/15 px-2 py-0.5 rounded">
                Out for Delivery
              </span>
            </div>
            <div className="w-full bg-[#060701] h-2 rounded-full overflow-hidden border border-white/5">
              <div className="bg-gradient-to-r from-[#B89B6F] to-[#E2D2B8] h-full w-3/4 rounded-full" />
            </div>
          </div>

          {/* Tri-Portal Separation */}
          <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
            <div className="p-2 rounded-xl bg-[#141413] border border-[#B89B6F]/15 text-[#E2D2B8]">
              Customer
            </div>
            <div className="p-2 rounded-xl bg-[#141413] border border-[#B89B6F]/15 text-[#E2D2B8]">
              Admin
            </div>
            <div className="p-2 rounded-xl bg-[#141413] border border-[#B89B6F]/15 text-[#E2D2B8]">
              Courier
            </div>
          </div>

          <div className="text-xs font-mono text-[#AFACA1] px-1">
            Real-time In-App Client-Admin Messaging Channel
          </div>
        </div>

        <div className="pt-3 border-t border-[#B89B6F]/15 flex items-center justify-between text-[11px] font-mono text-[#AFACA1]">
          <span>MongoDB • Express • React • Node</span>
          <span className="text-[#B89B6F]">RESTful Pipeline</span>
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
      <div className="p-6 sm:p-9 md:p-11 rounded-3xl glass-card border border-[#B89B6F]/25 shadow-3d-card hover:border-[#B89B6F]/55 transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group">
        {/* Left Side: Metadata & Architectural Summary */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full">
          <div>
            {/* Top row: Number & Domain badge */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl sm:text-4xl font-extrabold font-display text-[#B89B6F]/40 group-hover:text-[#B89B6F] transition-colors">
                {project.number}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-[#B89B6F]/10 text-[#B89B6F] border border-[#B89B6F]/25 shadow-sm">
                {project.badge}
              </span>
              <span className="text-xs font-mono text-[#AFACA1] hidden sm:inline">
                // {project.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-[#E2D2B8] group-hover:text-[#B89B6F] transition-colors leading-tight">
              {project.title}
            </h3>

            {/* Tagline */}
            <p className="mt-2 text-sm sm:text-base font-mono text-[#66726B]">
              {project.tagline}
            </p>

            {/* Short Description */}
            <p className="mt-4 text-sm sm:text-base text-[#BDBBB2] leading-relaxed">
              {project.shortDescription}
            </p>

            {/* Highlights */}
            <div className="mt-5 space-y-2">
              {project.highlights.slice(0, 3).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E2D2B8]">
                  <CheckCircle2 className="w-4 h-4 text-[#B89B6F] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-2 mt-6">
              {project.technologies.slice(0, 7).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-xl text-xs font-mono bg-[#141413] border border-[#B89B6F]/20 text-[#E2D2B8]"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 7 && (
                <span className="px-3 py-1 rounded-xl text-xs font-mono bg-[#141413] border border-white/5 text-[#AFACA1]">
                  +{project.technologies.length - 7} more
                </span>
              )}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 mt-8 pt-6 border-t border-[#B89B6F]/15">
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
              <Info className="w-4 h-4 text-[#B89B6F]" />
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
