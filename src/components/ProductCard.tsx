import { useState } from "react";
import type { Product } from "../types"; // Assuming Product type is simple
import { ShoppingCart, Star, Check, Maximize2 } from "lucide-react";
import FullscreenModal from "./FullscreenModal";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);

  // Adaugă această funcție
  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFullscreenOpen(true);
  };

  // Format price in RON
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ro-RO", {
      style: "currency",
      currency: "RON",
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Handle add to cart with animation
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAdded(true);
    // Reset animation after 2 seconds
    setTimeout(() => setIsAdded(false), 2000);
    console.log("Added to cart:", product.name);
  };

  return (
    <>
      <div className="group relative w-full max-w-sm bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
        {/* --- Image Section --- */}
        <div className="relative aspect-[4/3] bg-zinc-50 dark:bg-zinc-800 overflow-hidden">
          {/* Product Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-6 mix-blend-multiply dark:mix-blend-normal transition-transform duration-700 ease-in-out group-hover:scale-110"
          />

          {/* Rating Badge (Top Right) - Glassmorphism style */}
          <div className="absolute top-4 right-4">
            <span className="flex items-center gap-1 px-3 py-1 text-sm font-semibold rounded-full bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm text-zinc-900 dark:text-white shadow-md">
              <Star size={14} className="fill-amber-400 text-amber-400" />
              {product.rating.toFixed(1)}
            </span>
          </div>

          {/* Adaugă Fullscreen Icon */}
          <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={handleFullscreen}
              className="p-2.5 bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-full shadow-md hover:bg-blue-50 hover:text-blue-500 dark:hover:bg-zinc-700 transition-colors"
              aria-label="Fullscreen view"
            >
              <Maximize2 size={18} />
            </button>
          </div>
        </div>

        {/* --- Content Section --- */}
        <div className="p-5">
          {/* Brand & Category */}
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
              {product.brand}
            </span>
            <span className="text-xs font-medium text-zinc-400 uppercase">
              {product.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white leading-tight mb-4 line-clamp-2 min-h-[56px] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {product.name}
          </h3>

          {/* Price & Cart Action */}
          <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800">
            {/* Price with Gradient */}
            <div>
              <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-400 dark:to-indigo-500">
                {formatPrice(product.price)}
              </span>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={isAdded}
              className={`
              relative overflow-hidden flex items-center justify-center
              h-10 px-6 rounded-full font-semibold text-sm transition-all duration-300
              ${
                isAdded
                  ? "bg-green-500 text-white w-10 px-0"
                  : "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-blue-600 dark:hover:bg-zinc-200 w-auto shadow-lg hover:shadow-blue-500/25"
              }
            `}
            >
              <div
                className={`transition-all duration-300 ${
                  isAdded
                    ? "scale-0 opacity-0 absolute"
                    : "scale-100 opacity-100 flex items-center gap-2"
                }`}
              >
                <span>Add</span>
                <ShoppingCart size={16} />
              </div>

              <div
                className={`absolute transition-all duration-300 ${
                  isAdded ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
              >
                <Check size={18} />
              </div>
            </button>
          </div>
        </div>
      </div>

      <FullscreenModal
        isOpen={isFullscreenOpen}
        onClose={() => setIsFullscreenOpen(false)}
        images={[product.image]}
        productName={product.name}
      />
    </>
  );
}
