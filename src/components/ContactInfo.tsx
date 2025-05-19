
import { Linkedin, Phone, MapPin, Camera, Film, Palette, Instagram } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold mb-4">Contact Information</h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <Phone className="mr-3 text-gray-600 flex-shrink-0 mt-1" size={18} />
            <span>+91 8827087768</span>
          </li>
          <li className="flex items-start">
            <MapPin className="mr-3 text-gray-600 flex-shrink-0 mt-1" size={18} />
            <span>Raipur, Chhattisgarh<br />India</span>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Connect With Me</h2>
        <div className="flex space-x-4">
          <a 
            href="https://www.linkedin.com/in/yogesh-sharma-933205317/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://www.instagram.com/_.yogeshsharma._/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Services</h2>
        <ul className="space-y-3">
          <li className="flex items-center">
            <Camera className="mr-3 text-gray-600" size={18} />
            <span>Professional Photo Editing</span>
          </li>
          <li className="flex items-center">
            <Film className="mr-3 text-gray-600" size={18} />
            <span>Video Production & Editing</span>
          </li>
          <li className="flex items-center">
            <Palette className="mr-3 text-gray-600" size={18} />
            <span>Creative Graphic Design</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
