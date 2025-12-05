import InteriorHeader from "@/components/InteriorHeader";
import InteriorFooter from "@/components/InteriorFooter";
import SEO from "@/components/SEO";
import nawfelPhoto from "@/assets/nawfel-bensari-2.png";
import havasGroup from "@/assets/havas-group.png";
import publicisGroupe from "@/assets/publicis-groupe.png";
import publicisMaroc from "@/assets/publicis-maroc.png";
import trademarkLogo from "@/assets/trademark-logo.png";

const Who = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nawfel Bensari",
    "jobTitle": "Chairman & Senior Advisor",
    "worksFor": {
      "@type": "Organization",
      "name": "TRADEMARK"
    },
    "description": "30 ans d'expérience de consulting en agences de communication & cabinets conseil",
    "alumniOf": ["Havas Group", "Publicis Groupe", "Publicis Maroc"]
  };

  return (
    <>
      <SEO 
        title="Who - Expertise"
        description="Nawfel Bensari, Chairman & Senior Advisor - 30 ans d'expérience en consulting communication. Ex-Président Publicis Maroc, expert en brand engineering."
        keywords="Nawfel Bensari, expertise, consulting, Publicis Maroc, Havas, brand engineering, senior advisor, TRADEMARK"
        canonicalUrl="https://trademark.ma/who"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen flex flex-col bg-white">
        <InteriorHeader title="WHO" subtitle="EXPERTISE" />

        {/* Main Content */}
        <main className="flex-1 pt-20">
          {/* Quote Block - Centered like other pages */}
          <section aria-label="Citation principale" className="bg-white flex justify-center px-8 md:px-16 lg:px-24 py-8">
            <div className="gradient-trademark p-8 max-w-4xl">
              <p className="text-foreground text-sm md:text-base font-normal tracking-wide leading-relaxed uppercase text-justify">
                30 ANS D'EXPÉRIENCE DE CONSULTING EN AGENCES DE COMMUNICATION & CABINETS CONSEIL
              </p>
            </div>
          </section>

          {/* White Content Block - Photo and Logos */}
          <section aria-label="Parcours professionnel" className="bg-white px-8 md:px-16 lg:px-24 pt-8 relative">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap items-end justify-center gap-8 md:gap-12">
                {/* Photo - bottom aligned with start of gray block */}
                <figure className="relative z-10 translate-y-[1px]">
                  <img 
                    src={nawfelPhoto} 
                    alt="Nawfel Bensari - Chairman & Senior Advisor chez TRADEMARK" 
                    className="w-36 md:w-44 h-auto object-contain"
                    loading="lazy"
                  />
                </figure>
                
                {/* Logos */}
                <div className="flex flex-wrap items-start justify-center gap-6 md:gap-10 pb-4 mb-[70px]">
                  <img 
                    src={havasGroup} 
                    alt="Logo Havas Group - Groupe de communication mondial" 
                    className="h-[29px] md:h-9 object-contain"
                    loading="lazy"
                  />
                  <img 
                    src={publicisGroupe} 
                    alt="Logo Publicis Groupe - Leader mondial de la communication" 
                    className="h-10 md:h-12 object-contain"
                    loading="lazy"
                  />
                  <img 
                    src={publicisMaroc} 
                    alt="Logo Publicis Maroc - Filiale du Groupe Publicis au Maroc" 
                    className="h-8 md:h-10 object-contain"
                    loading="lazy"
                  />
                  <img 
                    src={trademarkLogo} 
                    alt="Logo TRADEMARK™ - Cabinet conseil en Brand Engineering" 
                    className="h-[26px] md:h-[35px] object-contain -ml-3"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Gray Content Block - Bio */}
          <section aria-label="Biographie" className="gradient-trademark px-8 md:px-16 lg:px-24 py-12 relative">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-white text-base md:text-lg tracking-wide mb-8">
                <span className="font-semibold">NAWFEL BENSARI</span>
                <span className="font-light"> – CHAIRMAN & SENIOR ADVISOR</span>
              </h2>
              
              <div className="text-white text-sm md:text-base leading-[1.8] font-light tracking-wide space-y-4">
                <p>
                  › 10 ans à Paris au siège de leaders mondiaux du conseil en communication<br />
                  <span className="ml-3">Groupes HAVAS & PUBLICIS</span>
                </p>
                <p>
                  › 10 ans de Présidence de PUBLICIS MAROC<br />
                  <span className="ml-3">Filiale du Groupe Publicis au Maroc & Hub régional Afrique francophone</span>
                </p>
                <p>
                  › 10 ans d'entrepreneuriat : TRADEMARK™ - Brand Engineering<br />
                  <span className="ml-3">Cabinet conseil en ingénierie de marque. Founder, Chairman & Senior Advisor</span>
                </p>
                <p>
                  › 5 ans en tant que Vice-Président de l'UACC<br />
                  <span className="ml-3">Union des Agences Conseil en Communication (2 mandats)</span>
                </p>
                <p>
                  › Speaker & Jury Palmarès<br />
                  <span className="ml-3">Les Impériales - Casablanca Conference, African Cristal Festival,</span><br />
                  <span className="ml-3">World Tourism Day - International Day of Happiness</span>
                </p>
                <p>
                  › Prix & Distinctions<br />
                  <span className="ml-3">Grand Prix de la Publicité / Air France, ONMT</span><br />
                  <span className="ml-3">Festival de New York / Club Med, Cristal Festival / Thé Fandy</span><br />
                  <span className="ml-3">Top Com Award / BMCI Groupe BNP Paribas</span>
                </p>
              </div>

              <p className="text-white text-sm md:text-base font-light tracking-wide leading-relaxed mt-12 uppercase">
                ACCOMPAGNÉ D'UNE ÉQUIPE DE CONSULTANTS MULTIMÉTIERS EXPÉRIMENTÉS, COMPOSÉE SUR MESURE, SELON LES SPÉCIFICITÉS DE CHAQUE MISSION, À PARTIR D'UN ÉCOSYSTÈME ÉPROUVÉ.
              </p>
            </div>
          </section>
        </main>

        <InteriorFooter />
      </div>
    </>
  );
};

export default Who;
