
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";
import { GondDottedPattern } from "@/components/GondArtElements";
import { useAdminMode } from "@/hooks/use-admin-mode";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();
  const { showLoginModal, setShowLoginModal } = useAdminMode();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/contact", label: "Contact" },
  ];

  // Handler for shift+click on logo
  const handleLogoClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (e.shiftKey) {
      e.preventDefault();
      setShowLoginModal(true);
    }
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500 relative
        ${isScrolled 
          ? (theme === 'light' 
            ? 'bg-gond-light-card/95 backdrop-blur-sm shadow-lg border-b border-gond-light-brown' 
            : 'bg-gond-dark-card/95 backdrop-blur-sm shadow-2xl border-b border-gond-dark-brown')
          : 'bg-transparent'
        }
      `}
    >
      {/* Decorative border pattern */}
      {isScrolled && <div className="gond-border-decorative" />}
      
      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative z-10">
        <NavLink to="/" className="text-xl font-montserrat font-medium relative group">
          <span
            className="gond-text"
            onClick={handleLogoClick}
            tabIndex={0}
            style={{ cursor: "pointer" }}
            title="Shift+Click to open admin login"
          >
            Illuminated
            <span className={theme === 'light' ? 'text-gond-light-purple' : 'text-gond-dark-purple'}>Pixels</span>
          </span>
          
          {/* Decorative dots */}
          <div className={`
            absolute -top-1 -right-2 w-2 h-2 rounded-full transition-all duration-500
            ${theme === 'light' ? 'bg-gond-light-orange' : 'bg-gond-dark-orange animate-glow-orange'}
          `} />
          <div className={`
            absolute -bottom-1 -left-2 w-2 h-2 rounded-full transition-all duration-500
            ${theme === 'light' ? 'bg-gond-light-green' : 'bg-gond-dark-green animate-glow-slow'}
          `} />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-medium transition-all duration-700 ease-out relative group ${
                  isActive 
                    ? (theme === 'light' ? 'text-gond-light-purple' : 'text-gond-dark-purple')
                    : 'gond-text-light hover:gond-text'
                }`
              }
            >
              {link.label}
              {/* Decorative underline */}
              <div className={`
                absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-700 ease-out group-hover:w-full
                ${theme === 'light' ? 'bg-gond-light-orange' : 'bg-gond-dark-orange'}
              `} />
            </NavLink>
          ))}
          
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className={`
              ${theme === 'light' 
                ? 'text-gond-light-text hover:bg-gond-light-cream' 
                : 'text-gond-dark-text hover:bg-gond-dark-cream'
              }
            `}
          >
            <Menu size={24} />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className={`
          md:hidden relative z-20 transition-all duration-500
          ${theme === 'light' 
            ? 'bg-gond-light-card shadow-lg border-t border-gond-light-brown' 
            : 'bg-gond-dark-card shadow-2xl border-t border-gond-dark-brown'
          }
          py-4 px-4 animate-fade-in
        `}>
          <GondDottedPattern />
          <nav className="flex flex-col space-y-4 relative z-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium py-3 px-4 rounded-md transition-all duration-700 ease-out relative transform hover:scale-105 ${
                    isActive
                      ? (theme === 'light' 
                        ? 'bg-gond-light-purple text-white' 
                        : 'bg-gond-dark-purple text-white animate-glow-slow')
                      : (theme === 'light'
                        ? 'gond-text-light hover:bg-gond-light-cream hover:text-gond-light-text'
                        : 'gond-text-light hover:bg-gond-dark-cream hover:text-gond-dark-text')
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

