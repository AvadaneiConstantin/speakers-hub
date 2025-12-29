import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { ShoppingCart, User, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [cartItems] = useState(3); // Mock cart count

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section with Image */}
          <div className="flex items-center space-x-3">
            {/* Logo Image Container */}
            <div className="relative w-12 h-12">
              {/* Logo Image */}
              <img
                src="/img/logo.png"
                alt="SpeakersHub Logo"
                className="w-full h-full object-contain p-1.5"
                onError={(e) => {
                  // Fallback dacă imaginea nu se încarcă
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  // Afișează fallback text
                  const fallback = document.createElement("div");
                  fallback.className =
                    "w-full h-full bg-blue-600 rounded-lg flex items-center justify-center";
                  fallback.innerHTML =
                    '<span class="text-white font-bold text-xl">S</span>';
                  target.parentNode?.insertBefore(fallback, target.nextSibling);
                }}
              />

              {/* Gradient Border Effect (optional) */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"></div>
            </div>

            {/* Company Name */}
            <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
              SpeakersHub
            </span>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-6">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={`Switch to ${
                theme === "light" ? "dark" : "light"
              } mode`}
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-gray-700" />
              ) : (
                <Sun className="w-5 h-5 text-yellow-400" />
              )}
            </button>

            {/* Login Button */}
            <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <User className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              <span className="font-medium text-gray-700 dark:text-gray-300">
                Login
              </span>
            </button>

            {/* Shopping Cart */}
            <div className="relative">
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <ShoppingCart className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
