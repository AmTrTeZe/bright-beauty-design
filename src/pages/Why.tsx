import Logo from "@/components/Logo";
import Tagline from "@/components/Tagline";
import { Menu } from "lucide-react";

const Why = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* White Section - Top */}
      <section className="bg-white flex-1 px-8 md:px-16 lg:px-24 py-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-16">
          <Logo />
          <div className="flex items-center gap-8">
            <div className="text-foreground font-light text-sm md:text-base tracking-[0.3em]">
              WHY | PURPOSE
            </div>
            <button className="text-foreground hover:opacity-70 transition-opacity">
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Gray quote block */}
          <div className="bg-[hsl(200_10%_75%)] px-8 py-6">
            <p className="text-white text-sm md:text-base font-medium tracking-wide leading-relaxed uppercase">
              La marque n'est pas qu'un signe de reconnaissance,
              <br />
              c'est un vecteur de sens et un levier de performance.
            </p>
          </div>

          {/* Paragraph text */}
          <p className="text-[hsl(200_15%_45%)] text-sm md:text-base leading-[2] font-light tracking-wide text-justify">
            Dans un monde en constante transformation par une digitalisation accélérée
            et des ruptures technologiques répétées, les modèles économiques sont challengés
            et les modes opératoires reconsidérés, les médias sont saturés et les points de
            contacts fragmentés, les consommateurs sont sur-sollicités par des messages
            instantanés et des contenus rapidement renouvelés, la marque devient alors,
            dans cette instabilité, plus que jamais un pilier, un bouclier, un levier.
          </p>
        </div>
      </section>

      {/* Dark Section - Bottom */}
      <section className="gradient-trademark px-8 md:px-16 lg:px-24 py-12 md:py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-foreground text-sm md:text-base lg:text-lg font-semibold tracking-wider uppercase">
            Brand Engineering & Business Empowerment
          </h2>
          
          <p className="text-foreground/90 text-sm md:text-base leading-[2] font-light tracking-wide text-justify">
            TRADEMARK™ constitue le maillon manquant entre les cabinets conseil en stratégie,
            trop généralistes et les agences de communication, trop opérationnelles.
            Un concentré d'expertises focalisées sur les champs Brand & Business,
            avec pour ambition de transformer la marque en un véritable actif immatériel,
            générateur de soft power pour l'image, créateur de hard power pour le business.
          </p>

          <p className="text-foreground/60 text-xs md:text-sm tracking-wider uppercase font-light border-t border-foreground/20 pt-4">
            Brand Fortification / Market Activation / Business Acceleration
          </p>

          <blockquote className="text-foreground/80 text-sm md:text-base italic font-light">
            « Before you have a share of market, you must have a share of mind »
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-trademark px-8 md:px-16 lg:px-24 py-6 flex justify-between items-end border-t border-foreground/10">
        <div className="text-foreground/60 text-xs font-light tracking-wider">
          TRADEMARK™ | BRAND AS ASSET
        </div>
        <Tagline />
      </footer>
    </div>
  );
};

export default Why;
