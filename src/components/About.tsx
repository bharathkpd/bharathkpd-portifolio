import { Award, Code2, GraduationCap } from 'lucide-react';
import { Reveal } from './Reveal';
import aboutImg from '../assets/profile-laptop.jpg';

export function About() {
  const stats = [
    { value: '5+', label: 'Live Projects', icon: Code2 },
    { value: '8.5', label: 'B.Tech CGPA', icon: Award },
    { value: '2026', label: 'CSE Graduate', icon: GraduationCap },
  ];

  return (
    <section id="about" className="py-20 bg-cream border-b-[0.5px] border-beige">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <Reveal>
          <div className="mb-12">
            <span className="font-mono text-xs text-terracotta tracking-widest uppercase block mb-2">~/background</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">About Me</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Frame */}
          <div className="md:col-span-5 order-2 md:order-1">
            <Reveal delay={200} direction="left">
              <div className="relative group">
                {/* Decorative border offset */}
                <div className="absolute inset-2 border border-terracotta translate-x-3 translate-y-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 pointer-events-none rounded-sm" />
                
                {/* Image */}
                <div className="relative border-[0.5px] border-beige overflow-hidden bg-ivory aspect-[4/3] rounded-sm transition-all duration-700">
                  <img
                    src={aboutImg}
                    alt="Bharath Kumar working on laptop"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-700 ease-in-out"
                    loading="lazy"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Text Copy & Stats */}
          <div className="md:col-span-7 space-y-8 order-1 md:order-2">
            <Reveal delay={200} direction="right">
              <div className="prose prose-neutral text-warmgray space-y-4">
                <p className="text-base sm:text-lg leading-relaxed font-sans">
                  I am a <strong className="text-charcoal font-semibold">Computer Science Engineering</strong> graduate passionate about software development, web technologies, and building digital products. 
                </p>
                <p className="text-base leading-relaxed font-sans">
                  I have experience designing, developing, and deploying responsive websites, business platforms, e-commerce applications, and productivity tools. I enjoy creating user-friendly web experiences and leveraging modern development tools to deliver practical, real-world solutions.
                </p>
              </div>
            </Reveal>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t-[0.5px] border-beige">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <Reveal key={idx} delay={300 + idx * 100} direction="up">
                    <div className="text-center md:text-left flex flex-col items-center md:items-start space-y-1">
                      <div className="flex items-center space-x-1.5 text-terracotta mb-1">
                        <Icon className="w-4 h-4" />
                        <span className="font-mono text-xs uppercase tracking-widest text-warmgray/70 hidden sm:inline">Stat</span>
                      </div>
                      <div className="font-mono text-2xl sm:text-3xl font-bold text-charcoal tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-xs text-warmgray font-medium font-sans">
                        {stat.label}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
