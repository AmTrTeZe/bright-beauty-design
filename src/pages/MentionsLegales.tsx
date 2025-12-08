import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import Logo from "@/components/Logo";
import InteriorFooter from "@/components/InteriorFooter";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

const MentionsLegales = () => {
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const prefix = language === "en" ? "/en" : "";

  const handleClose = () => {
    navigate(prefix || "/", { state: { skipSplash: true } });
  };

  // Content based on language
  const content = language === "en" ? {
    section1Title: "1. Site Publisher",
    section1Content: (
      <div className="space-y-1">
        <p><strong>Company name:</strong> TRADEMARK™</p>
        <p><strong>Legal form:</strong> SARLAU (Single-Member Limited Liability Company)</p>
        <p><strong>Registered office:</strong> Rue Soumaya, Résidence Shahrazade 3, N° 22, 5th floor - Palmiers 2000 Casablanca</p>
        <p><strong>Office and correspondence:</strong> Villa 25, rue 39, Lotissement Laymoune 2, 20190 Casablanca, Morocco</p>
        <p><strong>ICE:</strong> 001563660000042 - <strong>CNSS:</strong> 4266525</p>
        <p><strong>Trade Register:</strong> Registered in Casablanca under number 315669</p>
        <p><strong>Tax ID:</strong> 34793631 - <strong>Fiscal ID:</strong> 15204322</p>
        <p><strong>Share capital:</strong> 170,000 Dirhams</p>
        <p><strong>Phone:</strong> +212(0)674010101</p>
        <p><strong>Email:</strong> contact@tmconseil.com</p>
        <p><strong>Publication Director:</strong> Nawfel Bensari, Manager</p>
      </div>
    ),
    section2Title: "2. Hosting",
    section2Content: (
      <>
        <p className="mb-2">The website www.tmconseil.com is hosted by:</p>
        <div className="space-y-1">
          <p>Genious</p>
          <p>Assif B N 290, Marrakech</p>
          <p>Email: contact@genious.net</p>
          <p>Phone: +212 524291141</p>
        </div>
      </>
    ),
    section3Title: "3. Intellectual Property",
    section3Content: (
      <>
        <p className="mb-4">
          All content on this website (structure, design, texts, images, photographs, illustrations, logos, trademarks, videos, sounds, etc.) is the exclusive property of TRADEMARK™ SARL or its partners and is protected by Moroccan and international intellectual property laws (Law No. 2-00 on copyright and related rights, Law No. 17-97 on industrial property protection).
        </p>
        <p>
          Any reproduction, representation, modification, adaptation or exploitation, in whole or in part, of the site or any of its elements, by any means whatsoever, is strictly prohibited without the prior written authorization of TRADEMARK™ SARL and would constitute infringement subject to criminal penalties.
        </p>
      </>
    ),
    section4Title: "4. Personal Data - Protection of Personal Data",
    section5Title: "5. Cookies and Trackers",
    section6Title: "6. Liability",
    section7Title: "7. Hyperlinks",
    section8Title: "8. Applicable Law and Jurisdiction",
  } : {
    section1Title: "1. Éditeur du site",
    section1Content: (
      <div className="space-y-1">
        <p><strong>Dénomination sociale :</strong> TRADEMARK™</p>
        <p><strong>Forme juridique :</strong> SARLAU (Société à Responsabilité Limitée à Associé Unique)</p>
        <p><strong>Siège social :</strong> Rue Soumaya, Résidence Shahrazade 3, N° 22, 5ème étage - Palmiers 2000 Casablanca</p>
        <p><strong>Bureau et correspondance :</strong> Villa 25, rue 39, Lotissement Laymoune 2, 20190 Casablanca, Maroc</p>
        <p><strong>ICE :</strong> 001563660000042 - <strong>CNSS :</strong> 4266525</p>
        <p><strong>Registre du Commerce :</strong> Inscrite au RC de Casablanca sous le numéro 315669</p>
        <p><strong>Patente :</strong> 34793631 - <strong>Identifiant Fiscal :</strong> 15204322</p>
        <p><strong>Capital social :</strong> 170 000 Dirhams</p>
        <p><strong>Téléphone :</strong> +212(0)674010101</p>
        <p><strong>E-mail :</strong> contact@tmconseil.com</p>
        <p><strong>Directeur de la publication :</strong> Nawfel Bensari, Gérant</p>
      </div>
    ),
    section2Title: "2. Hébergement",
    section2Content: (
      <>
        <p className="mb-2">Le site www.tmconseil.com est hébergé par :</p>
        <div className="space-y-1">
          <p>Genious</p>
          <p>Assif B N 290, Marrakech</p>
          <p>Email : contact@genious.net</p>
          <p>Téléphone : +212 524291141</p>
        </div>
      </>
    ),
    section3Title: "3. Propriété intellectuelle",
    section3Content: (
      <>
        <p className="mb-4">
          L'ensemble du contenu du présent site (structure, design, textes, images, photographies, illustrations, logos, marques, vidéos, sons, etc.) est la propriété exclusive de TRADEMARK™ SARL ou de ses partenaires et est protégé par les lois marocaines et internationales relatives à la propriété intellectuelle (loi n° 2-00 relative aux droits d'auteur et droits voisins, loi n° 17-97 sur la protection de la propriété industrielle).
        </p>
        <p>
          Toute reproduction, représentation, modification, adaptation ou exploitation, totale ou partielle, du site ou de l'un quelconque de ses éléments, par quelque procédé que ce soit, est strictement interdite sans l'autorisation écrite préalable de TRADEMARK™ SARL et constituerait une contrefaçon sanctionnée pénalement.
        </p>
      </>
    ),
    section4Title: "4. Données personnelles – Protection des données à caractère personnel",
    section5Title: "5. Cookies et traceurs",
    section6Title: "6. Responsabilité",
    section7Title: "7. Liens hypertextes",
    section8Title: "8. Droit applicable et juridiction compétente",
  };

  return (
    <>
      <SEO 
        title={t("seo.mentionsLegales.title")}
        description={t("seo.mentionsLegales.description")}
        keywords="mentions légales, politique confidentialité, CNDP, données personnelles, cookies, TRADEMARK, SARL"
        canonicalUrl={`https://trademark.ma${language === "en" ? "/en/legal-notice" : "/mentions-legales"}`}
      />
      
      <div className="min-h-screen flex flex-col bg-white">
        {/* Header with close button */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white px-6 md:px-10 py-4 flex justify-between items-center border-b border-[hsl(200_20%_90%)]">
          <Logo size="sm" variant="gray" />
          
          <h1 className="text-[hsl(200_20%_50%)] text-xs md:text-sm font-light tracking-[0.2em] uppercase">
            {t("mentionsLegales.title")}
          </h1>
          
          <button 
            onClick={handleClose}
            className="text-[hsl(200_20%_50%)] hover:text-[hsl(200_20%_30%)] transition-colors p-2"
            aria-label={t("mentionsLegales.closeLabel")}
          >
            <X className="w-6 h-6" strokeWidth={1} />
          </button>
        </header>

        {/* Main Content */}
        <main className="flex-1 pt-24 pb-12 px-8 md:px-16 lg:px-24">
          <article className="max-w-3xl mx-auto">
            <h2 className="text-[hsl(200_20%_40%)] text-lg md:text-xl font-light tracking-[0.15em] uppercase mb-12 text-center">
              {t("mentionsLegales.subtitle")}
            </h2>

            <div className="space-y-10 text-[hsl(200_15%_45%)] text-sm md:text-base leading-[1.8] font-light">
              {/* Section 1 */}
              <section>
                <h3 className="text-[hsl(200_20%_35%)] text-base md:text-lg font-normal tracking-wide uppercase mb-4">
                  {content.section1Title}
                </h3>
                {content.section1Content}
              </section>

              {/* Section 2 */}
              <section>
                <h3 className="text-[hsl(200_20%_35%)] text-base md:text-lg font-normal tracking-wide uppercase mb-4">
                  {content.section2Title}
                </h3>
                {content.section2Content}
              </section>

              {/* Section 3 */}
              <section>
                <h3 className="text-[hsl(200_20%_35%)] text-base md:text-lg font-normal tracking-wide uppercase mb-4">
                  {content.section3Title}
                </h3>
                {content.section3Content}
              </section>

              {/* Section 4 - keeping French for legal compliance */}
              <section>
                <h3 className="text-[hsl(200_20%_35%)] text-base md:text-lg font-normal tracking-wide uppercase mb-4">
                  {content.section4Title}
                </h3>
                <p className="mb-6">
                  {language === "en" 
                    ? "TRADEMARK™ SARL, as data controller, collects and processes personal data in strict compliance with Law No. 09-08 enacted by Dahir No. 1-09-15 of February 18, 2009 on the protection of individuals with regard to the processing of personal data."
                    : "TRADEMARK™ SARL, en sa qualité de responsable de traitement, collecte et traite des données à caractère personnel dans le strict respect de la loi n° 09-08 promulguée par le Dahir n° 1-09-15 du 18 février 2009 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel et des textes pris pour son application."
                  }
                </p>
              </section>

              {/* Section 5 */}
              <section>
                <h3 className="text-[hsl(200_20%_35%)] text-base md:text-lg font-normal tracking-wide uppercase mb-4">
                  {content.section5Title}
                </h3>
                <p className="mb-4">
                  {language === "en" 
                    ? <>This site uses cookies and similar technologies. You can change your preferences by clicking <button onClick={() => { localStorage.removeItem("cookie-consent"); window.location.reload(); }} className="underline hover:no-underline cursor-pointer">here</button>.</>
                    : <>Ce site utilise des cookies et technologies similaires. Vous pouvez modifier vos préférences en cliquant <button onClick={() => { localStorage.removeItem("cookie-consent"); window.location.reload(); }} className="underline hover:no-underline cursor-pointer">ici</button>.</>
                  }
                </p>
              </section>

              {/* Section 6 */}
              <section>
                <h3 className="text-[hsl(200_20%_35%)] text-base md:text-lg font-normal tracking-wide uppercase mb-4">
                  {content.section6Title}
                </h3>
                <p>
                  {language === "en"
                    ? "TRADEMARK™ SARL makes every effort to ensure the accuracy and updating of information published on this site, but cannot guarantee its completeness or the absence of errors."
                    : "TRADEMARK™ SARL met tout en œuvre pour assurer l'exactitude et la mise à jour des informations diffusées sur ce site, mais ne peut garantir leur exhaustivité ni l'absence d'erreurs."
                  }
                </p>
              </section>

              {/* Section 7 */}
              <section>
                <h3 className="text-[hsl(200_20%_35%)] text-base md:text-lg font-normal tracking-wide uppercase mb-4">
                  {content.section7Title}
                </h3>
                <p>
                  {language === "en"
                    ? "The site may contain links to third-party sites. TRADEMARK™ SARL has no control over these sites and disclaims any responsibility for their content and data protection practices."
                    : "Le site peut contenir des liens vers des sites tiers. TRADEMARK™ SARL n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu et à leurs pratiques en matière de protection des données."
                  }
                </p>
              </section>

              {/* Section 8 */}
              <section>
                <h3 className="text-[hsl(200_20%_35%)] text-base md:text-lg font-normal tracking-wide uppercase mb-4">
                  {content.section8Title}
                </h3>
                <p>
                  {language === "en"
                    ? "These legal notices are governed by Moroccan law. Any dispute relating to the use of the site shall be subject to the exclusive jurisdiction of the courts of Casablanca."
                    : "Les présentes mentions légales sont régies par le droit marocain. Tout litige relatif à l'utilisation du site sera soumis à la compétence exclusive des tribunaux de Casablanca."
                  }
                </p>
              </section>

              {/* Date */}
              <p className="text-center text-[hsl(200_20%_60%)] text-sm pt-8 border-t border-[hsl(200_20%_90%)]">
                {t("mentionsLegales.lastUpdate")}
              </p>
            </div>
          </article>
        </main>

        <InteriorFooter />
      </div>
    </>
  );
};

export default MentionsLegales;
