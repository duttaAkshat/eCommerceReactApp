// SearchResults.js
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Product from "./Product";

const SearchResults = ({ products }) => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Get the search query from the URL
    const query = new URLSearchParams(location.search).get("q");
    setSearchQuery(query || "");
  }, [location.search]);

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Search Results for "{searchQuery}"</h2>
      <div>
        {filteredProducts.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            rating={product.rating}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
