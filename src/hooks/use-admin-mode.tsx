
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";

export function useAdminMode() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { currentUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const isAdmin = !!currentUser;
  
  useEffect(() => {
    // Handle keyboard shortcut (Ctrl + Shift + A)
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === "A") {
        if (isAdmin) {
          navigate("/admin");
        } else {
          setShowLoginModal(true);
          toast({
            title: "Admin Access",
            description: "Please login to access the admin area",
          });
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    
    // Check if we're at the admin-login path
    if (location.pathname === "/admin-login") {
      setShowLoginModal(true);
    }
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isAdmin, navigate, location.pathname]);

  return {
    showLoginModal,
    setShowLoginModal,
    isAdmin
  };
}
