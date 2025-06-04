
const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-linguaglee-lavender/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Glamorous evening atmosphere with sparkles" 
              className="rounded-2xl shadow-2xl w-full h-96 object-cover border-4 border-white/50"
            />
          </div>
          
          <div className="order-1 md:order-2 space-y-8">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              This Isn't Just English Class.<br />
              <span className="text-linguaglee-pink">It's a Lifestyle Glow-Up.</span>
            </h2>
            
            <p className="font-montserrat text-xl text-gray-700 leading-relaxed italic">
              8 unforgettable evenings.<br />
              Champagne energy.<br />
              English you'll actually use.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 bg-white/70 p-4 rounded-xl shadow-md">
                <span className="text-3xl">🥂</span>
                <p className="font-montserrat text-gray-800 font-medium">Rooftop English salon (not boring sessions!)</p>
              </div>
              
              <div className="flex items-center space-x-4 bg-white/70 p-4 rounded-xl shadow-md">
                <span className="text-3xl">📔</span>
                <p className="font-montserrat text-gray-800 font-medium">Custom glam workbook + zine project</p>
              </div>
              
              <div className="flex items-center space-x-4 bg-white/70 p-4 rounded-xl shadow-md">
                <span className="text-3xl">👠</span>
                <p className="font-montserrat text-gray-800 font-medium">Max 4 women per group = real connection</p>
              </div>
              
              <div className="flex items-center space-x-4 bg-white/70 p-4 rounded-xl shadow-md">
                <span className="text-3xl">💌</span>
                <p className="font-montserrat text-gray-800 font-medium">Final champagne speech night</p>
              </div>
              
              <div className="flex items-center space-x-4 bg-white/70 p-4 rounded-xl shadow-md">
                <span className="text-3xl">🎓</span>
                <p className="font-montserrat text-gray-800 font-medium">Chic certificate of completion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
