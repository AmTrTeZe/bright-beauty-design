import InteriorHeader from "@/components/InteriorHeader";
import InteriorFooter from "@/components/InteriorFooter";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

const Why = () => {
  const { language, t } = useLanguage();
  const prefix = language === "en" ? "/en" : "";

  return (
    <>
      <SEO 
        title={t("seo.why.title")}
        description={t("seo.why.description")}
        keywords="pourquoi marque, capital stratégique, actif opérationnel, brand engineering, TRADEMARK, stratégie marque"
        canonicalUrl={`https://trademark.ma${prefix}/why`}
      />
      
      <div className="min-h-screen flex flex-col bg-white">
        <InteriorHeader title="WHY" subtitle="PURPOSE" />

        {/* Main Content */}
        <main className="flex-1 pt-20">
          {/* Quote Block */}
          <section aria-label="Citation principale" className="px-8 md:px-20 lg:px-32">
            <div className="gradient-trademark py-4 px-8 max-w-4xl mx-auto flex justify-center">
              <p className="text-foreground text-base md:text-lg font-normal tracking-wide leading-relaxed uppercase text-justify max-w-2xl">
                {t("why.quote")}
              </p>
            </div>
          </section>

          {/* White Content Block */}
          <section aria-label="Contexte" className="bg-white px-8 md:px-20 lg:px-32 py-12">
            <div className="max-w-4xl mx-auto">
              <p className="text-[hsl(200_15%_45%)] text-base md:text-lg leading-[1.8] font-light tracking-wide text-justify">
                {t("why.context")}
              </p>
            </div>
          </section>

          {/* Dark Section */}
          <section aria-label="Brand Engineering" className="gradient-trademark px-8 md:px-20 lg:px-32 py-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-foreground text-xl md:text-2xl font-normal tracking-wider uppercase mb-6">
                {t("why.sectionTitle")}
              </h2>
              
              <p className="text-foreground/90 text-base md:text-lg leading-[1.8] font-light tracking-wide text-justify mb-6">
                {t("why.sectionText")}
              </p>

              <blockquote className="text-foreground/80 text-base md:text-lg italic font-light mb-6">
                {t("why.blockquote")}
              </blockquote>

              <p className="text-sm md:text-base tracking-wider uppercase font-light mb-6" style={{ color: '#BFCCD3' }}>
                {t("why.practices")}
              </p>

              <p className="text-sm md:text-base tracking-wider uppercase font-light" style={{ color: '#BFCCD3' }}>
                {t("why.tagline")}
              </p>
            </div>
          </section>
        </main>

        <InteriorFooter />
      </div>
    </>
  );
};

export default Why;
