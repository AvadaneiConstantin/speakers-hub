/**
 * TypeScript Type Definitions - Core Data Models
 *
 * Key Bindings:
 * - Product interface: Product data structure
 * - Category interface: Category data structure
 * - Type safety: Ensures data consistency across components
 * - Export pattern: Centralized type definitions
 *
 * Functionality:
 * - Data modeling: Defines shape of product and category data
 * - Type safety: Prevents runtime errors with TypeScript
 * - Component props: Ensures correct prop types
 * - Data validation: Type checking for API responses
 */
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "wireless" | "soundbars" | "home-theater" | "compact";
  brand: string;
  rating: number;
  description: string;
}

export interface Category {
  id: string;
  name: string;
}
