"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import HeroSlider from "@/components/ui/HeroSlider";
import MobileSearchBar from "@/components/ui/MobileSearchBar";
import CategoryScroll from "@/components/ui/CategoryScroll";
import MobileTabBar from "@/components/ui/MobileTabBar";

export default function HomePage() {
  const products = [
    {
      id: 1,
      name: "Blå T-shirt",
      description: "Bekväm och snygg T-shirt i bomull",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      name: "Röd läppstift",
      description: "Långvarigt läppstift med matt finish",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      name: "Solglasögon",
      description: "Trendiga solglasögon för sommarens alla dagar",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 4,
      name: "Jeansjacka",
      description: "Klassisk jeansjacka för alla tillfällen",
      image:
        "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 5,
      name: "Mascara",
      description: "Volymgivande mascara för dramatiska ögonfransar",
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 6,
      name: "Väska i läder",
      description: "Elegant läderväska med justerbar rem",
      image:
        "https://cdn.pixabay.com/photo/2016/11/23/18/12/bag-1854148_1280.jpg",
    },
    {
      id: 7,
      name: "Sportskor",
      description: "Lätta och bekväma skor för träning och vardag",
      image:
        "https://cdn.pixabay.com/photo/2018/07/23/06/45/sneaker-3556131_1280.jpg",
    },
    {
      id: 8,
      name: "Parfymflaska",
      description: "Fräsch och blommig doft för alla tillfällen",
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Laddar...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 relative">
      {/* Mobil Üst Menü: Arama ve Kategori */}
      <div className="md:hidden sticky top-0 z-40 bg-white">
        <MobileSearchBar />
        <CategoryScroll />
      </div>

      {/* Ana İçerik */}
      <main className="container mx-auto px-4 py-8 pb-28 flex-1">
        <HeroSlider />

        <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2 mt-10">
          ✨ Populära produkter
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map(({ id, name, description, image }) => (
            <div
              key={id}
              className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col"
            >
              <img
                src={image}
                alt={name}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h3 className="font-medium text-gray-900 mb-1">{name}</h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2 h-[40px]">
                {description}
              </p>
              <div className="mt-auto">
                <Button className="w-full">Lägg i kundvagn</Button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Mobil Alt Menü */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50">
        <MobileTabBar />
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-12 hidden md:block">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} AgnesNora. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
