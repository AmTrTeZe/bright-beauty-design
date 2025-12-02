import { useState } from "react";

interface AnchorItem {
  id: string;
  label: string;
}

interface AnchorNavProps {
  items: AnchorItem[];
  activeIndex: number;
}

const AnchorNav = ({ items, activeIndex }: AnchorNavProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed right-6 md:right-10 top-14 z-40 flex flex-col items-end gap-2">
      {items.map((item, index) => {
        const isHovered = hoveredIndex === index;
        const isActive = activeIndex === index && hoveredIndex === null;
        const showLabel = isHovered || isActive;

        return (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="flex items-center gap-2 text-[hsl(200_20%_59%)] hover:text-[hsl(200_20%_50%)] transition-all"
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
  );
};

export default AnchorNav;
