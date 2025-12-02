import Logo from "@/components/Logo";
import { Link } from "react-router-dom";

const InteriorFooter = () => {
  return (
    <footer className="bg-white px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-[hsl(200_20%_85%)]">
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-4 text-[hsl(200_20%_50%)] text-[10px] md:text-xs font-normal">
        <Logo />
        <span className="hidden md:inline text-[hsl(200_20%_75%)]">|</span>
        <Link to="/mentions-legales" className="hover:opacity-70 transition-opacity">
          Mentions Légales
        </Link>
        <span className="text-[hsl(200_20%_75%)]">|</span>
        <span className="hidden lg:inline">Villa 34, rue 29, Lot. Layayda 2 22740 Casablanca</span>
        <span className="hidden lg:inline text-[hsl(200_20%_75%)]">|</span>
        <Link to="/contact" className="hover:opacity-70 transition-opacity">
          Contact
        </Link>
        <span className="text-[hsl(200_20%_75%)]">|</span>
        <span>©Trademark 2025</span>
      </div>
      <div className="text-right text-[hsl(200_20%_50%)] font-normal tracking-wider text-[10px] md:text-xs leading-tight">
        <div>BRAND</div>
        <div>POWERS</div>
        <div>BUSINESS</div>
      </div>
    </footer>
  );
};

export default InteriorFooter;
