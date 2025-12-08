import { Link, useLocation } from "react-router-dom";
import logoImage from "@/assets/logo-trademark.png";
import logoWhiteImage from "@/assets/logo-trademark-white.png";
import logoGrayImage from "@/assets/logo-trademark-gray.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "white" | "gray";
}

const Logo = ({ className = "", size = "md", variant = "default" }: LogoProps) => {
  const location = useLocation();
  const { language } = useLanguage();
  
  const isHomePage = location.pathname === "/" || location.pathname === "/en";
  const homeLink = language === "en" ? "/en" : "/";
  
  const sizeClasses = {
    sm: "h-7 md:h-[35px]",
    md: "h-10 md:h-12",
    lg: "h-6 md:h-8"
  };
  
  const logoSrc = variant === "white" ? logoWhiteImage : variant === "gray" ? logoGrayImage : logoImage;
  
  // If already on home, just render the logo without link
  if (isHomePage) {
    return (
      <div className={`${className}`}>
      <img 
          src={logoSrc} 
          alt="TRADEMARK™" 
          className={`${sizeClasses[size]} w-auto`}
          loading="eager"
          decoding="sync"
        />
      </div>
    );
  }
  
  return (
    <Link 
      to={homeLink} 
      state={{ skipSplash: true }}
      className={`${className} hover:opacity-80 transition-opacity`}
    >
      <img 
        src={logoSrc} 
        alt="TRADEMARK™" 
        className={`${sizeClasses[size]} w-auto`}
        loading="eager"
        decoding="sync"
      />
    </Link>
  );
};

export default Logo;