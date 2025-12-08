import { useState, useEffect } from "react";
import InteriorHeader from "@/components/InteriorHeader";
import InteriorFooter from "@/components/InteriorFooter";
import SEO from "@/components/SEO";

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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "TRADEMARK"
    },
    "serviceType": ["Brand Fortification", "Market Activation", "Business Acceleration"],
    "description": "Services de brand engineering: fortification de marque, activation marché et accélération business"
  };

  return (
    <>
      <SEO 
        title="What - Practices"
        description="Découvrez nos pratiques: Brand Fortification, Market Activation et Business Acceleration. TRADEMARK™ transforme votre marque en actif stratégique générateur de valeur."
        keywords="brand fortification, market activation, business acceleration, brand engineering, pratiques, services, TRADEMARK"
        canonicalUrl="https://trademark.ma/what"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen flex flex-col bg-white">
        <InteriorHeader title="WHAT" subtitle="PRACTICES" anchorItems={anchorItems} activeAnchorIndex={activeSection} />

        {/* Main Content */}
        <main className="flex-1 pt-36">
          {/* Section 1: Brand Fortification */}
          <section id="brand-fortification" className="scroll-mt-40" aria-labelledby="brand-fortification-title">
            {/* Quote Block - centered */}
            <div className="px-8 md:px-20 lg:px-32">
              <div className="gradient-trademark py-4 px-8 max-w-4xl mx-auto flex justify-center">
                <p className="text-foreground text-base md:text-lg font-normal tracking-wide leading-relaxed uppercase text-justify max-w-2xl">
                  LA MARQUE EST UN CAPITAL STRATÉGIQUE DE LONG TERME ET UN ACTIF OPÉRATIONNEL DE COURT TERME.
                </p>
              </div>
            </div>

            {/* Content Block - centered */}
            <div className="px-8 md:px-20 lg:px-32">
              <div className="bg-white py-12 max-w-4xl mx-auto">
                <p className="text-[hsl(200_20%_59%)] text-base md:text-lg leading-[1.8] font-light tracking-wide text-justify">
                  La marque constitue l'un des biens les plus précieux de l'entreprise. Elle incarne l'identité et exprime la singularité, elle porte l'attractivité et soutient la compétitivité, elle construit la fidélité et protège dans l'adversité. Véritable levier si elle est bien pensée et pilotée, la marque peut se transformer en réel boulet si elle est mal gérée. Ainsi, soit votre marque travaille pour vous, soit vous devrez travailler pour elle.
                </p>
              </div>
            </div>

            {/* Dark Block - full width */}
            <div className="gradient-trademark px-8 md:px-20 lg:px-32 py-10">
              <div className="max-w-4xl mx-auto">
                <h2 id="brand-fortification-title" className="text-foreground text-xl md:text-2xl font-normal tracking-wider uppercase mb-6">
                  BRAND FORTIFICATION
                </h2>
                <p className="text-foreground/90 text-base md:text-lg leading-[1.8] font-light tracking-wide text-justify mb-6">
                  Comme pour un édifice, la qualité des fondations est essentielle à la construction d'une marque. Face à cet enjeu existentiel, le Cabinet TRADEMARK™ fait de sa mission de Brand Engineering, un acte fondateur déterminant de sa valeur ajoutée. Tant en phases de création, de consolidation, de réorientation ou encore de diversification, cette réflexion vise à définir/redéfinir les fondements tant stratégiques que créatifs de la marque, qui font son identité et sa singularité, son attractivité et sa compétitivité, garants de son succès sur la durée.
                </p>
                <blockquote className="text-foreground/80 text-base md:text-lg italic font-light mb-6">
                  «You can't build a great building on weak foundations »
                </blockquote>
                <p className="text-sm md:text-base tracking-wider uppercase font-light mb-6" style={{ color: '#BFCCD3' }}>
                  BRAND ENGINEERING / PERSONAL LEADERSHIP / COMPETITVE ANALYSIS / BRAND AUDIT / BRAND POSITIONING / BRAND EQUITY / BRAND HIERARCHY / BRAND TAGLINE / BRAND IDENTITY / BRAND CREATIVE TERRITORY.
                </p>
                <p className="text-sm md:text-base tracking-wider uppercase font-light" style={{ color: '#BFCCD3' }}>
                  TRADEMARK™ | BRAND AS FOUNDATION
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Market Activation */}
          <section id="market-activation" className="scroll-mt-40" aria-labelledby="market-activation-title">
            {/* Quote Block - centered */}
            <div className="px-8 md:px-20 lg:px-32 mt-8">
              <div className="gradient-trademark py-4 px-8 max-w-4xl mx-auto flex justify-center">
                <p className="text-foreground text-base md:text-lg font-normal tracking-wide leading-relaxed uppercase text-justify max-w-2xl">
                  L'EXPÉRIENCE DE MARQUE SE CONSTRUIT À CHAQUE POINT DE CONTACT.
                </p>
              </div>
            </div>

            {/* Content Block - centered */}
            <div className="px-8 md:px-20 lg:px-32">
              <div className="bg-white py-12 max-w-4xl mx-auto">
                <p className="text-[hsl(200_20%_59%)] text-base md:text-lg leading-[1.8] font-light tracking-wide text-justify">
                  La communication devenue conversation, se caractérise désormais par la spécification des communautés et la qualification des cibles, la démultiplication des canaux et l'obsolescence rapide des contenus, la diversification des métiers et la spécialisation des acteurs. A la manière d'un tableau impressionniste qui se dessine par petites touches successives, la communication risque de se transformer en une succession d'actes isolés déstructurés, risquant de générer une image composite brouillée, source de déconnexion entre réflexion et action, intention et perception. Un déficit de cohérence qui à l'évidence devient un frein à la performance.
                </p>
              </div>
            </div>

            {/* Dark Block - full width */}
            <div className="gradient-trademark px-8 md:px-20 lg:px-32 py-10">
              <div className="max-w-4xl mx-auto">
                <h2 id="market-activation-title" className="text-foreground text-xl md:text-2xl font-normal tracking-wider uppercase mb-6">
                  MARKET ACTIVATION
                </h2>
                <p className="text-foreground/90 text-base md:text-lg leading-[1.8] font-light tracking-wide text-justify mb-6">
                  Pour chaque mission TRADEMARK™ mobilise des équipes pluridisciplinaires de consultants experts, gérant la mission selon une approche holistique, intégrée et coordonnée, assurant, l'orchestration optimale des composantes stratégiques, créatives, technologiques et opérationnelles, de la réflexion à l'implémentation. Un cadre stratégique, un territoire créatif et un dispositif d'activation, déployés sur l'ensemble des points de contact, dans les champs réel et virtuel, génèrent une expérience de marque globale, multicanale, garantissant pertinence et cohérence, influence et performance.
                </p>
                <blockquote className="text-foreground/80 text-base md:text-lg italic font-light mb-6">
                  «La vision sans action est un rêve. L'action sans vision est un cauchemar.»
                </blockquote>
                <p className="text-sm md:text-base tracking-wider uppercase font-light mb-6" style={{ color: '#BFCCD3' }}>
                  MARKET INTELLIGENCE / CONSUMER RESEARCH / MARKETING OUTSOURCING / COMMUNICATION STEERING / CRISIS MANAGEMENT / OMNICHANNEL STRATEGY / BRAND STORYTELLING / CONTENT PRODUCING / MEDIA PLANNING, BUYING & AIRING /PR & INFLUENCE/ EVENT / SPACE DESIGN.
                </p>
                <p className="text-sm md:text-base tracking-wider uppercase font-light" style={{ color: '#BFCCD3' }}>
                  TRADEMARK™ | BRAND AS EXPERIENCE
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Business Acceleration */}
          <section id="business-acceleration" className="scroll-mt-40" aria-labelledby="business-acceleration-title">
            {/* Quote Block - centered */}
            <div className="px-8 md:px-20 lg:px-32 mt-8">
              <div className="gradient-trademark py-4 px-8 max-w-4xl mx-auto flex justify-center">
                <p className="text-foreground text-base md:text-lg font-normal tracking-wide leading-relaxed uppercase text-justify max-w-2xl">
                  L'INNOVATION TRANSFORME LA FORCE CRÉATIVE EN AVANCE COMPÉTITIVE.
                </p>
              </div>
            </div>

            {/* Content Block - centered */}
            <div className="px-8 md:px-20 lg:px-32">
              <div className="bg-white py-12 max-w-4xl mx-auto">
                <p className="text-[hsl(200_20%_59%)] text-base md:text-lg leading-[1.8] font-light tracking-wide text-justify">
                  Les outils de mesure de performance du canal digital : data, metrics et autres analytics, permettent désormais de mettre en lumière la corrélation avérée et quantifiée entre créativité et efficacité et ainsi entre Brand Engagement et Business Transformation. Plus qu'un simple exercice graphique esthétique, qui dote l'entreprise d'un signe de reconnaissance, la marque est tout autant une expression distinctive d'identité génératrice d'un véritable supplément d'âme, comme une source productive de performance et de valeur.
                </p>
              </div>
            </div>

            {/* Dark Block - full width */}
            <div className="gradient-trademark px-8 md:px-20 lg:px-32 py-10">
              <div className="max-w-4xl mx-auto">
                <h2 id="business-acceleration-title" className="text-foreground text-xl md:text-2xl font-normal tracking-wider uppercase mb-6">
                  BUSINESS ACCELERATION
                </h2>
                <p className="text-foreground/90 text-base md:text-lg leading-[1.8] font-light tracking-wide text-justify mb-6">
                  Le modèle propriétaire «Brand-To-Business» du cabinet TRADEMARK™ fonde sa philosophie et guide sa méthodologie. Une approche ROI Oriented assure la transformation de la force créative de la marque en une puissance effective de rayonnement et de développement, créatrice de valeur. Le Cabinet TRADEMARK™ met l'innovation au coeur de son approche et fait du facteur technologique un levier d'impact et de performance, à travers une démarche exploratoire de «Technology Scouting», destinée à identifier, cartographier, sourcer et activer, en mode «Plug and Play,» les Solutions Tech «Pain Point Killers» les plus avancées et éprouvées, en les transformant en véritables avantages compétitifs. Avec une avance technologique constamment alimentée par une veille constante auprès des écosystèmes internationaux d'innovation (Station F Paris, Campus Berlin, London Rocket Space, Dubai Tech Ecosystem …).
                </p>
                <blockquote className="text-foreground/80 text-base md:text-lg italic font-light mb-6">
                  « Pour gagner les clients que l'on n'a jamais eus, il faut faire ce que l'on n'a jamais fait »
                </blockquote>
                <p className="text-sm md:text-base tracking-wider uppercase font-light mb-6" style={{ color: '#BFCCD3' }}>
                  DIGITAL MARKETING / e-COMMERCE CONSULTING / TECH PROVIDING
                </p>
                <p className="text-sm md:text-base tracking-wider uppercase font-light" style={{ color: '#BFCCD3' }}>
                  TRADEMARK™ | BRAND AS LEVERAGE
                </p>
              </div>
            </div>
          </section>
        </main>

        <InteriorFooter />
      </div>
    </>
  );
};

export default What;