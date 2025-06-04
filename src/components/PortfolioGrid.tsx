
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Category } from "./PortfolioFilter";
import { ProjectData, ProjectService } from "@/services/ProjectService";
import { useAuth } from "@/contexts/AuthContext";
import { Badge } from "@/components/ui/badge";

interface PortfolioGridProps {
  category: Category;
}

const PortfolioGrid = ({ category }: PortfolioGridProps) => {
  const [items, setItems] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { currentUser } = useAuth();

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const projects = await ProjectService.getProjects();
      setItems(projects);
      setError(null);
    } catch (err: any) {
      console.error("Error fetching projects:", err);
      setError("Failed to load projects. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const filteredItems = category === "all"
    ? items
    : items.filter(item => item.category === category);

  const isVideoFile = (url: string) => {
    return url.includes('.mp4') || url.includes('.mov') || url.includes('.webm') || url.includes('.avi');
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div 
            key={i} 
            className="h-64 bg-folk-cream animate-pulse rounded-lg"
          />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 mb-4">{error}</p>
        <button 
          onClick={fetchProjects}
          className="px-4 py-2 bg-folk-purple text-white rounded-md"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredItems.map((item) => (
        <div key={item.id} className="group relative overflow-hidden rounded-lg folk-card portfolio-item">
          <Link to={`/portfolio/${item.id}`} className="block h-full">
            <div className="relative">
              {item.category === 'videos' && isVideoFile(item.image) ? (
                // For videos, show thumbnail if available, otherwise show a static frame of the video
                item.thumbnail ? (
                  <>
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-0"
                    />
                    <video
                      src={item.image}
                      className="absolute inset-0 w-full h-64 object-cover transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-105"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    />
                  </>
                ) : (
                  <video
                    src={item.image}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  />
                )
              ) : item.thumbnail ? (
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
              <Badge 
                className="absolute top-3 left-3 bg-folk-purple/80 hover:bg-folk-purple capitalize"
              >
                {item.category}
              </Badge>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-medium group-hover:text-folk-purple transition-colors">{item.title}</h3>
              <p className="text-folk-text-light text-sm mt-2 line-clamp-2">{item.description}</p>
            </div>
          </Link>
        </div>
      ))}

      {filteredItems.length === 0 && (
        <div className="col-span-full py-20 text-center">
          <p className="text-folk-text-light text-lg">No items found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default PortfolioGrid;
