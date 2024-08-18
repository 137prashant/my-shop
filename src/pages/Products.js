import React, { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";
import Product from "../components/Product";

const Products = (Products) => {
  const products = useContext(ProductsContext); // Accessing the products data from context

  const [searchQuery, setSearchQuery] = useState(""); // State for managing the search query input
  const [sortOrder, setSortOrder] = useState(""); // State for managing the selected sort order

  // Filtered products based on search query
  const filteredProducts = products.filter(
    (product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()) // Filtering products by title based on search query
  );

  // Sort products based on the selected order
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOrder === "lowToHigh") {
      return a.price - b.price; // Sort by price low to high
    } else if (sortOrder === "highToLow") {
      return b.price - a.price; // Sort by price high to low
    }
    return 0; // No sorting if no order selected
  });

  return (
    <div className="container mx-auto mt-28 mb-28">
      <div className="mb-4 flex sm:flex-row flex-col justify-between items-center">
        <div className="text-[25px] font-semibold">All Products</div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search products..."
            className="p-2 border border-gray-300 rounded w-full max-w-xs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Sort Dropdown */}
          <select
            className="p-2 border border-gray-300 rounded ml-4"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
