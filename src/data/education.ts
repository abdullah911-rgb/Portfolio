export interface EducationItem {
  type: "degree" | "certification";
  title: string;
  institution: string;
  period: string;
  location?: string;
  description: string;
  highlights: string[];
  badge: string;
}

export const educationData: EducationItem[] = [
  {
    type: "degree",
    title: "Bachelor of Science in Computer Science (BSCS)",
    institution: "University of Education, Lahore",
    period: "2022 – 2026",
    location: "Lahore, Punjab, Pakistan",
    description:
      "Rigorous 4-year undergraduate degree focusing on core computer science foundations, modern software engineering methodologies, data structures, and distributed architectures.",
    highlights: [
      "Data Structures & Algorithms (C++, Python)",
      "Database Systems (Relational Schema Design & SQL Optimization)",
      "Object-Oriented Programming (OOP) & MVC Software Architecture",
      "Web Technologies & Modern Application Development",
      "Analytical problem-solving and software testing standards",
    ],
    badge: "Undergraduate Degree",
  },
  {
    type: "certification",
    title: "MERN Stack Development",
    institution: "Tech Hub Systems",
    period: "Professional Certification",
    location: "Professional Training",
    description:
      "Completed intensive professional MERN Stack training with hands-on experience building production-grade web applications, robust RESTful APIs, and responsive frontends.",
    highlights: [
      "Full-stack web application development with React.js & Node.js",
      "RESTful API design, middleware patterns, and Express.js routing",
      "NoSQL database modeling with MongoDB and Mongoose",
      "Git version control, collaborative GitHub branching, and code reviews",
      "Secure user authentication (JWT) and client-server state synchronization",
    ],
    badge: "Professional Certification",
  },
];
