"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Search, User, Menu, X } from "lucide-react";
import Logo from "@/components/ui/logo";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const categories = [
    "Kläder",
    "Kosmetika",
    "Elektronik",
    "Accessoarer",
    "Skor",
    "Parfym",
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = () => {
    console.log("Searching: ", searchTerm);
  };

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Navigation - Only on md and up */}
          <nav className="hidden md:flex gap-6 font-medium text-gray-700 select-none">
            {categories.map((cat) => (
              <a
                key={cat}
                href="#"
                className="hover:text-blue-600 transition"
                onClick={(e) => e.preventDefault()}
              >
                {cat}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2 w-full max-w-md md:max-w-xs lg:max-w-md justify-end">
            {/* Search input - only on md and up */}
            <div className="hidden md:flex flex-grow">
              <Input
                placeholder="Sök produkter..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <Button variant="outline" size="icon" onClick={handleSearch}>
                <Search className="h-4 w-4" />
              </Button>
            </div>

            {/* User icon - visible on all devices */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.push("/user")}
              aria-label="User profile"
            >
              <User className="h-5 w-5 text-gray-700" />
            </Button>

            {/* Cart icon - visible on all devices */}
            <Button variant="ghost" size="icon" aria-label="Shopping cart">
              <ShoppingCart className="h-5 w-5 text-blue-600" />
            </Button>

            {/* Hamburger menu - only on mobile */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6 text-gray-700" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hamburger Menu - Mobile full screen */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-6">
          <div className="flex justify-between items-center mb-8">
            <Logo />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-gray-700" />
            </Button>
          </div>

          <nav className="flex flex-col gap-6 text-xl font-semibold text-gray-800">
            {categories.map((cat) => (
              <a
                key={cat}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600 transition"
              >
                {cat}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
