
const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-purple-900/50 to-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Glamorous rooftop evening" 
              className="rounded-none shadow-2xl w-full h-96 object-cover border border-pink-400/30"
            />
          </div>
          
          <div className="order-1 md:order-2 space-y-8">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold text-white leading-tight">
              This isn't just English class.<br />
              <span className="bg-gradient-to-r from-pink-400 to-purple-300 bg-clip-text text-transparent">
                It's a lifestyle glow-up.
              </span>
            </h2>
            
            <p className="font-playfair text-2xl text-pink-200 leading-relaxed italic">
              8 unforgettable evenings.<br />
              Champagne energy.<br />
              English you'll actually use.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-pink-400 pl-6 bg-black/30 backdrop-blur-sm p-6">
                <p className="font-playfair text-white font-medium text-lg">Rooftop English salon under the stars</p>
              </div>
              
              <div className="border-l-4 border-purple-400 pl-6 bg-black/30 backdrop-blur-sm p-6">
                <p className="font-playfair text-white font-medium text-lg">Custom glam workbook</p>
              </div>
              
              <div className="border-l-4 border-pink-400 pl-6 bg-black/30 backdrop-blur-sm p-6">
                <p className="font-playfair text-white font-medium text-lg">Max 4 women = real connection</p>
              </div>
              
              <div className="border-l-4 border-purple-400 pl-6 bg-black/30 backdrop-blur-sm p-6">
                <p className="font-playfair text-white font-medium text-lg">Final rooftop toast & showcase</p>
              </div>
              
              <div className="border-l-4 border-pink-400 pl-6 bg-black/30 backdrop-blur-sm p-6">
                <p className="font-playfair text-white font-medium text-lg">Certificate you'll actually be proud to post</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
