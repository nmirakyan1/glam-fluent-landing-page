
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
        <div className="grid md:grid-cols-2 gap-16 items-center relative">
          {/* Diagonal gradient overlay for seamless blend */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent md:bg-gradient-to-br md:from-white/70 md:via-white/40 md:to-transparent pointer-events-none z-10"></div>
          
          <div className="space-y-12 relative z-20">
            {/* Main headline with Vogue magazine typography */}
            <div className="text-center">
              <h2 className="leading-[1.1] mb-16 tracking-wide">
                <span className="block font-playfair text-7xl md:text-9xl font-bold text-black mb-4 tracking-wider">
                  One Hour
                </span>
                <span className="block font-playfair text-6xl md:text-8xl text-[#cc0a65] italic font-normal -mt-6 tracking-wide">
                  of Girl Power
                </span>
              </h2>
              
              {/* BY LINGUAGLEE in caps */}
              <p className="font-poppins text-sm md:text-base font-semibold text-black uppercase tracking-[0.2em] mt-8">
                By Linguaglee
              </p>
            </div>
            
            {/* Carrie Bradshaw style text with luxe typography */}
            <div className="space-y-8 text-center">
              <p className="font-poppins text-xl md:text-2xl text-black leading-[1.8] font-light tracking-wide max-w-2xl mx-auto">
                I used to think confidence came from knowing all the answers.
              </p>
              <p className="font-poppins text-xl md:text-2xl text-black leading-[1.8] font-light tracking-wide max-w-2xl mx-auto">
                But maybe it comes from saying what you mean — in any language.
              </p>
            </div>

            {/* Elegant body text */}
            <div className="space-y-6 text-center max-w-2xl mx-auto">
              <p className="font-poppins text-lg md:text-xl text-black font-light leading-relaxed tracking-wide">
                You're not here to memorize verbs.
              </p>
              <p className="font-poppins text-lg md:text-xl text-black font-light leading-relaxed tracking-wide">
                You're here to be understood. To be magnetic. To be heard.
              </p>
            </div>

            {/* Glamorous middle section with italic flair */}
            <div className="space-y-6 text-center max-w-2xl mx-auto">
              <p className="font-playfair text-xl md:text-2xl text-[#cc0a65] font-normal leading-[1.8] italic tracking-wide">
                Add a little lipstick, a rooftop breeze, and a sentence that lands just right…
              </p>
              <p className="font-poppins text-lg md:text-xl text-black font-medium leading-relaxed tracking-wide">
                Suddenly, English feels a lot like power.
              </p>
            </div>

            {/* Powerful closing with consistent typography */}
            <div className="space-y-6 text-center max-w-2xl mx-auto">
              <p className="font-playfair text-xl md:text-2xl text-black font-medium leading-[1.8] tracking-wide">
                This isn't school. It's your spotlight.
              </p>
              <p className="font-playfair text-xl md:text-2xl text-black font-medium leading-[1.8] tracking-wide">
                And it's calling your name.
              </p>
            </div>

            {/* Grand finale with glowing pink underline */}
            <div className="text-center pt-8">
              <p className="font-playfair text-3xl md:text-4xl font-bold text-[#cc0a65] relative inline-block tracking-wide">
                Welcome to One Hour of Girl Power.
                <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#cc0a65] to-transparent animate-shimmer"></div>
                <div className="absolute -bottom-1 left-0 right-0 h-[1px] bg-[#cc0a65] opacity-60 blur-sm"></div>
              </p>
            </div>
          </div>
          
          <div className="relative z-10">
            {/* Soft shimmer border effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#cc0a65]/20 via-gold/10 to-pink-400/20 blur-xl animate-pulse"></div>
            <img 
              src="/lovable-uploads/f7a700d7-8ca8-4702-90a5-fad681576404.png" 
              alt="Glamorous women with colorful balloons and stylish sunglasses" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
