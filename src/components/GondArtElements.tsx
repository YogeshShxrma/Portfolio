
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export const GondTree: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`relative ${className}`}>
      <svg 
        viewBox="0 0 200 300" 
        className={`w-full h-full transition-all duration-500 ${
          theme === 'dark' ? 'drop-shadow-lg' : ''
        }`}
      >
        {/* Tree trunk */}
        <rect 
          x="90" 
          y="180" 
          width="20" 
          height="120" 
          className={theme === 'light' ? 'fill-gond-light-green' : 'fill-gond-dark-green'}
          rx="10"
        />
        
        {/* Tree branches */}
        <circle 
          cx="100" 
          cy="120" 
          r="80" 
          className={`transition-all duration-500 ${
            theme === 'light' ? 'fill-gond-light-purple' : 'fill-gond-dark-purple'
          } ${theme === 'dark' ? 'animate-glow-slow' : ''}`}
        />
        
        {/* Decorative dots on leaves */}
        {[...Array(12)].map((_, i) => (
          <circle
            key={i}
            cx={60 + (i % 4) * 20}
            cy={80 + Math.floor(i / 4) * 20}
            r="3"
            className={theme === 'light' ? 'fill-gond-light-cream' : 'fill-gond-dark-cream'}
          />
        ))}
        
        {/* Small bird */}
        <ellipse 
          cx="140" 
          cy="100" 
          rx="8" 
          ry="5" 
          className={theme === 'light' ? 'fill-gond-light-blue' : 'fill-gond-dark-blue'}
        />
        <circle 
          cx="145" 
          cy="98" 
          r="2" 
          className={theme === 'light' ? 'fill-gond-light-text' : 'fill-gond-dark-text'}
        />
      </svg>
    </div>
  );
};

export const GondPeacock: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`relative ${className} animate-peacock-float`}>
      <svg viewBox="0 0 300 200" className="w-full h-full">
        {/* Peacock body */}
        <ellipse 
          cx="150" 
          cy="120" 
          rx="30" 
          ry="50" 
          className={`transition-all duration-500 ${
            theme === 'light' ? 'fill-gond-light-blue' : 'fill-gond-dark-blue'
          } ${theme === 'dark' ? 'animate-glow-slow' : ''}`}
        />
        
        {/* Peacock neck */}
        <ellipse 
          cx="150" 
          cy="80" 
          rx="15" 
          ry="25" 
          className={theme === 'light' ? 'fill-gond-light-blue' : 'fill-gond-dark-blue'}
        />
        
        {/* Peacock head */}
        <circle 
          cx="150" 
          cy="60" 
          r="12" 
          className={theme === 'light' ? 'fill-gond-light-blue' : 'fill-gond-dark-blue'}
        />
        
        {/* Tail feathers */}
        {[...Array(5)].map((_, i) => (
          <g key={i}>
            <ellipse
              cx={120 + i * 15}
              cy={140}
              rx="8"
              ry="40"
              className={`transition-all duration-500 ${
                i % 2 === 0 
                  ? (theme === 'light' ? 'fill-gond-light-purple' : 'fill-gond-dark-purple')
                  : (theme === 'light' ? 'fill-gond-light-orange' : 'fill-gond-dark-orange')
              }`}
              transform={`rotate(${-20 + i * 10} ${120 + i * 15} 140)`}
            />
            {/* Decorative eye on feather */}
            <circle
              cx={120 + i * 15}
              cy={120}
              r="4"
              className={theme === 'light' ? 'fill-gond-light-text' : 'fill-gond-dark-text'}
            />
          </g>
        ))}
        
        {/* Decorative patterns on body */}
        {[...Array(6)].map((_, i) => (
          <circle
            key={i}
            cx={140 + (i % 2) * 20}
            cy={110 + Math.floor(i / 2) * 10}
            r="2"
            className={theme === 'light' ? 'fill-gond-light-cream' : 'fill-gond-dark-cream'}
          />
        ))}
      </svg>
    </div>
  );
};

export const GondHut: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 200 150" className="w-full h-full">
        {/* Hut base */}
        <rect 
          x="50" 
          y="80" 
          width="100" 
          height="70" 
          className={theme === 'light' ? 'fill-gond-light-orange' : 'fill-gond-dark-orange'}
          rx="5"
        />
        
        {/* Thatched roof */}
        <polygon 
          points="40,80 100,40 160,80" 
          className={theme === 'light' ? 'fill-gond-light-brown' : 'fill-gond-dark-brown'}
        />
        
        {/* Door */}
        <rect 
          x="85" 
          y="110" 
          width="30" 
          height="40" 
          className={theme === 'light' ? 'fill-gond-light-brown' : 'fill-gond-dark-brown'}
          rx="15"
        />
        
        {/* Window */}
        <circle 
          cx="70" 
          cy="100" 
          r="8" 
          className={theme === 'light' ? 'fill-gond-light-blue' : 'fill-gond-dark-blue'}
        />
        
        {/* Decorative roof patterns */}
        {[...Array(8)].map((_, i) => (
          <line
            key={i}
            x1={50 + i * 12}
            y1={60 + i * 2}
            x2={50 + i * 12}
            y2={75 + i * 2}
            className={theme === 'light' ? 'stroke-gond-light-text' : 'stroke-gond-dark-text'}
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
};

export const GondPots: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 150 100" className="w-full h-full">
        {/* Large pot */}
        <ellipse 
          cx="70" 
          cy="80" 
          rx="25" 
          ry="15" 
          className={theme === 'light' ? 'fill-gond-light-brown' : 'fill-gond-dark-brown'}
        />
        <ellipse 
          cx="70" 
          cy="60" 
          rx="20" 
          ry="25" 
          className={theme === 'light' ? 'fill-gond-light-brown' : 'fill-gond-dark-brown'}
        />
        
        {/* Small pot */}
        <ellipse 
          cx="110" 
          cy="85" 
          rx="15" 
          ry="10" 
          className={theme === 'light' ? 'fill-gond-light-orange' : 'fill-gond-dark-orange'}
        />
        <ellipse 
          cx="110" 
          cy="70" 
          rx="12" 
          ry="18" 
          className={theme === 'light' ? 'fill-gond-light-orange' : 'fill-gond-dark-orange'}
        />
        
        {/* Decorative patterns */}
        {[...Array(4)].map((_, i) => (
          <circle
            key={i}
            cx={60 + i * 5}
            cy={55 + i * 2}
            r="1.5"
            className={theme === 'light' ? 'fill-gond-light-cream' : 'fill-gond-dark-cream'}
          />
        ))}
      </svg>
    </div>
  );
};

export const GondDottedPattern: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <svg className="w-full h-full opacity-20">
        <defs>
          <pattern id="gondDots" patternUnits="userSpaceOnUse" width="40" height="40">
            <circle 
              cx="20" 
              cy="20" 
              r="2" 
              className={theme === 'light' ? 'fill-gond-light-purple' : 'fill-gond-dark-purple'}
            />
            <circle 
              cx="10" 
              cy="10" 
              r="1" 
              className={theme === 'light' ? 'fill-gond-light-orange' : 'fill-gond-dark-orange'}
            />
            <circle 
              cx="30" 
              cy="10" 
              r="1" 
              className={theme === 'light' ? 'fill-gond-light-blue' : 'fill-gond-dark-blue'}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gondDots)" />
      </svg>
    </div>
  );
};
