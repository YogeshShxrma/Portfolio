import { 
  serverTimestamp,
  Timestamp
} from "firebase/firestore";
import { supabase } from "@/integrations/supabase/client";

export interface ProjectData {
  id?: string;
  title: string;
  description: string;
  category: "photos" | "videos" | "graphics";
  image: string;
  thumbnail?: string;
  date: string;
  projectUrl?: string;
  featured?: boolean;
  createdAt?: Timestamp;
}

export class ProjectService {
  static async getProjects(): Promise<ProjectData[]> {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      
      return data.map(project => ({
        id: project.id,
        title: project.title,
        description: project.description,
        category: project.category as "photos" | "videos" | "graphics",
        image: project.image_url,
        thumbnail: (project as any).thumbnail_url || undefined,
        date: project.date,
        projectUrl: project.project_url || undefined,
        featured: project.featured || false
      }));
    } catch (error) {
      console.error("Error fetching projects:", error);
      throw error;
    }
  }

  static async getFeaturedProjects(): Promise<ProjectData[]> {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('featured', true)
        .order('created_at', { ascending: false })
        .limit(3);
      
      if (error) throw error;
      
      return data.map(project => ({
        id: project.id,
        title: project.title,
        description: project.description,
        category: project.category as "photos" | "videos" | "graphics",
        image: project.image_url,
        thumbnail: (project as any).thumbnail_url || undefined,
        date: project.date,
        projectUrl: project.project_url || undefined,
        featured: project.featured || false
      }));
    } catch (error) {
      console.error("Error fetching featured projects:", error);
      throw error;
    }
  }

  static async updateFeaturedStatus(id: string, featured: boolean): Promise<void> {
    try {
      const { error } = await supabase
        .from('projects')
        .update({ featured })
        .eq('id', id);
      
      if (error) throw error;
    } catch (error) {
      console.error("Error updating featured status:", error);
      throw error;
    }
  }

  static async getProjectById(id: string): Promise<ProjectData | null> {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) {
        if (error.code === 'PGRST116') {
          return null; // Project not found
        }
        throw error;
      }
      
      return {
        id: data.id,
        title: data.title,
        description: data.description,
        category: data.category as "photos" | "videos" | "graphics",
        image: data.image_url,
        thumbnail: (data as any).thumbnail_url || undefined,
        date: data.date,
        projectUrl: data.project_url || undefined,
        featured: data.featured || false
      };
    } catch (error) {
      console.error("Error fetching project:", error);
      throw error;
    }
  }

  static async createProject(project: ProjectData, imageFile: File | null, thumbnailFile?: File | null): Promise<string> {
    try {
      let imageUrl = project.image;
      let thumbnailUrl = project.thumbnail;
      
      // Upload image if provided
      if (imageFile) {
        const filePath = `${Date.now()}_${imageFile.name}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('project-images')
          .upload(filePath, imageFile);
        
        if (uploadError) throw uploadError;
        
        // Get public URL
        const { data } = supabase.storage
          .from('project-images')
          .getPublicUrl(filePath);
          
        imageUrl = data.publicUrl;
      }
      
      // Upload thumbnail if provided
      if (thumbnailFile) {
        const thumbPath = `thumbnails/${Date.now()}_${thumbnailFile.name}`;
        const { data: thumbUploadData, error: thumbUploadError } = await supabase.storage
          .from('project-images')
          .upload(thumbPath, thumbnailFile);
        
        if (thumbUploadError) throw thumbUploadError;
        
        // Get public URL
        const { data } = supabase.storage
          .from('project-images')
          .getPublicUrl(thumbPath);
          
        thumbnailUrl = data.publicUrl;
      }
      
      // Add document to Supabase
      const { data, error } = await supabase
        .from('projects')
        .insert([{
          title: project.title,
          description: project.description,
          category: project.category,
          image_url: imageUrl,
          thumbnail_url: thumbnailUrl || null,
          project_url: project.projectUrl || null,
          date: project.date,
          featured: project.featured || false
        }])
        .select();
      
      if (error) throw error;
      
      return data[0].id;
    } catch (error) {
      console.error("Error creating project:", error);
      throw error;
    }
  }

  static async updateProject(id: string, project: ProjectData, imageFile: File | null, thumbnailFile?: File | null): Promise<void> {
    try {
      let imageUrl = project.image;
      let thumbnailUrl = project.thumbnail;
      
      // Upload new image if provided
      if (imageFile) {
        const filePath = `${Date.now()}_${imageFile.name}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('project-images')
          .upload(filePath, imageFile);
        
        if (uploadError) throw uploadError;
        
        // Get public URL
        const { data } = supabase.storage
          .from('project-images')
          .getPublicUrl(filePath);
          
        imageUrl = data.publicUrl;
      }
      
      // Upload new thumbnail if provided
      if (thumbnailFile) {
        const thumbPath = `thumbnails/${Date.now()}_${thumbnailFile.name}`;
        const { data: thumbUploadData, error: thumbUploadError } = await supabase.storage
          .from('project-images')
          .upload(thumbPath, thumbnailFile);
        
        if (thumbUploadError) throw thumbUploadError;
        
        // Get public URL
        const { data } = supabase.storage
          .from('project-images')
          .getPublicUrl(thumbPath);
          
        thumbnailUrl = data.publicUrl;
      }
      
      // Update document in Supabase
      const { error } = await supabase
        .from('projects')
        .update({
          title: project.title,
          description: project.description,
          category: project.category,
          image_url: imageUrl,
          thumbnail_url: thumbnailUrl || null,
          project_url: project.projectUrl || null,
          date: project.date,
          featured: project.featured || false,
          updated_at: new Date().toISOString()
        })
        .eq('id', id);
      
      if (error) throw error;
    } catch (error) {
      console.error("Error updating project:", error);
      throw error;
    }
  }

  static async deleteProject(id: string, imageUrl: string): Promise<void> {
    try {
      // Delete document from Supabase
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      
      // Delete image from Storage if it's a Supabase Storage URL
      if (imageUrl && imageUrl.includes('project-images')) {
        try {
          // Extract the file path from the URL
          const urlParts = imageUrl.split('project-images/');
          if (urlParts.length > 1) {
            const filePath = urlParts[1];
            
            const { error: storageError } = await supabase.storage
              .from('project-images')
              .remove([filePath]);
              
            if (storageError) {
              console.error("Error deleting image:", storageError);
              // Continue with deletion even if image deletion fails
            }
          }
        } catch (error) {
          console.error("Error deleting image:", error);
          // Continue with deletion even if image deletion fails
        }
      }
    } catch (error) {
      console.error("Error deleting project:", error);
      throw error;
    }
  }
}

export default ProjectService;
