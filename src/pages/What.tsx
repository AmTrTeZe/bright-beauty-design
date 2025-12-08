import { useState, useEffect } from "react";
import InteriorHeader from "@/components/InteriorHeader";
import InteriorFooter from "@/components/InteriorFooter";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

const What = () => {
  const [activeSection, setActiveSection] = useState(0);
  const { language } = useLanguage();

  const anchorItems = [
    { id: "brand-fortification", label: "BRAND FORTIFICATION" },
    { id: "market-activation", label: "MARKET ACTIVATION" },
    { id: "business-acceleration", label: "BUSINESS ACCELERATION" },
  ];

  const content = {
    fr: {
      seo: {
        title: "What - Practices",
        description: "Découvrez nos pratiques: Brand Fortification, Market Activation et Business Acceleration. TRADEMARK™ transforme votre marque en actif stratégique générateur de valeur.",
        keywords: "brand fortification, market activation, business acceleration, brand engineering, pratiques, services, TRADEMARK",
      },
      sections: {
        brandFortification: {
          quote: "LA MARQUE EST UN CAPITAL STRATÉGIQUE DE LONG TERME ET UN ACTIF OPÉRATIONNEL DE COURT TERME.",
          intro: "La marque constitue l'un des biens les plus précieux de l'entreprise. Elle incarne l'identité et exprime la singularité, elle porte l'attractivité et soutient la compétitivité, elle construit la fidélité et protège dans l'adversité. Véritable levier si elle est bien pensée et pilotée, la marque peut se transformer en réel boulet si elle est mal gérée. Ainsi, soit votre marque travaille pour vous, soit vous devrez travailler pour elle.",
          content: "Comme pour un édifice, la qualité des fondations est essentielle à la construction d'une marque. Face à cet enjeu existentiel, le Cabinet TRADEMARK™ fait de sa mission de Brand Engineering, un acte fondateur déterminant de sa valeur ajoutée. Tant en phases de création, de consolidation, de réorientation ou encore de diversification, cette réflexion vise à définir/redéfinir les fondements tant stratégiques que créatifs de la marque, qui font son identité et sa singularité, son attractivité et sa compétitivité, garants de son succès sur la durée.",
          blockquote: "«You can't build a great building on weak foundations »",
          services: "BRAND ENGINEERING / PERSONAL LEADERSHIP / COMPETITVE ANALYSIS / BRAND AUDIT / BRAND POSITIONING / BRAND EQUITY / BRAND HIERARCHY / BRAND TAGLINE / BRAND IDENTITY / BRAND CREATIVE TERRITORY.",
          tagline: "TRADEMARK™ | BRAND AS FOUNDATION",
        },
        marketActivation: {
          quote: "L'EXPÉRIENCE DE MARQUE SE CONSTRUIT À CHAQUE POINT DE CONTACT.",
          intro: "La communication devenue conversation, se caractérise désormais par la spécification des communautés et la qualification des cibles, la démultiplication des canaux et l'obsolescence rapide des contenus, la diversification des métiers et la spécialisation des acteurs. A la manière d'un tableau impressionniste qui se dessine par petites touches successives, la communication risque de se transformer en une succession d'actes isolés déstructurés, risquant de générer une image composite brouillée, source de déconnexion entre réflexion et action, intention et perception. Un déficit de cohérence qui à l'évidence devient un frein à la performance.",
          content: "Pour chaque mission TRADEMARK™ mobilise des équipes pluridisciplinaires de consultants experts, gérant la mission selon une approche holistique, intégrée et coordonnée, assurant, l'orchestration optimale des composantes stratégiques, créatives, technologiques et opérationnelles, de la réflexion à l'implémentation. Un cadre stratégique, un territoire créatif et un dispositif d'activation, déployés sur l'ensemble des points de contact, dans les champs réel et virtuel, génèrent une expérience de marque globale, multicanale, garantissant pertinence et cohérence, influence et performance.",
          blockquote: "«La vision sans action est un rêve. L'action sans vision est un cauchemar.»",
          services: "MARKET INTELLIGENCE / CONSUMER RESEARCH / MARKETING OUTSOURCING / COMMUNICATION STEERING / CRISIS MANAGEMENT / OMNICHANNEL STRATEGY / BRAND STORYTELLING / CONTENT PRODUCING / MEDIA PLANNING, BUYING & AIRING /PR & INFLUENCE/ EVENT / SPACE DESIGN.",
          tagline: "TRADEMARK™ | BRAND AS EXPERIENCE",
        },
        businessAcceleration: {
          quote: "L'INNOVATION TRANSFORME LA FORCE CRÉATIVE EN AVANCE COMPÉTITIVE.",
          intro: "Les outils de mesure de performance du canal digital : data, metrics et autres analytics, permettent désormais de mettre en lumière la corrélation avérée et quantifiée entre créativité et efficacité et ainsi entre Brand Engagement et Business Transformation. Plus qu'un simple exercice graphique esthétique, qui dote l'entreprise d'un signe de reconnaissance, la marque est tout autant une expression distinctive d'identité génératrice d'un véritable supplément d'âme, comme une source productive de performance et de valeur.",
          content: "Le modèle propriétaire «Brand-To-Business» du cabinet TRADEMARK™ fonde sa philosophie et guide sa méthodologie. Une approche ROI Oriented assure la transformation de la force créative de la marque en une puissance effective de rayonnement et de développement, créatrice de valeur. Le Cabinet TRADEMARK™ met l'innovation au coeur de son approche et fait du facteur technologique un levier d'impact et de performance, à travers une démarche exploratoire de «Technology Scouting», destinée à identifier, cartographier, sourcer et activer, en mode «Plug and Play,» les Solutions Tech «Pain Point Killers» les plus avancées et éprouvées, en les transformant en véritables avantages compétitifs. Avec une avance technologique constamment alimentée par une veille constante auprès des écosystèmes internationaux d'innovation (Station F Paris, Campus Berlin, London Rocket Space, Dubai Tech Ecosystem …).",
          blockquote: "« Pour gagner les clients que l'on n'a jamais eus, il faut faire ce que l'on n'a jamais fait »",
          services: "DIGITAL MARKETING / e-COMMERCE CONSULTING / TECH PROVIDING",
          tagline: "TRADEMARK™ | BRAND AS LEVERAGE",
        },
      },
    },
    en: {
      seo: {
        title: "What - Practices",
        description: "Discover our practices: Brand Fortification, Market Activation and Business Acceleration. TRADEMARK™ transforms your brand into a strategic asset generating value.",
        keywords: "brand fortification, market activation, business acceleration, brand engineering, practices, services, TRADEMARK",
      },
      sections: {
        brandFortification: {
          quote: "THE BRAND IS A LONG-TERM STRATEGIC CAPITAL AND A SHORT-TERM OPERATIONAL ASSET.",
          intro: "The brand is one of the most valuable assets of a company. It embodies identity and expresses uniqueness, it carries attractiveness and supports competitiveness, it builds loyalty and protects in adversity. A real lever if well thought out and managed, the brand can turn into a real burden if poorly managed. Thus, either your brand works for you, or you will have to work for it.",
          content: "As with a building, the quality of foundations is essential to building a brand. Faced with this existential challenge, TRADEMARK™ makes its Brand Engineering mission a founding act determining its added value. Whether in phases of creation, consolidation, reorientation or diversification, this reflection aims to define/redefine the strategic and creative foundations of the brand, which make its identity and uniqueness, its attractiveness and competitiveness, guarantors of its long-term success.",
          blockquote: "«You can't build a great building on weak foundations»",
          services: "BRAND ENGINEERING / PERSONAL LEADERSHIP / COMPETITIVE ANALYSIS / BRAND AUDIT / BRAND POSITIONING / BRAND EQUITY / BRAND HIERARCHY / BRAND TAGLINE / BRAND IDENTITY / BRAND CREATIVE TERRITORY.",
          tagline: "TRADEMARK™ | BRAND AS FOUNDATION",
        },
        marketActivation: {
          quote: "THE BRAND EXPERIENCE IS BUILT AT EVERY TOUCHPOINT.",
          intro: "Communication has become conversation, now characterized by community specification and target qualification, channel multiplication and rapid content obsolescence, profession diversification and actor specialization. Like an impressionist painting drawn with successive small touches, communication risks becoming a succession of isolated, unstructured acts, potentially generating a blurred composite image, a source of disconnection between reflection and action, intention and perception. A coherence deficit that evidently becomes a brake on performance.",
          content: "For each mission, TRADEMARK™ mobilizes multidisciplinary teams of expert consultants, managing the mission according to a holistic, integrated and coordinated approach, ensuring optimal orchestration of strategic, creative, technological and operational components, from reflection to implementation. A strategic framework, a creative territory and an activation system, deployed across all touchpoints, in real and virtual fields, generate a global, multichannel brand experience, guaranteeing relevance and coherence, influence and performance.",
          blockquote: "«Vision without action is a dream. Action without vision is a nightmare.»",
          services: "MARKET INTELLIGENCE / CONSUMER RESEARCH / MARKETING OUTSOURCING / COMMUNICATION STEERING / CRISIS MANAGEMENT / OMNICHANNEL STRATEGY / BRAND STORYTELLING / CONTENT PRODUCING / MEDIA PLANNING, BUYING & AIRING / PR & INFLUENCE / EVENT / SPACE DESIGN.",
          tagline: "TRADEMARK™ | BRAND AS EXPERIENCE",
        },
        businessAcceleration: {
          quote: "INNOVATION TRANSFORMS CREATIVE FORCE INTO COMPETITIVE ADVANTAGE.",
          intro: "Digital channel performance measurement tools: data, metrics and other analytics, now make it possible to highlight the proven and quantified correlation between creativity and efficiency, and thus between Brand Engagement and Business Transformation. More than a simple aesthetic graphic exercise that gives the company a sign of recognition, the brand is equally a distinctive expression of identity generating a real soul supplement, as a productive source of performance and value.",
          content: "The proprietary «Brand-To-Business» model of TRADEMARK™ founds its philosophy and guides its methodology. An ROI Oriented approach ensures the transformation of the brand's creative force into an effective power of influence and development, creating value. TRADEMARK™ puts innovation at the heart of its approach and makes the technological factor a lever for impact and performance, through an exploratory «Technology Scouting» approach, designed to identify, map, source and activate, in «Plug and Play» mode, the most advanced and proven «Pain Point Killers» Tech Solutions, transforming them into real competitive advantages. With a technological lead constantly fed by constant monitoring of international innovation ecosystems (Station F Paris, Campus Berlin, London Rocket Space, Dubai Tech Ecosystem…).",
          blockquote: "«To win customers you've never had, you have to do what you've never done»",
          services: "DIGITAL MARKETING / e-COMMERCE CONSULTING / TECH PROVIDING",
          tagline: "TRADEMARK™ | BRAND AS LEVERAGE",
        },
      },
    },
  };

  const t = content[language];

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
    "description": t.seo.description
  };

  return (
    <>
      <SEO 
        title={t.seo.title}
        description={t.seo.description}
        keywords={t.seo.keywords}
        canonicalUrl={`https://trademark.ma${language === 'en' ? '/en' : ''}/what`}
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
                  {t.sections.brandFortification.quote}
                </p>
              </div>
            </div>

            {/* Content Block - centered */}
            <div className="px-8 md:px-20 lg:px-32">
              <div className="bg-white py-12 max-w-4xl mx-auto">
                <p className="text-[hsl(200_20%_59%)] text-base md:text-lg leading-[1.8] font-light tracking-wide text-justify">
                  {t.sections.brandFortification.intro}
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
                  {t.sections.brandFortification.content}
                </p>
                <blockquote className="text-foreground/80 text-base md:text-lg italic font-light mb-6">
                  {t.sections.brandFortification.blockquote}
                </blockquote>
                <p className="text-sm md:text-base tracking-wider uppercase font-light mb-6" style={{ color: '#BFCCD3' }}>
                  {t.sections.brandFortification.services}
                </p>
                <p className="text-sm md:text-base tracking-wider uppercase font-light" style={{ color: '#BFCCD3' }}>
                  {t.sections.brandFortification.tagline}
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
                  {t.sections.marketActivation.quote}
                </p>
              </div>
            </div>

            {/* Content Block - centered */}
            <div className="px-8 md:px-20 lg:px-32">
              <div className="bg-white py-12 max-w-4xl mx-auto">
                <p className="text-[hsl(200_20%_59%)] text-base md:text-lg leading-[1.8] font-light tracking-wide text-justify">
                  {t.sections.marketActivation.intro}
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
                  {t.sections.marketActivation.content}
                </p>
                <blockquote className="text-foreground/80 text-base md:text-lg italic font-light mb-6">
                  {t.sections.marketActivation.blockquote}
                </blockquote>
                <p className="text-sm md:text-base tracking-wider uppercase font-light mb-6" style={{ color: '#BFCCD3' }}>
                  {t.sections.marketActivation.services}
                </p>
                <p className="text-sm md:text-base tracking-wider uppercase font-light" style={{ color: '#BFCCD3' }}>
                  {t.sections.marketActivation.tagline}
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
                  {t.sections.businessAcceleration.quote}
                </p>
              </div>
            </div>

            {/* Content Block - centered */}
            <div className="px-8 md:px-20 lg:px-32">
              <div className="bg-white py-12 max-w-4xl mx-auto">
                <p className="text-[hsl(200_20%_59%)] text-base md:text-lg leading-[1.8] font-light tracking-wide text-justify">
                  {t.sections.businessAcceleration.intro}
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
                  {t.sections.businessAcceleration.content}
                </p>
                <blockquote className="text-foreground/80 text-base md:text-lg italic font-light mb-6">
                  {t.sections.businessAcceleration.blockquote}
                </blockquote>
                <p className="text-sm md:text-base tracking-wider uppercase font-light mb-6" style={{ color: '#BFCCD3' }}>
                  {t.sections.businessAcceleration.services}
                </p>
                <p className="text-sm md:text-base tracking-wider uppercase font-light" style={{ color: '#BFCCD3' }}>
                  {t.sections.businessAcceleration.tagline}
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