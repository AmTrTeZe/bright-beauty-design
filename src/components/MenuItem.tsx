import { Link } from "react-router-dom";
import { useState, useRef } from "react";

interface MenuItemProps {
  word: string;
  secondWord: string;
  to: string;
}

const MenuItem = ({ word, secondWord, to }: MenuItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 50);
  };

  return (
    <Link
      to={to}
      className="group block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center justify-center h-[50px] md:h-[60px] lg:h-[70px]">
        <div className="flex items-center transition-all duration-300 ease-out">
          {/* Main word */}
          <span 
            className={`
              text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-[0.15em] text-foreground/80 
              transition-all duration-300 ease-out
              ${isHovered ? 'font-normal text-foreground' : 'font-extralight'}
            `}
          >
            {word}
          </span>
          
          {/* Second word - width animates from 0 */}
          <div 
            className={`
              overflow-hidden transition-all duration-300 ease-out
              ${isHovered ? 'max-w-[500px] opacity-100' : 'max-w-0 opacity-0'}
            `}
          >
            <span 
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[0.15em] text-foreground/60 font-extralight whitespace-nowrap pl-4"
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
