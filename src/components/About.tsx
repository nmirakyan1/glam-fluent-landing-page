
const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-purple-900/50 to-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            {/* Main Headline */}
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-100 leading-tight mb-4">
                This Isn't Just English Class.
              </h2>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-300 bg-clip-text text-transparent leading-tight">
                It's Your Glow-Up Hour.
              </h2>
            </div>

            {/* Thin gold separator */}
            <div className="w-24 h-[1px] bg-gradient-to-r from-gold to-transparent"></div>
            
            {/* Body copy */}
            <div className="space-y-8">
              <p className="font-playfair text-xl text-pink-200 leading-relaxed">
                This is a rooftop moment made for women who want more —<br />
                more fluency, more confidence, more joy, more sparkle.
              </p>
              
              {/* Quote pull-style section */}
              <div className="bg-black/40 backdrop-blur-sm border-l-4 border-pink-400 pl-8 py-6 space-y-3">
                <p className="font-playfair text-lg text-stone-200 italic leading-relaxed">
                  It's not grammar drills.
                </p>
                <p className="font-playfair text-lg text-stone-200 italic leading-relaxed">
                  It's not textbooks.
                </p>
                <p className="font-playfair text-lg text-stone-200 italic leading-relaxed">
                  It's not boring.
                </p>
              </div>

              {/* Positive statements with dramatic stacking */}
              <div className="space-y-4">
                <p className="font-playfair text-xl text-white font-medium animate-fade-in">
                  It's real conversation.
                </p>
                <p className="font-playfair text-xl text-white font-medium animate-fade-in" style={{animationDelay: '0.2s'}}>
                  Real empowerment.
                </p>
                <p className="font-playfair text-xl bg-gradient-to-r from-pink-400 to-purple-300 bg-clip-text text-transparent font-medium animate-fade-in" style={{animationDelay: '0.4s'}}>
                  And a stylish hour just for you.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Confident woman with style" 
              className="rounded-none shadow-2xl w-full h-96 object-cover border border-pink-400/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
