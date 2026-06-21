import React from 'react';
import { Reveal } from './Reveal';

interface SkillGroup {
  category: string;
  path: string;
  items: string[];
}

export function Skills() {
  const skillGroups: SkillGroup[] = [
    {
      category: 'Languages',
      path: '~/skills/languages.sh',
      items: ['JavaScript', 'Python', 'HTML5', 'CSS3'],
    },
    {
      category: 'Frontend',
      path: '~/skills/frontend.json',
      items: ['React.js', 'Responsive Web Design', 'REST API Integration'],
    },
    {
      category: 'Backend',
      path: '~/skills/backend.config',
      items: ['Node.js', 'Express.js'],
    },
    {
      category: 'Database',
      path: '~/skills/db_schema.sql',
      items: ['MongoDB', 'SQL'],
    },
    {
      category: 'Tools',
      path: '~/skills/tools_list.env',
      items: ['Git', 'GitHub', 'VS Code', 'Postman'],
    },
    {
      category: 'AI Dev Tools',
      path: '~/skills/ai_assistants.log',
      items: ['ChatGPT', 'Claude AI', 'Cursor AI', 'GitHub Copilot'],
    },
  ];

  // Helper to render official brand logo SVGs and hover colors for each skill
  const getSkillConfig = (skill: string): { icon: React.ReactNode; colorClass: string; borderHoverClass: string } => {
    switch (skill) {
      case 'JavaScript':
        return {
          icon: (
            <svg className="w-3.5 h-3.5 text-[#F7DF1E] fill-current" viewBox="0 0 24 24">
              <path d="M3 3h18v18H3V3zm12.525 10.95c-.12-.66-.54-1.2-1.32-1.38-.855-.21-1.275-.525-1.275-1.005 0-.465.42-.75 1.02-.75.6 0 .975.255 1.155.675.09.225.27.345.525.345h1.23c.3 0 .42-.195.3-.495-.405-1.02-1.365-1.635-2.685-1.635-1.44 0-2.43.915-2.43 2.1 0 1.29.93 1.83 2.295 2.175.9.225 1.2.555 1.2 1.035 0 .54-.48.87-1.155.87-.825 0-1.245-.375-1.425-.975-.09-.27-.27-.375-.54-.375h-1.26c-.3 0-.39.21-.27.525.435 1.155 1.395 1.95 2.91 1.95 1.635 0 2.76-.855 2.76-2.295 0-1.125-.66-1.74-2.07-2.07zm-7.695.045c.075-.465.345-.735.855-.735h1.185c.3 0 .42-.195.3-.495-.36-.93-1.245-1.575-2.415-1.575-1.65 0-2.73 1.095-2.73 2.895s1.08 2.895 2.73 2.895c1.23 0 2.1-.645 2.475-1.635.09-.27-.03-.495-.3-.495H9.285c-.51 0-.795-.27-.855-.735H12c.3 0 .39-.24.27-.525l-.465-1.035c-.105-.285-.3-.495-.585-.495H7.83z"/>
            </svg>
          ),
          colorClass: 'text-charcoal hover:text-[#F7DF1E]',
          borderHoverClass: 'hover:border-[#F7DF1E]'
        };
      case 'Python':
        return {
          icon: (
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M11.968 0C5.556 0 5.64 2.775 5.64 2.775l.006 2.87h6.417v.903H3.61s-3.567.4-3.567 5.7c0 5.3 3.12 5.518 3.12 5.518h1.86v-2.613c0-3.09 2.502-5.59 5.592-5.59h6.417v-3.79c0-5.71-5.064-5.772-5.064-5.772H11.968z" fill="#3776AB"/>
              <path d="M12.032 24c6.413 0 6.329-2.775 6.329-2.775l-.006-2.87h-6.417v-.903h8.453s3.567-.4 3.567-5.7c0-5.3-3.12-5.518-3.12-5.518h-1.86v2.613c0 3.09-2.502 5.59-5.592 5.59H6.91v3.79c0 5.71 5.064 5.772 5.064 5.772h.057z" fill="#FFD43B"/>
            </svg>
          ),
          colorClass: 'text-charcoal hover:text-[#3776AB]',
          borderHoverClass: 'hover:border-[#3776AB]'
        };
      case 'HTML5':
        return {
          icon: (
            <svg className="w-3.5 h-3.5 text-[#E34F26] fill-current" viewBox="0 0 24 24">
              <path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.437L1.5 0zm10.5 5.766v4.618h4.29l-.29 3.255-4 1.11v2.302l6.305-1.753.845-9.532H12zm0 11.234l-4-1.11-.257-2.88H5.34l.515 5.743L12 20.5v-3.5zM12 5.766H6.1l.4 4.618h5.5v-4.618z"/>
            </svg>
          ),
          colorClass: 'text-charcoal hover:text-[#E34F26]',
          borderHoverClass: 'hover:border-[#E34F26]'
        };
      case 'CSS3':
        return {
          icon: (
            <svg className="w-3.5 h-3.5 text-[#1572B6] fill-current" viewBox="0 0 24 24">
              <path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.437L1.5 0zm10.5 5.766v4.618h4.29l-.29 3.255-4 1.11v2.302l6.305-1.753.845-9.532H12zm0 11.234l-4-1.11-.257-2.88H5.34l.515 5.743L12 20.5v-3.5zM12 5.766H6.1l.4 4.618h5.5v-4.618z"/>
            </svg>
          ),
          colorClass: 'text-charcoal hover:text-[#1572B6]',
          borderHoverClass: 'hover:border-[#1572B6]'
        };
      case 'React.js':
        return {
          icon: (
            <svg className="w-3.5 h-3.5 text-[#61DAFB] fill-none stroke-current animate-spin-slow" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="2" fill="currentColor"/>
              <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)"/>
              <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)"/>
              <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)"/>
            </svg>
          ),
          colorClass: 'text-charcoal hover:text-[#61DAFB]',
          borderHoverClass: 'hover:border-[#61DAFB]'
        };
      case 'Node.js':
        return {
          icon: (
            <svg className="w-3.5 h-3.5 text-[#339933] fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2z"/>
              <path d="M12 22V12"/>
              <path d="M12 12L3.5 7"/>
              <path d="M12 12l8.5-5"/>
            </svg>
          ),
          colorClass: 'text-charcoal hover:text-[#339933]',
          borderHoverClass: 'hover:border-[#339933]'
        };
      case 'Express.js':
        return {
          icon: (
            <div className="w-3.5 h-3.5 border border-charcoal rounded-sm flex items-center justify-center font-mono text-[8px] font-bold text-charcoal hover:bg-charcoal hover:text-ivory">ex</div>
          ),
          colorClass: 'text-charcoal hover:text-[#000000]',
          borderHoverClass: 'hover:border-charcoal'
        };
      case 'MongoDB':
        return {
          icon: (
            <svg className="w-3.5 h-3.5 text-[#47A248] fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 2c0 0-4 4.5-4 8.5C8 13.5 10 16 12 22c2-6 4-8.5 4-11.5C16 6.5 12 2 12 2z"/>
              <path d="M12 6v10"/>
            </svg>
          ),
          colorClass: 'text-charcoal hover:text-[#47A248]',
          borderHoverClass: 'hover:border-[#47A248]'
        };
      case 'SQL':
        return {
          icon: (
            <svg className="w-3.5 h-3.5 text-[#4479A1] fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
              <ellipse cx="12" cy="5" rx="9" ry="3"/>
              <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
              <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6"/>
            </svg>
          ),
          colorClass: 'text-charcoal hover:text-[#4479A1]',
          borderHoverClass: 'hover:border-[#4479A1]'
        };
      case 'Git':
        return {
          icon: (
            <svg className="w-3.5 h-3.5 text-[#F05032] fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="18" cy="18" r="3"/>
              <circle cx="6" cy="6" r="3"/>
              <circle cx="6" cy="18" r="3"/>
              <path d="M18 15V9a4 4 0 0 0-4-4h-5"/>
              <path d="M6 9v6"/>
            </svg>
          ),
          colorClass: 'text-charcoal hover:text-[#F05032]',
          borderHoverClass: 'hover:border-[#F05032]'
        };
      case 'GitHub':
        return {
          icon: (
            <svg className="w-3.5 h-3.5 text-[#181717] fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          ),
          colorClass: 'text-charcoal hover:text-[#181717]',
          borderHoverClass: 'hover:border-[#181717]'
        };
      case 'VS Code':
        return {
          icon: (
            <svg className="w-3.5 h-3.5 text-[#007ACC] fill-current" viewBox="0 0 24 24">
              <path d="M23.985 6.804l-3.328-3.08a.867.867 0 0 0-.936-.145L12 7.028v9.945l7.72 3.45a.868.868 0 0 0 .937-.145l3.328-3.081a.87.87 0 0 0 .015-1.272l-5.69-5.32 5.69-5.32c.355-.333.36-.879.015-1.272zM19.16 12l-4.52 4.225V7.775L19.16 12zM1.015 6.804c-.355.333-.36.879-.015 1.272l5.69 5.32-5.69 5.32a.87.87 0 0 0-.015 1.272l3.328 3.08a.867.867 0 0 0 .936.145L13.06 19.68v-9.945L5.34 6.285a.868.868 0 0 0-.937.145l-3.328 3.081a.87.87 0 0 0-.06 1.293zM4.84 12l4.52-4.225v8.45L4.84 12z"/>
            </svg>
          ),
          colorClass: 'text-charcoal hover:text-[#007ACC]',
          borderHoverClass: 'hover:border-[#007ACC]'
        };
      case 'Postman':
        return {
          icon: (
            <svg className="w-3.5 h-3.5 text-[#FF6C37] fill-current" viewBox="0 0 24 24">
              <path d="M22.95 11.23c-.15-2.22-1.35-4.22-3.15-5.55-1.92-1.42-4.32-2.12-6.72-1.98-2.67.15-5.1 1.23-6.9 3.03-1.8 1.8-2.88 4.23-3.03 6.9-.15 2.4.55 4.8 1.98 6.72 1.33 1.8 3.33 3 5.55 3.15 1.05.08 2.1-.08 3.08-.45.38-.15.6-.53.53-.94a.76.76 0 0 0-.6-.6c-.68.15-1.35.23-2.03.15-1.65-.08-3.15-.9-4.13-2.25-1.05-1.35-1.58-3.08-1.42-4.88.15-2.03.98-3.83 2.33-5.18s3.15-2.18 5.18-2.33c1.8-.15 3.53.3 4.88 1.42 1.35.98 2.18 2.48 2.25 4.13.08.68 0 1.35-.15 2.03a.74.74 0 0 0 .6.6c.45.08.83-.15.98-.53.38-.98.53-2.03.45-3.08zM12 8.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75zm0 6a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm6.75-3.75a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0V11.25a.75.75 0 0 0-.75-.75z"/>
            </svg>
          ),
          colorClass: 'text-charcoal hover:text-[#FF6C37]',
          borderHoverClass: 'hover:border-[#FF6C37]'
        };
      case 'ChatGPT':
        return {
          icon: (
            <svg className="w-3.5 h-3.5 text-[#10A37F] fill-none stroke-current animate-pulse" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm0-12a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"/>
            </svg>
          ),
          colorClass: 'text-charcoal hover:text-[#10A37F]',
          borderHoverClass: 'hover:border-[#10A37F]'
        };
      case 'Claude AI':
        return {
          icon: (
            <svg className="w-3.5 h-3.5 text-[#D97752] fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 3a9 9 0 0 0-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9c0-4.97-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
            </svg>
          ),
          colorClass: 'text-charcoal hover:text-[#D97752]',
          borderHoverClass: 'hover:border-[#D97752]'
        };
      case 'Cursor AI':
        return {
          icon: (
            <svg className="w-3.5 h-3.5 text-[#38BDF8] fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
          ),
          colorClass: 'text-charcoal hover:text-[#38BDF8]',
          borderHoverClass: 'hover:border-[#38BDF8]'
        };
      case 'GitHub Copilot':
        return {
          icon: (
            <svg className="w-3.5 h-3.5 text-[#8B5CF6] fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6a1.9 1.9 0 0 1 1.4 1.2 1.93 1.93 0 0 0 2.64.75 1.93 1.93 0 0 1 .57-1.2c-2.21-.25-4.54-1.1-4.54-4.93a3.86 3.86 0 0 1 1.02-2.68 3.59 3.59 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02a3.59 3.59 0 0 1 .1 2.64 3.86 3.86 0 0 1 1.02 2.68c0 3.84-2.34 4.68-4.57 4.93.36.3.68.9.68 1.83v2.72c0 .27.16.59.67.5A10 10 0 0 0 12 2z"/>
            </svg>
          ),
          colorClass: 'text-charcoal hover:text-[#8B5CF6]',
          borderHoverClass: 'hover:border-[#8B5CF6]'
        };
      default:
        // Default generic indicator dot for other skills (like Responsive Design, REST API, etc.)
        return {
          icon: (
            <span className="w-2 h-2 rounded-full bg-terracotta mr-1.5 inline-block shrink-0" />
          ),
          colorClass: 'text-charcoal hover:text-terracotta',
          borderHoverClass: 'hover:border-terracotta'
        };
    }
  };

  return (
    <section id="skills" className="py-20 bg-ivory border-b-[0.5px] border-beige">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <Reveal>
          <div className="mb-12">
            <span className="font-mono text-xs text-terracotta tracking-widest uppercase block mb-2">~/capabilities</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">Technical Skills</h2>
          </div>
        </Reveal>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, groupIdx) => (
            <Reveal
              key={groupIdx}
              delay={groupIdx * 100}
              direction="up"
              className="bg-cream border-[0.5px] border-beige rounded p-6 flex flex-col justify-between hover:border-warmgray/45 transition-colors duration-300"
            >
              <div>
                {/* Monospace terminal path indicator */}
                <div className="font-mono text-xs text-terracotta/80 mb-3 block select-none">
                  {group.path}
                </div>
                
                {/* Category Header */}
                <h3 className="font-serif text-xl font-bold text-charcoal mb-4">
                  {group.category}
                </h3>
                
                {/* Pills Wrap */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, itemIdx) => {
                    const config = getSkillConfig(item);
                    return (
                      <span
                        key={itemIdx}
                        className={`flex items-center px-3 py-1.5 bg-ivory border-[0.5px] border-beige text-xs font-mono rounded-sm transition-all duration-300 cursor-default select-none ${config.colorClass} ${config.borderHoverClass}`}
                      >
                        {config.icon}
                        <span>{item}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
