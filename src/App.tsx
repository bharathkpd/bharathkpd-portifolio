import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Strengths } from './components/Strengths';
import { Contact } from './components/Contact';

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-[120] p-3 bg-terracotta text-ivory border border-terracotta hover:bg-cream hover:text-terracotta transition-all duration-300 rounded-full shadow-lg flex items-center justify-center pointer-events-auto ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Return to home"
    >
      <ArrowUp className="w-5 h-5 animate-pulse" />
    </button>
  );
}

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

      {/* Floating Return to Home Button */}
      <BackToTop />
    </div>
  );
}
