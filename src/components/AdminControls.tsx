
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ProjectForm } from "@/components/ProjectForm";
import { useAuth } from "@/contexts/AuthContext";
import { PlusCircle, LogOut } from "lucide-react";

interface AdminControlsProps {
  onAddProject: () => void;
  onLogout: () => void;
}

export const AdminControls = ({ onAddProject, onLogout }: AdminControlsProps) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { currentUser } = useAuth();

  const handleAddProject = () => {
    setIsFormOpen(true);
  };

  const handleFormComplete = () => {
    setIsFormOpen(false);
    onAddProject(); // Trigger refresh
  };

  if (!currentUser) return null;

  return (
    <>
      <div className="fixed bottom-6 right-6 flex flex-col space-y-2">
        <Button
          className="rounded-full w-12 h-12 p-0 shadow-lg bg-illuminated-400 hover:bg-illuminated-500"
          onClick={handleAddProject}
        >
          <PlusCircle className="h-6 w-6" />
          <span className="sr-only">Add Project</span>
        </Button>
        
        <Button
          variant="outline"
          className="rounded-full w-12 h-12 p-0 shadow-lg bg-white hover:bg-gray-100"
          onClick={onLogout}
        >
          <LogOut className="h-5 w-5 text-gray-700" />
          <span className="sr-only">Logout</span>
        </Button>
      </div>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>Add New Project</DialogTitle>
          </DialogHeader>
          <ProjectForm
            onComplete={handleFormComplete}
            onCancel={() => setIsFormOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AdminControls;
