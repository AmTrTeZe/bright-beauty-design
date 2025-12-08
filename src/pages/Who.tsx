import InteriorHeader from "@/components/InteriorHeader";
import InteriorFooter from "@/components/InteriorFooter";
import SEO from "@/components/SEO";
import nawfelPhoto from "@/assets/nawfel-bensari-2.png";
import havasGroup from "@/assets/havas-group.png";
import publicisGroupe from "@/assets/publicis-groupe.png";
import publicisMaroc from "@/assets/publicis-maroc.png";
import trademarkLogo from "@/assets/logo-trademark-gray.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";

const Who = () => {
  const { language, t } = useLanguage();
  const prefix = language === "en" ? "/en" : "";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nawfel Bensari",
    "jobTitle": "Chairman & Senior Advisor",
    "worksFor": {
      "@type": "Organization",
      "name": "TRADEMARK"
    },
    "description": language === "fr" 
      ? "30 ans d'expérience de consulting en agences de communication & cabinets conseil"
      : "30 years of consulting experience in communication agencies & consulting firms",
    "alumniOf": ["Havas Group", "Publicis Groupe", "Publicis Maroc"]
  };

  return (
    <>
      <SEO 
        title={t("seo.who.title")}
        description={t("seo.who.description")}
        keywords="Nawfel Bensari, expertise, consulting, Publicis Maroc, Havas, brand engineering, senior advisor, TRADEMARK"
        canonicalUrl={`https://trademark.ma${prefix}/who`}
        structuredData={structuredData}
      />
      
      <div className="min-h-screen flex flex-col bg-white">
        <InteriorHeader title="WHO" subtitle="EXPERTISE" />

        {/* Main Content */}
        <main className="flex-1 pt-20">
          {/* Quote Block - Centered like other pages */}
          <section aria-label="Citation principale" className="bg-white flex justify-center px-8 md:px-20 lg:px-32 py-8">
            <div className="gradient-trademark py-4 px-8 max-w-4xl">
              <p className="text-foreground text-base md:text-lg font-normal tracking-wide leading-relaxed uppercase text-justify">
                {t("who.quote")}
              </p>
            </div>
          </section>

          {/* White Content Block - Photo and Logos */}
          <section aria-label="Parcours professionnel" className="bg-white px-8 md:px-20 lg:px-32 pt-8 pb-0 relative">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap items-end justify-center gap-8 md:gap-12">
                {/* Photo - bottom aligned with start of gray block */}
                <figure className="relative z-10 mb-[-1px]">
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
                    className="h-[29px] md:h-[39px] object-contain -ml-3 -mt-[10px]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Gray Content Block - Bio */}
          <section aria-label="Biographie" className="gradient-trademark px-8 md:px-20 lg:px-32 py-12 relative">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-white text-lg md:text-xl tracking-wide mb-8">
                <span className="font-semibold">{t("who.name")}</span>
                <span className="font-light"> – {t("who.title")}</span>
              </h2>
              
              <div className="text-white text-base md:text-lg leading-[1.8] font-light tracking-wide space-y-4">
                <p>
                  › {t("who.exp1_title")}<br />
                  <span className="ml-3">{t("who.exp1_detail")}</span>
                </p>
                <p>
                  › {t("who.exp2_title")}<br />
                  <span className="ml-3">{t("who.exp2_detail")}</span>
                </p>
                <p>
                  › {t("who.exp3_title")}<br />
                  <span className="ml-3">{t("who.exp3_detail1")}</span><br />
                  <span className="ml-3">{t("who.exp3_detail2")}</span>
                </p>
                <p>
                  › {t("who.exp4_title")}<br />
                  <span className="ml-3">{t("who.exp4_detail")}</span>
                </p>
                <p>
                  › {t("who.exp5_title")}<br />
                  <span className="ml-3">{t("who.exp5_detail")}</span>
                </p>
                <p>
                  › {t("who.exp6_title")}<br />
                  <span className="ml-3">{t("who.exp6_detail1")}</span><br />
                  <span className="ml-3">{t("who.exp6_detail2")}</span><br />
                  <span className="ml-3">{t("who.exp6_detail3")}</span><br />
                  <span className="ml-3">{t("who.exp6_detail4")}</span>
                </p>
              </div>

              <p className="text-white text-base md:text-lg font-light tracking-wide leading-relaxed mt-12 uppercase">
                {t("who.conclusion")}
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
