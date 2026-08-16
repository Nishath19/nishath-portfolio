import { About } from "@/components/About";
import { Aurora } from "@/components/Aurora";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Stats } from "@/components/Stats";
import { useReveal } from "@/hooks/useReveal";

export default function App() {
  useReveal();

  return (
    <div className="site">
      <Aurora />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
