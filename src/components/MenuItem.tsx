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
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`
          flex items-center transition-all duration-500 ease-out
          ${isHovered ? '-translate-x-8' : 'translate-x-0'}
        `}
      >
        <span 
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-[0.5em] text-foreground/80 hover:text-foreground transition-colors duration-300"
        >
          {word.split('').join(' ')}
        </span>
        
        <span 
          className={`
            text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light tracking-[0.4em] text-foreground/60
            transition-all duration-500 ease-out whitespace-nowrap ml-8
            ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
          `}
        >
          | {secondWord.split('').join(' ')}
        </span>
      </div>
    </Link>
  );
};

export default MenuItem;