
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Category } from "./PortfolioFilter";
import { ProjectData, ProjectService } from "@/services/ProjectService";
import { AdminActions } from "@/components/AdminActions";
import { useAuth } from "@/contexts/AuthContext";

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

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div 
            key={i} 
            className="h-64 bg-illuminated-100 animate-pulse rounded-lg"
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
          className="px-4 py-2 bg-illuminated-400 text-white rounded-md"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredItems.map((item) => (
        <div key={item.id} className="group relative overflow-hidden rounded-lg portfolio-item">
          <Link to={`/portfolio/${item.id}`} className="block h-full">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-white/70 text-sm capitalize">{item.category}</span>
              <h3 className="text-white text-xl font-bold">{item.title}</h3>
            </div>
          </Link>
          
          {currentUser && (
            <AdminActions project={item} onProjectUpdated={fetchProjects} />
          )}
        </div>
      ))}

      {filteredItems.length === 0 && (
        <div className="col-span-full py-20 text-center">
          <p className="text-gray-500 text-lg">No items found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default PortfolioGrid;
