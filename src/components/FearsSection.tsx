
const FearsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/851cf4ff-409d-45fd-b805-6f3fd3b22347.png" 
          alt="City skyline at sunset" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#cc0a65]/30 via-pink-400/20 to-orange-300/25"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Subtle sparkle effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold rounded-full animate-twinkle"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-[#cc0a65] rounded-full animate-sparkle"></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-pink-300 rounded-full animate-sparkle"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Glamorous headline */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-wide mb-6">
            You're not alone. 
            <br />
            <span className="text-[#cc0a65] italic">These are the moments we're here to rewrite.</span>
          </h2>
          {/* Elegant divider */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </div>

        {/* Fears in elegant card layout */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Fear 1 */}
            <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-lg p-8 hover:bg-white/15 transition-all duration-300">
              <p className="font-poppins text-white leading-[1.8]">
                <span className="font-semibold text-lg">"I understand everything — but freeze when it's my turn to speak."</span>
                <br />
                <span className="text-pink-200 italic">I worry I'll get it wrong, and everyone will notice.</span>
              </p>
            </div>

            {/* Fear 2 */}
            <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-lg p-8 hover:bg-white/15 transition-all duration-300 md:mt-12">
              <p className="font-poppins text-white leading-[1.8]">
                <span className="font-semibold text-lg">"I stay quiet, even when I know exactly what I want to say."</span>
                <br />
                <span className="text-pink-200 italic">The words are in my head. But they don't come out.</span>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Fear 3 */}
            <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-lg p-8 hover:bg-white/15 transition-all duration-300">
              <p className="font-poppins text-white leading-[1.8]">
                <span className="font-semibold text-lg">"I feel like a different version of myself when I speak English."</span>
                <br />
                <span className="text-pink-200 italic">Like I can't fully show up the way I want to.</span>
              </p>
            </div>

            {/* Fear 4 */}
            <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-lg p-8 hover:bg-white/15 transition-all duration-300 md:mt-12">
              <p className="font-poppins text-white leading-[1.8]">
                <span className="font-semibold text-lg">"I avoid conversations because I'm unsure how I'll sound."</span>
                <br />
                <span className="text-pink-200 italic">So I smile, nod, and keep it short, even when I have more to say.</span>
              </p>
            </div>
          </div>

          {/* Final fear - centered */}
          <div className="flex justify-center">
            <div className="backdrop-blur-sm bg-white/10 border border-gold/30 rounded-lg p-8 hover:bg-white/15 transition-all duration-300 max-w-2xl">
              <p className="font-poppins text-white leading-[1.8] text-center">
                <span className="font-semibold text-lg">"I've studied for years… but I still don't feel fluent."</span>
                <br />
                <span className="text-pink-200 italic">And I wonder what I'm missing.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FearsSection;
