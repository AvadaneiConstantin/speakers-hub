/**
 * HomePage Component - Main Application Container
 *
 * Key Bindings:
 * - useState: Local state for category filtering
 * - Product data: 17 products from product.ts
 * - Category data: 5 categories for filtering
 * - All components: Renders complete page layout
 *
 * Functionality:
 * - State management: Manages active category for filtering
 * - Product filtering: Filters products based on selected category
 * - Layout orchestration: Renders all page sections in order
 * - Data flow: Passes props to child components
 */
import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import { products } from "../data/product";
import { categories } from "../data/product";
import Footer from "../components/Footer";

export default function HomePage() {
  // State for filtering
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter products based on active category
  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  // Recommended products (first 4)
  const recommendedProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Features Section */}
      <Features />

      {/* 3. Recommended Products */}
      <section className="py-4 sm:py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-4 sm:mb-6 lg:mb-8 text-gray-900 dark:text-white">
            Recommended Products
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Categories */}
      <Categories
        categories={categories}
        activeCategory={activeCategory}
        onCategoryClick={setActiveCategory}
      />

      {/* 5. Product Catalog (with filtering) */}
      <section className="py-4 sm:py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-4 sm:mb-6 lg:mb-8 text-gray-900 dark:text-white">
            Product Catalog
          </h2>

          {/* Active Category Display */}
          <div className="mb-4 sm:mb-6 lg:mb-8 text-center">
            <span className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm lg:text-base">
              Category:{" "}
            </span>
            <span className="font-bold text-blue-600 dark:text-blue-400 text-xs sm:text-sm lg:text-base">
              {categories.find((c) => c.id === activeCategory)?.name}
            </span>
            <span className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm lg:text-base ml-2 sm:ml-4">
              ({filteredProducts.length} products)
            </span>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-6 sm:py-8 lg:py-12">
              <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base lg:text-lg">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
