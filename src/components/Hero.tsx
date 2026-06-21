import { useState, useEffect } from 'react';
import { FileText, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import profileImg from '../assets/profile.jpg';

export function Hero() {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [cursorBlink, setCursorBlink] = useState(true);
  const [currentPhase, setCurrentPhase] = useState<'line1' | 'wait1' | 'name' | 'wait2' | 'roles'>('line1');

  const textLine1 = 'kalavalapudi@dev:~$ whoami';
  const nameText = 'Kalavalapudi Bharath Kumar';
  
  const roles = [
    'Software Developer',
    'MERN Stack Developer',
    'AI-Assisted Web Developer'
  ];
  
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Cursor blinking animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorBlink((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Main terminal controller
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (currentPhase === 'line1') {
      if (line1.length < textLine1.length) {
        timer = setTimeout(() => {
          setLine1(textLine1.slice(0, line1.length + 1));
        }, 80);
      } else {
        setCurrentPhase('wait1');
      }
    } else if (currentPhase === 'wait1') {
      timer = setTimeout(() => {
        setCurrentPhase('name');
      }, 500);
    } else if (currentPhase === 'name') {
      if (line2.length < nameText.length) {
        timer = setTimeout(() => {
          setLine2(nameText.slice(0, line2.length + 1));
        }, 60);
      } else {
        setCurrentPhase('wait2');
      }
    } else if (currentPhase === 'wait2') {
      timer = setTimeout(() => {
        setCurrentPhase('roles');
        setRoleText(nameText);
        setIsDeleting(true);
      }, 2000);
    } else if (currentPhase === 'roles') {
      if (isDeleting) {
        if (roleText.length > 0) {
          timer = setTimeout(() => {
            setRoleText(roleText.slice(0, -1));
          }, 30);
        } else {
          setIsDeleting(false);
          timer = setTimeout(() => {}, 200);
        }
      } else {
        const targetText = roles[roleIndex];
        if (roleText.length < targetText.length) {
          timer = setTimeout(() => {
            setRoleText(targetText.slice(0, roleText.length + 1));
          }, 60);
        } else {
          // Pause before deleting
          timer = setTimeout(() => {
            setIsDeleting(true);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }, 2000);
        }
      }
    }

    return () => clearTimeout(timer);
  }, [line1, line2, currentPhase, roleText, isDeleting, roleIndex]);

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const offset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center bg-ivory py-12 border-b-[0.5px] border-beige">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full">
        
        {/* Left Column: Text Content */}
        <div className="md:col-span-7 flex flex-col justify-center space-y-8 order-2 md:order-1">
          
          {/* Typing Terminal */}
          <div className="w-full max-w-lg bg-cream border-[0.5px] border-beige rounded p-4 font-mono text-sm text-charcoal">
            {/* Terminal Window Controls */}
            <div className="flex items-center space-x-1.5 mb-3 border-b-[0.5px] border-beige/60 pb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-terracotta/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-warmgray/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-beige" />
            </div>
            
            {/* Terminal lines */}
            <div className="space-y-1.5 text-xs sm:text-sm">
              <div className="flex items-center">
                <span className="text-terracotta select-none mr-2">➜</span>
                <span>{line1}</span>
                {currentPhase === 'line1' && (
                  <span className={`w-1.5 h-4 bg-terracotta ml-0.5 ${cursorBlink ? 'opacity-100' : 'opacity-0'}`} />
                )}
              </div>
              
              {(currentPhase !== 'line1' && currentPhase !== 'wait1') && (
                <div className="flex items-center min-h-[1.5rem]">
                  <span className="text-warmgray select-none mr-2">↳</span>
                  <span className="text-charcoal font-semibold">
                    {currentPhase === 'roles' ? roleText : line2}
                  </span>
                  <span className={`w-1.5 h-4 bg-terracotta ml-0.5 ${cursorBlink ? 'opacity-100' : 'opacity-0'}`} />
                </div>
              )}
            </div>
          </div>

          {/* Title and Tagline */}
          <Reveal delay={200}>
            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal leading-tight font-bold">
                Kalavalapudi <br />
                <span className="text-terracotta font-serif">Bharath Kumar</span>
              </h1>
              <p className="font-serif text-lg sm:text-xl text-warmgray italic max-w-xl">
                "{`Building scalable solutions. Solving real-world problems.`}"
              </p>
            </div>
          </Reveal>

          {/* CTA Buttons */}
          <Reveal delay={400}>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="flex items-center space-x-2 px-6 py-3 bg-terracotta text-ivory border border-terracotta hover:bg-transparent hover:text-terracotta transition-all duration-300 font-mono text-sm rounded-sm"
              >
                <span>View projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 border border-terracotta text-terracotta hover:bg-terracotta hover:text-ivory transition-all duration-300 font-mono text-sm rounded-sm"
              >
                <FileText className="w-4 h-4" />
                <span>Download resume</span>
              </a>
            </div>
          </Reveal>

          {/* Colored Tech Icons */}
          <Reveal delay={600}>
            <div className="border-t-[0.5px] border-beige pt-6">
              <p className="text-xs font-mono text-warmgray tracking-widest uppercase mb-3">Core Stack</p>
              <div className="flex space-x-6 items-center">
                {/* JS Icon */}
                <div className="group flex items-center space-x-1.5 text-[#F7DF1E] hover:scale-105 transition-transform duration-300 cursor-default" title="JavaScript">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M3 3h18v18H3V3zm12.525 10.95c-.12-.66-.54-1.2-1.32-1.38-.855-.21-1.275-.525-1.275-1.005 0-.465.42-.75 1.02-.75.6 0 .975.255 1.155.675.09.225.27.345.525.345h1.23c.3 0 .42-.195.3-.495-.405-1.02-1.365-1.635-2.685-1.635-1.44 0-2.43.915-2.43 2.1 0 1.29.93 1.83 2.295 2.175.9.225 1.2.555 1.2 1.035 0 .54-.48.87-1.155.87-.825 0-1.245-.375-1.425-.975-.09-.27-.27-.375-.54-.375h-1.26c-.3 0-.39.21-.27.525.435 1.155 1.395 1.95 2.91 1.95 1.635 0 2.76-.855 2.76-2.295 0-1.125-.66-1.74-2.07-2.07zm-7.695.045c.075-.465.345-.735.855-.735h1.185c.3 0 .42-.195.3-.495-.36-.93-1.245-1.575-2.415-1.575-1.65 0-2.73 1.095-2.73 2.895s1.08 2.895 2.73 2.895c1.23 0 2.1-.645 2.475-1.635.09-.27-.03-.495-.3-.495H9.285c-.51 0-.795-.27-.855-.735H12c.3 0 .39-.24.27-.525l-.465-1.035c-.105-.285-.3-.495-.585-.495H7.83z"/>
                  </svg>
                  <span className="font-mono text-xs font-semibold text-charcoal">JS</span>
                </div>

                {/* React Icon */}
                <div className="group flex items-center space-x-1.5 text-[#61DAFB] hover:scale-105 transition-transform duration-300 cursor-default" title="React.js">
                  <svg className="w-5 h-5 animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="2"/>
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" strokeDasharray="3 3"/>
                    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)"/>
                    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)"/>
                    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)"/>
                  </svg>
                  <span className="font-mono text-xs font-semibold text-charcoal">React</span>
                </div>

                {/* Node Icon */}
                <div className="group flex items-center space-x-1.5 text-[#68A063] hover:scale-105 transition-transform duration-300 cursor-default" title="Node.js">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2z"/>
                    <path d="M12 22V12"/>
                    <path d="M12 12L3.5 7"/>
                    <path d="M12 12l8.5-5"/>
                  </svg>
                  <span className="font-mono text-xs font-semibold text-charcoal">Node</span>
                </div>

                {/* MongoDB Icon */}
                <div className="group flex items-center space-x-1.5 text-[#47A248] hover:scale-105 transition-transform duration-300 cursor-default" title="MongoDB">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2c0 0-4 4.5-4 8.5C8 13.5 10 16 12 22c2-6 4-8.5 4-11.5C16 6.5 12 2 12 2z"/>
                    <path d="M12 6v10"/>
                  </svg>
                  <span className="font-mono text-xs font-semibold text-charcoal">Mongo</span>
                </div>

                {/* TS Icon */}
                <div className="group flex items-center space-x-1.5 text-[#3178C6] hover:scale-105 transition-transform duration-300 cursor-default" title="TypeScript">
                  <div className="w-5 h-5 border-2 border-current rounded flex items-center justify-center font-mono text-[9px] font-bold">TS</div>
                  <span className="font-mono text-xs font-semibold text-charcoal">TS</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Image */}
        <div className="md:col-span-5 flex justify-center order-1 md:order-2">
          <Reveal delay={300} direction="none">
            <div className="relative group">
              {/* Outer decorative line circle */}
              <div className="absolute -inset-2 rounded-full border border-dashed border-beige group-hover:border-terracotta transition-colors duration-500 animate-spin-slow pointer-events-none" />
              
              {/* Image Frame */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border-[0.5px] border-beige overflow-hidden transition-all duration-750 ease-in-out bg-cream flex items-center justify-center">
                <img
                  src={profileImg}
                  alt="Kalavalapudi Bharath Kumar"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-750 ease-in-out"
                  loading="eager"
                />
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
