
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProjectData, ProjectService } from "@/services/ProjectService";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ProjectForm } from "@/components/ProjectForm";
import { toast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminProjectCard from "@/components/AdminProjectCard";
import AdminLogin from "@/components/AdminLogin";

const Admin = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const fetchedProjects = await ProjectService.getProjects();
      setProjects(fetchedProjects);
      setError(null);
    } catch (err: any) {
      console.error("Error fetching projects:", err);
      setError("Failed to load projects. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentUser) {
      fetchProjects();
    } else {
      setShowLoginModal(true);
    }
  }, [currentUser]);

  const handleLogout = async () => {
    try {
      await logout();
      toast({
        title: "Logged out successfully",
        description: "You have been logged out of the admin area",
      });
      navigate("/");
    } catch (error: any) {
      toast({
        title: "Logout failed",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleAddProject = () => {
    setIsAddFormOpen(true);
  };

  const handleFormComplete = () => {
    setIsAddFormOpen(false);
    fetchProjects();
  };

  // If not authenticated, show the login form
  if (!currentUser) {
    return (
      <>
        <Navbar />
        <main className="pt-24 pb-20 min-h-screen">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <h1 className="text-3xl font-bold text-center mb-8">Admin Access</h1>
              <p className="text-center mb-8 text-muted-foreground">
                Please login to access the admin area
              </p>
            </div>
          </div>
        </main>
        <AdminLogin isOpen={showLoginModal} onClose={() => navigate("/")} />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <div className="space-x-2">
              <Button onClick={handleAddProject} className="bg-folk-purple hover:bg-folk-purple-dark">
                Add New Project
              </Button>
              <Button variant="outline" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="photos">Photos</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="graphics">Graphics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="h-64 bg-folk-cream animate-pulse rounded-lg" />
                  ))}
                </div>
              ) : error ? (
                <div className="text-center py-12">
                  <p className="text-red-500 mb-4">{error}</p>
                  <Button onClick={fetchProjects}>Try Again</Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project) => (
                    <AdminProjectCard
                      key={project.id}
                      project={project}
                      onUpdate={fetchProjects}
                    />
                  ))}
                  {projects.length === 0 && (
                    <div className="col-span-full py-20 text-center">
                      <p className="text-muted-foreground text-lg">No projects found.</p>
                      <Button onClick={handleAddProject} className="mt-4">
                        Add Your First Project
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="photos">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter(project => project.category === "photos")
                  .map((project) => (
                    <AdminProjectCard
                      key={project.id}
                      project={project}
                      onUpdate={fetchProjects}
                    />
                  ))}
                {projects.filter(p => p.category === "photos").length === 0 && (
                  <div className="col-span-full py-20 text-center">
                    <p className="text-muted-foreground text-lg">No photo projects found.</p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="videos">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter(project => project.category === "videos")
                  .map((project) => (
                    <AdminProjectCard
                      key={project.id}
                      project={project}
                      onUpdate={fetchProjects}
                    />
                  ))}
                {projects.filter(p => p.category === "videos").length === 0 && (
                  <div className="col-span-full py-20 text-center">
                    <p className="text-muted-foreground text-lg">No video projects found.</p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="graphics">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter(project => project.category === "graphics")
                  .map((project) => (
                    <AdminProjectCard
                      key={project.id}
                      project={project}
                      onUpdate={fetchProjects}
                    />
                  ))}
                {projects.filter(p => p.category === "graphics").length === 0 && (
                  <div className="col-span-full py-20 text-center">
                    <p className="text-muted-foreground text-lg">No graphic projects found.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Dialog open={isAddFormOpen} onOpenChange={setIsAddFormOpen}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>Add New Project</DialogTitle>
          </DialogHeader>
          <ProjectForm
            onComplete={handleFormComplete}
            onCancel={() => setIsAddFormOpen(false)}
          />
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  );
};

export default Admin;
