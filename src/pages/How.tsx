import InteriorHeader from "@/components/InteriorHeader";
import InteriorFooter from "@/components/InteriorFooter";
import SEO from "@/components/SEO";

const How = () => {
  return (
    <>
      <SEO 
        title="How - Process"
        description="Découvrez le processus et l'écosystème TRADEMARK™. Une approche holistique par l'hybridation d'expertises multi-métiers pour une valeur ajoutée optimale."
        keywords="processus, écosystème, méthodologie, consulting, expertise multi-métiers, TRADEMARK, approche holistique"
        canonicalUrl="https://trademark.ma/how"
      />
      
      <div className="min-h-screen flex flex-col bg-white">
        <InteriorHeader title="HOW" subtitle="PROCESS" />

        {/* Main Content */}
        <main className="flex-1 pt-20">
          {/* Quote Block */}
          <section aria-label="Citation principale" className="px-8 md:px-20 lg:px-32">
            <div className="gradient-trademark p-8 max-w-4xl mx-auto flex justify-center">
              <p className="text-foreground text-sm md:text-base font-normal tracking-wide leading-relaxed uppercase text-justify max-w-2xl">
                Plus qu'une organisation en circuit fermé, un écosystème décloisonné.
              </p>
            </div>
          </section>

          {/* White Content Block */}
          <section aria-label="Problématique" className="bg-white px-8 md:px-20 lg:px-32 py-12">
            <div className="max-w-4xl mx-auto">
              <p className="text-[hsl(200_15%_45%)] text-sm md:text-base leading-[1.8] font-light tracking-wide text-justify">
                Par la complexité grandissante des problématiques clients et des spécificités sectorielles et par la distinction croissante des disciplines et la spécialisation des acteurs, il est désormais communément admis qu'aucun cabinet conseil ou agence de communication ne peut disposer en interne du large spectre des compétences et des expertises exigées pour couvrir l'ensemble de la chaine de valeur. Ce qui serait à l'évidence utopique, tant d'un point de vue organisationnel que de coûts de structure. Alors quelle organisation pourrait associer la valeur ajoutée réclamée à la viabilité économique exigée ?
              </p>
            </div>
          </section>

          {/* Dark Section */}
          <section aria-label="Notre approche" className="gradient-trademark px-8 md:px-20 lg:px-32 py-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-foreground text-lg md:text-xl font-normal tracking-wider uppercase mb-6">
                INTÉGRATION DES MÉTIERS & HYBRIDATION DES COMPÉTENCES
              </h2>
              
              <div className="text-foreground/90 text-sm md:text-base leading-[1.8] font-light tracking-wide text-justify mb-6">
                <p className="mb-4">Plutôt qu'une organisation limitée à ses ressources internes, le cabinet TRADEMARK™ est structuré en écosystème ouvert, caractérisé par :</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex"><span className="mr-3">-</span><span>Une équipe senior de consulting, «TRADEMARK™ TALENT TEAM», configurée sur mesure selon le périmètre de chaque mission,</span></li>
                  <li className="flex"><span className="mr-3">-</span><span>Une approche holistique, par l'hybridation d'expertises multi-métiers qui permet de gérer l'ensemble des composantes de la problématique posée, de manière coordonnée et intégrée,</span></li>
                  <li className="flex"><span className="mr-3">-</span><span>Un Top Management impliqué de bout en bout de la mission, pour garantir la fluidité comme la valeur ajoutée,</span></li>
                  <li className="flex"><span className="mr-3">-</span><span>Une direction des opérations implantée à Casablanca, avec la possibilité d'intervenir depuis Paris, Abidjan ou encore Dubai, pour une imprégnation locale et une interface client facilitées ;</span></li>
                </ul>
                <p>Soient autant de gages de pertinence, d'excellence et de confiance, d'agilité, de compétitivité et de rentabilité.</p>
              </div>

              <blockquote className="text-foreground/80 text-sm md:text-base italic font-light mb-6">
                « Faire que le résultat soit supérieur à la somme des parties »
              </blockquote>

              <p className="text-foreground/60 text-xs tracking-wider uppercase font-light mb-6">
                BRAND, MARKETING & COMMUNICATION CENTRED / DIGITAL MINDED & TECH ORIENTED / BUSINESS FOCUSED & VALUE OBSESSED / HYBRID & AGILE / HOLISTIC & INTEGRATED / INNOVATIVE & COMPETITIVE / CLIENT CENTRIC & TAILOR MADE.
                <br /><br />
                TRADEMARK™ | AS OPEN ADDED VALUE
              </p>

            </div>
          </section>
        </main>

        <InteriorFooter />
      </div>
    </>
  );
};

export default How;
