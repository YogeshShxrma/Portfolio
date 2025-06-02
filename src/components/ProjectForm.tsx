
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
import { Upload, Calendar, Link as LinkIcon, Save, Image } from "lucide-react";

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
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(project?.thumbnail || null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isEditing = !!project?.id;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Check file type - allow images and videos
      const allowedTypes = ['image/', 'video/'];
      const isValidType = allowedTypes.some(type => file.type.startsWith(type));
      
      if (!isValidType) {
        toast({
          title: "Invalid file type",
          description: "Please upload an image or video file",
          variant: "destructive",
        });
        return;
      }
      
      setImage(file);
      
      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Only allow images for thumbnails
      if (!file.type.startsWith('image/')) {
        toast({
          title: "Invalid file type",
          description: "Please upload an image file for the thumbnail",
          variant: "destructive",
        });
        return;
      }
      
      setThumbnail(file);
      
      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const isVideoFile = (file: File | null) => {
    return file?.type?.startsWith('video/') || false;
  };

  const isVideoUrl = (url: string | null) => {
    if (!url) return false;
    return url.includes('.mp4') || url.includes('.mov') || url.includes('.webm') || url.includes('.avi');
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
        thumbnail: thumbnailPreview || "",
        date,
        projectUrl,
      };

      if (isEditing && project?.id) {
        await ProjectService.updateProject(project.id, projectData, image, thumbnail);
        toast({
          title: "Project updated",
          description: "Your project has been successfully updated.",
        });
      } else {
        await ProjectService.createProject(projectData, image, thumbnail);
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

  const showThumbnailField = category === 'videos' && (isVideoFile(image) || isVideoUrl(imagePreview));

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-2">
        <Label htmlFor="title">Project Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Project Title"
          className="border-folk-border"
          required
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="category">Category</Label>
        <Select
          value={category}
          onValueChange={(value) => setCategory(value as "photos" | "videos" | "graphics")}
        >
          <SelectTrigger className="border-folk-border">
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
          className="min-h-[120px] border-folk-border"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="date" className="flex items-center gap-2">
            <Calendar size={14} />
            Date
          </Label>
          <Input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border-folk-border"
            required
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="projectUrl" className="flex items-center gap-2">
            <LinkIcon size={14} />
            Project URL (Optional)
          </Label>
          <Input
            id="projectUrl"
            type="url"
            value={projectUrl}
            onChange={(e) => setProjectUrl(e.target.value)}
            placeholder="https://"
            className="border-folk-border"
          />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="image" className="flex items-center gap-2">
          <Upload size={14} />
          Project Media (Image or Video)
        </Label>
        <Input
          id="image"
          type="file"
          accept="image/*,video/*"
          onChange={handleImageChange}
          className="cursor-pointer border-folk-border"
        />
        {imagePreview && (
          <div className="mt-2 border border-folk-border rounded-md overflow-hidden">
            {isVideoFile(image) || isVideoUrl(imagePreview) ? (
              <video
                src={imagePreview}
                controls
                className="max-h-48 w-full object-cover"
              />
            ) : (
              <img
                src={imagePreview}
                alt="Preview"
                className="max-h-48 w-full object-cover"
              />
            )}
          </div>
        )}
      </div>

      {showThumbnailField && (
        <div className="grid gap-2">
          <Label htmlFor="thumbnail" className="flex items-center gap-2">
            <Image size={14} />
            Video Thumbnail (Optional)
          </Label>
          <Input
            id="thumbnail"
            type="file"
            accept="image/*"
            onChange={handleThumbnailChange}
            className="cursor-pointer border-folk-border"
          />
          <p className="text-sm text-gray-500">
            Upload a custom thumbnail image for your video. If not provided, the video will be used as preview.
          </p>
          {thumbnailPreview && (
            <div className="mt-2 border border-folk-border rounded-md overflow-hidden">
              <img
                src={thumbnailPreview}
                alt="Thumbnail Preview"
                className="max-h-32 w-full object-cover"
              />
            </div>
          )}
        </div>
      )}

      <div className="flex justify-end space-x-2">
        <Button 
          type="button" 
          variant="outline" 
          onClick={onCancel}
          className="border-folk-border"
        >
          Cancel
        </Button>
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-folk-purple hover:bg-folk-purple-dark flex items-center gap-2"
        >
          <Save size={16} />
          {isSubmitting ? "Saving..." : isEditing ? "Update Project" : "Add Project"}
        </Button>
      </div>
    </form>
  );
};

export default ProjectForm;
