import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { Reveal } from './Reveal';

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link
    const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Bharath,\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`
    );
    
    window.location.href = `mailto:kalavalapudibharathkumar@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    
    // Reset form after a delay
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactDetails = [
    {
      label: 'Email',
      value: 'kalavalapudibharathkumar@gmail.com',
      href: 'mailto:kalavalapudibharathkumar@gmail.com',
      icon: Mail,
      brandColor: 'text-[#EA4335]',
      brandHover: 'group-hover:border-[#EA4335] group-hover:bg-[#EA4335]/5',
      textHover: 'group-hover:text-[#EA4335]',
    },
    {
      label: 'Phone',
      value: '+91 9347325795',
      href: 'tel:+919347325795',
      icon: Phone,
      brandColor: 'text-[#25D366]',
      brandHover: 'group-hover:border-[#25D366] group-hover:bg-[#25D366]/5',
      textHover: 'group-hover:text-[#25D366]',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/kalavalapudibharathkumar',
      href: 'https://www.linkedin.com/in/kalavalapudibharathkumar',
      icon: LinkedinIcon,
      brandColor: 'text-[#0A66C2]',
      brandHover: 'group-hover:border-[#0A66C2] group-hover:bg-[#0A66C2]/5',
      textHover: 'group-hover:text-[#0A66C2]',
    },
    {
      label: 'GitHub',
      value: 'github.com/bharathkpd',
      href: 'https://github.com/bharathkpd',
      icon: GithubIcon,
      brandColor: 'text-[#181717]',
      brandHover: 'group-hover:border-charcoal group-hover:bg-charcoal/5',
      textHover: 'group-hover:text-[#181717]',
    },
  ];

  return (
    <section id="contact" className="bg-ivory border-b-[0.5px] border-beige flex flex-col justify-between min-h-[calc(100vh-4rem)]">
      
      {/* Contact Section Content */}
      <div className="max-w-6xl mx-auto px-6 py-20 w-full flex-grow">
        
        {/* Section Heading */}
        <Reveal>
          <div className="mb-12">
            <span className="font-mono text-xs text-terracotta tracking-widest uppercase block mb-2">~/communication</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">Get In Touch</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Closure & Details */}
          <div className="lg:col-span-5 space-y-8">
            <Reveal direction="left">
              <div className="space-y-4">
                <p className="font-serif text-lg text-charcoal leading-relaxed">
                  "To start my professional journey as a Software Developer and continuously enhance my technical skills while contributing to innovative products and real-world software solutions."
                </p>
                <p className="text-sm text-warmgray font-sans leading-relaxed">
                  If you have an opportunity, a project idea, or simply want to connect, feel free to reach out. I am currently open to internship and full-time junior software developer roles.
                </p>
              </div>
            </Reveal>

            {/* Direct Links */}
            <div className="space-y-4 border-t-[0.5px] border-beige pt-6">
              {contactDetails.map((detail, idx) => {
                const Icon = detail.icon;
                return (
                  <Reveal key={idx} delay={idx * 100} direction="left">
                    <a
                      href={detail.href}
                      target={detail.label !== 'Phone' && detail.label !== 'Email' ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-3 text-warmgray transition-colors duration-250 w-fit"
                    >
                      <div className={`p-2 border-[0.5px] border-beige bg-cream rounded-sm transition-all duration-300 ${detail.brandColor} ${detail.brandHover}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-mono text-[10px] text-warmgray/70 uppercase tracking-widest leading-none mb-0.5">{detail.label}</span>
                        <span className={`text-xs sm:text-sm font-sans font-medium text-charcoal transition-colors ${detail.textHover}`}>{detail.value}</span>
                      </div>
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <Reveal delay={200} direction="right" className="bg-cream border-[0.5px] border-beige rounded p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block font-mono text-[10px] uppercase tracking-widest text-warmgray mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-ivory border-[0.5px] border-beige rounded-sm px-4 py-2.5 text-sm text-charcoal placeholder:text-warmgray/40 focus:border-terracotta focus:ring-0 outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-mono text-[10px] uppercase tracking-widest text-warmgray mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-ivory border-[0.5px] border-beige rounded-sm px-4 py-2.5 text-sm text-charcoal placeholder:text-warmgray/40 focus:border-terracotta focus:ring-0 outline-none transition-colors"
                    placeholder="name@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-[10px] uppercase tracking-widest text-warmgray mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-ivory border-[0.5px] border-beige rounded-sm px-4 py-2.5 text-sm text-charcoal placeholder:text-warmgray/40 focus:border-terracotta focus:ring-0 outline-none transition-colors resize-none"
                    placeholder="How can I help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 py-3 bg-terracotta text-ivory border border-terracotta hover:bg-transparent hover:text-terracotta transition-all duration-300 font-mono text-sm rounded-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitted ? 'Opening Mail Client...' : 'Send Message'}</span>
                </button>
              </form>
            </Reveal>
          </div>

        </div>

      </div>

      {/* Footer */}
      <footer className="w-full border-t-[0.5px] border-beige bg-cream py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4 font-mono text-xs text-warmgray">
          <div>
            &copy; {new Date().getFullYear()} Kalavalapudi Bharath Kumar. All rights reserved.
          </div>
          <div className="flex items-center space-x-1">
            <span>built_with_tools(</span>
            <span className="text-terracotta">React</span>
            <span>,</span>
            <span className="text-terracotta">Vite</span>
            <span>,</span>
            <span className="text-terracotta">Tailwind</span>
            <span>)</span>
          </div>
        </div>
      </footer>

    </section>
  );
}
