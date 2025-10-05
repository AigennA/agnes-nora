// components/MobileTabBar.tsx
"use client";

import Link from "next/link";

export default function MobileTabBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-md flex justify-around items-center h-14 md:hidden border-t">
      <Link href="/" className="flex flex-col items-center text-sm text-gray-700">
        🏠
        <span>Start</span>
      </Link>
      <Link href="/products" className="flex flex-col items-center text-sm text-gray-700">
        🛍️
        <span>Produkter</span>
      </Link>
      <Link href="/cart" className="flex flex-col items-center text-sm text-gray-700">
        🛒
        <span>Varukorg</span>
      </Link>
      <Link href="/account" className="flex flex-col items-center text-sm text-gray-700">
        👤
        <span>Konto</span>
      </Link>
    </div>
  );
}
