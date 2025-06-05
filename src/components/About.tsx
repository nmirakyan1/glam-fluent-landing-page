

const About = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            {/* Main Headline */}
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-100 leading-tight mb-4">
                This Isn't Just English Class.
              </h2>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold leading-tight">
                It's Your{' '}
                <span className="text-[#cc0a65] relative">
                  Glow-Up Hour
                  <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-gold via-gold to-transparent opacity-80"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#cc0a65]/20 to-transparent blur-lg"></div>
                </span>
                .
              </h2>
            </div>

            {/* Thin gold separator */}
            <div className="w-24 h-[1px] bg-gradient-to-r from-gold to-transparent"></div>
            
            {/* Body copy with elegant spacing */}
            <div className="space-y-8">
              <p className="font-poppins text-xl text-pink-200 leading-relaxed font-light">
                This is a rooftop moment made for women who want more —<br />
                more fluency, more confidence, more joy, more sparkle.
              </p>
              
              {/* Negative statements with elegant line spacing */}
              <div className="space-y-3">
                <p className="font-playfair text-lg text-stone-300 italic leading-relaxed">
                  It's not grammar drills.
                </p>
                <p className="font-playfair text-lg text-stone-300 italic leading-relaxed">
                  It's not textbooks.
                </p>
                <p className="font-playfair text-lg text-stone-300 italic leading-relaxed">
                  It's not boring.
                </p>
              </div>

              {/* Positive statements with dramatic stacking */}
              <div className="space-y-4 pt-4">
                <p className="font-poppins text-xl text-white font-light leading-relaxed">
                  It's real conversation.
                </p>
                <p className="font-poppins text-xl text-white font-light leading-relaxed">
                  Real empowerment.
                </p>
                <p className="font-poppins text-xl text-pink-200 font-light leading-relaxed">
                  And a stylish hour just for you.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="/lovable-uploads/f7a700d7-8ca8-4702-90a5-fad681576404.png" 
              alt="Glamorous women with colorful balloons and stylish sunglasses" 
              className="rounded-none shadow-2xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

