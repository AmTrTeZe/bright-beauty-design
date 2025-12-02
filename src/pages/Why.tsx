import Logo from "@/components/Logo";
import Tagline from "@/components/Tagline";

const Why = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="gradient-trademark p-6 md:p-10 flex justify-between items-center">
        <Logo />
        <div className="text-foreground text-spaced text-sm md:text-lg tracking-[0.3em] font-extralight">
          W H Y | P U R P O S E
        </div>
      </header>

      {/* Hero Section */}
      <section className="gradient-trademark px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-foreground/10 backdrop-blur-sm px-6 py-4 md:px-8 md:py-6 inline-block">
            <h1 className="text-foreground text-sm md:text-base lg:text-lg font-medium tracking-wide leading-relaxed uppercase">
              La marque n'est pas qu'un signe de reconnaissance,
              <br />
              c'est un vecteur de sens et un levier de performance.
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section - Light */}
      <section className="gradient-trademark px-6 md:px-10 lg:px-20 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-foreground/90 text-sm md:text-base leading-relaxed font-light tracking-wide text-justify">
            Dans un monde en constante transformation par une digitalisation accélérée
            et des ruptures technologiques répétées, les modèles économiques sont challengés
            et les modes opératoires reconsidérés, les médias sont saturés et les points de
            contacts fragmentés, les consommateurs sont sur-sollicités par des messages
            instantanés et des contenus rapidement renouvelés, la marque devient alors,
            dans cette instabilité, plus que jamais un pilier, un bouclier, un levier.
          </p>
        </div>
      </section>

      {/* Content Section - Dark */}
      <section className="bg-secondary px-6 md:px-10 lg:px-20 py-10 md:py-16 flex-1">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-foreground text-sm md:text-base lg:text-lg font-semibold tracking-wider uppercase">
            Brand Engineering & Business Empowerment
          </h2>
          
          <p className="text-foreground/90 text-sm md:text-base leading-relaxed font-light tracking-wide text-justify">
            TRADEMARK™ constitue le maillon manquant entre les cabinets conseil en stratégie,
            trop généralistes et les agences de communication, trop opérationnelles.
            Un concentré d'expertises focalisées sur les champs Brand & Business,
            avec pour ambition de transformer la marque en un véritable actif immatériel,
            générateur de soft power pour l'image, créateur de hard power pour le business.
          </p>

          <p className="text-foreground/70 text-xs md:text-sm tracking-wider uppercase font-light">
            Brand Fortification / Market Activation / Business Acceleration
          </p>

          <blockquote className="text-foreground/80 text-sm md:text-base italic font-light">
            « Before you have a share of market, you must have a share of mind »
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary p-6 md:p-10 flex justify-between items-end">
        <div className="text-foreground/60 text-xs font-extralight tracking-wider">
          TRADEMARK™ | BRAND AS ASSET
        </div>
        <Tagline />
      </footer>
    </div>
  );
};

export default Why;