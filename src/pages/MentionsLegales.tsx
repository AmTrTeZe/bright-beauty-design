import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import Logo from "@/components/Logo";
import InteriorFooter from "@/components/InteriorFooter";
import SEO from "@/components/SEO";

const MentionsLegales = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/", { state: { skipSplash: true } });
  };

  return (
    <>
      <SEO 
        title="Mentions Légales"
        description="Mentions légales et politique de confidentialité de TRADEMARK™ SARL. Informations sur l'éditeur, l'hébergement, la propriété intellectuelle et la protection des données personnelles."
        keywords="mentions légales, politique confidentialité, CNDP, données personnelles, cookies, TRADEMARK, SARL"
        canonicalUrl="https://trademark.ma/mentions-legales"
      />
      
      <div className="min-h-screen flex flex-col bg-white">
        {/* Header with close button */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white px-6 md:px-10 py-4 flex justify-between items-center border-b border-[hsl(200_20%_90%)]">
          <Logo size="sm" />
          
          <h1 className="text-[hsl(200_20%_50%)] text-xs md:text-sm font-light tracking-[0.2em] uppercase">
            Mentions Légales
          </h1>
          
          <button 
            onClick={handleClose}
            className="text-[hsl(200_20%_50%)] hover:text-[hsl(200_20%_30%)] transition-colors p-2"
            aria-label="Fermer et retourner à l'accueil"
          >
            <X className="w-6 h-6" strokeWidth={1} />
          </button>
        </header>

        {/* Main Content */}
        <main className="flex-1 pt-24 pb-12 px-8 md:px-16 lg:px-24">
          <article className="max-w-3xl mx-auto">
            <h2 className="text-[hsl(200_20%_40%)] text-lg md:text-xl font-light tracking-[0.15em] uppercase mb-12 text-center">
              Mentions Légales & Politique de Confidentialité
            </h2>

            <div className="space-y-10 text-[hsl(200_15%_45%)] text-sm md:text-base leading-[1.8] font-light">
              {/* Section 1 */}
              <section>
                <h3 className="text-[hsl(200_20%_35%)] text-base md:text-lg font-normal tracking-wide uppercase mb-4">
                  1. Éditeur du site
                </h3>
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
              </section>

              {/* Section 2 */}
              <section>
                <h3 className="text-[hsl(200_20%_35%)] text-base md:text-lg font-normal tracking-wide uppercase mb-4">
                  2. Hébergement
                </h3>
                <p className="mb-2">Le site www.tmconseil.com est hébergé par :</p>
                <div className="space-y-1">
                  <p>Genious</p>
                  <p>Assif B N 290, Marrakech</p>
                  <p>Email : contact@genious.net</p>
                  <p>Téléphone : +212 524291141</p>
                </div>
              </section>

              {/* Section 3 */}
              <section>
                <h3 className="text-[hsl(200_20%_35%)] text-base md:text-lg font-normal tracking-wide uppercase mb-4">
                  3. Propriété intellectuelle
                </h3>
                <p className="mb-4">
                  L'ensemble du contenu du présent site (structure, design, textes, images, photographies, illustrations, logos, marques, vidéos, sons, etc.) est la propriété exclusive de TRADEMARK™ SARL ou de ses partenaires et est protégé par les lois marocaines et internationales relatives à la propriété intellectuelle (loi n° 2-00 relative aux droits d'auteur et droits voisins, loi n° 17-97 sur la protection de la propriété industrielle).
                </p>
                <p>
                  Toute reproduction, représentation, modification, adaptation ou exploitation, totale ou partielle, du site ou de l'un quelconque de ses éléments, par quelque procédé que ce soit, est strictement interdite sans l'autorisation écrite préalable de TRADEMARK™ SARL et constituerait une contrefaçon sanctionnée pénalement.
                </p>
              </section>

              {/* Section 4 */}
              <section>
                <h3 className="text-[hsl(200_20%_35%)] text-base md:text-lg font-normal tracking-wide uppercase mb-4">
                  4. Données personnelles – Protection des données à caractère personnel
                </h3>
                <p className="mb-6">
                  TRADEMARK™ SARL, en sa qualité de responsable de traitement, collecte et traite des données à caractère personnel dans le strict respect de la loi n° 09-08 promulguée par le Dahir n° 1-09-15 du 18 février 2009 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel et des textes pris pour son application.
                </p>

                <h4 className="text-[hsl(200_20%_40%)] font-normal tracking-wide mb-3">4.1 Finalités du traitement</h4>
                <p className="mb-2">Les données collectées via le formulaire de contact, les candidatures spontanées ou tout autre moyen (nom, prénom, e-mail, téléphone, CV, message, etc.) ont pour finalités exclusives :</p>
                <ul className="list-disc list-inside mb-6 space-y-1 pl-4">
                  <li>répondre à vos demandes de renseignements ou de devis ;</li>
                  <li>traiter vos candidatures ;</li>
                  <li>améliorer notre site et nos services ;</li>
                  <li>réaliser des statistiques anonymes de fréquentation.</li>
                </ul>

                <h4 className="text-[hsl(200_20%_40%)] font-normal tracking-wide mb-3">4.2 Base légale</h4>
                <p className="mb-6">
                  Le traitement repose sur votre consentement et, le cas échéant, sur l'exécution de mesures précontractuelles ou notre intérêt légitime (amélioration du site).
                </p>

                <h4 className="text-[hsl(200_20%_40%)] font-normal tracking-wide mb-3">4.3 Destinataires des données</h4>
                <p className="mb-2">
                  Seul le personnel habilité de TRADEMARK™ SARL et, le cas échéant, nos sous-traitants techniques (hébergeur, prestataires informatiques) liés par une obligation de confidentialité ont accès à vos données.
                </p>
                <p className="mb-6">
                  Aucune donnée n'est transférée hors du Maroc sans garanties appropriées et sans votre consentement exprès.
                </p>

                <h4 className="text-[hsl(200_20%_40%)] font-normal tracking-wide mb-3">4.4 Durée de conservation</h4>
                <ul className="list-disc list-inside mb-2 space-y-1 pl-4">
                  <li>Données de contact (formulaire) : 3 ans à compter du dernier contact.</li>
                  <li>Données de candidature : 2 ans après le dernier contact.</li>
                  <li>Cookies analytiques : 12 mois maximum.</li>
                </ul>
                <p className="mb-6">Au-delà, les données sont anonymisées ou supprimées.</p>

                <h4 className="text-[hsl(200_20%_40%)] font-normal tracking-wide mb-3">4.5 Vos droits</h4>
                <p className="mb-2">Conformément à la loi 09-08, vous disposez des droits suivants :</p>
                <ul className="list-disc list-inside mb-4 space-y-1 pl-4">
                  <li>droit d'accès, de rectification, de suppression, de limitation et d'opposition ;</li>
                  <li>droit à la portabilité de vos données ;</li>
                  <li>droit de retirer votre consentement à tout moment ;</li>
                  <li>droit de définir des directives relatives au sort de vos données après votre décès.</li>
                </ul>
                <p className="mb-4">
                  Pour exercer ces droits ou pour toute question, contactez-nous à : contact@tmconseil.com ou par courrier à l'adresse du siège social.
                </p>
                <p className="mb-6">
                  Vous disposez également du droit d'introduire une réclamation auprès de la Commission Nationale de contrôle de la protection des Données à caractère Personnel (CNDP) – Adresse : 6 bis, rue Sarraj, secteur 6, Hay Riad, Rabat – Site : www.cndp.ma
                </p>

                <h4 className="text-[hsl(200_20%_40%)] font-normal tracking-wide mb-3">4.6 Notification CNDP</h4>
                <p>
                  Les traitements mis en œuvre sur ce site ont fait l'objet d'une déclaration ou sont en cours de déclaration régulière auprès de la CNDP.
                </p>
              </section>

              {/* Section 5 */}
              <section>
                <h3 className="text-[hsl(200_20%_35%)] text-base md:text-lg font-normal tracking-wide uppercase mb-4">
                  5. Cookies et traceurs
                </h3>
                <p className="mb-4">Ce site utilise des cookies et technologies similaires.</p>
                <ul className="list-disc list-inside mb-4 space-y-1 pl-4">
                  <li><strong>Cookies strictement nécessaires :</strong> indispensables au fonctionnement du site (ex. : préférences de consentement).</li>
                  <li><strong>Cookies analytiques :</strong> Google Analytics (anonymisé IP) pour mesurer l'audience.</li>
                  <li><strong>Cookies fonctionnels et de performance :</strong> pour améliorer l'expérience utilisateur.</li>
                </ul>
                <p className="mb-4">
                  Un bandeau de consentement apparaît dès votre arrivée sur le site. Vous pouvez accepter ou refuser.
                </p>
                <p>
                  Pour plus de détails, consultez notre Politique complète des cookies (accessible via le bandeau ou le footer).
                </p>
              </section>

              {/* Section 6 */}
              <section>
                <h3 className="text-[hsl(200_20%_35%)] text-base md:text-lg font-normal tracking-wide uppercase mb-4">
                  6. Responsabilité
                </h3>
                <p className="mb-4">
                  TRADEMARK™ SARL met tout en œuvre pour assurer l'exactitude et la mise à jour des informations diffusées sur ce site, mais ne peut garantir leur exhaustivité ni l'absence d'erreurs.
                </p>
                <p>
                  TRADEMARK™ SARL ne saurait être tenue responsable des dommages directs ou indirects résultant de l'accès ou de l'utilisation du site, ni des interruptions ou dysfonctionnements liés à l'hébergeur ou à la connexion internet.
                </p>
              </section>

              {/* Section 7 */}
              <section>
                <h3 className="text-[hsl(200_20%_35%)] text-base md:text-lg font-normal tracking-wide uppercase mb-4">
                  7. Liens hypertextes
                </h3>
                <p>
                  Le site peut contenir des liens vers des sites tiers. TRADEMARK™ SARL n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu et à leurs pratiques en matière de protection des données.
                </p>
              </section>

              {/* Section 8 */}
              <section>
                <h3 className="text-[hsl(200_20%_35%)] text-base md:text-lg font-normal tracking-wide uppercase mb-4">
                  8. Droit applicable et juridiction compétente
                </h3>
                <p>
                  Les présentes mentions légales sont régies par le droit marocain. Tout litige relatif à l'utilisation du site sera soumis à la compétence exclusive des tribunaux de Casablanca.
                </p>
              </section>

              {/* Date */}
              <p className="text-center text-[hsl(200_20%_60%)] text-sm pt-8 border-t border-[hsl(200_20%_90%)]">
                Date de dernière mise à jour : 2 décembre 2025
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
