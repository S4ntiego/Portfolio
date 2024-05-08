export interface Software {
  name: string;
  layer: string;
  svg: string;
}

export const software: Software[] = [
  {
    name: "Figma",
    layer: "design",
    svg: "figma",
  },
  {
    name: "Photoshop",
    layer: "design",
    svg: "photoshop",
  },
  {
    name: "Premiere",
    layer: "design",
    svg: "premiere",
  },
  {
    name: "Illustrator",
    layer: "design",
    svg: "illustrator",
  },
  { name: "VS Code", layer: "ide", svg: "vscode" },
  {
    name: "Excel",
    layer: "spreadsheets",
    svg: "excel",
  },
  {
    name: "Word",
    layer: "documents",
    svg: "word",
  },
  {
    name: "PowerPoint",
    layer: "presentations",
    svg: "powerpoint",
  },
  {
    name: "Power BI",
    layer: "visualization",
    svg: "powerbi"
  }
];
