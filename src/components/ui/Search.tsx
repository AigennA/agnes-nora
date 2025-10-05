"use client";

import { useState, useCallback } from "react";
import { Input } from "@/components/ui/input";  // senin UI input bileşenin
import { Search as SearchIcon } from "lucide-react";

interface SearchProps {
  placeholder?: string;
  onSearch?: (term: string) => void;
  className?: string;
}

export default function Search({
  placeholder = "Search products...",
  onSearch,
  className,
}: SearchProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        onSearch?.(searchTerm.trim());
      }
    },
    [onSearch, searchTerm]
  );

  const handleSearchClick = useCallback(() => {
    onSearch?.(searchTerm.trim());
  }, [onSearch, searchTerm]);

  return (
    <div className={`relative flex flex-1 flex-shrink-0 ${className || ""}`}>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <Input
        id="search"
        type="text"
        value={searchTerm}
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
      />
      <button
        type="button"
        onClick={handleSearchClick}
        className="absolute left-1 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-gray-900"
        aria-label="Search"
      >
        <SearchIcon className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}
