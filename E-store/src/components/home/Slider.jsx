// components/Slider.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Beautiful Mountains",
    description: "Explore the beauty of nature with breathtaking mountain views.",
    image: "/mountain.jpg",
  },
  {
    id: 2,
    title: "Sunny Beach",
    description: "Relax on sandy beaches and enjoy the calming waves of the sea.",
    image: "/beach.jpg",
  },
  {
    id: 3,
    title: "City Nights",
    description: "Discover the vibrant nightlife and dazzling lights of the city.",
    image: "/city.jpg",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full flex transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Text Section */}
          <div className="w-1/2 flex flex-col justify-center px-10 bg-gray-900 text-white">
            <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
            <p className="text-lg">{slide.description}</p>
          </div>

          {/* Image Section */}
          <div className="w-1/2 relative">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow"
      >
        ▶
      </button>
    </div>
  );
}
