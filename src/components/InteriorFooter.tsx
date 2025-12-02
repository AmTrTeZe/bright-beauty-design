import Logo from "@/components/Logo";
import { Link } from "react-router-dom";

const InteriorFooter = () => {
  return (
    <footer className="bg-white px-6 md:px-10 py-4 flex flex-row justify-between items-center gap-4 border-t border-[hsl(200_20%_85%)]">
      <div className="flex items-center gap-3 text-[hsl(200_20%_50%)] text-[10px] md:text-xs font-normal whitespace-nowrap">
        <Logo size="sm" />
        <span className="text-[hsl(200_20%_75%)]">|</span>
        <Link to="/mentions-legales" className="hover:opacity-70 transition-opacity">
          Mentions Légales
        </Link>
        <span className="text-[hsl(200_20%_75%)]">|</span>
        <Link to="/contact" className="hover:opacity-70 transition-opacity">
          Contact
        </Link>
        <span className="text-[hsl(200_20%_75%)]">|</span>
        <span>Villa 25, rue 39, Lot. Laymoune 2 20190 Casablanca</span>
        <span className="text-[hsl(200_20%_75%)]">|</span>
        <span>©Trademark 2025</span>
      </div>
      <div className="text-right text-[hsl(200_20%_50%)] font-normal tracking-wider text-[9px] md:text-[10px] leading-tight shrink-0">
        <div>BRAND</div>
        <div>POWERS</div>
        <div>BUSINESS</div>
      </div>
    </footer>
  );
};

export default InteriorFooter;
