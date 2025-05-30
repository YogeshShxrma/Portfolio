
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { useState, useEffect } from "react";
import { ProjectData, ProjectService } from "@/services/ProjectService";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { GondTree, GondPeacock, GondHut, GondPots, GondDottedPattern } from "@/components/GondArtElements";

const Index = () => {
  const { theme } = useTheme();
  const [featuredProjects, setFeaturedProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    fetchFeaturedProjects();
  }, []);

  const fetchFeaturedProjects = async () => {
    try {
      const allProjects = await ProjectService.getProjects();
      // For now, we'll use the first 3 projects as featured
      // In a real implementation, this would be stored in the database
      setFeaturedProjects(allProjects.slice(0, 3));
    } catch (error) {
      console.error("Error fetching featured projects:", error);
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <Navbar />
      <main className="gond-bg">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center relative px-4 overflow-hidden">
          <GondDottedPattern />
          
          <div className="container mx-auto max-w-5xl pt-20 relative z-10">
            <span className={`
              font-medium mb-4 block transition-colors duration-500
              ${theme === 'light' ? 'text-gond-light-orange' : 'text-gond-dark-orange'}
            `}>
              Visual Storyteller
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight gond-text">
              Bringing ideas to life through{" "}
              <span className={`
                transition-colors duration-500
                ${theme === 'light' ? 'text-gond-light-purple' : 'text-gond-dark-purple'}
              `}>
                visual creativity
              </span>{" "}
              and artistry
            </h1>
            
            <p className="text-xl gond-text-light mb-8 max-w-2xl">
              I'm Yogesh Sharma, a passionate creative specializing in video editing, photo editing, and graphic design. 
              Transforming concepts into compelling visual stories inspired by traditional Gond art.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gond-button">
                <Link to="/portfolio">
                  View My Work
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className={`
                  transition-all duration-300 border-2
                  ${theme === 'light' 
                    ? 'text-gond-light-orange border-gond-light-orange hover:bg-gond-light-orange hover:text-white' 
                    : 'text-gond-dark-orange border-gond-dark-orange hover:bg-gond-dark-orange hover:text-gond-dark-bg'
                  }
                `}
              >
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>

          {/* Gond art decorative elements */}
          <div className="absolute right-0 top-1/4 transform translate-x-1/4 opacity-30 hidden lg:block">
            <GondTree className="w-48 h-72" />
          </div>
          
          <div className="absolute left-0 bottom-20 transform -translate-x-1/4 opacity-40 hidden lg:block">
            <GondPeacock className="w-64 h-40" />
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
            <button 
              onClick={scrollToAbout} 
              className={`
                gond-text-light hover:gond-text transition-all duration-300 flex flex-col items-center group
              `}
            >
              <span className="mb-2 text-sm">Learn More</span>
              <ArrowDown size={20} className="animate-bounce group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 gond-section gond-border-decorative">
          <div className="container mx-auto max-w-5xl relative">
            <GondDottedPattern />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
              <div className="relative">
                {/* Decorative Gond hut */}
                <div className="absolute -top-10 -left-10 opacity-20">
                  <GondHut className="w-24 h-18" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 gond-text">
                  About{" "}
                  <span className={`
                    transition-colors duration-500
                    ${theme === 'light' ? 'text-gond-light-purple' : 'text-gond-dark-purple'}
                  `}>
                    Me
                  </span>
                </h2>
                
                <p className="gond-text-light mb-4">
                  I'm a visual creative from Raipur, Chhattisgarh, India with over 5 years of experience in digital media production. 
                  My work spans photography, videography, and graphic design – all tied together by a passion for visual storytelling 
                  inspired by the rich traditions of Gond tribal art.
                </p>
                
                <p className="gond-text-light mb-4">
                  With a sharp eye for detail and a deep understanding of visual aesthetics, I craft compelling content that resonates 
                  with audiences and brings brands to life through the lens of traditional Indian artistry.
                </p>
                
                <p className="gond-text-light">
                  I've collaborated with brands, startups, and creative agencies across India to create compelling visual narratives 
                  and engaging media that leave lasting impressions.
                </p>
              </div>
              
              <div className="gond-card p-6 relative">
                {/* Decorative Gond pots */}
                <div className="absolute -top-5 -right-5 opacity-30">
                  <GondPots className="w-20 h-16" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 gond-text">Expertise</h3>
                
                <div className="space-y-4">
                  {[
                    { name: "Photography & Photo Editing", percentage: 95, color: "purple" },
                    { name: "Videography & Video Editing", percentage: 90, color: "orange" },
                    { name: "Graphic Design", percentage: 85, color: "green" },
                    { name: "Motion Graphics", percentage: 80, color: "blue" }
                  ].map((skill, index) => (
                    <div key={index}>
                      <h4 className="font-medium mb-2 flex items-center gond-text">
                        <span 
                          className={`
                            inline-block w-2 h-2 mr-2 rounded-full transition-colors duration-500
                            ${theme === 'light' 
                              ? skill.color === 'purple' ? 'bg-gond-light-purple' :
                                skill.color === 'orange' ? 'bg-gond-light-orange' :
                                skill.color === 'green' ? 'bg-gond-light-green' :
                                'bg-gond-light-blue'
                              : skill.color === 'purple' ? 'bg-gond-dark-purple' :
                                skill.color === 'orange' ? 'bg-gond-dark-orange' :
                                skill.color === 'green' ? 'bg-gond-dark-green' :
                                'bg-gond-dark-blue'
                            }
                          `}
                        />
                        {skill.name}
                      </h4>
                      <div className={`
                        w-full rounded-full h-2 transition-colors duration-500
                        ${theme === 'light' ? 'bg-gond-light-cream' : 'bg-gond-dark-cream'}
                      `}>
                        <div 
                          className={`
                            h-2 rounded-full transition-all duration-1000 ease-out
                            ${theme === 'light' 
                              ? skill.color === 'purple' ? 'bg-gond-light-purple' :
                                skill.color === 'orange' ? 'bg-gond-light-orange' :
                                skill.color === 'green' ? 'bg-gond-light-green' :
                                'bg-gond-light-blue'
                              : skill.color === 'purple' ? 'bg-gond-dark-purple' :
                                skill.color === 'orange' ? 'bg-gond-dark-orange' :
                                skill.color === 'green' ? 'bg-gond-dark-green' :
                                'bg-gond-dark-blue'
                            }
                          `}
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work Section */}
        <section className="py-20 px-4 gond-bg">
          <div className="container mx-auto max-w-5xl relative">
            <GondDottedPattern />
            
            <div className="text-center mb-12 relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 gond-text">
                Featured{" "}
                <span className={`
                  transition-colors duration-500
                  ${theme === 'light' ? 'text-gond-light-purple' : 'text-gond-dark-purple'}
                `}>
                  Work
                </span>
              </h2>
              <p className="gond-text-light mb-12 max-w-2xl mx-auto">
                Selected projects from my portfolio demonstrating the range of my visual creativity, 
                each piece infused with the spirit of traditional Gond artistry.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              {featuredProjects.length > 0 ? (
                featuredProjects.map((project, index) => (
                  <div key={project.id} className="group portfolio-item gond-card relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    
                    <div className={`
                      absolute inset-0 bg-gradient-to-t from-black/70 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                      flex flex-col justify-end p-6
                    `}>
                      <span className="text-white/70 text-sm capitalize">{project.category}</span>
                      <h3 className="text-white text-xl font-bold">{project.title}</h3>
                    </div>
                    
                    {/* Gond art decorative element */}
                    <div className={`
                      absolute top-2 right-2 opacity-40 transition-opacity duration-300
                      ${theme === 'dark' ? 'group-hover:opacity-80' : 'group-hover:opacity-60'}
                    `}>
                      {index === 0 && <GondTree className="w-8 h-12" />}
                      {index === 1 && <GondPeacock className="w-12 h-8" />}
                      {index === 2 && <GondHut className="w-10 h-8" />}
                    </div>
                  </div>
                ))
              ) : (
                // Fallback to placeholder data if no featured projects
                [
                  { 
                    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", 
                    category: "Photography", 
                    title: "Urban Perspectives",
                    art: <GondTree className="w-8 h-12" />
                  },
                  { 
                    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d", 
                    category: "Video", 
                    title: "Product Launch",
                    art: <GondPeacock className="w-12 h-8" />
                  },
                  { 
                    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085", 
                    category: "Graphics", 
                    title: "Brand Identity",
                    art: <GondHut className="w-10 h-8" />
                  }
                ].map((project, index) => (
                  <div key={index} className="group portfolio-item gond-card relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    
                    <div className={`
                      absolute inset-0 bg-gradient-to-t from-black/70 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                      flex flex-col justify-end p-6
                    `}>
                      <span className="text-white/70 text-sm">{project.category}</span>
                      <h3 className="text-white text-xl font-bold">{project.title}</h3>
                    </div>
                    
                    {/* Gond art decorative element */}
                    <div className={`
                      absolute top-2 right-2 opacity-40 transition-opacity duration-300
                      ${theme === 'dark' ? 'group-hover:opacity-80' : 'group-hover:opacity-60'}
                    `}>
                      {project.art}
                    </div>
                  </div>
                ))
              )}
            </div>
            
            <div className="mt-10 text-center relative z-10">
              <Button asChild size="lg" className="gond-button">
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
