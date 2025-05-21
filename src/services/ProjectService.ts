
import { db, storage } from "@/lib/firebase";
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc,
  doc, 
  getDocs,
  query,
  orderBy,
  Timestamp,
  getDoc
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

export interface ProjectData {
  id?: string;
  title: string;
  description: string;
  category: "photos" | "videos" | "graphics";
  image: string;
  date: string;
  projectUrl?: string;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

const COLLECTION_NAME = "projects";

export const ProjectService = {
  async getProjects(): Promise<ProjectData[]> {
    const projectsQuery = query(collection(db, COLLECTION_NAME), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(projectsQuery);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as ProjectData));
  },
  
  async getProjectById(id: string): Promise<ProjectData | null> {
    const docRef = doc(db, COLLECTION_NAME, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      } as ProjectData;
    }
    
    return null;
  },
  
  async createProject(project: ProjectData, imageFile: File | null): Promise<string> {
    // Upload image if provided
    let imageUrl = project.image;
    if (imageFile) {
      const storageRef = ref(storage, `project-images/${Date.now()}-${imageFile.name}`);
      await uploadBytes(storageRef, imageFile);
      imageUrl = await getDownloadURL(storageRef);
    }
    
    // Create project document
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...project,
      image: imageUrl,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    });
    
    return docRef.id;
  },
  
  async updateProject(id: string, project: Partial<ProjectData>, imageFile: File | null): Promise<void> {
    // Upload new image if provided
    let imageUrl = project.image;
    if (imageFile) {
      const storageRef = ref(storage, `project-images/${Date.now()}-${imageFile.name}`);
      await uploadBytes(storageRef, imageFile);
      imageUrl = await getDownloadURL(storageRef);
    }
    
    // Update project document
    const projectRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(projectRef, {
      ...project,
      ...(imageFile ? { image: imageUrl } : {}),
      updatedAt: Timestamp.now()
    });
  },
  
  async deleteProject(id: string, imageUrl: string): Promise<void> {
    // Delete image from storage if it's a Firebase storage URL
    if (imageUrl && imageUrl.includes("firebasestorage.googleapis.com")) {
      try {
        const storageRef = ref(storage, imageUrl);
        await deleteObject(storageRef);
      } catch (error) {
        console.error("Error deleting image:", error);
      }
    }
    
    // Delete project document
    const projectRef = doc(db, COLLECTION_NAME, id);
    await deleteDoc(projectRef);
  }
};
