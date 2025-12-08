import { useState } from "react";
import { useLocation } from "react-router-dom";
import MenuItem from "@/components/MenuItem";
import SplashScreen from "@/components/SplashScreen";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import logoSignatureWhite from "@/assets/logo-trademark-home-white.png";

const menuItems = [
  { word: "WHY", secondWord: "PURPOSE", to: "/why" },
  { word: "WHAT", secondWord: "PRACTICES", to: "/what" },
  { word: "HOW", secondWord: "PROCESS", to: "/how" },
  { word: "WHO", secondWord: "EXPERTISE", to: "/who" },
  { word: "WITH", secondWord: "EXPERIENCE", to: "/with" },
  { word: "WHERE", secondWord: "INFORMATION", to: "/where" },
];

const Index = () => {
  const location = useLocation();
  const skipSplash = location.state?.skipSplash === true;
  const [showSplash, setShowSplash] = useState(!skipSplash);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "TRADEMARK",
    "description": "Cabinet conseil en ingénierie de marque - Brand Engineering & Business Empowerment Advisory",
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
    "areaServed": ["Maroc", "Côte d'Ivoire", "Afrique francophone"],
    "serviceType": ["Brand Engineering", "Business Empowerment", "Conseil en stratégie de marque"]
  };

  return (
    <>
      <SEO 
        title="Accueil - Brand Powers Business"
        description="TRADEMARK™ - Cabinet conseil en ingénierie de marque. Brand Engineering & Business Empowerment. La marque comme vecteur de sens et levier de performance à Casablanca, Maroc."
        keywords="brand engineering, conseil en marque, stratégie de marque, business empowerment, TRADEMARK, Casablanca, Maroc, Afrique, branding"
        canonicalUrl="https://trademark.ma/"
        structuredData={structuredData}
      />
      
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      
      <div className="min-h-screen gradient-trademark-home flex flex-col">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 md:p-10 pointer-events-none">
          <div className="pointer-events-auto">
            <Link to="/" state={{ skipSplash: true }}>
              <img 
                src={logoSignatureWhite} 
                alt="TRADEMARK" 
                className="h-[18px] md:h-[26px] w-auto"
              />
            </Link>
          </div>
        </header>

        {/* Menu - centered */}
        <main className="flex-1 flex items-center justify-center pt-[60px] pb-[140px] md:pt-[15px] md:pb-0">
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
            <div>BRAND</div>
            <div>POWERS</div>
            <div>BUSINESS</div>
          </div>
        </div>

        {/* Footer */}
        <footer className="fixed bottom-0 left-0 right-0 px-6 md:px-10 py-3 flex justify-center items-center bg-transparent">
          <div className="flex items-center gap-3 text-foreground/70 text-[11px] md:text-sm font-normal whitespace-nowrap">
            <Link to="/mentions-legales" className="hover:opacity-70 transition-opacity">
              MENTIONS LÉGALES
            </Link>
            <span className="text-foreground/40">|</span>
            <Link to="/contact" className="hover:opacity-70 transition-opacity">
              CONTACT
            </Link>
            <span className="text-foreground/40">|</span>
            <span>©TRADEMARK™</span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
