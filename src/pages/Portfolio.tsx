
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioFilter, { Category } from "@/components/PortfolioFilter";
import PortfolioGrid, { PortfolioItem } from "@/components/PortfolioGrid";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  // Sample portfolio items data
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Urban Perspectives",
      category: "photos",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      description: "A series of photographs capturing the urban landscape from unique angles and perspectives.",
      date: "2023-05-15"
    },
    {
      id: 2,
      title: "Product Launch",
      category: "videos",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      description: "A promotional video for a tech product launch, showcasing features and benefits.",
      date: "2023-04-22"
    },
    {
      id: 3,
      title: "Brand Identity",
      category: "graphics",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      description: "A complete brand identity design including logo, color palette, and typography guidelines.",
      date: "2023-03-10"
    },
    {
      id: 4,
      title: "Nature Documentary",
      category: "videos",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      description: "A short documentary exploring the beauty of natural landscapes and wildlife.",
      date: "2023-02-15"
    },
    {
      id: 5,
      title: "Portrait Series",
      category: "photos",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      description: "A collection of portrait photography showcasing diverse individuals and their stories.",
      date: "2023-01-20"
    },
    {
      id: 6,
      title: "Magazine Layout",
      category: "graphics",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      description: "Editorial design for a lifestyle magazine, including custom illustrations and typography.",
      date: "2022-12-05"
    },
    {
      id: 7,
      title: "Architectural Photography",
      category: "photos",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      description: "A series exploring modern architecture and geometric patterns in buildings.",
      date: "2022-11-15"
    },
    {
      id: 8,
      title: "Motion Graphics Reel",
      category: "videos",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d2c6f44d",
      description: "A compilation of motion graphics and animations created for various client projects.",
      date: "2022-10-10"
    },
    {
      id: 9,
      title: "Packaging Design",
      category: "graphics",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      description: "Product packaging design for an eco-friendly consumer brand.",
      date: "2022-09-01"
    }
  ];

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h1>
            <p className="text-gray-600 text-lg mb-8">
              Explore my work across photography, videography, and graphic design.
            </p>
            
            <PortfolioFilter
              onCategoryChange={handleCategoryChange}
              activeCategory={activeCategory}
            />
            
            <PortfolioGrid
              items={portfolioItems}
              category={activeCategory}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
