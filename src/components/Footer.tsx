/**
 * Footer Component - Comprehensive Site Footer with Links
 *
 * Key Bindings:
 * - Lucide icons: Social media and contact icons
 * - Date object: Dynamic copyright year
 * - Static data: Company info, links, categories
 * - Grid layout: Multi-column responsive design
 *
 * Functionality:
 * - Company information: SpeakersHub details and contact info
 * - Navigation links: Quick links to main sections
 * - Product categories: Links to product categories
 * - Social media: Social platform links with icons
 * - Copyright: Dynamic year with company information
 * - Responsive layout: Adapts from single to multi-column
 */
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Company information
  const companyInfo = {
    name: "SpeakersHub",
    description:
      "Your premier destination for premium audio equipment since 2015",
    email: "hello@speakershub.com",
    phone: "+40 721 123 456",
    address: "Audio Plaza,  Bucharest, Romania",
  };

  // Quick links
  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "Products", href: "#" },
    { label: "Categories", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Contact", href: "#" },
    { label: "FAQs", href: "#" },
  ];

  // Product categories
  const categories = [
    { label: "Wireless Speakers", href: "#" },
    { label: "Soundbars", href: "#" },
    { label: "Home Theater", href: "#" },
    { label: "Headphones", href: "#" },
    { label: "Accessories", href: "#" },
    { label: "Gaming Audio", href: "#" },
  ];

  // Social media links
  const socialLinks = [
    { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
    { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
    { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
    { icon: <Youtube size={20} />, label: "YouTube", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              {companyInfo.name}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base mb-4">
              {companyInfo.description}
            </p>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-white transition-colors text-sm sm:text-base"
                >
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                  className="hover:text-white transition-colors text-sm sm:text-base"
                >
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                <span className="text-sm sm:text-base">
                  {companyInfo.address}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors text-sm sm:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-3 sm:mb-4">Categories</h4>
            <ul className="space-y-2 sm:space-y-3">
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href={category.href}
                    className="hover:text-white transition-colors text-sm sm:text-base"
                  >
                    {category.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-3 sm:mb-4">Follow Us</h4>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm sm:text-base">
            <p className="text-gray-400 mb-3 sm:mb-0">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
