import { Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gradient-to-r from-illuminated-800 to-illuminated-900 text-white border-t border-illuminated-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-montserrat font-medium mb-4 text-zinc-50">
              Illuminated<span className="text-illuminated-300">Pixels</span>
            </h3>
            <p className="text-gray-300 mb-4">
              A visual storyteller specializing in video editing, photo editing, and graphic design.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/yogesh-sharma-933205317/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-illuminated-300 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://www.instagram.com/_.yogeshsharma._/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-illuminated-300 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-amber-100">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-illuminated-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-illuminated-300 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-illuminated-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-amber-100">Contact</h3>
            <p className="text-gray-300 mb-1">+91 8827087768</p>
            <p className="text-gray-300">Raipur, Chhattisgarh, India</p>
          </div>
        </div>
        
        <div className="border-t border-illuminated-700 mt-12 pt-6">
          <p className="text-gray-400 text-sm text-center">
            © {currentYear} Yogesh Sharma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;