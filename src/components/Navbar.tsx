import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';

interface NavLink {
  label: string;
  id: string;
  path: string;
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  const navLinks: NavLink[] = [
    { label: 'Home', id: 'home', path: '#home' },
    { label: 'About', id: 'about', path: '#about' },
    { label: 'Skills', id: 'skills', path: '#skills' },
    { label: 'Projects', id: 'projects', path: '#projects' },
    { label: 'Education', id: 'education', path: '#education' },
    { label: 'Strengths', id: 'strengths', path: '#strengths' },
    { label: 'Contact', id: 'contact', path: '#contact' },
  ];

  const activeId = useScrollSpy(navLinks.map((link) => link.id));

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 64; // offset for sticky navbar height (64px)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-ivory/90 backdrop-blur-md border-b-[0.5px] border-beige">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, 'home')}
          className="font-serif text-xl font-bold tracking-tight text-charcoal hover:text-terracotta transition-colors duration-250"
        >
          Bharathkpd.Dev
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6 text-sm font-medium tracking-wide">
            {navLinks.map((link) => {
              const isActive = activeId === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={link.path}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className={`relative py-2 transition-colors duration-250 hover:text-terracotta ${
                      isActive ? 'text-terracotta font-semibold' : 'text-warmgray'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-terracotta animate-fade-in" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Resume button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 border border-terracotta text-terracotta hover:bg-terracotta hover:text-ivory text-xs font-mono transition-all duration-300 rounded-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>resume.pdf</span>
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-charcoal hover:text-terracotta transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Slide-in Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-charcoal/20 md:hidden" onClick={toggleMenu} />
      )}
      
      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-cream border-l-[0.5px] border-beige shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b-[0.5px] border-beige/40">
          <span className="font-mono text-[10px] text-warmgray uppercase tracking-widest">Navigation</span>
          <button
            onClick={toggleMenu}
            className="flex items-center space-x-1.5 text-charcoal hover:text-terracotta transition-colors font-mono text-xs"
            aria-label="Close menu"
          >
            <span className="text-[10px] text-warmgray/70">close()</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        <nav className="flex flex-col px-6 mt-4 justify-between h-[calc(100%-8rem)]">
          <ul className="flex flex-col divide-y-[0.5px] divide-beige/50">
            {navLinks.map((link, idx) => {
              const isActive = activeId === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={link.path}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className={`flex items-center justify-between py-4 transition-colors duration-250 ${
                      isActive ? 'text-terracotta font-semibold' : 'text-warmgray'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />}
                      <span className="font-sans text-sm tracking-wide">{link.label}</span>
                    </div>
                    <span className="font-mono text-[10px] text-terracotta/75">0{idx + 1}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="pt-6 border-t-[0.5px] border-beige/50 mt-auto">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 px-4 py-3 bg-cream border border-terracotta text-terracotta hover:bg-terracotta hover:text-ivory text-sm font-mono transition-all duration-300 rounded-sm w-full"
            >
              <FileText className="w-4 h-4" />
              <span>resume.pdf</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
