import { useState, useEffect } from "react";
import logoWhite from "@/assets/logo-trademark-white.png";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start fade out after 3 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 3000);

    // Complete and unmount after fade animation (3s + 1s fade)
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] gradient-trademark flex items-center justify-center transition-opacity duration-1000 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-start px-8 md:px-16">
        {/* Logo */}
        <img 
          src={logoWhite} 
          alt="TRADEMARK" 
          className="h-10 md:h-14 lg:h-16 w-auto mb-6 animate-fade-in"
          style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
        />
        
        {/* Tagline */}
        <p 
          className="text-white/80 text-xs md:text-sm lg:text-base font-extralight tracking-[0.2em] uppercase mb-8 animate-fade-in"
          style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
        >
          BRAND ENGINEERING & BUSINESS EMPOWERMENT ADVISORY
        </p>
        
        {/* Brand Powers Business - aligned right */}
        <div 
          className="self-end text-right text-white font-light tracking-[0.3em] text-sm md:text-base lg:text-lg leading-relaxed animate-fade-in"
          style={{ animationDelay: '1.3s', animationFillMode: 'both' }}
        >
          <div>BRAND</div>
          <div>POWERS</div>
          <div>BUSINESS</div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;