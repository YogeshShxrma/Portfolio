
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={`
        relative w-12 h-12 rounded-full border-2 transition-all duration-500 
        ${theme === 'light' 
          ? 'bg-gond-light-cream border-gond-light-orange text-gond-light-orange hover:bg-gond-light-orange hover:text-white' 
          : 'bg-gond-dark-card border-gond-dark-orange text-gond-dark-orange hover:bg-gond-dark-orange hover:text-gond-dark-bg'
        }
        hover:animate-glow-orange
      `}
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Sun 
          className={`
            absolute inset-0 transition-all duration-500 
            ${theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-0'}
          `}
          size={24}
        />
        <Moon 
          className={`
            absolute inset-0 transition-all duration-500 
            ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'}
          `}
          size={24}
        />
      </div>
      
      {/* Gond art decorative dots */}
      <div className={`
        absolute -top-1 -right-1 w-2 h-2 rounded-full transition-colors duration-500
        ${theme === 'light' ? 'bg-gond-light-purple' : 'bg-gond-dark-purple animate-glow-slow'}
      `} />
      <div className={`
        absolute -bottom-1 -left-1 w-2 h-2 rounded-full transition-colors duration-500
        ${theme === 'light' ? 'bg-gond-light-green' : 'bg-gond-dark-green animate-glow-slow'}
      `} />
    </Button>
  );
};

export default ThemeToggle;
