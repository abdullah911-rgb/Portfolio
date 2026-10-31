export interface ServiceItem {
  number: string;
  title: string;
  shortDescription: string;
  details: string[];
  icon: string;
  tags: string[];
}

export const services: ServiceItem[] = [
  {
    number: "01",
    title: "Full-Stack Web Development",
    shortDescription:
      "Building complete, production-ready web applications combining modern frontend frameworks with robust backend server architecture.",
    details: [
      "End-to-end full lifecycle web application development (MERN & Next.js)",
      "Single-page and multi-page responsive web applications",
      "Seamless client-server integration and state management",
      "Production deployment and continuous delivery configuration",
    ],
    icon: "Layout",
    tags: ["React.js", "Next.js", "Node.js", "Express.js", "TypeScript"],
  },
  {
    number: "02",
    title: "Frontend Development",
    shortDescription:
      "Creating responsive, accessible, high-performance interfaces using React, Next.js, TypeScript, and Tailwind CSS.",
    details: [
      "Pixel-perfect responsive design across all device breakpoints",
      "Interactive micro-animations and smooth scroll transitions",
      "Accessibility-conscious components (WCAG standards)",
      "Clean component architecture and state management",
    ],
    icon: "Monitor",
    tags: ["React 19", "Tailwind CSS", "TypeScript", "Framer Motion"],
  },
  {
    number: "03",
    title: "Backend Development & API Engineering",
    shortDescription:
      "Developing server-side business logic, secure RESTful APIs, JWT authentication protocols, and scalable database connections.",
    details: [
      "RESTful API design with full CRUD capabilities",
      "Secure authentication: JWT, refresh tokens, role-based access control, OTP",
      "Third-party SDK and payment / messaging integrations",
      "API documentation, input validation, and rate limiting",
    ],
    icon: "Server",
    tags: ["Node.js", "Express.js", "FastAPI", "JWT", "RESTful APIs"],
  },
  {
    number: "04",
    title: "Python Development",
    shortDescription:
      "Building custom backend scripts, data pipelines, and practical Python-based automation or API solutions.",
    details: [
      "Lightweight backend services and micro-APIs with FastAPI",
      "Automated web scrapers, data extraction, and batch scripts",
      "Data manipulation using Pandas, NumPy, and CSV/Excel workflows",
      "AI model API wrappers and structured prompt engineering pipelines",
    ],
    icon: "Terminal",
    tags: ["Python 3", "FastAPI", "Pandas", "Automation", "AI APIs"],
  },
  {
    number: "05",
    title: "Database Design & Integration",
    shortDescription:
      "Designing reliable relational and non-relational database architectures using PostgreSQL, MongoDB, MySQL, and Prisma ORM.",
    details: [
      "Schema modeling, entity relationships, and indexing strategies",
      "Type-safe database interactions with Prisma ORM and Sequelize",
      "Database migrations, seed data, and connection pooling",
      "Multi-database proficiency across PostgreSQL, MySQL, MongoDB, and SQLite",
    ],
    icon: "Database",
    tags: ["PostgreSQL", "MongoDB", "MySQL", "Prisma ORM", "SQLite"],
  },
  {
    number: "06",
    title: "E-Commerce & Data Analytics",
    shortDescription:
      "Leveraging operational expertise, marketplace SEO, PPC campaign management, and data visualization to optimize digital platforms and analyze KPIs.",
    details: [
      "Multi-channel marketplace catalog optimization (Amazon, Walmart, eBay, Etsy)",
      "Keyword research, listing SEO, and competitor intelligence",
      "Data visualization, KPI reporting dashboards, and sales trend discovery",
      "PPC advertising management and advertising ROI optimization",
    ],
    icon: "LineChart",
    tags: ["Marketplace SEO", "KPI Reporting", "PPC Campaigns", "Excel", "Data Viz"],
  },
];
