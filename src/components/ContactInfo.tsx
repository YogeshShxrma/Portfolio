
import { Linkedin, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold mb-4">Contact Information</h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <Phone className="mr-3 text-gray-600 flex-shrink-0 mt-1" size={18} />
            <span>+91 9876543210</span>
          </li>
          <li className="flex items-start">
            <MapPin className="mr-3 text-gray-600 flex-shrink-0 mt-1" size={18} />
            <span>Raipur, Chhattisgarh<br />India</span>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Connect With Me</h2>
        <div className="flex">
          <a 
            href="https://www.linkedin.com/in/yogesh-sharma-933205317/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
