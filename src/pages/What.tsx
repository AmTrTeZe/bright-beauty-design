import { useState, useEffect } from "react";
import InteriorHeader from "@/components/InteriorHeader";
import InteriorFooter from "@/components/InteriorFooter";
import AnchorNav from "@/components/AnchorNav";

const anchorItems = [
  { id: "brand-fortification", label: "BRAND FORTIFICATION" },
  { id: "market-activation", label: "MARKET ACTIVATION" },
  { id: "business-acceleration", label: "BUSINESS ACCELERATION" },
];

const What = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = anchorItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <InteriorHeader title="WHAT" subtitle="PRACTICES" />
      <AnchorNav items={anchorItems} activeIndex={activeSection} />

      {/* Main Content */}
      <main className="flex-1 pt-24">
        {/* Section 1: Brand Fortification */}
        <section id="brand-fortification" className="scroll-mt-24">
          {/* Quote Block - centered */}
          <div className="px-8 md:px-20 lg:px-32">
            <div className="gradient-trademark p-8 max-w-4xl mx-auto">
              <p className="text-foreground text-sm md:text-base font-normal tracking-wide leading-relaxed uppercase">
                LA MARQUE EST UN CAPITAL STRATÉGIQUE DE LONG TERME ET UN ACTIF OPÉRATIONNEL DE COURT TERME.
              </p>
            </div>
          </div>

          {/* Content Block - centered */}
          <div className="px-8 md:px-20 lg:px-32">
            <div className="bg-white py-12 max-w-4xl mx-auto">
              <p className="text-[hsl(200_15%_45%)] text-sm md:text-base leading-[2] font-normal tracking-wide text-justify">
                Par sa capacité à encapsuler une valeur ajoutée multi-dimensionnelle la marque constitue l'un des biens les plus précieux de l'entreprise. Elle incarne l'identité et exprime la singularité. Elle développe l'attractivité, et soutient la compétitivité. Elle construit la fidélité, comme elle protège dans l'adversité. La marque est tout autant un actif stratégique de long terme, et un levier opérationnel de court terme, démultiplicateur d'influence et de performance.
              </p>
            </div>
          </div>

          {/* Dark Block - full width */}
          <div className="gradient-trademark px-8 md:px-16 lg:px-24 py-10">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-foreground text-sm md:text-base font-normal tracking-wider uppercase mb-6">
                BRAND FORTIFICATION
              </h3>
              <p className="text-foreground/90 text-sm md:text-base leading-[2] font-normal tracking-wide text-justify mb-6">
                Véritable levier si elle est bien pensée et pilotée, la marque peut se transformer en réel boulet si elle est mal gérée. Ainsi, soit votre marque travaille pour vous, soit vous devrez travailler pour elle. Et comme pour un édifice, la qualité des fondations est essentielle à la construction d'une marque. TRADEMARK fait de sa mission de Brand Engineering, un acte fondateur essentiel, déterminant de sa valeur ajoutée. En phases de création, de consolidation, ou encore de réorientation ou de diversification des activités, elle constitue une phase préalable indispensable visant à définir/redéfinir les fondements tant stratégiques que créatifs de la marque, qui font son identité et sa singularité, son attractivité et sa compétitivité, garants de son succès sur la durée.
              </p>
              <p className="text-foreground/70 text-xs md:text-sm tracking-wider uppercase font-normal mb-6">
                BRAND ENGINEERING & PERSONAL LEADERSHIP BRAND AUDIT / COMPETITIVE ANALYSIS / BRAND POSITIONING / BRAND EQUITY / BRAND HIERARCHY / BRAND TAGLINE / BRAND IDENTITY / CREATIVE TERRITORY
              </p>
              <blockquote className="text-foreground/80 text-sm md:text-base italic font-normal mb-8">
                «You can't build a great building on weak foundations »
              </blockquote>
              <p className="text-foreground/60 text-xs tracking-wider uppercase font-normal">
                TRADEMARK | BRAND AS FOUNDATION
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Market Activation */}
        <section id="market-activation" className="scroll-mt-24">
          {/* Quote Block - centered */}
          <div className="px-8 md:px-20 lg:px-32 mt-8">
            <div className="gradient-trademark p-8 max-w-4xl mx-auto">
              <p className="text-foreground text-sm md:text-base font-normal tracking-wide leading-relaxed uppercase">
                L'IMAGE D'UNE MARQUE SE CONSTRUIT À CHAQUE POINT DE CONTACT.
              </p>
            </div>
          </div>

          {/* Content Block - centered */}
          <div className="px-8 md:px-20 lg:px-32">
            <div className="bg-white py-12 max-w-4xl mx-auto">
              <p className="text-[hsl(200_15%_45%)] text-sm md:text-base leading-[2] font-normal tracking-wide text-justify">
                La spécification des cibles, la démultiplication des canaux, l'obsolescence rapide des contenus, la transformation de la communication en conversation, la diversification des métiers et la spécialisation des acteurs, constituent autant de risques pour la cohérence de la réflexion et la coordination de l'action. À la manière d'un tableau impressionniste qui se dessine par petites touches, la communication se transforme ainsi en une succession d'actes isolés déstructurés, au risque de générer une image composite brouillée, créant une déconnexion entre intention et perception.
              </p>
            </div>
          </div>

          {/* Dark Block - full width */}
          <div className="gradient-trademark px-8 md:px-16 lg:px-24 py-10">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-foreground text-sm md:text-base font-normal tracking-wider uppercase mb-6">
                MARKET ACTIVATION
              </h3>
              <p className="text-foreground/90 text-sm md:text-base leading-[2] font-normal tracking-wide text-justify mb-6">
                Pour chaque mission, TRADEMARK mobilise des équipes pluridisciplinaires de consultants experts, prenant en charge la globalité de la mission, selon une approche holistique, intégrée et coordonnée. Assurant pour chaque intervention, l'orchestration optimale des composantes stratégiques, créatives, technologiques et opérationnelles, de la réflexion à l'implémentation. Un cadre stratégique et un territoire créatif qui, déployés sur l'ensemble des points de contact, dans les champs réel et virtuel, génèrent une expérience de marque globale, multicanale, garantissant pertinence et cohérence, influence et performance.
              </p>
              <p className="text-foreground/70 text-xs md:text-sm tracking-wider uppercase font-normal mb-6">
                MARKET INTELLIGENCE & CONSUMER RESEARCH / MARKETING OUTSOURCING / COMMUNICATION STEERING / CONTENT PRODUCING / STORYTELLING / SPACE DESIGN OMNICHANNEL COMMUNICATION STRATEGY / MEDIA PLANNING, BUYING & AIRING / VIDEO, AUDIO & PRINT PRODUCTION / INFLUENCE, PR & EVENT / CRISIS MANAGEMENT
              </p>
              <blockquote className="text-foreground/80 text-sm md:text-base italic font-normal mb-8">
                «La vision sans action est un rêve. L'action sans vision est un cauchemar.»
              </blockquote>
              <p className="text-foreground/60 text-xs tracking-wider uppercase font-normal">
                TRADEMARK | BRAND AS EXPERIENCE
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Business Acceleration */}
        <section id="business-acceleration" className="scroll-mt-24">
          {/* Quote Block - centered */}
          <div className="px-8 md:px-20 lg:px-32 mt-8">
            <div className="gradient-trademark p-8 max-w-4xl mx-auto">
              <p className="text-foreground text-sm md:text-base font-normal tracking-wide leading-relaxed uppercase">
                LA FORCE CRÉATIVE EST UNE FORCE CRÉATRICE.
              </p>
            </div>
          </div>

          {/* Content Block - centered */}
          <div className="px-8 md:px-20 lg:px-32">
            <div className="bg-white py-12 max-w-4xl mx-auto">
              <p className="text-[hsl(200_15%_45%)] text-sm md:text-base leading-[2] font-normal tracking-wide text-justify">
                Le canal digital, avec ses outils de mesure de performance, data, metrics et autres analytics, a permis d'apporter un éclairage déterminant à la résolution de la sempiterelle question du lien entre créativité et efficacité. Mettant ainsi en lumière la corrélation désormais démontrée et quantifiée entre Brand Engagement et Business Transformation. Ainsi, la marque ne se contente plus d'être un exercice graphique esthétique, visant à apporter un supplément d'âme et tisser un lien émotionnel, elle est tout autant distinctive et expressive de l'identité, compétitive et productive de performance et de valeur.
              </p>
            </div>
          </div>

          {/* Dark Block - full width */}
          <div className="gradient-trademark px-8 md:px-16 lg:px-24 py-10">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-foreground text-sm md:text-base font-normal tracking-wider uppercase mb-6">
                BUSINESS ACCELERATION
              </h3>
              <p className="text-foreground/90 text-sm md:text-base leading-[2] font-normal tracking-wide text-justify mb-6">
                Le modèle propriétaire «Brand-To-Business», du cabinet TRADEMARK, fonde sa philosophie comme il guide sa méthodologie. Par une approche qualitative et quantitative, « ROI Oriented » : Retour sur Image / Capital de Marque, Retour sur Influence / Pénétration & Implication Retour sur Investissement / Business génération. Transformant ainsi la force créative symbolique de la marque, en une puissance effective de rayonnement et de développement, créatrice de valeur. Avec le facteur technologique comme effet de levier, pour démultiplier l'impact et maximiser la performance. A travers une veille technologique auprès des écosystèmes d'innovations internationaux (Station F Paris, Campus Berlin, London Rocket Space, Dubai Tech Ecosystem ...). Et une approche exploratoire de «Technology Scouting», permettant d'identifier, cartographier, sourcer et activer, en mode «Plug and Play,» les Solutions Tech «Pain Point Killers» les plus avancées et éprouvées, les transformant en véritable avantages compétitifs.
              </p>
              <p className="text-foreground/70 text-xs md:text-sm tracking-wider uppercase font-normal mb-6">
                DIGITAL MARKETING / e-COMMERCE CONSULTING / TECH PROVIDING
              </p>
              <blockquote className="text-foreground/80 text-sm md:text-base italic font-normal mb-8">
                « Pour gagner les clients que l'on n'a jamais eus, il faut faire ce que l'on n'a jamais fait »
              </blockquote>
              <p className="text-foreground/60 text-xs tracking-wider uppercase font-normal">
                TRADEMARK | BRAND AS LEVERAGE
              </p>
            </div>
          </div>
        </section>
      </main>

      <InteriorFooter />
    </div>
  );
};

export default What;
