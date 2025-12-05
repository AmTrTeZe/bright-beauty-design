import { useState, useEffect } from "react";
import logoGray from "@/assets/logo-trademark-gray.jpeg";

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
      className={`fixed inset-0 z-[100] bg-white flex items-center justify-center transition-opacity duration-1000 ease-out ${
        phase === 'fadeout' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-start px-8 md:px-16">
        {/* Logo and Tagline container - tagline constrained to logo width */}
        <div className="flex flex-col items-start">
          <img 
            src={logoGray} 
            alt="TRADEMARK" 
            className={`h-10 md:h-14 lg:h-16 w-auto mb-4 transition-all duration-700 ease-out ${
              phase !== 'logo' || phase === 'logo' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{
              animation: 'slideUp 0.7s ease-out forwards'
            }}
          />
          
          {/* Tagline - constrained to logo width */}
          <p 
            className={`text-[#849aa9] text-[8px] md:text-[10px] lg:text-xs font-light tracking-[0.1em] uppercase mb-8 transition-all duration-700 ease-out text-left max-w-[200px] md:max-w-[280px] lg:max-w-[320px] leading-relaxed ${
              phase === 'logo' ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            BRAND ENGINEERING & BUSINESS EMPOWERMENT ADVISORY
          </p>
        </div>
        
        {/* Brand Powers Business - aligned right */}
        <div 
          className={`self-end text-right text-[#849aa9] font-light tracking-[0.25em] text-xs md:text-sm lg:text-base leading-loose transition-all duration-700 ease-out ${
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