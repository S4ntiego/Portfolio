import Landing from "@/components/Landing/Landing";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Landing />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
