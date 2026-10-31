export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  badge: string;
  shortDescription: string;
  detailedDescription: string;
  technicalImplementation: string;
  highlights: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  accentColor: string;
  gradient: string;
  featured: boolean;
  architecturePoints: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: "cookify",
    number: "01",
    title: "Cookify — AI Smart Recipe & Fitness App",
    tagline: "Turning everyday ingredients into intelligent cooking and fitness experiences.",
    category: "AI / Machine Learning • Mobile Application",
    badge: "Final Year Project",
    shortDescription:
      "An AI-powered mobile application that helps users discover recipes based on available ingredients while supporting their personal fitness goals through custom YOLOv8 object detection.",
    detailedDescription:
      "Cookify is an AI-powered mobile application that helps users discover recipes based on available ingredients while supporting their personal fitness goals. Users can identify ingredients through images, text, or voice input, making recipe discovery faster and more convenient. The application uses a custom-trained YOLOv8 object detection model to recognize food ingredients and combines AI-powered recommendations to deliver personalized cooking experiences. Beyond recipe discovery, Cookify provides nutritional insights, calorie calculations based on ingredient quantities, and personalized fitness guidance for weight gain, weight loss, and weight maintenance. It also features an AI-powered fitness chatbot and offline recipe access, creating an integrated cooking and fitness companion.",
    technicalImplementation:
      "Engineered with Flutter and Dart on the mobile frontend, connected to a high-performance Python FastAPI backend. Integrated a custom-trained YOLOv8 computer vision model via Roboflow and Grok AI API for real-time ingredient inference and conversational fitness guidance, alongside local JSON storage for offline recipe caching.",
    highlights: [
      "AI-powered ingredient detection using a custom-trained YOLOv8 model",
      "Image, text, and voice-based ingredient input",
      "Personalized recipe recommendations and online recipe discovery",
      "Ingredient quantity input and calorie calculations",
      "Fitness guidance for weight gain, weight loss, and maintenance",
      "AI-powered fitness chatbot",
      "Offline recipe support using local JSON data",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Python",
      "FastAPI",
      "YOLOv8",
      "Roboflow",
      "Grok AI API",
      "RESTful APIs",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/abdullah911-rgb",
    accentColor: "#10B981",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    featured: true,
    architecturePoints: [
      { label: "Client App", value: "Flutter & Dart Cross-Platform" },
      { label: "Vision AI", value: "Custom YOLOv8 + Roboflow" },
      { label: "Backend API", value: "Python 3 & FastAPI" },
      { label: "Intelligent Agent", value: "Grok AI API Chatbot" },
    ],
  },
  {
    id: "zenith",
    number: "02",
    title: "Zenith — Ultimate Productivity Hub",
    tagline: "A smarter workspace designed to organize tasks, manage time, and maximize productivity.",
    category: "Frontend Development • Productivity Application",
    badge: "Productivity System",
    shortDescription:
      "A modern, responsive productivity dashboard with a natural language task compiler, Pomodoro focus timer, interactive analytics, and customizable themes.",
    detailedDescription:
      "Zenith is a modern, responsive productivity dashboard built to simplify task management and help users stay focused on their daily goals. Designed with a premium glassmorphism interface, it combines intelligent task creation, customizable organization, productivity tracking, and time management into one unified workspace. Its natural language task compiler allows users to create structured tasks using simple commands for categories, tags, and priorities. The integrated Pomodoro timer helps users manage focused work sessions and breaks, while interactive analytics provide insights into task completion, category distribution, and productivity trends. With five customizable visual themes, persistent local storage, and JSON backup functionality, Zenith delivers a complete client-side productivity experience.",
    technicalImplementation:
      "Built natively with HTML5, CSS3, and modern JavaScript (ES6+). Uses Chart.js for data visualizations, Web Audio API for synthesized timer audio cues, and LocalStorage with full JSON import/export routines for client-side privacy and data persistence.",
    highlights: [
      "Natural language task creation with automatic category, tag, and priority detection",
      "Task organization through customizable categories and tags",
      "Priority management and interactive subtask checklists",
      "Integrated Pomodoro focus timer with configurable intervals",
      "Productivity analytics with interactive charts and insights",
      "Five customizable visual themes",
      "Synthesized sound effects and timer notifications",
      "Automatic data persistence with JSON import and export",
      "Keyboard shortcuts and responsive interface",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Chart.js",
      "Web Audio API",
      "LocalStorage",
      "Responsive Design",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/abdullah911-rgb",
    accentColor: "#8B5CF6",
    gradient: "from-purple-500/20 via-indigo-500/10 to-transparent",
    featured: true,
    architecturePoints: [
      { label: "Interface", value: "Glassmorphism UI & 5 Themes" },
      { label: "Task Engine", value: "Natural Language Parser" },
      { label: "Data Visualization", value: "Chart.js Analytics" },
      { label: "Audio Synthesis", value: "Native Web Audio API" },
    ],
  },
  {
    id: "cybermatch",
    number: "03",
    title: "CyberMatch — Neural Memory Matrix",
    tagline: "Challenge your memory inside a futuristic cyberpunk arcade experience.",
    category: "Game Development • Interactive Web Application",
    badge: "Arcade Experience",
    shortDescription:
      "An interactive browser-based memory matching game featuring a futuristic cyberpunk aesthetic, neon visual effects, synthesized audio, and dynamic difficulty modes.",
    detailedDescription:
      "CyberMatch is an interactive browser-based memory matching game featuring a futuristic cyberpunk aesthetic, neon visual effects, and immersive gameplay. Built entirely with vanilla HTML, CSS, and JavaScript, it transforms the classic memory-matching concept into an engaging arcade experience with multiple difficulty levels and customizable themes. Players can test their memory through different grid configurations, match hidden emoji-based cards, and earn points through consecutive matches. Its combo-based scoring system rewards consistency, while speed and move-count bonuses encourage efficient gameplay. The experience is enhanced with dynamically generated audio effects using the browser's native Web Audio API, animated glassmorphic visuals, and automatically saved personal records.",
    technicalImplementation:
      "Engineered with clean vanilla JavaScript state machines, dynamic DOM manipulation, and CSS hardware-accelerated animations. Sound effects are mathematically synthesized using the Web Audio API without external audio file overhead.",
    highlights: [
      "Three difficulty levels with 4×4, 6×4, and 6×6 game grids",
      "Four interactive themes: Cyberpunk, Neo Food, Bio Animals, and Star Odyssey",
      "Dynamic card matching and randomized gameplay",
      "Combo streaks and multiplier-based scoring",
      "Additional bonuses based on time and moves",
      "Real-time synthesized sound effects and victory animations",
      "Neon animations, glitch effects, and glassmorphic UI",
      "Automatic high-score and completion-time tracking using LocalStorage",
      "Responsive gameplay interface",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Web Audio API",
      "LocalStorage",
      "Neon Animation FX",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/abdullah911-rgb",
    accentColor: "#EC4899",
    gradient: "from-pink-500/20 via-purple-500/10 to-transparent",
    featured: true,
    architecturePoints: [
      { label: "Game Grid", value: "4x4, 6x4, & 6x6 Adaptive Grids" },
      { label: "Sound FX", value: "Browser Web Audio Oscillators" },
      { label: "Aesthetic", value: "Cyberpunk Neon & Glitch Shader" },
      { label: "Leaderboard", value: "LocalStorage High-Score Sync" },
    ],
  },
  {
    id: "swift-lms",
    number: "04",
    title: "Swift Institute LMS — Learning Management System",
    tagline: "A complete digital learning environment connecting students, instructors, and administrators.",
    category: "Full-Stack Development • Education Technology",
    badge: "Commercial EdTech",
    shortDescription:
      "A full-stack Learning Management System featuring role-based dashboards, live Zoom SDK classrooms, email OTP verification, and QR-based automated certificate generation.",
    detailedDescription:
      "Swift Institute LMS is a full-stack Learning Management System developed to streamline online education and simplify academic administration. The platform provides dedicated role-based dashboards for students, instructors, and administrators, enabling structured management of courses, educational content, assessments, and student progress. Students can access enrolled courses, study learning materials, submit assignments, attempt quizzes, attend live Zoom sessions, and monitor their learning progress. Instructors can manage educational content and assessments, while administrators oversee users, courses, and platform operations. The system also integrates OTP-based authentication, automated certificate generation, and QR-based certificate verification to provide a more structured and reliable learning experience.",
    technicalImplementation:
      "Built with React.js, Vite, and Tailwind CSS on the client side, paired with a robust Node.js and Express.js REST API. Persistent relational datastore backed by PostgreSQL through Prisma ORM. Secured via JWT authentication and OTP email verification with Nodemailer. Live classrooms integrated directly using Zoom Meeting SDK.",
    highlights: [
      "Dedicated dashboards for students, instructors, and administrators",
      "Course creation, enrollment, and content management",
      "Learning materials and assignment management",
      "Interactive quizzes and final assessments",
      "Live online classes through Zoom Meeting SDK",
      "Zoom attendance tracking and email-based meeting access",
      "OTP-based email authentication",
      "Student progress tracking and course completion monitoring",
      "Automated certificate generation after meeting completion requirements",
      "QR code and certificate ID-based verification",
      "Email notifications through Nodemailer",
    ],
    technologies: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "JWT",
      "Zoom Meeting SDK",
      "Nodemailer",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/abdullah911-rgb",
    accentColor: "#00F0FF",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    featured: true,
    architecturePoints: [
      { label: "Frontend", value: "React.js + Vite + Tailwind CSS" },
      { label: "Backend API", value: "Node.js + Express.js RESTful" },
      { label: "Database", value: "PostgreSQL with Prisma ORM" },
      { label: "Live Classroom", value: "Zoom Web SDK Integration" },
    ],
  },
  {
    id: "nexttripy",
    number: "05",
    title: "NextTripy — Car & Hotel Rental Marketplace",
    tagline: "Connecting travelers with convenient car and hotel rental opportunities.",
    category: "Full-Stack Development • Travel & Rental Marketplace",
    badge: "Regional Marketplace",
    shortDescription:
      "A dual-market car and hotel rental marketplace platform built for Pakistan and Saudi Arabia, featuring direct WhatsApp booking inquiries and role-based administration.",
    detailedDescription:
      "NextTripy is a modern rental marketplace designed to simplify the process of discovering car and hotel rental options across Pakistan and Saudi Arabia. The platform provides an intuitive browsing experience that allows customers to explore available rental listings, review relevant details, and submit rental inquiries directly through WhatsApp. Built with a modern full-stack architecture, NextTripy combines a responsive frontend with secure authentication, database integration, and administrative management capabilities. Its dedicated admin functionality allows platform administrators to manage rental listings, customer records, and subscription information while maintaining control over marketplace operations.",
    technicalImplementation:
      "Architected using Next.js 15, React 19, TypeScript, and Tailwind CSS with Framer Motion. Backend persistence managed through Neon PostgreSQL and Prisma ORM. Implements secure JWT authentication with HTTP-only cookies, automated SMTP email dispatch via Nodemailer, and seamless WhatsApp inquiry deep-linking deployed on Vercel.",
    highlights: [
      "Car and hotel rental marketplace for Pakistan and Saudi Arabia",
      "Responsive rental browsing and listing interfaces",
      "Detailed rental information and discovery experience",
      "WhatsApp-based rental inquiry functionality",
      "Secure authentication using JWT and HTTP-only cookies",
      "Administrative dashboard for managing rental records",
      "Customer and subscription management",
      "Database integration with PostgreSQL and Prisma ORM",
      "Email functionality through SMTP and Nodemailer",
      "Modern animations and responsive user experience",
    ],
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Prisma ORM",
      "Neon PostgreSQL",
      "JWT",
      "Nodemailer",
      "Vercel",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/abdullah911-rgb",
    accentColor: "#3B82F6",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    featured: true,
    architecturePoints: [
      { label: "Core Stack", value: "Next.js 15 + React 19 + TypeScript" },
      { label: "Cloud DB", value: "Neon Serverless PostgreSQL" },
      { label: "Inquiry Flow", value: "Direct WhatsApp Deep Links" },
      { label: "Deployment", value: "Vercel Edge Infrastructure" },
    ],
  },
  {
    id: "swift-parcel",
    number: "06",
    title: "Swift Parcel — Parcel Management System",
    tagline: "Simplifying parcel operations through centralized shipment and delivery management.",
    category: "Full-Stack Development • Logistics & Management",
    badge: "Logistics SaaS",
    shortDescription:
      "A full-stack logistics and parcel delivery platform with dedicated customer, administrator, and delivery personnel portals, real-time tracking, and inquiry messaging.",
    detailedDescription:
      "Swift Parcel is a parcel management system designed to organize shipment operations and improve coordination between customers, administrators, and delivery personnel. The platform provides dedicated portals for each user role, allowing customers to create parcel orders, view delivery charges, manage payments, and monitor their orders through an organized interface. Administrators can manage the complete parcel workflow, including customer accounts, shipment records, delivery assignments, payments, and system maintenance. Delivery personnel have a separate portal to access assigned shipments and manage their delivery responsibilities. The platform also includes an inquiry messaging feature that enables customers to communicate directly with administrators for assistance.",
    technicalImplementation:
      "Engineered with the MERN stack (MongoDB, Express.js, React.js, Node.js). Implements multi-role JWT authentication, state-driven tracking progression, MongoDB schema design, automated delivery charge calculation, and integrated client-admin inquiry communication.",
    highlights: [
      "Separate customer, administrator, and delivery personnel portals",
      "Customer registration and secure login",
      "Parcel creation and order management",
      "Delivery charges and payment management",
      "Parcel and order tracking",
      "Centralized parcel administration",
      "User and customer account management",
      "Manual delivery personnel assignment",
      "Delivery assignment management",
      "Customer-to-admin inquiry messaging",
      "Organized delivery operations and shipment records",
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "JWT",
      "Mongoose",
      "RESTful APIs",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/abdullah911-rgb",
    accentColor: "#06B6D4",
    gradient: "from-cyan-400/20 via-sky-500/10 to-transparent",
    featured: true,
    architecturePoints: [
      { label: "Tech Stack", value: "MERN Stack Architecture" },
      { label: "Database", value: "MongoDB with Mongoose Schemas" },
      { label: "Portal Access", value: "Customer, Admin & Courier Portals" },
      { label: "Messaging", value: "Customer-to-Admin Support Engine" },
    ],
  },
];
