import Quizander from "@/components/Projects/Quizander/Quizander";
import Landing from "@/components/Landing/Landing";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Landing />
      <Skills />
      <Quizander />
      <Contact />
    </div>
  );
}
