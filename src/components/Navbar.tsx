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
    
    // Unlock body scroll immediately so the scroll action works smoothly on mobile
    document.body.style.overflow = '';
    setIsOpen(false);

    // Scroll after the overlay close animation completes
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 64; // offset for sticky navbar height (64px)
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 150);
  };

  return (
    <>
      <header className="sticky top-0 z-[100] w-full bg-ivory/90 backdrop-blur-md border-b-[0.5px] border-beige">
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
          className="md:hidden p-2 text-charcoal hover:text-terracotta transition-colors z-[160]"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </header>

    {/* ============ Mobile Full-Screen Overlay Menu ============ */}
    <div
      className={`fixed inset-0 z-[150] md:hidden transition-all duration-300 ease-in-out ${
        isOpen
          ? 'opacity-100 visible'
          : 'opacity-0 invisible pointer-events-none'
      }`}
      style={{ width: '100vw', height: '100vh' }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-charcoal/95 backdrop-blur-lg" />

      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-32 h-32 rounded-full border border-terracotta/20 animate-pulse" />
        <div className="absolute bottom-[15%] left-[8%] w-20 h-20 rounded-full border border-terracotta/15" />
        <div className="absolute top-[45%] left-[5%] font-mono text-[10px] text-terracotta/20 tracking-widest">{'<nav>'}</div>
        <div className="absolute bottom-[25%] right-[5%] font-mono text-[10px] text-terracotta/20 tracking-widest">{'</nav>'}</div>
        {/* Gradient accent line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-terracotta to-transparent" />
      </div>

      {/* Menu Content */}
      <div className="relative flex flex-col items-center justify-center h-full px-8">
        {/* Header */}
        <div className="absolute top-5 left-6 right-6 flex items-center justify-between">
          <span className="font-serif text-lg font-bold text-ivory/90 tracking-tight">
            Bharathkpd<span className="text-terracotta">.Dev</span>
          </span>
          <button
            onClick={toggleMenu}
            className="flex items-center space-x-2 text-ivory/70 hover:text-terracotta transition-colors"
            aria-label="Close menu"
          >
            <span className="font-mono text-[10px] tracking-wider uppercase text-ivory/40">close</span>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col items-center space-y-1 w-full max-w-xs">
          {navLinks.map((link, idx) => {
            const isActive = activeId === link.id;
            return (
              <a
                key={link.id}
                href={link.path}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`group flex items-center justify-center w-full py-3 transition-all duration-300 ${
                  isActive
                    ? 'text-terracotta'
                    : 'text-ivory/70 hover:text-terracotta'
                }`}
              >
                <span className="font-mono text-[10px] mr-3 text-terracotta/60 tabular-nums">
                  0{idx + 1}
                </span>
                <span className={`font-serif text-xl tracking-wide ${
                  isActive ? 'font-bold' : 'font-normal'
                }`}>
                  {link.label}
                </span>
                {isActive && (
                  <span className="ml-3 w-2 h-2 rounded-full bg-terracotta animate-pulse" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Bottom section: Resume + social hint */}
        <div className="absolute bottom-8 left-6 right-6 flex flex-col items-center space-y-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 border border-terracotta/60 text-terracotta hover:bg-terracotta hover:text-ivory text-sm font-mono transition-all duration-300 rounded-sm"
          >
            <FileText className="w-4 h-4" />
            <span>resume.pdf</span>
          </a>
          <p className="font-mono text-[9px] text-ivory/25 tracking-widest uppercase">
            © 2025 Bharathkpd • Built with React + Vite
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
