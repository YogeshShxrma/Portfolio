
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
        <section className="min-h-screen flex flex-col justify-center relative px-4">
          <div className="container mx-auto max-w-5xl pt-20">
            <span className="text-gray-500 font-medium mb-4 block">
              Creative Technologist
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Crafting digital experiences at the intersection of design and technology
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              I'm Yogesh Sharma, bringing ideas to life through code, pixels, and creativity. Specializing in photos, videos, and graphic design.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/portfolio">
                  View My Work
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <button
              onClick={scrollToAbout}
              className="text-gray-500 hover:text-gray-800 transition-colors flex flex-col items-center"
            >
              <span className="mb-2 text-sm">Learn More</span>
              <ArrowDown size={20} className="animate-bounce" />
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  About Me
                </h2>
                <p className="text-gray-600 mb-4">
                  I'm a creative technologist from Raipur, Chhattisgarh, India with over 5 years of experience in digital media production. My work spans photography, videography, and graphic design – all tied together by a passion for visual storytelling.
                </p>
                <p className="text-gray-600 mb-4">
                  With a background in both design and development, I bring a unique perspective to projects that bridges the gap between aesthetics and functionality.
                </p>
                <p className="text-gray-600">
                  I've collaborated with brands, startups, and creative agencies across India to create compelling visual narratives and interactive experiences that engage audiences and drive results.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Expertise</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Photography</h4>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-black h-2 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Videography</h4>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-black h-2 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Graphic Design</h4>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-black h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Web Development</h4>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-black h-2 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Work</h2>
            <p className="text-gray-600 mb-12 max-w-2xl">
              Selected projects from my portfolio demonstrating the range of my capabilities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Featured Project 1 */}
              <div className="group relative overflow-hidden rounded-lg portfolio-item">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Digital Campaign Project"
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-white/70 text-sm">Photography</span>
                  <h3 className="text-white text-xl font-bold">Urban Perspectives</h3>
                </div>
              </div>
              
              {/* Featured Project 2 */}
              <div className="group relative overflow-hidden rounded-lg portfolio-item">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Brand Campaign"
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-white/70 text-sm">Video</span>
                  <h3 className="text-white text-xl font-bold">Product Launch</h3>
                </div>
              </div>
              
              {/* Featured Project 3 */}
              <div className="group relative overflow-hidden rounded-lg portfolio-item">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                  alt="UI Design Project"
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-white/70 text-sm">Graphics</span>
                  <h3 className="text-white text-xl font-bold">Brand Identity</h3>
                </div>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <Button asChild size="lg">
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
