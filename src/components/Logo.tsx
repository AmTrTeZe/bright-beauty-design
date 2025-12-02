import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="text-foreground hover:opacity-80 transition-opacity">
      <svg 
        viewBox="0 0 280 40" 
        className="h-6 md:h-8 w-auto"
        fill="currentColor"
      >
        <text 
          x="0" 
          y="30" 
          fontFamily="Space Grotesk, sans-serif" 
          fontSize="28" 
          fontWeight="300"
          letterSpacing="0.15em"
        >
          TRADEMARK
        </text>
        <text 
          x="248" 
          y="18" 
          fontFamily="Space Grotesk, sans-serif" 
          fontSize="12" 
          fontWeight="300"
        >
          ™
        </text>
      </svg>
    </Link>
  );
};

export default Logo;