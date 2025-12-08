import InteriorHeader from "@/components/InteriorHeader";
import InteriorFooter from "@/components/InteriorFooter";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

const How = () => {
  const { language, t } = useLanguage();
  const prefix = language === "en" ? "/en" : "";

  return (
    <>
      <SEO 
        title={t("seo.how.title")}
        description={t("seo.how.description")}
        keywords="processus, écosystème, méthodologie, consulting, expertise multi-métiers, TRADEMARK, approche holistique"
        canonicalUrl={`https://trademark.ma${prefix}/how`}
      />
      
      <div className="min-h-screen flex flex-col bg-white">
        <InteriorHeader title="HOW" subtitle="PROCESS" />

        {/* Main Content */}
        <main className="flex-1 pt-20">
          {/* Quote Block */}
          <section aria-label="Citation principale" className="px-8 md:px-20 lg:px-32">
            <div className="gradient-trademark py-4 px-8 max-w-4xl mx-auto flex justify-center">
              <p className="text-foreground text-base md:text-lg font-normal tracking-wide leading-relaxed uppercase text-justify max-w-2xl">
                {t("how.quote")}
              </p>
            </div>
          </section>

          {/* White Content Block */}
          <section aria-label="Problématique" className="bg-white px-8 md:px-20 lg:px-32 py-12">
            <div className="max-w-4xl mx-auto">
              <p className="text-[hsl(200_15%_45%)] text-base md:text-lg leading-[1.8] font-light tracking-wide text-justify">
                {t("how.context")}
              </p>
            </div>
          </section>

          {/* Dark Section */}
          <section aria-label="Notre approche" className="gradient-trademark px-8 md:px-20 lg:px-32 py-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-foreground text-xl md:text-2xl font-normal tracking-wider uppercase mb-6">
                {t("how.sectionTitle")}
              </h2>
              
              <div className="text-foreground/90 text-base md:text-lg leading-[1.8] font-light tracking-wide text-justify mb-6">
                <p className="mb-4">{t("how.intro")}</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex"><span className="mr-3">-</span><span>{t("how.point1")}</span></li>
                  <li className="flex"><span className="mr-3">-</span><span>{t("how.point2")}</span></li>
                  <li className="flex"><span className="mr-3">-</span><span>{t("how.point3")}</span></li>
                  <li className="flex"><span className="mr-3">-</span><span>{t("how.point4")}</span></li>
                </ul>
                <p>{t("how.conclusion")}</p>
              </div>

              <blockquote className="text-foreground/80 text-base md:text-lg italic font-light mb-6">
                {t("how.blockquote")}
              </blockquote>

              <p className="text-sm md:text-base tracking-wider uppercase font-light mb-6" style={{ color: '#BFCCD3' }}>
                {t("how.values")}
              </p>

              <p className="text-sm md:text-base tracking-wider uppercase font-light" style={{ color: '#BFCCD3' }}>
                {t("how.tagline")}
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
