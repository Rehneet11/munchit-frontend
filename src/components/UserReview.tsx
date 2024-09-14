import { useState } from "react";

type UserReviewProps = {
  reviews: {
    id: number;
    name: string;
    rating: number;
    comment: string;
    avatar: string;
  }[];
};

const UserReview = ({ reviews }: UserReviewProps) => {
  const [currentReview, setCurrentReview] = useState(0);

  const handleNext = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const handlePrevious = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col items-center p-6 max-w-full mx-auto">
      {/* Review Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-red-600">What Our Customers Say</h2>
      </div>

      {/* Conditional Rendering Based on Screen Size */}
      <div className="block md:hidden w-full relative">
        {/* Smartphone View: Show Single Review with Animations */}
        <div
          key={reviews[currentReview].id}
          className="w-full bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform duration-500 ease-in-out transform animate-slide-in"
        >
          <div className="text-center flex flex-col items-center">
            {/* Avatar */}
            <img
              src={reviews[currentReview].avatar}
              alt={reviews[currentReview].name}
              className="w-16 h-16 rounded-full mb-4 border-2 border-amber-400"
            />
            {/* User Name */}
            <h3 className="text-lg font-semibold text-gray-900">
              {reviews[currentReview].name}
            </h3>
            {/* Rating */}
            <div className="flex items-center mt-2 mb-4">
              {Array.from({ length: reviews[currentReview].rating }).map(
                (_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 text-amber-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.317 4.055a1 1 0 00.95.691h4.261c.969 0 1.372 1.24.588 1.81l-3.449 2.5a1 1 0 00-.364 1.118l1.316 4.054c.299.921-.755 1.688-1.54 1.118l-3.448-2.5a1 1 0 00-1.176 0l-3.449 2.5c-.785.57-1.838-.197-1.54-1.118l1.316-4.054a1 1 0 00-.364-1.118l-3.449-2.5c-.784-.57-.38-1.81.588-1.81h4.261a1 1 0 00.95-.691l1.317-4.055z" />
                  </svg>
                )
              )}
            </div>
            {/* Comment */}
            <p className="text-sm text-gray-600 mb-6">
              {reviews[currentReview].comment}
            </p>
          </div>
        </div>

        {/* Navigation Buttons for Single Review (Smartphone) */}
        <div className="flex justify-between w-full mt-6">
          <button
            className="text-sm text-gray-600 hover:text-gray-800 transition"
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            className="text-sm text-gray-600 hover:text-gray-800 transition"
            onClick={handleNext}
          >
            Next
          </button>
        </div>

        {/* Slide Animation for Smartphones */}
        <style >{`
          @keyframes slide-in {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          .animate-slide-in {
            animation: slide-in 0.5s ease-in-out;
          }
        `}</style>
      </div>

      {/* Medium+ Devices: Grid Layout */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="relative w-full bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
          >
            <div className="text-center flex flex-col items-center">
              {/* Avatar */}
              <img
                src={review.avatar}
                alt={review.name}
                className="w-16 h-16 rounded-full mb-4 border-2 border-amber-400"
              />
              {/* User Name */}
              <h3 className="text-lg font-semibold text-gray-900">
                {review.name}
              </h3>
              {/* Rating */}
              <div className="flex items-center mt-2 mb-4">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 text-amber-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.317 4.055a1 1 0 00.95.691h4.261c.969 0 1.372 1.24.588 1.81l-3.449 2.5a1 1 0 00-.364 1.118l1.316 4.054c.299.921-.755 1.688-1.54 1.118l-3.448-2.5a1 1 0 00-1.176 0l-3.449 2.5c-.785.57-1.838-.197-1.54-1.118l1.316-4.054a1 1 0 00-.364-1.118l-3.449-2.5c-.784-.57-.38-1.81.588-1.81h4.261a1 1 0 00.95-.691l1.317-4.055z" />
                  </svg>
                ))}
              </div>
              {/* Comment */}
              <p className="text-sm text-gray-600 mb-6">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserReview;

