
const WhoItsFor = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-black to-purple-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-16">
          This is for you if you've ever whispered...
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-black/50 backdrop-blur-sm border border-pink-400/30 p-12 relative">
            <div className="absolute top-4 left-4 text-6xl text-pink-400 font-playfair">"</div>
            <p className="font-playfair text-2xl text-white leading-relaxed italic pt-8">
              I understand English, but I freeze when I speak.
            </p>
            <div className="absolute bottom-4 right-4 text-6xl text-pink-400 font-playfair rotate-180">"</div>
          </div>
          
          <div className="bg-black/50 backdrop-blur-sm border border-purple-400/30 p-12 relative">
            <div className="absolute top-4 left-4 text-6xl text-purple-400 font-playfair">"</div>
            <p className="font-playfair text-2xl text-white leading-relaxed italic pt-8">
              I want to sound confident, not just correct.
            </p>
            <div className="absolute bottom-4 right-4 text-6xl text-purple-400 font-playfair rotate-180">"</div>
          </div>
          
          <div className="bg-black/50 backdrop-blur-sm border border-pink-400/30 p-12 relative">
            <div className="absolute top-4 left-4 text-6xl text-pink-400 font-playfair">"</div>
            <p className="font-playfair text-2xl text-white leading-relaxed italic pt-8">
              I want to meet cool women and have fun while learning.
            </p>
            <div className="absolute bottom-4 right-4 text-6xl text-pink-400 font-playfair rotate-180">"</div>
          </div>
          
          <div className="bg-black/50 backdrop-blur-sm border border-purple-400/30 p-12 relative">
            <div className="absolute top-4 left-4 text-6xl text-purple-400 font-playfair">"</div>
            <p className="font-playfair text-2xl text-white leading-relaxed italic pt-8">
              I want something just for me.
            </p>
            <div className="absolute bottom-4 right-4 text-6xl text-purple-400 font-playfair rotate-180">"</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
