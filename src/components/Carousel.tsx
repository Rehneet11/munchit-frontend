import { useState } from "react";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: "Effortless Food Ordering",
    description: "Order your favorite meals from a wide variety of restaurants with just a few clicks.",
    icon: "🍔", // Replace with actual icons or images
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
    <div className="carousel-container mx-auto max-w-3xl p-8 text-center bg-gradient-to-r from-blue-500 to-purple-500 shadow-xl rounded-lg relative">
      <div className="overflow-hidden h-64 flex justify-center items-center">
        <div
          key={activeIndex}
          className="transition-transform transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            display: "flex",
          }}
        >
          {features.map((feature, index) => (
            <div key={index} className="w-full flex-shrink-0 flex flex-col items-center">
              <div className="text-7xl mb-6">{feature.icon}</div>
              <h2 className="text-4xl font-extrabold text-white">{feature.title}</h2>
              <p className="text-lg text-white mt-3">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="flex justify-between items-center mt-8">
        <button
          className="bg-white bg-opacity-20 hover:bg-opacity-40 transition-all duration-300 text-white text-2xl font-bold p-4 rounded-full shadow-lg"
          onClick={prevSlide}
        >
          ◀
        </button>
        <button
          className="bg-white bg-opacity-20 hover:bg-opacity-40 transition-all duration-300 text-white text-2xl font-bold p-4 rounded-full shadow-lg"
          onClick={nextSlide}
        >
          ▶
        </button>
      </div>

      {/* Carousel Dots */}
      <div className="flex justify-center mt-6 space-x-3">
        {features.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full transition-all duration-300 transform ${
              index === activeIndex ? "bg-white scale-125" : "bg-white bg-opacity-40"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
