import { useState, useEffect } from "react";
import logoWhite from "@/assets/logo-trademark-white.png";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [phase, setPhase] = useState<'logo' | 'tagline' | 'slogan' | 'fadeout' | 'done'>('logo');

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase('tagline'), 800),
      setTimeout(() => setPhase('slogan'), 1600),
      setTimeout(() => setPhase('fadeout'), 3200),
      setTimeout(() => {
        setPhase('done');
        onComplete();
      }, 4200),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] gradient-trademark flex items-center justify-center transition-opacity duration-1000 ease-out ${
        phase === 'fadeout' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Content container - left aligned */}
      <div className="flex flex-col items-start px-8 md:px-16 lg:px-24">
        {/* Logo */}
        <img 
          src={logoWhite} 
          alt="TRADEMARK" 
          className={`h-12 md:h-16 lg:h-20 w-auto mb-6 transition-all duration-700 ease-out ${
            phase !== 'logo' || phase === 'logo' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{
            animation: 'slideUp 0.7s ease-out forwards'
          }}
        />
        
        {/* Tagline - left aligned with logo */}
        <p 
          className={`text-white/80 text-[9px] md:text-xs lg:text-sm font-light tracking-[0.15em] uppercase mb-10 transition-all duration-700 ease-out whitespace-nowrap ${
            phase === 'logo' ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
        >
          BRAND ENGINEERING & BUSINESS EMPOWERMENT ADVISORY
        </p>
        
        {/* Brand Powers Business - aligned right relative to tagline */}
        <div 
          className={`self-end text-right text-white/90 font-light tracking-[0.3em] text-xs md:text-sm lg:text-base leading-relaxed transition-all duration-700 ease-out ${
            phase === 'logo' || phase === 'tagline' ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
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