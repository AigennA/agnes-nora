"use client";

import React, { useState } from "react";
import Search from "./ui/Search";  // burada ui klasöründen import ediyoruz

interface Product {
  id: number;
  name: string;
  description: string;
}

const allProducts: Product[] = [
  { id: 1, name: "Apple", description: "Fresh apple" },
  { id: 2, name: "Banana", description: "Ripe banana" },
  { id: 3, name: "Cherry", description: "Sweet cherry" },
];

export default function ProductList() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);

  const handleSearch = (term: string) => {
    if (!term) {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div>
      <Search onSearch={handleSearch} placeholder="Search products..." />

      <div>
        {filteredProducts.length === 0 && <p>No products found.</p>}
        {filteredProducts.map((product) => (
          <div key={product.id} className="mb-3">
            <h3 className="font-semibold">{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
