export interface PersonalInfo {
  name: string;
  role: string;
  subtitle: string;
  bio: string;
  fullBio: string[];
  location: string;
  email: string;
  phone: string;
  whatsappUrl: string;
  github: string;
  linkedin: string;
  avatar: string;
  availableForHire: boolean;
  degree: string;
  university: string;
  graduationYear: string;
}

export const personalInfo: PersonalInfo = {
  name: "Muhammad Abdullah",
  role: "Full-Stack Developer | Python & AI/ML Developer | E-commerce Operations | Truck Dispatching",
  subtitle: "Full-Stack Developer | Python & AI/ML Developer | E-commerce Operations | Truck Dispatching",
  bio: "Computer Science graduate and versatile technology professional specializing in building responsive, scalable web applications, RESTful APIs, intelligent AI/ML software solutions, and cross-functional digital operations.",
  avatar: "/assets/profile.jpg",
  fullBio: [
    "I am a Computer Science graduate and versatile technology professional with experience in full-stack web development, Python development, AI-powered applications, mobile app development, e-commerce operations, and truck dispatching.",
    "I specialize in building responsive, scalable web applications, RESTful APIs, and intelligent software solutions using modern technologies such as React.js, Next.js, Node.js, Express.js, Python, FastAPI, Flutter, and machine learning models.",
    "Alongside software development, I have practical experience in e-commerce brand management and marketplace operations, working with platforms including Amazon, Walmart, eBay, Etsy, TikTok Shop, Temu, Alibaba, Mercari, and Faire. My experience includes product listing optimization, SEO, sales and performance analysis, KPI reporting, advertising campaigns, catalog management, and marketplace operations.",
    "I also have experience in truck dispatching, with an understanding of load coordination, carrier communication, freight operations, load securements, and transportation logistics.",
    "I enjoy combining technical problem-solving, analytical thinking, and business understanding to develop practical solutions, improve workflows, and deliver meaningful results. I am continuously exploring emerging technologies, particularly Artificial Intelligence, Machine Learning, and intelligent application development.",
  ],
  location: "Lahore, Punjab, Pakistan",
  email: "mabdullahwasifdev@gmail.com",
  phone: "+92 306 7812595",
  whatsappUrl: "https://wa.me/923067812595",
  github: "https://github.com/abdullah911-rgb",
  linkedin: "https://linkedin.com/in/mabdullahw/",
  availableForHire: true,
  degree: "Bachelor of Science in Computer Science (BSCS)",
  university: "University of Education, Lahore",
  graduationYear: "2022 – 2026",
};

export const heroStats = [
  { value: "BSCS", label: "University of Education, Lahore", sub: "2022 - 2026" },
  { value: "6+", label: "Engineered Applications", sub: "AI, Full-Stack & Mobile" },
  { value: "9+", label: "Marketplaces Managed", sub: "Global E-Commerce Operations" },
  { value: "100%", label: "Remote & Client Ready", sub: "Software & Logistics" },
];
