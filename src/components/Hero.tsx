
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('application-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-linguaglee-pink/20 to-linguaglee-lavender/30 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-15"></div>
      
      {/* Logo */}
      <div className="absolute top-8 left-8 z-10">
        <img 
          src="/lovable-uploads/86a23508-a906-474a-a3a7-9f2b4eb948f3.png" 
          alt="LinguaGlee Logo" 
          className="h-16 w-auto"
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          <span className="text-linguaglee-pink">Fluent</span> & <span className="text-linguaglee-pink">Fabulous</span>
        </h1>
        
        <p className="font-allura text-2xl md:text-3xl text-linguaglee-pink mb-8">
          by LinguaGlee
        </p>
        
        <h2 className="font-montserrat text-xl md:text-2xl font-light text-gray-700 mb-12 leading-relaxed">
          Learn English. Build confidence. Live glam.<br />
          <span className="font-medium">8 exclusive rooftop lessons for women in LA.</span>
        </h2>
        
        <Button 
          onClick={scrollToForm}
          className="bg-linguaglee-pink hover:bg-linguaglee-pink/90 text-white font-montserrat font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Save My Spot
        </Button>
      </div>
    </section>
  );
};

export default Hero;
