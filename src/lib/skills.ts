export interface Skill {
  name: string;
  layer: string;
  svg: string;
}

export const skills: Skill[] = [
  {
    name: "JavaScript",
    layer: "language",
    svg: "javascript",
  },
  {
    name: "HTML",
    layer: "language",
    svg: "html",
  },
  {
    name: "CSS",
    layer: "styling",
    svg: "css",
  },
  {
    name: "Node.js",
    layer: "server",
    svg: "nodejs",
  },
  {
    name: "SQL",
    layer: "queries",
    svg: "sql",
  },
  {
    name: "MongoDB",
    layer: "database",
    svg: "mongodb",
  },
  {
    name: "PostgreSQL",
    layer: "database",
    svg: "postgres",
  },
  {
    name: "TypeScript",
    layer: "language",
    svg: "typescript",
  },
  {
    name: "React.js",
    layer: "framework",
    svg: "react",
  },
  {
    name: "Next.js",
    layer: "framework",
    svg: "nextjs",
  },
  {
    name: "Git",
    layer: "DVCS",
    svg: "git",
  },
  {
    name: "Sanity",
    layer: "cms",
    svg: "sanity",
  },
  {
    name: "GraphCMS",
    layer: "cms",
    svg: "graphcms",
  },
  {
    name: "SCSS",
    layer: "Styling",
    svg: "sass",
  },
  {
    name: "Tailwind CSS",
    layer: "Styling",
    svg: "tailwindcss",
  },
  {
    name: "Prisma",
    layer: "ORM",
    svg: "prisma",
  },
];
