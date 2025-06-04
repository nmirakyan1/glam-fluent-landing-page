
const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Elegant rooftop setting with notebook and coffee" 
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900">
              This isn't your typical English class.
            </h2>
            
            <p className="font-montserrat text-lg text-gray-700 leading-relaxed">
              This is a transformation for women who want to sound confident, live boldly, 
              and connect through language & lifestyle.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-2xl">🌇</span>
                <p className="font-montserrat text-gray-700">8 rooftop sessions in Glendale, CA</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-2xl">📚</span>
                <p className="font-montserrat text-gray-700">Beautiful digital workbook & lifestyle zine project</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-2xl">👯‍♀️</span>
                <p className="font-montserrat text-gray-700">Small group: only 4 women per group</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-2xl">🥂</span>
                <p className="font-montserrat text-gray-700">Mocktails, music, and confidence coaching</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-2xl">🎓</span>
                <p className="font-montserrat text-gray-700">Certificate of completion + group support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
