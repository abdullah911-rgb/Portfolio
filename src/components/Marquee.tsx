import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiFastapi,
  SiTailwindcss,
  SiDocker,
  SiFlutter,
  SiDart,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiSqlite,
  SiPrisma,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { Network, Bot, Sparkles } from "lucide-react";

interface TechBadgeProps {
  name: string;
  icon: React.ReactNode;
}

const TechBadge: React.FC<TechBadgeProps> = ({ name, icon }) => (
  <div className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-[#111318]/90 border border-white/10 hover:border-cyan-400/40 hover:bg-white/[0.04] transition-all group shrink-0 mx-2 shadow-lg">
    <span className="text-xl text-text-secondary group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300">
      {icon}
    </span>
    <span className="font-mono text-xs sm:text-sm font-medium text-text-primary tracking-wide whitespace-nowrap">
      {name}
    </span>
  </div>
);

const row1 = [
  { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-emerald-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-zinc-300" /> },
  { name: "Python", icon: <SiPython className="text-yellow-300" /> },
  { name: "FastAPI", icon: <SiFastapi className="text-teal-400" /> },
  { name: "Flutter", icon: <SiFlutter className="text-cyan-400" /> },
  { name: "Dart", icon: <SiDart className="text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
];

const row2 = [
  { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-orange-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-emerald-500" /> },
  { name: "SQLite", icon: <SiSqlite className="text-blue-300" /> },
  { name: "Prisma ORM", icon: <SiPrisma className="text-cyan-300" /> },
  { name: "RESTful APIs", icon: <Network className="w-5 h-5 text-rose-400" /> },
  { name: "Git", icon: <SiGit className="text-orange-500" /> },
  { name: "GitHub", icon: <SiGithub className="text-white" /> },
  { name: "AI API Integration", icon: <Bot className="w-5 h-5 text-purple-400" /> },
  { name: "Prompt Engineering", icon: <Sparkles className="w-5 h-5 text-amber-400" /> },
];

export const Marquee: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-[#0C0C0C] relative overflow-hidden border-y border-white/5">
      {/* Side gradient blur masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#0C0C0C] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#0C0C0C] to-transparent z-20 pointer-events-none" />

      <div className="flex flex-col gap-4">
        {/* Row 1: Left */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-left flex items-center">
            {row1.concat(row1).map((item, idx) => (
              <TechBadge key={`r1-${idx}`} name={item.name} icon={item.icon} />
            ))}
          </div>
        </div>

        {/* Row 2: Right */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-right flex items-center">
            {row2.concat(row2).map((item, idx) => (
              <TechBadge key={`r2-${idx}`} name={item.name} icon={item.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
