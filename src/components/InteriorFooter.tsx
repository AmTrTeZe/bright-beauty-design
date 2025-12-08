import Logo from "@/components/Logo";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const InteriorFooter = () => {
  const { language, t, switchLanguage } = useLanguage();
  
  const mentionsPath = language === "en" ? "/en/legal-notice" : "/mentions-legales";
  const contactPath = language === "en" ? "/en/where" : "/where";
  const langButton = language === "fr" ? "EN" : "FR";

  return (
    <footer className="bg-white px-4 md:px-10 py-4 border-t border-[hsl(200_20%_85%)]">
      {/* Mobile layout */}
      <div className="flex flex-col gap-3 md:hidden">
        <div className="flex justify-between items-center">
          <Logo size="sm" variant="gray" />
          <div className="text-right text-[hsl(200_20%_50%)] font-light tracking-wider text-[10px] leading-tight">
            <div>{t("brand.line1")}</div>
            <div>{t("brand.line2")}</div>
            <div>{t("brand.line3")}</div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-2 text-[hsl(200_20%_50%)] text-[10px] font-light">
          <button 
            onClick={switchLanguage}
            className="hover:opacity-70 transition-opacity"
          >
            {langButton}
          </button>
          <span className="text-[hsl(200_20%_75%)]">|</span>
          <Link to={contactPath} className="hover:opacity-70 transition-opacity">
            {t("nav.contact")}
          </Link>
          <span className="text-[hsl(200_20%_75%)]">|</span>
          <Link to={mentionsPath} className="hover:opacity-70 transition-opacity">
            {t("nav.mentionsLegales")}
          </Link>
          <span className="text-[hsl(200_20%_75%)]">|</span>
          <span>{t("nav.copyright")}</span>
        </div>
      </div>
      
      {/* Desktop layout */}
      <div className="hidden md:flex flex-row justify-between items-center">
        <Logo size="sm" variant="gray" />
        
        <div className="flex items-center gap-3 text-[hsl(200_20%_50%)] text-[11px] lg:text-sm font-light whitespace-nowrap">
          <button 
            onClick={switchLanguage}
            className="hover:opacity-70 transition-opacity"
          >
            {langButton}
          </button>
          <span className="text-[hsl(200_20%_75%)]">|</span>
          <Link to={contactPath} className="hover:opacity-70 transition-opacity">
            {t("nav.contact")}
          </Link>
          <span className="text-[hsl(200_20%_75%)]">|</span>
          <Link to={mentionsPath} className="hover:opacity-70 transition-opacity">
            {t("nav.mentionsLegales")}
          </Link>
          <span className="text-[hsl(200_20%_75%)]">|</span>
          <span>{t("nav.copyright")}</span>
        </div>
        
        <div className="text-right text-[hsl(200_20%_50%)] font-light tracking-wider text-[10px] lg:text-[11px] leading-tight shrink-0">
          <div>{t("brand.line1")}</div>
          <div>{t("brand.line2")}</div>
          <div>{t("brand.line3")}</div>
        </div>
      </div>
    </footer>
  );
};

export default InteriorFooter;
