import Logo from "@/components/Logo";
import { Link } from "react-router-dom";

const InteriorFooter = () => {
  return (
    <footer className="bg-white px-6 md:px-10 py-4 flex flex-col md:flex-row justify-between items-center gap-3 border-t border-[hsl(200_20%_85%)]">
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-3 text-[hsl(200_20%_50%)] text-[9px] md:text-[10px] font-normal">
        <Logo size="sm" />
        <span className="hidden md:inline text-[hsl(200_20%_75%)]">|</span>
        <Link to="/mentions-legales" className="hover:opacity-70 transition-opacity">
          Mentions Légales
        </Link>
        <span className="text-[hsl(200_20%_75%)]">|</span>
        <Link to="/contact" className="hover:opacity-70 transition-opacity">
          Contact
        </Link>
        <span className="hidden lg:inline text-[hsl(200_20%_75%)]">|</span>
        <span className="hidden lg:inline">Villa 25, rue 39, Lot. Laymoune 2 20190 Casablanca</span>
        <span className="text-[hsl(200_20%_75%)]">|</span>
        <span>©Trademark 2025</span>
      </div>
      <div className="text-right text-[hsl(200_20%_50%)] font-normal tracking-wider text-[8px] md:text-[9px] leading-tight whitespace-nowrap">
        <span>BRAND POWERS BUSINESS</span>
      </div>
    </footer>
  );
};

export default InteriorFooter;
