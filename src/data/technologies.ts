export interface TechItem {
  name: string;
  category: string;
  iconName?: string;
  highlight?: boolean;
}

export interface TechCategory {
  id: string;
  name: string;
  description: string;
  skills: TechItem[];
}

export const techCategories: TechCategory[] = [
  {
    id: "web-dev",
    name: "Web & Mobile Development",
    description: "Modern, high-performance web frontends, mobile applications, and responsive user interfaces.",
    skills: [
      { name: "JavaScript (ES6+)", category: "web-dev", iconName: "SiJavascript", highlight: true },
      { name: "TypeScript", category: "web-dev", iconName: "SiTypescript", highlight: true },
      { name: "React.js", category: "web-dev", iconName: "SiReact", highlight: true },
      { name: "Next.js", category: "web-dev", iconName: "SiNextdotjs", highlight: true },
      { name: "Flutter", category: "web-dev", iconName: "SiFlutter", highlight: true },
      { name: "Dart", category: "web-dev", iconName: "SiDart" },
      { name: "Node.js", category: "web-dev", iconName: "SiNodedotjs", highlight: true },
      { name: "Express.js", category: "web-dev", iconName: "SiExpress" },
      { name: "Python", category: "web-dev", iconName: "SiPython", highlight: true },
      { name: "FastAPI", category: "web-dev", iconName: "SiFastapi", highlight: true },
      { name: "HTML5", category: "web-dev", iconName: "SiHtml5" },
      { name: "CSS3", category: "web-dev", iconName: "SiCss" },
      { name: "Tailwind CSS", category: "web-dev", iconName: "SiTailwindcss", highlight: true },
      { name: "Responsive Web Design", category: "web-dev", iconName: "Layout" },
    ],
  },
  {
    id: "backend-db",
    name: "Backend & Databases",
    description: "Robust server logic, resilient APIs, and optimized relational/NoSQL datastores.",
    skills: [
      { name: "RESTful APIs", category: "backend-db", iconName: "Network", highlight: true },
      { name: "API Integration", category: "backend-db", iconName: "Zap", highlight: true },
      { name: "CRUD Operations", category: "backend-db", iconName: "Database" },
      { name: "Authentication & Authorization", category: "backend-db", iconName: "Lock", highlight: true },
      { name: "JWT", category: "backend-db", iconName: "SiJsonwebtokens", highlight: true },
      { name: "PostgreSQL", category: "backend-db", iconName: "SiPostgresql", highlight: true },
      { name: "MySQL", category: "backend-db", iconName: "SiMysql" },
      { name: "MongoDB", category: "backend-db", iconName: "SiMongodb", highlight: true },
      { name: "SQLite", category: "backend-db", iconName: "SiSqlite" },
      { name: "Database Design", category: "backend-db", iconName: "Server", highlight: true },
      { name: "Prisma ORM", category: "backend-db", iconName: "SiPrisma", highlight: true },
    ],
  },
  {
    id: "swe-tools",
    name: "Software Engineering & Tools",
    description: "Architectural design patterns, version control, and containerization pipelines.",
    skills: [
      { name: "Object-Oriented Programming (OOP)", category: "swe-tools", iconName: "Boxes", highlight: true },
      { name: "MVC Architecture", category: "swe-tools", iconName: "Layers", highlight: true },
      { name: "Git", category: "swe-tools", iconName: "SiGit", highlight: true },
      { name: "GitHub", category: "swe-tools", iconName: "SiGithub", highlight: true },
      { name: "Docker", category: "swe-tools", iconName: "SiDocker", highlight: true },
      { name: "Postman", category: "swe-tools", iconName: "SiPostman" },
      { name: "VS Code", category: "swe-tools", iconName: "Code2" },
      { name: "CI/CD", category: "swe-tools", iconName: "GitMerge", highlight: true },
      { name: "Vercel", category: "swe-tools", iconName: "SiVercel" },
      { name: "Netlify", category: "swe-tools", iconName: "SiNetlify" },
    ],
  },
  {
    id: "ai-analytics",
    name: "AI & Data Analytics",
    description: "Intelligent AI endpoints, machine learning models, and numerical data processing.",
    skills: [
      { name: "AI API Integration", category: "ai-analytics", iconName: "Bot", highlight: true },
      { name: "Prompt Engineering", category: "ai-analytics", iconName: "Sparkles", highlight: true },
      { name: "Python Data Analysis", category: "ai-analytics", iconName: "SiPython", highlight: true },
      { name: "Pandas", category: "ai-analytics", iconName: "SiPandas" },
      { name: "NumPy", category: "ai-analytics", iconName: "SiNumpy" },
      { name: "YOLOv8 Computer Vision", category: "ai-analytics", iconName: "Target", highlight: true },
      { name: "Microsoft Excel", category: "ai-analytics", iconName: "Table" },
      { name: "KPI Reporting", category: "ai-analytics", iconName: "TrendingUp", highlight: true },
      { name: "Data Visualization", category: "ai-analytics", iconName: "BarChart3" },
    ],
  },
  {
    id: "ecommerce",
    name: "E-Commerce & Marketplace Operations",
    description: "Multi-platform listing optimization, digital advertising ROI, and conversion analytics.",
    skills: [
      { name: "Amazon", category: "ecommerce", iconName: "ShoppingBag", highlight: true },
      { name: "eBay", category: "ecommerce", iconName: "Store" },
      { name: "Walmart", category: "ecommerce", iconName: "Globe", highlight: true },
      { name: "Etsy", category: "ecommerce", iconName: "Store" },
      { name: "TikTok Shop", category: "ecommerce", iconName: "ShoppingBag" },
      { name: "Temu, Alibaba, Mercari, Faire", category: "ecommerce", iconName: "Globe" },
      { name: "Product Listing Optimization", category: "ecommerce", iconName: "CheckCircle2", highlight: true },
      { name: "Marketplace SEO", category: "ecommerce", iconName: "Search", highlight: true },
      { name: "Competitor Analysis", category: "ecommerce", iconName: "Target" },
      { name: "Sales Analytics", category: "ecommerce", iconName: "LineChart", highlight: true },
      { name: "PPC Campaign Management", category: "ecommerce", iconName: "Award", highlight: true },
      { name: "Meta Ads", category: "ecommerce", iconName: "DollarSign" },
      { name: "ROI Analysis", category: "ecommerce", iconName: "TrendingUp" },
    ],
  },
  {
    id: "logistics",
    name: "Truck Dispatching & Logistics",
    description: "Freight coordination, broker rate negotiations, pickup/delivery scheduling, and end-to-end shipment execution.",
    skills: [
      { name: "Freight Dispatching", category: "logistics", iconName: "Truck", highlight: true },
      { name: "Load Booking", category: "logistics", iconName: "FileCheck", highlight: true },
      { name: "Freight Coordination", category: "logistics", iconName: "Navigation" },
      { name: "Broker & Driver Communication", category: "logistics", iconName: "PhoneCall", highlight: true },
      { name: "Rate Negotiation", category: "logistics", iconName: "DollarSign", highlight: true },
      { name: "Shipment Tracking", category: "logistics", iconName: "MapPin" },
      { name: "Pickup & Delivery Scheduling", category: "logistics", iconName: "Calendar" },
      { name: "Dispatch Documentation", category: "logistics", iconName: "FileText" },
    ],
  },
];

