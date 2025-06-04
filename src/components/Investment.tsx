
import { Button } from "@/components/ui/button";

const Investment = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('application-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-linguaglee-pink/10 to-linguaglee-lavender/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Your Transformation Investment
        </h2>
        
        <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
          <p className="font-montserrat text-xl text-gray-700 mb-6">
            The full Fluent & Fabulous experience is just:
          </p>
          
          <div className="text-6xl font-playfair font-bold text-linguaglee-pink mb-6">
            $400
          </div>
          
          <p className="font-montserrat text-gray-600 mb-8 italic">
            (Includes all 8 sessions, workbook, support group, and certificate)
          </p>
          
          <div className="bg-linguaglee-lavender/20 rounded-lg p-4 mb-8">
            <p className="font-montserrat text-gray-700 font-medium">
              Payment plan available: 2 × $200
            </p>
          </div>
          
          <Button 
            onClick={scrollToForm}
            className="bg-linguaglee-pink hover:bg-linguaglee-pink/90 text-white font-montserrat font-semibold px-12 py-4 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Reserve My Spot Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Investment;
