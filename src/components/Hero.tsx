
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('application-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-linguaglee-pink/30 to-linguaglee-lavender/40 overflow-hidden">
      {/* Background pattern - glamorous rooftop evening */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
      
      {/* Sparkle overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-linguaglee-pink/10"></div>
      
      {/* Logo */}
      <div className="absolute top-8 left-8 z-10">
        <img 
          src="/lovable-uploads/86a23508-a906-474a-a3a7-9f2b4eb948f3.png" 
          alt="LinguaGlee Logo" 
          className="h-16 w-auto drop-shadow-lg"
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
        <h1 className="font-playfair text-6xl md:text-8xl font-bold text-gray-900 mb-6 drop-shadow-sm">
          <span className="text-linguaglee-pink">Fluent</span> & <span className="text-linguaglee-pink">Fabulous</span>
        </h1>
        
        <p className="font-allura text-3xl md:text-4xl text-linguaglee-pink mb-8 drop-shadow-sm">
          by LinguaGlee
        </p>
        
        <h2 className="font-montserrat text-xl md:text-3xl font-light text-gray-800 mb-12 leading-relaxed max-w-4xl mx-auto">
          The rooftop English experience for women who want confidence, connection, and sparkle ✨
        </h2>
        
        <Button 
          onClick={scrollToForm}
          className="bg-gradient-to-r from-linguaglee-pink to-linguaglee-pink/80 hover:from-linguaglee-pink/90 hover:to-linguaglee-pink/70 text-white font-montserrat font-semibold px-12 py-6 text-xl rounded-full shadow-2xl hover:shadow-pink-300/50 transition-all duration-300 transform hover:scale-105 border-2 border-white/30"
        >
          🎀 Reserve My Spot
        </Button>
      </div>
    </section>
  );
};

export default Hero;
