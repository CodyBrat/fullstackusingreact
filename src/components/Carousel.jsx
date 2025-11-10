import { useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { FiShoppingCart, FiChevronLeft, FiChevronRight } from "react-icons/fi";

// NOTE: I've updated the default items to include image and background sources.
const DEFAULT_ITEMS = [
  {
    id: 1,
    title: "Cosmic Voyager",
    description: "A tee for the dreamers and explorers of the universe.",
    imgSrc: "https://images.unsplash.com/photo-1503341504253-dff481648536?q=80&w=1974&auto=format&fit=crop",
    bgSrc: "https://images.unsplash.com/photo-1503341504253-dff481648536?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Urban Abstract",
    description: "Wear a piece of the city's soul.",
    imgSrc: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2070&auto=format&fit=crop",
    bgSrc: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Retro Wave",
    description: "Ride the vibrant waves of the 80s aesthetic.",
    imgSrc: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=2070&auto=format&fit=crop",
    bgSrc: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=2070&auto=format&fit=crop",
  },
];

// Main Carousel Component
export default function ModernCarousel({
  items = DEFAULT_ITEMS,
  animationDuration = 0.8, // Prop for animation time
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const cardsRef = useRef([]);
  const containerRef = useRef(null);
  const prevIndexRef = useRef(currentIndex);

  useLayoutEffect(() => {
    prevIndexRef.current = currentIndex;
  }, [currentIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    const nextIndex = (currentIndex + 1) % items.length;
    animate(currentIndex, nextIndex, "next");
  };

  const handlePrev = () => {
    if (isAnimating) return;
    const nextIndex = (currentIndex - 1 + items.length) % items.length;
    animate(currentIndex, nextIndex, "prev");
  };

  const animate = (oldIndex, newIndex, direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    const oldCard = cardsRef.current[oldIndex];
    const newCard = cardsRef.current[newIndex];

    const timeline = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
        setCurrentIndex(newIndex);
      },
    });

    const xPercent = direction === "next" ? -100 : 100;
    const rotateY = direction === "next" ? 45 : -45;

    // Set initial state for the new card
    gsap.set(newCard, {
      display: 'flex',
      xPercent: -xPercent,
      rotateY: -rotateY,
      autoAlpha: 1,
      zIndex: 10
    });
     gsap.set(oldCard, { zIndex: 5 });

    // Animate old card out
    timeline.to(oldCard, {
      xPercent: xPercent,
      rotateY: rotateY,
      autoAlpha: 0,
      duration: animationDuration,
      ease: "power3.inOut",
    }, 0);

    // Animate new card in
    timeline.to(newCard, {
      xPercent: 0,
      rotateY: 0,
      duration: animationDuration,
      ease: "power3.inOut",
    }, 0);
  };

  const activeItem = items[currentIndex];

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center w-full max-w-2xl mx-auto h-[500px] font-sans"
    >
      {/* Blurred Background */}
      <div className="absolute inset-0 w-full h-full">
        {items.map((item, i) => (
          <div
            key={item.id}
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${item.bgSrc})`,
              opacity: i === currentIndex ? 1 : 0,
            }}
          />
        ))}
        <div className="absolute inset-0 w-full h-full bg-black/50 backdrop-blur-xl" />
      </div>

      {/* Card Carousel */}
      <div className="relative w-[300px] h-[400px] [perspective:1000px]">
        {items.map((item, i) => (
          <div
            key={item.id}
            ref={(el) => (cardsRef.current[i] = el)}
            className="absolute top-0 left-0 w-full h-full flex-col justify-between p-6 bg-white/10 rounded-2xl shadow-2xl backdrop-blur-md border border-white/20"
            style={{
                display: i === currentIndex ? 'flex' : 'none',
                backfaceVisibility: 'hidden', // Improves rendering during rotation
            }}
          >
            <div className="flex-grow flex items-center justify-center">
                <img src={item.imgSrc} alt={item.title} className="max-w-full max-h-full object-contain drop-shadow-2xl"/>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white">{item.title}</h2>
              <p className="text-sm text-gray-200 mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between w-[350px] mt-8">
        <button
          onClick={handlePrev}
          disabled={isAnimating}
          className="p-3 bg-white/10 rounded-full hover:bg-white/20 disabled:opacity-50 transition"
        >
          <FiChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={handleNext}
          disabled={isAnimating}
          className="p-3 bg-white/10 rounded-full hover:bg-white/20 disabled:opacity-50 transition"
        >
          <FiChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
}