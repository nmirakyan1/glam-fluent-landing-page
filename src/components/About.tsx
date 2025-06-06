
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress for this section
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-white relative overflow-hidden">
      {/* Subtle sparkle effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#cc0a65] rounded-full animate-twinkle"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-gold rounded-full animate-sparkle"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center relative">
          
          {/* Text content with more noticeable parallax */}
          <div 
            className="space-y-12 relative z-20"
            style={{
              transform: `translateY(${scrollY * -60}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            
            {/* Cover story headline - Vogue style */}
            <div className="text-center space-y-6">
              <h2 className="font-playfair text-5xl md:text-7xl font-bold text-[#cc0a65] leading-[0.9] tracking-wide">
                ONE HOUR
              </h2>
              <h3 className="font-playfair text-4xl md:text-6xl font-light text-black italic leading-[0.9] -mt-4">
                of Girl Power
              </h3>
              
              {/* Vogue-style subheading */}
              <div className="border-t border-b border-black py-4 mt-8">
                <p className="font-sans text-sm uppercase tracking-[0.3em] text-black font-medium">
                  The New Language of Confidence
                </p>
              </div>
            </div>
            
            {/* Magazine-style pull quotes */}
            <div className="space-y-12">
              <blockquote className="text-center border-l-4 border-[#cc0a65] pl-6 italic">
                <p className="font-playfair text-2xl md:text-3xl text-black leading-[1.4] tracking-wide">
                  "I used to think confidence meant knowing all the answers."
                </p>
              </blockquote>
              
              <blockquote className="text-center border-l-4 border-gold pl-6 italic">
                <p className="font-playfair text-2xl md:text-3xl text-black leading-[1.4] tracking-wide">
                  "But maybe it's just saying what you really mean. In any language."
                </p>
              </blockquote>
            </div>

            {/* Body copy - refined and polished */}
            <div className="space-y-8 text-left">
              <div className="space-y-4">
                <p className="font-sans text-lg text-black leading-[1.8] font-medium">
                  This is not a grammar class.
                </p>
                <p className="font-sans text-lg text-black leading-[1.8]">
                  It's an hour to reconnect with your voice in English. <em className="text-[#cc0a65] font-medium">To be magnetic. To be heard.</em> To speak up and light up the room.
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="font-sans text-lg text-black leading-[1.8]">
                  You don't need perfect words. You need the right ones. And the confidence to say them.
                </p>
                <p className="font-sans text-lg text-black leading-[1.8] font-medium italic">
                  This isn't school. This is your spotlight.
                </p>
              </div>
            </div>

            {/* Bottom section header */}
            <div className="text-center pt-8 border-t border-black">
              <p className="font-playfair text-2xl md:text-3xl font-bold text-[#cc0a65] tracking-wide leading-tight">
                Welcome to One Hour of Girl Power
              </p>
              <p className="font-sans text-base text-black mt-4 leading-relaxed max-w-2xl mx-auto">
                An English experience for women who want to be understood, uplifted, and unforgettable.
              </p>
            </div>
          </div>
          
          {/* Image with slower parallax movement */}
          <div 
            className="relative z-10"
            style={{
              transform: `translateY(${scrollY * -30}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            {/* Fashion magazine style image treatment */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#cc0a65]/10 via-gold/5 to-pink-400/10 blur-lg"></div>
              <img 
                src="/lovable-uploads/f7a700d7-8ca8-4702-90a5-fad681576404.png" 
                alt="Glamorous women with colorful balloons and stylish sunglasses" 
                className="relative z-10 w-full h-auto object-cover shadow-2xl transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Magazine-style image caption */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4">
                <p className="font-sans text-xs uppercase tracking-wide text-black">
                  POWER PLAYERS: The new generation of confident women speaking their truth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
