export type navbarItem = {
  title: string;
  href: string;
};

export type navbarConfig = navbarItem[];

export const navbarConfig: navbarConfig = [
  { title: "Stack", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];
