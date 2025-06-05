
const WhatYouGet = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-champagne-50">
      
      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        
        {/* Main headline with elegant animation */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slate-800 leading-tight tracking-wide animate-fade-in">
            This Isn't Just an English Course.
          </h2>
          <h3 className="font-playfair text-2xl md:text-3xl font-light italic text-purple-900 leading-tight animate-fade-in animation-delay-300">
            It's the Hour That Changes Everything.
          </h3>
          
          {/* Gold divider */}
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto animate-fade-in animation-delay-500"></div>
        </div>

        {/* Compact glamorous sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* The Rooftop Experience */}
          <div className="text-center p-6 bg-white/40 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in animation-delay-700 hover:transform hover:scale-105">
            <h3 className="font-playfair text-2xl font-bold text-purple-900 mb-3 hover:text-shadow-glow transition-all duration-300">
              The Rooftop Experience
            </h3>
            <p className="font-sans text-slate-700 leading-relaxed">
              Eight curated sessions designed for transformation — not memorization. Held on the rooftop, with views that open you up from the inside out.
            </p>
          </div>

          {/* The Fluent & Fabulous Guidebook */}
          <div className="text-center p-6 bg-white/40 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in animation-delay-900 hover:transform hover:scale-105">
            <h3 className="font-playfair text-2xl font-bold text-purple-900 mb-3 hover:text-shadow-glow transition-all duration-300">
              The Fluent & Fabulous Guidebook
            </h3>
            <p className="font-sans text-slate-700 leading-relaxed">
              Your style-forward, confidence-building companion. Full of voice-finding prompts and space to become the speaker you've always wanted to be.
            </p>
          </div>

          {/* Real Speaking Practice */}
          <div className="text-center p-6 bg-white/40 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in animation-delay-1100 hover:transform hover:scale-105">
            <h3 className="font-playfair text-2xl font-bold text-purple-900 mb-3 hover:text-shadow-glow transition-all duration-300">
              Real Speaking Practice
            </h3>
            <p className="font-sans text-slate-700 leading-relaxed">
              You won't just study English. You'll use it in conversations that matter, in stories that reflect who you are.
            </p>
          </div>

          {/* Your Inner Circle */}
          <div className="text-center p-6 bg-white/40 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in animation-delay-1300 hover:transform hover:scale-105">
            <h3 className="font-playfair text-2xl font-bold text-purple-900 mb-3 hover:text-shadow-glow transition-all duration-300">
              Your Inner Circle
            </h3>
            <p className="font-sans text-slate-700 leading-relaxed">
              A small, intimate group of women here to grow, speak, and show up fully. You'll be seen, supported, and celebrated.
            </p>
          </div>

        </div>

        {/* Final call to action */}
        <div className="text-center pt-8 border-t border-gold/30 animate-fade-in animation-delay-1500">
          <p className="font-playfair text-2xl md:text-3xl font-bold text-slate-800 leading-tight mb-2 hover:text-shadow-glow transition-all duration-300">
            This is how it starts. This is where you begin.
          </p>
          <p className="font-playfair text-xl md:text-2xl font-light italic text-purple-900 leading-tight hover:text-shadow-glow transition-all duration-300">
            Claim your seat. Let your voice take up space.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhatYouGet;
