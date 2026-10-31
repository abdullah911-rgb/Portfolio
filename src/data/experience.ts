export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  current?: boolean;
  description: string[];
  technologies: string[];
  metrics?: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: "sky-bridge",
    role: "Truck Dispatcher",
    company: "Sky Bridge Solutions",
    location: "Lahore, Pakistan",
    period: "August 2026 – October 2026",
    type: "Logistics Operations",
    description: [
      "Coordinated daily truck dispatching operations by matching available drivers and equipment with suitable freight loads while managing pickup and delivery schedules and shipment requirements.",
      "Evaluated load weight, dimensions, commodity type, equipment requirements, and load securement needs; communicated with brokers and drivers regarding load availability, rate negotiations, load confirmations, and dispatch documentation.",
      "Supported shipment tracking and timely deliveries by monitoring freight progress, addressing scheduling delays, and applying knowledge of freight terminology, including detention, layover, TONU, and accessorial charges.",
    ],
    technologies: [
      "Freight Dispatching",
      "Load Booking",
      "Rate Negotiation",
      "Broker Coordination",
      "Shipment Tracking",
      "Dispatch Documentation",
    ],
    metrics: "Optimized driver scheduling & freight route efficiency",
  },
  {
    id: "online-experts",
    role: "Full-Stack Developer",
    company: "Online Experts",
    location: "Remote",
    period: "May 2026 – August 2026",
    type: "Full-Time Remote",
    description: [
      "Developed full-stack web applications, including a Learning Management System (LMS) and NextTripy, a car and hotel rental marketplace, based on client project requirements.",
      "Built responsive frontend interfaces and backend functionality using React.js, Next.js, TypeScript, Node.js, Express.js, PostgreSQL, Prisma ORM, and RESTful APIs.",
      "Implemented role-based dashboards, authentication, database operations, course management, rental listing workflows, and third-party integrations, gaining practical experience in remote development and client-focused delivery.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "RESTful APIs",
      "JWT Auth",
    ],
    metrics: "Shipped 2 commercial full-stack platforms from ground up",
  },
  {
    id: "amtex-limited",
    role: "E-Commerce Brand Manager & Operations / Data Analyst",
    company: "Amtex Limited",
    location: "Faisalabad, Pakistan",
    period: "June 2025 – April 2026",
    type: "E-Commerce & Analytics",
    description: [
      "Managed e-commerce brand operations, product catalogs, launches, and sales performance across 9+ global marketplaces, including Amazon, Walmart, eBay, Etsy, TikTok Shop, Temu, Alibaba, Mercari, and Faire.",
      "Analyzed sales, conversion rates, KPIs, and advertising performance using Microsoft Excel, KPI reporting, data visualization, competitor research, marketplace SEO, keyword optimization, PPC campaigns, and Meta Ads to identify growth opportunities and evaluate ROI.",
      "Supported data-driven business decisions and operational efficiency through sales trend analysis, product listing optimization, catalog accuracy, inventory workflow coordination, and cross-functional collaboration.",
    ],
    technologies: [
      "Data Analytics",
      "Microsoft Excel",
      "KPI Reporting",
      "Data Visualization",
      "Marketplace SEO",
      "PPC Advertising",
      "Meta Ads",
      "Amazon & Walmart Portals",
    ],
    metrics: "Scaled brand catalogs across 9+ international marketplaces",
  },
];
