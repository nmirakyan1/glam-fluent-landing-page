
const WhatYouGet = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
          What You Get
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-linguaglee-pink/20 to-linguaglee-lavender/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300">
              <span className="text-4xl">🌅</span>
            </div>
            <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
              8 Rooftop Classes
            </h3>
            <p className="font-montserrat text-gray-700 leading-relaxed">
              Sunset sessions with conversation, lifestyle themes & music
            </p>
          </div>
          
          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-linguaglee-pink/20 to-linguaglee-lavender/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300">
              <span className="text-4xl">✨</span>
            </div>
            <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
              The Glow-Up Workbook
            </h3>
            <p className="font-montserrat text-gray-700 leading-relaxed">
              Your personal digital guide to speaking like the star you are
            </p>
          </div>
          
          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-linguaglee-pink/20 to-linguaglee-lavender/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300">
              <span className="text-4xl">🥂</span>
            </div>
            <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
              Final Showcase & Certificate
            </h3>
            <p className="font-montserrat text-gray-700 leading-relaxed">
              Celebrate your voice with a rooftop toast + chic certificate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
