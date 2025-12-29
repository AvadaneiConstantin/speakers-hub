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
    <section className="py-4 mt-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{feature.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
