import { ExternalLink } from 'lucide-react';
import { Reveal } from './Reveal';

interface Project {
  title: string;
  path: string;
  description: string;
  highlights: string[];
  liveUrl: string;
  githubUrl: string;
}

export function Projects() {
  const projectsList: Project[] = [
    {
      title: 'ShopHub – E-Commerce Web Application',
      path: '~/projects/shophub',
      description: 'A responsive e-commerce web application with a dynamic product catalog, category filtering, cart & checkout flow.',
      highlights: [
        'Built a responsive product catalog, category filtering, and product detail views using React.',
        'Implemented a smooth shopping cart and checkout flow focusing on intuitive navigation.',
        'Optimized component rendering and asset loading to improve page performance.',
      ],
      liveUrl: 'https://clcbshophub.netlify.app',
      githubUrl: 'https://github.com/bharathkpd',
    },
    {
      title: 'Jolly Cabs – Transportation Booking Platform',
      path: '~/projects/jollycabs',
      description: 'A business website showcasing service offerings, pricing, and contact details with booking inquiry interface.',
      highlights: [
        'Developed a fully responsive business website for a transportation service.',
        'Designed an intuitive booking inquiry interface enabling users to request rides.',
        'Ensured cross-device consistency and fast load times through mobile-first design practices.',
      ],
      liveUrl: 'https://jollycabs.in',
      githubUrl: 'https://github.com/bharathkpd',
    },
    {
      title: 'CLCB Tech – Educational Platform',
      path: '~/projects/clcbtech',
      description: 'An educational and technology platform featuring responsive layouts and resource directory.',
      highlights: [
        'Built a fast educational platform with course listings and training material index.',
        'Designed user-friendly UI/UX to simplify navigation and learning paths.',
        'Leveraged modular component design for rapid loading and easier code maintenance.',
      ],
      liveUrl: 'https://clcbtech.netlify.app',
      githubUrl: 'https://github.com/bharathkpd',
    },
    {
      title: 'TaskFlow – Productivity & Task System',
      path: '~/projects/taskflow',
      description: 'A productivity and task management system featuring full CRUD task operations and local storage persistence.',
      highlights: [
        'Built a task management web app supporting full CRUD operations for tracking tasks.',
        'Designed a clean dashboard UI to visualize task status and progress at a glance.',
        'Implemented client-side local storage for persistent task data without a backend.',
      ],
      liveUrl: 'https://bharathkpd.github.io/TaskFlowManagement/',
      githubUrl: 'https://github.com/bharathkpd',
    },
    {
      title: 'Elite Carz – Car Rental Website',
      path: '~/projects/elitecarz',
      description: 'A responsive car rental portal for showcasing vehicle fleet, rates, and rental bookings.',
      highlights: [
        'Designed an elegant car rental listing layout with search filters and features breakdown.',
        'Developed interactive booking query forms with responsive inputs.',
        'Ensured seamless cross-browser compatibility and responsive sizing.',
      ],
      liveUrl: 'https://elitecarz.netlify.app',
      githubUrl: 'https://github.com/bharathkpd',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-cream border-b-[0.5px] border-beige">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <Reveal>
          <div className="mb-12 flex justify-between items-end">
            <div>
              <span className="font-mono text-xs text-terracotta tracking-widest uppercase block mb-2">~/portfolio</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">Featured Projects</h2>
            </div>
            
            {/* View All GitHub Link */}
            <a
              href="https://github.com/bharathkpd"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center space-x-1.5 text-xs font-mono text-warmgray hover:text-terracotta transition-colors duration-250 pb-1"
            >
              <span>view_all_on_github()</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsList.map((project, idx) => (
            <Reveal
              key={idx}
              delay={idx * 100}
              direction="up"
              className="bg-ivory border-[0.5px] border-beige rounded p-6 flex flex-col justify-between hover:-translate-y-1.5 transition-transform duration-300 hover:border-warmgray/40"
            >
              <div>
                {/* Monospace Eyebrow Label */}
                <span className="font-mono text-xs text-terracotta font-semibold block mb-3 select-none">
                  {project.path}
                </span>

                {/* Project Title */}
                <h3 className="font-serif text-lg font-bold text-charcoal mb-3 leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-warmgray mb-4 font-sans leading-relaxed">
                  {project.description}
                </p>

                {/* Highlight Bullets */}
                <ul className="list-disc pl-4 space-y-1 text-xs text-warmgray/90 mb-6 font-sans leading-relaxed border-t-[0.5px] border-beige/60 pt-4">
                  {project.highlights.map((highlight, hIdx) => (
                    <li key={hIdx}>{highlight}</li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t-[0.5px] border-beige/60 font-mono text-xs">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1.5 py-2 px-3 bg-terracotta text-ivory border border-terracotta hover:bg-transparent hover:text-terracotta transition-all duration-300 rounded-sm"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
                
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1.5 py-2 px-3 border border-warmgray text-warmgray hover:border-terracotta hover:text-terracotta hover:bg-transparent transition-all duration-300 rounded-sm"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  <span>GitHub</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* View all mobile link */}
        <div className="mt-8 flex justify-center sm:hidden">
          <a
            href="https://github.com/bharathkpd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 text-xs font-mono text-warmgray hover:text-terracotta transition-colors duration-250"
          >
            <span>view_all_on_github()</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
}
