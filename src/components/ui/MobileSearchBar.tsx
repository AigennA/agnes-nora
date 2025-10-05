"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";

export default function MobileSearchBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden px-4 py-2 sticky top-0 z-50 bg-white shadow">
      {!isOpen ? (
        <button
          aria-label="Arama Aç"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 text-gray-600"
        >
          <Search className="w-5 h-5 text-pink-600" />
          <span className="text-sm font-medium">Ara</span>
        </button>
      ) : (
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Ürün ara..."
            className="flex-grow border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
          />
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Arama Kapat"
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
