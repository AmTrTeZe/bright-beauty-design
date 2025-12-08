import { Link } from "react-router-dom";
import { useState, useRef, useCallback } from "react";

interface MenuItemProps {
  word: string;
  secondWord: string;
  to: string;
}

const MenuItem = ({ word, secondWord, to }: MenuItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
      timeoutRef.current = null;
    }, 100);
  }, []);

  return (
    <Link
      to={to}
      className="group block py-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center justify-center min-h-[34px] md:min-h-[42px] lg:min-h-[51px]">
        <div className="flex items-center">
          {/* Main word */}
          <span 
            className={`
              text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[0.15em] text-foreground/80 
              transition-all duration-300 ease-out
              ${isHovered ? 'font-normal text-foreground' : 'font-extralight'}
            `}
          >
            {word}
          </span>
          
          {/* Second word - always visible on mobile, animated on desktop */}
          <span className="md:hidden text-xl tracking-[0.15em] text-foreground/60 font-extralight whitespace-nowrap pl-3">
            | {secondWord}
          </span>
          <div 
            className={`
              hidden md:block overflow-hidden transition-all duration-300 ease-out
              ${isHovered ? 'max-w-[500px] opacity-100' : 'max-w-0 opacity-0'}
            `}
          >
            <span 
              className="text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-[0.15em] text-foreground/60 font-extralight whitespace-nowrap pl-4"
            >
              | {secondWord}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MenuItem;
