import InteriorHeader from "@/components/InteriorHeader";
import InteriorFooter from "@/components/InteriorFooter";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

interface SectorData {
  title: string;
  brands: { name: string; bold: boolean }[];
}

const sectors: SectorData[] = [
  {
    title: "FOOD & BEVERAGE",
    brands: [
      { name: "COCA-COLA", bold: true },
      { name: "DANONE", bold: false },
      { name: "NESTLÉ", bold: true },
      { name: "HEINEKEN", bold: false },
      { name: "LESIEUR", bold: true },
      { name: "LES DOMAINES AGRICOLES", bold: false },
      { name: "MOULIN D'OR", bold: true },
      { name: "TERRE OCRE", bold: false },
      { name: "AIGUEBELLE", bold: true },
    ],
  },
  {
    title: "TOURISM & TRAVEL",
    brands: [
      { name: "AIR FRANCE", bold: true },
      { name: "BRITISH AIRWAYS", bold: false },
      { name: "QANTAS", bold: true },
      { name: "CLUB MED", bold: false },
      { name: "ACCOR", bold: true },
      { name: "SOFITEL", bold: false },
      { name: "GOLDEN TULIP", bold: true },
      { name: "ROYAL AIR MAROC", bold: false },
      { name: "QANTAS", bold: true },
      { name: "ONMT", bold: false },
      { name: "CRT MARRAKECH", bold: true },
      { name: "BAHJA MARRAKECH", bold: false },
      { name: "PALMERAIE GROUP", bold: true },
      { name: "TERRE ESSENTIELLE", bold: false },
    ],
  },
  {
    title: "BEAUTY & LUXURY",
    brands: [
      { name: "L'OREAL", bold: true },
      { name: "LANCOME", bold: false },
      { name: "GARNIER", bold: true },
      { name: "HELENA RUBINSTEIN", bold: false },
      { name: "VICHY", bold: true },
      { name: "LA ROCHE-POSAY", bold: false },
      { name: "INNEOV", bold: true },
      { name: "LVMH", bold: false },
      { name: "LOEWE", bold: true },
      { name: "ARMANI", bold: false },
    ],
  },
  {
    title: "TECHNOLOGY, TELECOM & HOME APPLIANCES",
    brands: [
      { name: "HP", bold: true },
      { name: "MICROSOFT", bold: false },
      { name: "FRANCE TELECOM", bold: true },
      { name: "ORANGE", bold: false },
      { name: "SFR", bold: true },
      { name: "MEDITEL", bold: false },
      { name: "PHILIPS", bold: true },
      { name: "THOMSON", bold: false },
      { name: "LG", bold: true },
      { name: "WHIRLPOOL", bold: false },
      { name: "TEFAL", bold: true },
      { name: "MOULINEX", bold: false },
    ],
  },
  {
    title: "BANK, CREDIT & INSURANCE",
    brands: [
      { name: "BMCI", bold: true },
      { name: "BNP PARIBAS", bold: false },
      { name: "SOCIETE GENERALE", bold: true },
      { name: "SAHAM BANK", bold: false },
      { name: "CIH", bold: true },
      { name: "CETELEM", bold: false },
      { name: "EQDOM", bold: true },
      { name: "AXA", bold: false },
      { name: "LA MONDIALE", bold: true },
      { name: "CNIA SAADA", bold: false },
      { name: "SAHAM ASSURANCE", bold: true },
      { name: "SAHAM ASSISTANCE", bold: false },
      { name: "MONDIAL ASSISTANCE", bold: true },
      { name: "ISAAF ASSISTANCE", bold: false },
      { name: "BEASSUR MARSH", bold: true },
    ],
  },
  {
    title: "AUTOMOTIVE, TRANSPORT & ENERGY",
    brands: [
      { name: "RENAULT", bold: true },
      { name: "DACIA", bold: false },
      { name: "SEAT", bold: true },
      { name: "CHERY", bold: false },
      { name: "RATP DEV", bold: true },
      { name: "TOTAL ENERGIES", bold: false },
    ],
  },
  {
    title: "GOVERNMENT & INSTITUTIONS",
    brands: [
      { name: "CHEF DU GOUVERNEMENT", bold: true },
      { name: "MINISTERE DE L'INDUSTRIE", bold: false },
      { name: "MINISTERE DE LA CULTURE", bold: true },
      { name: "OCP", bold: false },
      { name: "TANGER MED", bold: true },
      { name: "CGEM", bold: false },
    ],
  },
  {
    title: "HEALTH & WELL BEING",
    brands: [
      { name: "SANOFI", bold: true },
      { name: "AVENTIS", bold: false },
      { name: "PFIZER", bold: true },
      { name: "NOVO NORDISK", bold: false },
      { name: "VIEVA", bold: true },
    ],
  },
  {
    title: "SPORT, MEDIA & ENTERTAINMENT",
    brands: [
      { name: "ADIDAS", bold: true },
      { name: "FEDERATION FRANÇAISE DE RUGBY", bold: false },
      { name: "EUROPE 1", bold: true },
      { name: "GEOMEDIA", bold: false },
      { name: "UACC", bold: true },
      { name: "FESTIVAL INTERNATIONAL DU FILM DE MARRAKECH", bold: false },
      { name: "FESTIVAL MAWAZINE", bold: true },
    ],
  },
  {
    title: "SERVICES, OFFSHORING & CONSULTING",
    brands: [
      { name: "SAHAM GROUP", bold: true },
      { name: "VEOLIA", bold: false },
      { name: "INTELCIA", bold: true },
      { name: "UGGC LAW FIRM", bold: false },
      { name: "MENAPS", bold: true },
    ],
  },
  {
    title: "RETAIL",
    brands: [
      { name: "CARREFOUR", bold: true },
      { name: "CONTINENT", bold: false },
      { name: "IKEA", bold: true },
      { name: "STEELCASE", bold: false },
    ],
  },
  {
    title: "REAL ESTATE",
    brands: [
      { name: "FADESA", bold: true },
      { name: "YASMINE IMMOBILIER", bold: false },
      { name: "MANAZILNA", bold: true },
    ],
  },
  {
    title: "NGO & SOLIDARITY",
    brands: [
      { name: "PLANET FINANCE", bold: true },
      { name: "ATD QUART MONDE", bold: false },
      { name: "TIZI", bold: true },
      { name: "INSAAF", bold: false },
      { name: "SHERPA CLUB", bold: true },
    ],
  },
];

