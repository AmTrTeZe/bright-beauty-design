import InteriorHeader from "@/components/InteriorHeader";
import InteriorFooter from "@/components/InteriorFooter";

const With = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <InteriorHeader title="WITH" subtitle="EXPERIENCE" />

      {/* Main Content */}
      <main className="flex-1 pt-20">
        {/* Quote Block */}
        <div className="gradient-trademark px-8 md:px-16 lg:px-24 py-8">
          <p className="text-foreground text-sm md:text-base font-normal tracking-wide leading-relaxed uppercase max-w-4xl">
            EXPERIENCE
          </p>
        </div>

        {/* White Content Block */}
        <div className="bg-white px-8 md:px-16 lg:px-24 py-12">
          <div className="max-w-4xl">
            <p className="text-[hsl(200_15%_45%)] text-sm md:text-base leading-[2] font-normal tracking-wide text-justify">
              Contenu à venir...
            </p>
          </div>
        </div>
      </main>

      <InteriorFooter />
    </div>
  );
};

export default With;
