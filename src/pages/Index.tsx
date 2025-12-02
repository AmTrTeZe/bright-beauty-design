import Logo from "@/components/Logo";
import MenuItem from "@/components/MenuItem";
import Tagline from "@/components/Tagline";

const menuItems = [
  { word: "WHY", secondWord: "PURPOSE", to: "/why" },
  { word: "WHAT", secondWord: "PRACTICES", to: "/what" },
  { word: "HOW", secondWord: "PROCESS", to: "/how" },
  { word: "WHO", secondWord: "EXPERTISE", to: "/who" },
  { word: "WITH", secondWord: "EXPERIENCE", to: "/with" },
  { word: "WHERE", secondWord: "INFORMATION", to: "/where" },
];

const Index = () => {
  return (
    <div className="min-h-screen gradient-trademark flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 md:p-10">
        <Logo />
      </header>

      {/* Menu - centered */}
      <main className="flex-1 flex items-center justify-center">
        <nav className="flex flex-col gap-3 md:gap-4">
          {menuItems.map((item) => (
            <MenuItem
              key={item.word}
              word={item.word}
              secondWord={item.secondWord}
              to={item.to}
            />
          ))}
        </nav>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 p-6 md:p-10 flex justify-between items-end">
        <div className="text-foreground/60 text-xs font-normal tracking-wider">
          TRADEMARK™ | BRAND AS ASSET
        </div>
        <Tagline />
      </footer>
    </div>
  );
};

export default Index;