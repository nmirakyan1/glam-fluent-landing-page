
const WhoItsFor = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-linguaglee-lavender/20 to-linguaglee-pink/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          ✨ This is for you if...
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="font-montserrat text-lg text-gray-700 leading-relaxed">
              You've studied English but still feel shy speaking
            </p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="font-montserrat text-lg text-gray-700 leading-relaxed">
              You want to feel more confident in life, work, or relationships
            </p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="font-montserrat text-lg text-gray-700 leading-relaxed">
              You love style, connection, and meaningful conversations
            </p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="font-montserrat text-lg text-gray-700 leading-relaxed">
              You're ready for a fabulous English journey with new friends
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
