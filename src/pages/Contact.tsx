
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";
import { Linkedin, Phone, MapPin, Camera, Film, Palette, Instagram, Mail, Copy, ExternalLink } from "lucide-react";
import { GondTree, GondPeacock, GondHut, GondDottedPattern } from "@/components/GondArtElements";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { theme } = useTheme();
  const { toast } = useToast();

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied!",
        description: `${type} copied to clipboard`,
      });
    } catch (err) {
      console.error('Failed to copy: ', err);
      toast({
        title: "Copy failed",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  const openMap = () => {
    const address = "Abhnpur, Raipur, Chhattisgarh, India";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen gond-bg">
        <div className="container mx-auto px-4 relative">
          <GondDottedPattern />
          
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 gond-text">Get in Touch</h1>
              <p className="gond-text-light text-lg max-w-2xl mx-auto">
                Looking for professional photo editing, video production, or graphic design services inspired by traditional art? 
                I'd love to hear from you. Feel free to reach out through any of my contact channels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
              <div className={`
                md:col-span-3 flex items-center justify-center p-8 rounded-lg relative overflow-hidden
                gond-section
              `}>
                {/* Decorative Gond elements */}
                <div className="absolute top-4 left-4 opacity-20">
                  <GondTree className="w-16 h-24" />
                </div>
                <div className="absolute bottom-4 right-4 opacity-20">
                  <GondPeacock className="w-20 h-12" />
                </div>
                
                <div className="text-center space-y-4 relative z-10">
                  <h2 className="text-2xl font-bold gond-text">Yogesh Sharma</h2>
                  <p className="gond-text-light">
                    Visual Media Specialist based in Raipur, Chhattisgarh, India
                    <br />
                    <span className="text-sm italic">Inspired by traditional Gond tribal artistry</span>
                  </p>
                  
                  <div className="flex justify-center space-x-6 pt-4">
                    {[
                      { icon: Camera, label: "Photo Editing", color: "purple" },
                      { icon: Film, label: "Video Editing", color: "blue" },
                      { icon: Palette, label: "Graphic Design", color: "orange" }
                    ].map((service, index) => (
                      <div key={index} className="flex flex-col items-center group">
                        <div className={`
                          p-3 rounded-full mb-2 transition-all duration-300
                          ${theme === 'light' 
                            ? `bg-gond-light-${service.color} text-white` 
                            : `bg-gond-dark-${service.color} text-white`
                          }
                          ${theme === 'dark' ? 'group-hover:animate-glow-slow' : 'group-hover:shadow-lg'}
                        `}>
                          <service.icon size={24} />
                        </div>
                        <span className="text-sm gond-text-light group-hover:gond-text transition-colors duration-300">
                          {service.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 space-y-10">
                <div className="gond-card p-6 relative">
                  {/* Decorative Gond hut */}
                  <div className="absolute -top-3 -right-3 opacity-30">
                    <GondHut className="w-12 h-9" />
                  </div>
                  
                  <h2 className="text-xl font-bold mb-4 gond-text">Contact Information</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start group">
                      <div className={`
                        mr-3 flex-shrink-0 mt-1 p-1 rounded transition-colors duration-300
                        ${theme === 'light' 
                          ? 'text-gond-light-green' 
                          : 'text-gond-dark-green'
                        }
                      `}>
                        <Phone size={18} />
                      </div>
                      <div className="flex-1">
                        <button
                          onClick={() => copyToClipboard("+91 8827087768", "Phone number")}
                          className="gond-text-light group-hover:gond-text transition-colors duration-300 flex items-center gap-2 hover:underline"
                        >
                          +91 8827087768
                          <Copy size={14} className="opacity-50 group-hover:opacity-100" />
                        </button>
                      </div>
                    </li>
                    
                    <li className="flex items-start group">
                      <div className={`
                        mr-3 flex-shrink-0 mt-1 p-1 rounded transition-colors duration-300
                        ${theme === 'light' 
                          ? 'text-gond-light-blue' 
                          : 'text-gond-dark-blue'
                        }
                      `}>
                        <Mail size={18} />
                      </div>
                      <div className="flex-1">
                        <button
                          onClick={() => copyToClipboard("yogesh@gmail.com", "Email address")}
                          className="gond-text-light group-hover:gond-text transition-colors duration-300 flex items-center gap-2 hover:underline"
                        >
                          yogesh@gmail.com
                          <Copy size={14} className="opacity-50 group-hover:opacity-100" />
                        </button>
                      </div>
                    </li>
                    
                    <li className="flex items-start group">
                      <div className={`
                        mr-3 flex-shrink-0 mt-1 p-1 rounded transition-colors duration-300
                        ${theme === 'light' 
                          ? 'text-gond-light-orange' 
                          : 'text-gond-dark-orange'
                        }
                      `}>
                        <MapPin size={18} />
                      </div>
                      <div className="flex-1">
                        <button
                          onClick={openMap}
                          className="gond-text-light group-hover:gond-text transition-colors duration-300 flex items-center gap-2 hover:underline text-left"
                        >
                          Abhnpur, Raipur, Chhattisgarh
                          <br />
                          India
                          <ExternalLink size={14} className="opacity-50 group-hover:opacity-100" />
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="gond-card p-6">
                  <h2 className="text-xl font-bold mb-4 gond-text">Connect With Me</h2>
                  <div className="flex space-x-4">
                    {[
                      { 
                        icon: Linkedin, 
                        href: "https://www.linkedin.com/in/yogesh-sharma-933205317/", 
                        label: "LinkedIn",
                        color: "blue"
                      },
                      { 
                        icon: Instagram, 
                        href: "https://www.instagram.com/_.yogeshsharma._/", 
                        label: "Instagram",
                        color: "purple"
                      }
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                          p-3 rounded-full transition-all duration-300 group
                          ${theme === 'light' 
                            ? `bg-gond-light-cream hover:bg-gond-light-${social.color} text-gond-light-${social.color} hover:text-white` 
                            : `bg-gond-dark-cream hover:bg-gond-dark-${social.color} text-gond-dark-${social.color} hover:text-white`
                          }
                          ${theme === 'dark' ? 'hover:animate-glow-slow' : 'hover:shadow-lg'}
                        `}
                        aria-label={social.label}
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="gond-card p-6">
                  <h2 className="text-xl font-bold mb-4 gond-text">Availability</h2>
                  <p className="gond-text-light">
                    Currently available for freelance visual media projects and creative collaborations across India. 
                    Specializing in projects that blend modern digital techniques with traditional artistic inspiration.
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
