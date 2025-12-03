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
          <div className="max-w-4xl mx-auto">
            <p className="text-[hsl(200_15%_45%)] text-sm md:text-base leading-[2] font-normal tracking-wide text-justify">
              Par la complexité grandissante des problématiques clients et des spécificités sectorielles et par la distinction croissante des disciplines et la spécialisation des acteurs, il est désormais communément admis qu'aucun cabinet conseil ou agence de communication ne peut disposer en interne du large spectre des compétences et des expertises exigées pour couvrir l'ensemble de la chaine de valeur. Ce qui serait, à l'évidence, utopique, tant d'un point de vue organisationnel que de coûts de structure. Alors quelle organisation pourrait associer la valeur ajoutée réclamée à la viabilité économique exigée ?
            </p>
          </div>
        </div>

        {/* Dark Section */}
        <div className="gradient-trademark px-8 md:px-16 lg:px-24 py-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-foreground text-sm md:text-base font-normal tracking-wider uppercase mb-6">
              L'intégration des métiers & L'hybridation des compétences
            </h2>
            
            <p className="text-foreground/90 text-sm md:text-base leading-[2] font-normal tracking-wide text-justify mb-6">
              Plutôt qu'une organisation limitée à ses ressources internes, le cabinet TRADEMARK est structuré en écosystème ouvert, caractérisé par :
              <br /><br />
              - Une équipe senior de consulting, «TRADEMARK TALENT TEAM», configurée sur mesure selon le périmètre de chaque mission,
              <br />
              - Une approche holistique, par l'hybridation d'expertises multi-métiers qui permet de gérer l'ensemble des composantes de la problématique posée, de manière coordonnée et intégrée.
              <br />
              - Un Top Management impliqué de bout en bout de la mission, pour garantir la fluidité comme la valeur ajoutée,
              <br />
              - Une direction des opérations implantée à Casablanca, avec la possibilité d'intervenir depuis Paris, Abidjan ou encore Dubai, pour une imprégnation locale et une interface client facilitées ;
              <br /><br />
              Soient autant de gages de pertinence, d'excellence et de confiance, d'agilité, de compétitivité et de rentabilité.
            </p>

            <blockquote className="text-foreground/80 text-sm md:text-base italic font-normal mb-6">
              « Faire que le résultat soit supérieur à la somme des parties »
            </blockquote>

            <p className="text-foreground/60 text-xs tracking-wider uppercase font-normal mb-6">
              BRAND, MARKETING & COMMUNICATION CENTRED / DIGITAL MINDED & TECH ORIENTED / BUSINESS FOCUSED & VALUE OBSESSED / HYBRID & AGILE / HOLISTIC & INTEGRATED / INNOVATIVE & COMPETITIVE / CLIENT CENTRIC & TAILOR MADE.
              <br /><br />
              TRADEMARK | AS OPEN ADDED VALUE
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