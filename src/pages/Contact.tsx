
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactInfo from "@/components/ContactInfo";
import { Linkedin, Phone, MapPin } from "lucide-react";

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
                I'd love to hear from you. Feel free to reach out through any of my channels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
              <div className="md:col-span-3 flex items-center justify-center p-8 bg-gray-50 rounded-lg">
                <div className="text-center space-y-4">
                  <h2 className="text-2xl font-bold">Yogesh Sharma</h2>
                  <p className="text-gray-600">
                    Creative Technologist based in Raipur, Chhattisgarh, India
                  </p>
                  <p className="text-gray-600">
                    Looking forward to working together on your next project.
                  </p>
                </div>
              </div>

              <div className="md:col-span-2 space-y-10">
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
