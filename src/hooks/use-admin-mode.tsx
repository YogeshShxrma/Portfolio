
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

export function useAdminMode() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { currentUser } = useAuth();
  const isAdmin = !!currentUser;

  useEffect(() => {
    // Handle keyboard shortcut (Ctrl + Shift + L)
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === "L") {
        setShowLoginModal(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    
    // Check for admin-login path
    if (window.location.pathname === "/admin-login") {
      setShowLoginModal(true);
      // Replace the URL to hide the admin-login path
      window.history.replaceState({}, document.title, "/");
    }
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return {
    showLoginModal,
    setShowLoginModal,
    isAdmin
  };
}
