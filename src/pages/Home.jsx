import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import PaperVisualizations from '../components/PaperVisualizations';
import Certifications from '../components/Certifications';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import BlogSection from '../components/BlogSection';

function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <BlogSection />
      <PaperVisualizations />
      <Certifications />
      <Skills />
      <Contact />
    </main>
  );
}

export default Home;
