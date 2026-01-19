export default function Features() {
  const features = [
    {
      icon: "⭐",
      title: "Premium Quality",
      description: "Top brand products with warranty",
    },
    {
      icon: "🎧",
      title: "Audio Expertise",
      description: "Specialized consultation for every need",
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      description: "24-48h delivery across the country",
    },
  ];

  return (
    <section className="py-1 sm:py-2 mt-1 sm:mt-2">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-1 sm:p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-lg font-bold text-gray-900 dark:text-white mb-1">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
