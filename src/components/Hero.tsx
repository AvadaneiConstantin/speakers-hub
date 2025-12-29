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
    <section className="relative h-screen overflow-hidden">
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
        className="absolute"
        style={{
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "1200px",
          padding: "0 1rem",
        }}
      >
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-center">
          <span className="text-white">Audio</span>
          <span className="text-white ml-4">Experience</span>
        </h1>
      </div>

      {/* Perfected - Custom Position */}
      <div
        className="absolute"
        style={{
          top: "40%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "1200px",
          padding: "0 1rem",
        }}
      >
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-center text-blue-400">
          Perfected
        </h2>
      </div>

      {/* Buttons - Custom Position */}
      <div
        className="absolute text-center"
        style={{
          top: "65%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "500px",
          padding: "0 1rem",
        }}
      >
        <p className="text-xl text-white/90 mb-6">
          Discover premium audio speakers with Hi-Fi sound and deep, rich bass
        </p>
        <button
          onClick={scrollToCategories}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
        >
          Explore Products
        </button>
      </div>
    </section>
  );
}
