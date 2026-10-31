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
  SiPandas,
  SiNumpy,
  SiFlutter,
  SiDart,
} from "react-icons/si";
import { SectionHeading } from "./SectionHeading";
import { techCategories } from "../data/technologies";

// Icon resolution helper
const renderSkillIcon = (iconName?: string) => {
  const iconClass = "w-5 h-5 transition-transform duration-300 group-hover:scale-110";

  switch (iconName) {
    case "SiJavascript":
      return <SiJavascript className={`${iconClass} text-yellow-400`} />;
    case "SiTypescript":
      return <SiTypescript className={`${iconClass} text-blue-400`} />;
    case "SiReact":
      return <SiReact className={`${iconClass} text-cyan-400`} />;
    case "SiNextdotjs":
      return <SiNextdotjs className={`${iconClass} text-white`} />;
    case "SiHtml5":
      return <SiHtml5 className={`${iconClass} text-orange-500`} />;
    case "SiCss":
    case "SiCss3":
      return <SiCss className={`${iconClass} text-blue-500`} />;
    case "SiTailwindcss":
      return <SiTailwindcss className={`${iconClass} text-cyan-400`} />;
    case "SiNodedotjs":
      return <SiNodedotjs className={`${iconClass} text-emerald-500`} />;
    case "SiExpress":
      return <SiExpress className={`${iconClass} text-zinc-300`} />;
    case "SiPython":
      return <SiPython className={`${iconClass} text-yellow-300`} />;
    case "SiFastapi":
      return <SiFastapi className={`${iconClass} text-teal-400`} />;
    case "SiJsonwebtokens":
      return <SiJsonwebtokens className={`${iconClass} text-pink-500`} />;
    case "SiPostgresql":
      return <SiPostgresql className={`${iconClass} text-sky-400`} />;
    case "SiMysql":
      return <SiMysql className={`${iconClass} text-orange-400`} />;
    case "SiMongodb":
      return <SiMongodb className={`${iconClass} text-emerald-500`} />;
    case "SiSqlite":
      return <SiSqlite className={`${iconClass} text-blue-300`} />;
    case "SiPrisma":
      return <SiPrisma className={`${iconClass} text-cyan-300`} />;
    case "SiGit":
      return <SiGit className={`${iconClass} text-orange-500`} />;
    case "SiGithub":
      return <SiGithub className={`${iconClass} text-white`} />;
    case "SiDocker":
      return <SiDocker className={`${iconClass} text-blue-400`} />;
    case "SiPostman":
      return <SiPostman className={`${iconClass} text-orange-500`} />;
    case "SiVercel":
      return <SiVercel className={`${iconClass} text-white`} />;
    case "SiNetlify":
      return <SiNetlify className={`${iconClass} text-teal-300`} />;
    case "SiPandas":
      return <SiPandas className={`${iconClass} text-blue-400`} />;
    case "SiNumpy":
      return <SiNumpy className={`${iconClass} text-indigo-400`} />;
    case "SiFlutter":
      return <SiFlutter className={`${iconClass} text-cyan-400`} />;
    case "SiDart":
      return <SiDart className={`${iconClass} text-blue-400`} />;
    case "Calendar":
      return <Calendar className={`${iconClass} text-cyan-400`} />;
    case "Network":
      return <Network className={`${iconClass} text-rose-400`} />;
    case "Zap":
      return <Zap className={`${iconClass} text-amber-400`} />;
    case "Database":
      return <Database className={`${iconClass} text-blue-400`} />;
    case "Lock":
      return <Lock className={`${iconClass} text-red-400`} />;
    case "Server":
      return <Server className={`${iconClass} text-purple-400`} />;
    case "Boxes":
      return <Boxes className={`${iconClass} text-cyan-400`} />;
    case "Layers":
      return <Layers className={`${iconClass} text-indigo-400`} />;
    case "Code2":
      return <Code2 className={`${iconClass} text-emerald-400`} />;
    case "GitMerge":
      return <GitMerge className={`${iconClass} text-purple-400`} />;
    case "Bot":
      return <Bot className={`${iconClass} text-purple-400`} />;
    case "Sparkles":
      return <Sparkles className={`${iconClass} text-amber-400`} />;
    case "Table":
      return <Table className={`${iconClass} text-emerald-400`} />;
    case "TrendingUp":
      return <TrendingUp className={`${iconClass} text-green-400`} />;
    case "BarChart3":
      return <BarChart3 className={`${iconClass} text-sky-400`} />;
    case "ShoppingBag":
      return <ShoppingBag className={`${iconClass} text-amber-400`} />;
    case "Store":
      return <Store className={`${iconClass} text-rose-400`} />;
    case "Globe":
      return <Globe className={`${iconClass} text-blue-400`} />;
    case "CheckCircle2":
      return <CheckCircle2 className={`${iconClass} text-teal-400`} />;
    case "Search":
      return <Search className={`${iconClass} text-cyan-400`} />;
    case "Target":
      return <Target className={`${iconClass} text-red-400`} />;
    case "LineChart":
      return <LineChart className={`${iconClass} text-emerald-400`} />;
    case "Award":
      return <Award className={`${iconClass} text-yellow-400`} />;
    case "DollarSign":
      return <DollarSign className={`${iconClass} text-green-400`} />;
    case "Truck":
      return <Truck className={`${iconClass} text-cyan-400`} />;
    case "FileCheck":
      return <FileCheck className={`${iconClass} text-blue-400`} />;
    case "Navigation":
      return <Navigation className={`${iconClass} text-purple-400`} />;
    case "PhoneCall":
      return <PhoneCall className={`${iconClass} text-emerald-400`} />;
    case "MapPin":
      return <MapPin className={`${iconClass} text-rose-400`} />;
    case "FileText":
      return <FileText className={`${iconClass} text-amber-400`} />;
    case "Layout":
    default:
      return <Layout className={`${iconClass} text-cyan-400`} />;
  }
};

