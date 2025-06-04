
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
      
      {/* Logo - top left - made significantly larger */}
      <div className="absolute top-8 left-8 z-10">
        <img 
          src="/lovable-uploads/86a23508-a906-474a-a3a7-9f2b4eb948f3.png" 
          alt="LinguaGlee Logo" 
          className="h-32 w-auto drop-shadow-2xl opacity-90 filter drop-shadow-xl"
        />
      </div>

      {/* Ultra-glamorous glass panel with enhanced transparency and luxury effects */}
      <div className="absolute inset-0 flex items-center justify-center z-5">
        <div className="relative backdrop-blur-sm bg-gradient-to-br from-white/8 via-white/3 to-pink-100/8 max-w-7xl mx-8 rounded-3xl shadow-[0_8px_32px_rgba(31,38,135,0.37)] border border-white/20">
          {/* Multiple luxury glass reflections for ultra-glam effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-pink-200/10 rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/8 to-transparent rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-pink-300/5 to-transparent rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-blue-200/5 to-transparent rounded-3xl"></div>
          
          {/* Luxurious shimmer effects - Sex and the City style */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400/15 to-transparent animate-[shimmer_8s_ease-in-out_infinite] opacity-60 rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/10 to-transparent animate-[shimmer_12s_ease-in-out_infinite] opacity-40 rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gold/10 to-transparent animate-[shimmer_10s_ease-in-out_infinite] opacity-50 rounded-3xl"></div>
          
          {/* Dreamy glow border effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-300/20 via-white/30 to-pink-300/20 blur-sm opacity-60"></div>
          
          <div className="text-center relative z-10 p-24 md:p-32">
            {/* Stacked headline - no animation */}
            <div className="relative mb-8">
              <h1 className="font-poppins font-black text-white mb-2 drop-shadow-2xl leading-none">
                <span className="block text-6xl md:text-8xl tracking-tight">One Hour</span>
                <span className="block text-6xl md:text-8xl tracking-tight text-[#cc0a65]">of Girl Power</span>
              </h1>
            </div>
            
            {/* Subheading - refined styling with more bold text */}
            <p className="font-montserrat text-base md:text-lg text-white mb-10 font-black tracking-[0.3em] uppercase drop-shadow-2xl">
              by LinguaGlee
            </p>
            
            {/* Glamorous glowing tagline */}
            <div className="relative font-poppins text-xl md:text-2xl font-light text-white mb-14 leading-relaxed max-w-4xl mx-auto text-center tracking-wide">
              {/* Multiple glow layers for dramatic effect */}
              <div className="absolute inset-0 text-xl md:text-2xl font-light text-pink-300 blur-sm opacity-70 animate-glow">
                <p className="mb-2">One unforgettable hour.</p>
                <p>English. Confidence. Sparkle. Sisterhood.</p>
              </div>
              <div className="absolute inset-0 text-xl md:text-2xl font-light text-white blur-xs opacity-60 animate-pulse">
                <p className="mb-2">One unforgettable hour.</p>
                <p>English. Confidence. Sparkle. Sisterhood.</p>
              </div>
              {/* Main text with sparkle effect */}
              <div className="relative z-10 drop-shadow-2xl text-shadow-glow animate-sparkle-text">
                <p className="mb-2">One unforgettable hour.</p>
                <p>English. Confidence. Sparkle. Sisterhood.</p>
              </div>
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
