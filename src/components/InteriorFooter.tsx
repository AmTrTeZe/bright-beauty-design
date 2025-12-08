import Logo from "@/components/Logo";
import { Link } from "react-router-dom";

const InteriorFooter = () => {
  return (
    <footer className="bg-white px-4 md:px-10 py-4 border-t border-[hsl(200_20%_85%)]">
      {/* Mobile layout */}
      <div className="flex flex-col gap-3 md:hidden">
        <div className="flex justify-between items-center">
          <Logo size="sm" variant="gray" />
          <div className="text-right text-[hsl(200_20%_50%)] font-light tracking-wider text-[10px] leading-tight">
            <div>BRAND</div>
            <div>POWERS</div>
            <div>BUSINESS</div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-2 text-[hsl(200_20%_50%)] text-[10px] font-light">
          <Link to="/mentions-legales" className="hover:opacity-70 transition-opacity">
            MENTIONS LÉGALES
          </Link>
          <span className="text-[hsl(200_20%_75%)]">|</span>
          <Link to="/where" className="hover:opacity-70 transition-opacity">
            CONTACT
          </Link>
          <span className="text-[hsl(200_20%_75%)]">|</span>
          <span>©TRADEMARK™</span>
        </div>
      </div>
      
      {/* Desktop layout */}
      <div className="hidden md:flex flex-row justify-between items-center">
        <Logo size="sm" variant="gray" />
        
        <div className="flex items-center gap-3 text-[hsl(200_20%_50%)] text-[11px] lg:text-sm font-light whitespace-nowrap">
          <Link to="/mentions-legales" className="hover:opacity-70 transition-opacity">
            MENTIONS LÉGALES
          </Link>
          <span className="text-[hsl(200_20%_75%)]">|</span>
          <Link to="/where" className="hover:opacity-70 transition-opacity">
            CONTACT
          </Link>
          <span className="text-[hsl(200_20%_75%)]">|</span>
          <span>©TRADEMARK™</span>
        </div>
        
        <div className="text-right text-[hsl(200_20%_50%)] font-light tracking-wider text-[10px] lg:text-[11px] leading-tight shrink-0">
          <div>BRAND</div>
          <div>POWERS</div>
          <div>BUSINESS</div>
        </div>
      </div>
    </footer>
  );
};

export default InteriorFooter;
