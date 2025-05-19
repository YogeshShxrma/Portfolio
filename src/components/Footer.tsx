
import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-spaceGrotesk font-medium mb-4">
              Yogesh<span className="text-gray-400"> Sharma</span>
            </h3>
            <p className="text-gray-600 mb-4">
              A visual storyteller specializing in video editing, photo editing, and graphic design.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/yogesh-sharma-933205317/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-800 transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-black transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-600 hover:text-black transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-black transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <p className="text-gray-600 mb-1">+91 9876543210</p>
            <p className="text-gray-600">Raipur, Chhattisgarh, India</p>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-6">
          <p className="text-gray-500 text-sm text-center">
            © {currentYear} Yogesh Sharma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
