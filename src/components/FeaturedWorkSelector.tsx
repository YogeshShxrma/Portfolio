
import React, { useState, useEffect } from "react";
import { ProjectData, ProjectService } from "@/services/ProjectService";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface FeaturedWorkSelectorProps {
  onUpdate: () => void;
}

export const FeaturedWorkSelector = ({ onUpdate }: FeaturedWorkSelectorProps) => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const allProjects = await ProjectService.getProjects();
      setProjects(allProjects);
    } catch (error) {
      console.error("Error fetching projects:", error);
      toast({
        title: "Error",
        description: "Failed to load projects",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const toggleFeatured = async (project: ProjectData) => {
    const isFeatured = project.featured;
    const featuredCount = projects.filter(p => p.featured).length;
    
    if (!isFeatured && featuredCount >= 3) {
      toast({
        title: "Maximum reached",
        description: "You can only feature up to 3 projects",
        variant: "destructive",
      });
      return;
    }

    try {
      await ProjectService.updateFeaturedStatus(project.id!, !isFeatured);
      
      // Update local state
      setProjects(projects.map(p => 
        p.id === project.id ? { ...p, featured: !isFeatured } : p
      ));

      toast({
        title: isFeatured ? "Removed from featured" : "Added to featured",
        description: `${project.title} has been ${isFeatured ? 'removed from' : 'added to'} featured work`,
      });

      onUpdate();
    } catch (error) {
      console.error("Error updating featured status:", error);
      toast({
        title: "Error",
        description: "Failed to update featured status",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading projects...</div>;
  }

  const featuredCount = projects.filter(p => p.featured).length;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">Featured Work Selection</h3>
        <p className="text-muted-foreground">
          Select up to 3 projects to feature on the home page ({featuredCount}/3 selected)
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => {
          const isFeatured = project.featured;
          
          return (
            <Card key={project.id} className={`relative cursor-pointer transition-all duration-200 ${
              isFeatured ? 'ring-2 ring-folk-purple shadow-lg' : 'hover:shadow-md'
            }`}>
              {isFeatured && (
                <div className="absolute top-2 right-2 z-10">
                  <Badge className="bg-folk-purple text-white flex items-center gap-1">
                    <Star size={12} fill="currentColor" />
                    Featured
                  </Badge>
                </div>
              )}
              
              <CardContent className="p-0">
                {project.image && (
                  project.category === 'videos' && (project.image.includes('video') || project.image.includes('.mp4') || project.image.includes('.mov')) ? (
                    <video
                      src={project.image}
                      className="w-full h-48 object-cover rounded-t-lg"
                      muted
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  )
                )}
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">
                      {project.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {project.date}
                    </span>
                  </div>
                  
                  <h4 className="font-semibold mb-2 line-clamp-1">
                    {project.title}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <Button
                    onClick={() => toggleFeatured(project)}
                    variant={isFeatured ? "default" : "outline"}
                    size="sm"
                    className={`w-full ${isFeatured ? 'bg-folk-purple hover:bg-folk-purple-dark' : ''}`}
                  >
                    {isFeatured ? (
                      <>
                        <Check size={16} className="mr-2" />
                        Featured
                      </>
                    ) : (
                      <>
                        <Star size={16} className="mr-2" />
                        Add to Featured
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {projects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No projects found. Add some projects first to feature them on the home page.
          </p>
        </div>
      )}
    </div>
  );
};

export default FeaturedWorkSelector;
