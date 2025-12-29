import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

interface FullscreenModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  initialIndex?: number;
  productName: string;
}

export default function FullscreenModal({
  isOpen,
  onClose,
  images,
  initialIndex = 0,
  productName,
}: FullscreenModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);

  // Navigation functions
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Zoom function
  const toggleZoom = () => {
    setIsZoomed((prev) => !prev);
  };

  // Keyboard navigation and body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          prevImage();
          break;
        case "ArrowRight":
          nextImage();
          break;
        case " ":
          toggleZoom();
          break;
      }
    };

    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset"; // Cleanup on close
    };
  }, [isOpen, images.length]);

  if (!isOpen) return null;

  return (
    <>
      {/* 1. Backdrop: This element MUST handle the onClose click, and ONLY this element. */}
      <div
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm transition-opacity flex items-center justify-center p-4" // Added p-4 for extra margin
        onClick={onClose} // Closes modal if user clicks anywhere on the backdrop
      >
        {/* Modal Content: This element needs to prevent click propagation. */}
        <div
          // We apply the max-width here to control the maximum size of the content block
          className="relative h-full w-full max-w-7xl"
          onClick={(e) => e.stopPropagation()} // **CRITICAL FIX**: Stops the click from reaching the backdrop's onClose handler
        >
          {/* Close Button (X) */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors"
            aria-label="Close"
          >
            <X size={24} className="text-white" />
          </button>

          {/* Navigation Arrows (Visible only when not zoomed) */}
          {images.length > 1 && !isZoomed && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={28} className="text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={28} className="text-white" />
              </button>
            </>
          )}

          {/* Image Container (Clickable for Zoom) */}
          <div className="flex items-center justify-center h-full w-full">
            <div
              className={`relative max-w-full max-h-full transition-all duration-300 ${
                isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
              } flex items-center justify-center`}
              onClick={toggleZoom} // Zoom on image/container click
            >
              <img
                src={images[currentIndex]}
                alt={`${productName} - Image ${currentIndex + 1}`}
                className={`max-w-full max-h-full object-contain transition-transform duration-300 ${
                  isZoomed
                    ? "scale-[1.5] w-auto h-auto"
                    : "scale-100 w-auto h-auto"
                }`}
                style={isZoomed ? { maxWidth: "none", maxHeight: "none" } : {}}
                draggable="false"
              />
            </div>
          </div>

          {/* Controls Block (Counter, Thumbnails, Name) */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 text-center flex flex-col items-center gap-2">
            {/* Image Counter */}
            {images.length > 1 && (
              <div className="px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full">
                <span className="text-white font-medium text-sm">
                  {currentIndex + 1} / {images.length}
                </span>
              </div>
            )}

            {/* Thumbnail Strip (Visible only when not zoomed) */}
            {images.length > 1 && !isZoomed && (
              <div className="flex gap-2 mt-4">
                {images.map((img, index) => (
                  <button
                    key={index}
                    // Stop propagation here to prevent accidental image zoom/modal close
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(index);
                    }}
                    className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                      currentIndex === index
                        ? "border-blue-500 scale-105"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Product Name */}
            <h3 className="text-white text-lg font-semibold bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg mt-4">
              {productName}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
