import { Link } from "react-router-dom";
import logoImage from "@/assets/logo-trademark.png";
import logoWhiteImage from "@/assets/logo-trademark-white.png";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "white";
}

const Logo = ({ className = "", size = "md", variant = "default" }: LogoProps) => {
  const sizeClasses = {
    sm: "h-3 md:h-4",
    md: "h-5 md:h-6",
    lg: "h-6 md:h-8"
  };
  
  const logoSrc = variant === "white" ? logoWhiteImage : logoImage;
  
  return (
    <Link to="/" className={`${className} hover:opacity-80 transition-opacity`}>
      <img 
        src={logoSrc} 
        alt="TRADEMARK" 
        className={`${sizeClasses[size]} w-auto`}
      />
    </Link>
  );
};

export default Logo;
