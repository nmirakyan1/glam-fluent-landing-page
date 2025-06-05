
const About = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Subtle sparkle effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#cc0a65] rounded-full animate-twinkle"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-gold rounded-full animate-sparkle"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto relative">
          
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold text-[#cc0a65] leading-[0.9] tracking-wide">
              What's stopping you
            </h2>
            <h3 className="font-playfair text-3xl md:text-5xl font-light text-black italic leading-[0.9] -mt-4">
              from speaking up?
            </h3>
            
            {/* Vogue-style subheading */}
            <div className="border-t border-b border-black py-4 mt-8">
              <p className="font-poppins text-sm uppercase tracking-[0.3em] text-black font-medium">
                The fears that keep you silent
              </p>
            </div>
          </div>
          
          {/* Fears grid */}
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* Fear 1 */}
            <div className="space-y-4 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <blockquote className="border-l-4 border-[#cc0a65] pl-6">
                <p className="font-playfair text-xl md:text-2xl text-black leading-[1.4] tracking-wide italic">
                  "I understand everything — but freeze when it's my turn to speak."
                </p>
              </blockquote>
              <p className="font-poppins text-base text-black leading-[1.9] pl-6">
                I'm scared I'll say it wrong and everyone will notice.
              </p>
            </div>

            {/* Fear 2 */}
            <div className="space-y-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <blockquote className="border-l-4 border-gold pl-6">
                <p className="font-playfair text-xl md:text-2xl text-black leading-[1.4] tracking-wide italic">
                  "I stay quiet — even when I know exactly what I want to say."
                </p>
              </blockquote>
              <p className="font-poppins text-base text-black leading-[1.9] pl-6">
                The words are in my head… but they don't come out.
              </p>
            </div>

            {/* Fear 3 */}
            <div className="space-y-4 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <blockquote className="border-l-4 border-[#cc0a65] pl-6">
                <p className="font-playfair text-xl md:text-2xl text-black leading-[1.4] tracking-wide italic">
                  "I feel like a different person when I speak English."
                </p>
              </blockquote>
              <p className="font-poppins text-base text-black leading-[1.9] pl-6">
                Like I've lost my real voice.
              </p>
            </div>

            {/* Fear 4 */}
            <div className="space-y-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <blockquote className="border-l-4 border-gold pl-6">
                <p className="font-playfair text-xl md:text-2xl text-black leading-[1.4] tracking-wide italic">
                  "I avoid conversations because I don't trust my English."
                </p>
              </blockquote>
              <p className="font-poppins text-base text-black leading-[1.9] pl-6">
                I smile, nod, and shrink — just to get through it.
              </p>
            </div>

            {/* Fear 5 - spans both columns */}
            <div className="md:col-span-2 space-y-4 animate-fade-in" style={{animationDelay: '0.5s'}}>
              <blockquote className="border-l-4 border-[#cc0a65] pl-6 text-center max-w-4xl mx-auto">
                <p className="font-playfair text-2xl md:text-3xl text-black leading-[1.4] tracking-wide italic">
                  "I've studied for years… but I still don't feel fluent."
                </p>
              </blockquote>
              <p className="font-poppins text-base text-black leading-[1.9] text-center font-medium">
                And I'm starting to wonder if I ever will.
              </p>
            </div>

          </div>

          {/* Bottom section */}
          <div className="text-center pt-16 border-t border-black mt-16">
            <p className="font-playfair text-3xl md:text-4xl font-bold text-[#cc0a65] tracking-wide">
              You're not alone in this
            </p>
            <p className="font-poppins text-sm uppercase tracking-[0.2em] text-black mt-4">
              And you don't have to stay stuck
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
