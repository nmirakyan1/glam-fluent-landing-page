
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
      
      {/* Simple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 via-purple-400/20 to-yellow-400/25"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
      
      {/* Logo - top left */}
      <div className="absolute top-8 left-8 z-10">
        <img 
          src="/lovable-uploads/86a23508-a906-474a-a3a7-9f2b4eb948f3.png" 
          alt="LinguaGlee Logo" 
          className="h-48 w-auto drop-shadow-2xl opacity-90"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-7xl mx-8">
        {/* Main headline */}
        <div className="relative mb-8">
          <h1 className="font-poppins font-black text-white mb-2 drop-shadow-2xl leading-none">
            <span className="block text-6xl md:text-8xl tracking-tight">One Hour</span>
            <span className="block text-6xl md:text-8xl tracking-tight text-[#cc0a65]">of Girl Power</span>
          </h1>
        </div>
        
        {/* Subheading */}
        <p className="font-montserrat text-base md:text-lg text-white mb-10 font-black tracking-[0.4em] uppercase drop-shadow-2xl">
          by LinguaGlee
        </p>
        
        {/* Tagline */}
        <div className="relative font-poppins text-xl md:text-2xl font-light text-white mb-14 leading-relaxed max-w-4xl mx-auto text-center tracking-wide drop-shadow-2xl">
          <p className="mb-2">One unforgettable hour.</p>
          <p>English. Confidence. Sparkle. Sisterhood.</p>
        </div>
        
        {/* CTA Button */}
        <Button 
          onClick={scrollToForm}
          className="bg-gradient-to-r from-[#ec2b8d] via-[#d91a7a] to-[#9c0f67] hover:from-[#ff1493] hover:via-[#ec2b8d] hover:to-[#8b0864] text-white font-poppins font-bold px-16 py-8 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-white/30 tracking-wide uppercase"
        >
          <span className="drop-shadow-lg">Yes, I Want This</span>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
