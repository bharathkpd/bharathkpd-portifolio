import { GraduationCap, Award, Calendar, Bookmark } from 'lucide-react';
import { Reveal } from './Reveal';

export function Education() {
  const educationItems = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science and Engineering',
      institution: 'Narayana Engineering College, Gudur',
      duration: '2022 – 2026',
      cgpa: '8.5 / 10',
    },
  ];

  const certificationItems = [
    {
      title: 'NPTEL Certification',
      issuer: 'Computer Science and Engineering',
      type: 'Technical Course Certification',
    },
    {
      title: 'MotionCut Virtual Internship',
      issuer: 'Web Development Internship',
      type: 'Practical Project Development',
    },
    {
      title: 'EliteTech Virtual Internship',
      issuer: 'Software Engineering Program',
      type: 'Industrial Training',
    },
    {
      title: 'IndStack Virtual Internship',
      issuer: 'Full Stack Development',
      type: 'Web Development Training',
    },
  ];

  return (
    <section id="education" className="py-20 bg-ivory border-b-[0.5px] border-beige">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <Reveal>
          <div className="mb-16">
            <span className="font-mono text-xs text-terracotta tracking-widest uppercase block mb-2">~/qualification</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">Education & Certifications</h2>
          </div>
        </Reveal>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Left Column: Education */}
          <div className="md:col-span-6 space-y-6">
            <Reveal direction="left">
              <div className="flex items-center space-x-2.5 mb-6 pb-3 border-b-[0.5px] border-beige">
                <GraduationCap className="w-5 h-5 text-terracotta" />
                <h3 className="font-serif text-xl font-bold text-charcoal">Academic Background</h3>
              </div>
            </Reveal>

            <div className="space-y-8 relative pl-6 border-l-[0.5px] border-beige">
              {educationItems.map((item, idx) => (
                <Reveal key={idx} delay={idx * 150} direction="left" className="relative">
                  {/* Timeline bullet */}
                  <div className="absolute -left-[30px] top-1.5 w-2 h-2 rounded-full bg-terracotta border border-ivory" />
                  
                  <div className="space-y-2">
                    {/* Duration & CGPA row */}
                    <div className="flex flex-wrap gap-x-4 items-center font-mono text-xs text-warmgray">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.duration}</span>
                      </div>
                      <div className="h-3 w-[1px] bg-beige hidden sm:block" />
                      <div>
                        CGPA: <span className="font-semibold text-charcoal">{item.cgpa}</span>
                      </div>
                    </div>
                    
                    {/* Degree & Field */}
                    <h4 className="font-serif text-lg font-bold text-charcoal leading-tight">
                      {item.degree}
                    </h4>
                    <p className="text-sm font-sans font-medium text-terracotta">
                      {item.field}
                    </p>
                    
                    {/* Institution */}
                    <p className="text-sm text-warmgray font-sans">
                      {item.institution}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="md:col-span-6 space-y-6 mt-12 md:mt-0">
            <Reveal direction="right">
              <div className="flex items-center space-x-2.5 mb-6 pb-3 border-b-[0.5px] border-beige">
                <Award className="w-5 h-5 text-terracotta" />
                <h3 className="font-serif text-xl font-bold text-charcoal">Certifications & Training</h3>
              </div>
            </Reveal>

            <div className="space-y-6 relative pl-6 border-l-[0.5px] border-beige">
              {certificationItems.map((item, idx) => (
                <Reveal key={idx} delay={idx * 100} direction="right" className="relative">
                  {/* Timeline bullet */}
                  <div className="absolute -left-[30px] top-1.5 w-2 h-2 rounded-full bg-warmgray/40 border border-ivory" />
                  
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-warmgray uppercase tracking-widest block mb-0.5">
                      {item.type}
                    </span>
                    <h4 className="font-serif text-base font-bold text-charcoal leading-tight">
                      {item.title}
                    </h4>
                    <div className="flex items-center space-x-1.5 text-xs text-warmgray font-sans">
                      <Bookmark className="w-3.5 h-3.5 text-terracotta/70" />
                      <span>{item.issuer}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
