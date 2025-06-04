
import { Instagram, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/86a23508-a906-474a-a3a7-9f2b4eb948f3.png" 
              alt="LinguaGlee Logo" 
              className="h-12 w-auto filter brightness-0 invert"
            />
          </div>
          
          <div className="text-center md:text-right space-y-4">
            <p className="font-montserrat text-gray-300">
              © 2025 LinguaGlee
            </p>
            
            <div className="flex justify-center md:justify-end space-x-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-linguaglee-pink hover:text-linguaglee-pink/80 transition-colors duration-300"
              >
                <Instagram size={24} />
              </a>
              
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-linguaglee-pink hover:text-linguaglee-pink/80 transition-colors duration-300"
              >
                <MessageCircle size={24} />
              </a>
              
              <a 
                href="mailto:hello@linguagleela.com"
                className="text-linguaglee-pink hover:text-linguaglee-pink/80 transition-colors duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
            
            <p className="font-montserrat text-sm text-gray-400">
              hello@linguagleela.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
