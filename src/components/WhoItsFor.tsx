
const WhoItsFor = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-linguaglee-pink/15 to-linguaglee-lavender/25">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-16">
          ✨ This is for you if you've ever said...
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-linguaglee-pink">
            <div className="flex items-start space-x-4">
              <span className="text-4xl text-linguaglee-pink">💭</span>
              <p className="font-montserrat text-xl text-gray-700 leading-relaxed text-left italic">
                "I understand English, but I freeze when I speak."
              </p>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-linguaglee-pink">
            <div className="flex items-start space-x-4">
              <span className="text-4xl text-linguaglee-pink">💪</span>
              <p className="font-montserrat text-xl text-gray-700 leading-relaxed text-left italic">
                "I want to sound confident, not just correct."
              </p>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-linguaglee-pink">
            <div className="flex items-start space-x-4">
              <span className="text-4xl text-linguaglee-pink">👯‍♀️</span>
              <p className="font-montserrat text-xl text-gray-700 leading-relaxed text-left italic">
                "I want to meet cool women and have fun while learning."
              </p>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-linguaglee-pink">
            <div className="flex items-start space-x-4">
              <span className="text-4xl text-linguaglee-pink">💖</span>
              <p className="font-montserrat text-xl text-gray-700 leading-relaxed text-left italic">
                "I want something just for me."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
