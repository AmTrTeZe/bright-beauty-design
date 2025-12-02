import InteriorHeader from "@/components/InteriorHeader";
import InteriorFooter from "@/components/InteriorFooter";

const How = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <InteriorHeader title="HOW" subtitle="PROCESS" />

      {/* Main Content */}
      <main className="flex-1 pt-20">
        {/* Quote Block */}
        <div className="px-8 md:px-20 lg:px-32">
          <div className="gradient-trademark p-8 max-w-4xl mx-auto flex justify-center">
            <p className="text-foreground text-sm md:text-base font-normal tracking-wide leading-relaxed uppercase text-justify max-w-2xl">
              Plus qu'une organisation en circuit fermé, un écosystème décloisonné.
            </p>
          </div>
        </div>

        {/* White Content Block */}
        <div className="bg-white px-8 md:px-16 lg:px-24 py-12">
          <div className="max-w-4xl">
            <p className="text-[hsl(200_15%_45%)] text-sm md:text-base leading-[2] font-normal tracking-wide text-justify">
              Par la distinction croissante des disciplines et la spécialisation des acteurs, il est désormais communément admis qu'aucun cabinet conseil ou agence de communication ne peut disposer en interne du large spectre de compétences et d'expertises permettant de couvrir l'ensemble de la chaine de valeur, comme l'exige désormais la complexité grandissante des problématiques clients et des spécificités sectorielles. Ce qui, à l'évidence, serait utopique, tant d'un point de vue organisationnel que de viabilisation des coûts de structure correspondants.
            </p>
          </div>
        </div>

        {/* Dark Section */}
        <div className="gradient-trademark px-8 md:px-16 lg:px-24 py-10">
          <div className="max-w-4xl">
            <h2 className="text-foreground text-sm md:text-base font-normal tracking-wider uppercase mb-6">
              L'intégration des métiers & L'hybridation des compétences
            </h2>
            
            <p className="text-foreground/90 text-sm md:text-base leading-[2] font-normal tracking-wide text-justify mb-6">
              A contrario d'une une organisation repliée sur ses ressources internes, le cabinet TRADEMARK est structuré en Écosystème ouvert,
              Permettant, pour chaque mission, de configurer sur mesure l'équipe de consultants seniors, «TRADEMARK TALENT TEAM», précisément selon le périmètre d'intervention identifié, vous permettant ainsi bénéficiez du muscle qui produit, sans la graisse qui alourdit.
              Une approche holistique, par l'hybridation d'expertises multi-métiers, aux compétences éprouvées, permet de prendre en charge l'ensemble des composantes de la problématique posée, de manière coordonnée et intégrée.
              L'implication du Top Management, de bout en bout de la mission, permet de garantir la fluidité comme la valeur ajoutée,
              Assurant ainsi pertinence et excellence, agilité et compétitivité,
              Le siège et la direction des opérations sont implantés à Casablanca, avec la possibilité d'intervenir depuis Paris, Abidjan ou encore Dubai, pour une imprégnation locale et une interface facilitées.
            </p>

            <p className="text-foreground/60 text-xs tracking-wider uppercase font-normal pt-4 mb-6">
              Brand, Marketing & Communication Centred / Digital Minded & Tech Oriented Business Focused & Value Obsessed / Hybrid & Agile / Holistic & Integrated Innovative & Competitive / Client Centric & Tailor Made.
              <br />
              TRADEMARK I AS OPEN WORLD
            </p>

            <blockquote className="text-foreground/80 text-sm md:text-base italic font-normal">
              « Seul on va plus vite. Ensemble on va plus loin »
            </blockquote>
          </div>
        </div>
      </main>

      <InteriorFooter />
    </div>
  );
};

export default How;
