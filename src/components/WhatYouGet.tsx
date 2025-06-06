
import { useEffect, useRef, useState } from 'react';

const WhatYouGet = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const windowHeight = window.innerHeight;
        
        // Calculate which cards should be visible based on scroll position
        const scrollTrigger = windowHeight * 0.8; // Trigger when 80% of viewport height
        
        if (sectionTop < scrollTrigger) {
          // Stagger the animations with delays for pairs
          setTimeout(() => setVisibleCards(prev => {
            const updated = [...prev];
            updated[0] = true;
            updated[1] = true;
            return updated;
          }), 100);
          
          setTimeout(() => setVisibleCards(prev => {
            const updated = [...prev];
            updated[2] = true;
            updated[3] = true;
            return updated;
          }), 400);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-16 relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-champagne-50">
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Main headline with elegant animation */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slate-800 leading-tight tracking-wide animate-fade-in">
            This Isn't Just an English Class.
          </h2>
          <h3 className="font-playfair text-2xl md:text-3xl font-light italic text-purple-900 leading-tight animate-fade-in animation-delay-300">
            It's a Confidence Upgrade.
          </h3>
          
          {/* Gold divider */}
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto animate-fade-in animation-delay-500"></div>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* 1. The Power Hour */}
          <div 
            className={`transform transition-all duration-700 ${
              visibleCards[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-lg hover:shadow-xl hover:bg-white/70 transition-all duration-300 hover:transform hover:-translate-y-1 group h-full">
              <div className="mb-4">
                <span className="inline-block w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-sm font-bold flex items-center justify-center mb-4">1</span>
                <h3 className="font-playfair text-2xl font-bold text-purple-900 mb-3 group-hover:text-shadow-glow transition-all duration-300">
                  The Power Hour
                </h3>
              </div>
              <p className="font-sans text-slate-700 leading-relaxed mb-3 font-semibold">
                One hour. Big energy. Real English. Real confidence.
              </p>
              <p className="font-sans text-slate-600 leading-relaxed">
                This is where you stop holding back and start speaking with presence, style, and ease.
              </p>
            </div>
          </div>

          {/* 2. The Fluent & Fabulous Guidebook */}
          <div 
            className={`transform transition-all duration-700 delay-100 ${
              visibleCards[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-lg hover:shadow-xl hover:bg-white/70 transition-all duration-300 hover:transform hover:-translate-y-1 group h-full">
              <div className="mb-4">
                <span className="inline-block w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-sm font-bold flex items-center justify-center mb-4">2</span>
                <h3 className="font-playfair text-2xl font-bold text-purple-900 mb-3 group-hover:text-shadow-glow transition-all duration-300">
                  The Fluent & Fabulous Guidebook
                </h3>
              </div>
              <p className="font-sans text-slate-700 leading-relaxed mb-3 font-semibold">
                Your personal journal.
              </p>
              <p className="font-sans text-slate-600 leading-relaxed">
                Voice-finding prompts, self-expression exercises, and real-world scripts to help you become clear and compelling.
              </p>
            </div>
          </div>

          {/* 3. The Real Talk Practice */}
          <div 
            className={`transform transition-all duration-700 delay-300 ${
              visibleCards[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-lg hover:shadow-xl hover:bg-white/70 transition-all duration-300 hover:transform hover:-translate-y-1 group h-full">
              <div className="mb-4">
                <span className="inline-block w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-sm font-bold flex items-center justify-center mb-4">3</span>
                <h3 className="font-playfair text-2xl font-bold text-purple-900 mb-3 group-hover:text-shadow-glow transition-all duration-300">
                  The Real Talk Practice
                </h3>
              </div>
              <p className="font-sans text-slate-700 leading-relaxed mb-3 font-semibold">
                Speak for real. Be heard for real.
              </p>
              <p className="font-sans text-slate-600 leading-relaxed">
                Use your English in conversations that reflect who you are. This is not textbook learning; it's real expression, real connection.
              </p>
            </div>
          </div>

          {/* 4. The Sisterhood Circle */}
          <div 
            className={`transform transition-all duration-700 delay-400 ${
              visibleCards[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-lg hover:shadow-xl hover:bg-white/70 transition-all duration-300 hover:transform hover:-translate-y-1 group h-full">
              <div className="mb-4">
                <span className="inline-block w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-sm font-bold flex items-center justify-center mb-4">4</span>
                <h3 className="font-playfair text-2xl font-bold text-purple-900 mb-3 group-hover:text-shadow-glow transition-all duration-300">
                  The Sisterhood Circle
                </h3>
              </div>
              <p className="font-sans text-slate-700 leading-relaxed mb-3 font-semibold">
                You're not alone. And you'll feel that.
              </p>
              <p className="font-sans text-slate-600 leading-relaxed">
                Connect with a small, powerful group of women who are here to speak, grow, and support each other fully. You'll be encouraged and celebrated.
              </p>
            </div>
          </div>

        </div>

        {/* Final call to action */}
        <div className="text-center pt-8 border-t border-gold/30 animate-fade-in animation-delay-1500">
          <p className="font-playfair text-2xl md:text-3xl font-bold text-slate-800 leading-tight mb-2 hover:text-shadow-glow transition-all duration-300">
            This is how it starts. This is where you begin.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhatYouGet;
