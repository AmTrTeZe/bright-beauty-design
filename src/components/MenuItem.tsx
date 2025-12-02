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
      <div className="relative flex items-center justify-center h-[50px] md:h-[60px] lg:h-[70px]">
        {/* Main word - always centered */}
        <span 
          className={`
            text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-[0.15em] text-foreground/80 
            transition-all duration-300 ease-out text-center
            ${isHovered ? 'font-normal text-foreground' : 'font-extralight'}
          `}
        >
          {word}
        </span>
        
        {/* Second word - positioned absolutely to not affect centering */}
        <span 
          className={`
            absolute left-[calc(50%+60px)] md:left-[calc(50%+80px)] lg:left-[calc(50%+100px)]
            text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[0.15em] text-foreground/60
            transition-all duration-300 ease-out font-extralight whitespace-nowrap
            ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}
          `}
        >
          | {secondWord}
        </span>
      </div>
    </Link>
  );
};

export default MenuItem;
