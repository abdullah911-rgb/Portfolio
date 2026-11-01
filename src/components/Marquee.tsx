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
  <div className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-[#181A15]/90 border border-[#5E9BD9]/20 hover:border-[#5E9BD9]/60 hover:bg-[#1E201A] transition-all group shrink-0 mx-2 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.7)] hover:shadow-[0_0_20px_rgba(94,155,217,0.3)] hover:-translate-y-1">
    <span className="text-xl text-[#5E9BD9] group-hover:text-[#E8EEF6] group-hover:scale-110 transition-all duration-300">
      {icon}
    </span>
    <span className="font-mono text-xs sm:text-sm font-medium text-[#E8EEF6] tracking-wide whitespace-nowrap">
      {name}
    </span>
  </div>
);

const row1 = [
  { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-[#5E9BD9]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#84B6E8]" /> },
  { name: "React.js", icon: <SiReact className="text-[#5E9BD9]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-[#E8EEF6]" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-[#5E9BD9]" /> },
  { name: "Express.js", icon: <SiExpress className="text-[#B8C4D4]" /> },
  { name: "Python", icon: <SiPython className="text-[#84B6E8]" /> },
  { name: "FastAPI", icon: <SiFastapi className="text-[#5E9BD9]" /> },
  { name: "Flutter", icon: <SiFlutter className="text-[#84B6E8]" /> },
  { name: "Dart", icon: <SiDart className="text-[#5E9BD9]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#5E9BD9]" /> },
  { name: "Docker", icon: <SiDocker className="text-[#84B6E8]" /> },
];

const row2 = [
  { name: "PostgreSQL", icon: <SiPostgresql className="text-[#5E9BD9]" /> },
  { name: "MySQL", icon: <SiMysql className="text-[#84B6E8]" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#5E9BD9]" /> },
  { name: "SQLite", icon: <SiSqlite className="text-[#84B6E8]" /> },
  { name: "Prisma ORM", icon: <SiPrisma className="text-[#E8EEF6]" /> },
  { name: "RESTful APIs", icon: <Network className="w-5 h-5 text-[#5E9BD9]" /> },
  { name: "Git", icon: <SiGit className="text-[#84B6E8]" /> },
  { name: "GitHub", icon: <SiGithub className="text-[#E8EEF6]" /> },
  { name: "AI API Integration", icon: <Bot className="w-5 h-5 text-[#5E9BD9]" /> },
  { name: "Prompt Engineering", icon: <Sparkles className="w-5 h-5 text-[#84B6E8]" /> },
];

export const Marquee: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-[#121310] relative overflow-hidden border-y border-[#5E9BD9]/15">
      {/* Side gradient blur masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#121310] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#121310] to-transparent z-20 pointer-events-none" />

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
