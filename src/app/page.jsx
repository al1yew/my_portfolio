import About from "../components/About";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import HiringValue from "../components/HiringValue";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
import Writing from "../components/Writing";
import { jsonLd } from "../data/portfolio";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main">
        <Hero />
        <HiringValue />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Writing />
        <TechStack />
        <Contact />
      </main>
    </>
  );
}
