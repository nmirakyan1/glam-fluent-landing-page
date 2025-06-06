
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
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/d2b8b167-1f86-440e-970d-5e3ac94df1fb.png')] bg-cover bg-center bg-[position:50%_30%]"></div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-400/15 to-yellow-400/20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/15"></div>
      
      {/* Logo - top left */}
      <div className="absolute top-8 left-8 z-10">
        <img 
          src="/lovable-uploads/86a23508-a906-474a-a3a7-9f2b4eb948f3.png" 
          alt="LinguaGlee Logo" 
          className="h-48 w-auto drop-shadow-2xl opacity-90"
        />
      </div>

      {/* Reduced opacity glass panel - moved down */}
      <div className="absolute inset-0 flex items-start justify-center z-5 pt-32">
        <div className="relative backdrop-blur-sm bg-gradient-to-br from-white/15 via-pink-100/8 to-purple-100/12 max-w-7xl mx-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] mt-16">
          {/* Subtle glass reflections */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-pink-200/5 rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-3xl"></div>
          
          <div className="text-center relative z-10 p-24 md:p-32">
            {/* Fashion-forward headline with Playfair Display */}
            <div className="relative mb-8">
              <h1 className="font-playfair leading-none">
                <span className="block text-6xl md:text-8xl font-bold tracking-tight text-stone-100 drop-shadow-2xl [text-shadow:0_0_30px_rgba(255,255,255,0.3)]">
                  One Hour
                </span>
                <span className="block text-6xl md:text-8xl font-light italic tracking-tight text-[#cc0a65] drop-shadow-2xl [text-shadow:0_0_40px_rgba(204,10,101,0.4)]">
                  of Girl Power
                </span>
              </h1>
            </div>
            
            {/* Subheading */}
            <p className="font-montserrat text-base md:text-lg text-white mb-10 font-black tracking-[0.4em] uppercase drop-shadow-2xl">
              by LinguaGlee | English School with Attitude
            </p>
            
            {/* Tagline with enhanced text shadow */}
            <div className="relative font-poppins text-xl md:text-2xl font-light text-white mb-14 leading-relaxed max-w-4xl mx-auto text-center tracking-wide [text-shadow:0_0_20px_rgba(255,255,255,0.4),0_0_40px_rgba(236,43,141,0.3)]">
              <p className="mb-2">Learn English. Sparkle. Connect.</p>
              <p>A One-Hour English Experience for Women Who Want More.</p>
            </div>
            
            {/* CTA Button */}
            <Button 
              onClick={scrollToForm}
              className="bg-gradient-to-r from-[#ec2b8d] via-[#d91a7a] to-[#9c0f67] hover:from-[#ff1493] hover:via-[#ec2b8d] hover:to-[#8b0864] text-white font-poppins font-bold px-16 py-8 text-xl rounded-full shadow-[0_0_50px_rgba(236,43,141,0.6)] hover:shadow-[0_0_80px_rgba(236,43,141,0.8)] transition-all duration-500 transform hover:scale-105 border-2 border-white/20 tracking-wide uppercase"
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
