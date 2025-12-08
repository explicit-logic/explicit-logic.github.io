import type { Window } from "~/types/window";

export const TIMEZONE = "Europe/Prague";

const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const techStack = [
  {
    category: "Languages",
    items: ["JavaScript", "Node.js", "TypeScript", "PHP", "Rust", "Apex"],
  },
  {
    category: "Frameworks",
    items: ["Fastify", "React.js", "Tanstack", "Next.js", "NestJS", "Laravel", "Symfony", "Wordpress"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "SQLite", "Supabase"],
  },
  {
    category: "DevOps",
    items: ["Cloudflare", "Docker", "Kubernetes", "AWS"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Dev Tools",
    items: ["Cursor", "Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#8957e5",
    link: "https://github.com/explicit-logic",
  },
  {
    id: 2,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#000",
    link: "https://x.com/andrianov_b",
  },
  {
    id: 3,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/bohdan-andrianov-49b656b3",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/me-1.jpg",
  },
  {
    id: 2,
    img: "/images/me-2.jpg",
  },
  {
    id: 3,
    img: "/images/me-3.jpg",
  },
];

export {
  navLinks,
  navIcons,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG: Record<string, Window>  = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  mdfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  wallpapers: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
} as const;

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
