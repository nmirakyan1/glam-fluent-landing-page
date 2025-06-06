
import { Button } from "@/components/ui/button";

const Investment = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('application-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#1B0F26] to-[#593190] relative">
      {/* Faint radial glow behind pricing box */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[600px] bg-gradient-radial from-purple-400/10 via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
          <span className="text-[#E24E9D]">Girl Power </span>
          <span className="text-white">Investment</span>
        </h2>
        <p className="font-playfair text-xl md:text-2xl text-white/90 mb-12 italic">
          Because this isn't just a class. It's a turning point.
        </p>
        
        <div className="max-w-2xl mx-auto bg-black/60 backdrop-blur-sm border-2 border-pink-400/30 p-12 shadow-2xl relative">
          <div className="space-y-6 mb-8 animate-fade-in">
            <p className="font-playfair text-lg text-white">
              8 curated sessions. A confidence-building workbook. Certificate of transformation.
            </p>
            <p className="font-playfair text-lg text-white italic">
              Real-life English. Real women. Real results.
            </p>
          </div>
          
          <div className="text-8xl font-playfair font-bold text-[#E24E9D] mb-8 drop-shadow-lg animate-fade-in animation-delay-300">
            $400
          </div>
          
          <div className="space-y-4 mb-12">
            <div className="bg-[#2C0F25] backdrop-blur-sm border border-[#E24E9D]/50 p-6 animate-fade-in animation-delay-500 hover:bg-[#2C0F25]/80 hover:border-[#E24E9D]/70 transition-all duration-300 hover:transform hover:-translate-y-1">
              <p className="font-playfair text-[#FDF6F9] font-medium text-lg">
                Payment Plan: Two payments of $200
              </p>
            </div>
            
            <div className="bg-[#3A225E] backdrop-blur-sm border border-purple-400/30 p-6 animate-fade-in animation-delay-700 hover:bg-[#3A225E]/80 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:-translate-y-1">
              <p className="font-playfair text-white font-medium text-lg">
                Spots are limited to just 4 women per group
              </p>
            </div>
          </div>
          
          <Button 
            onClick={scrollToForm}
            className="bg-gradient-to-r from-[#FF4FB1] to-[#8A38FF] hover:from-[#FF4FB1] hover:to-[#8A38FF] text-white font-playfair font-bold px-16 py-6 text-2xl rounded-none shadow-2xl hover:shadow-[0_0_30px_rgba(255,79,177,0.4)] transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border-2 border-white/20 animate-fade-in animation-delay-900"
          >
            Yes, I Want This!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Investment;
