import React, { useState } from "react";
import ProductCard from "./ProductCart";
import products from "../data/products.json";

const Product = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen">

      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 py-24 text-white text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold">Our Products</h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl opacity-90">
          Premium skincare crafted with care
        </p>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {products.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            No products available at the moment.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {products.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Product;
