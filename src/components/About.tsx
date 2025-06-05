
const About = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Subtle sparkle effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#cc0a65] rounded-full animate-twinkle"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-gold rounded-full animate-sparkle"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Main heading */}
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#cc0a65] leading-[0.9] tracking-wide">
            Welcome to One Hour of Girl Power
          </h2>
          
          {/* Vogue-style subheading */}
          <div className="border-t border-b border-black py-4">
            <p className="font-poppins text-sm uppercase tracking-[0.3em] text-black font-medium">
              Where confidence meets conversation
            </p>
          </div>
          
          {/* Main content */}
          <div className="space-y-8 animate-fade-in">
            <p className="font-playfair text-xl md:text-2xl text-black leading-[1.6] tracking-wide italic">
              "This isn't about perfecting your grammar or memorizing vocabulary lists."
            </p>
            
            <p className="font-poppins text-base md:text-lg text-black leading-[1.9] max-w-3xl mx-auto">
              This is about finding your voice in English — the same powerful, authentic voice you have in your native language. 
              It's about speaking with confidence, expressing your ideas clearly, and feeling completely yourself when you communicate in English.
            </p>
            
            <div className="pt-8">
              <blockquote className="border-l-4 border-[#cc0a65] pl-6 italic">
                <p className="font-playfair text-lg md:text-xl text-black leading-[1.6] tracking-wide">
                  "Because you already have everything you need to be fluent. 
                  You just need to unlock it."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
