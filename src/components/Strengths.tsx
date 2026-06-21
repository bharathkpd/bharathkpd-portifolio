import { CheckCircle2 } from 'lucide-react';
import { Reveal } from './Reveal';

export function Strengths() {
  const strengthsList = [
    'Problem Solving',
    'Quick Learning',
    'Communication Skills',
    'Team Collaboration',
    'Adaptability',
    'Self-Learning',
    'Project Development',
    'AI-Assisted Development',
  ];

  return (
    <section id="strengths" className="py-20 bg-cream border-b-[0.5px] border-beige">
      <div className="max-w-6xl mx-auto px-6 text-center sm:text-left">
        
        {/* Section Heading */}
        <Reveal>
          <div className="mb-12">
            <span className="font-mono text-xs text-terracotta tracking-widest uppercase block mb-2">~/attributes</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">Core Strengths</h2>
          </div>
        </Reveal>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Statement */}
          <div className="lg:col-span-4 text-left">
            <Reveal direction="left">
              <p className="font-serif text-lg text-warmgray italic leading-relaxed">
                "Technical skills get projects built, but execution, communication, and self-learning are what drive real-world impact."
              </p>
            </Reveal>
          </div>

          {/* Tag Cloud */}
          <div className="lg:col-span-8">
            <Reveal delay={200} direction="right">
              <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                {strengthsList.map((strength, idx) => (
                  <span
                    key={idx}
                    className="flex items-center space-x-2 px-4 py-2.5 bg-ivory border-[0.5px] border-beige text-charcoal text-xs sm:text-sm font-mono rounded-sm hover:bg-terracotta hover:border-terracotta hover:text-ivory transition-all duration-300 cursor-default select-none shadow-none"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-terracotta group-hover:text-ivory" />
                    <span>{strength}</span>
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
}
