
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

      {/* Sparkly glass panel - made even bigger */}
      <div className="absolute inset-0 flex items-center justify-center z-5">
        <div className="relative backdrop-blur-[3px] bg-gradient-to-br from-white/8 via-white/3 to-white/6 rounded-3xl p-24 max-w-7xl mx-4 shadow-2xl border border-white/10">
          {/* Enhanced sparkle layers inside the glass */}
          <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_20%_20%,_rgba(255,255,255,0.2),_transparent_40%),radial-gradient(circle_at_80%_80%,_rgba(236,43,141,0.15),_transparent_40%),radial-gradient(circle_at_60%_40%,_rgba(255,255,255,0.12),_transparent_30%),radial-gradient(circle_at_40%_80%,_rgba(255,215,0,0.1),_transparent_35%)] animate-sparkle"></div>
          
          {/* Enhanced shimmer effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/8 to-transparent animate-[shimmer_3s_ease-in-out_infinite] opacity-80"></div>
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-l from-transparent via-pink-300/5 to-transparent animate-[shimmer_4s_ease-in-out_infinite_reverse] opacity-60"></div>
          
          {/* More floating sparkles */}
          <div className="absolute top-8 left-12 w-2 h-2 bg-white/50 rounded-full animate-[pulse_2s_ease-in-out_infinite]"></div>
          <div className="absolute top-16 right-16 w-1 h-1 bg-pink-300/70 rounded-full animate-[pulse_3s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-12 left-20 w-1.5 h-1.5 bg-white/60 rounded-full animate-[pulse_2.5s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-20 right-12 w-1 h-1 bg-yellow-200/60 rounded-full animate-[pulse_3.5s_ease-in-out_infinite]"></div>
          <div className="absolute top-32 left-32 w-1 h-1 bg-pink-400/50 rounded-full animate-[pulse_4s_ease-in-out_infinite]"></div>
          <div className="absolute top-24 right-32 w-1.5 h-1.5 bg-white/40 rounded-full animate-[pulse_2.8s_ease-in-out_infinite]"></div>
          
          <div className="text-center relative z-10">
            {/* Stacked headline - no animation */}
            <div className="relative mb-6">
              <h1 className="font-poppins font-black text-white mb-2 drop-shadow-2xl leading-none">
                <span className="block text-6xl md:text-8xl tracking-tight">One Hour</span>
                <span className="block text-6xl md:text-8xl tracking-tight text-[#cc0a65]">of Girl Power</span>
              </h1>
            </div>
            
            {/* Subheading - refined styling */}
            <p className="font-montserrat text-sm md:text-base text-[#cc0a65] mb-8 font-light tracking-[0.3em] uppercase">
              by LinguaGlee
            </p>
            
            {/* Glamorous glowing tagline */}
            <div className="relative font-poppins text-xl md:text-2xl font-light text-white mb-12 leading-relaxed max-w-4xl mx-auto text-center tracking-wide">
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
