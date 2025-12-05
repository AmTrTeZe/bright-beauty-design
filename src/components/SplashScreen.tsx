import { useState, useEffect } from "react";
import logoSplash from "@/assets/logo-splash.png";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [phase, setPhase] = useState<'animate' | 'hold' | 'fadeout' | 'done'>('animate');

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase('hold'), 1200),
      setTimeout(() => setPhase('fadeout'), 3000),
      setTimeout(() => {
        setPhase('done');
        onComplete();
      }, 3800),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-[#849aa9] flex items-center justify-center transition-opacity duration-800 ease-out ${
        phase === 'fadeout' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <img 
        src={logoSplash} 
        alt="TRADEMARK - Brand Engineering & Business Empowerment Advisory" 
        className="max-w-[80%] md:max-w-[60%] lg:max-w-[50%] h-auto transition-all duration-1200 ease-out"
        style={{
          opacity: phase === 'animate' ? 0 : 1,
          transform: phase === 'animate' ? 'scale(0.85)' : 'scale(1)',
          transition: 'opacity 1.2s ease-out, transform 1.2s ease-out'
        }}
      />
    </div>
  );
};

export default SplashScreen;
