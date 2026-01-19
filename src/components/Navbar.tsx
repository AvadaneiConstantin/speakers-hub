/**
 * Navbar Component - Navigation Header with Theme Management
 *
 * Key Bindings:
 * - useTheme: Theme context hook (dark/light mode)
 * - Lucide icons: ShoppingCart, User, Sun, Moon
 * - localStorage: Theme persistence
 * - CSS backdrop-blur: Glassmorphism effect
 *
 * Functionality:
 * - Theme switching: Toggle between dark/light modes
 * - Navigation: Logo and navigation items
 * - Cart indicator: Mock cart with badge (count: 3)
 * - User interface: Login button (UI only)
 * - Sticky positioning: Fixed header with backdrop blur
 */
import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import {
  ShoppingCart,
  User,
  Sun,
  Moon,
  Menu,
  X,
  Home,
  Headphones,
  Info,
  Mail,
  ShoppingBag,
} from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [cartItems] = useState(3); // Mock cart count
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Navigation links
  const navLinks = [
    { name: "Home", href: "#", icon: Home, isActive: true },
    { name: "Products", href: "#products", icon: Headphones },
    { name: "Categories", href: "#categories", icon: ShoppingBag },
    { name: "About", href: "#about", icon: Info },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <>
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-lg bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-800 shadow-sm"
            : "backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-100 dark:border-gray-800"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              {/* Logo Image */}
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                <img
                  src="/img/logo.png"
                  alt="SpeakersHub Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const fallback = document.createElement("div");
                    fallback.className =
                      "w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center";
                    fallback.innerHTML =
                      '<span class="text-white font-bold text-sm sm:text-lg">SH</span>';
                    target.parentNode?.insertBefore(
                      fallback,
                      target.nextSibling,
                    );
                  }}
                />
              </div>

              {/* Company Name - Visible on Mobile AND Desktop */}
              <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent sm:text-lg">
                SpeakersHub
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    link.isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop Action Items */}
            <div className="hidden sm:flex items-center space-x-3 sm:space-x-4">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              >
                {theme === "light" ? (
                  <Moon className="w-5 h-5 text-gray-700" />
                ) : (
                  <Sun className="w-5 h-5 text-yellow-400" />
                )}
              </button>

              {/* Login Button */}
              <button className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <User className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Login
                </span>
              </button>

              {/* Shopping Cart */}
              <div className="relative">
                <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative">
                  <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300" />
                  {cartItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                      {cartItems}
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex sm:hidden items-center space-x-2">
              {/* Shopping Cart for Mobile */}
              <div className="relative mr-2">
                <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <ShoppingCart className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  {cartItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      {cartItems}
                    </span>
                  )}
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`fixed inset-0 z-50 sm:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeMobileMenu}
        />

        {/* Menu Content - Slides from right */}
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-sm bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SH</span>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                    SpeakersHub
                  </h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Premium Audio Solutions
                  </p>
                </div>
              </div>
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close mobile menu"
              >
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex-1 overflow-y-auto py-6">
              <div className="space-y-1 px-4">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className={`flex items-center space-x-3 px-4 py-4 rounded-xl transition-all ${
                        link.isActive
                          ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                      onClick={closeMobileMenu}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          link.isActive
                            ? "text-blue-600 dark:text-blue-400"
                            : "text-gray-500 dark:text-gray-400"
                        }`}
                      />
                      <span className="font-medium">{link.name}</span>
                      {link.isActive && (
                        <span className="ml-auto w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                      )}
                    </a>
                  );
                })}
              </div>

              {/* Divider */}
              <div className="my-6 px-4">
                <div className="h-px bg-gray-200 dark:bg-gray-700"></div>
              </div>

              {/* Action Items */}
              <div className="px-4 space-y-4">
                {/* Theme Toggle */}
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <div className="flex items-center space-x-3">
                    {theme === "light" ? (
                      <Moon className="w-5 h-5 text-gray-700" />
                    ) : (
                      <Sun className="w-5 h-5 text-yellow-400" />
                    )}
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {theme === "light" ? "Dark Mode" : "Light Mode"}
                    </span>
                  </div>
                  <button
                    onClick={toggleTheme}
                    className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
                    aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        theme === "light" ? "translate-x-1" : "translate-x-6"
                      }`}
                    />
                  </button>
                </div>

                {/* Login */}
                <button className="flex items-center justify-between w-full p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      Login / Sign Up
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Free account
                  </span>
                </button>

                {/* Cart */}
                <button className="flex items-center justify-between w-full p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:opacity-90 transition-opacity">
                  <div className="flex items-center space-x-3">
                    <ShoppingCart className="w-5 h-5 text-white" />
                    <span className="font-medium text-white">View Cart</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-medium">
                      {cartItems} items
                    </span>
                    <div className="bg-white/20 px-2 py-1 rounded-lg">
                      <span className="text-xs text-white font-semibold">
                        ${cartItems * 99}.00
                      </span>
                    </div>
                  </div>
                </button>
              </div>

              {/* Contact Info */}
              <div className="mt-8 px-4">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Need help?
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Call us at{" "}
                    <a
                      href="tel:+18005551234"
                      className="text-blue-600 dark:text-blue-400 font-medium"
                    >
                      +1 (800) 555-1234
                    </a>
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Mon-Fri: 9AM-6PM EST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
