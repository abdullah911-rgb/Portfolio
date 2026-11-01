import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Database,
  Wrench,
  Bot,
  ShoppingBag,
  Truck,
  Sparkles,
  Layers,
  Network,
  Zap,
  Lock,
  Server,
  Boxes,
  GitMerge,
  Table,
  TrendingUp,
  BarChart3,
  Store,
  Globe,
  CheckCircle2,
  Search,
  Target,
  LineChart,
  Award,
  DollarSign,
  FileCheck,
  Navigation,
  PhoneCall,
  MapPin,
  FileText,
  Layout,
  Calendar,
} from "lucide-react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiFastapi,
  SiJsonwebtokens,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiSqlite,
  SiPrisma,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiFlutter,
  SiDart,
} from "react-icons/si";
import { SectionHeading } from "./SectionHeading";
import { techCategories } from "../data/technologies";

const categoryIcons: Record<string, React.ReactNode> = {
  "web-dev": <Code2 className="w-4 h-4 text-[#B89B6F]" />,
  "backend-db": <Database className="w-4 h-4 text-[#66726B]" />,
  "swe-tools": <Wrench className="w-4 h-4 text-[#B89B6F]" />,
  "ai-data": <Bot className="w-4 h-4 text-[#66726B]" />,
  "ecommerce": <ShoppingBag className="w-4 h-4 text-[#B89B6F]" />,
  "logistics": <Truck className="w-4 h-4 text-[#66726B]" />,
};

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const renderIcon = (iconName?: string) => {
    switch (iconName) {
      case "SiJavascript": return <SiJavascript className="w-5 h-5 text-[#B89B6F]" />;
      case "SiTypescript": return <SiTypescript className="w-5 h-5 text-[#66726B]" />;
      case "SiReact": return <SiReact className="w-5 h-5 text-[#B89B6F]" />;
      case "SiNextdotjs": return <SiNextdotjs className="w-5 h-5 text-[#E2D2B8]" />;
      case "SiFlutter": return <SiFlutter className="w-5 h-5 text-[#B89B6F]" />;
      case "SiDart": return <SiDart className="w-5 h-5 text-[#66726B]" />;
      case "SiNodedotjs": return <SiNodedotjs className="w-5 h-5 text-[#B89B6F]" />;
      case "SiExpress": return <SiExpress className="w-5 h-5 text-[#BDBBB2]" />;
      case "SiPython": return <SiPython className="w-5 h-5 text-[#66726B]" />;
      case "SiFastapi": return <SiFastapi className="w-5 h-5 text-[#B89B6F]" />;
      case "SiHtml5": return <SiHtml5 className="w-5 h-5 text-[#B89B6F]" />;
      case "SiCss": return <SiCss className="w-5 h-5 text-[#66726B]" />;
      case "SiTailwindcss": return <SiTailwindcss className="w-5 h-5 text-[#B89B6F]" />;
      case "SiJsonwebtokens": return <SiJsonwebtokens className="w-5 h-5 text-[#66726B]" />;
      case "SiPostgresql": return <SiPostgresql className="w-5 h-5 text-[#B89B6F]" />;
      case "SiMysql": return <SiMysql className="w-5 h-5 text-[#66726B]" />;
      case "SiMongodb": return <SiMongodb className="w-5 h-5 text-[#B89B6F]" />;
      case "SiSqlite": return <SiSqlite className="w-5 h-5 text-[#66726B]" />;
      case "SiPrisma": return <SiPrisma className="w-5 h-5 text-[#E2D2B8]" />;
      case "SiGit": return <SiGit className="w-5 h-5 text-[#66726B]" />;
      case "SiGithub": return <SiGithub className="w-5 h-5 text-[#E2D2B8]" />;
      case "SiDocker": return <SiDocker className="w-5 h-5 text-[#B89B6F]" />;
      case "SiPostman": return <SiPostman className="w-5 h-5 text-[#66726B]" />;
      case "SiVercel": return <SiVercel className="w-5 h-5 text-[#E2D2B8]" />;
      case "SiNetlify": return <SiNetlify className="w-5 h-5 text-[#B89B6F]" />;
      case "Network": return <Network className="w-5 h-5 text-[#B89B6F]" />;
      case "Zap": return <Zap className="w-5 h-5 text-[#66726B]" />;
      case "Database": return <Database className="w-5 h-5 text-[#B89B6F]" />;
      case "Lock": return <Lock className="w-5 h-5 text-[#66726B]" />;
      case "Server": return <Server className="w-5 h-5 text-[#B89B6F]" />;
      case "Boxes": return <Boxes className="w-5 h-5 text-[#66726B]" />;
      case "Layers": return <Layers className="w-5 h-5 text-[#B89B6F]" />;
      case "GitMerge": return <GitMerge className="w-5 h-5 text-[#66726B]" />;
      case "Table": return <Table className="w-5 h-5 text-[#B89B6F]" />;
      case "TrendingUp": return <TrendingUp className="w-5 h-5 text-[#66726B]" />;
      case "BarChart3": return <BarChart3 className="w-5 h-5 text-[#B89B6F]" />;
      case "Store": return <Store className="w-5 h-5 text-[#66726B]" />;
      case "Globe": return <Globe className="w-5 h-5 text-[#B89B6F]" />;
      case "CheckCircle2": return <CheckCircle2 className="w-5 h-5 text-[#66726B]" />;
      case "Search": return <Search className="w-5 h-5 text-[#B89B6F]" />;
      case "Target": return <Target className="w-5 h-5 text-[#66726B]" />;
      case "LineChart": return <LineChart className="w-5 h-5 text-[#B89B6F]" />;
      case "Award": return <Award className="w-5 h-5 text-[#66726B]" />;
      case "DollarSign": return <DollarSign className="w-5 h-5 text-[#B89B6F]" />;
      case "FileCheck": return <FileCheck className="w-5 h-5 text-[#66726B]" />;
      case "Navigation": return <Navigation className="w-5 h-5 text-[#B89B6F]" />;
      case "PhoneCall": return <PhoneCall className="w-5 h-5 text-[#66726B]" />;
      case "MapPin": return <MapPin className="w-5 h-5 text-[#B89B6F]" />;
      case "FileText": return <FileText className="w-5 h-5 text-[#66726B]" />;
      case "Layout": return <Layout className="w-5 h-5 text-[#B89B6F]" />;
      case "Calendar": return <Calendar className="w-5 h-5 text-[#66726B]" />;
      default: return <Sparkles className="w-5 h-5 text-[#B89B6F]" />;
    }
  };

  const categoriesToDisplay = techCategories.filter((cat) =>
    activeCategory === "all" ? true : cat.id === activeCategory
  );

  return (
    <section id="skills" className="py-24 md:py-36 relative overflow-hidden bg-[#141413]/40">
      {/* 3D ambient aura */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#B89B6F]/8 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-[#E2D2B8]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="// 02. TECHNICAL COMPETENCIES"
          title="Engineered With Modern Frameworks &"
          highlight="Intelligent Systems"
          description="Comprehensive technical toolkit covering full-stack web and mobile engineering, machine learning pipelines, and global multi-marketplace operations."
        />

        {/* 3D Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          <motion.button
            whileHover={{ scale: 1.03, translateY: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setActiveCategory("all")}
            className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
              activeCategory === "all"
                ? "btn-3d-blue font-bold shadow-gold-button"
                : "bg-[#141413] text-[#BDBBB2] border border-[#B89B6F]/20 hover:text-[#E2D2B8] hover:border-[#B89B6F]/40"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>All Domains</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
              activeCategory === "all" ? "bg-[#0B0D06]/20 text-[#0B0D06]" : "bg-white/10 text-[#AFACA1]"
            }`}>
              {techCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}
            </span>
          </motion.button>

          {techCategories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.03, translateY: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                activeCategory === cat.id
                  ? "btn-3d-blue font-bold shadow-gold-button"
                  : "bg-[#141413] text-[#BDBBB2] border border-[#B89B6F]/20 hover:text-[#E2D2B8] hover:border-[#B89B6F]/40"
              }`}
            >
              <span>{categoryIcons[cat.id]}</span>
              <span>{cat.name.split(" ")[0]}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                activeCategory === cat.id ? "bg-[#0B0D06]/20 text-[#0B0D06]" : "bg-white/10 text-[#AFACA1]"
              }`}>
                {cat.skills.length}
              </span>
            </motion.button>
          ))}
        </div>

        {/* 3D Dynamic Tech Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {categoriesToDisplay.map((cat, idx) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ translateY: -5 }}
                className="p-7 rounded-3xl glass-card border border-[#B89B6F]/20 flex flex-col justify-between group shadow-3d-card"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#B89B6F]/15 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2.5 rounded-xl bg-[#B89B6F]/10 border border-[#B89B6F]/25 group-hover:scale-105 transition-transform">
                        {categoryIcons[cat.id]}
                      </div>
                      <h3 className="font-display font-bold text-base text-[#E2D2B8] group-hover:text-[#B89B6F] transition-colors">
                        {cat.name}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-[#B89B6F] bg-[#B89B6F]/10 px-2 py-0.5 rounded-full border border-[#B89B6F]/20">
                      {cat.skills.length}
                    </span>
                  </div>

                  <p className="text-xs text-[#BDBBB2] mb-5 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05, translateY: -2 }}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 cursor-default ${
                          skill.highlight
                            ? "bg-[#212D2D] text-[#E2D2B8] border border-[#B89B6F]/40 shadow-[0_0_12px_rgba(184,155,111,0.15)] hover:border-[#B89B6F] hover:text-[#B89B6F]"
                            : "bg-[#141413]/80 text-[#BDBBB2] border border-white/5 hover:border-[#B89B6F]/30 hover:text-[#E2D2B8]"
                        }`}
                      >
                        <span className="shrink-0">{renderIcon(skill.iconName)}</span>
                        <span>{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
