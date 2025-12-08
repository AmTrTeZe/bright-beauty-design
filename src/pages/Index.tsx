import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import MenuItem from "@/components/MenuItem";
import SplashScreen from "@/components/SplashScreen";
import SEO from "@/components/SEO";
import logoSignatureWhite from "@/assets/logo-trademark-home-white.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const location = useLocation();
  const skipSplash = location.state?.skipSplash === true;
  const [showSplash, setShowSplash] = useState(!skipSplash);
  const { language, t, switchLanguage } = useLanguage();

  const prefix = language === "en" ? "/en" : "";
  const langButton = language === "fr" ? "EN" : "FR";
  const mentionsPath = language === "en" ? "/en/legal-notice" : "/mentions-legales";

  const menuItems = [
    { word: t("menu.why.word"), secondWord: t("menu.why.secondWord"), to: `${prefix}/why` },
    { word: t("menu.what.word"), secondWord: t("menu.what.secondWord"), to: `${prefix}/what` },
    { word: t("menu.how.word"), secondWord: t("menu.how.secondWord"), to: `${prefix}/how` },
    { word: t("menu.who.word"), secondWord: t("menu.who.secondWord"), to: `${prefix}/who` },
    { word: t("menu.with.word"), secondWord: t("menu.with.secondWord"), to: `${prefix}/with` },
    { word: t("menu.where.word"), secondWord: t("menu.where.secondWord"), to: `${prefix}/where` },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "TRADEMARK",
    "description": language === "fr" 
      ? "Cabinet conseil en ingénierie de marque - Brand Engineering & Business Empowerment Advisory"
      : "Brand engineering consulting firm - Brand Engineering & Business Empowerment Advisory",
    "url": "https://trademark.ma",
    "logo": "https://trademark.ma/logo-trademark.png",
    "slogan": "Brand Powers Business",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Villa 25, rue 39, Lotissement Laymoune 2",
      "addressLocality": "Casablanca",
      "postalCode": "20190",
      "addressCountry": "MA"
    },
    "areaServed": language === "fr" 
      ? ["Maroc", "Côte d'Ivoire", "Afrique francophone"]
      : ["Morocco", "Ivory Coast", "French-speaking Africa"],
    "serviceType": ["Brand Engineering", "Business Empowerment", language === "fr" ? "Conseil en stratégie de marque" : "Brand strategy consulting"]
  };

  return (
    <>
      <SEO 
        title={t("seo.home.title")}
        description={t("seo.home.description")}
        keywords="brand engineering, conseil en marque, stratégie de marque, business empowerment, TRADEMARK, Casablanca, Maroc, Afrique, branding"
        canonicalUrl={`https://trademark.ma${prefix}/`}
        structuredData={structuredData}
      />
      
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      
      <div className="min-h-screen gradient-trademark-home flex flex-col">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 md:p-10 pointer-events-none">
          <div className="pointer-events-auto">
            <Link to={prefix || "/"} state={{ skipSplash: true }}>
              <img 
                src={logoSignatureWhite} 
                alt="TRADEMARK" 
                className="h-[18px] md:h-[26px] w-auto"
              />
            </Link>
          </div>
        </header>

        {/* Menu - centered */}
        <main className="flex-1 flex items-center justify-center pt-[60px] pb-[170px] md:pt-[15px] md:pb-0">
          <nav aria-label="Navigation principale" className="flex flex-col gap-3 md:gap-4">
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

        {/* Brand Powers Business - bottom right */}
        <div className="fixed bottom-12 right-[39px] md:right-[55px] z-40">
          <div className="text-right text-foreground/80 text-[14px] md:text-[16px] font-extralight leading-tight tracking-wider">
            <div>{t("brand.line1")}</div>
            <div>{t("brand.line2")}</div>
            <div>{t("brand.line3")}</div>
          </div>
        </div>

        {/* Footer */}
        <footer className="fixed bottom-0 left-0 right-0 px-6 md:px-10 py-3 flex justify-center items-center bg-transparent">
          <div className="flex items-center gap-3 text-foreground/70 text-[11px] md:text-sm font-normal whitespace-nowrap">
            <button 
              onClick={switchLanguage}
              className="hover:opacity-70 transition-opacity"
            >
              {langButton}
            </button>
            <span className="text-foreground/40">|</span>
            <Link to={`${prefix}/where`} className="hover:opacity-70 transition-opacity">
              {t("nav.contact")}
            </Link>
            <span className="text-foreground/40">|</span>
            <Link to={mentionsPath} className="hover:opacity-70 transition-opacity">
              {t("nav.mentionsLegales")}
            </Link>
            <span className="text-foreground/40">|</span>
            <span>{t("nav.copyright")}</span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
