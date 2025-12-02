import { useEffect, useState, useRef } from "react";
import Logo from "@/components/Logo";
import MenuItem from "@/components/MenuItem";
import Tagline from "@/components/Tagline";

const menuItems = [
  { word: "WHY", secondWord: "PURPOSE", to: "/why" },
  { word: "WHAT", secondWord: "PRACTICES", to: "/what" },
  { word: "HOW", secondWord: "PROCESS", to: "/how" },
  { word: "WHO", secondWord: "EXPERTISE", to: "/who" },
  { word: "WITH", secondWord: "EXPERIENCE", to: "/with" },
  { word: "WHERE", secondWord: "INFORMATION", to: "/where" },
];

const Index = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const maxScroll = 300;

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      setScrollOffset((prev) => {
        const newOffset = prev + e.deltaY * 0.5;
        return Math.max(0, Math.min(maxScroll, newOffset));
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  // Calculate active index based on scroll
  useEffect(() => {
    const progress = scrollOffset / maxScroll;
    const newActiveIndex = Math.floor(progress * menuItems.length);
    setActiveIndex(Math.min(newActiveIndex, menuItems.length - 1));
  }, [scrollOffset]);

  // Calculate menu position - starts at bottom, moves up with scroll
  const menuTranslateY = 200 - (scrollOffset / maxScroll) * 250;

  return (
    <div
      ref={containerRef}
      className="min-h-screen gradient-trademark flex flex-col overflow-hidden"
    >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 md:p-10">
        <Logo />
      </header>

      {/* Menu */}
      <main className="flex-1 flex items-center justify-center">
        <nav
          className="flex flex-col gap-4 md:gap-6 transition-transform duration-700 ease-out"
          style={{ transform: `translateY(${menuTranslateY}px)` }}
        >
          {menuItems.map((item, index) => (
            <MenuItem
              key={item.word}
              word={item.word}
              secondWord={item.secondWord}
              to={item.to}
              isActive={index <= activeIndex}
            />
          ))}
        </nav>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 p-6 md:p-10 flex justify-between items-end">
        <div className="text-foreground/60 text-xs font-extralight tracking-wider">
          TRADEMARK™ | BRAND AS ASSET
        </div>
        <Tagline />
      </footer>
    </div>
  );
};

export default Index;