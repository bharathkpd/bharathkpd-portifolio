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

    // Scroll after a tiny layout update delay to prevent scroll collisions
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
    }, 50);
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

      {/* Mobile Full-Screen Overlay Menu */}
      <div
        className={`fixed inset-0 z-50 bg-cream/98 backdrop-blur-md flex flex-col transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Mobile Header inside overlay to keep alignment consistent */}
        <div className="h-16 px-6 flex items-center justify-between border-b-[0.5px] border-beige/40">
          <span className="font-serif text-xl font-bold tracking-tight text-charcoal">
            Bharathkpd.Dev
          </span>
          <button
            onClick={toggleMenu}
            className="flex items-center space-x-1.5 text-charcoal hover:text-terracotta transition-colors font-mono text-xs p-2"
            aria-label="Close menu"
          >
            <span className="text-[10px] text-warmgray/70">close()</span>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation content */}
        <div className="flex-1 flex flex-col justify-between px-8 py-8 overflow-y-auto">
          <nav className="my-auto">
            <ul className="flex flex-col space-y-4 text-left">
              {navLinks.map((link, idx) => {
                const isActive = activeId === link.id;
                return (
                  <li key={link.id} className="overflow-hidden">
                    <a
                      href={link.path}
                      onClick={(e) => handleLinkClick(e, link.id)}
                      className={`group flex items-baseline space-x-3 py-2 transition-colors duration-250 ${
                        isActive ? 'text-terracotta' : 'text-charcoal hover:text-terracotta'
                      }`}
                    >
                      <span className="font-mono text-xs text-warmgray/50 group-hover:text-terracotta/50 select-none">
                        [{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}]
                      </span>
                      <span className="font-serif text-3xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1 inline-block">
                        {link.label}
                      </span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse ml-2 self-center" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Socials & Resume at bottom */}
          <div className="mt-8 border-t-[0.5px] border-beige/60 pt-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-6 py-3 border border-terracotta text-terracotta hover:bg-terracotta hover:text-ivory text-sm font-mono transition-all duration-300 rounded-sm w-full sm:w-auto"
              >
                <FileText className="w-4 h-4" />
                <span>resume.pdf</span>
              </a>
              <div className="flex items-center justify-center space-x-6">
                <a
                  href="mailto:kalavalapudibharathkumar@gmail.com"
                  className="font-mono text-xs text-warmgray hover:text-terracotta transition-colors"
                >
                  email()
                </a>
                <a
                  href="https://github.com/bharathkpd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-warmgray hover:text-terracotta transition-colors"
                >
                  github
                </a>
                <a
                  href="https://linkedin.com/in/bharathkpd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-warmgray hover:text-terracotta transition-colors"
                >
                  linkedin
                </a>
              </div>
            </div>
            <div className="text-center font-mono text-[9px] text-warmgray/50 uppercase tracking-widest">
              Bharathkpd.Dev © 2026
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
