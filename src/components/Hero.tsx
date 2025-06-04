
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
      {/* Background - glamorous city rooftop at night */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
      
      {/* Glass overlay with shimmer */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-purple-900/30 to-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-purple-800/30"></div>
      
      {/* Sparkle overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(120,119,198,0.3),_transparent_50%),radial-gradient(circle_at_80%_20%,_rgba(232,121,249,0.3),_transparent_50%),radial-gradient(circle_at_40%_40%,_rgba(251,189,229,0.3),_transparent_50%)]"></div>
      
      {/* Logo */}
      <div className="absolute top-8 left-8 z-10">
        <img 
          src="/lovable-uploads/86a23508-a906-474a-a3a7-9f2b4eb948f3.png" 
          alt="LinguaGlee Logo" 
          className="h-16 w-auto drop-shadow-2xl"
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="font-playfair text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl tracking-wide">
          <span className="bg-gradient-to-r from-pink-400 via-purple-300 to-pink-200 bg-clip-text text-transparent animate-pulse">
            Fluent
          </span>{" "}
          &{" "}
          <span className="bg-gradient-to-r from-pink-400 via-purple-300 to-pink-200 bg-clip-text text-transparent animate-pulse">
            Fabulous
          </span>
        </h1>
        
        <p className="font-allura text-3xl md:text-4xl text-pink-200 mb-8 drop-shadow-lg">
          by LinguaGlee
        </p>
        
        <h2 className="font-playfair text-xl md:text-3xl font-light text-white mb-12 leading-relaxed max-w-4xl mx-auto drop-shadow-lg">
          A rooftop English experience for stylish women who want confidence, sparkle, and sisterhood.
        </h2>
        
        <Button 
          onClick={scrollToForm}
          className="bg-gradient-to-r from-pink-600 to-purple-700 hover:from-pink-700 hover:to-purple-800 text-white font-playfair font-semibold px-16 py-8 text-2xl rounded-none shadow-2xl hover:shadow-pink-500/25 transition-all duration-500 transform hover:scale-105 border-2 border-pink-400/30 backdrop-blur-sm"
        >
          Reserve My Spot
        </Button>
      </div>
    </section>
  );
};

export default Hero;
