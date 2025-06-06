
import { Button } from "@/components/ui/button";

const Investment = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('application-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-black to-purple-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
          Girl Power Investment
        </h2>
        <p className="font-playfair text-xl md:text-2xl text-white/90 mb-12 italic">
          Because this isn't just a class. It's a turning point.
        </p>
        
        <div className="max-w-2xl mx-auto bg-black/60 backdrop-blur-sm border-2 border-pink-400/30 p-12 shadow-2xl">
          <div className="space-y-6 mb-8">
            <p className="font-playfair text-lg text-white">
              8 curated sessions. A confidence-building workbook. Certificate of transformation.
            </p>
            <p className="font-playfair text-lg text-white italic">
              Real-life English. Real women. Real results.
            </p>
          </div>
          
          <div className="text-8xl font-playfair font-bold bg-gradient-to-r from-pink-400 to-purple-300 bg-clip-text text-transparent mb-8 drop-shadow-lg">
            $400
          </div>
          
          <div className="space-y-4 mb-12">
            <div className="bg-pink-600/20 backdrop-blur-sm border border-pink-400/30 p-6">
              <p className="font-playfair text-white font-medium text-lg">
                Payment Plan: Two payments of $200
              </p>
            </div>
            
            <div className="bg-purple-600/20 backdrop-blur-sm border border-purple-400/30 p-6">
              <p className="font-playfair text-white font-medium text-lg">
                Spots are limited to just 4 women per group
              </p>
            </div>
          </div>
          
          <Button 
            onClick={scrollToForm}
            className="bg-gradient-to-r from-pink-600 to-purple-700 hover:from-pink-700 hover:to-purple-800 text-white font-playfair font-bold px-16 py-6 text-2xl rounded-none shadow-2xl hover:shadow-pink-500/25 transition-all duration-500 transform hover:scale-105 border-2 border-pink-400/30"
          >
            Yes, I Want This!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Investment;
