
import { useEffect, useRef, useState } from 'react';

const FearsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false, false]);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const windowHeight = window.innerHeight;
        
        // Calculate which cards should be visible based on scroll position
        const scrollTrigger = windowHeight * 0.8; // Trigger when 80% of viewport height
        
        if (sectionTop < scrollTrigger) {
          // Stagger the animations with delays
          const newVisibleCards = [...visibleCards];
          
          setTimeout(() => setVisibleCards(prev => {
            const updated = [...prev];
            updated[0] = true;
            return updated;
          }), 100);
          
          setTimeout(() => setVisibleCards(prev => {
            const updated = [...prev];
            updated[1] = true;
            return updated;
          }), 300);
          
          setTimeout(() => setVisibleCards(prev => {
            const updated = [...prev];
            updated[2] = true;
            return updated;
          }), 500);
          
          setTimeout(() => setVisibleCards(prev => {
            const updated = [...prev];
            updated[3] = true;
            return updated;
          }), 700);
          
          setTimeout(() => setVisibleCards(prev => {
            const updated = [...prev];
            updated[4] = true;
            return updated;
          }), 900);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/851cf4ff-409d-45fd-b805-6f3fd3b22347.png" 
          alt="City skyline at sunset" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#cc0a65]/30 via-pink-400/20 to-orange-300/25"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Subtle sparkle effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold rounded-full animate-twinkle"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-[#cc0a65] rounded-full animate-sparkle"></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-pink-300 rounded-full animate-sparkle"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Glamorous headline */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-wide mb-6">
            You're Not Alone. 
            <br />
            <span className="text-[#cc0a65] italic">These are the stories we're here to change.</span>
          </h2>
          {/* Elegant divider */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </div>

        {/* Fears in organic, emotional layout */}
        <div className="max-w-6xl mx-auto">
          {/* First row - asymmetric */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Fear 1 - left column, slightly raised */}
            <div 
              className={`md:col-span-1 transform transition-all duration-700 ${
                visibleCards[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="backdrop-blur-md bg-white/15 border border-white/25 rounded-2xl p-8 hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl group">
                <p className="font-poppins text-white leading-[1.8]">
                  <span className="font-semibold text-lg">"I understand everything — but freeze when it's my turn to speak."</span>
                  <br />
                  <span className="text-pink-200 italic group-hover:text-pink-100 transition-colors duration-300">I worry I'll get it wrong, and everyone will notice.</span>
                </p>
              </div>
            </div>

            {/* Fear 2 - right side, taking 2 columns, lowered */}
            <div 
              className={`md:col-span-2 md:mt-16 transform transition-all duration-700 delay-200 ${
                visibleCards[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="backdrop-blur-md bg-white/15 border border-white/25 rounded-2xl p-8 hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl group">
                <p className="font-poppins text-white leading-[1.8]">
                  <span className="font-semibold text-lg">"I stay quiet, even when I know exactly what I want to say."</span>
                  <br />
                  <span className="text-pink-200 italic group-hover:text-pink-100 transition-colors duration-300">The words are in my head. But they don't come out.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Second row - centered and offset */}
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {/* Fear 3 - offset left */}
            <div 
              className={`md:col-span-2 md:col-start-1 transform transition-all duration-700 delay-400 ${
                visibleCards[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="backdrop-blur-md bg-white/15 border border-white/25 rounded-2xl p-8 hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl group md:mt-8">
                <p className="font-poppins text-white leading-[1.8]">
                  <span className="font-semibold text-lg">"I feel like a different version of myself when I speak English."</span>
                  <br />
                  <span className="text-pink-200 italic group-hover:text-pink-100 transition-colors duration-300">Like I can't fully show up the way I want to.</span>
                </p>
              </div>
            </div>

            {/* Fear 4 - offset right */}
            <div 
              className={`md:col-span-2 md:col-start-4 transform transition-all duration-700 delay-600 ${
                visibleCards[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="backdrop-blur-md bg-white/15 border border-white/25 rounded-2xl p-8 hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl group">
                <p className="font-poppins text-white leading-[1.8]">
                  <span className="font-semibold text-lg">"I avoid conversations because I'm unsure how I'll sound."</span>
                  <br />
                  <span className="text-pink-200 italic group-hover:text-pink-100 transition-colors duration-300">So I smile, nod, and keep it short, even when I have more to say.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Final fear - centered and emphasized */}
          <div className="flex justify-center">
            <div 
              className={`transform transition-all duration-700 delay-800 ${
                visibleCards[4] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="backdrop-blur-md bg-white/20 border border-gold/40 rounded-2xl p-10 hover:bg-white/25 hover:border-gold/50 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 shadow-2xl hover:shadow-3xl max-w-2xl group">
                <p className="font-poppins text-white leading-[1.8] text-center">
                  <span className="font-semibold text-xl">"I've studied for years… but I still don't feel fluent."</span>
                  <br />
                  <span className="text-pink-200 italic group-hover:text-pink-100 transition-colors duration-300 text-lg">And I wonder what I'm missing.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FearsSection;
