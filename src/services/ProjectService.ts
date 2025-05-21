
import { 
  collection, 
  addDoc, 
  getDocs, 
  getDoc, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy,
  serverTimestamp,
  Timestamp
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { db, storage } from "@/lib/firebase";

export interface ProjectData {
  id?: string;
  title: string;
  description: string;
  category: "photos" | "videos" | "graphics";
  image: string;
  date: string;
  projectUrl?: string;
  createdAt?: Timestamp;
}

export class ProjectService {
  static async getProjects(): Promise<ProjectData[]> {
    try {
      const projectsQuery = query(
        collection(db, "projects"), 
        orderBy("createdAt", "desc")
      );
      const snapshot = await getDocs(projectsQuery);
      
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as ProjectData[];
    } catch (error) {
      console.error("Error fetching projects:", error);
      throw error;
    }
  }

  static async getProjectById(id: string): Promise<ProjectData | null> {
    try {
      const docRef = doc(db, "projects", id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data()
        } as ProjectData;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error fetching project:", error);
      throw error;
    }
  }

  static async createProject(project: ProjectData, imageFile: File | null): Promise<string> {
    try {
      let imageUrl = project.image;
      
      // Upload image if provided
      if (imageFile) {
        const storageRef = ref(storage, `project-images/${Date.now()}_${imageFile.name}`);
        await uploadBytes(storageRef, imageFile);
        imageUrl = await getDownloadURL(storageRef);
      }
      
      // Add document to Firestore
      const docRef = await addDoc(collection(db, "projects"), {
        ...project,
        image: imageUrl,
        createdAt: serverTimestamp()
      });
      
      return docRef.id;
    } catch (error) {
      console.error("Error creating project:", error);
      throw error;
    }
  }

  static async updateProject(id: string, project: ProjectData, imageFile: File | null): Promise<void> {
    try {
      let imageUrl = project.image;
      
      // Upload new image if provided
      if (imageFile) {
        const storageRef = ref(storage, `project-images/${Date.now()}_${imageFile.name}`);
        await uploadBytes(storageRef, imageFile);
        imageUrl = await getDownloadURL(storageRef);
      }
      
      // Update document in Firestore
      const docRef = doc(db, "projects", id);
      await updateDoc(docRef, {
        ...project,
        image: imageUrl,
        updatedAt: serverTimestamp()
      });
    } catch (error) {
      console.error("Error updating project:", error);
      throw error;
    }
  }

  static async deleteProject(id: string, imageUrl: string): Promise<void> {
    try {
      // Delete document from Firestore
      await deleteDoc(doc(db, "projects", id));
      
      // Delete image from Storage if it's a Firebase Storage URL
      if (imageUrl && imageUrl.includes("firebasestorage.googleapis.com")) {
        try {
          const imageRef = ref(storage, imageUrl);
          await deleteObject(imageRef);
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
