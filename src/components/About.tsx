

const About = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Subtle sparkle effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#cc0a65] rounded-full animate-twinkle"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-gold rounded-full animate-sparkle"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center relative">
          
          <div className="space-y-12 relative z-20 -mt-8">
            
            {/* Cover story headline - Vogue style */}
            <div className="text-center space-y-6">
              <h2 className="font-playfair text-5xl md:text-7xl font-bold text-[#cc0a65] leading-[0.9] tracking-wide">
                ONE HOUR
              </h2>
              <h3 className="font-playfair text-4xl md:text-6xl font-light text-black italic leading-[0.9] -mt-4">
                of Girl Power
              </h3>
              
              {/* Vogue-style subheading */}
              <div className="border-t border-b border-black py-4 mt-8">
                <p className="font-poppins text-sm uppercase tracking-[0.3em] text-black font-medium">
                  The New Language of Confidence
                </p>
              </div>
            </div>
            
            {/* Magazine-style pull quotes */}
            <div className="space-y-12">
              <blockquote className="text-center border-l-4 border-[#cc0a65] pl-6 italic">
                <p className="font-playfair text-2xl md:text-3xl text-black leading-[1.4] tracking-wide">
                  "I used to think confidence came from knowing all the answers."
                </p>
              </blockquote>
              
              <blockquote className="text-center border-l-4 border-gold pl-6 italic">
                <p className="font-playfair text-2xl md:text-3xl text-black leading-[1.4] tracking-wide">
                  "But maybe it comes from saying what you mean — in any language."
                </p>
              </blockquote>
            </div>

            {/* Magazine body text in columns with improved line height */}
            <div className="grid md:grid-cols-2 gap-8 text-justify">
              <div className="space-y-6">
                <p className="font-poppins text-base text-black leading-[1.9]">
                  You're not here to memorize verbs. You're here to be understood. <em className="text-[#cc0a65] italic">To be magnetic. To be heard.</em>
                </p>
                <p className="font-poppins text-base text-black leading-[1.9]">
                  Add a little lipstick, a rooftop breeze, and a sentence that lands just right…
                </p>
              </div>
              <div className="space-y-6">
                <p className="font-poppins text-base text-black leading-[1.9]">
                  Suddenly, English feels a lot like power. This isn't school. It's your spotlight.
                </p>
                <p className="font-poppins text-base text-black leading-[1.9] font-medium">
                  And it's calling your name.
                </p>
              </div>
            </div>

            {/* Vogue-style cover line without glow */}
            <div className="text-center pt-8 border-t border-black">
              <p className="font-playfair text-3xl md:text-4xl font-bold text-[#cc0a65] tracking-wide">
                Welcome to One Hour of Girl Power
              </p>
              <p className="font-poppins text-sm uppercase tracking-[0.2em] text-black mt-4">
                Inside: Your transformation begins
              </p>
            </div>
          </div>
          
          <div className="relative z-10">
            {/* Fashion magazine style image treatment */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#cc0a65]/10 via-gold/5 to-pink-400/10 blur-lg"></div>
              <img 
                src="/lovable-uploads/f7a700d7-8ca8-4702-90a5-fad681576404.png" 
                alt="Glamorous women with colorful balloons and stylish sunglasses" 
                className="relative z-10 w-full h-auto object-cover shadow-2xl transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Magazine-style image caption */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4">
                <p className="font-poppins text-xs uppercase tracking-wide text-black">
                  POWER PLAYERS: The new generation of confident women speaking their truth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

