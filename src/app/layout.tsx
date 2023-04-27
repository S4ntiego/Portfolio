import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Familjen_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter-font",
});

const familjen = Familjen_Grotesk({
  subsets: ["latin"],
  variable: "--familjen-font",
});

export const metadata = {
  title: "Adam Ksiazek Portfolio",
  description: "Portfolio website created by Adam Ksiazek",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={familjen.variable + " " + inter.variable} lang="en">
      <body>
        <div>
          <Navbar />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
