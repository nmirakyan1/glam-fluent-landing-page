
import { Button } from "@/components/ui/button";

const Investment = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('application-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-linguaglee-pink/15 to-linguaglee-lavender/25">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Your Transformation Investment
        </h2>
        
        <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border-4 border-white/50">
          <p className="font-montserrat text-2xl text-gray-700 mb-8">
            The full Fluent & Fabulous experience is just:
          </p>
          
          <div className="text-8xl font-playfair font-bold text-linguaglee-pink mb-8 drop-shadow-lg">
            $400
          </div>
          
          <div className="space-y-4 mb-12">
            <div className="bg-linguaglee-lavender/30 rounded-2xl p-6">
              <p className="font-montserrat text-gray-700 font-medium text-lg flex items-center justify-center">
                <span className="text-2xl mr-3">💳</span>
                Payment plan: 2 payments of $200
              </p>
            </div>
            
            <div className="bg-linguaglee-pink/20 rounded-2xl p-6">
              <p className="font-montserrat text-gray-700 font-medium text-lg flex items-center justify-center">
                <span className="text-2xl mr-3">🧠</span>
                Spots are limited to 4 per group
              </p>
            </div>
          </div>
          
          <Button 
            onClick={scrollToForm}
            className="bg-gradient-to-r from-linguaglee-pink to-linguaglee-pink/80 hover:from-linguaglee-pink/90 hover:to-linguaglee-pink/70 text-white font-montserrat font-bold px-16 py-6 text-2xl rounded-full shadow-2xl hover:shadow-pink-300/50 transition-all duration-300 transform hover:scale-105 border-2 border-white/30"
          >
            Yes, I Want This! ✨
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Investment;
