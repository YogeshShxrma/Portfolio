import { Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
const Footer = () => {
  const {
    theme
  } = useTheme();
  const currentYear = new Date().getFullYear();
  return <footer className={`
      relative transition-all duration-500 border-t-2
      ${theme === 'light' ? 'bg-gond-light-cream text-gond-light-text border-gond-light-brown' : 'bg-gond-dark-cream text-gond-dark-text border-gond-dark-brown'}
    `}>
      {/* Gond art decorative pattern - top border */}
      <div className={`
        absolute top-0 left-0 right-0 h-2 transition-all duration-500
        ${theme === 'light' ? 'bg-gond-light-purple' : 'bg-gond-dark-purple'}
      `}></div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className={`
              text-xl font-montserrat font-medium mb-4 border-b-2 inline-block pb-1 transition-colors duration-500
              ${theme === 'light' ? 'text-gond-light-text border-gond-light-orange' : 'text-gond-dark-text border-gond-dark-orange'}
            `}>
              Illuminated<span className={`
                transition-colors duration-500
                ${theme === 'light' ? 'text-gond-light-purple' : 'text-gond-dark-purple'}
              `}>Pixels</span>
            </h3>
            <p className={`
              mb-4 transition-colors duration-500
              ${theme === 'light' ? 'text-gond-light-textLight' : 'text-gond-dark-textLight'}
            `}>
              A visual storyteller specializing in video editing, photo editing, and graphic design.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/yogesh-sharma-933205317/" target="_blank" rel="noopener noreferrer" className={`
                  p-2 rounded-full transition-all duration-300
                  ${theme === 'light' ? 'text-gond-light-textLight bg-gond-light-bg hover:text-gond-light-purple hover:bg-gond-light-cream' : 'text-gond-dark-textLight bg-gond-dark-bg hover:text-gond-dark-purple hover:bg-gond-dark-cream'}
                `}>
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://www.instagram.com/_.yogeshsharma._/" target="_blank" rel="noopener noreferrer" className={`
                  p-2 rounded-full transition-all duration-300
                  ${theme === 'light' ? 'text-gond-light-textLight bg-gond-light-bg hover:text-gond-light-purple hover:bg-gond-light-cream' : 'text-gond-dark-textLight bg-gond-dark-bg hover:text-gond-dark-purple hover:bg-gond-dark-cream'}
                `}>
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className={`
              text-lg font-medium mb-4 border-b-2 inline-block pb-1 transition-colors duration-500
              ${theme === 'light' ? 'text-gond-light-text border-gond-light-blue' : 'text-gond-dark-text border-gond-dark-blue'}
            `}>Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className={`
                  flex items-center transition-colors duration-300
                  ${theme === 'light' ? 'text-gond-light-textLight hover:text-gond-light-purple' : 'text-gond-dark-textLight hover:text-gond-dark-purple'}
                `}>
                  <span className={`
                    inline-block w-2 h-2 mr-2 rounded-full transition-colors duration-500
                    ${theme === 'light' ? 'bg-gond-light-orange' : 'bg-gond-dark-orange'}
                  `}></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className={`
                  flex items-center transition-colors duration-300
                  ${theme === 'light' ? 'text-gond-light-textLight hover:text-gond-light-purple' : 'text-gond-dark-textLight hover:text-gond-dark-purple'}
                `}>
                  <span className={`
                    inline-block w-2 h-2 mr-2 rounded-full transition-colors duration-500
                    ${theme === 'light' ? 'bg-gond-light-orange' : 'bg-gond-dark-orange'}
                  `}></span>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`
                  flex items-center transition-colors duration-300
                  ${theme === 'light' ? 'text-gond-light-textLight hover:text-gond-light-purple' : 'text-gond-dark-textLight hover:text-gond-dark-purple'}
                `}>
                  <span className={`
                    inline-block w-2 h-2 mr-2 rounded-full transition-colors duration-500
                    ${theme === 'light' ? 'bg-gond-light-orange' : 'bg-gond-dark-orange'}
                  `}></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className={`
              text-lg font-medium mb-4 border-b-2 inline-block pb-1 transition-colors duration-500
              ${theme === 'light' ? 'text-gond-light-text border-gond-light-green' : 'text-gond-dark-text border-gond-dark-green'}
            `}>Contact</h3>
            <p className={`
              mb-1 flex items-center transition-colors duration-500
              ${theme === 'light' ? 'text-gond-light-textLight' : 'text-gond-dark-textLight'}
            `}>
              <span className={`
                inline-block w-2 h-2 mr-2 rounded-full transition-colors duration-500
                ${theme === 'light' ? 'bg-gond-light-green' : 'bg-gond-dark-green'}
              `}></span>
              +91 8827087768
            </p>
            <p className={`
              flex items-center transition-colors duration-500
              ${theme === 'light' ? 'text-gond-light-textLight' : 'text-gond-dark-textLight'}
            `}>
              <span className={`
                inline-block w-2 h-2 mr-2 rounded-full transition-colors duration-500
                ${theme === 'light' ? 'bg-gond-light-green' : 'bg-gond-dark-green'}
              `}></span>
              Raipur, Chhattisgarh, India
            </p>
          </div>
        </div>
        
        <div className={`
          border-t mt-12 pt-6 transition-colors duration-500
          ${theme === 'light' ? 'border-gond-light-brown' : 'border-gond-dark-brown'}
        `}>
          <p className={`
            text-sm text-center transition-colors duration-500
            ${theme === 'light' ? 'text-gond-light-textLight' : 'text-gond-dark-textLight'}
          `}>
            © {currentYear} Yogesh Sharma. All rights reserved.
          </p>
          <div className="flex justify-center mt-2">
            <span className={`
              text-xs transition-colors duration-500
              ${theme === 'light' ? 'text-gond-light-textLight' : 'text-gond-dark-textLight'}
            `}>Website developed by Yogesh Sharma</span>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;