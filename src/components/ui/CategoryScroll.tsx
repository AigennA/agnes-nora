// components/CategoryScroll.tsx
"use client";

export default function CategoryScroll() {
  const categories = [
    "Nyheter", "Vårens", "Smink", "Mat", "Teknik", "Hälsa", "Barn", "Rea"
  ];

  return (
    <div className="overflow-x-auto whitespace-nowrap px-4 py-2 bg-white border-b">
      <div className="inline-flex gap-3">
        {categories.map((cat, i) => (
          <button
            key={i}
            className="px-4 py-1 text-sm rounded-full border border-pink-500 text-pink-600 hover:bg-pink-100 transition"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
