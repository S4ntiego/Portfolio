import Navbar from "@/components/Navbar/Navbar";
import "./globals.scss";
import { Inter } from "next/font/google";
import { Familjen_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter-font",
});

const familjen = Familjen_Grotesk({
  subsets: ["latin"],
  variable: "--fam-font",
});

export const metadata = {
  title: "Adam Ksiazek Portfolio",
  description: "Portfolio website created by Adam Ksiazek",
  keywords: ["Next.js", "React", "Adam Ksiazek", "CSS", "TypeScript"],
  authors: [
    {
      name: "Adam Ksiazek",
      url: "https://github.com/S4ntiego",
    },
  ],
  creator: "Adam Ksiazek",
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-16x16.png",
    apple: "apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={familjen.variable + " " + inter.variable} lang="en">
      <head />
      <body>
        <div>
          <Navbar />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