const With = () => {
  const { language } = useLanguage();

  const content = {
    fr: {
      seo: {
        title: "With - Experience",
        description: "Découvrez les marques prestigieuses accompagnées par TRADEMARK™: Coca-Cola, L'Oréal, Air France, BMCI, Renault et plus de 100 références dans 13 secteurs d'activité.",
        keywords: "références clients, portfolio, marques, Coca-Cola, L'Oréal, Air France, BMCI, expérience, TRADEMARK",
      },
      ariaLabel: "Références clients par secteur",
    },
    en: {
      seo: {
        title: "With - Experience",
        description: "Discover the prestigious brands supported by TRADEMARK™: Coca-Cola, L'Oréal, Air France, BMCI, Renault and more than 100 references in 13 business sectors.",
        keywords: "client references, portfolio, brands, Coca-Cola, L'Oréal, Air France, BMCI, experience, TRADEMARK",
      },
      ariaLabel: "Client references by sector",
    },
  };

  const t = content[language];

  return (
    <>
      <SEO 
        title={t.seo.title}
        description={t.seo.description}
        keywords={t.seo.keywords}
        canonicalUrl={`https://trademark.ma${language === 'en' ? '/en' : ''}/with`}
      />
      
      <div className="min-h-screen flex flex-col bg-white">
        <InteriorHeader title="WITH" subtitle="EXPERIENCE" />

        {/* Main Content */}
        <main className="flex-1 pt-20">
          {/* Sectors List */}
          <section aria-label={t.ariaLabel} className="bg-white px-8 md:px-20 lg:px-32 py-12">
            <div className="max-w-4xl mx-auto space-y-8">
              {sectors.map((sector, index) => (
                <article key={index}>
                  {/* Category Badge */}
                  <div className="inline-block gradient-trademark px-4 py-2 mb-3">
                    <h2 className="text-white text-xs md:text-sm font-normal tracking-wider">
                      {sector.title}
                    </h2>
                  </div>
                  {/* Brand Names */}
                  <p className="leading-relaxed">
                    {sector.brands.map((brand, brandIndex) => (
                      <span
                        key={brandIndex}
                        className={`text-base md:text-lg tracking-wide text-[#849aa9] ${
                          brand.bold ? "font-medium" : "font-light"
                        }`}
                      >
                        {brand.name}
                        {brandIndex < sector.brands.length - 1 && " "}
                      </span>
                    ))}
                  </p>
                </article>
              ))}

              {/* Tagline */}
              <p className="text-sm md:text-base tracking-wider uppercase font-light mt-8" style={{ color: '#849aa9' }}>
                TRADEMARK™ | AS CLIENTS TRUST
              </p>
            </div>
          </section>
        </main>

        <InteriorFooter />
      </div>
    </>
  );
};

export default With;