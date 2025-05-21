
import { Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-folk-cream text-folk-dark border-t-2 border-folk-border relative">
      {/* Gond art decorative pattern - top border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-folk-purple-light"></div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-montserrat font-medium mb-4 text-folk-dark border-b-2 border-folk-orange inline-block pb-1">
              Illuminated<span className="text-folk-purple">Pixels</span>
            </h3>
            <p className="text-folk-text mb-4">
              A visual storyteller specializing in video editing, photo editing, and graphic design.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/yogesh-sharma-933205317/" target="_blank" rel="noopener noreferrer" className="text-folk-text hover:text-folk-purple transition-colors p-2 bg-folk-cream-dark rounded-full">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://www.instagram.com/_.yogeshsharma._/" target="_blank" rel="noopener noreferrer" className="text-folk-text hover:text-folk-purple transition-colors p-2 bg-folk-cream-dark rounded-full">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-folk-dark border-b-2 border-folk-blue inline-block pb-1">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-folk-text hover:text-folk-purple transition-colors flex items-center">
                  <span className="inline-block w-2 h-2 bg-folk-orange mr-2 rounded-full"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-folk-text hover:text-folk-purple transition-colors flex items-center">
                  <span className="inline-block w-2 h-2 bg-folk-orange mr-2 rounded-full"></span>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-folk-text hover:text-folk-purple transition-colors flex items-center">
                  <span className="inline-block w-2 h-2 bg-folk-orange mr-2 rounded-full"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-folk-dark border-b-2 border-folk-green inline-block pb-1">Contact</h3>
            <p className="text-folk-text mb-1 flex items-center">
              <span className="inline-block w-2 h-2 bg-folk-green mr-2 rounded-full"></span>
              +91 8827087768
            </p>
            <p className="text-folk-text flex items-center">
              <span className="inline-block w-2 h-2 bg-folk-green mr-2 rounded-full"></span>
              Raipur, Chhattisgarh, India
            </p>
          </div>
        </div>
        
        <div className="border-t border-folk-border mt-12 pt-6">
          <p className="text-folk-text-light text-sm text-center">
            © {currentYear} Yogesh Sharma. All rights reserved.
          </p>
          <div className="flex justify-center mt-2">
            <span className="text-xs text-folk-text-light">Inspired by Gond Art</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
