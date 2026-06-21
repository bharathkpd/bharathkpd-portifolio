import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Strengths } from './components/Strengths';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-ivory text-charcoal font-sans selection:bg-terracotta/20 selection:text-terracotta">
      {/* Top scroll indicator */}
      <ScrollProgress />
      
      {/* Sticky navigation */}
      <Navbar />
      
      {/* Main sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Strengths />
        <Contact />
      </main>
    </div>
  );
}
