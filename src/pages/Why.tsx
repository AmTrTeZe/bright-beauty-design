import Logo from "@/components/Logo";
import Tagline from "@/components/Tagline";

const Why = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header - gradient background */}
      <header className="gradient-trademark p-6 md:p-10 flex justify-between items-center">
        <Logo />
        <div className="text-foreground font-light text-sm md:text-base tracking-[0.4em]">
          W H Y | P U R P O S E
        </div>
      </header>

      {/* Hero Section - white/light gray background */}
      <section className="bg-[hsl(210_20%_95%)] px-6 md:px-10 lg:px-20 py-8 md:py-12">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[hsl(200_15%_60%)] px-6 py-4 md:px-10 md:py-6 inline-block">
            <h1 className="text-white text-xs md:text-sm lg:text-base font-medium tracking-wide leading-relaxed uppercase">
              La marque n'est pas qu'un signe de reconnaissance,
              <br />
              c'est un vecteur de sens et un levier de performance.
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section - white/light background */}
      <section className="bg-[hsl(210_20%_95%)] px-6 md:px-10 lg:px-20 pb-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-[hsl(200_15%_45%)] text-sm md:text-base leading-[1.8] font-light tracking-wide text-justify">
            Dans un monde en constante transformation par une digitalisation accélérée
            et des ruptures technologiques répétées, les modèles économiques sont challengés
            et les modes opératoires reconsidérés, les médias sont saturés et les points de
            contacts fragmentés, les consommateurs sont sur-sollicités par des messages
            instantanés et des contenus rapidement renouvelés, la marque devient alors,
            dans cette instabilité, plus que jamais un pilier, un bouclier, un levier.
          </p>
        </div>
      </section>

      {/* Dark Section - blue-gray background */}
      <section className="gradient-trademark flex-1 px-6 md:px-10 lg:px-20 py-12 md:py-16">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-foreground text-sm md:text-base lg:text-lg font-semibold tracking-wider uppercase">
            Brand Engineering & Business Empowerment
          </h2>
          
          <p className="text-foreground/90 text-sm md:text-base leading-[1.8] font-light tracking-wide text-justify">
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
      <footer className="gradient-trademark p-6 md:p-10 flex justify-between items-end border-t border-foreground/10">
        <div className="text-foreground/60 text-xs font-light tracking-wider">
          TRADEMARK™ | BRAND AS ASSET
        </div>
        <Tagline />
      </footer>
    </div>
  );
};

export default Why;