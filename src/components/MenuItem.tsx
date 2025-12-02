import { Link } from "react-router-dom";
import { useState } from "react";

interface MenuItemProps {
  word: string;
  secondWord: string;
  to: string;
}

const MenuItem = ({ word, secondWord, to }: MenuItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={to}
      className="group block text-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center transition-all duration-500 ease-out">
        <span 
          className={`
            text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-[0.5em] text-foreground/80 
            transition-all duration-300
            ${isHovered ? 'font-medium text-foreground' : 'font-light'}
          `}
        >
          {word.split('').join(' ')}
        </span>
        
        <span 
          className={`
            text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light tracking-[0.4em] text-foreground/60
            transition-all duration-500 ease-out whitespace-nowrap overflow-hidden
            ${isHovered ? 'opacity-100 max-w-[500px] ml-6' : 'opacity-0 max-w-0 ml-0'}
          `}
        >
          | {secondWord.split('').join(' ')}
        </span>
      </div>
    </Link>
  );
};

export default MenuItem;