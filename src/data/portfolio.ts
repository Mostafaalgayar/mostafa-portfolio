export const profile = {
  name: "Mostafa Algayar",
  role: "Junior Front-End Developer",
  email: "mostafaalgayar845@gmail.com",
  linkedin: "https://www.linkedin.com/in/mostafa-algayar-093a67279",
  github: "https://github.com/Mostafaalgayar",
  whatsapp: "https://wa.me/201111339261?text=Hi+Mostafa%2C+I+found+your+portfolio+and+would+like+to+get+in+touch.",
  location: "Cairo, Egypt",
  intro:
    "I build modern, responsive, and user-friendly web experiences. I enjoy turning ideas into clean interfaces and solving real problems through code.",
};

export const skills = [
  { name: "HTML5", category: "Core" },
  { name: "CSS3", category: "Core" },
  { name: "JavaScript", category: "Core" },
  { name: "TypeScript", category: "Core" },
  { name: "React", category: "Frameworks" },
  { name: "Next.js", category: "Frameworks" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Bootstrap", category: "Styling" },
  { name: "React Hook Form", category: "Tools" },
  { name: "Zod", category: "Tools" },
  { name: "REST APIs", category: "Tools" },
  { name: "Axios", category: "Tools" },
  { name: "Git & GitHub", category: "Tools" },
];

export type Project = {
  number: string;
  name: string;
  type: string;
  description: string;
  stack: string[];
  status: string;
  link?: string;
  github?: string;
  accent: "blue" | "green" | "orange";
};

export const projects: Project[] = [
  {
    number: "01",
    name: "Adasa",
    type: "Photography Blog",
    description:
      "A photography-focused blog experience designed to present visual content through a clean layout, thoughtful typography, and responsive pages.",
    stack: ["React", "Tailwind CSS", "Responsive Design"],
    status: "Live project",
    link: "https://adasa-psi.vercel.app/",
    github: "https://github.com/Mostafaalgayar/Adasa",
    accent: "orange",
  },
  {
    number: "02",
    name: "Haven",
    type: "Social Media Application",
    description:
      "A social media application focused on core user interactions, including authentication, posts, comments, and image uploads.",
    stack: ["React", "TypeScript", "Tailwind CSS", "REST API"],
    status: "In development",
    accent: "green",
  },
  {
    number: "03",
    name: "E-Commerce Store",
    type: "E-Commerce Application",
    description:
      "An e-commerce application planned to cover product browsing, cart, and checkout, with a clean and responsive storefront.",
    stack: ["React", "TypeScript", "Tailwind CSS", "REST API"],
    status: "Planned / In progress",
    accent: "blue",
  },
];
