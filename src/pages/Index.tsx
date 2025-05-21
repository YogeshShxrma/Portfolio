
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center relative px-4 gond-pattern">
          <div className="container mx-auto max-w-5xl pt-20">
            <span className="text-folk-orange font-medium mb-4 block">
              Visual Storyteller
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-folk-dark">
              Bringing ideas to life through <span className="text-folk-purple">visual creativity</span> and artistry
            </h1>
            <p className="text-xl text-folk-text mb-8 max-w-2xl">
              I'm Yogesh Sharma, a passionate creative specializing in video editing, photo editing, and graphic design. Transforming concepts into compelling visual stories.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-folk-purple hover:bg-folk-purple-dark">
                <Link to="/portfolio">
                  View My Work
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-folk-purple border-folk-purple hover:bg-folk-purple/10">
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
            
            {/* Gond art decorative element */}
            <div className="absolute right-0 top-1/4 transform translate-x-1/2 opacity-20 hidden lg:block">
              <div className="w-40 h-40 bg-contain bg-no-repeat" style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 0 L120 40 L100 80 L80 120 L100 160 L120 200' stroke='%237C64B5' stroke-width='2' fill='none'/%3E%3Cpath d='M100 0 C140 40, 60 80, 100 120 C140 160, 60 200, 100 240' stroke='%235DA87A' stroke-width='2' fill='none'/%3E%3C/svg%3E\")"
              }}></div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <button
              onClick={scrollToAbout}
              className="text-folk-text hover:text-folk-purple transition-colors flex flex-col items-center"
            >
              <span className="mb-2 text-sm">Learn More</span>
              <ArrowDown size={20} className="animate-bounce" />
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 gond-bg-1 gond-section">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="gond-tree">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-folk-dark">
                  About <span className="text-folk-purple">Me</span>
                </h2>
                <p className="text-folk-text mb-4">
                  I'm a visual creative from Raipur, Chhattisgarh, India with over 5 years of experience in digital media production. My work spans photography, videography, and graphic design – all tied together by a passion for visual storytelling.
                </p>
                <p className="text-folk-text mb-4">
                  With a sharp eye for detail and a deep understanding of visual aesthetics, I craft compelling content that resonates with audiences and brings brands to life.
                </p>
                <p className="text-folk-text">
                  I've collaborated with brands, startups, and creative agencies across India to create compelling visual narratives and engaging media that leave lasting impressions.
                </p>
              </div>
              <div className="gond-border gond-bird">
                <h3 className="text-xl font-bold mb-4 text-folk-dark">Expertise</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 flex items-center">
                      <span className="inline-block w-2 h-2 bg-folk-purple mr-2 rounded-full"></span>
                      Photography & Photo Editing
                    </h4>
                    <div className="w-full bg-folk-cream-dark rounded-full h-2">
                      <div className="bg-folk-purple h-2 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 flex items-center">
                      <span className="inline-block w-2 h-2 bg-folk-blue mr-2 rounded-full"></span>
                      Videography & Video Editing
                    </h4>
                    <div className="w-full bg-folk-cream-dark rounded-full h-2">
                      <div className="bg-folk-blue h-2 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 flex items-center">
                      <span className="inline-block w-2 h-2 bg-folk-orange mr-2 rounded-full"></span>
                      Graphic Design
                    </h4>
                    <div className="w-full bg-folk-cream-dark rounded-full h-2">
                      <div className="bg-folk-orange h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 flex items-center">
                      <span className="inline-block w-2 h-2 bg-folk-green mr-2 rounded-full"></span>
                      Motion Graphics
                    </h4>
                    <div className="w-full bg-folk-cream-dark rounded-full h-2">
                      <div className="bg-folk-green h-2 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work Section */}
        <section className="py-20 px-4 gond-bg-2">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-folk-dark">Featured <span className="text-folk-purple">Work</span></h2>
            <p className="text-folk-text mb-12 max-w-2xl">
              Selected projects from my portfolio demonstrating the range of my visual creativity.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Featured Project 1 */}
              <div className="group relative overflow-hidden rounded-lg portfolio-item gond-card">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Digital Campaign Project"
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-white/70 text-sm">Photography</span>
                  <h3 className="text-white text-xl font-bold">Urban Perspectives</h3>
                </div>
                
                {/* Gond art inspired decorative element */}
                <div className="absolute top-2 right-2 w-12 h-12 gond-pattern-2 opacity-30"></div>
              </div>
              
              {/* Featured Project 2 */}
              <div className="group relative overflow-hidden rounded-lg portfolio-item gond-card">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Brand Campaign"
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-white/70 text-sm">Video</span>
                  <h3 className="text-white text-xl font-bold">Product Launch</h3>
                </div>
                
                {/* Gond art inspired decorative element */}
                <div className="absolute bottom-2 left-2 w-12 h-12 gond-pattern-1 opacity-30"></div>
              </div>
              
              {/* Featured Project 3 */}
              <div className="group relative overflow-hidden rounded-lg portfolio-item gond-card">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                  alt="UI Design Project"
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-white/70 text-sm">Graphics</span>
                  <h3 className="text-white text-xl font-bold">Brand Identity</h3>
                </div>
                
                {/* Gond art inspired decorative element */}
                <div className="absolute top-2 left-2 w-12 h-12 gond-pattern-3 opacity-30"></div>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <Button asChild size="lg" className="bg-folk-purple hover:bg-folk-purple-dark">
                <Link to="/portfolio">
                  View All Projects
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
