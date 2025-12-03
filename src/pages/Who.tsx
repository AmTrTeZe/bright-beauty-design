import InteriorHeader from "@/components/InteriorHeader";
import InteriorFooter from "@/components/InteriorFooter";
import logoTrademark from "@/assets/logo-trademark.png";

const Who = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <InteriorHeader title="WHO" subtitle="EXPERTISE" />

      {/* Main Content */}
      <main className="flex-1 pt-20">
        {/* Quote Block */}
        <div className="gradient-trademark px-8 md:px-16 lg:px-24 py-8">
          <p className="text-foreground text-sm md:text-base font-normal tracking-wide leading-relaxed uppercase max-w-4xl">
            30 ANS D'EXPÉRIENCE DE CONSULTING EN AGENCES DE COMMUNICATION & CABINETS CONSEIL
          </p>
        </div>

        {/* White Content Block - Photo and Logos */}
        <div className="bg-white px-8 md:px-16 lg:px-24 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {/* Photo placeholder */}
              <div className="w-40 h-48 bg-[hsl(200_20%_85%)] flex items-center justify-center">
                <span className="text-[hsl(200_20%_50%)] text-xs text-center px-2">Photo</span>
              </div>
              
              {/* Logos */}
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                <div className="text-[hsl(200_15%_45%)] text-center">
                  <div className="text-xl md:text-2xl font-light tracking-wider">HAVAS</div>
                  <div className="text-xs tracking-widest">GROUP</div>
                </div>
                <div className="text-[hsl(200_15%_45%)] text-center">
                  <div className="text-lg md:text-xl font-light">PUBLICIS</div>
                  <div className="text-xs font-semibold tracking-wider">GROUPE</div>
                </div>
                <div className="text-[hsl(200_15%_45%)] text-center">
                  <div className="text-lg md:text-xl">PubliciS</div>
                  <div className="text-[10px] tracking-wider">CONSEIL</div>
                </div>
                <img 
                  src={logoTrademark} 
                  alt="TRADEMARK Brand Engineering" 
                  className="h-8 md:h-10 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Gray Content Block - Bio */}
        <div className="gradient-trademark px-8 md:px-16 lg:px-24 py-12">
          <div className="max-w-4xl">
            <h2 className="text-white text-base md:text-lg font-semibold tracking-wide mb-8">
              NAWFEL BENSARI – CHAIRMAN & SENIOR ADVISOR
            </h2>
            
            <div className="text-white text-sm md:text-base leading-[2] font-normal tracking-wide space-y-4">
              <p>
                › 10 ans à Paris au siège de leaders mondiaux du conseil en communication / Groupes HAVAS & PUBLICIS
              </p>
              <p>
                › 10 ans de Présidence de PUBLICIS MAROC<br />
                <span className="ml-3">Filiale du Groupe Publicis au Maroc & Hub régional Afrique francophone</span>
              </p>
              <p>
                › 10 ans d'entrepreneuriat : TRADEMARK - Brand Engineering<br />
                <span className="ml-3">Cabinet conseil en ingénierie de marque. Founder, Chairman & Senior Advisor</span>
              </p>
              <p>
                › 5 ans en tant que Vice-Président de l'UACC<br />
                <span className="ml-3">Union des Agences Conseil en Communication (2 mandats)</span>
              </p>
              <p>
                › Speaker & Jury Palmarès<br />
                <span className="ml-3">Les Impériales - Casablanca Conference, African Cristal Festival, World Tourism Day - International Day of Happiness</span>
              </p>
              <p>
                › Prix & Distinctions<br />
                <span className="ml-3">Grand Prix de la Publicité / Air France, ONMT</span><br />
                <span className="ml-3">Festival de New York / Club Med, Cristal Festival / Thé Fandy</span><br />
                <span className="ml-3">Top Com Award / BMCI Groupe BNP Paribas</span>
              </p>
            </div>

            <p className="text-white text-sm md:text-base font-normal tracking-wide leading-relaxed mt-12 uppercase">
              ACCOMPAGNÉ D'UNE ÉQUIPE DE CONSULTANTS MULTIMÉTIERS EXPÉRIMENTÉS, COMPOSÉE SUR MESURE, SELON LES SPÉCIFICITÉS DE CHAQUE MISSION, À PARTIR D'UN ÉCOSYSTÈME ÉPROUVÉ.
            </p>
          </div>
        </div>
      </main>

      <InteriorFooter />
    </div>
  );
};

export default Who;
