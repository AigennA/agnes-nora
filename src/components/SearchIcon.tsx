"use client";

import { useState, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";

interface SearchProps {
  /** Plats­hållar­text för sök­fältet */
  placeholder?: string;
  /** Callback som anropas när sök­termen ändras eller enter trycks */
  onSearch?: (term: string) => void;
  /** CSS-klasser för container-div:en */
  className?: string;
}

/**
 * En sök­komponent som hanterar sök­funktionalitet.
 * 
 * @example
 * ```tsx
 * <Search placeholder="Sök produkter..." onSearch={term => console.log(term)} />
 * ```
 */
export default function Search({
  placeholder = "Sök produkter...",
  onSearch,
  className,
}: SearchProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = useCallback(
    (term: string) => {
      setSearchTerm(term);
      // Valfritt: kan du kalla onSearch här om du vill realtidsökning
    },
    []
  );

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
        Sök
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
        aria-label="Sök"
      >
        <SearchIcon className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}