export const marqueeRow1 = [
  { name: "JavaScript (ES6+)", icon: "SiJavascript" },
  { name: "TypeScript", icon: "SiTypescript" },
  { name: "React.js", icon: "SiReact" },
  { name: "Next.js", icon: "SiNextdotjs" },
  { name: "Flutter", icon: "SiFlutter" },
  { name: "Dart", icon: "SiDart" },
  { name: "Node.js", icon: "SiNodedotjs" },
  { name: "Express.js", icon: "SiExpress" },
  { name: "Python", icon: "SiPython" },
  { name: "FastAPI", icon: "SiFastapi" },
  { name: "Tailwind CSS", icon: "SiTailwindcss" },
  { name: "Docker", icon: "SiDocker" },
];

export const marqueeRow2 = [
  { name: "PostgreSQL", icon: "SiPostgresql" },
  { name: "MySQL", icon: "SiMysql" },
  { name: "MongoDB", icon: "SiMongodb" },
  { name: "SQLite", icon: "SiSqlite" },
  { name: "Prisma ORM", icon: "SiPrisma" },
  { name: "RESTful APIs", icon: "Network" },
  { name: "Git", icon: "SiGit" },
  { name: "GitHub", icon: "SiGithub" },
  { name: "YOLOv8 Vision", icon: "Target" },
  { name: "AI API Integration", icon: "Bot" },
  { name: "Prompt Engineering", icon: "Sparkles" },
];
