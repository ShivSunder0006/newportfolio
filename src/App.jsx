import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import PaperVisualizations from './components/PaperVisualizations';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="bg-space-blue min-h-screen font-sans selection:bg-neon-cyan selection:text-space-blue w-full overflow-hidden">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <PaperVisualizations />
        <Certifications />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
