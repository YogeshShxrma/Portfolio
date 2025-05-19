
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone, Github, Instagram, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? 
                I'd love to hear from you. Fill out the form below or reach out through any of my channels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
              <div className="md:col-span-3">
                <ContactForm />
              </div>

              <div className="md:col-span-2 space-y-10">
                <div>
                  <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Mail className="mr-3 text-gray-600 flex-shrink-0 mt-1" size={18} />
                      <span>hello@creative.tech</span>
                    </li>
                    <li className="flex items-start">
                      <Phone className="mr-3 text-gray-600 flex-shrink-0 mt-1" size={18} />
                      <span>+1 (555) 123-4567</span>
                    </li>
                    <li className="flex items-start">
                      <MapPin className="mr-3 text-gray-600 flex-shrink-0 mt-1" size={18} />
                      <span>New York, NY<br />United States</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4">Follow Me</h2>
                  <div className="flex space-x-4">
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter size={20} />
                    </a>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-bold mb-4">Availability</h2>
                  <p className="text-gray-600">
                    Currently available for freelance work and creative collaborations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
