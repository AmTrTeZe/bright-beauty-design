import { Link } from "react-router-dom";
import logoImage from "@/assets/logo-trademark.png";

interface LogoProps {
  className?: string;
  size?: "sm" | "md";
}

const Logo = ({ className = "", size = "md" }: LogoProps) => {
  const sizeClasses = size === "sm" ? "h-3 md:h-4" : "h-5 md:h-6";
  
  return (
    <Link to="/" className={`${className} hover:opacity-80 transition-opacity`}>
      <img 
        src={logoImage} 
        alt="TRADEMARK" 
        className={`${sizeClasses} w-auto`}
      />
    </Link>
  );
};

export default Logo;
