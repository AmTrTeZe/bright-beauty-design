import Logo from "@/components/Logo";
import Tagline from "@/components/Tagline";

const What = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="gradient-trademark p-6 md:p-10 flex justify-between items-center">
        <Logo />
        <div className="text-foreground text-spaced text-sm md:text-lg tracking-[0.3em] font-extralight">
          W H A T | P R A C T I C E S
        </div>
      </header>

      {/* Content */}
      <section className="gradient-trademark flex-1 px-6 md:px-10 lg:px-20 py-16 flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-foreground text-2xl md:text-4xl font-light tracking-wider mb-8">
            PRACTICES
          </h1>
          <p className="text-foreground/70 text-sm md:text-base">
            Contenu à venir...
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-trademark p-6 md:p-10 flex justify-between items-end">
        <div className="text-foreground/60 text-xs font-extralight tracking-wider">
          TRADEMARK™ | BRAND AS ASSET
        </div>
        <Tagline />
      </footer>
    </div>
  );
};

export default What;