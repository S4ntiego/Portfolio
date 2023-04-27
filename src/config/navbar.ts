export type navbarItem = {
  title: string;
  href: string;
};

export type navbarConfig = navbarItem[];

export const navbarConfig: navbarConfig = [
  { title: "Projects", href: "#projects" },
  { title: "Stack", href: "#skills" },
  { title: "Contact", href: "#contact" },
];
