import { useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "@/components/Logo";
import MenuItem from "@/components/MenuItem";
import SplashScreen from "@/components/SplashScreen";
import SEO from "@/components/SEO";
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
      "streetAddress": "Villa 25, rue 39, Lot. Laymoune 2",
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
            <Logo variant="white" size="lg" />
          </div>
        </header>

        {/* Menu - centered */}
        <main className="flex-1 flex items-center justify-center">
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

        {/* Footer */}
        <footer className="px-6 md:px-10 py-4 relative flex justify-center items-center">
          <div className="flex items-center gap-3 text-foreground/70 text-[10px] md:text-xs font-normal whitespace-nowrap">
            <Link to="/mentions-legales" className="hover:opacity-70 transition-opacity">
              Mentions Légales
            </Link>
            <span className="text-foreground/40">|</span>
            <Link to="/contact" className="hover:opacity-70 transition-opacity">
              Contact
            </Link>
            <span className="text-foreground/40">|</span>
            <address className="not-italic">Villa 25, rue 39, Lot. Laymoune 2 20190 Casablanca</address>
            <span className="text-foreground/40">|</span>
            <span>©Trademark 2025</span>
          </div>
          
          <div className="absolute right-6 md:right-10 text-right text-foreground/70 font-normal tracking-wider text-[9px] md:text-[10px] leading-tight">
            <div>BRAND</div>
            <div>POWERS</div>
            <div>BUSINESS</div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
