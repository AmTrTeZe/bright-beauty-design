import { Link, useLocation } from "react-router-dom";
import logoImage from "@/assets/logo-trademark.png";
import logoWhiteImage from "@/assets/logo-trademark-white.png";
import logoGrayImage from "@/assets/logo-trademark-gray.jpeg";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "white" | "gray";
}

const Logo = ({ className = "", size = "md", variant = "default" }: LogoProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  const sizeClasses = {
    sm: "h-3 md:h-4",
    md: "h-5 md:h-6",
    lg: "h-6 md:h-8"
  };
  
  const logoSrc = variant === "white" ? logoWhiteImage : variant === "gray" ? logoGrayImage : logoImage;
  
  // If already on home, just render the logo without link
  if (isHomePage) {
    return (
      <div className={`${className}`}>
        <img 
          src={logoSrc} 
          alt="TRADEMARK" 
          className={`${sizeClasses[size]} w-auto`}
        />
      </div>
    );
  }
  
  return (
    <Link 
      to="/" 
      state={{ skipSplash: true }}
      className={`${className} hover:opacity-80 transition-opacity`}
    >
      <img 
        src={logoSrc} 
        alt="TRADEMARK" 
        className={`${sizeClasses[size]} w-auto`}
      />
    </Link>
  );
};

export default Logo;
