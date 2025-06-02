
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ProjectData, ProjectService } from "@/services/ProjectService";
import { useAuth } from "@/contexts/AuthContext";
import AdminControls from "@/components/AdminControls";

const PortfolioItem = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const fetchProject = async () => {
    if (!id) return;
    
    setLoading(true);
    try {
      const project = await ProjectService.getProjectById(id);
      setItem(project);
      if (!project) {
        setError("Project not found");
      } else {
        setError(null);
      }
    } catch (err: any) {
      console.error("Error fetching project:", err);
      setError("Failed to load project. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProject();
  }, [id]);

  const handleRefresh = () => {
    fetchProject();
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const isVideoFile = (url: string) => {
    return url.includes('.mp4') || url.includes('.mov') || url.includes('.webm') || url.includes('.avi');
  };

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

  if (error || !item) {
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
              
              {item.projectUrl && (
                <>
                  <span className="mx-2">•</span>
                  <a 
                    href={item.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-illuminated-500 hover:underline"
                  >
                    <LinkIcon size={16} className="mr-1" />
                    View Project
                  </a>
                </>
              )}
            </div>
            
            <div className="mb-8">
              {item.category === 'videos' && isVideoFile(item.image) ? (
                <video 
                  src={item.image} 
                  controls
                  className="w-full h-auto rounded-lg shadow-md"
                  poster={item.thumbnail}
                />
              ) : (
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              )}
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
      
      {/* Admin Controls */}
      {currentUser && (
        <AdminControls 
          onAddProject={handleRefresh}
          onLogout={handleLogout}
        />
      )}
      
      <Footer />
    </>
  );
};

export default PortfolioItem;
