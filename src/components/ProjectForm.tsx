
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProjectData, ProjectService } from "@/services/ProjectService";
import { toast } from "@/hooks/use-toast";

interface ProjectFormProps {
  project?: ProjectData;
  onComplete: () => void;
  onCancel: () => void;
}

export const ProjectForm = ({ project, onComplete, onCancel }: ProjectFormProps) => {
  const [title, setTitle] = useState(project?.title || "");
  const [description, setDescription] = useState(project?.description || "");
  const [category, setCategory] = useState<"photos" | "videos" | "graphics">(
    project?.category || "photos"
  );
  const [date, setDate] = useState(project?.date || new Date().toISOString().split("T")[0]);
  const [projectUrl, setProjectUrl] = useState(project?.projectUrl || "");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(project?.image || null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isEditing = !!project?.id;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      
      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const projectData: ProjectData = {
        title,
        description,
        category,
        image: imagePreview || "",
        date,
        projectUrl,
      };

      if (isEditing && project?.id) {
        await ProjectService.updateProject(project.id, projectData, image);
        toast({
          title: "Project updated",
          description: "Your project has been successfully updated.",
        });
      } else {
        await ProjectService.createProject(projectData, image);
        toast({
          title: "Project created",
          description: "Your new project has been added to your portfolio.",
        });
      }
      
      onComplete();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "There was an error saving the project.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Project Title"
          required
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="category">Category</Label>
        <Select
          value={category}
          onValueChange={(value) => setCategory(value as "photos" | "videos" | "graphics")}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="photos">Photos</SelectItem>
            <SelectItem value="videos">Videos</SelectItem>
            <SelectItem value="graphics">Graphics</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Project Description"
          required
          className="min-h-[120px]"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="date">Date</Label>
        <Input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="projectUrl">Project URL (Optional)</Label>
        <Input
          id="projectUrl"
          type="url"
          value={projectUrl}
          onChange={(e) => setProjectUrl(e.target.value)}
          placeholder="https://"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="image">Project Image</Label>
        <Input
          id="image"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="cursor-pointer"
        />
        {imagePreview && (
          <div className="mt-2">
            <img
              src={imagePreview}
              alt="Preview"
              className="max-h-40 rounded-md border border-gray-300"
            />
          </div>
        )}
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : isEditing ? "Update Project" : "Add Project"}
        </Button>
      </div>
    </form>
  );
};

export default ProjectForm;
