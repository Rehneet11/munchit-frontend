import { useState } from "react";
import { ChevronRightCircle,ChevronLeftCircle } from "lucide-react";
interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: "Effortless Food Ordering",
    description: "Order your favorite meals from a wide variety of restaurants with just a few clicks.",
    icon: "🍔",
  },
  {
    title: "Secure Payment Integration",
    description: "Pay securely using Stripe integration, ensuring a seamless checkout process.",
    icon: "💳",
  },
  {
    title: "Personalized Recommendations",
    description: "Get personalized food recommendations based on your preferences and past orders.",
    icon: "🍽️",
  },
  {
    title: "Advanced Filtering Options",
    description: "Easily filter restaurants by cuisine, dietary preferences, and price range.",
    icon: "📊",
  },
  {
    title: "Real-Time Order Tracking",
    description: "Track your food orders in real-time and know exactly when your meal will arrive.",
    icon: "⏱️",
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? features.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === features.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel-container mx-auto max-w-full md:max-w-2xl p-4 md:p-8 text-center bg-gradient-to-r from-yellow-600 to-red-500 shadow-xl rounded-lg relative">
      <div className="overflow-hidden relative">
        <div
          className="transition-transform transform duration-500 ease-in-out w-full flex"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex flex-col items-center justify-center p-4 space-y-4 min-h-[300px] md:min-h-[400px]"
            >
              <div className="text-6xl">{feature.icon}</div>
              <h2 className="text-xl md:text-3xl font-extrabold text-white break-words">{feature.title}</h2>
              <p className="text-sm md:text-lg text-white break-words">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-4 md:bottom-8 left-0 right-0 flex justify-between items-center px-4 md:px-8">
        <button
          className="bg-white bg-opacity-30 hover:bg-opacity-50 transition-all duration-300 text-white text-2xl font-bold p-3 md:p-4 rounded-full shadow-lg"
          onClick={prevSlide}
        >
          <ChevronLeftCircle/>
        </button>
        <button
          className="bg-white bg-opacity-30 hover:bg-opacity-50 transition-all duration-300 text-white text-2xl font-bold p-3 md:p-4 rounded-full shadow-lg"
          onClick={nextSlide}
        >
          <ChevronRightCircle/>
        </button>
      </div>

      {/* Carousel Dots */}
      <div className="flex justify-center mt-4 md:mt-6 space-x-2 md:space-x-3">
        {features.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition-all duration-300 transform ${
              index === activeIndex ? "bg-white scale-110" : "bg-white bg-opacity-40"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

