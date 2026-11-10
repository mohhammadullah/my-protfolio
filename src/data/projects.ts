export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  screenshot: string;
  frontendGitHub?: string;
  backendGitHub?: string;
  github?: string;
  liveDemo: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "studiospace",
    name: "StudioSpace",
    category: "Full-Stack Creative Studio Marketplace",
    description:
      "StudioSpace is a peer-to-peer creative studio marketplace where users can discover, explore, and list creative spaces for photography, filmmaking, podcasting, music production, and other creative activities.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    screenshot:
      "https://drive.google.com/uc?export=view&id=1h3ADdqlmnW6NLEw-C67zL6AlrlKHNjXu",
    frontendGitHub: "https://github.com/mohhammadullah/8th-assaignment",
    backendGitHub: "https://github.com/mohhammadullah/8th-assaignment-server",
    liveDemo: "https://studio-space-pearl.vercel.app/",
    featured: true,
  },
  {
    id: "bazardor",
    name: "BazarDor",
    category: "Bangla Market Information Application",
    description:
      "A Bangla-focused web application designed to help users explore product price information and access useful market-related information through a modern user interface.",
    technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS", "MongoDB"],
    screenshot:
      "https://drive.google.com/uc?export=view&id=1XK48D9zSDu9zo8PnMQ0Hp8_zxePp3qYb",
    github: "https://github.com/mohhammadullah/7th-assaignment",
    liveDemo: "https://bazar-dor-three-lime.vercel.app/",
  },
  {
    id: "fitlog",
    name: "FitLog",
    category: "Fitness Tracking Web Application",
    description:
      "A modern fitness tracking web application designed to help users manage fitness activities and workout plans through an intuitive interface.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "API Integration"],
    screenshot:
      "https://drive.google.com/uc?export=view&id=17kuE4KU86_utZNJBv8dLI1Q_yvPz1C63",
    github: "https://github.com/mohhammadullah/6th-assignment",
    liveDemo: "https://6th-assignment-swart.vercel.app/",
  },
];
