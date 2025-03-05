import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
export default function App() {
  return (
    <main className="relative w-screen ">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Contact />
    </main>
  );
}
