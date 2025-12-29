import type { Category } from "../types";

// Define image paths for each category
const categoryImages: Record<string, string> = {
  all: "/img/wireless1.avif",
  wireless: "/img/wireless2.avif",
  soundbars: "/img/soundbar1.avif",
  "home-theater": "/img/home3.avif",
  compact: "/img/compact1.avif",
};

// Fallback image
const fallbackImage =
  "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&auto=format";

// Category descriptions
const categoryDescriptions: Record<string, string> = {
  all: "View all products",
  wireless: "Portable & Bluetooth",
  soundbars: "TV Audio Systems",
  "home-theater": "5.1 & 7.1 Systems",
  compact: "Mini Speakers",
};

interface CategoriesProps {
  categories: Category[];
  activeCategory: string;
  onCategoryClick: (categoryId: string) => void;
}

export default function Categories({
  categories,
  activeCategory,
  onCategoryClick,
}: CategoriesProps) {
  return (
    <section
      id="shop-by-category"
      className="py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Shop by Category
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => onCategoryClick(category.id)}
                className={`
                  relative group overflow-hidden rounded-2xl 
                  h-48 md:h-56 transition-all duration-500
                  ${
                    isActive
                      ? "scale-[1.02] shadow-2xl" // Scoatem ring-4
                      : "shadow-lg hover:shadow-2xl"
                  }
                  hover:scale-[1.03] active:scale-[0.98]
                  border-2 ${
                    isActive
                      ? "border-blue-500" // Doar bordura subtire
                      : "border-transparent hover:border-blue-300 dark:hover:border-blue-700"
                  }
                `}
              >
                {/* Background Image with Hover Effects */}
                <div className="absolute inset-0">
                  <img
                    src={categoryImages[category.id] || fallbackImage}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = fallbackImage;
                    }}
                  />

                  {/* Multi-layer Overlay for Hover Effects */}
                  <div className="absolute inset-0">
                    {/* Base gradient overlay */}
                    <div
                      className={`
                      absolute inset-0 bg-gradient-to-t 
                      ${
                        isActive
                          ? "from-black/80 via-black/50 to-black/40"
                          : "from-black/70 via-black/40 to-black/30"
                      }
                      group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/40
                      transition-all duration-500
                    `}
                    />

                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />

                    {/* Pulse effect when active */}
                    {isActive && (
                      <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-blue-500/5 to-transparent" />
                    )}
                  </div>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine" />
                  </div>
                </div>

                {/* Content Container */}
                <div className="relative h-full flex flex-col items-center justify-center p-6 text-center z-10">
                  {/* Category Name with Text Effects - NOW BLUE when active */}
                  <h3
                    className={`
                    text-2xl font-bold mb-2
                    ${
                      isActive
                        ? "text-blue-300" // ALBASTRU pentru categorie activă
                        : "text-white/95 group-hover:text-white"
                    }
                    transition-all duration-300
                    drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]
                    group-hover:drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]
                    group-hover:tracking-wide
                    ${isActive ? "tracking-wide" : ""}
                  `}
                  >
                    {category.name}
                  </h3>

                  {/* Description - KEEP BLUE when active */}
                  <p
                    className={`
                    text-sm font-medium
                    ${
                      isActive
                        ? "text-blue-200" // Albastru pentru categorie activă
                        : "text-gray-300 group-hover:text-gray-200"
                    }
                    transition-all duration-300
                    drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]
                    opacity-0 group-hover:opacity-100
                    transform translate-y-2 group-hover:translate-y-0
                    ${isActive ? "opacity-100 translate-y-0" : ""}
                  `}
                  >
                    {categoryDescriptions[category.id]}
                  </p>

                  {/* Active Indicator with Animation - SUBTIL */}
                  {isActive && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-6 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                    </div>
                  )}

                  {/* Hover Indicator */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-4 h-1 bg-white/50 rounded-full"></div>
                  </div>
                </div>

                {/* Click Ripple Effect Container */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 bg-blue-500/0 group-active:bg-blue-500/10 transition-colors duration-200" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
