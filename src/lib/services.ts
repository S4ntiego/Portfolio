export interface Service {
  name: string;
  layer: string;
  svg: string;
}

export const services: Service[] = [
  {
    name: "AWS S3",
    layer: "storage",
    svg: "aws",
  },
  {
    name: "Vercel",
    layer: "hosting",
    svg: "vercel",
  },
  {
    name: "Heroku",
    layer: "hosting",
    svg: "heroku",
  },
  {
    name: "Cloudfront",
    layer: "cdn",
    svg: "cloudfront",
  },
];
