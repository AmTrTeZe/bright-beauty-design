import InteriorHeader from "@/components/InteriorHeader";
import InteriorFooter from "@/components/InteriorFooter";

const Why = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <InteriorHeader title="WHY" subtitle="PURPOSE" />

      {/* Main Content */}
      <main className="flex-1 pt-20">
        {/* Quote Block */}
        <div className="px-8 md:px-20 lg:px-32">
          <div className="gradient-trademark p-8 max-w-4xl mx-auto flex justify-center">
            <p className="text-foreground text-sm md:text-base font-normal tracking-wide leading-relaxed uppercase text-justify max-w-2xl">
              La marque n'est pas qu'un signe de reconnaissance, c'est un vecteur de sens et un levier de performance.
            </p>
          </div>
        </div>

        {/* White Content Block */}
        <div className="bg-white px-8 md:px-16 lg:px-24 py-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-[hsl(200_15%_45%)] text-sm md:text-base leading-[2] font-normal tracking-wide text-justify">
              Dans un monde en constante transformation par une digitalisation accélérée
              et des ruptures technologiques répétées, les modèles économiques sont challengés
              et les modes opératoires reconsidérés, les médias sont saturés et les points de
              contacts fragmentés, les consommateurs sont sur-sollicités par des messages
              instantanés et des contenus rapidement renouvelés, la marque devient alors,
              dans cette instabilité, plus que jamais un pilier, un bouclier, un levier.
            </p>
          </div>
        </div>

        {/* Dark Section */}
        <div className="gradient-trademark px-8 md:px-16 lg:px-24 py-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-foreground text-sm md:text-base font-normal tracking-wider uppercase mb-6">
              Brand Engineering & Business Empowerment
            </h2>
            
            <p className="text-foreground/90 text-sm md:text-base leading-[2] font-normal tracking-wide text-justify mb-6">
              TRADEMARK™ constitue le maillon manquant entre les cabinets conseil en stratégie,
              trop généralistes et les agences de communication, trop opérationnelles.
              Un concentré d'expertises focalisées sur les champs Brand & Business,
              avec pour ambition de transformer la marque en un véritable actif immatériel,
              générateur de soft power pour l'image, créateur de hard power pour le business.
            </p>

            <p className="text-foreground/60 text-xs tracking-wider uppercase font-normal pt-4 mb-6">
              Brand Fortification / Market Activation / Business Acceleration
            </p>

            <blockquote className="text-foreground/80 text-sm md:text-base italic font-normal">
              « Before you have a share of market, you must have a share of mind »
            </blockquote>
          </div>
        </div>
      </main>

      <InteriorFooter />
    </div>
  );
};

export default Why;
