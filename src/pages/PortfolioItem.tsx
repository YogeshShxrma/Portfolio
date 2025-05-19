
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PortfolioItem as PortfolioItemType } from "@/components/PortfolioGrid";

const PortfolioItem = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<PortfolioItemType | null>(null);
  const [loading, setLoading] = useState(true);

  // Sample portfolio items data (in a real app, this would be fetched from a database)
  const portfolioItems: PortfolioItemType[] = [
    {
      id: 1,
      title: "Urban Perspectives",
      category: "photos",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      description: "A series of photographs capturing the urban landscape from unique angles and perspectives. This project explores the interaction between architecture, light, and human presence in major metropolitan areas. Shot over the course of six months, these images reveal hidden patterns and unexpected beauty in everyday urban environments.\n\nTechniques used include long exposure, creative framing, and dramatic lighting to emphasize the geometric shapes and textures found in urban settings.",
      date: "2023-05-15"
    },
    {
      id: 2,
      title: "Product Launch",
      category: "videos",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      description: "A promotional video for a tech product launch, showcasing features and benefits. Created with a combination of live action footage and motion graphics to highlight the product's innovative design and functionality. The video was optimized for social media distribution and received over 100,000 views in the first week.\n\nProject involved storyboarding, directing, filming, and post-production editing with Adobe Premiere Pro and After Effects.",
      date: "2023-04-22"
    },
    {
      id: 3,
      title: "Brand Identity",
      category: "graphics",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      description: "A complete brand identity design including logo, color palette, and typography guidelines. Developed for a tech startup entering the competitive market, this identity system needed to communicate innovation while remaining approachable and trustworthy.\n\nThe design process included stakeholder interviews, competitive analysis, concept development, and refinement based on client feedback. Deliverables included a comprehensive brand guide, logo files in multiple formats, and templates for business collateral.",
      date: "2023-03-10"
    },
    {
      id: 4,
      title: "Nature Documentary",
      category: "videos",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      description: "A short documentary exploring the beauty of natural landscapes and wildlife. Shot on location in national parks across the country, this project aimed to highlight the importance of conservation efforts and environmental protection. The documentary features stunning visuals paired with an original music score and narration.\n\nTechnical aspects included drone footage, macro photography, and challenging lighting conditions requiring specialized equipment.",
      date: "2023-02-15"
    },
    {
      id: 5,
      title: "Portrait Series",
      category: "photos",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      description: "A collection of portrait photography showcasing diverse individuals and their stories. This series aimed to capture authentic moments and expressions that reveal something meaningful about each subject's personality and life experience. Lighting techniques included natural light, studio setups, and environmental contexts chosen to complement each individual's story.",
      date: "2023-01-20"
    },
    {
      id: 6,
      title: "Magazine Layout",
      category: "graphics",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      description: "Editorial design for a lifestyle magazine, including custom illustrations and typography. This project involved creating a cohesive visual system that would maintain reader interest throughout different sections while ensuring readability and visual appeal. The design balances white space with dynamic image placement and typographic hierarchy to guide readers through the content flow.",
      date: "2022-12-05"
    },
    {
      id: 7,
      title: "Architectural Photography",
      category: "photos",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      description: "A series exploring modern architecture and geometric patterns in buildings. This collection focuses on the interplay between light, shadow, and structure to highlight the deliberate design choices in contemporary architecture. Technical challenges included managing perspective distortion, finding optimal shooting times for ideal lighting conditions, and gaining access to restricted locations.",
      date: "2022-11-15"
    },
    {
      id: 8,
      title: "Motion Graphics Reel",
      category: "videos",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d2c6f44d",
      description: "A compilation of motion graphics and animations created for various client projects. This showcase demonstrates proficiency with After Effects, Cinema 4D, and other animation tools to create engaging visual content for commercials, explainer videos, and digital marketing campaigns. Techniques include character animation, kinetic typography, and 3D integration with 2D elements.",
      date: "2022-10-10"
    },
    {
      id: 9,
      title: "Packaging Design",
      category: "graphics",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      description: "Product packaging design for an eco-friendly consumer brand. This project required balancing visual appeal with practical considerations such as materials, production costs, and shelf impact. The final design incorporates sustainable materials, minimalist aesthetics, and clear communication of the brand's environmentally conscious values.",
      date: "2022-09-01"
    }
  ];

  useEffect(() => {
    // Simulate API fetch
    setLoading(true);
    setTimeout(() => {
      const foundItem = portfolioItems.find(item => item.id === Number(id));
      setItem(foundItem || null);
      setLoading(false);
    }, 300);
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="pt-24 pb-20 min-h-screen">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="animate-pulse">
                <div className="h-8 w-3/4 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 w-1/2 bg-gray-200 rounded mb-8"></div>
                <div className="h-96 bg-gray-200 rounded mb-8"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!item) {
    return (
      <>
        <Navbar />
        <main className="pt-24 pb-20 min-h-screen">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-2xl font-bold mb-4">Portfolio item not found</h1>
              <Button asChild>
                <Link to="/portfolio">Back to Portfolio</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" asChild className="mb-6 pl-0">
              <Link to="/portfolio" className="flex items-center">
                <ArrowLeft size={16} className="mr-2" />
                Back to Portfolio
              </Link>
            </Button>

            <h1 className="text-3xl md:text-4xl font-bold mb-2">{item.title}</h1>
            
            <div className="flex items-center mb-6 text-gray-600">
              <span className="inline-flex items-center">
                <Calendar size={16} className="mr-1" />
                {item.date}
              </span>
              <span className="mx-2">•</span>
              <span className="capitalize">{item.category}</span>
            </div>
            
            <div className="mb-8">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            
            <div className="prose prose-lg max-w-none">
              {item.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PortfolioItem;
