
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
      
      {/* Dramatic pink-to-gold gradient glow overlay - more intense */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 via-purple-400/20 to-yellow-400/25"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
      
      {/* Enhanced sparkle overlay with multiple layers for movie-like glamour */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(236,43,141,0.15),_transparent_40%),radial-gradient(circle_at_80%_20%,_rgba(156,15,103,0.12),_transparent_40%),radial-gradient(circle_at_40%_60%,_rgba(255,255,255,0.08),_transparent_30%),radial-gradient(circle_at_70%_40%,_rgba(255,215,0,0.1),_transparent_35%)] animate-sparkle"></div>
      
      {/* Additional floating sparkles for movie magic */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(255,255,255,0.6)_1px,_transparent_1px),radial-gradient(circle_at_70%_70%,_rgba(236,43,141,0.4)_1px,_transparent_1px),radial-gradient(circle_at_50%_20%,_rgba(255,215,0,0.5)_1px,_transparent_1px)] animate-[twinkle_4s_ease-in-out_infinite] opacity-80"></div>
      
      {/* Logo - top left - made much larger */}
      <div className="absolute top-8 left-8 z-10">
        <img 
          src="/lovable-uploads/86a23508-a906-474a-a3a7-9f2b4eb948f3.png" 
          alt="LinguaGlee Logo" 
          className="h-48 w-auto drop-shadow-2xl opacity-90 filter drop-shadow-xl animate-[glow_3s_ease-in-out_infinite]"
        />
      </div>

      {/* Ultra-glamorous glass panel with movie-intro level luxury */}
      <div className="absolute inset-0 flex items-center justify-center z-5">
        <div className="relative backdrop-blur-sm bg-gradient-to-br from-white/10 via-pink-100/5 to-purple-100/8 max-w-7xl mx-8 rounded-3xl shadow-[0_20px_50px_rgba(236,43,141,0.3),0_0_100px_rgba(255,255,255,0.1)] border border-white/25">
          {/* Multiple luxury glass reflections with movie-level glamour */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-pink-200/15 rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/12 to-transparent rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-pink-300/8 to-transparent rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-purple-200/6 to-transparent rounded-3xl"></div>
          
          {/* Dramatic glow border effect for movie glamour */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-400/25 via-white/35 to-purple-400/25 blur-md opacity-70 animate-pulse"></div>
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-l from-gold/20 via-pink-300/25 to-gold/20 blur-lg opacity-50 animate-[glow_4s_ease-in-out_infinite]"></div>
          
          <div className="text-center relative z-10 p-24 md:p-32">
            {/* Stacked headline with movie-level drama */}
            <div className="relative mb-8">
              <h1 className="font-poppins font-black text-white mb-2 drop-shadow-2xl leading-none animate-[fade-in_1.5s_ease-out]">
                <span className="block text-6xl md:text-8xl tracking-tight animate-[sparkle-text_4s_ease-in-out_infinite]">One Hour</span>
                <span className="block text-6xl md:text-8xl tracking-tight text-[#cc0a65] animate-[sparkle-text_4s_ease-in-out_infinite_0.5s]">of Girl Power</span>
              </h1>
            </div>
            
            {/* Subheading with enhanced drama */}
            <p className="font-montserrat text-base md:text-lg text-white mb-10 font-black tracking-[0.4em] uppercase drop-shadow-2xl animate-[glow_3s_ease-in-out_infinite]">
              by LinguaGlee
            </p>
            
            {/* Ultra-glamorous glowing tagline with movie-level effects */}
            <div className="relative font-poppins text-xl md:text-2xl font-light text-white mb-14 leading-relaxed max-w-4xl mx-auto text-center tracking-wide">
              {/* Multiple dramatic glow layers */}
              <div className="absolute inset-0 text-xl md:text-2xl font-light text-pink-300 blur-sm opacity-80 animate-[glow_3s_ease-in-out_infinite]">
                <p className="mb-2">One unforgettable hour.</p>
                <p>English. Confidence. Sparkle. Sisterhood.</p>
              </div>
              <div className="absolute inset-0 text-xl md:text-2xl font-light text-purple-200 blur-xs opacity-60 animate-[pulse_2s_ease-in-out_infinite]">
                <p className="mb-2">One unforgettable hour.</p>
                <p>English. Confidence. Sparkle. Sisterhood.</p>
              </div>
              <div className="absolute inset-0 text-xl md:text-2xl font-light text-gold blur-lg opacity-40 animate-[sparkle_5s_ease-in-out_infinite]">
                <p className="mb-2">One unforgettable hour.</p>
                <p>English. Confidence. Sparkle. Sisterhood.</p>
              </div>
              {/* Main text with ultimate sparkle effect */}
              <div className="relative z-10 drop-shadow-2xl text-shadow-glow animate-[sparkle-text_3s_ease-in-out_infinite]">
                <p className="mb-2">One unforgettable hour.</p>
                <p>English. Confidence. Sparkle. Sisterhood.</p>
              </div>
            </div>
            
            {/* Movie-level CTA Button with ultimate glamour */}
            <Button 
              onClick={scrollToForm}
              className="bg-gradient-to-r from-[#ec2b8d] via-[#d91a7a] to-[#9c0f67] hover:from-[#ff1493] hover:via-[#ec2b8d] hover:to-[#8b0864] text-white font-poppins font-bold px-16 py-8 text-xl rounded-full shadow-[0_0_50px_rgba(236,43,141,0.6),0_0_100px_rgba(236,43,141,0.3)] hover:shadow-[0_0_80px_rgba(236,43,141,0.8),0_0_150px_rgba(236,43,141,0.4)] transition-all duration-700 transform hover:scale-110 border-2 border-white/30 tracking-wide uppercase animate-[glow_4s_ease-in-out_infinite]"
            >
              <span className="drop-shadow-lg">Yes, I Want This</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
