
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioFilter, { Category } from "@/components/PortfolioFilter";
import PortfolioGrid from "@/components/PortfolioGrid";
import AdminLogin from "@/components/AdminLogin";
import AdminControls from "@/components/AdminControls";
import { useAdminMode } from "@/hooks/use-admin-mode";
import { useAuth } from "@/contexts/AuthContext";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const { showLoginModal, setShowLoginModal, isAdmin } = useAdminMode();
  const { logout } = useAuth();

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const triggerRefresh = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  // Re-render when the refresh trigger changes
  useEffect(() => {
    // This effect is just to trigger a re-render when refreshTrigger changes
  }, [refreshTrigger]);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-4xl md:text-5xl font-bold">Portfolio</h1>
            </div>
            <p className="text-gray-600 text-lg mb-8">
              Explore my work across photography, videography, and graphic design.
            </p>
            
            <PortfolioFilter
              onCategoryChange={handleCategoryChange}
              activeCategory={activeCategory}
            />
            
            <PortfolioGrid
              key={refreshTrigger}
              category={activeCategory}
            />
          </div>
        </div>
      </main>
      
      {/* Admin Login Modal */}
      <AdminLogin 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
      
      {/* Admin Controls */}
      {isAdmin && (
        <AdminControls 
          onAddProject={triggerRefresh}
          onLogout={handleLogout}
        />
      )}
      
      <Footer />
    </>
  );
};

export default Portfolio;
