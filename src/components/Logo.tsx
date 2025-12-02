import { Link } from "react-router-dom";
import logoImage from "@/assets/logo-trademark.png";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <Link to="/" className={`${className} hover:opacity-80 transition-opacity`}>
      <img 
        src={logoImage} 
        alt="TRADEMARK" 
        className="h-5 md:h-6 w-auto"
      />
    </Link>
  );
};

export default Logo;
