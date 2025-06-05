
const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden">
      {/* Subtle sparkle effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#cc0a65] rounded-full animate-twinkle"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-gold rounded-full animate-sparkle"></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-twinkle"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* Cinematic Headline */}
            <div className="text-center md:text-left">
              <h2 className="font-playfair text-4xl md:text-6xl font-bold leading-tight mb-6">
                <span className="block text-gray-800 animate-sparkle-text">
                  It's not just an English class,
                </span>
                <span className="block text-[#cc0a65] relative animate-glow">
                  It's your moment.
                  <div className="absolute -bottom-3 left-0 right-0 h-[3px] bg-gradient-to-r from-[#cc0a65] via-gold to-pink-400 opacity-80 animate-shimmer"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#cc0a65]/30 to-transparent blur-xl"></div>
                </span>
              </h2>
            </div>

            {/* Elegant separator */}
            <div className="flex justify-center md:justify-start">
              <div className="w-32 h-[2px] bg-gradient-to-r from-[#cc0a65] via-gold to-pink-400 animate-shimmer"></div>
            </div>
            
            {/* Opening statement with movement */}
            <div className="space-y-6 animate-fade-in">
              <p className="font-playfair text-xl md:text-2xl text-gray-700 leading-relaxed font-light italic text-center md:text-left">
                I used to think confidence came from knowing all the answers.
              </p>
              <p className="font-playfair text-xl md:text-2xl text-gray-700 leading-relaxed font-light italic text-center md:text-left">
                But maybe it comes from saying what you mean — in any language.
              </p>
            </div>

            {/* Rhythmic statements with stagger effect */}
            <div className="space-y-4 text-center md:text-left">
              <p className="font-poppins text-lg text-gray-800 font-light leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
                You're not here to memorize verbs.
              </p>
              <p className="font-poppins text-lg text-gray-800 font-light leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
                You're here to be understood. To be magnetic. To be heard.
              </p>
            </div>

            {/* Glamorous middle section */}
            <div className="space-y-4 text-center md:text-left">
              <p className="font-playfair text-xl text-[#cc0a65] font-light leading-relaxed italic animate-fade-in" style={{animationDelay: '0.6s'}}>
                Add a little lipstick, a rooftop breeze, and a sentence that lands just right…
              </p>
              <p className="font-poppins text-lg text-gray-800 font-medium animate-fade-in" style={{animationDelay: '0.8s'}}>
                Suddenly, English feels a lot like power.
              </p>
            </div>

            {/* Powerful closing */}
            <div className="space-y-4 text-center md:text-left">
              <p className="font-playfair text-xl text-gray-800 font-medium leading-relaxed animate-fade-in" style={{animationDelay: '1s'}}>
                This isn't school. It's your spotlight.
              </p>
              <p className="font-playfair text-xl text-gray-800 font-medium leading-relaxed animate-fade-in" style={{animationDelay: '1.2s'}}>
                And it's calling your name.
              </p>
            </div>

            {/* Grand finale */}
            <div className="text-center md:text-left pt-6">
              <p className="font-playfair text-2xl md:text-3xl font-bold text-[#cc0a65] animate-sparkle-text" style={{animationDelay: '1.4s'}}>
                Welcome to One Hour of Girl Power.
              </p>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{animationDelay: '0.5s'}}>
            <img 
              src="/lovable-uploads/f7a700d7-8ca8-4702-90a5-fad681576404.png" 
              alt="Glamorous women with colorful balloons and stylish sunglasses" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
