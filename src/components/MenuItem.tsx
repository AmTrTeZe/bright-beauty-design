import { Link } from "react-router-dom";
import { useState } from "react";

interface MenuItemProps {
  word: string;
  secondWord: string;
  to: string;
  isActive?: boolean;
}

const MenuItem = ({ word, secondWord, to, isActive = false }: MenuItemProps) => {
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
          flex items-center gap-4 transition-all duration-500 ease-out
          ${isHovered ? '-translate-x-4' : 'translate-x-0'}
        `}
      >
        <span 
          className={`
            text-spaced text-2xl md:text-3xl lg:text-4xl tracking-[0.4em] transition-all duration-300
            ${isActive || isHovered ? 'font-medium opacity-100' : 'font-extralight opacity-70'}
          `}
        >
          {word.split('').join(' ')}
        </span>
        
        <span 
          className={`
            text-spaced text-xl md:text-2xl lg:text-3xl tracking-[0.3em] font-extralight
            transition-all duration-500 ease-out whitespace-nowrap
            ${isHovered ? 'opacity-70 translate-x-0' : 'opacity-0 -translate-x-4'}
          `}
        >
          | {secondWord.split('').join(' ')}
        </span>
      </div>
    </Link>
  );
};

export default MenuItem;