
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('application-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background image - glamorous women at party */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/d2b8b167-1f86-440e-970d-5e3ac94df1fb.png')] bg-cover bg-center"></div>
      
      {/* Soft pink-to-gold gradient glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 via-transparent to-yellow-400/20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"></div>
      
      {/* Subtle sparkle overlay with animation */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,_rgba(236,43,141,0.1),_transparent_50%),radial-gradient(circle_at_75%_25%,_rgba(156,15,103,0.1),_transparent_50%),radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.03),_transparent_50%)] animate-sparkle"></div>
      
      {/* Logo - top left - made larger by 40% */}
      <div className="absolute top-8 left-8 z-10">
        <img 
          src="/lovable-uploads/86a23508-a906-474a-a3a7-9f2b4eb948f3.png" 
          alt="LinguaGlee Logo" 
          className="h-20 w-auto drop-shadow-2xl opacity-90 filter drop-shadow-xl"
        />
      </div>

      {/* Glass panel without border */}
      <div className="absolute inset-0 flex items-center justify-center z-5">
        <div className="backdrop-blur-[2px] bg-white/3 rounded-3xl p-16 max-w-5xl mx-4 shadow-2xl">
          <div className="text-center">
            {/* Stacked headline - no animation */}
            <div className="relative mb-6">
              <h1 className="font-playfair font-black text-white mb-2 drop-shadow-2xl leading-none">
                <span className="block text-6xl md:text-8xl tracking-tight">One Hour</span>
                <span className="block text-6xl md:text-8xl tracking-tight text-[#cc0a65] italic">of Girl Power</span>
              </h1>
            </div>
            
            {/* Subheading - refined styling */}
            <p className="font-montserrat text-sm md:text-base text-[#e49dc2] mb-8 font-light tracking-[0.3em] uppercase">
              by LinguaGlee
            </p>
            
            {/* New two-line tagline */}
            <div className="font-playfair text-xl md:text-2xl font-light text-white mb-12 leading-relaxed max-w-4xl mx-auto drop-shadow-lg italic text-center tracking-wide">
              <p className="mb-2">One unforgettable hour.</p>
              <p>English. Confidence. Sparkle. Sisterhood.</p>
            </div>
            
            {/* Updated CTA Button */}
            <Button 
              onClick={scrollToForm}
              className="bg-gradient-to-r from-[#ec2b8d] to-[#9c0f67] hover:from-[#d91a7a] hover:to-[#8a0e5c] text-white font-poppins font-bold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-pink-500/40 transition-all duration-500 transform hover:scale-105 hover:glow border-0 tracking-wide uppercase group"
            >
              <span className="group-hover:animate-sparkle">Yes, I Want This</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
