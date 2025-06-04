
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
      
      {/* Cinematic overlay with grain effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
      
      {/* Subtle sparkle overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,_rgba(236,72,153,0.15),_transparent_50%),radial-gradient(circle_at_75%_25%,_rgba(219,39,119,0.15),_transparent_50%),radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.05),_transparent_50%)]"></div>
      
      {/* Logo - top left */}
      <div className="absolute top-8 left-8 z-10">
        <img 
          src="/lovable-uploads/86a23508-a906-474a-a3a7-9f2b4eb948f3.png" 
          alt="LinguaGlee Logo" 
          className="h-12 w-auto drop-shadow-2xl opacity-90"
        />
      </div>

      {/* Glass blur panel behind text */}
      <div className="absolute inset-0 flex items-center justify-center z-5">
        <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-16 max-w-4xl mx-4 shadow-2xl">
          <div className="text-center">
            <h1 className="font-playfair text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-2xl tracking-wide leading-tight">
              Fluent & Fabulous
            </h1>
            
            <p className="font-playfair text-2xl md:text-3xl text-white/90 mb-8 font-light tracking-wider">
              by LinguaGlee
            </p>
            
            <h2 className="font-playfair text-xl md:text-2xl font-light text-white mb-12 leading-relaxed max-w-3xl mx-auto drop-shadow-lg tracking-wide">
              A rooftop English experience for stylish women who want<br />
              confidence, sparkle, and sisterhood.
            </h2>
            
            <Button 
              onClick={scrollToForm}
              className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-playfair font-semibold px-12 py-6 text-xl rounded-full shadow-2xl hover:shadow-pink-500/30 transition-all duration-500 transform hover:scale-105 border-0 backdrop-blur-sm"
            >
              Reserve My Spot
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
