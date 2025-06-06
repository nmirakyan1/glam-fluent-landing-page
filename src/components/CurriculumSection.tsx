
import { useEffect, useRef, useState } from 'react';

const CurriculumSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleSessions, setVisibleSessions] = useState<boolean[]>(new Array(8).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const windowHeight = window.innerHeight;
        
        const scrollTrigger = windowHeight * 0.8;
        
        if (sectionTop < scrollTrigger) {
          // Stagger the animations in pairs
          setTimeout(() => setVisibleSessions(prev => {
            const updated = [...prev];
            updated[0] = true;
            updated[1] = true;
            return updated;
          }), 100);
          
          setTimeout(() => setVisibleSessions(prev => {
            const updated = [...prev];
            updated[2] = true;
            updated[3] = true;
            return updated;
          }), 300);
          
          setTimeout(() => setVisibleSessions(prev => {
            const updated = [...prev];
            updated[4] = true;
            updated[5] = true;
            return updated;
          }), 500);
          
          setTimeout(() => setVisibleSessions(prev => {
            const updated = [...prev];
            updated[6] = true;
            updated[7] = true;
            return updated;
          }), 700);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sessions = [
    {
      title: "Fluent & Fabulous",
      theme: "First Impressions & Red-Carpet Intros"
    },
    {
      title: "English in the Wild",
      theme: "Coffee Shops, Shopping & Fashion Talk"
    },
    {
      title: "Manifest It in English",
      theme: "Vision Boards, Future Tense & Affirmation Power"
    },
    {
      title: "Money, Honey",
      theme: "Jobs, Side Hustles & High-Value Conversations"
    },
    {
      title: "Love, Actually… in English",
      theme: "Dating, Friendship & Emotional Expression"
    },
    {
      title: "Apartment Therapy",
      theme: "Dream Homes, Décor & Everyday English"
    },
    {
      title: "Grammar & Glam Night",
      theme: "Beauty Routines & Grammar That Actually Works"
    },
    {
      title: "The English & The City Showcase",
      theme: "Speeches, Celebrations & Certified Confidence"
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 relative overflow-hidden bg-gradient-to-br from-champagne-50 via-rose-50 to-pink-50">
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Main headline */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slate-800 leading-tight animate-fade-in">
            The One Hour of Girl Power Curriculum
          </h2>
          <p className="font-sans text-xl md:text-2xl text-purple-900 font-light italic animate-fade-in animation-delay-300">
            Where English meets confidence, lifestyle, and transformation.
          </p>
          
          {/* Gold divider */}
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto animate-fade-in animation-delay-500"></div>
        </div>

        {/* Sessions Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {sessions.map((session, index) => (
            <div 
              key={index}
              className={`transform transition-all duration-700 ${
                visibleSessions[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${Math.floor(index / 2) * 200}ms` }}
            >
              <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 border border-white/30 shadow-2xl hover:shadow-3xl hover:bg-white/25 hover:border-white/40 transition-all duration-300 hover:transform hover:-translate-y-1 group h-full backdrop-saturate-150">
                
                {/* Session Number */}
                <div className="mb-4">
                  <span className="inline-block text-sm font-medium text-purple-600 bg-white/40 backdrop-blur-sm px-3 py-1 rounded-full mb-4 border border-white/20">
                    Session {index + 1}
                  </span>
                </div>
                
                {/* Session Title */}
                <h3 className="font-playfair text-2xl md:text-3xl font-bold text-slate-800 mb-3 group-hover:text-shadow-glow transition-all duration-300 leading-tight">
                  {session.title}
                </h3>
                
                {/* Theme */}
                <div className="space-y-2">
                  <p className="font-sans text-sm font-medium text-purple-700 uppercase tracking-wide">
                    Theme:
                  </p>
                  <p className="font-sans text-lg text-slate-600 leading-relaxed italic">
                    {session.theme}
                  </p>
                </div>
                
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="text-center pt-12 mt-16 border-t border-gold/20 animate-fade-in animation-delay-1500">
          <p className="font-playfair text-2xl md:text-3xl font-light italic text-purple-900 hover:text-shadow-glow transition-all duration-300">
            Eight sessions. One powerful transformation.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CurriculumSection;