const categoryIcons: Record<string, React.ReactNode> = {
  "web-dev": <Code2 className="w-4 h-4 text-cyan-400" />,
  "backend-db": <Database className="w-4 h-4 text-blue-400" />,
  "swe-tools": <Wrench className="w-4 h-4 text-emerald-400" />,
  "ai-analytics": <Bot className="w-4 h-4 text-purple-400" />,
  ecommerce: <ShoppingBag className="w-4 h-4 text-amber-400" />,
  logistics: <Truck className="w-4 h-4 text-sky-400" />,
};

export const TechStack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredCategories =
    selectedCategory === "all"
      ? techCategories
      : techCategories.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="py-24 md:py-36 relative overflow-hidden bg-[#111318]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 02. TECHNICAL SKILLS"
          title="Verified Capabilities &"
          highlight="Engineering Toolchain"
          description="A comprehensive view of my technologies, programming languages, database systems, AI integration tools, and operations skillsets."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
              selectedCategory === "all"
                ? "bg-cyan-400 text-black font-semibold shadow-lg shadow-cyan-400/20"
                : "bg-white/[0.03] text-text-secondary border border-white/10 hover:text-white hover:bg-white/[0.06]"
            }`}
          >
            All Categories ({techCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </button>

          {techCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === cat.id
                  ? "bg-cyan-400 text-black font-semibold shadow-lg shadow-cyan-400/20"
                  : "bg-white/[0.03] text-text-secondary border border-white/10 hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              <span>{categoryIcons[cat.id]}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            {filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                      {categoryIcons[category.id]}
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-white">
                        {category.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-text-secondary">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20 self-start sm:self-auto">
                    {category.skills.length} competencies
                  </span>
                </div>

                {/* Skills Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.03 }}
                      className={`group p-3.5 rounded-2xl border transition-all duration-300 flex items-center gap-3 ${
                        skill.highlight
                          ? "bg-white/[0.04] border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-500/[0.07] hover:shadow-lg hover:shadow-cyan-500/10"
                          : "bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.05]"
                      }`}
                    >
                      <div className="p-2 rounded-xl bg-black/40 border border-white/5 shrink-0">
                        {renderSkillIcon(skill.iconName)}
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs sm:text-sm font-mono font-medium text-white/90 group-hover:text-white block truncate">
                          {skill.name}
                        </span>
                        {skill.highlight && (
                          <span className="text-[10px] font-mono text-cyan-400 block tracking-tight">
                            Core Focus
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
