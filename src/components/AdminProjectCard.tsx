
import { useState } from "react";
import { Link } from "react-router-dom";
import { ProjectData, ProjectService } from "@/services/ProjectService";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ProjectForm } from "@/components/ProjectForm";
import { toast } from "@/hooks/use-toast";
import { Calendar, Edit, Trash, ExternalLink } from "lucide-react";

interface AdminProjectCardProps {
  project: ProjectData;
  onUpdate: () => void;
}

const AdminProjectCard = ({ project, onUpdate }: AdminProjectCardProps) => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!project.id) return;
    
    setIsDeleting(true);
    try {
      await ProjectService.deleteProject(project.id, project.image);
      toast({
        title: "Project deleted",
        description: "The project has been successfully removed.",
      });
      onUpdate();
    } catch (error: any) {
      toast({
        title: "Error deleting project",
        description: error.message || "There was an error deleting the project.",
        variant: "destructive",
      });
    } finally {
      setIsDeleting(false);
      setIsDeleteDialogOpen(false);
    }
  };

  return (
    <div className="relative group bg-white dark:bg-folk-dark border border-folk-border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
      <div className="relative aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-folk-accent bg-folk-cream px-2 py-1 rounded capitalize">
            {project.category}
          </span>
          <span className="text-xs text-folk-text-light flex items-center">
            <Calendar size={12} className="mr-1" />
            {project.date}
          </span>
        </div>
        
        <h3 className="font-bold text-lg mb-2 line-clamp-1">{project.title}</h3>
        <p className="text-folk-text-light text-sm mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <Link to={`/portfolio/${project.id}`}>
            <Button variant="outline" size="sm" className="text-xs">
              View Details
            </Button>
          </Link>
          
          <div className="space-x-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-folk-purple hover:text-folk-purple-dark"
              onClick={() => setIsEditDialogOpen(true)}
            >
              <Edit size={14} />
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-red-500 hover:text-red-700"
              onClick={() => setIsDeleteDialogOpen(true)}
            >
              <Trash size={14} />
            </Button>
          </div>
        </div>
      </div>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-xl max-h-[90vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>Edit Project</DialogTitle>
          </DialogHeader>
          <ScrollArea className="flex-1 pr-6">
            <ProjectForm
              project={project}
              onComplete={() => {
                setIsEditDialogOpen(false);
                onUpdate();
              }}
              onCancel={() => setIsEditDialogOpen(false)}
            />
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the project
              "{project.title}" and remove its data from the server.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={isDeleting}
              className="bg-red-600 hover:bg-red-700"
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AdminProjectCard;
