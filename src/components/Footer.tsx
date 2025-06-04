
import { Instagram, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 border-t border-pink-400/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <img 
              src="/lovable-uploads/86a23508-a906-474a-a3a7-9f2b4eb948f3.png" 
              alt="LinguaGlee Logo" 
              className="h-16 w-auto filter brightness-0 invert"
            />
          </div>
          
          <div className="text-center md:text-right space-y-6">
            <p className="font-playfair text-white text-lg">
              © 2025 LinguaGlee
            </p>
            
            <div className="flex justify-center md:justify-end space-x-8">
              <a 
                href="https://instagram.com/linguagleela" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition-colors duration-300 transform hover:scale-110"
              >
                <Instagram size={32} />
              </a>
              
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors duration-300 transform hover:scale-110"
              >
                <MessageCircle size={32} />
              </a>
              
              <a 
                href="mailto:hello@linguagleela.com"
                className="text-pink-400 hover:text-pink-300 transition-colors duration-300 transform hover:scale-110"
              >
                <Mail size={32} />
              </a>
            </div>
            
            <p className="font-playfair text-lg text-pink-200">
              hello@linguagleela.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
