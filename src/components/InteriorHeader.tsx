import { useState } from "react";
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

interface AnchorItem {
  id: string;
  label: string;
}

interface InteriorHeaderProps {
  title: string;
  subtitle: string;
  anchorItems?: AnchorItem[];
  activeAnchorIndex?: number;
}

const InteriorHeader = ({ title, subtitle, anchorItems, activeAnchorIndex = 0 }: InteriorHeaderProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleAnchorClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white px-4 md:px-10 py-3 md:py-4">
      <div className="flex justify-between items-center">
        <Logo variant="gray" size="sm" />
        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden sm:block text-[hsl(200_20%_50%)] font-normal text-xs md:text-base tracking-[0.15em]">
            {title} | {subtitle}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-[hsl(200_20%_50%)] hover:opacity-70 transition-opacity p-1">
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
      </div>
      
      {anchorItems && anchorItems.length > 0 && (
        <nav className="flex justify-end gap-4 mt-3">
          {anchorItems.map((item, index) => {
            const isHovered = hoveredIndex === index;
            // When any item is hovered, only show label for hovered item
            // When no item is hovered, show label for active item
            const showLabel = hoveredIndex !== null ? isHovered : activeAnchorIndex === index;

            return (
              <button
                key={item.id}
                onClick={() => handleAnchorClick(item.id)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="flex items-center justify-end min-w-[12px] text-[hsl(200_20%_59%)] hover:text-[hsl(200_20%_50%)] transition-colors"
              >
                {showLabel ? (
                  <span className="text-[10px] md:text-xs font-normal tracking-[0.1em] whitespace-nowrap uppercase">
                    {item.label}
                  </span>
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(200_20%_59%)]" />
                )}
              </button>
            );
          })}
        </nav>
      )}
    </header>
  );
};

export default InteriorHeader;
