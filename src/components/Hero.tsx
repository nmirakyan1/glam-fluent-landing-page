
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

      {/* Diamond-cut glass panel with crystalline effects */}
      <div className="absolute inset-0 flex items-center justify-center z-5">
        <div className="relative backdrop-blur-sm bg-gradient-to-br from-white/15 via-white/8 to-pink-100/15 max-w-7xl mx-6 shadow-2xl border border-white/30 diamond-shape">
          {/* Diamond-cut shape using clip-path */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-pink-200/20" style={{clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'}}></div>
          
          {/* Multiple crystalline facets */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent" style={{clipPath: 'polygon(0% 0%, 50% 0%, 0% 50%)'}}></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-pink-300/10 to-transparent" style={{clipPath: 'polygon(100% 0%, 100% 50%, 50% 0%)'}}></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/8 to-transparent" style={{clipPath: 'polygon(0% 100%, 50% 100%, 0% 50%)'}}></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-pink-200/8 to-transparent" style={{clipPath: 'polygon(100% 100%, 100% 50%, 50% 100%)'}}></div>
          
          {/* Central diamond core */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent" style={{clipPath: 'polygon(25% 25%, 75% 25%, 75% 75%, 25% 75%)'}}></div>
          
          {/* Prismatic light reflections */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400/20 to-transparent animate-[shimmer_6s_ease-in-out_infinite] opacity-70"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-300/15 to-transparent animate-[shimmer_8s_ease-in-out_infinite] opacity-60"></div>
          
          {/* Diamond sparkles */}
          <div className="absolute top-16 right-20 w-2 h-2 bg-white/60 rounded-full animate-[pulse_2s_ease-in-out_infinite] shadow-lg shadow-white/50"></div>
          <div className="absolute bottom-20 left-24 w-1.5 h-1.5 bg-pink-300/50 rounded-full animate-[pulse_3s_ease-in-out_infinite] shadow-lg shadow-pink-300/40"></div>
          <div className="absolute top-24 left-1/3 w-1 h-1 bg-white/40 rounded-full animate-[pulse_2.5s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-32 right-1/3 w-1.5 h-1.5 bg-blue-200/40 rounded-full animate-[pulse_4s_ease-in-out_infinite]"></div>
          <div className="absolute top-1/2 left-20 w-1 h-1 bg-yellow-200/50 rounded-full animate-[pulse_3.5s_ease-in-out_infinite]"></div>
          <div className="absolute top-1/3 right-24 w-1.5 h-1.5 bg-white/50 rounded-full animate-[pulse_2.8s_ease-in-out_infinite] shadow-md shadow-white/30"></div>
          
          <div className="text-center relative z-10 p-20 md:p-32" style={{clipPath: 'polygon(10% 10%, 90% 10%, 90% 90%, 10% 90%)'}}>
            {/* Stacked headline - no animation */}
            <div className="relative mb-8">
              <h1 className="font-poppins font-black text-white mb-2 drop-shadow-2xl leading-none">
                <span className="block text-6xl md:text-8xl tracking-tight">One Hour</span>
                <span className="block text-6xl md:text-8xl tracking-tight text-[#cc0a65]">of Girl Power</span>
              </h1>
            </div>
            
            {/* Subheading - refined styling with more bold text */}
            <p className="font-montserrat text-base md:text-lg text-white mb-10 font-bold tracking-[0.2em] uppercase drop-shadow-lg">
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
