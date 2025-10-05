import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    title: "Vårens kollektion",
    subtitle: "Upptäck nyheterna för säsongen",
  },
  {
    id: 2,
    image:
      "https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082_1280.jpg",
    title: "Sommarrea",
    subtitle: "Fynda med upp till 50% rabatt",
  },
  {
    id: 3,
    image:
      "https://cdn.pixabay.com/photo/2024/10/01/02/09/cosmetics-9086984_1280.jpg",
    title: "Ny teknik i butiken",
    subtitle: "Senaste prylarna till bästa pris",
  },
  
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const { image, title, subtitle } = slides[currentIndex];

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-xl shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-opacity duration-1000"
      />
      <div className="absolute bottom-10 left-10 text-white bg-black bg-opacity-50 p-4 rounded">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="mt-1">{subtitle}</p>
      </div>
    </div>
  );
}
