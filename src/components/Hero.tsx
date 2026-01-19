/**
 * Hero Component - Immersive Video Background Section
 *
 * Key Bindings:
 * - Video element: MP4 background (10.7MB) with autoplay/loop
 * - Document API: Smooth scroll navigation
 * - CSS positioning: Absolute positioning for overlay content
 * - Responsive design: Mobile-first text sizing
 *
 * Functionality:
 * - Video background: Immersive speaker.mp4 video with overlay
 * - Smooth scrolling: Scroll to categories section on CTA click
 * - Text overlay: "Audio Experience Perfected" messaging
 * - Responsive layout: Adaptive text sizing for all devices
 * - Performance optimization: Muted autoplay for better loading
 */
export default function HeroVideoAbsoluteControl() {
  // Function to scroll to categories section
  const scrollToCategories = () => {
    const categoriesSection = document.getElementById("shop-by-category");
    if (categoriesSection) {
      categoriesSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/vid/speaker.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Text Content - Absolute Position */}

      {/* Audio Experience - Custom Position */}
      <div
        className="absolute px-2 sm:px-4"
        style={{
          top: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center">
          <span className="text-white">Audio</span>
          <span className="text-white ml-1 sm:ml-2 md:ml-4">Experience</span>
        </h1>
      </div>

      {/* Perfected - Custom Position */}
      <div
        className="absolute px-2 sm:px-4"
        style={{
          top: "45%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-blue-400">
          Perfected
        </h2>
      </div>

      {/* Buttons - Custom Position */}
      <div
        className="absolute text-center px-2 sm:px-4"
        style={{
          top: "65%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <p className="text-xs sm:text-sm lg:text-base text-white/90 mb-3 sm:mb-4 lg:mb-6">
          Discover premium audio speakers with Hi-Fi sound and deep, rich bass
        </p>
        <button
          onClick={scrollToCategories}
          className="px-4 py-1.5 sm:px-6 sm:py-2 lg:px-8 lg:py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl text-xs sm:text-sm lg:text-base"
        >
          Explore Products
        </button>
      </div>
    </section>
  );
}
