import Logo from "@/components/Logo";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const menuItems = [
  { word: "WHY", to: "/why" },
  { word: "WHAT", to: "/what" },
  { word: "HOW", to: "/how" },
  { word: "WHO", to: "/who" },
  { word: "WITH", to: "/with" },
  { word: "WHERE", to: "/where" },
];

interface InteriorHeaderProps {
  title: string;
  subtitle: string;
}

const InteriorHeader = ({ title, subtitle }: InteriorHeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white px-6 md:px-10 py-4 flex justify-between items-center">
      <Logo />
      <div className="flex items-center gap-6">
        <div className="text-[hsl(200_20%_50%)] font-normal text-sm md:text-base tracking-[0.15em]">
          {title} | {subtitle}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="text-[hsl(200_20%_50%)] hover:opacity-70 transition-opacity">
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white border-[hsl(200_20%_80%)]">
            {menuItems.map((item) => (
              <DropdownMenuItem key={item.word} asChild>
                <Link 
                  to={item.to} 
                  className="text-[hsl(200_20%_50%)] font-normal tracking-[0.15em] cursor-pointer"
                >
                  {item.word}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default InteriorHeader;
