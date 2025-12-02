import Logo from "@/components/Logo";
import MenuItem from "@/components/MenuItem";
import { Link } from "react-router-dom";

const menuItems = [
  { word: "WHY", secondWord: "PURPOSE", to: "/why" },
  { word: "WHAT", secondWord: "PRACTICES", to: "/what" },
  { word: "HOW", secondWord: "PROCESS", to: "/how" },
  { word: "WHO", secondWord: "EXPERTISE", to: "/who" },
  { word: "WITH", secondWord: "EXPERIENCE", to: "/with" },
  { word: "WHERE", secondWord: "INFORMATION", to: "/where" },
];

const Index = () => {
  return (
    <div className="min-h-screen gradient-trademark flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 md:p-10">
        <Logo />
      </header>

      {/* Menu - centered */}
      <main className="flex-1 flex items-center justify-center">
        <nav className="flex flex-col gap-3 md:gap-4">
          {menuItems.map((item) => (
            <MenuItem
              key={item.word}
              word={item.word}
              secondWord={item.secondWord}
              to={item.to}
            />
          ))}
        </nav>
      </main>

      {/* Footer */}
      <footer className="px-6 md:px-10 py-4 flex flex-row justify-between items-center border-t border-foreground/10">
        <Logo size="sm" />
        
        <div className="flex items-center gap-3 text-foreground/70 text-[10px] md:text-xs font-normal whitespace-nowrap">
          <Link to="/mentions-legales" className="hover:opacity-70 transition-opacity">
            Mentions Légales
          </Link>
          <span className="text-foreground/40">|</span>
          <Link to="/contact" className="hover:opacity-70 transition-opacity">
            Contact
          </Link>
          <span className="text-foreground/40">|</span>
          <span>Villa 25, rue 39, Lot. Laymoune 2 20190 Casablanca</span>
          <span className="text-foreground/40">|</span>
          <span>©Trademark 2025</span>
        </div>
        
        <div className="text-right text-foreground/70 font-normal tracking-wider text-[9px] md:text-[10px] leading-tight shrink-0">
          <div>BRAND</div>
          <div>POWERS</div>
          <div>BUSINESS</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;